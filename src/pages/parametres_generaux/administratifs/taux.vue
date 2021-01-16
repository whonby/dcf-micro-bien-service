localisationsFiltre
<template>
  <div>
  
       
    
      <!-- End Page Header -->
            <!-- Default Light Table -->
           <div class="container-fluid">
        <hr>
    <div class="row-fluid">
      <div class="span12">
          <!-- <div> -->

                                        <!-- <download-excel
                                            class="btn btn-default pull-right"
                                            style="cursor:pointer;"
                                              :fields = "json_fields"
                                              title="Liste exercice budgetaire "
                                              name ="Liste exrcice budgetaire"
                                              worksheet = "Exercice budgetaire"
                                            :data="exercices_budgetaires">
                     <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel>  -->

                                                                                      <div>
                              <download-excel
                                  class="btn btn-success pull-right"
                                  style="cursor:pointer;"
                                    :fields = "json_fields"
                                    title="Liste structure Organigramme Ua "
                                    name ="Liste structure Organigramme Ua"
                                    worksheet = "structure Organigramme Ua"
                                  :data="taux">
        <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>
                                       </download-excel> 
             <div  align="right" style="cursor:pointer;">
 <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
     </div>
                           </div> 
                                                 <!-- <input type="button" @click.prevent="imprimerBPdf"/> -->
                                     <!-- </div> <br> -->
        <div class="widget-box">
          
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Liste Taux TVA</h5>
             <!-- <div align="right">
        Rechercher: <input type="text" v-model="search">

          </div> -->
             
          </div>
         
           <div class="widget-content nopadding">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th width="90%">Taux</th>
                 <th>En cours</th>
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="(tau, index) 
                in taux" :key="tau.id">
                  <template v-if="!tau.encours">
                         <td @dblclick="afficherModalModifierExerciceBudgetaire(index)">
                    {{tau.libelle || 'Non renseigné'}}%</td>
                    
                                 
                  </template>


                    <template v-else>
                         <td @dblclick="afficherModalModifierExerciceBudgetaire(index)">
                    {{tau.libelle || 'Non renseigné'}}%</td>
                
                  
                  </template>
                   <td>
                     <button  @click.prevent="EncoursExerciceLocal(tau.id)"
                      v-if="tau.encours == 1"  class="btn  btn-success">
                <span >Oui</span>
       
                </button>
                   <button v-else @click.prevent="EncoursExerciceLocal(tau.id)" class="btn  btn-danger">
              
                <span >Non</span>
                </button>
                   </td>
                  <td>
                    
                    
              
              <button v-if="tau.encours!=1" @click.prevent="supprimerExerciceBudgetaire(tau.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"> Supprimer</i></span></button>
             

                  </td>
                </tr>
              </tbody>
            </table>
            <div v-if="taux.length">
            </div>
             
            <div v-else>
              <div align="center">
              <h6 style="color:red;">Aucun Taux!</h6>
            </div>
             </div>
          </div>
        </div>
      </div>
              </div>
            </div>

               

<!----- ajouter modal   ---->


 <div id="exampleModal" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter Taux</h3>
              </div>
              <div class="modal-body">
               <table class="table table-bordered table-striped">
            <div class="control-group">
               
              <label class="control-label">Taux</label>
              <div class="controls">
                <input type="number" v-model="formData.libelle" class="span4" placeholder="" />
                <input type="hidden" :value="afficheTaux" class="span" placeholder="" />
              </div>
            </div>
          
          </table>              
          </div>
           <div class="modal-footer"> 
             <button 
             v-show="formData.libelle.length "
             
              @click.prevent="ajouterExerciceLocal" class="btn btn-primary"
              href="#">Valider</button>
              <button data-dismiss="modal" class="btn " href="#">Fermer</button> </div>
            </div>

<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->



 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier Taux</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
            <div class="control-group">
              <label class="control-label">Taux</label>
              <div class="controls">
                <input type="number" v-model="edittaux.libelle"
                 class="span" placeholder="" />
                  <input type="hidden" :value="afficheTauxModifier" class="span" placeholder="" />
              </div>
            </div>
          
           
          </form>              
          </div>
           <div class="modal-footer"> 
             <button  @click.prevent="modifierExerciceBudgetaireLocal(edittaux)" 
             class="btn btn-primary"
              >Modifier</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>

<!----- fin modifier modal  ---->

  <button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="afficherModalExerciceBudgetaire()">Open</button>

 <fab :actions="fabActions"
                main-icon="apps"
          @cache="afficherModalExerciceBudgetaire"
        bg-color="green"

  ></fab>

<notifications  />




  </div>
  
</template>
   
<script>
//import axios from '../../../../urls/api_parametrage/api'
import {mapGetters, mapActions} from 'vuex'
import jsPDF from 'jspdf'
import 'jspdf-autotable'

export default {
  
  data() {
    return {

      
         json_fields: {
            'Libelle': 'libelle',
            
           
           
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
                libelle: "",
              
      
                   
          
             
        },

        edittaux: {
             libelle: "",
               
                
                     
                
            
        },
        // search:""
 
    };
  },
 
  created() {
   // this.getExercicesBudgetaires()
  },
  computed: {
// methode pour maper notre guetter
   ...mapGetters('parametreGenerauxAdministratif', ['taux']) ,
  

afficheTaux() {
      const val =
        parseFloat(this.formData.libelle) /
        100;
      return parseFloat(val).toFixed(2);
    },
    afficheTauxModifier() {
      const val =
        parseFloat(this.edittaux.libelle) /
        100;
      return parseFloat(val).toFixed(2);
    },
  },
  methods: {


imprimerBPdf(){
  // const doc = new jspdf()

   return this.taux.imprimerPdf
  //  this.doc.save("taux.pdf")
},


    // methode pour notre action
   ...mapActions('parametreGenerauxAdministratif', [ 'ajouterTaux',
    'supprimerTaux', 'modifierTaux',"EncoursTaux"]), 
    
    
        genererEnPdf(){
  var doc = new jsPDF()
  // doc.autoTable({ html: this.natures_sections })
   var data = this.taux;
    doc.setFontSize(8)
    doc.text(95,10,"LISTE DES TAUX")
  doc.autoTable(this.getColumns(),data)
doc.save('taux.pdf')
return 0
},
getColumns() {
    return [
        
        
        {title: "LIBELLE", dataKey: "libelle"},
     
        
    ];
 },

   
    afficherModalExerciceBudgetaire(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
     EncoursExerciceLocal (id) {
      this.EncoursTaux(id)

       
    },
   // fonction pour vider l'input
    ajouterExerciceLocal () {
        var nouvelObjet = {
        ...this.formData,
        arrondit: this.afficheTaux,
       

      };
      this.ajouterTaux(nouvelObjet)

        this.formData = {
              libelle: "",
                
               
             
        }
    },
// afficher modal
afficherModalModifierExerciceBudgetaire(index){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.edittaux = this.taux[index];


        
 },

modifierExerciceBudgetaireLocal(){
     var nouvelObjet = {
        ...this.edittaux,
        arrondit: this.afficheTauxModifier,
       

      };
  this.modifierTaux(nouvelObjet)
  this.edittaux ={
    
                     libelle: "",
              
               
  }
},

  }
};
</script>

