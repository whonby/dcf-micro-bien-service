<template>
    <div>
                  <div class="">
                      <div class="span9" >
                         <h4>Liste des membres 000de la Cojo</h4>
                      </div>
                      <div class="span3" align="right">
                          <a href="#ajouter_membre_cojo" data-toggle="modal" class="btn btn-warning" >Ajouter un autre membre </a>
                      </div>
                     
                  </div>

                    <table class="table table-bordered table-striped" v-if="macheid">
                          <thead>
                          <tr>
                              <th>Matricule</th>
                              <th>Nom et prenom</th>
                              <th>Role</th>
                              <th>Action</th>
                          </tr>
                          </thead>
                          <tbody>
                          <tr class="odd gradeX" v-for="appelOffre in listeMembreCojo(macheid)"
                              :key="appelOffre.id">
                              <td @click="afficheModaleMembreCojo(appelOffre.id)">
                                  {{appelOffre.matricule|| 'Non renseigné'}}
                              </td>
                              <td @click="afficheModaleMembreCojo(appelOffre.id)">
                                  {{appelOffre.nom_prenom || 'Non renseigné'}}</td>
                              <td @click="afficheModaleMembreCojo(appelOffre.id)">
                                  {{afficherLaListemembreCojo(appelOffre.role_membre_cojo_id )|| 'Non renseigné'}}</td>
                              <div class="btn-group">
                                  <button @click.prevent="supprimerMembreCojo(appelOffre.id)"  class="btn btn-danger " title="Supprimer">
                                      <span class=""><i class="icon-trash"></i>Supprimer</span></button>
                              </div>

                          </tr>
                          </tbody>
                      </table>


                      
             <div id="ajouter_membre_cojo" class="modal hide tailgrand" aria-hidden="true" style="display: none;">
        <div class="modal-header">
            <button data-dismiss="modal" class="close" type="button">×</button>
            <h3>Ajouter un autre membre de la Cojo </h3>
        </div>
        <div class="modal-body">
            <div class="widget-box">
                <form action="#" method="get" v-if="macheid">
                    <table class="table table-bordered table-striped">
                        <tr>
                            <td>
                                <div class="control-group">
                                    <label>Matricule</label>
                                    <div class="controls">
                                        <input type="text" class="span" placeholder="Matricule " v-model="formDataMembreCojo.matricule" v-on:keyup="rechercheMembreCojo()" >
                                        <code v-if="message_mandater">{{message_mandater}}</code>
                                    </div>
                                </div>
                            </td>

                            <td>

                                <div class="control-group">

                                    <label class="control-label">Nom et prenom <code>*</code> :</label>
                                    <div class="control-group">
                                        <input type="text" class="span" placeholder="Numero lo" v-model="formDataMembreCojo.nom_prenom">


                                    </div>
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div class="control-group">
                                    <label>Structure d'origine</label>
                                    <div class="controls">
                                        <input type="text" class="span" placeholder="Matricule " v-model="formDataMembreCojo.matricule" v-on:keyup="rechercheMembreCojo()" >
                                        <code v-if="message_mandater">{{message_mandater}}</code>
                                    </div>
                                </div>
                            </td>

                            <td>

                                <div class="control-group">

                                    <label class="control-label">Fonction <code>*</code> :</label>
                                    <div class="control-group">
                                        <input type="text" class="span" placeholder="Numero lo" v-model="formDataMembreCojo.nom_prenom">


                                    </div>
                                </div>

                            </td>
                        </tr>
                        <tr>

                            <td colspan="">

                                <div class="control-group">

                                    <label class="control-label span5">Conctacts <code>*</code> :</label>

                                   <div class="control-group">
                                        <input type="text" class="span" placeholder="Numero lo" v-model="formDataMembreCojo.nom_prenom">


                                    </div>
                                </div>
                            </td>
                            <td colspan="">

                                <div class="control-group">

                                    <label class="control-label span5">Role <code>*</code> :</label>

                                    <div class="controls">
                                         <select v-model="formDataMembreCojo.role_membre_cojo_id" class="span">
                                <option v-for="varText in role_membrecojo" :key="varText.id"
                                        :value="varText.id">{{varText.libelle}}</option>
                                  </select>

                                    </div>
                                </div>
                            </td>
                        </tr>

                    </table>




                </form>
            </div>
        </div>
        <div class="modal-footer">
            <a class="btn btn-primary" @click.prevent="ajouterMembreCojoM()">Ajouter</a>
            <a data-dismiss="modal" class="btn btn-inverse" href="#">Cancel</a>
        </div>
    </div>


      <div id="modification_membre_cojo" class="modal hide" aria-hidden="true" style="display: none;">
        <div class="modal-header">
            <button data-dismiss="modal" class="close" type="button">×</button>
            <h3>modification  </h3>
        </div>
        <div class="modal-body">
            <div class="widget-box">
                <form action="#" method="get" v-if="macheid">
                    <table class="table table-bordered table-striped">
                        <tr>
                            <td>
                                <div class="control-group">
                                    <label>Matricule</label>
                                    <div class="controls">
                                        <input type="text" class="span" placeholder="Matricule " v-model="edite_membre_cojo.matricule"  >
                                        <code v-if="message_mandater">{{message_mandater}}</code>
                                    </div>
                                </div>
                            </td>

                            <td>

                                <div class="control-group">

                                    <label class="control-label">Nom et prenom <code>*</code> :</label>
                                    <div class="control-group">
                                        <input type="text" class="span" placeholder="Numero lo" v-model="edite_membre_cojo.nom_prenom">


                                    </div>
                                </div>

                            </td>
                        </tr>
                        <tr>

                            <td colspan="2">

                                <div class="control-group">

                                    <label class="control-label span5">Role <code>*</code> :</label>

                                    <div class="controls">
                                             <select v-model="edite_membre_cojo.role_membre_cojo_id" class="span">
                                          <option v-for="varText in role_membrecojo" :key="varText.id"
                                        :value="varText.id">{{varText.libelle}}</option>
                                          </select>

                                    </div>
                                </div>
                            </td>
                        </tr>

                    </table>




                </form>
            </div>
        </div>
        <div class="modal-footer">
            <a class="btn btn-primary" @click.prevent="editeMembreCojoM()">Modifier</a>
            <a data-dismiss="modal" class="btn btn-inverse" href="#">Cancel</a>
        </div>
    </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    data(){
        return{
                formDataMembreCojo:{
                   matricule:"",
                        type_appel:"",
                        nom_prenom:"",
                        role_membre_cojo_id:"",
                        cojo_id:"",

            },
            edite_membre_cojo:"",
            message_mandater:""

        }
    },
    props:["macheid"],
    created(){

    },
    computed:{

  ...mapGetters('bienService',['getterMembreCojo','getterCojos',"role_membrecojo"]),  

...mapGetters('personnelUA', ['acteur_depenses']),


 // afficher la liste des roles membres
 afficherLaListemembreCojo(){
     return id =>{
         if(id!=null && id!=""){
             let varObjetListeMembrecojo = this.role_membrecojo.find(idmache =>idmache.id==id)
             return varObjetListeMembrecojo.libelle
         }
         return null
     }
 }

    },
    methods:{

 ...mapActions('bienService',['supprimerMembreCojo',
         'ajouterMembreCojo','modificationMembreCojo']),
        
                     editeMembreCojoM(){
    this.modificationMembreCojo(this.edite_membre_cojo)
    this.$('#modification_membre_cojo').modal('hide');
},

                ajouterMembreCojoM(){
                   var nouvelObjet ={
                 ...this.formDataMembreCojo,
                  marche_id :this.macheid,
                  cojo_id:this.cojo_id
                   }  
                //this.formDataMembreCojo.cojo_id=this.idcojo
              this.ajouterMembreCojo(nouvelObjet)
                this.formDataMembreCojo= {
                       matricule:"",
                        type_appel:"",
                        nom_prenom:"",
                        role_membre_cojo_id:"",
                        cojo_id:"",
                }
            },

             listeMembreCojo: function (){
                let vM=this;
                if( vM.idcojo!=""){
                    return this.getterMembreCojo.filter(idmem=>idmem.cojo_id==vM.idcojo);
                }
                return null;
             },

            rechercheMembreCojo(){
                // console.log(this.formMandater.matricule_m)

                let objetMandater=this.acteur_depenses.filter(item=>item.acteur_depense.matricule==this.formDataMembreCojo.matricule)
                // console.log(objetMandater)
                if(objetMandater!=undefined){
                    if (objetMandater.length==1){
                        let acteur= this.acteur_depenses.find(item=>item.acteur_depense.matricule==this.formDataMembreCojo.matricule)
                        this.formDataMembreCojo.nom_prenom=acteur.acteur_depense.nom +" "+acteur.acteur_depense.prenom
                        
                        this.message_mandater=" "

                    }
                    else{
                        this.message_mandater="Ce matricule n'existe pas dans notre base de donnée "
                        this.formDataMembreCojo.nom_prenom=""
                    }
                }
                if(this.formDataMembreCojo.matricule==""){
                    this.formDataMembreCojo.nom_prenom=""
                    this.message_mandater=" "
                }
            },

              afficheModaleMembreCojo(index){
                this.$('#modification_membre_cojo').modal({
                    backdrop: "static",
                    keyboard:false
                })
                this.edite_membre_cojo = this.getterMembreCojo.find(item=>item.id==index);
            },
    }
}
</script>
<style scoped>
.tailgrand{
  width: 88%;
  margin: 0 -42%;
}
</style>