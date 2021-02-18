
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
                                            :data="gettersAffectationGroupeUser">
                      <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel>  -->
                            <!-- <div align="right" style="cursor:pointer;">
                    <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
                        </div>  -->

                                     </div> <br>
        <div class="widget-box">
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Liste des affectations </h5>
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
                  <th>Groupe</th>
                  <th>User</th>
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="activites  in gettersAffectationGroupeUser"
                 :key="activites.id">
                  <td @dblclick="afficherModalModifierGroupe(activites.id)">
                      {{afficherLibelleGroupe(activites.groupe_id) || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierGroupe(activites.id)">
                      {{afficherLibelle(activites.user_id) || 'Non renseigné'}}</td>
                  <td>
              <div class="btn-group">
              <button @click.prevent="supprimerAffectationGroupeUser(activites.id)"  class="btn btn-danger ">
                 <span class=""><i class="icon-trash"></i>Supprimer</span></button>
             
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
           
            <!-- <div v-if="gettersAffectationGroupeUser.length">    
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

       



<notifications/>

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
 

           ...mapGetters('Utilisateurs', ['gettersAffectationGroupeUser','gettersMenu','getterUtilisateur','getterGroupe']),

        
   
    // methode pour trier un item
//            groupeFiltre(){

//      const searchTerm = this.search.toLowerCase();

// return this.gettersAffectationGroupeUser.filter((item) => {
  
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
            
            // afficher libelle d'utilisateur
            afficherLibelle(){
              return id =>{
                 if(id!=null && id!=""){
                    let response = this.getterUtilisateur.find(item =>item.id==id)
                    if(response) return response.name;
                 }
                 return null
              }
            },
            afficherLibelleGroupe(){
              return id =>{
                 if(id!=null && id!=""){
                    let response = this.getterGroupe.find(item =>item.id==id)
                    if(response) return response.nom_groupe;
                 }
                 return null
              }
            }


  

//    }
// )
//    }
  },

  methods: {
    // methode pour notre action
   ...mapActions('Utilisateurs', ['supprimerAffectationGroupeUser']),

                   genererEnPdf(){
         var doc = new jsPDF()
        // doc.autoTable({ html: this.natures_sections })
        var data = this.gettersAffectationGroupeUser;
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

// afficher modal
afficherModalModifierGroupe(id){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editBudgetaire = this.gettersAffectationGroupeUser.find(item => item.id==id);


        
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