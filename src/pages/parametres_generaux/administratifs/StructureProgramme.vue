
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
                                              title="Liste structure programme "
                                              name ="Liste structure programme"
                                              worksheet = "structure programme"
                                            :data="localisationsFiltre">
                  <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel> 
                       <div  align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
               </div>
                                     </div> 
        <div class="widget-box">
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Liste des structures des programmes</h5>
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
                  <th>Niveau</th>
                  <th style="width:90%">Libellé</th>
                   <th style="width:5%">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="structure_programme in 
              partition (localisationsFiltre,size)[page]" :key="structure_programme.id">
                  <td @dblclick="afficherModalModifierStructure(structure_programme.id)">
                    {{structure_programme.niveau || 'Non renseigné'}}</td>
                  <td @dblclick="afficherModalModifierStructure(structure_programme.id)">
                    {{structure_programme.libelle || 'Non renseigné'}}</td>
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerStructureProgramme(structure_programme.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i>Supprimer</span></button>
             
            </div>

                  </td>
                </tr>
              </tbody>
            </table>
            <div v-if="localisationsFiltre.length">
            </div>
            <div v-else>
              <div align="center">
              <h4 style="color:red;">Aucune structure programme trouvée</h4>
              </div>
          </div>
           </div>
        </div>
        <div class="pagination alternate">
              <ul>
                <li :class="{ disabled : page == 0 }"><a @click.prevent="precedent()" href="#">Précedent</a></li>
                   <li  v-for="(titre, index) in partition(localisationsFiltre,size).length" :key="index" :class="{ active : active_el == index }">
                   <a @click.prevent="getDataPaginate(index)" href="#">{{index + 1}}</a></li>
                <li :class="{ disabled : page == partition(localisationsFiltre,size).length -1 }"><a @click.prevent="suivant()" href="#">Suivant</a></li>

              </ul>
           </div>
      </div>
              </div>
            </div>

      
<!----- ajouter modal   ---->


 <div id="exampleModal" class="modal hide">
              <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter structure programme</h3>
              </div>
              <div class="modal-body">
                <table class="table table-bordered table-striped">
            <tr>
              <td>
                <div class="control-group">
              <label class="control-label">Niveau:</label>
              <div class="controls">
                <input type="number" :value="tailleTableauStructureTache" class="span5" placeholder="Saisir le niveau" readonly/>
              </div>
            </div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="formData.libelle" class="span5" placeholder="Saisir le libelle" />
              </div>
            </div>
              </td>
            </tr>
            

          </table>              
          </div>
           <div class="modal-footer"> 
             <button v-show="formData.libelle.length"
              @click.prevent="ajouetProgrammeLocal" class="btn btn-primary"
              >Valider</button>
              <a data-dismiss="modal" class="btn" >Fermer</a> </div>
            </div>

<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier structure programme</h3>
              </div>
              <div class="modal-body">
  <table class="table table-bordered table-striped">
           <tr>
             <td>
                <div class="control-group">
              <label class="control-label">Niveau:</label>
              <div class="controls">
                <input type="number" v-model="editProgramme.niveau" class="span5" placeholder="" readonly/>
              </div>
            </div>
             </td>
           </tr>
           
            <tr>
              <td>
                 <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="editProgramme.libelle" class="span5" placeholder="" />
              </div>
            </div>
              </td>
            </tr>

          </table>              
          </div>
           <div class="modal-footer"> 
             <button
              @click.prevent="modifierModalStructureprogrammeLocal(editProgramme)" class="btn btn-primary"
              >Modifier</button>
              <button data-dismiss="modal" class="btn" >Fermer</button> </div>
            </div>


<!----- fin modifier modal  ---->




<button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="afficherModalAjouterStructureProgramme()">Open</button>

 <fab :actions="fabActions"
                main-icon="apps"
          @cache="afficherModalAjouterStructureProgramme"
        bg-color="green"

  ></fab>

<notifications  />

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
        'Niveau':'niveau',
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
                niveau: "",
             libelle: ""
        },

        editProgramme: {
            niveau: "",
             libelle: ""
        },
         search:""
    };
  },
 
  created() {
   // this.getStructureProgramme()
  },
  computed: {
// methode pour maper le guetter
   ...mapGetters('parametreGenerauxAdministratif', ['structures_programmes']) ,
   // methode pour trier le tableau
       localisationsFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.structures_programmes.filter((item) => {
  
    return item.libelle.toLowerCase().includes(searchTerm) 
    // || item.libelle.toLowerCase().includes(searchTerm) 
   
  

   }
)
   },
    tailleTableauStructureTache(){
		return this.structures_programmes.length + 1
	}

  },
  methods: {
    // methode pour l'action
   ...mapActions('parametreGenerauxAdministratif', ['getStructureProgramme', 
   'ajouterStructureProgramme','modifierStructureProgramme','supprimerStructureProgramme']), 
   
   
    //, pagination
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
   var data = this.structures_programmes;
    doc.setFontSize(8)
    doc.text(75,10,"LISTES DES STRUCTURES PROGRAMMES")
  doc.autoTable(this.getColumns(),data)
doc.save('structure_programme.pdf')
return 0
},
getColumns() {
    return [
        
        {title: "NIVEAU", dataKey: "niveau"},
        {title: "LIBELLE", dataKey: "libelle"},
     
        
    ];
},
   
    afficherModalAjouterStructureProgramme(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
    ajouetProgrammeLocal () {
       var nouvelObjet = {
			...this.formData,
			niveau:this.tailleTableauStructureTache
		}
      this.ajouterStructureProgramme(nouvelObjet)

        this.formData = {
                niveau: "",
             libelle: ""
        }
    },
// afficher modal
afficherModalModifierStructure(id){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editProgramme = this.structures_programmes.find(item => item.id==id);


        
 },
 modifierModalStructureprogrammeLocal(){
   this.modifierStructureProgramme(this.editProgramme) 
   this.$('#modifierModal').modal('hide');
  //  this.editProgramme = {
  //               niveau: "",
  //              libelle: ""
  //  }
 }

  }
};
</script>

