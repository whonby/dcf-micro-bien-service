
<template>
  <div>
 
<div id="exampleModal1" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Appréciation</h3>
      </div>
      <div class="modal-body">
      <table class="table table-bordered table-striped">
          
         <tr>
           <td>
                    <div class="control-group">
                  <label class="control-label" style="font-size:14px">Appréciation</label>
                  <div class="controls">
                    <select  class="span5" v-model="editReparation.appreciation_id ">
                      <option></option>                     
                      <option
                        v-for="typeUniteA in Appreciations"
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
            <label class="control-label">Date du Retour</label>
            <div class="controls">
              <input
                type="date"
               v-model="editReparation.date_retour"
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
          @click.prevent="ajouterTitreLocal()"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>

<!----- fin modifier modal  ---->
    <!--///////////////////////////////////////// fin modal de modification //////////////////////////////-->
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <!-- <div> -->

                                        <!-- <download-excel
                                            class="btn btn-success pull-right"
                                            style="cursor:pointer;"
                                              :fields = "json_fields"
                                              title="Liste Section "
                                              name ="Liste section"
                                              worksheet = "section"
                                            :data="uniteAdministratives">
                    <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel>  -->
                      <!-- <div align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
          </div> 
                                     </div> -->
                                     
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>SUIVI DES REPARATIONS DES VEHICULES </h5>
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
               
              </div> -->
            </div>


            <div class="widget-content nopadding"  >
              <reparationvehItemComponent v-for="equipement in uniteAdministratives"
               :key="equipement.id"
                :groupe="equipement"
                @modification="afficherModalModifierService" 
                @suppression="supprimerSect"
                >
              </reparationvehItemComponent>

              <!-- <div v-if="filtre_famille.length"></div>
              <div v-else>
                <p style="text-align:center;font-size:20px;color:red;">Aucun Article</p>
              </div> -->

            
              
            </div>
          </div>
        </div>
      </div>
    </div>

    
<button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="afficherModalListePersonnel()">Open</button>

 <fab :actions="fabActions"
                main-icon="apps"
          @cache="afficherModalListePersonnel"
          @alertMe="afficherModalAjoutReparationSib"
        bg-color="green"

  ></fab>
<notifications  />
  </div>

</template>




  
<script>
import { mapGetters, mapActions } from "vuex";
import reparationvehItemComponent from './reparationvehItemComponent'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
export default {
  name: 'Famille',
 components: {
      reparationvehItemComponent
  },
  data() {
    return {
      json_fields: {
            'NATURE_SECTION': 'groupe.libelle',
            'NUMERO_ORDRE_SECTION': 'article.code',
          'CODE_SECTION':'article.code_section',
        'LIBELLE_SECTION':'article.nom_section'
           
           
        },
     fabActions: [
              {
                  name: 'cache',
                  icon: 'HS',
                  title:'Hors Sib'
              },
              {
                  name: 'alertMe',
                  icon: 'SB',
                  title:'Sib'
              }
          ],
     
        formData : {
                
              libelle:"",
             marque_id:""
        },

        editSection: {
            libelle:"",
             marque_id:""
        },
        editReparation:{},
       search:""
    };
  },

  computed: {
       
        ...mapGetters("SuiviImmobilisation", ["Appreciations","EtatImmobilisations","TypeEnergie","marqueVehicules","ModeleVehicules","TypeEntretien","TypeVehicule","TypeReparation","Transmissions"]),  
    
  ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetEclate",
      
  
    ]),
  
  },
  
   


  
  methods: {
   ...mapActions("uniteadministrative", [
      "ajouterReparationVehicule",
      "modifierReparationVehicule"
      ]),

afficherModalModifierTitre(id) {

      this.$router.push({
        path: "/ModifierFicheVehicule/" + id
      });
    },
afficherModalListePersonnel(){
                this.$router.push({ name: 'AjouterReparationVehicule' })
            },
            afficherModalAjoutReparationSib(){
                this.$router.push({ name: 'AjouterReparationSibVehicule' })
            },
   // exportation en pdf

     genererEnPdf(){
  var doc = new jsPDF()
  // doc.autoTable({ html: this.uniteAdministratives })
   var data = this.sections;
    doc.setFontSize(8)
    doc.text(75,10,"LISTE DES SECTIONS")
  doc.autoTable(this.getColumns(),data)
doc.save('section.pdf')
return 0
},
getColumns() {
    return [
        
        {title: "N° ORDRE", dataKey: "code"},
        {title: "CODE ", dataKey: "code_section"},
        {title: "LIBELLE ", dataKey: "nom_section"},
        
    ];
},

    supprimerSect(id){
      this.supprimerModeleVehicule(id)
    },
    
    //afiicher modal ajouter
    afficherModalajouterModeleVehicule(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
     // fonction pour vider l'input
    ajouterTitreLocal () {
      
      this.modifierReparationVehicule(this.editReparation)
this.$("#exampleModal").modal('hide');
       
    },
    // afficher modal de modification
    afficherModalmodifierModeleVehicule(article) {
      this.$("#modifierModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editSection = article;
    },
afficherModalModifierService(articles) {
      this.$("#exampleModal1").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editReparation = articles;
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

