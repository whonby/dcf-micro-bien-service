
<template>
  <div>
   
   
<!----- ajouter modal   ---->


 <div id="exampleModal" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter Ville</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
                  
             <div class="control-group">
              <label class="control-label">Pays</label>
              <div class="controls">
                <select  v-model="formData.pays_id">
            <option v-for="resultat in pays" :key="resultat.id" 
            :value="resultat.id">{{resultat.libelle}}</option>
                </select>
              </div>
            </div>

           
            <div class="control-group">
              <label class="control-label">Ville</label>
              <div class="controls">
                <input type="text" v-model="formData.libelle" class="span"  style="text-transform: uppercase" />
              </div>
            </div>
            
               
          </form>              
          </div>
           <div class="modal-footer"> 
             <button  
             @click.prevent="ajouterTitreLocal" class="btn btn-primary"
              href="#">Valider</button>
              <a data-dismiss="modal" class="btn" href="#">Fermer</a> </div>
            </div>
            
<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier Ville</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">

               <div class="control-group">
              <label class="control-label">pays</label>
              <div class="controls">
                <select  v-model="editSection.pays_id">
            <option v-for="resultat in  pays" :key="resultat.id" 
            :value="resultat.id">{{resultat.libelle}}</option>
                </select>
              </div>
            </div>

            
            
            <div class="control-group">
              <label class="control-label">Ville</label>
              <div class="controls">
                <input type="text" v-model="editSection.libelle" class="span"/>
              </div>
            </div>
            

          </form>              
          </div>
           <div class="modal-footer"> 
             <button 
              @click.prevent="modifierSectionLocal(editSection)" class="btn btn-primary"
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
                                              title="Liste des Villes "
                                              name ="Liste des Villes"
                                              worksheet = "ville"
                                            :data="villes">
                    <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel>
                           <div align="right" style="cursor:pointer;">
         <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
                   </div> 
                                     </div> 
                                     
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des villes</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
               
              </div> -->
            </div>

            <div class="widget-content nopadding" v-if="pays.length" >
              <villeItemComponent v-for="equipement in pays"
               :key="equipement.id"
                :groupe="equipement"
                @modification="afficherModalModifierSection" 
                @suppression="supprimerSect"
                >
              </villeItemComponent>

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
import villeItemComponent from './villeItemComponent'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
export default {
  name: 'Famille',
 components: {
      villeItemComponent
  },
  data() {
    return {
      json_fields: {
        'LIBELLE':'libelle'
          //  
          //  
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
             pays_id:""
        },

        editSection: {
           
              libelle:"",
              pays_id:""
        },
       search:""
    };
  },

  computed: {
      ...mapGetters("bienService", ['villes','pays']),

  
  },
  
   


  
  methods: {
   ...mapActions('bienService', ['getVille', 
    'ajouterVille', 
   'supprimerVille', 'modifierVille']), 
   
      genererEnPdf(){
  var doc = new jsPDF()
  // doc.autoTable({ html: this.natures_sections })
   var data = this.villes;
   doc.setFontSize(8)
    doc.text(75,10,"LISTE DES VILLES")
  doc.autoTable(this.getColumns(),data)
// doc.save('Villes.pdf')
doc.output('save','Villes.pdf');
doc.output('dataurlnewwindow');
return 0
},
getColumns() {
    return [
        {title: "LIBELLE", dataKey: "libelle"},
       
    ];
},



    supprimerSect(id){
      this.supprimerVille(id)
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
    
      this.ajouterVille(this.formData)

        this.formData = {
              
             libelle:"",
            pays_id:""
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
  this.modifierVille(this.editSection);
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

