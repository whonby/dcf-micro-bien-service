<template>
    <div>


                       <table class="table table-bordered table-striped" >
                                            <thead>
                                            <tr>
                                                <th>Entreprise</th>
                                                <th>Libelle</th>
                                                <th>Montant</th>
                                                <th>Date ouverture</th>
                                               
                                                <th>Action</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                         <tr class="odd gradeX" v-for="(ouverture, index) in listeOuverture(macheid)"
                        :key="ouverture.id">

                         <td @click="afficherModalOuverture(index)">
                            {{ouverture.entreprise_id || 'Non renseigné'}}</td>

                         <td @click="afficherModalOuverture(index)">
                            {{ouverture.libelle_ouverture || 'Non renseigné'}}</td>

                         <td @click="afficherModalOuverture(index)">
                            {{formatageSomme(parseFloat(ouverture.montant_ouverture)) || 'Non renseigné'}}</td>

                            <td @click="afficherModalOuverture(index)">
                            {{formaterDate(ouverture.date_ouverture) || 'Non renseigné'}}</td>
                      
                        <!-- <td>
                            <a v-if="ouverture.fichier_joint" :href="cotation.fichier_joint" class="btn btn-default" target="_blank">
                                <span class=""><i class="icon-book"></i>
                                </span>
                            </a>
                        </td> -->
                        <div class="btn-group">
                            <button @click.prevent="supprimerOuverture(ouverture.id)"  class="btn btn-danger " title="Supprimer">
                                <span class=""><i class="icon-trash"></i></span></button>

                        </div>

                    </tr>
                                            </tbody>
                                        </table>





     <div id="ajouterOuverture" class="modal hide grdtaill" aria-hidden="true" style="display: none;">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter Ouverture </h3>
            </div>
            <div class="modal-body">
                <div class="widget-box">
                    <form action="#" method="get" v-if="macheid">

                 <table class="table table-bordered table-striped" >
                     <tr>
                         <td>
                     
                         <div class="control-group">
                        <label class="control-label">Entreprise.</label>
                        <div class="controls">
                          <select v-model="formOuverture.entreprise_id" class="span">
                                <option v-for="varText in entreprises" :key="varText.id"
                                        :value="varText.id">{{varText.raison_sociale}}</option>
                            </select>
                        
                        </div>
                    </div>
                         </td>
                         

                         
                         <td>
                         <div class="control-group">
            
                            <label class="control-label">Rang:</label>
                           <div class="control-group">
                       <input type="number" class="span" placeholder="" v-model="formOuverture.rang_ouverture">
                            </div>
                        </div>
                         </td>


                         <td>
                         <div class="control-group">
            
                            <label class="control-label">Note :</label>
                           <div class="control-group">
                       <input type="number" class="span" placeholder="" v-model="formOuverture.note_ouverture">
                            </div>
                        </div>
                         </td>
                     </tr>
                     <tr>

                     <td colspan="" width="">
                            <div class="control-group">
                                <label class="control-label">Objet:</label>
                                <div class="controls">
                                    <textarea   v-model="formOuverture.libelle_ouverture"   class="textarea_editor span" rows="3" placeholder="Entrer le libellé ..."></textarea>
                                </div>

                            </div>
                        </td>

                        <td>
                            
                        <div class="control-group">

                            <label class="control-label">Date ouverture  :</label>

                            <div class="controls">
                                <input type="date" class="span" row="" placeholder=""  v-model="formOuverture.date_ouverture">
                            </div>
                        </div>
                        </td>
                         
                         <td>
                        <div class="control-group">

                        
                            <label class="control-label">Montant ouverture :</label>

                            <div class="controls">
                                <input type="text" class="span" placeholder="Montant lot" v-model="formOuverture.montant_ouverture">
                            </div>
                        </div>
                         </td>
                     </tr>
                 </table>
             

                        
                       

                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <a class="btn btn-primary" @click.prevent="ajouterOuvertureLocal()">Ajouter</a>
                <a data-dismiss="modal" class="btn btn-inverse" href="#">Cancel</a>
            </div>
        </div>



        <div id="modifierOuvertures" class="modal hide grdtaill" aria-hidden="true" style="display: none;">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier Ouverture </h3>
            </div>
            <div class="modal-body">
                <div class="widget-box">
                    <form action="#" method="get" v-if="macheid">
                       <table class="table table-bordered table-striped" >
                           <tr>
                               <td>
                 
                         <div class="control-group">
                        <label class="control-label">Entreprise.</label>
                        <div class="controls">
                          <select v-model="editOuverture.entreprise_id" class="span">
                                <option v-for="varText in entreprises" :key="varText.id"
                                        :value="varText.id">{{varText.raison_sociale}}</option>
                            </select>
                        
                        </div>
                    </div>
                               </td>

                                <td>
                        

                         <div class="control-group">
            
                            <label class="control-label">Note :</label>
                           <div class="control-group">
                       <input type="number" class="span" placeholder="Numero lo" v-model="editOuverture.note_ouverture">
                            </div>
                        </div>
                               </td>

                                <td>
                        

                         <div class="control-group">
            
                            <label class="control-label">Rang :</label>
                           <div class="control-group">
                       <input type="number" class="span" placeholder="Numero lo" v-model="editOuverture.rang_ouverture">
                            </div>
                        </div>
                               </td>
                           </tr>
                           <tr>

                             <td colspan="" width="">
                            <div class="control-group">
                                <label class="control-label">Objet:</label>
                                <div class="controls">
                                    <textarea   v-model="editOuverture.libelle_ouverture"   class="textarea_editor span" rows="3" placeholder="Entrer le libellé ..."></textarea>
                                </div>

                            </div>
                        </td>
                         
                     
                         
                  <td>

                        <div class="control-group">

                            <label class="control-label"> Date ouverture:</label>

                            <div class="controls">
                                <input type="date" class="span" row="2" placeholder=""  v-model="editOuverture.date_ouverture">
                            </div>
                        </div>
                  </td>
                  <td>
                     
                        <div class="control-group">

                        
                            <label class="control-label">Montant ouverture :</label>

                            <div class="controls">
                                <input type="text" class="span" placeholder="Montant lot" v-model="editOuverture.montant_ouverture">
                            </div>
                        </div>
                  </td>
                           </tr>
                       </table>

                        
                       

                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <a class="btn btn-primary" @click.prevent="modifierOuvertureLocal()">Modifier</a>
                <a data-dismiss="modal" class="btn btn-inverse" href="#">Cancel</a>
            </div>
        </div>
        <notifications/>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import moment from 'moment';
