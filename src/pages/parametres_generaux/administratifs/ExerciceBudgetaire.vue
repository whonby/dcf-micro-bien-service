
<template>
  <div>
  
       
    
      <!-- End Page Header -->
            <!-- Default Light Table -->
           <div class="container-fluid grdfont" style="heigth:1024px">
        <hr>
    <div class="row-fluid">
      <div class="span12">
          <div>

                                        <download-excel
                                            class="btn btn-success pull-left"
                                            style="cursor:pointer;"
                                              :fields = "json_fields"
                                              title="Liste exercice budgetaire "
                                              name ="Liste exrcice budgetaire"
                                              worksheet = "Exercice budgetaire"
                                            :data="exercices_budgetaires">
                     <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                        </download-excel> 
                                     </div> 

               <div align="left" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
          </div>     
          <table>
                                       <tr>
                                         <h5 style="font-size:20px;text-transform: uppercase; text-align:center;text-decoration: underline;">Liste des exercices des budgétaires</h5>
                                       </tr>
                                     </table> 
                                     <div align="right" style="cursor:pointer;">
           <button class="btn btn-success" @click.prevent="afficherModalExerciceBudgetaire()">AJOUTER EXERCICE</button>
          </div>       
        <div class="widget-box">
          
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Liste des exercices des budgétaires</h5>
              <!-- <div align="right">
        Recherche: <input type="text" >

          </div>  -->
             
          </div>
           <!-- <div class="span4">
                    <br>
                    Afficher
                    <select name="pets" id="pet-select" v-model="size" class="span3">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    Entrer
                </div> -->
         
           <div class="widget-content nopadding">
            <table class="table table-bordered table-striped" id="exercice_budgetaire">
              <thead>
                <tr>
                  <th style="width:5%">Année</th>
                  <th style="width:40%">Date début</th>
                  <th style="width:30%">Date fin</th>
                  <!-- <th>Encours</th> -->
                  <th style="width:6%">En cours</th>
                  <!-- <th>Date cloture </th> -->
                   <th style="width:16%" colspan="2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="exercice_budgetaire
                in partition (exercices_budgetaires,size)[page]" :key="exercice_budgetaire.id">
                  <template v-if="!exercice_budgetaire.encours">
                         <td @dblclick="afficherModalModifierExerciceBudgetaire(exercice_budgetaire.id)">
                    {{exercice_budgetaire.annee || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierExerciceBudgetaire(exercice_budgetaire.id)">
                    {{formaterDate(exercice_budgetaire.date_debut) || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierExerciceBudgetaire(exercice_budgetaire.id)">
                    {{formaterDate(exercice_budgetaire.date_fin) || 'Non renseigné'}}</td>

                  </template>



                    <template v-else>
                         <td @dblclick="afficherModalModifierExerciceBudgetaire(exercice_budgetaire.id)" v-bind:class="exercice_budgetaire.encours==1 ? 'graybg' : 'whitebg'">
                    {{exercice_budgetaire.annee || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierExerciceBudgetaire(exercice_budgetaire.id)" v-bind:class="exercice_budgetaire.encours==1 ? 'graybg' : 'whitebg'">
                    {{formaterDate(exercice_budgetaire.date_debut) || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierExerciceBudgetaire(exercice_budgetaire.id)" v-bind:class="exercice_budgetaire.encours==1 ? 'graybg' : 'whitebg'">
                    {{formaterDate(exercice_budgetaire.date_fin) || 'Non renseigné'}}</td>
                  <!-- <td>{{exercice_budgetaire.encours ? 'Oui' : 'Non'}}</td> -->
                  
                  </template>
                   <td >
                     <button  @click.prevent="EncoursExerciceLocal(exercice_budgetaire.id)"
                      v-if="exercice_budgetaire.encours == 1"  class="btn  btn-success">
                <span >Oui</span>
       
                </button>
                   <button v-else @click.prevent="EncoursExerciceLocal(exercice_budgetaire.id) " class="btn  btn-danger" >
              
                <span >Non</span>
                </button>
                   </td>
                   <td >
                   
                    
                    
              
              <button  @click.prevent="afficherModalModifierExerciceBudgetaire(exercice_budgetaire.id)"  class="btn btn-info " >
                <span class=""><i class="icon-edit"> Modifier</i></span></button>
             

                  </td>
                  <td >
                   
                    
                    
              
              <button v-if="exercice_budgetaire.encours!=1" @click.prevent="supprimerExerciceBudgetaire(exercice_budgetaire.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"> Supprimer</i></span></button>
             

                  </td>
                </tr>
              </tbody>
            </table>
            <div v-if="exercices_budgetaires.length">
            </div>
             
            <div v-else>
              <div align="center">
              <h6 style="color:red;">Aucun exercice budgétaire enregistré !</h6>
            </div>
             </div>
          </div>
        </div>

        <div class="pagination alternate">
              <ul>
                <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
                   <li  v-for="(titre, index) in partition(exercices_budgetaires,size).length" :key="index" :class="{ active : active_el == index }">
                   <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
                <li :class="{ disabled : page == partition(exercices_budgetaires,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>

              </ul>
           </div>
      </div>
              </div>
            </div>

               

<!----- ajouter modal   ---->


 <div id="exampleModal" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter un exrcice budgétaire</h3>
              </div>
              <div class="modal-body">
                <!-- <form class="form-horizontal"> -->
                  <table class="table table-bordered table-striped">
                    <tr>
                          <td>
                                <div class="control-group" :class="{ 'form-group--error': $v.formData.annee.$error }">
                                      <label class="control-label">Année</label>
                                  <div class="controls">
                                      <input type="number" v-model.trim="$v.formData.annee.$model"  class="span5" placeholder="" />
                                  </div>
                                 
                                </div>
                                 <div style="color:red;" v-if="!$v.formData.annee.required">Ce champs est réquis !</div>
  <div style="color:red;" v-if="!$v.formData.annee.minLength">Minimum {{$v.formData.annee.$params.minLength.min}} letters.</div>
  <div style="color:red;" v-if="!$v.formData.annee.maxLength">Maximum {{$v.formData.annee.$params.maxLength.max}} letters.</div>
                          </td>
                    </tr>
                    <tr>
                          <td>
                                <div class="control-group">
                                        <label class="control-label">Date début</label>
                                    <div class="controls">
                                      <input type="date" v-model="formData.date_debut" class="span5" placeholder="" />
                                    </div>
                              </div>
                          </td>
                    </tr>
                    <tr>
                          <td>
                             <div class="control-group">
                                <label class="control-label">Date fin:</label>
                                <div class="controls">
                                  <input type="date" v-model="formData.date_fin" class="span5" placeholder="" />
                                </div>
                              </div>
                              <div style="color:red;" v-if="comparedate==false">
                                 La date de fin doit être superieur a la date de debut !
                              </div>
                          </td>
                    </tr>
            
          </table>              
          </div>
           <div class="modal-footer"> 
             <button 
             v-show="formData.annee.length==4 && formData.date_debut.length 
             && formData.date_fin.length
             "
              @click.prevent="ajouterExerciceLocal" class="btn btn-primary"
              href="#">Valider</button>
              <button data-dismiss="modal" class="btn " href="#">Fermer</button> </div>
            </div>

<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->



 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier exrcice budgétaire</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
            <div class="control-group">
              <label class="control-label">Année:</label>
              <div class="controls">
                <input type="number" v-model="editExerciceBudgetaire.annee"
                 class="span" placeholder="" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Date début:</label>
              <div class="controls">
                <input type="date" v-model="editExerciceBudgetaire.date_debut"
                 class="span" placeholder="" />
              </div>
            </div>
            
            <div class="control-group">
              <label class="control-label">Date fin:</label>
              <div class="controls">
                <input type="date" v-model="editExerciceBudgetaire.date_fin"
                 class="span" placeholder="" />
              </div>
            </div>
           
          </form>              
          </div>
           <div class="modal-footer"> 
             <button v-show="editExerciceBudgetaire.annee.length && 
             editExerciceBudgetaire.date_debut.length && 
             editExerciceBudgetaire.date_fin.length
             "
             @click.prevent="modifierExerciceBudgetaireLocal(editExerciceBudgetaire)" 
             class="btn btn-primary"
              >Valider</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>

<!----- fin modifier modal  ---->

  <!-- <button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="afficherModalExerciceBudgetaire()">Open</button>

 <fab :actions="fabActions"
                main-icon="apps"
          @cache="afficherModalExerciceBudgetaire"
        bg-color="green"

  ></fab> -->

<notifications  />




  </div>
  
</template>
   
<script>
//import axios from '../../../../urls/api_parametrage/api'
import {minLength,maxLength,required} from 'vuelidate/lib/validators'
import {mapGetters, mapActions} from 'vuex'
import {partition} from '../../../../src/Repositories/Repository'
import {admin,dcf} from '../../../../src/Repositories/Auth';
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import moment from "moment";
export default {
  
  data() {
    return {

       page:0,
       size:10,
      active_el:0,

         json_fields: {
            'Annee': 'annee',
            'Date debut': 'date_debut',
            'Date fin': 'date_fin',
           
           
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
                annee: "",
                date_debut:"",
                date_fin:"",   
        },

        editExerciceBudgetaire: {
             annee: "",
                date_debut:"",
                date_fin:"",
                
                     
                
            
        },
        // search:""
 
    };
  },

   validations:{
     formData : {
                annee: {required, minLength:minLength(4), maxLength:maxLength(4)},
                date_debut:{required},
                date_fin:{required},
        },
    },
 
  created() {
   // this.getExercicesBudgetaires()
  },
  computed: {
// methode pour maper notre guetter
   ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires']) ,
  
//     exercices_budgetaires() {

// const searchTerm = this.search.toLowerCase();

// return this.exercices_budgetaires.filter((item) => {
  
//     return item.annee.toLowerCase().includes(searchTerm) 
//     || item.date_debut.toLowerCase().includes(searchTerm) 
//     || item.date_fin.toLowerCase().includes(searchTerm)

//    }
// )

// }


  // decocher(a,b) {
  //       document.getElementById(a).checked=false;
  //       document.getElementById(b).checked=false;
  //     },



  comparedate(){
    if(this.formData.date_debut!="" && this.formData.date_fin ){
        var date1 = moment(this.formData.date_debut).format("dd-mm-yyyy");
      var date2 = moment(this.formData.date_fin).format("dd-mm-yyyy");
      if(date1 >date2){
        return false
      }else if(date1==date2){
        return false
      }
      return true
    }return true
    
},


  },
  methods: {
    // methode pour notre action
   ...mapActions('parametreGenerauxAdministratif', [ 'ajouterExerciceBudgetaire',
    'supprimerExerciceBudgetaire', 'modifierExerciceBudgetaire',"EncoursExerciceBudgetaire"]),   

 admin:admin,
     dcf:dcf,

partition:partition,

validationStatus:function(validation){
            return  typeof validation !="undefined" ? validation.$error:false;
        },

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

    // importation en pdf
     genererEnPdf(){
  var doc = new jsPDF()
  // doc.autoTable({ html: this.natures_sections })
   var data = this.exercices_budgetaires;
   doc.setFontSize(8)
    doc.text(75,10,"LISTE DES EXERCICES BUDGETAIRES")
  doc.autoTable(this.getColumns(),data)
//   doc.output('exercice_budgetaire');
// doc.save('exercice_budgetaire.pdf')
doc.output('save', 'exercice_budgetaire.pdf');
doc.output('dataurlnewwindow');
return 0
},
getColumns() {
    return [
        {title: "ANNEE", dataKey: "annee"},
        {title: "DATE DEBUT", dataKey: "date_debut"},
        {title: "DATE FIN", dataKey: "date_fin"},
        
    ];
},
   
    afficherModalExerciceBudgetaire(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
     EncoursExerciceLocal (id) {
      this.EncoursExerciceBudgetaire(id)

        // this.formData = {
        //       annee: "",
        //         date_debut:"",
        //         date_fin:"",
               
             
        // }
    },
   // fonction pour vider l'input
    ajouterExerciceLocal () {
      this.ajouterExerciceBudgetaire(this.formData)

        this.formData = {
              annee: "",
                date_debut:"",
                date_fin:"",
               
             
        }
    },
// afficher modal
afficherModalModifierExerciceBudgetaire(id){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editExerciceBudgetaire = this.exercices_budgetaires.find(item =>item.id==id);


        
 },

modifierExerciceBudgetaireLocal(){
  this.modifierExerciceBudgetaire(this.editExerciceBudgetaire)
  this.editExerciceBudgetaire ={
    
                     annee: "",
                date_debut:"",
                date_fin:"",
               
               
  }
},


formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
  }
};
</script>

<style>
.container-fluid{
  height: 1000px;
}
th{
  font-size:14px !important;

}
td{
font-size:14px !important;
font-weight: bold;
}
.whitebg {
  background: #fff !important;
  font-weight: bold;
  color: black;
  font-size: 13px;
}
.graybg {
  background: rgb(6, 184, 6) !important;
  color: white;
  font-size: 13px;
  font-weight: bold;
}
label{
  font-weight: bold !important;
  font-size: 13px !important;
}
</style>