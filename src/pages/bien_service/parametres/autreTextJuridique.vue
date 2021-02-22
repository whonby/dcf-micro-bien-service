
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter autre text juridique</h3>
      </div>
      <div class="modal-body">
       <form class="form-horizontal">
           
              <div class="control-group">
            <label class="control-label"> text juridique</label>
            <div class="controls">
               <select v-model="formData.text_juridique_id" class="span">
               <option v-for="varText in text_juridiques" :key="varText.id" 
               :value="varText.id">{{varText.objet_text}}</option>
           </select>
            </div>
          </div>

          <div class="control-group">
            <label class="control-label">libellé</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.libelle_autre_texte"
                class="span"
                placeholder="Saisir le libellé"
              />
            </div>
          </div>
              
          <div class="control-group">
            <label class="control-label">Date</label>
            <div class="controls">
              <input
                type="date"
                v-model="formData.date_autre_texte"
                class="span"
                placeholder="Saisir "
              />
            </div>
          </div>
               
           <div class="control-group">
            <label class="control-label"> autre text</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.desc_autre_texte"
                class="span"
                placeholder="Saisir autre text"
              />
            </div>
          </div>
            

             
          <div class="control-group">
            <label class="control-label">Version</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.version"
                class="span"
                placeholder="Saisir le libelle_type"
              />
            </div>
          </div>
              
          <div class="control-group">
            <label class="control-label">Autre text modifier</label>
            <div class="controls">
               <input
                type="text"
                v-model="formData.id_autre_texte_modifie"
                class="span"
                placeholder="Saisir le libellé autre text modifié "
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
        <h3>Modifier autre text juridique</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">

           <div class="control-group">
            <label class="control-label"> text juridique</label>
            <div class="controls">
              <select v-model="editTextJuridique.text_juridique_id" class="span">
               <option v-for="varText in text_juridiques" :key="varText.id" 
               :value="varText.id">{{varText.objet_text}}</option>
           </select>
            </div>
          </div>
            
          <div class="control-group">
            <label class="control-label">libellé</label>
            <div class="controls">
              <input
                type="text"
                v-model="editTextJuridique.libelle_autre_texte"
                class="span"
                placeholder="Saisir le libellé"
              />
            </div>
          </div>
             
          <div class="control-group">
            <label class="control-label">Date</label>
            <div class="controls">
              <input
                type="date"
                v-model="editTextJuridique.date_autre_texte"
                class="span"
                placeholder="Saisir le libelle_type"
              />
            </div>
          </div>
               
           <div class="control-group">
            <label class="control-label"> autre text</label>
            <div class="controls">
              <input
                type="text"
                v-model="editTextJuridique.desc_autre_texte"
                class="span"
                placeholder="Saisir le libelle_type"
              />
            </div>
          </div>
            
          <div class="control-group">
            <label class="control-label">version</label>
            <div class="controls">
              <input
                type="text"
                v-model="editTextJuridique.version"
                class="span"
                placeholder="Saisir le libelle_type"
              />
            </div>
          </div>
              
          <div class="control-group">
            <label class="control-label"> text modifier</label>
            <div class="controls">
              <input
                type="text"
                v-model="editTextJuridique.id_autre_texte_modifie"
                class="span"
                placeholder="Saisir le libelle_type"
              />
            </div>
          </div>
           
          
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierModalTypeAnalyseLocal(editTextJuridique)"
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
              <h5>Liste autre text juridiques</h5>
              <div align="right">
                Search:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>libellé</th>
                    <th>Date</th>
                    <th>autres text</th>
                    <th>autre text modifie</th>
                    <th>Text juridique</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(textJuridique, index) in 
                textJuridiqueFiltre"
                 :key="textJuridique.id">
                 <td @dblclick="afficherModalModifiertextJuridique(index)">
                   {{textJuridique.libelle_autre_texte || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifiertextJuridique(index)">
                   {{formaterDate(textJuridique.date_autre_texte) || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifiertextJuridique(index)">
                   {{textJuridique.desc_autre_texte || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifiertextJuridique(index)">
                   {{textJuridique.id_autre_texte_modifie || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifiertextJuridique(index)">
                   {{textJuridique.text_juridique.objet_text || 'Non renseigné'}}</td>
                   
                  


                     <div class="btn-group">
              <button @click.prevent="supprimerAutreTextjuridique(textJuridique.id)"  class="btn btn-danger ">
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

    <fab :actions="fabActions" @cache="afficherModalAjouTypeAnalyse" main-icon="apps" bg-color="green"></fab>
 <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouTypeAnalyse()">Open</button>
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
            libelle_autre_texte:"",
            date_autre_texte:"",
            desc_autre_texte:"",
             version:"",
             id_autre_texte_modifie:"",
             text_juridique_id:""
        
      },
      editTextJuridique: {
        	libelle_autre_texte:"",
            date_autre_texte:"",
            desc_autre_texte:"",
             version:"",
             id_autre_texte_modifie:"",
             text_juridique_id:""
      },
      search: ""
    };
  },

  computed: {
     ...mapGetters("bienService", ['autresTexteJuridiques','text_juridiques']),

    textJuridiqueFiltre()  {
     
        const searchTerm = this.search.toLowerCase();

return this.autresTexteJuridiques.filter((item) => {
  
     return item.libelle_autre_texte.toLowerCase().includes(searchTerm) 
     
    

  
  

   }
)
    }
  },
  methods: {
    ...mapActions("bienService", ['ajouterAutreTextJuridique','modifierAutreTextJuridique',
    'supprimerAutreTextjuridique'
     
    ]),
    //afiicher modal ajouter
    afficherModalAjouTypeAnalyse() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterModalTypeAnalyseLocal(){
this.ajouterAutreTextJuridique(this.formData)
this.formData = {
		libelle_autre_texte:"",
            date_autre_texte:"",
            desc_autre_texte:"",
             version:"",
             id_autre_texte_modifie:"",
             text_juridique_id:""
}

    },
    
    // afficher modal de modification
    afficherModalModifiertextJuridique(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editTextJuridique = this.autresTexteJuridiques[index];
    },
    // fonction pour vider l'input modification
    modifierModalTypeAnalyseLocal(){
      this.modifierAutreTextJuridique(this.editTextJuridique)
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

