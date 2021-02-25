
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
            title="Liste Types Ã©quipements"
            :data="filtre_equipement"
            name="Liste des types Ã©quipements"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel> -->
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste dossier candidat</h5>
              <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>id_procedure_passation</th>
                   <th>type_cand</th>
                   <th>nom_cand</th>
                   <th>prenoms_cand</th>
                   <th>date_naiss_cand</th>
                   <th>telephone_cand</th>
                   <th>adresse_postal</th>
                   <th>situation_geo</th>
                   <th>email_cand</th>
                   <th>accord_group</th>
                   <th>cautionnement_prov</th>
                   <th>pouv_habil_signataire</th>
                   <th>piece_admin</th>
                   <th>reg_com</th>
                    <th>attest_banc</th>
                     <th>formul_propo_tech</th>
                      <th>fiche_rsgnt_cand</th>
                       <th>fiche_rsgnt_mbre_group</th>
                        <th>atcdent_marche_non_exe</th>
                        <th>org_travau_site</th>
                        <th>meth_real_travau</th>
                        <th>prog_mobilisation</th>
                        <th>capacite_financiere</th>
                        <th>caa_moyen_ac_entre</th>
                        <th>capacite_financement</th>
                        <th>capacite_tech_exp</th>
                        <th>mt_offre_financiere</th>
                        
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

    <fab :actions="fabActions" @cache="afficherModalAjouterTitre" main-icon="apps" bg-color="green"></fab>
 <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterTitre()">Open</button>
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
<!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
<notifications  />
  </div>
</template>
  
<script>
// import { mapGetters, mapActions } from "vuex";
export default {
  name:'banque',
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
    //     LIBELLE: "libelle"
    //   },

      formData: {
        
      },
      editEquipement: {
     
      },
      search: ""
    };
  },

  computed: {
    // ...mapGetters("SuiviImmobilisation", ["equipements","familles"]),
    // filtre_equipement() {
    //   const st = this.search.toLowerCase();
    //   return this.equipements.filter(type => {
    //     return (
          
    //       type.libelle.toLowerCase().includes(st)
    //     );
    //   });
    // }
  },
  methods: {
    ...mapActions("SuiviImmobilisation", [
     
    ]),
    //afiicher modal ajouter
    afficherModalAjouterTitre() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    
    // afficher modal de modification
    // afficherModalModifierFamille(index) {
    //   this.$("#modificationModal").modal({
    //     backdrop: "static",
    //     keyboard: false
    //   });

    //   this.editEquipement = this.equipements[index];
    // },
    // fonction pour vider l'input modification
    
    alert() {
      console.log("ok");
    },
     ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>

