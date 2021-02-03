<template>
    <div>
           <table class="table table-bordered table-striped" v-if="macheid">
                     <thead>
                             <tr>
                                        <th>Montant de Base</th>
                                        <th>Année Budgetaire</th>
                                        <th> Montant Cp</th>
                                        <th>Montant engement reçu </th>
                                        <th>Source de financement</th>
                                        <th>Type de financement</th>
                                        <th>Action</th>
                                    </tr>
                    </thead>
                    <tbody >
                   <tr class="odd gradeX" v-for="(appelOffre, index) in listeAppelOffre(macheid)"
                                        :key="appelOffre.id">
                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.ref_sigva || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.ref_facture_proformat || 'Non renseigné'}}</td>
                                        <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.type_appel || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.mode_passation_id || 'Non renseigné'}}</td>
                                              <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.entreprise_id || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModifierActeDepense(index)">
                                            {{appelOffre.objet_appel || 'Non renseigné'}}</td>
                                            <td>
                                        <div class="btn-group">
                                            <button @click.prevent="supprimerAppelOffre(appelOffre.id)"  class="btn btn-danger ">
                                                <span class=""><i class="icon-trash"></i></span></button>

                                        </div>
                                        </td>

                                    </tr>
                    </tbody>
                </table>
                <div id="ajouterMarcheP" class="modal hide grdirModalActeEffet">
             <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter  marché pluriannuel</h3>
            </div>
            <div class="modal-body">

                    <table class="table table-bordered table-striped">
                          <tr>
                            <td>
                        <div class="control-group">
                            <label class="control-label">Année Budgetaire <code>*</code> :</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="Type appel">
                            </div>
                        </div>
                            </td>
                               <td colspan="2">
                            <div class="control-group">
                            <label class="control-label">Montant de base  <code>*</code> :</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="Type appel" >
                            </div>
                        </div>
           
                   </td> 
                           
                            </tr>
                            
                            <tr>
                             <td>
                        <div class="control-group">
                            <div class="controls">
                                <label>Montant CP <code>*</code></label>
                                <input type="text" class="span" placeholder="Numéro d'autorisation" v-model="formData.montant_cp" >
                            </div>
                        </div>
                            </td>
                                <td colspan="2">
                        <div class="control-group">
                            <div class="controls">
                                <label>Montant engagement reçu <code>*</code></label>
                                  <input type="text" class="span" placeholder="Reference d'appel" v-model="formData.montant_engagement">
                                
                            </div>
                        </div>
                                </td>
                            
                        </tr>
                        <tr>
                                <td>
                      <div class="control-group">
            <label class="control-label">Source de financement</label>
            <div class="controls">
            
               <select v-model="formData.source_financement_id" class="span" >
               <option v-for="plans in entreprises" :key="plans.id" 
               :value="plans.id"> {{plans.raison_sociale}}</option>
               <!-- <code v-if="message_offre">{{message_offre}}</code> -->
           </select>
            </div>
          </div>
                        </td>
                           <td>
                      <div class="control-group">
            <label class="control-label">Type de financement</label>
            <div class="controls">
            
               <select v-model="formData.type_financement_id" class="span" >
               <option v-for="plans in entreprises" :key="plans.id" 
               :value="plans.id"> {{plans.raison_sociale}}</option>
               <!-- <code v-if="message_offre">{{message_offre}}</code> -->
           </select>
            </div>
          </div>
                        </td>
                            </tr>
                                
                      
                    </table>  

                   

                
            </div>
            <div class="modal-footer">
                <a  @click.prevent="ajouter"
                        class="btn btn-primary"
                        href="#"
                >Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>

        <!-- modification de marché plurianniuel -->

         <div id="modifierMarcheP" class="modal hide grdirModalActeEffet">
             <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter  marché pluriannuel</h3>
            </div>
            <div class="modal-body">

                    <table class="table table-bordered table-striped">
                          <tr>
                            <td>
                        <div class="control-group">
                            <label class="control-label">Année Budgetaire <code>*</code> :</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="Type appel">
                            </div>
                        </div>
                            </td>
                               <td colspan="2">
                            <div class="control-group">
                            <label class="control-label">Montant de base  <code>*</code> :</label>
                            <div class="controls">
                                <input type="text" class="span" placeholder="Type appel" >
                            </div>
                        </div>
           
                   </td> 
                           
                            </tr>
                            
                            <tr>
                             <td>
                        <div class="control-group">
                            <div class="controls">
                                <label>Montant CP <code>*</code></label>
                                <input type="text" class="span" placeholder="Numéro d'autorisation" v-model="formData.montant_cp" >
                            </div>
                        </div>
                            </td>
                                <td colspan="2">
                        <div class="control-group">
                            <div class="controls">
                                <label>Montant engagement reçu <code>*</code></label>
                                  <input type="text" class="span" placeholder="Reference d'appel" v-model="formData.montant_engagement">
                                
                            </div>
                        </div>
                                </td>
                            
                        </tr>
                        <tr>
                                <td>
                      <div class="control-group">
            <label class="control-label">Source de financement</label>
            <div class="controls">
            
               <select v-model="formData.source_financement_id" class="span" >
               <option v-for="plans in entreprises" :key="plans.id" 
               :value="plans.id"> {{plans.raison_sociale}}</option>
               <!-- <code v-if="message_offre">{{message_offre}}</code> -->
           </select>
            </div>
          </div>
                        </td>
                           <td>
                      <div class="control-group">
            <label class="control-label">Type de financement</label>
            <div class="controls">
            
               <select v-model="formData.type_financement_id" class="span" >
               <option v-for="plans in entreprises" :key="plans.id" 
               :value="plans.id"> {{plans.raison_sociale}}</option>
               <!-- <code v-if="message_offre">{{message_offre}}</code> -->
           </select>
            </div>
          </div>
                        </td>
                            </tr>
                                
                      
                    </table>  

                   

                
            </div>
            <div class="modal-footer">
                <a  @click.prevent="ajouter"
                        class="btn btn-primary"
                        href="#"
                >Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>
    </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
      props:["macheid"],
    data(){
        return{

        }
    },
    created(){

    },
    mounted(){

    },
    computed:{
    ...mapGetters("bienService",[''])
    },
    methods:{
...mapActions("bienService",[''])
    }
}
</script>

<style scoped>
.grdirModalActeEffet{
     width: 1000px;
 margin: 0 -530px;
 height: 600px;

}
</style>