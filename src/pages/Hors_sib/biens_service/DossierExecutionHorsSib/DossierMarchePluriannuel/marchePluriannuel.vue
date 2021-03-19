<template>
    <div>
           <table class="table table-bordered table-striped" v-if="macheid">
                     <thead>
                             <tr>
                                      
                                        <th>Année Budgetaire</th>
                                          <th>Montant de Base </th>
                                        <th> Montant  CP annuel prevu</th> 
                                        <th> Montant CP sur tresor</th>
                                        <th> Montant CP sur dons</th>
                                        <th> Montant CP sur emprunt</th>
                                        <th>Montant de crédit de paiement notifié </th>
                                        <th>Source de financement</th>
                                        <th>Type de financement</th>
                                        <th>Report à nouveau</th>
                                        <th>Durée contractuelle</th>
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
                                            {{formatageSomme(parseFloat(appelOffre.cp_tresor)) || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModificationMarchePluriannuel(index)">
                                            {{formatageSomme(parseFloat(appelOffre.cp_dons)) || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModificationMarchePluriannuel(index)">
                                            {{formatageSomme(parseFloat(appelOffre.cp_emprunt)) || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModificationMarchePluriannuel(index)">
                                            {{formatageSomme(parseFloat(appelOffre.montantCP_notifie)) || 'Non renseigné'}}</td>
                                              <td @dblclick="afficherModalModificationMarchePluriannuel(index)">
                                            {{affiherLibelle(appelOffre.source_financement_id) || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModificationMarchePluriannuel(index)">
                                            {{affiherLibelleTypefinancement(appelOffre.type_financement) || 'Non renseigné'}}</td>
                                            <td @dblclick="afficherModalModificationMarchePluriannuel(index)">
                                            {{formatageSomme(parseFloat(appelOffre.report_nouveau ))|| 'Non renseigné'}}</td>
                                                <td @dblclick="afficherModalModificationMarchePluriannuel(index)">
                                            {{appelOffre.duree_contratuel || 'Non renseigné'}}</td>
                                            
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

             <select v-model="formData.anneeBudgetaire" class="span" >
                 <!-- <option>veuillez selectionner l'année</option> -->
               <option v-for="plans in exercices_budgetaires" :key="plans.id" 
               :value="plans.annee"> {{plans.annee}}</option>
               <!-- <code v-if="message_offre">{{message_offre}}</code> -->
           </select>
                            
                     <!-- <input
                type="text"
                :value="anneeBugetaire"
                class="span5"
               readonly
              /> -->
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
                                <label>Montant Crédit de Paiement annuel prevu <code>*</code></label>
                                <input type="text" class="span" placeholder="" :value="calculCPAnnuelPourLesTypeFinancement" readonly /> 
                            </div>
                        </div>
                            </td>
                                <td colspan="">
                        <div class="control-group">
                            <div class="controls">
                                <label>Montant Crédit de Paiement annuel notifié <code>*</code></label>
                                  <money  class="span" placeholder="" v-model="formData.montantCP_notifie"></money>
                                
                            </div>
                        </div>
                                </td>

                                    <td colspan="">
                        <div class="control-group">
                            <div class="controls">
                                <label>Durée contractuelle <code>*</code></label>
                                  <input type="text"  class="span" placeholder="" :value="afficherDureeContratuel(macheid)" readonly>
                                
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
                             <td colspan="">
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

                           <td>
                      <div class="control-group">
            
            <div class="controls">
            <label>CP sur tresor <code>*</code></label>
            <money  class="span" placeholder="" v-model="formData.cp_tresor"></money>
                                
            </div>
          </div>
                        </td>
                            </tr>

                            <tr>

                                  <td>
                      <div class="control-group">
            <label class="control-label">Source de financement</label>
            <div class="controls">
            
               <select v-model="formData.source_financement_cp" class="span" >
               <option v-for="plans in sources_financements" :key="plans.id" 
               :value="plans.id"> {{plans.libelle}}</option>
               <!-- <code v-if="message_offre">{{message_offre}}</code> -->
           </select>
            </div>
          </div>
                        </td>
                             <td colspan="">
                      <div class="control-group">
            <label class="control-label">Type de financement</label>
            <div class="controls">
            
               <select v-model="formData.type_financement_cp" class="span" >
               <option v-for="plans in types_financements" :key="plans.id" 
               :value="plans.id"> {{plans.libelle}}</option>
               <!-- <code v-if="message_offre">{{message_offre}}</code> -->
           </select>
            </div>
          </div>
                        </td>
                             
                           <td colspan="">
                    <div class="controls">
                    <label>Cp sur Dons <code>*</code></label>
                      <money  class="span" placeholder="" v-model="formData.cp_dons"></money>
                                
                    </div>
                    </td>
                     
                            </tr>
                            <tr>

                                  <td>
                      <div class="control-group">
            <label class="control-label">Source de financement</label>
            <div class="controls">
            
               <select v-model="formData.source_financement_id_cp" class="span" >
               <option v-for="plans in sources_financements" :key="plans.id" 
               :value="plans.id"> {{plans.libelle}}</option>
               <!-- <code v-if="message_offre">{{message_offre}}</code> -->
           </select>
            </div>
          </div>
                        </td>
                             <td colspan="">
                      <div class="control-group">
            <label class="control-label">Type de financement</label>
            <div class="controls">
            
               <select v-model="formData.type_financement_id_cp" class="span" >
               <option v-for="plans in types_financements" :key="plans.id" 
               :value="plans.id"> {{plans.libelle}}</option>
               <!-- <code v-if="message_offre">{{message_offre}}</code> -->
           </select>
            </div>
          </div>
                        </td>

                         <td colspan="">
                    <div class="controls">
                    <label>CP sur Emprunt <code>*</code></label>
                      <money  class="span" placeholder="" v-model="formData.cp_emprunt"></money>
                                
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
                                 <select v-model="editMarchePl.anneeBudgetaire" class="span" >
               <option v-for="plans in exercices_budgetaires" :key="plans.id" 
               :value="plans.annee"> {{plans.annee}}</option>
               <!-- <code v-if="message_offre">{{message_offre}}</code> -->
           </select>
                                <!-- <input type="text" class="span5" placeholder="Type appel" :value="anneeBudgetairemodifier" readonly> -->
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
                                <label>Montant de crédit de paiement annuel prevu <code>*</code></label>
                                <money class="span" placeholder="Numéro d'autorisation" v-model="editMarchePl.montantCP" > </money>
                            </div>
                        </div>
                            </td>
                                <td colspan="">
                        <div class="control-group">
                            <div class="controls">
                                <label>Montant Crédit de Paiement annuel notifié <code>*</code></label>
                                  <money class="span" placeholder="Reference d'appel" v-model="editMarchePl.montantCP_notifie"></money>
                                
                            </div>
                        </div>
                                </td>
                                     <td colspan="">
                        <div class="control-group">
                            <div class="controls">
                                <label>Durée contractuelle <code>*</code></label>
                                  <input type="text"  class="span" placeholder="" :value="afficherDureeContratuel(macheid)" readonly>
                                
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
                             <td colspan="">
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

                           <td>
                      <div class="control-group">
            
            <div class="controls">
            <label>CP sur tresor <code>*</code></label>
            <money  class="span" placeholder="" v-model="editMarchePl.cp_tresor"></money>
                                
            </div>
          </div>
                        </td>
                            </tr>

                            <tr>

                                  <td>
                      <div class="control-group">
            <label class="control-label">Source de financement</label>
            <div class="controls">
            
               <select v-model="editMarchePl.source_financement_cp" class="span" >
               <option v-for="plans in sources_financements" :key="plans.id" 
               :value="plans.id"> {{plans.libelle}}</option>
               <!-- <code v-if="message_offre">{{message_offre}}</code> -->
           </select>
            </div>
          </div>
                        </td>
                             <td colspan="">
                      <div class="control-group">
            <label class="control-label">Type de financement</label>
            <div class="controls">
            
               <select v-model="editMarchePl.type_financement_cp" class="span" >
               <option v-for="plans in types_financements" :key="plans.id" 
               :value="plans.id"> {{plans.libelle}}</option>
               <!-- <code v-if="message_offre">{{message_offre}}</code> -->
           </select>
            </div>
          </div>
                        </td>
                             
                           <td colspan="">
                    <div class="controls">
                    <label>Cp sur Dons <code>*</code></label>
                      <money  class="span" placeholder="" v-model="editMarchePl.cp_dons"></money>
                                
                    </div>
                    </td>
                     
                            </tr>
                            <tr>

                                  <td>
                      <div class="control-group">
            <label class="control-label">Source de financement</label>
            <div class="controls">
            
               <select v-model="editMarchePl.source_financement_id_cp" class="span" >
               <option v-for="plans in sources_financements" :key="plans.id" 
               :value="plans.id"> {{plans.libelle}}</option>
               <!-- <code v-if="message_offre">{{message_offre}}</code> -->
           </select>
            </div>
          </div>
                        </td>
                             <td colspan="">
                      <div class="control-group">
            <label class="control-label">Type de financement</label>
            <div class="controls">
            
               <select v-model="editMarchePl.type_financement_id_cp" class="span" >
               <option v-for="plans in types_financements" :key="plans.id" 
               :value="plans.id"> {{plans.libelle}}</option>
               <!-- <code v-if="message_offre">{{message_offre}}</code> -->
           </select>
            </div>
          </div>
                        </td>

                         <td colspan="">
                    <div class="controls">
                    <label>CP sur Emprunt <code>*</code></label>
                      <money  class="span" placeholder="" v-model="editMarchePl.cp_emprunt"></money>
                                
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
                    anneeBudgetaire:"",
                montantCP:"",
                montantCP_notifie:"",
                duree_contratuel:"",
                source_financement_id:"",
                report_nouveau:"",
                montantBase:"",
                cp_dons:"",
                cp_tresor:"",
                cp_emprunt:"",
                type_financement_id_cp:"",
                source_financement_id_cp:"",
                type_financement_cp:"",
                source_financement_cp:"",
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
            // calcul du CP annuel prevu pour les type de financement  

            calculCPAnnuelPourLesTypeFinancement(){
                 const sommeCPAnnuel =parseFloat(this.formData.cp_tresor)+parseFloat(this.formData.cp_dons)+parseFloat(this.formData.cp_emprunt)
                  if(isNaN(sommeCPAnnuel)) return null
                  return  parseFloat(sommeCPAnnuel).toFixed(2)
           },

            // calculCPAnnuelCPsurDons(){
            //       return id =>{
            //           if(id!="" && id!=null){
            //               let Objet = this.getterProgrammationMarchePlurieAnnuel.find(item => item.marche_id==id)
            //                if(Objet) {
            //                    return Objet.cp_dons
            //                }
            //           }
            //       }
            // },


            //  calculCPAnnuelCPsurEmprunt(){
            //       return id =>{
            //           if(id!="" && id!=null){
            //               let Objet = this.getterProgrammationMarchePlurieAnnuel.find(item => item.marche_id==id)
            //                if(Objet) {
            //                    return Objet.cp_emprunt
            //                }
            //           }
            //       }
            // },

        //     calculCPAnnuelPourLesTypeFinancement(){
        //         const item = parseFloat(this.calculCPAnnuelCPsurTresor(this.macheid)) +
        //          parseFloat(this.calculCPAnnuelCPsurDons(this.macheid)) + parseFloat(this.calculCPAnnuelCPsurEmprunt(this.macheid))

        //         return item .toFixed(0);
        //    },

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

            afficherLibelleAnneBudgetaire(){
                return id =>{
                    if(id!=null){
                        let objet = this.exercices_budgetaires.find(item =>item.id==id)
                        if(objet) return objet.annee
                    }
                    return null
                }
            },

             afficherAnneBudgetaire(){
                return id =>{
                    if(id!=null){
                        let objet = this.getterProgrammationMarchePlurieAnnuel.find(item =>item.marche_id==id)
                        if(objet) return objet.anneeBudgetaire
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
//     anneeBudgetairemodifier(){
//      const anneBudget = this.exercices_budgetaires.find(anneBudg =>anneBudg.encours == 1 );
//      if(anneBudget){
//        return anneBudget.annee;
//      }
//      return 0
//    },
     afficherMontantTtcDeActe() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id );
            console.log(this.acteEffetFinanciers)
      if (qtereel) {
        return qtereel.montant_act;
      }
      return 0
        }
      };
    },

    // afficher la duree contractuel
    afficherDureeContratuel(){
         return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);
            console.log(this.acteEffetFinanciers)
      if (qtereel) {
        return qtereel.duree;
      }
      return 0
        }
      };

    }
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
               montantCP:this.calculCPAnnuelPourLesTypeFinancement,
               marche_id:this.macheid,
               montantBase:this.afficherMontantTtcDeActe(this.macheid),
               duree_contratuel:this.afficherDureeContratuel(this.macheid)
              }
             this.ajouterProgrammationMarchePlurieAnnuel(nouvelObjet) 
              this.formData ={
     	type_financement:"",
                //montantCP:"",
                montantCP_notifie:"",
                source_financement_id:"",
                report_nouveau:"",
                anneeBudgetaire:""

   
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
     width: 1100px;
 margin: 0 -530px;
 height: 600px;

}
</style>