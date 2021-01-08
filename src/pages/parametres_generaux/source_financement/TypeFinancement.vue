
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
                                              title="Liste type de financement "
                                              name ="Liste type de  financement"
                                              worksheet = "type de  financement"
                                            :data="localisationsFiltre">
                   <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel> 

                     <div align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
          </div>
                                     </div> <br>
        <div class="widget-box">
             <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
            <h5>Liste des types de financements</h5>
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
            <table class="table table-bordered table-striped" id="type_fin">
              <thead>
                <tr>
                 <th>Code</th>
                  <th>Libellé</th>
                
                   <th>Action</th>
                </tr>
                
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="types 
                in  partition (localisationsFiltre, size)[page]" :key="types.id">
                  <td @dblclick="afficherModalModifierTypefinancement(types.id)">
                    {{types.code || 'Non renseigné'}}</td>
                   <td @dblclick="afficherModalModifierTypefinancement(types.id)">
                    {{types.libelle || 'Non renseigné'}}</td>
                    
                   <!-- <td @dblclick="afficherModalModifierTypefinancement(index)">
                      {{types.souce_financement.libelle || 'Non renseigné'}}</td> -->
                  <td>



              <div class="btn-group">
              <button @click.prevent="supprimerTypeFinancement(types.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash" style="padding-right:-100px;" > Supprimer</i></span></button>
             
            </div>

                  </td>
                </tr>
              </tbody>
            </table>
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
                <h3>Ajouter type de financement</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
                   <!-- <div class="control-group">
              <label class="control-label">Source de financement:</label>
              <div class="controls">
                <select  v-model="formData.source_financement_id">
            <option v-for="resultat in sources_financements" :key="resultat.id" 
            :value="resultat.id">{{resultat.libelle}}</option>
                </select>
              </div>
            </div> -->
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

             <button v-show="formData.code.length && 
             formData.libelle.length"

            

              @click.prevent="ajouterTitreLocal" class="btn btn-primary">Valider</button>
              <button data-dismiss="modal" class="btn" href="#">Fermer</button>
           </div>
            </div>

<!----- fin modal  ajouter  ---->



<!----- modifier modal debut  ---->

 <div id="modifierModal" class="modal hide">
              <div class="modal-header">
             <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier type de financement</h3>
              </div>
              <div class="modal-body">
                <form class="form-horizontal">
                   <!-- <div class="control-group">
              <label class="control-label">Source de financement:</label>
              <div class="controls">
                <select  v-model="editTitre.source_financement_id">
            <option v-for="resultat in sources_financements" :key="resultat.id" 
            :value="resultat.id">{{resultat.libelle}}</option>
                </select>
              </div>
            </div> -->
            <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="text" v-model="editTitre.code" class="span" placeholder="" />
              </div>
            </div>
            <div class="control-group">
              <label class="control-label">Libelle:</label>
              <div class="controls">
                <input type="text" v-model="editTitre.libelle" class="span" placeholder="" />
              </div>
            </div>
            
  
          </form>              
          </div>
           <div class="modal-footer"> 
             <button 
              @click.prevent="modifierLocalisationLocal(editTitre)" class="btn btn-primary"
              >Modifier</button>
              <button data-dismiss="modal" class="btn">Fermer</button> </div>
            </div>


<!----- fin modifier modal  ---->



<button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="afficherModalAjouterTypeFinancement()">Open</button>

 <fab :actions="fabActions"
                main-icon="apps"
          @cache="afficherModalAjouterTypeFinancement"
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
        'Code':'code',
        'Libelle':'libelle',
        // 'source de financement':'souce_financement.libelle'
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
                code: "",
             libelle: "",
             source_financement_id:""
        },

        editTitre: {
            code: "",
             libelle: ""
        },
       search:""
    };
  },
 
  created() {
    // this.getTypeFinancement()
  },
  computed: {
// methode pour maper notre guetter
  ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements', 
  'types_financements']) ,
  
            localisationsFiltre(){

     const searchTerm = this.search.toLowerCase();

return this.types_financements.filter((item) => {
  
    return item.code.toLowerCase().includes(searchTerm) 
    || item.libelle.toLowerCase().includes(searchTerm)

   
  

   }
)
   }
  },
  methods: {
    // methode pour notre action
    ...mapActions('parametreGenerauxSourceDeFinancement', ['getTypeFinancement', 
    'ajouterTypeFinancement', 
   'supprimerTypeFinancement', 'modifierTypeFinancement']),  
   


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

   
// impression en pdf

genererEnPdf(){
  var doc = new jsPDF('landscape')
  // doc.autoTable({ html: this.natures_sections })
   const data = this.types_financements;
   doc.setFontSize(8)
  doc.text(75,10,"LISTE DES TYPES DE FINANCEMENTS")
  doc.autoTable(this.getColspan(), data),
  //doc.find("Action").remove()
doc.save('type_de_financement.pdf')
return 0
},

getColspan(){
  return [
    {title:"CODE", dataKey:"code"},
    {title:"LIBELLE", dataKey:"libelle"},
   
  ]
},



   
    afficherModalAjouterTypeFinancement(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
   // fonction pour vider l'input
    ajouterTitreLocal () {
      this.ajouterTypeFinancement(this.formData)

        this.formData = {
                code: "",
             libelle: "",
            source_financement_id:""
        }
    },

// afficher modal
afficherModalModifierTypefinancement(id){

 this.$('#modifierModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.editTitre = this.types_financements.find(item => item.id==id);


        
 },
modifierLocalisationLocal(){
  this.modifierTypeFinancement(this.editTitre)
  this.$('#modifierModal').modal('hide');
  // this.editTitre = {
  //               code: "",
  //            libelle: "",
  //            source_financement_id:""
  // }
},
//   sup(id){
// this.supprimerChapitre(id)
//  this.getChapitre()
//   }

  }
};
</script>

