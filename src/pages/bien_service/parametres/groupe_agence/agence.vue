
<template>
  <div>
   
<!----- ajouter modal   ---->


 <div id="exampleModal" class="modal hide gdeModalAgence">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter Agence bancaire</h3>
              </div>
              <div class="modal-body">
                 <table class="table table-bordered table-striped">
         
            <tr>
              <td>
                <div class="control-group">
                  <label class="control-label">Banque</label>
                  <div class="controls">
                    <select v-model="formData.banque_id">
                      <option
                        v-for="typeUniteA in banques"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Code agence</label>
                  <div class="controls">
                     <input type="text" v-model="formData.code_agence" class="span" />
                  </div>
                </div>
              </td>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Nom agence</label>
                  <div class="controls">
                      <input type="text" v-model="formData.nom_agence" class="span" />
                  </div>
                   
                </div>
              </td>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Telephone agence</label>
                  <div class="controls">
                    <input type="number" v-model="formData.tel_agence" class="span" />
                  </div>
                </div>
              </td>
            </tr>

            <tr>
             
              <td>
                 <div class="control-group">
                  <label class="control-label">Pays</label>
                  <div class="controls">
                    
                    <select v-model="formData.pays_id" class="span">
                                                            <option></option>
                                                            <option v-for="item in affichePays" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>

                                                        </select>
                  </div>
                </div>
              </td>
               <td>
                  <div class="control-group">
                  <label class="control-label">Ville</label>
                  <div class="controls">
                    <select v-model="formData.ville_id" :readOnly="verroPays">
                     <option></option>
                                                            <option v-for="item in villeDynamiques(formData.pays_id)" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>
                    </select>
                  </div>
                </div>
              </td>
               <td>
                <div class="control-group">
                  <label class="control-label">Commune</label>
                
                  <div class="controls">
                   <select v-model="formData.commune_id" :readOnly="verroVille">
                      <option
                        v-for="localgeo in CommuneDynamiques(formData.ville_id)"
                        :key="localgeo.id"
                        :value="localgeo.id"
                      >{{localgeo.libelle}}</option>
                    </select>
                  </div>
                  </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Situation geographique</label>
                    
               
                  <div class="controls">
                    <input
                      type="text"
                      v-model="formData.situation_geo"
                      class="span"
                    
                     
                    />
               </div>
                </div>
              </td>
            </tr>
          
          
        </table>             
          </div>
           <div class="modal-footer"> 
             <button  
             @click.prevent="ajouterTitreLocal" class="btn btn-primary"
              href="#">Valider</button>
              <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
            </div>
            
<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide gdeModalAgence">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier Agence bancaire</h3>
              </div>
              <div class="modal-body">
              <table class="table table-bordered table-striped">
         
            <tr>
              <td>
                <div class="control-group">
                  <label class="control-label">Banque</label>
                  <div class="controls">
                    <select v-model="editAgence.banque_id">
                      <option
                        v-for="typeUniteA in banques"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Code agence</label>
                  <div class="controls">
                     <input type="text" v-model="editAgence.code_agence" class="span" />
                  </div>
                </div>
              </td>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Nom agence</label>
                  <div class="controls">
                      <input type="text" v-model="editAgence.nom_agence" class="span" />
                  </div>
                   
                </div>
              </td>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Telephone agence</label>
                  <div class="controls">
                    <input type="number" v-model="editAgence.tel_agence" class="span" />
                  </div>
                </div>
              </td>
            </tr>

            <tr>
             
              <td>
                 <div class="control-group">
                  <label class="control-label">Pays</label>
                  <div class="controls">
                    <select v-model="editAgence.pays_id">
                     <option></option>
                                                            <option v-for="item in affichePays" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>
                    </select>
                  </div>
                </div>
              </td>
               <td>
                  <div class="control-group">
                  <label class="control-label">Ville</label>
                  <div class="controls">
                    <select v-model="editAgence.ville_id" :readOnly="verroPays">
                      <option></option>
                                                            <option v-for="item in villeDynamiques(formData.pays)" :key="item.id" :value="item.id">
                                                                {{item.libelle}}
                                                            </option>
                    </select>
                  </div>
                </div>
              </td>
               <td>
                <div class="control-group">
                  <label class="control-label">Commune</label>
                
                  <div class="controls">
                   <select v-model="editAgence.commune_id" :readOnly="verroVille">
                      <option
                        v-for="localgeo in CommuneDynamiques(editAgence.ville_id)"
                        :key="localgeo.id"
                        :value="localgeo.id"
                      >{{localgeo.libelle}}</option>
                    </select>
                  </div>
                  </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Situation geographique</label>
                    
               
                  <div class="controls">
                    <input
                      type="text"
                      v-model="editAgence.situation_geo"
                      class="span"
                    
                     
                    />
               </div>
                </div>
              </td>
            </tr>
          
          
        </table> 
          </div>
           <div class="modal-footer"> 
             <button 
              @click.prevent="modifierSectionLocal(editAgence)" class="btn btn-primary"
              >Modifier</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>


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
                                            class="btn btn-success pull-right"
                                            style="cursor:pointer;"
                                              :fields = "json_fields"
                                              title="Liste Agence banque "
                                              name ="Liste agence banque"
                                              worksheet = "agence banque"
                                            :data="banques">
                    <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel> 
                       <div  align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
               </div> 
                                     </div>
                                     
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Listes des Agences bancaires</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
               
              </div> -->
            </div>

            <div class="widget-content nopadding" v-if="banques.length" >
              <agenceItemComponent v-for="equipement in banques"
               :key="equipement.id"
                :groupe="equipement"
                @modification="afficherModalModifierSection" 
                @suppression="supprimerSect"
                >
              </agenceItemComponent>

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
  @shortkey="afficherModalAjouterSection()">Open</button>

 <fab :actions="fabActions"
                main-icon="apps"
          @cache="afficherModalAjouterSection"
        bg-color="green"

  ></fab>
