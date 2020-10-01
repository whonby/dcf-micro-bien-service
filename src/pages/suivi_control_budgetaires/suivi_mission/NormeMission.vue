
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
                                              title="Liste des normes de missions "
                                              name ="Liste des norme de missions "
                                              worksheet = "Normes de missions"
                                            :data="getNormeMissionPersonnaliser">
                        <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel> 

                                 <div align="right" style="cursor:pointer;">
                           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
                              </div>              
                                     </div> <br>
        <div class="widget-box">
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Liste des normes de missions</h5>
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
         
           <div class="widget-content nopadding" v-if="sources_financements.length && fonctions.length">
            <table class="table table-bordered table-striped" id="natures_sections">
              <thead>
                <tr>
                    <th>Source de financement</th>
                  <th>Fonction</th>
                <th>Perdiem</th>
                   <th>Zone</th>
                   <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="norme_mission in partition(getNormeMissionPersonnaliser,size)[page]"
                 :key="norme_mission.id">
                  <td @dblclick="afficherModalModifierNormeMission(norme_mission.id)">
                      {{norme_mission.varObjetSourceFinancement.libelle|| 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierNormeMission(norme_mission.id)">
                      {{norme_mission.varObjetFonction.libelle || 'Non renseigné'}}</td>
                   
                    <td @dblclick="afficherModalModifierNormeMission(norme_mission.id)">
                      {{formatageSomme(parseFloat(norme_mission.perdiem)) || 'Non renseigné'}}</td>

               
                        <td  @dblclick="afficherModalModifierNormeMission(norme_mission.id)">
                            <span 
                             v-if="norme_mission.zone == 0"> Côte d'ivoire</span>
                              <span v-else-if="norme_mission.zone == 1" > Afrique</span>
                            
                          <span v-else >Hors Afrique</span>
    
                          </td>
                   
                  <td>




              <div class="btn-group">
              <button @click.prevent="supprimerNormeMission(norme_mission.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
            </div>

                  </td>
                </tr>
              </tbody>
            </table>
            <div v-if="getNormeMissionPersonnaliser.length">    
            </div>
            <div v-else>
              <div align="center">
                <h6 style="color:red;">Aucune norme de mission enregistrée </h6>
              </div>
            </div>
          </div>
        </div>

        <div class="pagination alternate">
      <ul>
    <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
    <li  v-for="(titre, index) in partition(getNormeMissionPersonnaliser,size).length" :key="index" :class="{ active : active_el == index }">
    <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
     <li :class="{ disabled : page == partition(getNormeMissionPersonnaliser,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>
    </ul>
   </div>


      </div>                    
              </div>
            </div>

    

<!----- ajouter modal   ---->


 <div id="exampleModal" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter la norme de mission</h3>
              </div>
            

              <div class="modal-body">
                <form class="form-horizontal" enctype="multipart/form-data">
                
           
              <div class="control-group">
              <label class="control-label">Source de financement:</label>
              <div class="controls">
                <select  v-model="formData.source_financement_id">
            <option v-for="resultat in sources_financements" :key="resultat.id" 
            :value="resultat.id">{{resultat.libelle}}</option>
                </select>
              </div>
            </div>
         
            <div class="control-group">
              <label class="control-label">Fonction:</label>
              <div class="controls">
           <select v-model="formData.fonction_id" class="span">
               <option v-for="norme in fonctions" :key="norme.id" 
               :value="norme.id">{{norme.libelle}}</option>
           </select>
              </div>
            </div>      
    
              <div class="control-group">
              <label class="control-label">Zone:</label>
              <div class="controls">
                <select v-model="formData.zone" class="span">
              
                  <option value="0">Côte d'ivoire</option>
                  <option value="1">Afrique</option>
                   <option value="2">Hors Afrique</option>
                </select>
              </div>
            </div>
           
                  
              <div class="control-group">
              <label class="control-label">Perdiem:</label>
              <div class="controls">
                <input type="text" v-model="formData.perdiem" 
                class="span"  /> 
                  
                </div>
                
                  </div>
                             
                <div class="control-group">
              <label class="control-label">Fichier joint:</label>
              <div class="controls">
                <input type="file" id="file"  @change="onFichierChange" />
              </div>
            </div>
                   

           
        <!-- <div class="control-group">
              <label class="control-label">Fichier joint:</label>
              <div class="controls">
          
                </div>
                  </div>  -->
               


          </form>
          </div>

 




           <div class="modal-footer"> 
             <button 
              @click.prevent="ajouterNormeMissionLocal" class="btn btn-primary"
              href="#">Valider</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>

<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier norme de mission</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">

           
              <div class="control-group">
              <label class="control-label">Source de financement:</label>
              <div class="controls">
                <select  v-model="editNormeMission.source_financement_id">
            <option v-for="resultat in sources_financements" :key="resultat.id" 
            :value="resultat.id">{{resultat.libelle}}</option>
                </select>
              </div>
            </div>
              
            <div class="control-group">
              <label class="control-label">Fonction:</label>
              <div class="controls">
           <select v-model="editNormeMission.fonction_id" class="span">
               <option v-for="norme in fonctions" :key="norme.id" 
               :value="norme.id">{{norme.libelle}}</option>
           </select>
              </div>
            </div>
            


              <div class="control-group">
              <label class="control-label">Zone:</label>
              <div class="controls">
                <select v-model="editNormeMission.zone" class="span">
              
                  <option value="0">Cote d'ivoire</option>
                  <option value="1">Afrique</option>
                   <option value="2">hors Afrique</option>
                </select>
              </div>
            </div>

              <div class="control-group">
              <label class="control-label">Perdiem:</label>
              <div class="controls">
                <input type="text" v-model="editNormeMission.perdiem" 
                class="span"  />
                </div>
                  </div>
                   
                   
              
              
        
          </form>              
          </div>
           <div class="modal-footer"> 
             <button 
             @click.prevent="modifierModalNormeMissionLocal(editNormeMission)" class="btn btn-primary"
              href="#">Modifier</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
            </div>


<!----- fin modifier modal  ---->

  <button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="afficherModalAjouterFinancement()">Open</button>
              <fab :actions="fabActions"
                main-icon="apps"
       @cache="afficherModalAjouterFinancement"
        bg-color="green"

  ></fab>

<notifications />




  </div>
  
</template>
   
<script>
//import axios from '../../../../urls/api_parametrage/api'
import {mapGetters, mapActions} from 'vuex'
import {partition} from '../../../../src/Repositories/Repository'
import {formatageSomme} from '../../../Repositories/Repository'
  import jsPDF from 'jspdf'
import 'jspdf-autotable'
export default {
  
  data() {
    return {
             page:0,
            size:10,
             active_el:0,
      json_fields:{
           'Fonction':'varObjetFonction.libelle',
        'Source_financement':"varObjetSourceFinancement.libelle",
         'Perdiem':'perdiem',
         'Zone':'zone',
             
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

        fonction_id:"",
     source_financement_id: "",
      perdiem:"",
      zone:"",
      fichier_joint:"",
      // selectedFile:"",
      // imagePDF:"",
      // namePDF:"",
      // fichierPDF:""

            
        },

        editNormeMission: {
    fonction_id:"",
     source_financement_id: "",
      perdiem:"",
      zone:"",
      fichier_joint:"",
      // selectedFile:"",
      // imagePDF:"",
      // namePDF:"",
      // fichierPDF:""
            
        },
            search:""
    };
  },

 
  created() {
    //  this.getStructureActivite()
  },
  computed: {
//  parcourir le getters personnaliser
   ...mapGetters('suivi_controle_budgetaire', ['getNormeMissionPersonnaliser', 'normes_missions']) ,




   // appel des getters personnaliser
   ...mapGetters('personnelUA', ['fonctions']),
   ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements']) ,
  
   
    // methode pour trier un item
//            getNormeMissionPersonnaliser(){

//       const searchTerm = this.search.toLowerCase();

// return this.getNormeMissionPersonnaliser.filter((item) => {
  
//     //  return item.zone.toLowerCase().includes(searchTerm) 
//    return item.varObjetFonction.libelle.toLowerCase().includes(searchTerm)
    

//    }
// )
//    },

    
  },

  methods: {
    // methode pour notre action
   ...mapActions('suivi_controle_budgetaire', ['getNormeMission', 'ajouterNormeMission', 
   'modifierNormeMission','supprimerNormeMission']), 
   
           genererEnPdf(){
         var doc = new jsPDF()
        //doc.autoTable({ html: this.natures_sections })
         
        // var data = this.getNormeMissionPersonnaliser;
         doc.setFontSize(8)
        doc.text(75,10,"LISTE DES NORMES DE MISSION ")
        doc.autoTable({ html: '#natures_sections' })
        // doc.autoTable(this.getColumns(),data)
       // doc.save('Type des actes de depenses.pdf')
      doc.output('save','Liste des normes de mission.pdf');
      doc.output('dataurlnewwindow');
     return 0
     },
getColumns() {
    return [
       {    title: "FONCTION", dataKey: "fonction"},
        {    title: "SOURCE FINANCEMENT", dataKey: "source_financement"},
      {    title: "PERDIEM", dataKey: "perdiem"},
      {    title: "ZONE", dataKey: "zone"},
       
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

   
    afficherModalAjouterFinancement(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
// uploader ficheir
    onFichierChange(e){
      this.formData.fichier_joint = e.target.files[0]
    },

    //  OnchangeFichier(e) {
    //             const files = e.target.files;
    //             this.selectedFile = event.target.files[0];
    //             console.log(this.selectedFile)
    //             Array.from(files).forEach(file => this.addFichierPDF(file));
    //         },
    //         addFichierPDF(file) {
    //             let reader = new FileReader();
    //             let vm = this;
    //             reader.onload = e => {
    //                 vm.imagePDF = "pdf.png";
    //                 vm.namePDF = file.name;
    //                 vm.fichierPDF = e.target.result;
    //             };
    //             reader.readAsDataURL(file);
    //         },
   // fonction pour vider l'input
     ajouterNormeMissionLocal () {

      //  const formData = new FormData();
      //  formData.append('fichier_joint', this.selectedFile, this.selectedFile.name);
      //  formData.append('fonction_id', this.formData.fonction_id);
      //  formData.append('zone', this.formData.zone);
      //  formData.append('perdiem', this.formData.perdiem);
      //  formData.append('source_financement_id', this.formData.source_financement_id);
      //   let config = {
      //     header :{
      //          'Content-Type': 'multipart/form-data'
      //     }

      //   }

     this.ajouterNormeMission(this.formData)
     this.getNormeMission()
        this.formData = {
             fonction_id:"",
        source_financement_id: "",
        perdiem:"",
        fichier_joint:"",
          zone:""
            
         }
     },
// afficher modal
afficherModalModifierNormeMission(id){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editNormeMission = this.getNormeMissionPersonnaliser.find(item => item.id==id);


        
 },  
// 
modifierModalNormeMissionLocal(){
  // const formData = new FormData();
                
  //      formData.append('fonction_id', this.editNormeMission.fonction_id);
  //      formData.append('zone', this.editNormeMission.zone);
  //      formData.append('perdiem', this.editNormeMission.perdiem);
  //      formData.append('source_financement_id', this.editNormeMission.source_financement_id);
  //               console.log(formData)
  //               if ( this.selectedFile!==""){
  //                   formData.append('fichier_joint', this.selectedFile, this.selectedFile.name);
  //               }
  //               let config = {
  //                   header : {
  //                       'Content-Type' : 'multipart/form-data'
  //                   }
  //               }
  this.modifierNormeMission(this.editNormeMission)
  this.$('#modifierModal').modal('hide');
  // this.editNormeMission = {
  //    fonction_id:"",
  //       source_financement_id: "",
  //       perdiem:"",
  //       zone:""
  // }
},
formatageSomme:formatageSomme

  }
};
</script>

