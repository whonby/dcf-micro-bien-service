
<template>
  <div>
    
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
            <table class="table table-bordered table-striped">
         
            <tr>
              
            </tr>
</table>
          <!-- <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste type texte"
            :data="filtre_type_teste"
            name="Liste type texte"
            worksheet="Liste type texte"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel> -->
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Budget Detail par :</h5>
              <div align="right">
                Recherche:
                <input type="search" placeholder="Saisie code ou libelle" v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>BIEN ET SERVICE</th>
                    <th>PERSONNEL</th>
                    <th>TRANSFERT</th>
                     <th>INVESTISSEMENT</th>
                  </tr>
                </thead>
                <tbody>
                 
                </tbody>
              </table>
              <div ></div>
              <div >
                <p style="text-align:center;font-size:20px;color:red;">Aucune Type de texte</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

   
    <!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name:'typetext',
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
     
     
    };
  },

  computed: {
    ...mapGetters("uniteadministrative", ["typeTextes"]),
   
  },
  methods: {
    ...mapActions("uniteadministrative", [
      "getAllTypeTextes",
      "getAllNombreTypeText",
      "ajouterTypeTexte",
      "modifierTypeTexte",
      "supprimerTypeTexte"
    ]),
    
    
ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>

