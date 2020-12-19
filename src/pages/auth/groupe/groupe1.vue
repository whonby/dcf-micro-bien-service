
<template>
  <div>
  
      
    
      <!-- End Page Header -->
            <!-- Default Light Table -->
           <div class="container-fluid">
        <hr>
    <div class="row-fluid">
      <div class="span12">
           <div>

                                        <!-- <download-excel
                                            class="btn btn-success pull-right"
                                            style="cursor:pointer;"
                                              :fields = "json_fields"
                                              title="Liste des groupes"
                                              name ="Liste des groupes"
                                              worksheet = "Groupes"
                                            :data="getterGroupe">
                      <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel>  -->
                            <!-- <div align="right" style="cursor:pointer;">
                    <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
                        </div>  -->

                                     </div> <br>
        <div class="widget-box">
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Liste des groupes</h5>
             <div align="right">
        Recherche: <input type="text" >

          </div>
             
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
         
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                    <th>Code</th>
                  <th>Nom du groupe</th>
                  <th> Decription</th>
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="activites  in getterGroupe"
                 :key="activites.id">
                  <td @dblclick="afficherModalModifierGroupe(activites.id)">
                      {{activites.code || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierGroupe(activites.id)">
                      {{activites.nom_groupe || 'Non renseigné'}}</td>
                      <td @dblclick="afficherModalModifierGroupe(activites.id)">
                      {{activites.description || 'Non renseigné'}}</td>
                   
                  <td>
                   <router-link :to="{ name: 'Detail_groupe', params: { id: activites.id }}"
                     class="btn btn-default " title="Detail groupe">
                      <span class=""><i class=" icon-folder-open"></i></span>
                     </router-link>


              <div class="btn-group">
              <button @click.prevent="supprimerGroupe(activites.id)"  class="btn btn-danger ">
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
           
            <!-- <div v-if="getterGroupe.length">    
            </div>
            <div v-else>
              <div align="center">
                <h6 style="color:red;">Aucune categorie mission enregistrée </h6>
              </div>
            </div> -->
          </div>
        </div>

         <!-- <div class="pagination alternate">
             <ul>
           <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
           <li  v-for="(titre, index) in partition(groupeFiltre,size).length" :key="index" :class="{ active : active_el == index }">
           <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
            <li :class="{ disabled : page == partition(groupeFiltre,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>
           </ul>
        </div> -->





      </div>
              </div>
            </div>

       
  
<!----- ajouter modal   ---->


 <div id="exampleModal" class="modal hide ">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter le groupe</h3>
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
              <label class="control-label">Nom du groupe:</label>
              <div class="controls">
                <input type="text" v-model="formData.nom_groupe" class="span" placeholder="Saisir le code" />
              </div>
            </div>

            <div class="control-group">
              <label class="control-label">Decription:</label>
              <div class="controls">
                <textarea type="text" v-model="formData.description" class="span" placeholder="Saisir" ></textarea>
              </div>
            </div>
            Menu:
            <table class="table table-bordered table-striped">
              
              <tbody>
                <tr class="odd gradeX" v-for="item  in gettersMenu" :key="item.id">
                 
                    
                     <td>{{item.libelle || 'Non renseigné'}} </td>
                    <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="" toggle style="transform: scale(0.9) translate(-10%, -95%);  " v-model="attribue" :value="item.id" >
                      <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                        <label for="exercice" slot="off-label"></label>
                        </p-check></td>
                

                 
                                                           
                                                       
                </tr>
             
              </tbody>
              
            </table>
           
             
          </form>              
          </div>
           <div class="modal-footer"> 
             <button 
              @click.prevent="ajouterBudgetaireLocal" class="btn btn-primary"
              href="#">Valider</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>

<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier le groupe</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">

            <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="text" v-model="editBudgetaire.code" class="span" placeholder="" />
              </div>
            </div>
            
            <div class="control-group">
              <label class="control-label">nom du groupe:</label>
              <div class="controls">
                <input type="text" v-model="editBudgetaire.nom_groupe" class="span" placeholder="" />
              </div>
            </div>
          
            <div class="control-group">
              <label class="control-label">Description:</label>
              <div class="controls">
                <textarea type="text" v-model="editBudgetaire.description" class="span" placeholder="" ></textarea>
              </div>
            </div>
             Menu:
            <table class="table table-bordered table-striped">
              
              <tbody>
                <tr class="odd gradeX" v-for="item  in gettersMenu" :key="item.id">
                 
                    
                     <td>{{item.libelle || 'Non renseigné'}} </td>
                    <td style="text-align: center"><p-check class="p-default p-curve" color="success" off-color="" toggle style="transform: scale(0.9) translate(-10%, -95%);  " v-model="attribue" :value="item.id" >
                      <!--<img slot="extra"  class="image" src="../../../assets/004.png">-->
                        <label for="exercice" slot="off-label"></label>
                        </p-check></td>
                

                
                    
                
                                                           
                                                       
                </tr>
             
              </tbody>
              
            </table>
        
          </form>              
          </div>
           <div class="modal-footer"> 
             <button  
             @click.prevent="modifierBudgetaireLocal(editBudgetaire)" class="btn btn-primary"
              href="#">Modifier</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>


<!----- fin modifier modal  ---->



<button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="afficherModalAjouterCategorieMission()">Open</button>

 <fab :actions="fabActions"
                main-icon="apps"
          @cache="afficherModalAjouterCategorieMission"
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
     groupe_id:"",
     id:"",
        formData : {

                code:"",
             description: "",
             nom_groupe:"",
            // attribue:""
           
        },
         attribue:[],

        editBudgetaire: {
             code:"",
             description: "",
             nom_groupe:""
            
        },
            search:""
    };
  },

 
  created() {
    //  this.getStructureActivite()
  },
  computed: {
// methode pour maper notre guetter
 

           ...mapGetters('Utilisateurs', ['getterGroupe','gettersMenu']),

        
   
    // methode pour trier un item
//            groupeFiltre(){

//      const searchTerm = this.search.toLowerCase();

// return this.getterGroupe.filter((item) => {
  
//      return item.nom_groupe.toLowerCase().includes(searchTerm) 
    verificationTacheExiste(){
						return id => {
						if(id){
						let objet = this.gettersMenu.find(item =>{
						if(item.module_id == id && item.parent_id==null){
						return item
						}
						})
						if(objet){
						return true
						}
						return false	
						}
						}	
						},

  afficherCodeMenu(){
   
      
        let answer = this.gettersMenu.find(item => item.module_id==1)
       // console.log("ok kok")
         if(answer) {
             return answer.code 
         } 
         
    return null
    
  }
  

//    }
// )
//    }
  },

  methods: {
    // methode pour notre action
   ...mapActions('Utilisateurs', [ 'ajouterGroupe', 
   'modifierGroupe','supprimerGroupe']),

                   genererEnPdf(){
         var doc = new jsPDF()
        // doc.autoTable({ html: this.natures_sections })
        var data = this.getterGroupe;
         doc.setFontSize(8)
        doc.text(75,10,"LISTE DES GROUPES")
        doc.autoTable(this.getColumns(),data)
       // doc.save('Type des actes de depenses.pdf')
      doc.output('save','Liste des groupes.pdf');
      doc.output('dataurlnewwindow');
     return 0
     },
getColumns() {
    return [
       {    title: "CODE", dataKey: "code"},
        {    title: "NOM_GROUPE", dataKey: "nom_groupe"},
        {    title: "DESCRIPTION", dataKey: "description"}
       
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
   
    afficherModalAjouterCategorieMission(){
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
     this.ajouterGroupe(this.formData)
        this.attribue=[];
        this.formData = {
             code:"",
            description: "",
            nom_groupe:""
            
         }
     },
// afficher modal
afficherModalModifierGroupe(id){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editBudgetaire = this.getterGroupe.find(item => item.id==id);


        
 },
// 
modifierBudgetaireLocal(){
  this.modifierGroupe(this.editBudgetaire)
  this.$('#modifierModal').modal('hide');
  // this.editBudgetaire = {
  //   code:"",
  //   libelle:"",
   
  // }
}

  }
};
</script>

<style scoped>
.grdirModalActeEffet{
  width: 70%;
  margin: 0 -42%;
}
</style>