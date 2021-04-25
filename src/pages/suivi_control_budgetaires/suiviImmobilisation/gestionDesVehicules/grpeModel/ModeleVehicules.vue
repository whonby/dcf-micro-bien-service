
<template>
  <div>
   
<!----- ajouter modal   ---->


 <div id="ModalModel" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter le model</h3>
              </div>
              <div class="modal-body">
              <table class="table table-bordered table-striped">
                  <tr>
                    <td>
                     <div class="control-group">
             <label class="control-label">Type de bien corporel</label>
              <div class="controls">
                 <select  class="span" v-model="formData.typecorporel">
                      <option></option>                     
                     <option value="1">Matériel et mobilier</option> 
                     <option value="2">Véhicule</option> 
                    </select>
              </div>
            </div>
                            </td>
                  </tr>
             <tr>
                 <td>
                     <div class="control-group">
              <label class="control-label" style="font-size:14px">Marque</label>
              <div class="controls">
                <select  v-model="formData.marque_id" class="span">
            <option v-for="resultat in fitreMarqueParTypeCorporel(formData.typecorporel)" :key="resultat.id" 
            :value="resultat.id">{{resultat.libelle}}</option>
                </select>
              </div>
            </div>
                 </td>
              
             </tr>
<tr>
       <td>
<div class="control-group">
              <label class="control-label" style="font-size:14px">Libelle</label>
              <div class="controls">
                <input type="text" v-model="formData.libelle" class="span"  />
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

 <div id="modifierModalModel" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier le model</h3>
              </div>
              <div class="modal-body">
              <table class="table table-bordered table-striped">
<tr>
   <td>
                     <div class="control-group">
             <label class="control-label">Type de bien corporel</label>
              <div class="controls">
                 <select  class="span" v-model="editSection.typecorporel">
                      <option></option>                     
                     <option value="1">Matériel et mobilier</option> 
                     <option value="2">Véhicule</option> 
                    </select>
              </div>
            </div>
                            </td>
</tr>
               <tr>
                   <td>
                       <div class="control-group">
              <label class="control-label" style="font-size:14px">Marque</label>
              <div class="controls">
               <select  v-model="editSection.marque_id" class="span">
            <option v-for="resultat in fitreMarqueParTypeCorporel(editSection.typecorporel)" :key="resultat.id" 
            :value="resultat.id">{{resultat.libelle}}</option>
                </select>
              </div>
            </div>
                   </td>
               </tr>

          
           <tr>
               <td>
                    <div class="control-group">
              <label class="control-label" style="font-size:14px">Libelle</label>
              <div class="controls">
                <input type="text" v-model="editSection.libelle" class="span" placeholder="" />
              </div>
            </div>
               </td>
           </tr>
            

              </table>              
          </div>
           <div class="modal-footer"> 
             <button  
              @click.prevent="modifierModeleVehiculeLocal(editSection)" class="btn btn-primary"
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

                                        
                      <!-- <div align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
          </div>  -->
             <table class="table table-bordered table-striped">
          
          <td style="width: 0%; font-weight: bolder; color: #000">
            <div align="right" style="cursor: pointer">
             <download-excel
                                            class="btn btn-danger pull-right"
                                            style="cursor:pointer;"
                                              :fields = "json_fields"
                                              title="Liste Section "
                                              name ="Liste section"
                                              worksheet = "section"
                                            :data="marqueVehicules">
                    <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel> 
            </div>
          </td>
          <td style="width: 0px">
            <div align="right" style="cursor: pointer">
              <button
                class="btn btn-danger"
                @click.prevent="genererEnPdf"
                style="font-weight: bolder; color: #fff; font-size: 20px"
              >
                <i class="icon-print">
                  Exporter en PDF</i
                >
              </button>
            </div>
          </td>
          
         <td style="width: 0px">
            <div align="right" style="cursor: pointer">
              <button
                class="btn btn-success"
                @click.prevent="afficherModalajouterModeleVehicule"
                style="font-weight: bolder; color: #fff; font-size: 20px"
              >
                <i class="icon icon-plus">
                  AJOUTER MODEL</i
                >
              </button>
            </div>
          </td>
        </table>
                                     </div>
                                     
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des Models</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
               
              </div> -->
            </div>

            <div class="widget-content nopadding" v-if="marqueVehicules.length" >
              <ModelItemComponent v-for="equipement in partition(marqueVehicules, size)[page]"
               :key="equipement.id"
                :groupe="equipement"
                @modification="afficherModalmodifierModeleVehicule" 
                @suppression="supprimerSect"
                >
              </ModelItemComponent>

              <!-- <div v-if="filtre_famille.length"></div>
              <div v-else>
                <p style="text-align:center;font-size:20px;color:red;">Aucun Article</p>
              </div> -->

             <div class="pagination alternate">
              <ul>
           <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
           <li  v-for="(titre, index) in partition(marqueVehicules,size).length" :key="index" :class="{ active : active_el == index }">
           <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
           <li :class="{ disabled : page == partition(marqueVehicules,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>
       </ul>
        </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  
    
<button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="afficherModalajouterModeleVehicule()">Open</button>

 <!-- <fab :actions="fabActions"
                main-icon="apps"
          @cache="afficherModalajouterModeleVehicule"
        bg-color="green"

  ></fab> -->
<notifications  />
  </div>

</template>




  
<script>
import { mapGetters, mapActions } from "vuex";
import ModelItemComponent from './ModelItemComponent'
import {partition} from '@/Repositories/Repository'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
export default {
  name: 'Famille',
 components: {
      ModelItemComponent
  },
  data() {
    return {
       page:0,
       size:5,
      active_el:0,
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
     
        formData : {
                
              libelle:"",
             marque_id:""
        },

        editSection: {
            libelle:"",
             marque_id:""
        },
       search:""
    };
  },

  computed: {
       ...mapGetters("SuiviImmobilisation", ["marqueVehicules","ModeleVehicules"]),
       
  fitreMarqueParTypeCorporel() {
      return id => {
        if (id != null && id != "") {
           return this.marqueVehicules.filter(qtreel => qtreel.typecorporel == id);

      
      
        }
      };
    },
  
  },
  
   


  
  methods: {
   ...mapActions('SuiviImmobilisation', [ 
    'ajouterModeleVehicule', 
   'supprimerModeleVehicule', 'modifierModeleVehicule']),  

 partition:partition,
       getDataPaginate(index){
          this.active_el = index;
          this.page=index
      },
      precedent(){
          this.active_el--
          this.page --
      },
      suivant(){
          this.active_el++
          this.page ++
      },
   // exportation en pdf

     genererEnPdf(){
  var doc = new jsPDF()
  // doc.autoTable({ html: this.marqueVehicules })
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
       this.$('#ModalModel').modal({
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
      this.$("#modifierModalModel").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editSection = article;
    },

modifierModeleVehiculeLocal(){
 
  this.modifierModeleVehicule(this.editSection);
  this.$("#modifierModalModel").modal('hide');
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

