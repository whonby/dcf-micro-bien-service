

<template>
  <div>
   
<!----- ajouter modal   ---->


<!--///////////////////////////////////////// debut modal d ajout //////////////////////////////-->
    <div id="exampleModal" class="modal hide tailgrand12">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter une unité de zone</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
         
            <tr>
                   <td>
                <div class="control-group">
                  <label class="control-label">Unité administrative</label>
                  <div class="controls">
                    <select v-model="formData.id_unite_administrative">
                      <option
                        v-for="typeUniteA in uniteAdministratives"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
              <td>
                 <div class="control-group">
                  <label class="control-label">Localisation géographique</label>
                  <div class="controls">
                    <select v-model="formData.id_zone_geographique">
                      <option
                        v-for="localgeo in afficheLocalisationGeoNiveau5"
                        :key="localgeo.id"
                        :value="localgeo.id"
                      >{{localgeo.code}}-{{localgeo.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Destinataire</label>
                  <div class="controls">
                       <input
                      type="text"
                    v-model="formData.libelle"
                      class="span"
                     
                      
                    />
                   
                  </div>
                </div>
              </td>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Longitude</label>
                  <div class="controls">
                       <input
                      type="number"
                    v-model="formData.longitude"
                      class="span"
                     
                      
                    />
                   
                  </div>
                </div>
              </td>
                <td>
              
               <div class="control-group">
                  <label class="control-label">Latitude</label>
                  <div class="controls">
                       <input
                      type="number"
                    v-model="formData.latitude"
                      class="span"
                     
                      
                    />
                   
                  </div>
                </div>
              </td>
            </tr>
            <tr>
               <td>
              
               <div class="control-group">
                  <label class="control-label">	Téléphone mobile</label>
                  <div class="controls">
                       <input
                      type="number"
                    v-model="formData.telephone_cel"
                      class="span"
                     
                      
                    />
                   
                  </div>
                </div>
              </td>
              <td>
              
               <div class="control-group">
                  <label class="control-label">Adresse postale</label>
                  <div class="controls">
                       <input
                      type="text"
                    v-model="formData.adresse_postale"
                      class="span"
                     
                      
                    />
                   
                  </div>
                </div>
              </td>
              <td>
              
               <div class="control-group">
                  <label class="control-label">Téléphone fixe</label>
                  <div class="controls">
                       <input
                      type="number"
                    v-model="formData.telephone_fixe"
                      class="span"
                     
                      
                    />
                   
                  </div>
                </div>
              </td>
             <td>
              
               <div class="control-group">
                  <label class="control-label">Description localisation</label>
                  <div class="controls">
                       <input
                      type="text"
                    v-model="formData.description_localisation"
                      class="span"
                     
                      
                    />
                   
                  </div>
                </div>
              </td>
                <td>
              
               <div class="control-group">
                  <label class="control-label">Quartier</label>
                  <div class="controls">
                       <input
                      type="text"
                    v-model="formData.quartier"
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
          @click.prevent="ajouterUniteAdministrativeLocal(formData)"
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
        <h3>Modifier Budget par unité d'administrative</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
         
            <tr>
                   <td>
                <div class="control-group">
                  <label class="control-label">Unité administrative</label>
                  <div class="controls">
                    <select v-model="editUniteZone.id_unite_administrative">
                      <option
                        v-for="typeUniteA in uniteAdministratives"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
              <td>
                 <div class="control-group">
                  <label class="control-label">Localisation Géographique</label>
                  <div class="controls">
                    <select v-model="editUniteZone.id_zone_geographique">
                      <option
                        v-for="localgeo in afficheLocalisationGeoNiveau5"
                        :key="localgeo.id"
                        :value="localgeo.id"
                      >{{localgeo.code}}-{{localgeo.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Destinataire</label>
                  <div class="controls">
                       <input
                      type="text"
                    v-model="editUniteZone.libelle"
                      class="span"
                     
                      
                    />
                   
                  </div>
                </div>
              </td>
               <td>
              
               <div class="control-group">
                  <label class="control-label">longitude</label>
                  <div class="controls">
                       <input
                      type="number"
                    v-model="editUniteZone.longitude"
                      class="span"
                     
                      
                    />
                    
                   
                  </div>
                </div>
              </td>
                <td>
              
               <div class="control-group">
                  <label class="control-label">latitude</label>
                  <div class="controls">
                       <input
                      type="number"
                    v-model="editUniteZone.latitude"
                      class="span"
                     
                      
                    />
                   
                  </div>
                </div>
              </td>
            </tr>
            <tr>
               <td>
              
               <div class="control-group">
                  <label class="control-label">	Telephone cel</label>
                  <div class="controls">
                       <input
                      type="number"
                    v-model="editUniteZone.telephone_cel"
                      class="span"
                     
                      
                    />
                   
                  </div>
                </div>
              </td>
              <td>
              
               <div class="control-group">
                  <label class="control-label">Adresse postale</label>
                  <div class="controls">
                       <input
                      type="text"
                    v-model="editUniteZone.adresse_postale"
                      class="span"
                     
                      
                    />
                   
                  </div>
                </div>
              </td>
              <td>
              
               <div class="control-group">
                  <label class="control-label">Telephone fixe</label>
                  <div class="controls">
                       <input
                      type="number"
                    v-model="editUniteZone.telephone_fixe"
                      class="span"
                     
                      
                    />
                   
                  </div>
                </div>
              </td>
             <td>
              
               <div class="control-group">
                  <label class="control-label">Description localisation</label>
                  <div class="controls">
                       <input
                      type="text"
                    v-model="editUniteZone.description_localisation"
                      class="span"
                     
                      
                    />
                   
                  </div>
                </div>
              </td>
                <td>
              
               <div class="control-group">
                  <label class="control-label">Quartier</label>
                  <div class="controls">
                       <input
                      type="text"
                    v-model="editUniteZone.quartier"
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
          @click.prevent="modifierUniteAdministrativeLocal(editUniteZone)"
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
                                                        <div  align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
               </div> 
                                     </div>
                                     
          <div class="widget-box" id="natures_sections">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>     
              </span>
              <h5>Liste des unités de zones</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
               
              </div> -->
            </div>

            <div class="widget-content nopadding"  >
              <uniteZoneComponent v-for="equipement in uniteAdministratives"
               :key="equipement.id"
                :groupe="equipement"
                @modification="afficherModalModifierUniteAdministrative" 
                @suppression="supprimerBudget"
                >
              </uniteZoneComponent>

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
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import uniteZoneComponent from './uniteZoneComponent'
import { formatageSomme } from "../../../../src/Repositories/Repository";
export default {
  name: 'budgetgeneral',
 components: {
      uniteZoneComponent
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
      id_zone_geographique:"",
      id_unite_administrative: "",
      libelle: "",
      longitude: "",
      latitude: "",
      telephone_cel: "",
      adresse_postale: "",
      telephone_fixe: "",
      description_localisation: "",
      quartier: "",
      },
      editUniteZone: {
         exercicebudget_id:"",
      gdenature_id: "",
      program_id: "",
      typeua_id: "",
      ua_id: "",
      section_id: "",
      fonctionnel_id: "",
      economique_id: "",
      Dotation_Initiale: "",
      version: ""
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
      "montantBudgetGeneral"
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
      "getAllUniteZone",
      "ajouterUniteZone",
      "modifierUniteZone",
      "supprimerUniteZone",
      // "ajouterHistoriqueBudgetGeneral"
    ]),








          genererEnPdf(){
        var doc = new jsPDF()
       //doc.autoTable({ html: this.natures_sections })
        
       // var data = this.getNormeMissionPersonnaliser;
        doc.setFontSize(8)
       doc.text(75,10,"LISTE DES NORMES DE MISSION ")
       doc.autoTable({ html: '#natures_sections' })
       // doc.autoTable(this.getColumns(),data)
      // doc.save('Type des actes de depenses.pdf')
     doc.output('save','Liste des normes de mission.pdf');
     doc.output('dataurlnewwindow');
    return 0
    },














     isEmailValid: function() {
      return (this.email == "")? "" : (this.reg.test(this.email)) ? 'has-success' : 'has-error';
    },
 formatageSomme: formatageSomme,
    afficherModalAjouterUniteAdministrative() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterUniteAdministrativeLocal() {
      
      this.ajouterUniteZone(this.formData);

      this.formData = {
        id_zone_geographique:"",
      id_unite_administrative: "",
      libelle: "",
      longitude: "",
      latitude: "",
      telephone_cel: "",
      adresse_postale: "",
      telephone_fixe: "",
      description_localisation: "",
      quartier: "",
      
      };
      // }
     
    },
    
     supprimerBudget(id){
      this.supprimerUniteZone(id)
    },
    // fonction pour vider l'input modifier
    modifierUniteAdministrativeLocal() {
     
      this.modifierUniteZone(this.editUniteZone);
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

      this.editUniteZone = articles;
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
  width: 75%;
  margin: 0 -35%;
}

</style>