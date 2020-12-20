<template>
    <div>
         <div class="modal-header">
             
                <h3>Ajouter le groupe</h3>
              </div>
              <div class="">
               
            <table class="table table-bordered table-striped">
                <tr>
                <td>

            <div class="control-group">
              <label class="control-label">Code</label>
              <div class="controls">
                <input type="text" v-model="formData.code" class="span" placeholder="Saisir le code" />
              </div>
            </div>
            
                </td>
                <td>
            <div class="control-group">
              <label class="control-label">Nom du groupe:</label>
              <div class="controls">
                <input type="text" v-model="formData.nom_groupe" class="span4" placeholder="Saisir le code" />
              </div>
            </div>
                </td>
                <td>

            <div class="control-group">
              <label class="control-label">Decription:</label>
              <div class="controls">
                <textarea type="text" v-model="formData.description" class="span4" placeholder="Saisir" ></textarea>
              </div>
            </div>
            </td>
                </tr>
            </table>
            <h4 style="margin-rigth:20px;"> Menu: </h4>
         
           
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
           
             
                      
        
           <div class="modal-footer"> 
             <button 
              @click.prevent="ajouterBudgetaireLocal" class="btn btn-primary"
              href="#">Valider</button>
              <button @click.prevent="AllerAPageListe" data-dismiss="modal" class="btn" href="#">Fermer</button> </div>
              </div>
  
   <notifications />
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    data(){
        return{
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

        }
    },
    created(){

    },
    computed:{
...mapGetters('Utilisateurs', [ 'gettersMenu']),
    },
    methods:{
...mapActions('Utilisateurs', [ 'ajouterGroupe']),

AllerAPageListe(){
  
    this.$router.push({
        name: 'groupe'
    })
    },

   ajouterBudgetaireLocal () {
     this.$router.push({name:'groupe'});
     this.ajouterGroupe(this.formData)
        this.attribue=[];
        this.formData = {
             code:"",
            description: "",
            nom_groupe:""
            
         }
     },
    }
}
</script>