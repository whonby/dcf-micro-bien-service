

<template>
  <div>
   
<!----- ajouter modal   ---->


<!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide tailgrand12">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Structure Organigramme</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
         
            <tr>
                   <td>
                <div class="control-group">
                  <label class="control-label">Unité administrative</label>
                  <div class="controls">
                    <select v-model="formData.ua_id" class="span5">
                      <option
                        v-for="typeUniteA in filtre_unite_admin"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
               
            </tr>
            <tr>
              <td>
              
               <div class="control-group">
                  <label class="control-label">Niveau</label>
                  <div class="controls">
                       <input
                      type="number"
                    :value="NumeroDuNiveau(formData.ua_id)"
                      class="span5"
                     readonly
                      
                    />
                   
                  </div>
                </div>
              </td>
             
            </tr>
       <tr>
         <td>
              
               <div class="control-group">
                  <label class="control-label">Libelle</label>
                  <div class="controls">
                       <input
                      type="text"
                    v-model="formData.libelle"
                      class="span5"
                     
                      
                    />
                   
                  </div>
                </div>
              </td>
       </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterStructureOrganigramme(formData)"
          class="btn btn-primary"
          href="#"
         onclick="validate()"
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->

<!--///////////////////////////////////////// debut modal de modification //////////////////////////////-->

    <div id="modificationModal" class="modal hide tailgrand12">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Structure Organigramme</h3>
      </div>
      <div class="modal-body">
       <table class="table table-bordered table-striped">
         
            <tr>
                   <td>
                <div class="control-group">
                  <label class="control-label">Unité administrative</label>
                  <div class="controls">
                    <select v-model="editStrctureOrganigramme.ua_id" class="span5">
                      <option
                        v-for="typeUniteA in filtre_unite_admin"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
               
            </tr>
            <tr>
              <td>
              
               <div class="control-group">
                  <label class="control-label">Niveau</label>
                  <div class="controls">
                       <input
                      type="number"
                    v-model="editStrctureOrganigramme.niveau"
                      class="span5"
                     readonly
                      
                    />
                   
                  </div>
                </div>
              </td>
             
            </tr>
       <tr>
         <td>
              
               <div class="control-group">
                  <label class="control-label">Libelle</label>
                  <div class="controls">
                       <input
                      type="text"
                    v-model="editStrctureOrganigramme.libelle"
                      class="span5"
                     
                      
                    />
                   
                  </div>
                </div>
              </td>
       </tr>
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierUniteAdministrativeLocal(editStrctureOrganigramme)"
          class="btn btn-primary"
          href="#"
         
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal de modification //////////////////////////////-->
    <!--///////////////////////////////////////// fin modal de modification //////////////////////////////-->
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <div>

                                        <!-- <download-excel
                                            class="btn btn-default pull-right"
                                            style="cursor:pointer;"
                                              :fields = "json_fields"
                                              title="Liste Section "
                                              name ="Liste section"
                                              worksheet = "section"
                                            :data="uniteAdministratives">
                    <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel>  -->
                                                 
                                        <!-- <download-excel -->
                                            <!-- class="btn btn-success pull-right" -->
                                            <!-- style="cursor:pointer;" -->
                                              <!-- :fields = "json_fields" -->
                                              <!-- title="Liste plan Organigramme Ua " -->
                                              <!-- name ="Liste plan Organigramme Ua" -->
                                              <!-- worksheet = "plan Organigramme Ua" -->
                                            <!-- > -->
                     <!-- <i title="Exporter en excel" class="icon-table"> Exporter en excel</i> -->

                                                 <!-- </download-excel>  -->
                                                        <!-- <div  align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
               </div>  -->
                                     </div>
                                     
          <div class="widget-box" id="natures_sections">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>     
              </span>
              <h5>Structure Organigramme par UA</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
               
              </div> -->
            </div>

            <div class="widget-content nopadding"  >
              <structureOrganigramme2 v-for="equipement in filtre_unite_admin"
               :key="equipement.id"
                :groupe="equipement"
                @modification="afficherModalModifierUniteAdministrative" 
                @suppression="supprimerBudget"
                >
              </structureOrganigramme2>

              <!-- <div v-if="filtre_famille.length"></div>
              <div v-else>
                <p style="text-align:center;font-size:20px;color:red;">Aucun Article</p>
              </div> -->

            
              
            </div>
          </div>
        </div>
      </div>
    </div>

    
 <fab :actions="fabActions" @cache="afficherModalAjouterUniteAdministrative" main-icon="apps" bg-color="green"></fab>
        <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterUniteAdministrative()">Open</button>
  <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
  <notifications  />
  </div>

