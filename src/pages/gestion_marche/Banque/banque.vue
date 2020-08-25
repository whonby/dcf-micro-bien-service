
<template>
  <div>
  
       
    
      <!-- End Page Header -->
            <!-- Default Light Table -->
           <div class="container-fluid">
        <hr>
    <div class="row-fluid">
      <div class="span12">
           <div>

                                        <download-excel
                                            class="btn btn-success pull-right"
                                            style="cursor:pointer;"
                                              :fields = "json_fields"
                                              title="Liste des Banques "
                                              name ="Liste des banques"
                                              worksheet = "Banques"
                                            :data="banquesFiltre">
                      <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel> 
                                   <div  align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
               </div> 
                                     </div> <br>
        <div class="widget-box">
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Liste des banques</h5>
             <div align="right">
        Recherche: <input type="text" v-model="search">

          </div>
             
          </div>
           <div class="span4">
                    <br>
                    Afficher
                    <select name="pets" id="pet-select" v-model="size" class="span3">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    Entrer
                </div>
         
           <div class="widget-content nopadding">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Code banque</th>
                     <!-- <th>Numero banque</th> -->
                    <th>Libellé</th>
                  <th>Téléphone</th>
                  <th>Situation géographique</th>
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="(banque, index) in 
               partition (banquesFiltre,size)[page]"
                 :key="banque.id">

                  <td @dblclick="afficherModalModifierBanque(index)">
                      {{banque.code_banque || 'Non renseigné'}}</td>
                 <!-- <td @dblclick="afficherModalModifierBanque(index)">
                      {{banque.numero_banque || 'Non renseigné'}}</td> -->
                  <td @dblclick="afficherModalModifierBanque(index)">
                      {{banque.libelle || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierBanque(index)">
                      {{banque.telephone || 'Non renseigné'}}</td>
                       <td @dblclick="afficherModalModifierBanque(index)">
                      {{banque.situation_geographique || 'Non renseigné'}}</td>
                   
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerBanque(banque.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
            </div>

                  </td>
                </tr>
              </tbody>
            </table>
            <div v-if="banquesFiltre.length">    
            </div>
            <div v-else>
              <div align="center">
                <h6 style="color:red;">Aucune banque enregistrée </h6>
              </div>
            </div>
          </div>
        </div>
         <div class="pagination alternate">
              <ul>
                <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
                   <li  v-for="(titre, index) in partition(banquesFiltre,size).length" :key="index" :class="{ active : active_el == index }">
                   <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
                <li :class="{ disabled : page == partition(banquesFiltre,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>

              </ul>
           </div>
      </div>
              </div>
            </div>

       
  
<!----- ajouter modal   ---->


 <div id="exampleModal" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter banque</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">

                  <div class="control-group">
              <label class="control-label">Code banque:</label>
              <div class="controls">
                <input type="text" v-model="formData.code_banque	" class="span" placeholder="Saisir le numero " />
              </div>
            </div>

            <!-- <div class="control-group">
              <label class="control-label">Numero banque:</label>
              <div class="controls">
                <input type="text" v-model="formData.numero_banque	" class="span" placeholder="Saisir le numero " />
              </div>
            </div> -->

            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                  <input type="text" v-model="formData.libelle" class="span" placeholder="saisir la banque">
                     
                
                
              </div>
            </div>

            <div class="control-group">
              <label class="control-label">Telephone:</label>
              <div class="controls">
                <input type="number" v-model="formData.telephone" class="span" placeholder="" />
              </div>
            </div>
             <div class="control-group">
              <label class="control-label">Situation geographique:</label>
              <div class="controls">
                <input type="text" v-model="formData.situation_geographique" class="span" placeholder="" />
              </div>
            </div>
             
          </form>              
          </div>
           <div class="modal-footer"> 
             <button 
              @click.prevent="ajouterPrestationLocal" class="btn btn-primary"
              href="#">Valider</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>

<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier banque</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">

                   <div class="control-group">
              <label class="control-label">Code banque:</label>
              <div class="controls">
                <input type="text" v-model="editBanque.code_banque	" class="span" placeholder="Saisir le numero " />
              </div>
            </div>

                    <!-- <div class="control-group">
              <label class="control-label">Numero banque:</label>
              <div class="controls">
                <input type="text" v-model="editBanque.numero_banque" class="span" placeholder="Saisir le numero " />
              </div>
            </div>  -->


            
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="editBanque.libelle" class="span" />
                      
                      
   
              </div>

              <div class="control-group">
              <label class="control-label">Telephone:</label>
              <div class="controls">
                <input type="number" v-model="editBanque.telephone" class="span" placeholder="" />
              </div>
            </div>
             <div class="control-group">
              <label class="control-label">Situation geographique:</label>
              <div class="controls">
                <input type="text" v-model="editBanque.situation_geographique" class="span" placeholder="" />
              </div>
            </div>
            </div>
        
          </form>              
          </div>
           <div class="modal-footer"> 
             <button
             @click.prevent="modifierPrestationLocal(editBanque)" class="btn btn-primary"
              href="#">Modifier</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>


<!----- fin modifier modal  ---->



<button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="afficherModalAjouterPrestation()">Open</button>

 <fab :actions="fabActions"
                main-icon="apps"
          @cache="afficherModalAjouterPrestation"
        bg-color="green"

  ></fab>

<notifications />


  </div>
  
</template>
   
<script>
//import axios from '../../../../urls/api_parametrage/api'
import {mapGetters, mapActions} from 'vuex'
import {partition} from '../../../../src/Repositories/Repository'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
export default {
  
  data() {
    return {
      page:0,
      size:10,
      active_el:0,

      json_fields:{
             'Libelle':'libelle',
             
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

                	code_banque:"",
                numero_banque:"",
             	libelle: "",
             	telephone:"",
            	situation_geographique:""
            
        },

        editBanque: {
          	code_banque:"",
            numero_banque:"",
             	libelle: "",
             	telephone:"",
            situation_geographique:""
        },
            search:""
    };
  },

 
  created() {
    //  this.getStructureActivite()
  },
  computed: {
// methode pour maper notre guetter
   ...mapGetters('gestionMarche', ['banques']) ,
   
    // methode pour trier un item

           banquesFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.banques.filter((item) => {
  
 return item.libelle.toLowerCase().includes(searchTerm) 
    

  
  

   }
)
   }
  },

  methods: {
    // methode pour notre action
   ...mapActions('gestionMarche', ['ajouterBanque', 
   'modifierBanque','supprimerBanque']), 
   
   // pagination
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
        genererEnPdf(){
  var doc = new jsPDF()
  // doc.autoTable({ html: this.natures_sections })
   var data = this.banques;
   doc.setFontSize(8)
    doc.text(78,10,"LISTE DES BANQUES")
  doc.autoTable(this.getColumns(),data)
doc.save('banque.pdf')
return 0
},
getColumns() {
    return [
        
        {title: "CODE", dataKey: "code_banque"},
        {title: "LIBELLE", dataKey: "libelle"},
         {title: "TELEPHONE", dataKey: "telephone"},
          {title: "SITUATION_GEO", dataKey: "situation_geographique"},
     
        
    ];
},
   
   
    afficherModalAjouterPrestation(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
     ajouterPrestationLocal () {
     this.ajouterBanque(this.formData)

        this.formData = {
          
           	code_banque:"",
                numero_banque:"",
             	libelle: "",
             	telephone:"",
            	situation_geographique:""
         }
     },
// afficher modal
afficherModalModifierBanque(index){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editBanque = this.banques[index];


        
 },
// 
modifierPrestationLocal(){
  this.modifierBanque(this.editBanque)
  this.$('#modifierModal').modal('hide');
  // this.editBanque = {
  //   libelle_prestation:"",
  //   libelle:"",
   
  // }
}

  }
};
</script>

