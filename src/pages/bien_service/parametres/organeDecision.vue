
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
                                              title="Liste des Missions "
                                              name ="Liste des missions"
                                              worksheet = "Missions"
                                            :data="organeDecisionFiltre">
                      <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel> 
                            <div align="right" style="cursor:pointer;">
                    <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
                        </div> 

                                     </div> <br>
        <div class="widget-box">
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Liste des organes de résolutions</h5>
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
                    <th>Code</th>
                  <th>Libellé</th>
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="activites  in partition (organeDecisionFiltre,size)[page]"
                 :key="activites.id">
                  <td @dblclick="afficherModalModifierOrganeDecision(activites.id)">
                      {{activites.code || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierOrganeDecision(activites.id)">
                      {{activites.libelle || 'Non renseigné'}}</td>
                   
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerOrganeDecision(activites.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
            </div>

                  </td>
                </tr>
              </tbody>
              
            </table>
             <!-- <pagination :data="laravelData" @pagination-change-page="getCategorieMission()"></pagination> -->
          
          <!-- <div class="pagination alternate">
              <ul>
               
                <li v-for="(item, index) in 4" :key="item" @click.prevent="paginate(index + 1)"><a href="#" >{{index + 1}}</a></li>
               
                
              </ul>
            </div> -->
           
            <div v-if="organeDecisionFiltre.length">    
            </div>
            <div v-else>
              <div align="center">
                <h6 style="color:red;">Aucun organe de résolutions enregistrée </h6>
              </div>
            </div>
          </div>
        </div>

         <div class="pagination alternate">
             <ul>
           <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
           <li  v-for="(titre, index) in partition(organeDecisionFiltre,size).length" :key="index" :class="{ active : active_el == index }">
           <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
            <li :class="{ disabled : page == partition(organeDecisionFiltre,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>
           </ul>
        </div>





      </div>
              </div>
            </div>

       
  
<!----- ajouter modal   ---->


 <div id="exampleModal" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter organe de résolutions</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
            <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="text" v-model="formData.code" class="span" placeholder="Saisir le code" />
              </div>
            </div>

            <div class="control-group">
              <label class="control-label">Libellé:</label>
              <div class="controls">
                <input type="text" v-model="formData.libelle" class="span" placeholder="Saisir le libellé" />
              </div>
            </div>
             
          </form>              
          </div>
           <div class="modal-footer"> 
             <button v-show="formData.code.length  && formData.libelle.length"
              @click.prevent="ajouterBudgetaireLocal" class="btn btn-primary"
              href="#">Valider</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>

<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier organe de résolutions</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">

            <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="text" v-model="editOrgane.code" class="span" placeholder="" />
              </div>
            </div>
          
            <div class="control-group">
              <label class="control-label">Libellé:</label>
              <div class="controls">
                <input type="text" v-model="editOrgane.libelle" class="span" placeholder="" />
              </div>
            </div>
        
          </form>              
          </div>
           <div class="modal-footer"> 
             <button v-show="editOrgane.code.length  && editOrgane.libelle.length" 
             @click.prevent="modifierBudgetaireLocal(editOrgane)" class="btn btn-primary"
              href="#">Modifier</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>


<!----- fin modifier modal  ---->



<button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="afficherModalAjoutOrganeDecision()">Open</button>

 <fab :actions="fabActions"
                main-icon="apps"
          @cache="afficherModalAjoutOrganeDecision"
        bg-color="green"

  ></fab>

<notifications />


  </div>
  
</template>
   
<script>
//import axios from '../../../../urls/api_parametrage/api'
import {mapGetters, mapActions} from 'vuex';
import {partition} from '../../../../src/Repositories/Repository'
  import jsPDF from 'jspdf'
import 'jspdf-autotable'

export default {
  
  data() {
    return {
       page:0,
       size:10,
       active_el:0,

      laravelData:{},
      
      json_fields:{
             'Code':'code',
             'Libelle':'libelle'
             
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

                code:"",
             libelle: "",
            
        },

        editOrgane: {
            code:"",
             libelle: "",
            
        },
            search:""
    };
  },

 
  created() {
    //  this.getStructureActivite()
  },
  computed: {
// methode pour maper notre guetter
   ...mapGetters('bienService', ['gettersOrganeDecision']) ,
   
    // methode pour trier un item
           organeDecisionFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.gettersOrganeDecision.filter((item) => {
  
     return item.libelle.toLowerCase().includes(searchTerm) 
    

  
  

   }
)
   }
  },

  methods: {
    // methode pour notre action
   ...mapActions('bienService', [ 'ajouterOrganeDecision', 
   'modifierOrganeDecision','supprimerOrganeDecision']),

                   genererEnPdf(){
         var doc = new jsPDF()
        // doc.autoTable({ html: this.natures_sections })
        var data = this.organeDecisionFiltre;
         doc.setFontSize(8)
        doc.text(75,10,"LISTE DES ORGANES DE DECISIONS")
        doc.autoTable(this.getColumns(),data)
       // doc.save('Type des actes de depenses.pdf')
      doc.output('save','Liste des organes de decisions.pdf');
      doc.output('dataurlnewwindow');
     return 0
     },
getColumns() {
    return [
       {    title: "CODE", dataKey: "code"},
        {    title: "LIBELLE", dataKey: "libelle"},
       
    ];
},
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
   
    afficherModalAjoutOrganeDecision(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
//     paginate(parm){
//       console.log("ooooooooo")
// this.getCategorieMission(parm)
//     },
   // fonction pour vider l'input

     ajouterBudgetaireLocal () {
     this.ajouterOrganeDecision(this.formData)

        this.formData = {
             code:"",
            libelle: "",
            
         }
     },
// afficher modal
afficherModalModifierOrganeDecision(id){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editOrgane = this.gettersOrganeDecision.find(item => item.id==id);


        
 },
// 
modifierBudgetaireLocal(){
  this.modifierOrganeDecision(this.editOrgane)
  this.$('#modifierModal').modal('hide');
  // this.editOrgane = {
  //   code:"",
  //   libelle:"",
   
  // }
}

  }
};
</script>

