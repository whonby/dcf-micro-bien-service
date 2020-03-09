<template>
  <div>

    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide taillemodal">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Acte effet financier</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
              <td>
              <div class="control-group">
                <label class="control-label">Acte effet financier:</label>
                <div class="controls">
                  <select v-model="formData.id_type_acte_effet_fin" >
                    <option value>Sélectionner</option>
                    <option></option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              
              <div class="control-group">
                <label class="control-label">texte</label>
                <div class="controls">
                  <select v-model="formData.id_texte" >
                    <option value>Sélectionner</option>
                    <option></option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">code_acte</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData.code_acte"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>

           
          </tr>
          <tr>
              <td>
              <div class="control-group">
                <label class="control-label">libelle_acte</label>
                <div class="controls">
                  <input
                    type="date"
                    
                   v-model="formData.libelle_acte"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
               <td>
              <div class="control-group">
                <label class="control-label">reference_acte</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData.reference_acte"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">objet_acte</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData.objet_acte"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
            

          </tr>
         <tr>
               <td>
              <div class="control-group">
                <label class="control-label">incidence_financiere</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData.incidence_financiere"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
         </tr>
         <tr>
              <td>
              <div class="control-group">
                <label class="control-label">montant_acte</label>
                <div class="controls">
                  <input
                    type="number"
                    
                   v-model="formData.montant_acte"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
               <td>
              <div class="control-group">
                <label class="control-label">type_doc_modifie</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData.type_doc_modifie"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">livrables</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData.livrables"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
            

          </tr>
         <!-- <tr>
               <td>
              <div class="control-group">
                <label class="control-label">incidence_financiere</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="formData.incidence_financiere"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
         </tr> -->
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterModalAjouterLocal"
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
        <h3>Modifier Acte effet financier</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
             <tr>
              <td>
              <div class="control-group">
                <label class="control-label">Acte effet financier:</label>
                <div class="controls">
                  <select v-model="editActeEffetFinancier.id_type_acte_effet_fin" >
                    <option value>Sélectionner</option>
                    <option></option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              
              <div class="control-group">
                <label class="control-label">texte</label>
                <div class="controls">
                  <select v-model="editActeEffetFinancier.id_texte" >
                    <option value>Sélectionner</option>
                    <option></option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">code_acte</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="editActeEffetFinancier.code_acte"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>

           
          </tr>
          <tr>
              <td>
              <div class="control-group">
                <label class="control-label">libelle_acte</label>
                <div class="controls">
                  <input
                    type="date"
                    
                   v-model="editActeEffetFinancier.libelle_acte"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
               <td>
              <div class="control-group">
                <label class="control-label">reference_acte</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="editActeEffetFinancier.reference_acte"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">objet_acte</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="editActeEffetFinancier.objet_acte"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
            

          </tr>
         <tr>
               <td>
              <div class="control-group">
                <label class="control-label">incidence_financiere</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="editActeEffetFinancier.incidence_financiere"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
         </tr>
         <tr>
              <td>
              <div class="control-group">
                <label class="control-label">montant_acte</label>
                <div class="controls">
                  <input
                    type="number"
                    
                   v-model="editActeEffetFinancier.montant_acte"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
               <td>
              <div class="control-group">
                <label class="control-label">type_doc_modifie</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="editActeEffetFinancier.type_doc_modifie"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
             <td>
              <div class="control-group">
                <label class="control-label">livrables</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="editActeEffetFinancier.livrables"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
            

          </tr>
         <tr>
               <td>
              <div class="control-group">
                <label class="control-label">incidence_financiere</label>
                <div class="controls">
                  <input
                    type="text"
                    
                   v-model="editActeEffetFinancier.incidence_financiere"
                    class="span"
                    
                  />
                </div>
              </div>
              
            </td>
         </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a class="btn btn-primary" @click.prevent="modifierActeEffetFinancierLocal(editActeEffetFinancier)">Modifier</a>
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
              <h5>liste analyse dossier</h5>
              <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding" >
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    
                     <th>Acte effet financier</th> 
                     <th>candidat</th>
                    <th>type_analyse</th>
                    <th>cojo</th>
                      <th>date_analyse</th>
                    <th>rang_analyse</th>
                   <th>decision</th>
                   
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                           <tr class="odd gradeX" v-for="(acteEffetFinancier, index) in 
                acteEffetFinancierFiltre"
                 :key="acteEffetFinancier.id">
                 <td @dblclick="afficherModalModificationActeEfffetFinancier(index)">
                   {{acteEffetFinancier.relation.id_type_acte_effet_fin || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModificationActeEfffetFinancier(index)">
                   {{acteEffetFinancier.relation.id_texte || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModificationActeEfffetFinancier(index)">
                   {{acteEffetFinancier.code_acte || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModificationActeEfffetFinancier(index)">
                   {{acteEffetFinancier.libelle_acte || 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModificationActeEfffetFinancier(index)">
                   {{acteEffetFinancier.reference_acte || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModificationActeEfffetFinancier(index)">
                   {{acteEffetFinancier.objet_acte || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModificationActeEfffetFinancier(index)">
                   {{acteEffetFinancier.incidence_financiere || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModificationActeEfffetFinancier(index)">
                   {{acteEffetFinancier.montant_acte || 'Non renseigné'}}</td>

                    <td @dblclick="afficherModalModificationActeEfffetFinancier(index)">
                   {{acteEffetFinancier.type_doc_modifie || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModificationActeEfffetFinancier(index)">
                   {{acteEffetFinancier.livrables || 'Non renseigné'}}</td>



                     <div class="btn-group">
              <button @click.prevent="supprimerTypeActeEffetFinancier(acteEffetFinancier.id)"  class="btn btn-danger ">
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

    <fab :actions="fabActions" @cache="afficherModalAjouterActeEffetFinancier" main-icon="apps" bg-color="green"></fab>
    <notifications  />
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
     <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterActeEffetFinancier()">Open</button>
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
        id_type_acte_effet_fin:"",
        id_texte:"",
        code_acte:"",
        libelle_acte:"",
        reference_acte:"",
        objet_acte:"",
        incidence_financiere:"",
        montant_acte:"",
        type_doc_modifie:"",
        livrables:"",


       
      },
      editActeEffetFinancier: {

          id_type_acte_effet_fin:"",
        id_texte:"",
        code_acte:"",
        libelle_acte:"",
        reference_acte:"",
        objet_acte:"",
        incidence_financiere:"",
        montant_acte:"",
        type_doc_modifie:"",
        livrables:"",

       
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
     ...mapGetters("bienService", ['typeActeEffetFinanciers'
   
     
     ]),


     acteEffetFinancierFiltre(){

       const searchTerm = this.search.toLowerCase();
      return this.typeActeEffetFinanciers.filter((item) => {
  
     return item.libelle_acte.toLowerCase().includes(searchTerm) 
    

  
  

   }
)

     },
    // ...mapGetters("uniteadministrative", ["uniteAdministratives"]),
    // ...mapGetters("parametreGenerauxAdministratif", ["type_Unite_admins"]),


    


   
  },
  methods: {
     ...mapActions("bienService", ['ajouterTypeActeEffetFinancier','modifierTypeActeEffetFinancier',
     'supprimerTypeActeEffetFinancier'
    //   "getAllStock",
    //   "ajouterStock",
    //   "modifierStock",
    //   "supprimerStock"
     ]),
    // formatageSomme: formatageSomme,

    //afiicher modal ajouter
    afficherModalAjouterActeEffetFinancier() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter


    ajouterModalAjouterLocal(){
      this.ajouterTypeActeEffetFinancier(this.formData)
      this.formData = {
          id_type_acte_effet_fin:"",
        id_texte:"",
        code_acte:"",
        libelle_acte:"",
        reference_acte:"",
        objet_acte:"",
        incidence_financiere:"",
        montant_acte:"",
        type_doc_modifie:"",
        livrables:"",

      }
    },
       // afficher modal de modification
    afficherModalModificationActeEfffetFinancier(index){
      this.$('#modificationModal').modal({
        backdrop: 'static',
         keyboard: false
      });
      this.editActeEffetFinancier = this.typeActeEffetFinanciers[index]

    },


 // afficher le modal modifier et vider le modal

 modifierActeEffetFinancierLocal(){
   this.modifierTypeActeEffetFinancier(this.editActeEffetFinancier)
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
