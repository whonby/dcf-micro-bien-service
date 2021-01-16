
<template>
  <div>
   
<!----- ajouter modal   ---->

  <div class="container-fluid">
            <hr>
            <div class="row-fluid">
                <div class="span12">
                    <div class="widget-box">
                        <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
                            <h5>Ajouter une nouvelle entreprise</h5>
                        </div>

                        <div class="widget-content nopadding">
                            
                            <form action="#" method="get" class="form-horizontal" @submit.prevent="ajouterTitreLocal" enctype="multipart/form-data">
                                <div class="row-fluid">
                                    <div class="span6">
                                        <div class="widget-box">
                                            <div class="widget-content nopadding">

                                                <div class="control-group">
                                                    <label class="control-label">Raison social :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Raison social" v-model="formData.raison_sociale">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Sigle :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Sigle" v-model="formData.sigle">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Secteur activite</label>
                                                    <div class="controls">
                                                        <select v-model="formData.secteur_activite_id">
                                                            <option></option>
                                                            <option v-for="item in secteur_activites" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Numero compte contribuable :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Numero compte contribuable" v-model="formData.numero_cc">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Numero de registe de commerce:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Numero de registe de commerce" v-model="formData.numero_rc">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Capitale social:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Capitale social" v-model="formData.capitale_sociale">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Banque:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Banque"  v-model="formData.banque">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Telephone:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Telephone" v-model="formData.telephone">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Email:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Email" v-model="formData.email">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Pays:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Pays" v-model="formData.pays">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Ville:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Ville" v-model="formData.ville">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Adresse:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11"  placeholder="Adresse" v-model="formData.adresse">
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                    <div class="span6">
                                        <div class="widget-box">
                                            <div class="widget-content nopadding">
                                                <div class="control-group">
                                                    <label class="control-label">Form juridique:</label>
                                                    <div class="controls">
                                                        <select v-model="formData.forme_juridique">
                                                            <option></option>
                                                            <option value="SNC">Société en Nom Collectif</option>
                                                            <option value="SCS">Société en Commandite Simple</option>
                                                            <option value="SP">Société en Participation</option>
                                                            <option value="SARL">Société à Responsabilité Limitée </option>
                                                            <option value="SRLU">Société à Responsabilité Limitée Unipersonnelle</option>
                                                            <option value="SA">Société Anonyme</option>
                                                            <option value="SAU">Société Anonyme Unipersonnelle </option>
                                                            <option value="GIE">Groupement d’intérêt Economique</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Centre import :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Centre import" v-model="formData.centre_impot">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Service assiette :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Service assiette" v-model="formData.service_assiette_impot">
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="widget-box">
                                            <div class="widget-content nopadding">
                                                <div class="control-group">
                                                    <label class="control-label">Imatriculation CNPS:</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Imatriculation CNPS" v-model="formData.immatriculation_cnps">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Date enregistrement CNPS :</label>
                                                    <div class="controls">
                                                        <input type="date" class="span11" placeholder="Date enregistrement CNPS" v-model="formData.date_enregistrement_cnps">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Nombre travailleur Permanent :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Nombre travailleur Permanant" v-model="formData.nbre_travailleur_permanent">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Nombre travailleur horaire :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Nombre travailleur horaire" v-model="formData.nbre_travailleur_horaire">
                                                    </div>
                                                </div>
                                                <div class="control-group">
                                                    <label class="control-label">Nombre travailleur journalier :</label>
                                                    <div class="controls">
                                                        <input type="text" class="span11" placeholder="Nombre travailleur journalier" v-model="formData.nbre_travailleur_journalier">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-actions">
                                            <button type="submit" class="btn btn-success">Enregistrement</button>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
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

                                        <download-excel
                                            class="btn btn-default pull-right"
                                            style="cursor:pointer;"
                                              :fields = "json_fields"
                                              title="Liste Section "
                                              name ="Liste section"
                                              worksheet = "section"
                                            :data="natures_sections">
                    <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel> 
                                     </div>
                                     
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des entreprises </h5>
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
               
              </div> -->
            </div>

            <div class="widget-content nopadding" v-if="banques.length" >
              <grpeEntrepriseParBanqueItemComponent v-for="equipement in banques"
               :key="equipement.id"
                :groupe="equipement"
                @modification="afficherModalModifierSection" 
                @suppression="supprimerSect"
                >
              </grpeEntrepriseParBanqueItemComponent>

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
  @shortkey="afficherModalAjoutEntreprise()">Open</button>

 <fab :actions="fabActions"
                main-icon="apps"
          @cache="afficherModalAjoutEntreprise"
        bg-color="green"

  ></fab>
<notifications  />
  </div>

</template>




  
<script>
import { mapGetters, mapActions } from "vuex";
import grpeEntrepriseParBanqueItemComponent from './grpeEntrepriseParBanqueItemComponent'
export default {
  name: 'Famille',
 components: {
      grpeEntrepriseParBanqueItemComponent
  },
  data() {
    return {
      json_fields: {
           
           
           
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
          
          liste:[],
     
       formData : {
                    numero_cc: "",
                    numero_rc: "",
                    raison_sociale: "",
                    sigle: "",
                    secteur_activite_id: "",
                    activite_principale: "",
                    pays: "",
                    ville: "",
                    forme_juridique:"",
                    centre_impot:"",
                    regime_imposition:"",
                    capitale_sociale:"",
                    immatriculation_cnps:"",
                    date_enregistrement_cnps:"",
                    telephone:"",
                    email:"",
                    nbre_travailleur_permanent:"",
                    nbre_travailleur_journalier:"",
                    service_assiette_impot:"",
                    adresse:"",
                    banque:""
                },

        editSection: {
            code: "",
             nom_section: "",
              code_section:"",
              naturesection_id:""
        },
       search:""
    };
  },

  computed: {
      ...mapGetters('gestionMarche', ['banques', 
  'entreprises']) ,

  codeAjoutEntreprise(){
     const banque = this.banques.find(sect => sect.id == this.formData.banque_id)
    const ordreSection = this.formData.code

     if(natureSection && ordreSection){
       return natureSection.code + ordreSection
     }

     return null
   },
  codeModifierSection(){
     const natureSection = this.natures_sections.find(sect => sect.id == this.editSection.naturesection_id)
    const ordreSection = this.editSection.code

     if(natureSection && ordreSection){
       return natureSection.code + ordreSection
     }

     return null
   },
  },
   


  
  methods: {
   ...mapActions('parametreGenerauxAdministratif', ['getSection', 
    'ajouterSection', 
   'supprimerSection', 'modifierSection']),  

    supprimerSect(id){
      this.supprimerSection(id)
    },
    
    //afiicher modal ajouter
    afficherModalAjoutEntreprise(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
     // fonction pour vider l'input
    ajouterTitreLocal () {
      var nouvelObjet = {
        ...this.formData,
        code_section: this.codeAjoutEntreprise,
        
      };
      this.ajouterSection(nouvelObjet)

        this.formData = {
                code: "",
             nom_section: "",
             code_section:"",
            naturesection_id:""
        }
    },
    // afficher modal de modification
    afficherModalModifierSection(article) {
      this.$("#modifierModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editSection = article;
    },

modifierSectionLocal(){
   var nouvelObjet = {
        ...this.editSection,
        code_section: this.codeModifierSection,
        
      };
  this.modifierSection(nouvelObjet);
  this.$("#modifierModal").modal('hide');
  this.editSection = {
                code: "",
             nom_section: "",
             naturesection_id:""
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

