
<template>
  <div>


        
     
           

            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#tab1">PERSONNEL<span class="badge badge-important">{{0}}</span></a>
                      </li>
                       <li>
                        <a data-toggle="tab" href="#tab2">SERVICE<span class="badge badge-important">{{0}}</span></a>
                      </li>
                      <!-- <li>
                        <a data-toggle="tab" href="#tab3">AFFECTION DE LA DIRECTION</a>
                      </li> --> 
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="tab1" class="tab-pane active">
  <div class="widget-content nopadding" >
     <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search"/>
              </div>
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     <!-- <th>Type UA</th> -->
                   <th>Année d'affectation</th>
                    <th>Matricule</th>
                    
                   
                  </tr>
                </thead>
                <tbody>
                   
                 
                </tbody>
              </table>
            </div>
          </div>
                            <div id="tab2" class="tab-pane ">
  <div class="widget-content nopadding" >
     <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search1"/>
              </div>
              <table class="table table-bordered table-striped">
                <thead>
                 <tr>
                     <!-- <th>Type UA</th> -->
                   <th>Année d'affectation</th>
                    <th>Matricule</th>
                    
                   
                   
                  </tr>
                </thead>
                <tbody>
                  
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
     
 
              </table>
 
  </div>

  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
// import { formatageSomme } from "../../../../Repositories/Repository";
// import {admin,dcf,noDCfNoAdmin} from "../../../../Repositories/Auth"

export default {
  name: '',
  data() {
    return {
   
      search: "",
      search1: ""
    };
  },
// created() {
//     this.formData = this.filtre_besoinImmo.find(
//       BesoinImmo => BesoinImmo.id == this.$route.params.id
//     )
// },
created() {
    this.formData = this.historiqueAffectation.find(
      BesoinImmo => BesoinImmo.id == this.$route.params.id
    );

    //console.log(this.$router);
  },
  computed: {
    ...mapGetters("SuiviImmobilisation", [
      
    ]),
    admin:admin,
      dcf:dcf,
      noDCfNoAdmin:noDCfNoAdmin,
     ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
     ...mapGetters("uniteadministrative", ["uniteAdministratives","directions","servicesua","uniteZones"]),
    ...mapGetters("parametreGenerauxAdministratif", ["type_Unite_admins"]),
...mapGetters("personnelUA", ["all_acteur_depense","acteur_depenses","personnaFonction","fonctions"]),


 
    
    alert() {
      console.log("ok");
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

</style>
