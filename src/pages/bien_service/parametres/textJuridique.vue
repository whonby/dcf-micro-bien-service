
<template>
  <div>
    <!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Texte juridique</h3>
      </div>
      <div class="modal-body">
       <form class="form-horizontal">
         <td>
              <div class="control-group">
                <label class="control-label">Type text juridique:</label>
                <div class="controls">
                  <select  v-model="formData.type_text_juridique_id">
                    <option value>Sélectionner</option>
                    <option
                      v-for="famil in getTypeTextJuridique"
                      :key="famil.id"
                      :value="famil.AfficheTypeTextJuridique.id"
                    >{{famil.AfficheTypeTextJuridique.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
         
          <div class="control-group">
            <label class="control-label">Date</label>
            <div class="controls">
              <input
                type="date"
                v-model="formData.date_effet_text"
                class="span"
                placeholder="Saisir le libelle_type"
              />
            </div>
          </div>

           <div class="control-group">
            <label class="control-label">Objet text juridique</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.objet_text"
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
        <h3>Modifier Text jridique</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
            <td>
              <div class="control-group">
                <label class="control-label">Type text juridique:</label>
                <div class="controls">
                  <select  v-model="editTextJuridique.type_text_juridique_id">
                    <option value>Sélectionner</option>
                    <option
                      v-for="famil in getTypeTextJuridique"
                      :key="famil.id"
                      :value="famil.AfficheTypeTextJuridique.id"
                    >{{famil.AfficheTypeTextJuridique.libelle}}</option>
                  </select>
                </div>
              </div>
            </td>
         

           <div class="control-group">
            <label class="control-label">Date</label>
            <div class="controls">
              <input
                type="date"
                v-model="editTextJuridique.date_effet_text"
                class="span"
                placeholder=""
              />
            </div>
          </div>

           <div class="control-group">
            <label class="control-label">Objet</label>
            <div class="controls">
              <input
                type="text"
                v-model="editTextJuridique.objet_text"
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
          <div class="widget-box" v-if="getTypeTextJuridique.length && text_juridiques.length">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des texts juridiques</h5>
              <div align="right">
                Search:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Type text juridique</th>
                    <th width="50%">Objet</th>
                    <th>Date</th>
                    
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(textJuridique, index) in  textJuridiqueFiltre"
                 :key="textJuridique.id">
                 <td @dblclick="afficherModalModifiertextJuridique(index)">
                   {{textJuridique.AfficheTypeTextJuridique.libelle || 'Non renseigné'}}</td>
                
                   
                    <td @dblclick="afficherModalModifiertextJuridique(index)">
                   {{textJuridique.objet_text || 'Non renseigné'}}</td>
                   <td @dblclick="afficherModalModifiertextJuridique(index)">
                   {{formaterDate(textJuridique.date_effet_text) || 'Non renseigné'}}</td>

<td>
    <div class="btn-group">
              <button @click.prevent="supprimerTextJuridique(textJuridique.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
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
            type_text_juridique_id:"",
            date_effet_text:"",
            objet_text:""

        
      },
      editTextJuridique: {
        	 type_text_juridique_id:"",
            date_effet_text:"",
            objet_text:""
      },
      search: ""
    };
  },

  computed: {
     ...mapGetters("bienService", ['text_juridiques','getTypeTextJuridique']),

    textJuridiqueFiltre()  {
     
        const searchTerm = this.search.toLowerCase();

return this.getTypeTextJuridique.filter((item) => {
  
     return item.objet_text.toLowerCase().includes(searchTerm) 
    

  
  

   }
)
    }
  },
  methods: {
    ...mapActions("bienService", ['ajouterTextJuridique','modifierTextJuridique',
    'supprimerTextJuridique'
     
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
this.ajouterTextJuridique(this.formData)
this.formData = {
	 type_text_juridique_id:"",
            date_effet_text:"",
            objet_text:""
}

    },
    
    // afficher modal de modification
    afficherModalModifiertextJuridique(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editTextJuridique = this.text_juridiques[index];
    },
    // fonction pour vider l'input modification
    modifierModalTypeAnalyseLocal(){
      this.modifierTextJuridique(this.editTextJuridique)
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