import {formatageSomme} from '../../../../../src/Repositories/Repository'
export default {
    data(){
        return{

            formOuverture:{
                entreprise_id:"",
                libelle_ouverture:"",
                date_ouverture:"",
                montant_ouverture:"",
                note_ouverture:"",
                rang_ouverture:""
            },
            editOuverture:{
                entreprise_id:"",
                libelle_ouverture:"",
                date_ouverture:"",
                montant_ouverture:"",
                  note_ouverture:"",
                rang_ouverture:""
            },
         cotation_id:""
        }
    },
    props:["macheid"],
    created(){


    },

      computed: {

            ...mapGetters("bienService", [ "gettersOuverturePersonnaliser","gettersCotationPersonnaliser"]),
            // ...mapGetters('personnelUA', ['acteur_depenses']),


               ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),
            // ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
            //     'types_financements']) ,
                
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
           
           listeOuverture(){
               return macheid =>{
                   if(macheid!=""){
                       return this.gettersOuverturePersonnaliser.filter(item =>item.marche_id==macheid)

                      
                      

                   }
               }
           },

        //    listeCotation(){
        //        return macheid =>{
        //            if(macheid !=""){
        //               const vM=this;
        //               let objet= this.gettersCotationPersonnaliser.find(item=>item.marche_id==macheid) 
        //                if(objet!=undefined){
        //                    vM.formCotation.entreprise_id ==objet.id;

        //                }
        //                 return this.gettersCotationPersonnaliser.filter(idmache=>idmache.marche_id==macheid)
        //            }
        //        }
        //    }

    // filtreCotation(){
    //     const searchTem = this.search.toLowerCase();

    //     return this.gettersOuverturePersonnaliser.filter((item) =>{
    //         item.nom_person.toLowerCase().includes(searchTem)
    //     })
    // }



        },
          methods:{
        
        ...mapActions("bienService", ['ajouterOuverture' , 'modifierOuverture','supprimerOuverture']),


           afficherModalOuverture(index){

             this.$('#modifierOuvertures').modal({
                  backdrop: 'static',
                    keyboard: false
             })

             this.editOuverture = this.gettersOuverturePersonnaliser.find(item=>item==index)
           },



            ajouterOuvertureLocal(){
         
                this.ajouterOuverture(this.formOuverture)
                this.formOuverture={

                     entreprise_id:"",
                libelle_ouverture:"",
                date_ouverture:"",
                montant_ouverture:"",
                  note_ouverture:"",
                rang_ouverture:""
                }
            },
            
            
            
            modifierOuvertureLocal(){

                this.modifierOuverture(this.editOuverture)
                this.$('#modifierOuvertures').modal('hide');
            },

            formatageSomme:formatageSomme,

            formaterDate(date){
                return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
                
            }


}
}
</script>

<style scoped>
.grdtaill{
 width: 1000px;
 margin: 0 -530px;
 height: 350px;
}
</style>