</template>




  
<script>
import { mapGetters, mapActions } from "vuex";
// import jsPDF from 'jspdf'
// import 'jspdf-autotable'
import structureOrganigramme2 from './structureOrganigramme2'
import {admin,dcf,cf,noDCfNoAdmin} from "../../../../Repositories/Auth"
// import { formatageSomme } from "../../../../src/Repositories/Repository";
export default {
  name: 'budgetgeneral',
 components: {
      structureOrganigramme2
  },
  data() {
    return {
      // json_fields: {
      //       'NATURE_SECTION': 'groupe.libelle',
      //       'NUMERO_ORDRE_SECTION': 'article.code',
      //     'CODE_SECTION':'article.code_section',
      //   'LIBELLE_SECTION':'article.nom_section'
           
           
      //   },
     fabActions: [
              {
                  name: 'cache',
                  icon: 'add'
              },
              // {
              //     name: 'alertMe',
              //     icon: 'add_alert'
              // }
          ],
     
      formData: {
     
      libelle: "",
      
      },
      editStrctureOrganigramme: {
         libelle:"",
      
      },
       search:"",
       
    };
    
  },

  computed: {
        ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetGeneral",
      "getPersonnaliseBudgetGeneral",
      "montantBudgetGeneral",
      "StructureOrganigrammeUa"
      // "chapitres",
      // "sections"
    ]),
    
    ...mapGetters("parametreGenerauxAdministratif", [
      
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires",
      "afficheLocalisationGeoNiveau5"
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "plans_fonctionnels",
      "afficheNiveauPlanFonctionnel"
     
    ]),
    ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

    ...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
  admin:admin,
      dcf:dcf,
        cf:cf,
        noDCfNoAdmin:noDCfNoAdmin,
      ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
   
filtre_unite_admin() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.uniteAdministratives.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect
        }
        return this.uniteAdministratives

    },
    NumeroDuNiveau() {
      return id => {
        if (id != null && id != "") {
          return this.StructureOrganigrammeUa.filter(element => element.ua_id == id).length + 1;
        }
      };
    },
    uniteAdministrativeDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.jointureUaChapitreSection.filter(element => element.id == id);
        }
      };
    },

  },


  
  methods: {
    ...mapActions("uniteadministrative", [
      "ajouterStructureOrganigrammeUa",
      "modifierStructureOrganigrammeUa",
      "supprimerStructureOrganigrammeUa",
     
    ]),

     isEmailValid: function() {
      return (this.email == "")? "" : (this.reg.test(this.email)) ? 'has-success' : 'has-error';
    },
//  formatageSomme: formatageSomme,
    afficherModalAjouterUniteAdministrative() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterStructureOrganigramme() {
      var nouveauObjet = {
          ...this.formData,
          niveau:this.NumeroDuNiveau(this.formData.ua_id)
      }
      this.ajouterStructureOrganigrammeUa(nouveauObjet);

      this.formData = {
       
      libelle: "",
     
      
      };
      // }
     
    },
    
     supprimerBudget(id){
      this.supprimerStructureOrganigrammeUa(id)
    },
    // fonction pour vider l'input modifier
    modifierUniteAdministrativeLocal() {
     
      this.modifierStructureOrganigrammeUa(this.editStrctureOrganigramme);
this.$("#modificationModal").modal('hide');
      // this.editUniteAdministrative = {
      //   code: "",
      //   libelle: "",
      //   section_id: "",
      //   localisationgeo_id: ""
      // };
    },
    // afficher modal de modification
    afficherModalModifierUniteAdministrative(articles) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editStrctureOrganigramme = articles;
    },
    alert() {
      console.log("ok");
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

.tailgrand12{
  width: 30%;
  margin: 0 -18%;
}

</style>