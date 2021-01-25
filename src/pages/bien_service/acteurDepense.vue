<template>
  <div>

    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide taillemodal">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Acteur Depense</h3>
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
                <label class="control-label">fonction</label>
                <div class="controls">
                  <select v-model="formData.id_fonction" >
                    <option value>Sélectionner</option>
                    <option></option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">nom</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData.nom"
                    class="span"
                    
                  />
                </div>
              </div>
               </td>

           
          </tr>
          <tr>
             <td>
              <div class="control-group">
                <label class="control-label">prenoms</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData.prenoms"
                    class="span"
                    
                  />
                </div>
              </div>
               </td>
              <td>
              <div class="control-group">
                <label class="control-label">date_naissance</label>
                <div class="controls">
                  <input
                    type="date"
                    
                   v-model="formData.date_naissance"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">grade</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData.grade"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            
            

          </tr>
          <tr>
               <td>
              <div class="control-group">
                <label class="control-label">emploi</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData.emploi"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              
              <div class="control-group">
                <label class="control-label">situation_matrimoniale</label>
                <div class="controls">
                  <select v-model="formData.situation_matrimoniale" >
                    <option value>Sélectionner</option>
                    <option></option>
                  </select>
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">date_premier_service</label>
                <div class="controls">
                  <input
                    type="date"
                    v-model="formData.date_premier_service"
                   
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
          @click.prevent="ajouterActeurDepenseLocal"
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
        <h3>Modifier Acteur depense</h3>
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
                    
                   v-model="editActeurDepense.matricule"
                    class="span"
                    
                  />
                </div>
              </div>
               </td>
            <td>
              
              <div class="control-group">
                <label class="control-label">fonction</label>
                <div class="controls">
                  <select v-model="editActeurDepense.id_fonction" >
                    <option value>Sélectionner</option>
                    <option></option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">nom</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="editActeurDepense.nom"
                    class="span"
                    
                  />
                </div>
              </div>
               </td>

           
          </tr>
          <tr>
             <td>
              <div class="control-group">
                <label class="control-label">prenoms</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="editActeurDepense.prenoms"
                    class="span"
                    
                  />
                </div>
              </div>
               </td>
              <td>
              <div class="control-group">
                <label class="control-label">date_naissance</label>
                <div class="controls">
                  <input
                    type="date"
                    
                   v-model="editActeurDepense.date_naissance"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">grade</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="editActeurDepense.grade"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            
            

          </tr>
          <tr>
               <td>
              <div class="control-group">
                <label class="control-label">emploi</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="editActeurDepense.emploi"
                    class="span"
                    
                  />
                </div>
              </div>
            </td>
            <td>
              
              <div class="control-group">
                <label class="control-label">situation_matrimoniale</label>
                <div class="controls">
                  <select v-model="editActeurDepense.situation_matrimoniale" >
                    <option value>Sélectionner</option>
                    <option></option>
                  </select>
                </div>
              </div>
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">date_premier_service</label>
                <div class="controls">
                  <input
                    type="date"
                    v-model="editActeurDepense.date_premier_service"
                   
                    class="span"
                   
                  />
                </div>
              </div>
             
            </td>
            
            
           
                 
          </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a class="btn btn-primary" @click.prevent="modifierActeDepenseLocal(editActeurDepense)">Modifier</a>
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
              <h5>liste des acteurs de depenses</h5>
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
                     <th>fonction</th>
                    <th>nom</th>
                    <th>prenoms</th>
                    <th>date_naissance</th>
                     <th>grade</th>
                    <th>emploi</th>
                    <th>situation_matrimoniale</th>
                    <th>date_premier_service</th>
        
                   
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                           <tr class="odd gradeX" v-for="(acteurDepense, index) in 
                acteurDepenseFiltre"
                 :key="acteurDepense.id">
                 <td @dblclick="afficherModalModifierActeDepense(index)">
                   {{acteurDepense.id_fonction || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierActeDepense(index)">
                   {{acteurDepense.nom|| 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierActeDepense(index)">
                   {{acteurDepense.prenom || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierActeDepense(index)">
                   {{acteurDepense.date_naissance || 'Non renseigné'}}</td>

                      <td @dblclick="afficherModalModifierActeDepense(index)">
                   {{acteurDepense.grade|| 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierActeDepense(index)">
                   {{acteurDepense.emploi || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierActeDepense(index)">
                   {{acteurDepense.situation_matrimoniale || 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierActeDepense(index)">
                   {{acteurDepense.date_premier_service || 'Non renseigné'}}</td>



                     <div class="btn-group">
              <button @click.prevent="supprimerActeurDepense(acteurDepense.id)"  class="btn btn-danger ">
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

    <fab :actions="fabActions" @cache="afficherModalAjouterActeurDepense" main-icon="apps" bg-color="green"></fab>
    <notifications  />
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
     <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterActeurDepense()">Open</button>
  </div>
</template>
  
<script>
 import { mapGetters, mapActions } from "vuex";
 import moment from "moment";
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
       id_fonction:"",
       nom:"",
       prenom:"",
       date_naissance:"",
       grade:"",
       emploi:"",
       situation_matrimoniale:"",
       date_premier_service:""
        
       
      },
      editActeurDepense: {
         id_fonction:"",
       nom:"",
       prenom:"",
       date_naissance:"",
       grade:"",
       emploi:"",
       situation_matrimoniale:"",
       date_premier_service:""
       
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
     ...mapGetters("bienService", ['acteurDepenses',
   
     
     ]),

acteurDepenseFiltre(){
  const searchTerm = this.search.toLowerCase();
      return this.acteurDepenses.filter((item) => {
  
     return item.nom.toLowerCase().includes(searchTerm) ||

    item.prenom.toLowerCase().includes(searchTerm)

  
  

   }
)
}   
    // ...mapGetters("uniteadministrative", ["uniteAdministratives"]),
    // ...mapGetters("parametreGenerauxAdministratif", ["type_Unite_admins"]),


    


   
  },


  
  methods: {
     ...mapActions("bienService", ['ajouterActeurDepense','modifierActeurDepense',
     'supprimerActeurDepense'

    //   "getAllStock",
    //   "ajouterStock",
    //   "modifierStock",
    //   "supprimerStock"
     ]),
    // formatageSomme: formatageSomme,

    //afiicher modal ajouter
    afficherModalAjouterActeurDepense() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter

    ajouterActeurDepenseLocal(){
      this.ajouterActeurDepense(this.formData)
      this.formData = {
           id_fonction:"",
       nom:"",
       prenom:"",
       date_naissance:"",
       grade:"",
       emploi:"",
       situation_matrimoniale:"",
       date_premier_service:""

      }
    },
       // afficher modal de modification

       afficherModalModifierActeurDepense(index){
        this.$('#modificationModal').modal({
          backdrop:'static',
          keyboard:false
        });
        this.editActeurDepense = this.acteurDepenses[index]
       },
    
    modifierActeDepenseLocal(){
      this.modifierActeurDepense(this.editActeurDepense)
      this.$('#modificationModal').modal('hide');
    },

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
