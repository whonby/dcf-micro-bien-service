
<template>
  <div>
   
<!----- ajouter modal   ---->
<div id="exampleModal" class="modal hide tailgrand">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Affectation Véhicule</h3>
      </div>
      <div class="modal-body">
      <table class="table table-bordered table-striped">
          <tr>
            <td>
               <div class="control-group">
            <label class="control-label">Immatriculation</label>
            <div class="controls">
              <input
                type="text"
                v-model="editAffectation.numimmatriculation"
                class="span4"
                readonly
              />
            </div>
          </div>
            </td>
             <td>
               <div class="control-group">
            <label class="control-label">Marque</label>
            <div class="controls">
              <input
                type="text"
                :value="libellemarqueVehicules(editAffectation.marque)"
                class="span4"
                readonly
              />
            </div>
          </div>
            </td>
             <td>
               <div class="control-group">
            <label class="control-label">Modele</label>
            <div class="controls">
              <input
                type="text"
                :value="libelleModeleVehicules(editAffectation.modele)"
                class="span4"
                readonly
              />
            </div>
          </div>
            </td>
             <td>
               <div class="control-group">
            <label class="control-label">N°Chassis</label>
            <div class="controls">
              <input
                type="text"
                :value="editAffectation.numchassis"
                class="span4"
              readonly
              />
            </div>
          </div>
            </td>
          </tr>
        <tr>
            <td>
               <div class="control-group">
            <label class="control-label">Date Affectation</label>
            <div class="controls">
              <input
                type="date"
              
                class="span4"
                
              />
            </div>
          </div>
            </td>
             <td>
               <div class="control-group">
            <label class="control-label">Personnel</label>
            <div class="controls">
                              <select   class="span5">
            <option v-for="resultat in affichePersonnel(editAffectation.uniteadministrative)" :key="resultat.id" 
            :value="resultat.id">{{resultat.acteur_depense_id}}</option>
                </select>
            </div>
          </div>
            </td>
             <td>
               <div class="control-group">
            <label class="control-label">Modele</label>
            <div class="controls">
              <input
                type="text"
                :value="libelleModeleVehicules(editAffectation.modele)"
                class="span4"
                readonly
              />
            </div>
          </div>
            </td>
             <td>
               <div class="control-group">
            <label class="control-label">N°Chassis</label>
            <div class="controls">
              <input
                type="text"
                :value="editAffectation.numchassis"
                class="span4"
              readonly
              />
            </div>
          </div>
            </td>
          </tr>
      </table>
      </div>
      <div class="modal-footer">
        <a
          
          class="btn btn-primary"
          href="#"
          
        >Affecter</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>

 
            
<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 

<!----- fin modifier modal  ---->
    <!--///////////////////////////////////////// fin modal de modification //////////////////////////////-->
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <div>

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
                      <div align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
          </div> 
                                     </div>
                                     
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Affectation Véhicule</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
               
              </div> -->
            </div>


            <div class="widget-content nopadding"  >
              <affectationItemComponent v-for="equipement in uniteAdministratives"
               :key="equipement.id"
                :groupe="equipement"
                @modification="afficherModalModifierService" 
                @suppression="afficherModalModifierService"
                >
              </affectationItemComponent>

              <!-- <div v-if="filtre_famille.length"></div>
              <div v-else>
                <p style="text-align:center;font-size:20px;color:red;">Aucun Article</p>
              </div> -->

            
              
            </div>
          </div>
        </div>
      </div>
    </div>

    

<notifications  />
  </div>

</template>




  
<script>
import { mapGetters, mapActions } from "vuex";
import affectationItemComponent from '../grpeAffectation/affectationItemComponent'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
export default {
  watch: {
  },
  name: 'Famille',
 components: {
      affectationItemComponent
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
                  icon: 'add'
              },
              // {
              //     name: 'alertMe',
              //     icon: 'add_alert'
              // }
          ],
     
        editAffectation : {
                
              
        },

        editSection: {
            libelle:"",
             marque_id:""
        },
       search:""
    };
  },

  computed: {
       
       
  ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetEclate",
  
    ]),
     ...mapGetters('personnelUA', ["personnaFonction","afficheNombrePersonnelRecuActeNormination","fonctionBudgetaire","type_salaries","type_contrats","acte_personnels","type_acte_personnels","fonctions","grades","niveau_etudes",
                "nbr_acteur_actredite_taux","all_acteur_depense","personnaliseActeurFinContrat",
                "totalActeurEnctivite","totalActeurDepense","totalActeurAccredite","tauxActeurAccredite","totalActeurNonAccredite","personnaliseActeurDepense","affichePersonnelRecuActeNormination"]),
    ...mapGetters("SuiviImmobilisation", ["EtatImmobilisations","TypeEnergie","marqueVehicules","ModeleVehicules","TypeEntretien","TypeVehicule","TypeReparation"]),  
     
     affichePersonnel() {
      return id => {
        if (id != null && id != "") {
           return this.acte_personnels.filter(qtreel => qtreel.unite_administrative_id == id);
      
        }
      };
    },
     
     
     
     libelleModeleVehicules() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.ModeleVehicules.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
  libellemarqueVehicules() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marqueVehicules.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
  },
  
   


  
  methods: {
   ...mapActions('SuiviImmobilisation', [ 
    'ajouterModeleVehicule', 
   'supprimerModeleVehicule', 'modifierModeleVehicule']),  


afficherModalModifierService(articles) {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editAffectation = articles;
    },




afficherModalModifierTitre(id) {

      this.$router.push({
        path: "/ModifierFicheVehicule/" + id
      });
    },
afficherModalListePersonnel(){
                this.$router.push({ name: 'AjouterFicheVehicule' })
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
      
      this.ajouterModeleVehicule(this.formData)

        this.formData = {
              
            marque_id:""
        }
    },
    // afficher modal de modification
    afficherModalmodifierModeleVehicule(article) {
      this.$("#modifierModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editSection = article;
    },

modifierModeleVehiculeLocal(){
 
  this.modifierModeleVehicule(this.editSection);
  this.$("#modifierModal").modal('hide');
  this.editSection = {
                code: "",
             nom_section: "",
             marque_id:""
  }
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

<style>

.tailgrand{
  width: 88%;
  margin: 0 -42%;
}

label{
font-size:14px
}

</style>