<template>
  <div>

    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide taillemodal">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Acte Depense</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
              <td>
              <div class="control-group">
                <label class="control-label">Matricule</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData.matricule"
                    class="span"
                    
                  />
                </div>
              </div>
               </td>
            <td>
              
              <div class="control-group">
                <label class="control-label">type_acte_depense</label>
                <div class="controls">
                  <select v-model="formData.type_acte_depense" >
                    <option value>Sélectionner</option>
                    <option></option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Montant</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData.montant"
                    class="span"
                    
                  />
                </div>
              </div>
               </td>

           
          </tr>
          <tr>
             <td>
              <div class="control-group">
                <label class="control-label">Dotation Budgétaire</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData.dotation_budgetaire"
                    class="span"
                    
                  />
                </div>
              </div>
               </td>
              <td>
              <div class="control-group">
                <label class="control-label">engagement_anterieur</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData.engagement_anterieur"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">engagement_actuel</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData.engagement_actuel"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            
            

          </tr>
          <tr>
               <td>
              <div class="control-group">
                <label class="control-label">engagement_cumulé</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData.engagement_cumule"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">disponible_budgétaire</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData.disponible_budgetaire"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">objet_depense</label>
                <div class="controls">
                  <input
                    type="text"
                    v-model="formData.objet_depense"
                   
                    class="span"
                   
                  />
                </div>
              </div>
             
            </td>
            
            
           
                 
          </tr>
          <tr>
         <td>
              <div class="control-group">
                <label class="control-label">ligne_budgetaire</label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="formData.ligne_budgetaire"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
           <td>
              
              <div class="control-group">
                <label class="control-label">Type de procedure</label>
                <div class="controls">
                  <select v-model="formData.Type_de_procedure" >
                    <option value>Sélectionner</option>
                    <option></option>
                  </select>
                </div>
              </div>
            </td>
                 
          </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterActeDepenseLocal"
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
        <h3>Modifier Acte depense</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
              <td>
              <div class="control-group">
                <label class="control-label">Matricule</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="editActeDepense.matricule"
                    class="span"
                    
                  />
                </div>
              </div>
               </td>
            <td>
              
              <div class="control-group">
                <label class="control-label">type_acte_depense</label>
                <div class="controls">
                  <select v-model="editActeDepense.type_acte_depense" >
                    <option value>Sélectionner</option>
                    <option></option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Montant</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="editActeDepense.montant"
                    class="span"
                    
                  />
                </div>
              </div>
               </td>

           
          </tr>
          <tr>
             <td>
              <div class="control-group">
                <label class="control-label">Dotation Budgétaire</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="editActeDepense.dotation_budgetaire"
                    class="span"
                    
                  />
                </div>
              </div>
               </td>
              <td>
              <div class="control-group">
                <label class="control-label">engagement_anterieur</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="editActeDepense.engagement_anterieur"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">engagement_actuel</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="editActeDepense.engagement_actuel"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            
            

          </tr>
          <tr>
               <td>
              <div class="control-group">
                <label class="control-label">engagement_cumule</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="editActeDepense.engagement_cumule"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">disponible_budgetaire</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="editActeDepense.disponible_budgetaire"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">objet_depense</label>
                <div class="controls">
                  <input
                    type="text"
                    v-model="editActeDepense.objet_depense"
                   
                    class="span"
                   
                  />
                </div>
              </div>
             
            </td>
            
            
           
                 
          </tr>
          <tr>
         <td>
              <div class="control-group">
                <label class="control-label">ligne_budgetaire</label>
                <div class="controls">
                  <input
                    type="number"
                    v-model="editActeDepense.ligne_budgetaire"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
           <td>
              
              <div class="control-group">
                <label class="control-label">Type de procedure</label>
                <div class="controls">
                  <select v-model="editActeDepense.Type_de_procedure" >
                    <option value>Sélectionner</option>
                    <option></option>
                  </select>
                </div>
              </div>
            </td>
                 
          </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a class="btn btn-primary" @click.prevent="modifierActeDepenseLocal(editActeDepense)">Modifier</a>
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
              <h5>liste des actes de depenses</h5>
              <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding" >
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    
                     <th>matricule</th> 
                     <th>type_acte_depense</th>
                    <th>montant</th>
                    <th>dotation_budgetaire</th>
                    <th>engagement_anterieur</th>
                     <th>engagement_actuel</th>
                    <th>engagement_cumule</th>
                    <th>disponible_budgetaire</th>
                    <th>numero_agence</th>
                     
                    <th>objet_depense</th>
                    <th>ligne_budgetaire</th>
                    <th>Type de procedure</th>
                   
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                <tr class="odd gradeX" v-for="(acteDepense, index) in acteDepense"
                 :key="acteDepense.id">
                 <td @dblclick="afficherModalModifierActeDepense(index)">
                   {{acteDepense.matricule || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierActeDepense(index)">
                   {{acteDepense.relation.type_acte_depense || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierActeDepense(index)">
                   {{acteDepense.matricule || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierActeDepense(index)">
                   {{acteDepense.matricule || 'Non renseigné'}}</td>
                     <div class="btn-group">
              <button @click.prevent="supprimerActeDepense(acteDepense.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i>Supprimer</span></button>
             
            </div>

                       </tr>
                </tbody>
              </table>
            </div>
           
          </div>
        </div>
      </div>
    </div>

    <fab :actions="fabActions" @cache="afficherModalAjouterActeDepense" main-icon="apps" bg-color="green"></fab>
    <notifications  />
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
     <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterActeDepense()">Open</button>
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
       matricule:"",
       id_type_acte_depense:"",
       montant:"",
       dotation_budgetaire:"",
       engagement_anterieur:"",
       engagement_actuel:"",
       engagement_cumule:"",
       disponible_budgetaire:"",
       objet_depense:"",
       ligne_budgetaire:"",
       Type_de_procedure:""
        
       
      },
      editActeDepense: {
         matricule:"",
       id_type_acte_depense:"",
       montant:"",
       dotation_budgetaire:"",
       engagement_anterieur:"",
       engagement_actuel:"",
       engagement_cumule:"",
       disponible_budgetaire:"",
       objet_depense:"",
       ligne_budgetaire:"",
       Type_de_procedure:""
       
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
     ...mapGetters("bienService", [ 'acteDepense']),

//             acteDepenseFiltre(){

//      const searchTerm = this.search.toLowerCase();

// return this.acteDepense.filter((item) => {
  
//      return item.matricule.toLowerCase().includes(searchTerm) 
    

  
  

//    }
// )
//    }
   
     
   
    


   
  },
  methods: {
     ...mapActions("bienService", ['ajouterActeDepense','modifierActeDepense',
     'supprimerActeDepense'

    //   "getAllStock",
    //   "ajouterStock",
    //   "modifierStock",
    //   "supprimerStock"
     ]),
    // formatageSomme: formatageSomme,

    //afiicher modal ajouter
    afficherModalAjouterActeDepense() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
ajouterActeDepenseLocal(){
  this.ajouterActeDepense(this.formData)
  this.formData = {
     matricule:"",
       id_type_acte_depense:"",
       montant:"",
       dotation_budgetaire:"",
       engagement_anterieur:"",
       engagement_actuel:"",
       engagement_cumule:"",
       disponible_budgetaire:"",
       objet_depense:"",
       ligne_budgetaire:"",
       Type_de_procedure:""

  }
},



       // afficher modal de modification

       afficherModalModifierActeDepense(index){
 
 this.$('#modificationModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editActeDepense = this.acteDepense[index];
},
    

    modifierActeDepenseLocal(){
      this.modifierActeDepense(this.editActeDepense)
      this.$('#modificationModal').modal('hide');
    },


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
