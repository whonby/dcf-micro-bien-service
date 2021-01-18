
<template>
    <div>

                
                <!-- <h4>Liste des offres</h4> -->
                <table class="table table-bordered table-striped" v-if="bailleurid">
                    <thead>
                   <tr>

                                        <th>Code</th>
                                        <th>Libelle</th>
                                        <th>Action</th>
                                    </tr>
                    </thead>
                    <tbody>
                   <tr class="odd gradeX" v-for="(source, index) in listeGuichet"
                                        :key="source.id">
                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{source.code_guichet || 'Non renseigné'}}</td>

                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{source.libelle_guichet || 'Non renseigné'}}</td>
                                       
                                        
                                            <td>
                                        <div class="btn-group">
                                            <button @click.prevent="supprimerSourceFinancement(source.id)"  class="btn btn-danger ">
                                                <span class=""><i class="icon-trash"></i></span></button>

                                        </div>
                                        </td>

                                    </tr>
                    </tbody>
                </table>

              
     
 



<div id="addBailleurMarche" class="modal hide grdirModalActeEffet">
             <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter  guichet</h3>
            </div>
            <div class="modal-body">

                        <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="text" v-model="formData.code_guichet" class="span" placeholder="Saisir le code" />
              </div>
            </div>

            <div class="control-group">
              <label class="control-label">Libellé:</label>
              <div class="controls">
                <input type="text" v-model="formData.libelle_guichet" class="span" placeholder="Saisir le libellé" />
              </div>
            </div>  
            </div>
            <div class="modal-footer">
                <a  @click.prevent="ajouter"
                        class="btn btn-primary"
                        href="#"
                >Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>



<div id="modificationModal" class="modal hide grdirModalActeEffet">
           <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modification de guichet</h3>
            </div>
     <div class="modal-body">

                        <div class="control-group">
              <label class="control-label">Code:</label>
              <div class="controls">
                <input type="text" v-model="editGuichet.code_guichet" class="span" placeholder="Saisir le code" />
              </div>
            </div>

            <div class="control-group">
              <label class="control-label">Libellé:</label>
              <div class="controls">
                <input type="text" v-model="editGuichet.libelle_guichet" class="span" placeholder="Saisir le libellé" />
              </div>
            </div>  
            </div>
             <div class="modal-footer">
                <a
                        @click.prevent="modfications"
                        class="btn btn-primary"
                        href="#"

                >Modifier</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>

<!--- fin modifier acte effet financier  -->
  <notifications/>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import { formatageSomme } from '../../../../../src/Repositories/Repository';
import moment from 'moment';
export default {
    
    data(){
        return{
        //     imagePDF :"",
        // namePDF :"",
        // fichierPDF :"",
        //     selectedFile:"",

        formData:{
              code_guichet:"",
              parent:"",
              libelle_guichet:""
            
        },
       // message_offre:"",
        editGuichet:{
        
        },
           detail_marche:""
        }
    },
    props:["bailleurid"],
   created() {
    this.lot=this.sources_financements.filter(item=>item.parent==this.bailleurid)
    this.detail_marche=this.sources_financements.find(item=>item.id==this.bailleurid)
  //console.log(this.lot)
  },

       computed: {


                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),
            ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
                'types_financements']) ,
                
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
      

  listeGuichet(){
      return this.sources_financements.filter(item=>item.parent==this.bailleurid);
    },

    // recuperation de 
    

      
      },

      methods:{ 

      ...mapActions('parametreGenerauxSourceDeFinancement', ['getSourceFinancement', 'ajouterSourceFinancement', 
   'modifierFinancement',
    'supprimerSourceFinancement']), 



        afficherModalModifierActeDepense(index){
                this.$('#modificationModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.editGuichet = this.listeGuichet[index];
            },



        //   OnchangeFichier(e) {
        //       const files = e.target.files;
        //       this.selectedFile = event.target.files[0];
        //       console.log(this.selectedFile)
        //       Array.from(files).forEach(file => this.addFichierPDF(file));
        //   },
        //   addFichierPDF(file) {
        //       let reader = new FileReader();
        //       let vm = this;
        //       reader.onload = e => {
        //           vm.imagePDF = "pdf.png";
        //           vm.namePDF = file.name;
        //           vm.fichierPDF = e.target.result;
        //       };
        //       reader.readAsDataURL(file);
        //   },

             ajouter(){
                  this.formData.parent=this.bailleurid
                //    code:detail_marche.code,
                //    libelle:detail_marche.libelle,
                   //sigle:detail_marche.sigle
     this.ajouterSourceFinancement(this.formData);
     //console.log(nouvelObjet)
      this.formData = {
                     code_guichet:"",
              parent:"",
              libelle_guichet:""
                }
    // let marcheObjet=this.marches.find(marche=>marche.id==this.macheid)
    // marcheObjet.attribue=1
    //   //  this.modifierQuantiteEnStock2(objetPourModifierQuantiteEnStock2)
    //  this.modifierMarche(marcheObjet)
     
            },     

           







 modfications(){
                this.modifierFinancement(this.editGuichet)
                this.$('#modifierActeEF').modal('hide');
            },
    


formatageSomme:formatageSomme,

 formaterDate(date) {
              return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
      }
}
</script>

<style scoped>
.grdirModalActeEffet{
     width: 500px;
 margin: 0 -230px;
 height: 300px;

}
</style>