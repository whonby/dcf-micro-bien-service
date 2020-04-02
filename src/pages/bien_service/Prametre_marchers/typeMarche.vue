
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter type marche</h3>
      </div>
      <div class="modal-body">
       <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">libelle</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.libelle"
                class="span"
                placeholder="Saisir le libelle_type"
              />
            </div>
          </div>
         
         <div class="control-group">
            <label class="control-label">Code</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.code_type_marche"
                class="span"
                placeholder="code_type_marche"
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
        <h3>Modifier Type marche</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
            <div class="control-group">
            <label class="control-label">libelle</label>
            <div class="controls">
              <input
                type="text"
                v-model="editTypeProcedure.libelle"
                class="span"
                placeholder="Saisir le libelle_type"
              />
            </div>
          </div>
           
           <div class="control-group">
            <label class="control-label">Code</label>
            <div class="controls">
              <input
                type="text"
                v-model="editTypeProcedure.code_type_marche"
                class="span"
                placeholder=""
             readonly />
            </div>
          </div>
       

         
         
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierModalTypeAnalyseLocal(editTypeProcedure)"
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
              <h5>Liste type marche</h5>
              <div align="right">
                Search:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>libelle</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(typeProcedure, index) in 
                typeProcedureFiltre"
                 :key="typeProcedure.id">
                 <td @dblclick="afficherModalModifiertextJuridique(index)">
                   {{typeProcedure.libelle || 'Non renseigné'}}</td>
                  
                  


                     <div class="btn-group">
              <button @click.prevent="supprimerTypeMarche(typeProcedure.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
            </div>

                       </tr>
                </tbody>
              </table>
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <fab :actions="fabActions" @cache="afficherModalTypeProcedure" main-icon="apps" bg-color="green"></fab>
 <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalTypeProcedure()">Open</button>
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
            code_type_marche:""
            

        
      },
      editTypeProcedure: {
           libelle:"",
           code_type_marche:""
            
      },
      search: ""
    };
  },

  computed: {
     ...mapGetters("bienService", ['typeMarches']),

    typeProcedureFiltre()  {
     
        const searchTerm = this.search.toLowerCase();

return this.typeMarches.filter((item) => {
  
     return item.libelle.toLowerCase().includes(searchTerm) 
     
    

  
  

   }
)
    }
  },
  methods: {
    ...mapActions("bienService", ['ajouterTypeMarche','modifierTypeMarche',
    'supprimerTypeMarche'
     
    ]),
    //afiicher modal ajouter
    afficherModalTypeProcedure() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterModalTypeAnalyseLocal(){
this.ajouterTypeMarche(this.formData)
this.formData = {
  libelle:"",
  code_type_marche:""
}

    },
    
    // afficher modal de modification
    afficherModalModifiertextJuridique(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editTypeProcedure = this.typeMarches[index];
    },
    // fonction pour vider l'input modification
    modifierModalTypeAnalyseLocal(){
      this.modifierTypeMarche(this.editTypeProcedure)
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