<notifications  />
  </div>

</template>




  
<script>
import { mapGetters, mapActions } from "vuex";
import agenceItemComponent from './agenceItemComponent'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
export default {
  name: 'agence',
 components: {
      agenceItemComponent
  },
  data() {

    return {
      json_fields: {
          
            'CODE': 'article.code_agence',
            'NOM':'article.nom_agence',
          'TELEPHONE':'article.tel_agence',
        'SITUATION':'article.situation_geo'
                    
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
     
        formData : {
              
              	code_agence:"",
            pays_id:"",
             nom_agence:"",
            tel_agence:"",
             	ville_id:"",
            commune_id:"",
             banque_id:"",
            	situation_geo:""
        },

        editAgence: {
           
          	code_agence:"",
            pays_id:"",
             nom_agence:"",
            tel_agence:"",
             	ville_id:"",
            commune_id:"",
             banque_id:"",
            	situation_geo:""
        },
       search:""
    };
  },

  computed: {
      ...mapGetters("bienService", ['villes','pays','communes']),
 ...mapGetters('gestionMarche', ['banques','agences']) ,
   ...mapGetters("parametreGenerauxAdministratif", ["getterformeJuridique","getterregimeImpositions","getterplan_pays"]),
  


    villeDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.getterplan_pays.filter(
            element => element.parent == id
          );
        }
      };
    },
    affichePays(){
        return this.getterplan_pays.filter(items=>items.parent == null );
    },
    CommuneDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.getterplan_pays.filter(
            element => element.parent == id
          );
        }
      };
    },

    verroVille() {
      return this.formData.ville_id == "";
    },
      verroPays() {
      return this.formData.pays_id == "";
    },
  },
  
   


  
  methods: {
   ...mapActions('gestionMarche', ['getAgence', 
    'ajouterAgence', 
   'supprimerAgence', 'modifierAgence']), 
   
   
         genererEnPdf(){
  var doc = new jsPDF()
  // doc.autoTable({ html: this.natures_sections })
   var data = this.agences;
   doc.setFontSize(8)
    doc.text(75,10,"LISTE DES AGENCES")
  doc.autoTable(this.getColumns(),data)
doc.save('agence.pdf')
return 0
},
getColumns() {
    return [
        
        {title: "CODE AGENCE", dataKey: "code_agence"},                           
       
       
       
     
        
    ];
},

    supprimerSect(id){
      this.supprimerAgence(id)
    },
    
    //afiicher modal ajouter
    afficherModalAjouterSection(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
     // fonction pour vider l'input
    ajouterTitreLocal () {
    
      this.ajouterAgence(this.formData)

        this.formData = {
              
             	code_agence:"",
            pays_id:"",
             nom_agence:"",
            tel_agence:"",
             	ville_id:"",
            commune_id:"",
             banque_id:"",
            	situation_geo:""
        }
    },
    // afficher modal de modification
    afficherModalModifierSection(article) {
      this.$("#modifierModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editAgence = article;
    },

modifierSectionLocal(){
  this.modifierAgence(this.editAgence);
  this.$("#modifierModal").modal('hide');

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

.gdeModalAgence {

 width: 1000px;
  margin: 0 -25%;

}
</style>