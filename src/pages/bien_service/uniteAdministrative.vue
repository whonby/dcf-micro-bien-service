<template>
  <div>

    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide taillemodal">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Unite administrative</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
              <td>
              <div class="control-group">
                <label class="control-label">type_service:</label>
                <div class="controls">
                  <select v-model="formData.type_service" >
                    <option value>Sélectionner</option>
                    <option></option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              
              <div class="control-group">
                <label class="control-label">service_principale</label>
                <div class="controls">
                  <select v-model="formData.service_principale" >
                    <option value>Sélectionner</option>
                    <option></option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              
              <div class="control-group">
                <label class="control-label">groupe_de_service</label>
                <div class="controls">
                  <select v-model="formData.groupe_de_service" >
                    <option value>Sélectionner</option>
                    <option></option>
                  </select>
                </div>
              </div>
            </td>

           
          </tr>
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">numero_ordre</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData.numero_ordre"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
            

          </tr>
         
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterStockLocal(formData)"
          class="btn btn-primary"
          href="#"
           
        >Valider</a> 
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->

    <!--///////////////////////////////////////// debut modal de modification //////////////////////////////-->

    <div id="modificationModal" class="modal hide taillemodal">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Unite administrative</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
           <tr>
              <td>
              <div class="control-group">
                <label class="control-label">type_service:</label>
                <div class="controls">
                  <select v-model="editua.type_service" >
                    <option value>Sélectionner</option>
                    <option></option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              
              <div class="control-group">
                <label class="control-label">service_principale</label>
                <div class="controls">
                  <select v-model="editua.service_principale" >
                    <option value>Sélectionner</option>
                    <option></option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              
              <div class="control-group">
                <label class="control-label">groupe_de_service</label>
                <div class="controls">
                  <select v-model="editua.groupe_de_service" >
                    <option value>Sélectionner</option>
                    <option></option>
                  </select>
                </div>
              </div>
            </td>

           
          </tr>
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">numero_ordre</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="editua.numero_ordre"
                    class="span"
                    
                  />
                </div>
              </div>
              
            
            

          </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a class="btn btn-primary" @click.prevent="modifierStockLocal(editua)">Modifier</a>
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
            title="Liste de demandes d'immobilisation "
            :data="trieUaImmobilisation"
            name="Liste de demandes d'immobilisation"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel> -->
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>liste unite administrative</h5>
              <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding" >
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    
                     <th>type_service</th> 
                     <th>service_principale</th>
                    <th>groupe_de_service</th>
                    <th>numero_ordre</th>
                   
                   
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                    
                </tbody>
              </table>
            </div>
           
          </div>
        </div>
      </div>
    </div>

    <fab :actions="fabActions" @cache="afficherModalAjouterStock" main-icon="apps" bg-color="green"></fab>
    <notifications  />
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
     <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterStock()">Open</button>
  </div>
</template>
  
<script>
 import { mapGetters, mapActions } from "vuex";
// import moment from "moment";
// import { formatageSomme } from "../../../Repositories/Repository";

export default {
  name: 'compte',
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
// json_fields: {
//         TYPE_UNITE_ADMINISTRATIVE: "typeUniteAdmin.libelle",
//         UNITE_ADMINISTRATIVE: "uniteAdminist.libelle",
//         DESIGNATION: "famille.libelle",
//         QUANTITE: "quantite",
//         PRIX_UNITAIRE: "prix_unitaire",
//         MONTANT_TOTAL: "montant_total",
//          DATE_DE_DEMANDE: "date_jour",
//       },

      formData: {
       
        
       
      },
      editCompte: {
       
      },
      search: ""
    };
  },
// created() {
//     this.formData = this.filtre_Stock.find(
//       Stock => Stock.id == this.$route.params.id
//     )
// },
  computed: {
     ...mapGetters("bienService", [
   
     
     ]),
    // ...mapGetters("uniteadministrative", ["uniteAdministratives"]),
    // ...mapGetters("parametreGenerauxAdministratif", ["type_Unite_admins"]),


    


   
  },
  methods: {
     ...mapActions("bienService", [
    //   "getAllStock",
    //   "ajouterStock",
    //   "modifierStock",
    //   "supprimerStock"
     ]),
    // formatageSomme: formatageSomme,

    //afiicher modal ajouter
    afficherModalAjouterStock() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
       // afficher modal de modification
    

    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    
    ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>
<style scoped>
.taillemodal {
  width: 800px;
  margin: 0 -380px;
}
.sommecolor{
  background-color: red;
  color:red;
  font-size: 120%;
  text-align: center;
  font-weight:bold;
}
</style>
