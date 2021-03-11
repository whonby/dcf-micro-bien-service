
<template>
  <div>
   
 
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
            title="Liste type texte"
            :data="filtre_type_teste"
            name="Liste type texte"
            worksheet="Liste type texte"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel> -->
          <p class="text-center" style="font-size:15px;"> PROJET DE RECONSTRUCTION POST CONFLIT <br>
           DU LYCEE PROFESSIONNEL D'ODIENNE <br>
              (REC-LPO)
          </p>
          <p class="text-center">VENTILLATION DU BUDGET</p>
          <p class="text-center">ACTIVITE : 28092200013</p>

          <div class="widget-box">
            <div class="widget-content nopadding">
                <div style="overflow-x:auto;">
              <table class="table table-bordered table-striped">
                <thead>
                   <tr>
                    <th rowspan="2">Ligne Bugétaire</th>
                    <th colspan="3">Solde 2020</th>
                    <th colspan="3">NOTIFICATION 2021</th>
                    <th colspan="2">TOTAL</th>

                    <th rowspan="2">BUDGET TOTAL</th>

                    
                  </tr>
                   <tr>
                    <th>ETAT</th>
                    <th>BAILLEUR</th>
                    <th>S/TOTAL</th>

                    <th>ETAT</th>
                    <th>BAILLEUR</th>
                    <th>S/TOTAL</th>

                    <th>ETAT</th>
                    <th>BAILLEUR</th>
                   

                  </tr>
                </thead>
                <tbody>

                    <tr>
                        <td >DEPENSE EN CAPITAL</td>
                        <td>600 000</td>
                        <td>m</td>
                        <td>m</td>
                        <td>m</td>
                        <td>m</td>
                        <td>m</td>
                        <td>m</td>
                        <td>m</td>
                        <td>m</td>
                    </tr>

                    <tr>
                        <td >DEPENSE DE PERSONNEL</td>
                        <td>600 000</td>
                        <td>m</td>
                        <td>m</td>
                        <td>m</td>
                        <td>m</td>
                        <td>m</td>
                        <td>m</td>
                        <td>m</td>
                        <td>m</td>
                    </tr>
                    <tr>
                        <td >ACHAT DE BIENS ET SERVICES</td>
                        <td>600 000</td>
                        <td>m</td>
                        <td>m</td>
                        <td>m</td>
                        <td>m</td>
                        <td>m</td>
                        <td>m</td>
                        <td>m</td>
                        <td>m</td>
                    </tr>

                    <tr >
                        <td >TOTAL</td>
                        <td>600 000</td>
                        <td>600 0001</td>
                        <td>600 0002</td>
                        <td>600 0003</td>
                        <td>600 0004</td>
                        <td>600 0005</td>
                        <td>600 0006</td>
                        <td>600 0007</td>
                        <td>600 0008</td>
                    </tr>
                  
                </tbody>
              </table>
                </div>
             
             
            </div>
          </div>
        </div>
      </div>
    </div>

    <fab :actions="fabActions" @cache="afficherModalAjouterTitre" main-icon="apps" bg-color="green"></fab>
    <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterTitre()">Open</button>
<button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
<notifications  />
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
      json_fields: {
        CODE: "code",
        LIBELLE: "libelle"
      },
      formData: {
        code: "",
        libelle: ""
      },
      editTypeTexte: {
        code: "",
        libelle: ""
      },
      search: ""
    };
  },

  computed: {
    ...mapGetters("uniteadministrative", ["typeTextes"]),
    filtre_type_teste() {
      const st = this.search.toLowerCase();
      return this.typeTextes.filter(type => {
        return (
          type.code.toLowerCase().includes(st) ||
          type.libelle.toLowerCase().includes(st)
        );
      });
    }
  },
  methods: {
    ...mapActions("uniteadministrative", [
      "getAllTypeTextes",
      "getAllNombreTypeText",
      "ajouterTypeTexte",
      "modifierTypeTexte",
      "supprimerTypeTexte"
    ]),
    //afiicher modal ajouter
    afficherModalAjouterTitre() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterTypeTexteLocal() {
      this.ajouterTypeTexte(this.formData);

      this.formData = {
        code: "",
        libelle: ""
      };
    },
    // afficher modal de modification
    afficherModalModifierTypeTexte(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

     
      this.editTypeTexte = this.typeTextes[index];
    },
    // fonction pour vider l'input modification
    modifierTypeTexteLocal() {
      this.modifierTypeTexte(this.editTypeTexte);
this.$("#modificationModal").modal('hide');
      // this.editTypeTexte = {
      //   code: "",
      //   libelle: ""
      // };
       
    },
    alert() {
      console.log("ok");
    },
    
ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>

