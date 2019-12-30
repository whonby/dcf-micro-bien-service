<template>
  <div>

    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide taillemodal">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Unite Zone</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
              <td>
              <div class="control-group">
                <label class="control-label">zone_geographique:</label>
                <div class="controls">
                  <select v-model="formData.id_zone_geographique" >
                    <option value>Sélectionner</option>
                    <option></option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              
              <div class="control-group">
                <label class="control-label">unite_administrative</label>
                <div class="controls">
                  <select v-model="formData.id_unite_administrative" >
                    <option value>Sélectionner</option>
                    <option></option>
                  </select>
                </div>
              </div>
            </td>
           <td>
              <div class="control-group">
                <label class="control-label">longitude</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData.longitude"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>

           
          </tr>
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">latitude</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData.latitude"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">telephone_cel</label>
                <div class="controls">
                  <input
                    type="number"
                    
                   v-model="formData.telephone_cel"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">adresse_postale</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData.adresse_postale"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
            

          </tr>
         <tr>
            <td>
              <div class="control-group">
                <label class="control-label">telephone_fixe</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData.telephone_fixe"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">description_localisation</label>
                <div class="controls">
                  <input
                    type="number"
                    
                   v-model="formData.description_localisation"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">quartier</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData.quartier"
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
        <h3>Modifier Unite zone</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
           <tr>
              <td>
              <div class="control-group">
                <label class="control-label">zone_geographique:</label>
                <div class="controls">
                  <select v-model="editunitezone.id_zone_geographique" >
                    <option value>Sélectionner</option>
                    <option></option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              
              <div class="control-group">
                <label class="control-label">unite_administrative</label>
                <div class="controls">
                  <select v-model="editunitezone.id_unite_administrative" >
                    <option value>Sélectionner</option>
                    <option></option>
                  </select>
                </div>
              </div>
            </td>
           <td>
              <div class="control-group">
                <label class="control-label">longitude</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="editunitezone.longitude"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>

           
          </tr>
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">latitude</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="editunitezone.latitude"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">telephone_cel</label>
                <div class="controls">
                  <input
                    type="number"
                    
                   v-model="editunitezone.telephone_cel"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">adresse_postale</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="editunitezone.adresse_postale"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
            

          </tr>
         <tr>
            <td>
              <div class="control-group">
                <label class="control-label">telephone_fixe</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="editunitezone.telephone_fixe"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">description_localisation</label>
                <div class="controls">
                  <input
                    type="number"
                    
                   v-model="editunitezone.description_localisation"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">quartier</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="editunitezone.quartier"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
            

          </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a class="btn btn-primary" @click.prevent="modifierStockLocal(editunitezone)">Modifier</a>
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
              <h5>liste unite zone</h5>
              <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding" >
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    
                     <th>zone_geographique</th> 
                     <th>unite_administrative</th>
                    <th>longitude</th>
                    <th>latitude</th>
                      <th>telephone_cel</th> 
                     <th>adresse_postale</th>
                    <th>telephone_fixe</th>
                    <th>description_localisation</th>
                   <th>quartier</th>
                   
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
// import { mapGetters, mapActions } from "vuex";
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
    // ...mapGetters("SuiviImmobilisation", [
   
     
    // ]),
    // ...mapGetters("uniteadministrative", ["uniteAdministratives"]),
    // ...mapGetters("parametreGenerauxAdministratif", ["type_Unite_admins"]),


    


   
  },
  methods: {
    // ...mapActions("SuiviImmobilisation", [
    //   "getAllStock",
    //   "ajouterStock",
    //   "modifierStock",
    //   "supprimerStock"
    // ]),
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
