<template>
    <div>
<!-- Ajouter appel offres --->
        <div id="myAlert" class="modal hide tlg" aria-hidden="true" style="display: none;">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter  offre</h3>
            </div>
            
            <div class="modal-body">
                <div class="widget-box">
                    <form action="#" method="get">
                        <table class="table table-bordered table-striped" >
                            <tr>
                            <td>
                        <div class="control-group">
                            <label class="control-label">Type de procedure <code>*</code> :</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="Type appel" v-model="formData.type_appel" disabled>
                            </div>
                        </div>
                            </td>

                            <td colspan="2" width="250">
                        <div class="control-group">
                            <label class="control-label">Reference  offre <code>*</code> :</label>
                            <div class="controls">
                                <input type="text" class="span5" placeholder="Reference d'appel" v-model="formData.ref_appel">
                            </div>
                        </div>
                            </td>
                            </tr>

                            <tr>
                            <td colspan="3" width="">
                        <div class="control-group">
                            <label class="control-label">Objet  offre :</label>
                            <div class="controls">
                                 <textarea  v-model="formData.objet_appel"  class="textarea_editor span8" rows="3" placeholder="Entre le  text ..."></textarea>
                    
                            </div>
                        </div>
                            </td>
                            </tr>

                            <tr>
                                <td>
                        <div class="control-group">
                            <div class="controls">
                                <label>Date emission <code>*</code></label>
                                <input type="date" class="span" placeholder="Date emision" v-model="formData.date_emission">
                            </div>
                        </div>
                                </td>
                                <td>

                        <div class="control-group">
                            <div class="controls">
                                <label>Date limite <code>*</code></label>
                                <input type="date" class="span" placeholder="Date limite" v-model="formData.date_limite" :min="formData.date_emission">
                            </div>
                        </div>
                        </td>
                        <td >

                        <div class="control-group">
                            <label class="control-label">Imputation :</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="Imputation" v-model="formData.imputation" disabled>
                            </div>
                        </div>
                        </td>
                        </tr>
                        </table>
                    </form>
                </div>
            </div>
            <div class="modal-footer">  <a @click.prevent="ajouter" class="btn btn-primary"
                                           href="#">Valider</a> <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>
        </div>


         <!-- Modification appel offres --->

        <div id="modificationModal" class="modal hide taillemodal">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modification  offre</h3>
            </div>
            <div class="modal-body">
                <div class="widget-box">
                    <form action="#" method="get">
                 <table class="table table-bordered table-striped" > 

                    <tr>

                       <td>
                        <div class="control-group">
                            <label class="control-label">Type de procedure  :</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="" v-model="edite_appel_offre.type_appel">
                            </div>
                        </div>
                            </td>

                                <td colspan="2" width="250">
                        <div class="control-group">
                            <label class="control-label">Reference  offre  :</label>
                            <div class="controls">
                                <input type="text" class="span5" placeholder="Reference d'appel" v-model="edite_appel_offre.ref_appel">
                            </div>
                        </div>
                            </td>
                    </tr>


                                   <tr>
                            <td colspan="3" width="">
                        <div class="control-group">
                            <label class="control-label">Objet  offre :</label>
                            <div class="controls">
                                 <textarea   v-model="edite_appel_offre.objet_appel"  class="textarea_editor span9" rows="3" placeholder="Entre le  text ..."></textarea>
                    
                            </div>
                        </div>
                            </td>
                            </tr>

                            <tr>
                             <td>
                        <div class="control-group">
                            <div class="controls">
                                <label>Date emission </label>
                                <input type="date" class="span" placeholder="Date emision" v-model="edite_appel_offre.date_emission">
                            </div>
                        </div>
                                </td>


                                 <td colspan="">

                                 <td >


                        <div class="control-group">
                            <div class="controls">
                                <label>Date limite </label>
                                <input type="date" class="span" placeholder="Date limite" v-model="edite_appel_offre.date_limite">
                            </div>
                        </div>
                        </td>

                         <td>
                        
                        <div class="control-group">
                            <label>Imputation</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="Imputation" v-model="edite_appel_offre.imputation">
                            </div>
                        </div>
         </td>

                               

                            </tr>

                            

        


         
         


                            

                 </table>
                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <a class="btn btn-primary" @click.prevent="modfications()">Modifier</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>


        <!--debut print item offre  -->

                                   <h4>Liste des offres</h4>
                                <table class="table table-bordered table-striped" v-if="macheid">
                                    <thead>
                                    <tr>

                                        <th>Reference appel</th>
                                        <th> Type procedure</th>

                                        <!-- <th>Financement</th>
                                        <th>Nom bailleur</th> -->
                                        <th>Date emmission</th>
                                        <th>Date limite</th>
                                        <th>Objet appel</th>
                                        <th>Imputation</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr class="odd gradeX" v-for="appelOffre in listeAppelOffre(macheid)"
                                        :key="appelOffre.id">
                                        <td @dblclick="afficherModalModifierActeDepense(appelOffre.id)">
                                            {{appelOffre.ref_appel || 'Non renseigné'}}</td>
                                        <td @dblclick="afficherModalModifierActeDepense(appelOffre.id)">
                                            {{appelOffre.type_appel || 'Non renseigné'}}</td>

                                        <!-- <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.financement || 'Non renseigné'}}</td> -->

                                        <!-- <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.nom_bailleurs || 'Non renseigné'}}</td> -->
                                        <td @dblclick="afficherModalModifierActeDepense(index)">

                                        <td @dblclick="afficherModalModifierActeDepense(appelOffre.id)">

                                            {{formaterDate(appelOffre.date_emission) || 'Non renseigné'}}</td>
                                        <td @dblclick="afficherModalModifierActeDepense(appelOffre.id)">
                                            {{formaterDate(appelOffre.date_limite) || 'Non renseigné'}}</td>
                                        <td @dblclick="afficherModalModifierActeDepense(appelOffre.id)">
                                            {{appelOffre.objet_appel || 'Non renseigné'}}</td>
                                        <td @dblclick="afficherModalModifierActeDepense(appelOffre.id)">
                                            {{appelOffre.imputation || 'Non renseigné'}}</td>
                                            <td>
                                        <div class="btn-group">
                                            <button @click.prevent="supprimerAppelOffre(appelOffre.id)"  class="btn btn-danger ">
                                                <span class=""><i class="icon-trash"></i></span></button>

                                        </div>
                                        </td>

                                    </tr>
                                    </tbody>
                                </table>

        <!--finish of  print offre  -->
        


     <notifications  />
        
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment';
export default {
    data(){
return{
    edite_appel_offre:"",

    formData:{
          ref_appel:"",
                    type_appel:"",
                    financement:"",
                    nom_bailleurs:"",
                    date_emission:"",
                    date_limite:"",
                    objet_appel:"",
                    imputation:"",
                    marche_id:"",
                    

    }

}

    },
    props:["macheid"],
    

    created(){

    },

    computed:{
        ...mapGetters('bienService',['appelOffres',]),

           listeAppelOffre(){

               
                return  marche_id=>{
                    if (marche_id!="") {
                        //console.log("Marche appel offre")
                      // const vM=this;
                        let Objet=this.appelOffres.find( idmarche => idmarche.marche_id == marche_id)
                       // console.log("Marche appel offre 10")
                        if(Objet!=undefined){
                        //     vM.formDossierCadidature.appel_offre_id=Objet.id;
                        //     vM.formAnalyseDossier.appel_offre_id = Objet.id;
                        //     vM.formLot.appel_offre_id=Objet.id;
                        //     vM.formAno.appel_offre_id = Objet.id
                        //     vM.formLettre.appel_offre_id=Objet.id;
                        //     vM.formDataCojo.num_dossier_appel_offre=Objet.ref_appel;
                         }
                       // console.log(Objet)
                    return this.appelOffres.filter( idmarche => idmarche.marche_id == marche_id)
                    }
                }

            },
    },
    methods:{
        ...mapActions('bienService',['ajouterAppelOffre','modifierAppelOffre',"supprimerAppelOffre",]),

        ajouter(){
                this.formData.marche_id=this.macheid
                this.ajouterAppelOffre(this.formData)
                this.formData = {
                    ref_appel:"",
                    type_appel:"",
                    financement:"",
                    nom_bailleurs:"",
                    date_emission:"",
                    date_limite:"",
                    objet_appel:"",
                    imputation:"",
                    marche_id:"",

                }
            },


             modfications(){
                this.modifierAppelOffre(this.edite_appel_offre)
                this.$('#modificationModal').modal('hide');
            },

             afficherModalModifierActeDepense(index){
                this.$('#modificationModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });

                this.edite_appel_offre = this.appelOffres.find(item=>item.id==index);
            },

            // formatage de date
            formaterDate(date){
                return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");

            },
    }
    
}
</script>