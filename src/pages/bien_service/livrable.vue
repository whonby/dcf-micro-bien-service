<template>
  <div>

    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide taillemodal">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Livrable</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
              <td>
              <div class="control-group">
                <label class="control-label">zone_geographique</label>
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
                <label class="control-label">type_livrable</label>
                <div class="controls">
                  <select v-model="formData.type_livrable" >
                    <option value>Sélectionner</option>
                    <option></option>
                  </select>
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">libelle_livrable</label>
                <div class="controls">
                  <select v-model="formData.libelle_livrable">
                    <option></option>
                    
                  </select>
                </div>
              </div>
            </td>

           
          </tr>
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">date_livraison</label>
                <div class="controls">
                  <input
                    type="date"
                    
                   v-model="formData.date_livraison"
                    class="span"
                    
                  />
                </div>
              </div>
              </td>
              <td>
              <div class="control-group">
                <label class="control-label">imputation_budgetaire</label>
                <div class="controls">
                  <select v-model="formData.imputation_budgetaire">
                    <option></option>
                    
                  </select>
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">district</label>
                <div class="controls">
                  <select v-model="formData.district">
                    <option></option>
                    
                  </select>
                </div>
              </div>
            </td>
            
            

          </tr>
          <tr>
               <td>
              <div class="control-group">
                <label class="control-label">departement</label>
                <div class="controls">
                  <select v-model="formData.departement">
                    <option></option>
                    
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">localite</label>
                <div class="controls">
                  <select v-model="formData.localite">
                    <option></option>
                    
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">commune</label>
                <div class="controls">
                  <select v-model="formData.commune">
                    <option></option>
                    
                  </select>
                </div>
              </div>
            </td>
            
            
           
                 
          </tr>
          <tr>
         <td>
              <div class="control-group">
                <label class="control-label">village</label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="formData.village"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
           <td>
              <div class="control-group">
                <label class="control-label">sous_prefecture</label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="formData.sous_prefecture"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">beneficiaire</label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="formData.beneficiaire"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
                 
          </tr>
           <tr>
         <td>
              <div class="control-group">
                <label class="control-label">quantite</label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="formData.quantite"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
           <td>
              <div class="control-group">
                <label class="control-label">montant</label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="formData.montant"
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
        <h3>Modifier Livrable</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
        <tr>
              <td>
              <div class="control-group">
                <label class="control-label">zone_geographique</label>
                <div class="controls">
                  <select v-model="editLivrable.id_zone_geographique" >
                    <option value>Sélectionner</option>
                    <option></option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              
              <div class="control-group">
                <label class="control-label">type_livrable</label>
                <div class="controls">
                  <select v-model="editLivrable.type_livrable" >
                    <option value>Sélectionner</option>
                    <option></option>
                  </select>
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">libelle_livrable</label>
                <div class="controls">
                  <select v-model="editLivrable.libelle_livrable">
                    <option></option>
                    
                  </select>
                </div>
              </div>
            </td>

           
          </tr>
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">date_livraison</label>
                <div class="controls">
                  <input
                    type="date"
                    
                   v-model="editLivrable.date_livraison"
                    class="span"
                    
                  />
                </div>
              </div>
              </td>
              <td>
              <div class="control-group">
                <label class="control-label">imputation_budgetaire</label>
                <div class="controls">
                  <select v-model="editLivrable.imputation_budgetaire">
                    <option></option>
                    
                  </select>
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">district</label>
                <div class="controls">
                  <select v-model="editLivrable.district">
                    <option></option>
                    
                  </select>
                </div>
              </div>
            </td>
            
            

          </tr>
          <tr>
               <td>
              <div class="control-group">
                <label class="control-label">departement</label>
                <div class="controls">
                  <select v-model="editLivrable.departement">
                    <option></option>
                    
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">localite</label>
                <div class="controls">
                  <select v-model="editLivrable.localite">
                    <option></option>
                    
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">commune</label>
                <div class="controls">
                  <select v-model="editLivrable.commune">
                    <option></option>
                    
                  </select>
                </div>
              </div>
            </td>
            
            
           
                 
          </tr>
          <tr>
         <td>
              <div class="control-group">
                <label class="control-label">village</label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="editLivrable.village"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
           <td>
              <div class="control-group">
                <label class="control-label">sous_prefecture</label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="editLivrable.sous_prefecture"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">beneficiaire</label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="editLivrable.beneficiaire"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
                 
          </tr>
           <tr>
         <td>
              <div class="control-group">
                <label class="control-label">quantite</label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="editLivrable.quantite"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
           <td>
              <div class="control-group">
                <label class="control-label">montant</label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="editLivrable.montant"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
           
                 
          </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a class="btn btn-primary" @click.prevent="modifierStockLocal(editLivrable)">Modifier</a>
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
              <h5>listes livrables</h5>
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
                     <th>libelle_livrable</th>
                    <th>type_livrable</th>
                    <th>date_livraison</th>
                    <th>imputation_budgetaire</th>
                     <th>district</th>
                    <th>departement</th>
                    <th>localite</th>
                    <th>commune</th>
                     
                    <th>village</th>
                     <th>sous_prefecture</th>
                     
                    <th>beneficiaire</th>
                     <th>quantite</th>
                   <th>montant</th>
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
    

    // formaterDate(date) {
    //   return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    // },
    
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
