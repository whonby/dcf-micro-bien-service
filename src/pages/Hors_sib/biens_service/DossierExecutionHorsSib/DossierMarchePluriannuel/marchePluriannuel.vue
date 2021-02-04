<template>
    <div>
           <table class="table table-bordered table-striped" v-if="macheid">
                     <thead>
                             <tr>
                                      
                                        <th>Année Budgetaire</th>
                                          <th>Montant de Base </th>
                                        <th> Montant de crédit de paiement</th>
                                        <th>Montant engement reçu </th>
                                        <th>Source de financement</th>
                                        <th>Type de financement</th>
                                        <th>Report à nouveau</th>
                                        <th>Action</th>
                                    </tr>
                    </thead>
                    <tbody >
                   <tr class="odd gradeX" v-for="(appelOffre, index) in listeMarchePluriannuel(macheid)"
                                        :key="appelOffre.id">
                                       
                                            <td @dblclick="afficherModalModificationMarchePluriannuel(index)">
                                            {{appelOffre.anneeBudgetaire || 'Non renseigné'}}</td>
                                             <td @dblclick="afficherModalModificationMarchePluriannuel(index)">
                                            {{formatageSomme(parseFloat(appelOffre.montantBase)) || 'Non renseigné'}}</td>
                                        <td @dblclick="afficherModalModificationMarchePluriannuel(index)">
                                            {{formatageSomme(parseFloat(appelOffre.montantCP)) || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModificationMarchePluriannuel(index)">
                                            {{formatageSomme(parseFloat(appelOffre.montantEngagement)) || 'Non renseigné'}}</td>
                                              <td @dblclick="afficherModalModificationMarchePluriannuel(index)">
                                            {{affiherLibelle(appelOffre.source_financement_id) || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModificationMarchePluriannuel(index)">
                                            {{affiherLibelleTypefinancement(appelOffre.type_financement) || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModificationMarchePluriannuel(index)">
                                            {{formatageSomme(parseFloat(appelOffre.report_nouveau ))|| 'Non renseigné'}}</td>
                                            <td>
                                        <div class="btn-group">
                                            <button @click.prevent="supprimerProgrammationMarchePlurieAnnuel(appelOffre.id)"  class="btn btn-danger ">
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
                     <label class="control-label">Année Budgétaire </label>
                    <div class="controls ">
                            
                     <input
                type="text"
                :value="anneeBugetaire"
                class="span5"
               readonly
              />
               </div>
               </div>
              </td>
              
                               <td colspan="">
                            <div class="control-group">
                            <label class="control-label">Montant de base  <code>*</code> :</label>
                            <div class="controls">
                                 <input
                                    type="text"
                                    :value="afficherMontantTtcDeActe(macheid)"
                                    class="span"
                                   readonly
                            />
                                <!-- <money  class="span" placeholder="saisir le montant de base" > </money> -->
                            </div>
                        </div>
           
                   </td> 
                       <td>
                        <div class="control-group">
                            <div class="controls">
                                <label>Report à nouveau <code>*</code></label>
                                <money class="span" placeholder="" v-model="formData.report_nouveau" > </money>
                            </div>
                        </div>
                       </td>
                           
                            </tr>
                            
                            <tr>
                             <td>
                        <div class="control-group">
                            <div class="controls">
                                <label>Montant Crédit de paiement <code>*</code></label>
                                <money class="span" placeholder="" v-model="formData.montantCP" > </money>
                            </div>
                        </div>
                            </td>
                                <td colspan="2">
                        <div class="control-group">
                            <div class="controls">
                                <label>Montant engagement reçu <code>*</code></label>
                                  <money  class="span" placeholder="" v-model="formData.montantEngagement"></money>
                                
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
               <option v-for="plans in sources_financements" :key="plans.id" 
               :value="plans.id"> {{plans.libelle}}</option>
               <!-- <code v-if="message_offre">{{message_offre}}</code> -->
           </select>
            </div>
          </div>
                        </td>
                           <td colspan="2">
                      <div class="control-group">
            <label class="control-label">Type de financement</label>
            <div class="controls">
            
               <select v-model="formData.type_financement" class="span" >
               <option v-for="plans in types_financements" :key="plans.id" 
               :value="plans.id"> {{plans.libelle}}</option>
               <!-- <code v-if="message_offre">{{message_offre}}</code> -->
           </select>
            </div>
          </div>
                        </td>
                            </tr>
                                
                      
                    </table>  

                   

                
            </div>
            <div class="modal-footer">
                <a  @click.prevent="ajouterLocal"
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
                <h3>Modifier  marché pluriannuel</h3>
            </div>
            <div class="modal-body">

                    <table class="table table-bordered table-striped">
                          <tr>
                            <td>
                        <div class="control-group">
                            <label class="control-label">Année Budgetaire <code>*</code> :</label>
                            <div class="controls">
                                <input type="text" class="span5" placeholder="Type appel" :value="anneeBudgetairemodifier" readonly>
                            </div>
                        </div>
                            </td>
                               <td colspan="">
                            <div class="control-group">
                            <label class="control-label">Montant de base  <code>*</code> :</label>
                            <div class="controls">
                                 <input
                                    type="text"
                                    :value="afficherMontantTtcDeActe(macheid)"
                                    class="span"
                                   readonly
                            />
                                <!-- <money  class="span" placeholder="saisir le montant de base" > </money> -->
                            </div>
                        </div>
           
                   </td> 
                    <td>
                        <div class="control-group">
                            <div class="controls">
                                <label>Report à nouveau <code>*</code></label>
                                <money class="span" placeholder="" v-model="editMarchePl.report_nouveau" > </money>
                            </div>
                        </div>
                       </td>
                           
                            </tr>
                            
                            <tr>
                             <td>
                        <div class="control-group">
                            <div class="controls">
                                <label>Montant de crédit de paiement <code>*</code></label>
                                <money class="span" placeholder="Numéro d'autorisation" v-model="editMarchePl.montantCP" > </money>
                            </div>
                        </div>
                            </td>
                                <td colspan="2">
                        <div class="control-group">
                            <div class="controls">
                                <label>Montant engagement reçu <code>*</code></label>
                                  <money class="span" placeholder="Reference d'appel" v-model="editMarchePl.montantEngagement"></money>
                                
                            </div>
                        </div>
                                </td>
                            
                        </tr>
                        <tr>
                                  <td>
                      <div class="control-group">
            <label class="control-label">Source de financement</label>
            <div class="controls">
            
               <select v-model="editMarchePl.source_financement_id" class="span" >
               <option v-for="plans in sources_financements" :key="plans.id" 
               :value="plans.id"> {{plans.libelle}}</option>
               <!-- <code v-if="message_offre">{{message_offre}}</code> -->
           </select>
            </div>
          </div>
                        </td>
                             <td colspan="2">
                      <div class="control-group">
            <label class="control-label">Type de financement</label>
            <div class="controls">
            
               <select v-model="editMarchePl.type_financement" class="span" >
               <option v-for="plans in types_financements" :key="plans.id" 
               :value="plans.id"> {{plans.libelle}}</option>
               <!-- <code v-if="message_offre">{{message_offre}}</code> -->
           </select>
            </div>
          </div>
                        </td>
                            </tr>
                                
                      
                    </table>  

                   

                
            </div>
            <div class="modal-footer">
                <a  @click.prevent="modificationLocal"
                        class="btn btn-primary"
                        href="#"
                >Modifier</a>
                <a data-dismiss="modal" class="btn" href="#">Fermer</a>
            </div>
        </div>
        <notifications/>
    </div>
</template>
<script>
import {formatageSomme} from '../../../../../Repositories/Repository'
import {mapActions, mapGetters} from 'vuex'
export default {
      props:["macheid"],
    data(){
        return{
            formData:{
                	type_financement:"",
                montantCP:"",
                montantEngagement:"",
                source_financement_id:"",
                report_nouveau:"",
                montantBase:""
            },
            editMarchePl:{}

        }
    },
    created(){

    },
    mounted(){

    },
    computed:{
    ...mapGetters("bienService",['getterProgrammationMarchePlurieAnnuel','acteEffetFinanciers']),
     ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements','types_financements']),
     ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires',"grandes_natures",
 'structures_geographiques','localisations_geographiques','getterInfrastrucure']),

 listeMarchePluriannuel: function () {
                return macheid => {
                    if (macheid != "") {
                        //console.log("Marche lettre inviation marche")
                        return this.getterProgrammationMarchePlurieAnnuel.filter(idmarche => idmarche.marche_id == macheid)
                    }
                }
            },

            //afficher libelle source financement

            affiherLibelle(){
                return id =>{
                    if(id!=null){
                        let objet = this.sources_financements.find(item =>item.id==id)
                        if(objet) return objet.libelle
                    }
                    return null
                }
            },
             affiherLibelleTypefinancement(){
                return id =>{
                    if(id!=null){
                        let objet = this.types_financements.find(item =>item.id==id)
                        if(objet) return objet.libelle
                    }
                    return null
                }
            },

      anneeBugetaire(){
     const anneBudget = this.exercices_budgetaires.find(anneBudg =>anneBudg.encours == 1 );
     if(anneBudget){
       return anneBudget.annee;
     }
     return 0
   },
    anneeBudgetairemodifier(){
     const anneBudget = this.exercices_budgetaires.find(anneBudg =>anneBudg.encours == 1 );
     if(anneBudget){
       return anneBudget.annee;
     }
     return 0
   },
     afficherMontantTtcDeActe() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);
            console.log(this.acteEffetFinanciers)
      if (qtereel) {
        return qtereel.montant_act;
      }
      return 0
        }
      };
    },
    },
    methods:{
...mapActions("bienService",['ajouterProgrammationMarchePlurieAnnuel','modifierProgrammationMarchePlurieAnnuel','supprimerProgrammationMarchePlurieAnnuel']),


  afficherModalModificationMarchePluriannuel(index){
                this.$('#modifierMarcheP').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.editMarchePl = this.listeMarchePluriannuel(this.macheid)[index]
              //  console.log(this.edit_bailleur_marche)
            },
formatageSomme:formatageSomme,



  ajouterLocal(){
            //    this.$router.push({
            //      name:'marcheHorsib'  
            //    })
              var nouvelObjet = {
                ...this.formData,
               anneeBudgetaire:this.anneeBugetaire,
               marche_id:this.macheid,
               montantBase:this.afficherMontantTtcDeActe(this.macheid)
              }
             this.ajouterProgrammationMarchePlurieAnnuel(nouvelObjet) 
              this.formData ={
     	type_financement:"",
                montantCP:"",
                montantEngagement:"",
                source_financement_id:"",
                report_nouveau:""

   
              }
            },

             modificationLocal(){
             // console.log(this.edite_appel_offre)
                this.modifierProgrammationMarchePlurieAnnuel(this.editMarchePl)
                this.$('#modifierMarcheP').modal('hide');
            },



    }
}
</script>

<style scoped>
.grdirModalActeEffet{
     width: 1000px;
 margin: 0 -530px;
 height: 500px;

}
</style>