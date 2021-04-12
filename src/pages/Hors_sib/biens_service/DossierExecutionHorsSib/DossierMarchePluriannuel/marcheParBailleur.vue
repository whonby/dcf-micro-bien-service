
<template>
    <div>
           <table class="table table-bordered table-striped" v-if="macheid">
                     <thead>
                             <tr>
                                      
                                        <th>Année Budgetaire </th>
                                        <th>Type  de financement</th>
                                        <th>Montant CP (F CFA)</th>
                                        <th>Cummul des types financement (F CFA)</th>
                                        <th>Cummul des bailleurs (F CFA) </th> 
                                         
                                        <th>Action</th>
                                    </tr>
                    </thead>
                    <tbody >
                   <tr class="odd gradeX" v-for="(appelOffre, index) in listeMarchePluriannuel(macheid)"
                                        :key="appelOffre.id">
                                       
                                            <td @dblclick="afficherModalMarchePl(index)">
                                            {{appelOffre.anneeBudgetaire || 'Non renseigné'}}</td>
                                                  <td @dblclick="afficherModalMarchePl(index)">
                                            {{affiherLibelleTypefinancement(appelOffre.type_financement) || 'Non renseigné'}}</td>
                                              <td @dblclick="afficherModalMarchePl(index)">
                                            {{formatageSommeSansFCFA(parseFloat(appelOffre.montant)) || 'Non renseigné'}}</td>
                                              <td @dblclick="afficherModalMarchePl(index)">
                                            {{formatageSommeSansFCFA(parseFloat(appelOffre.cummul_type_financement)) || 'Non renseigné'}}</td>

                                            <!-- <td @dblclick="afficherModalMarchePl(index)">
                                            {{formatageSommeSansFCFA(parseFloat(appelOffre.montant_cummul_bailleur)) || 'Non renseigné'}}</td> -->
                                            <td @dblclick="afficherModalMarchePl(index)">
                                            {{formatageSommeSansFCFA(parseFloat(appelOffre.somme_des_bailleur)) || 'Non renseigné'}}</td>
                                            
                                             
                                            <td>
                                        <div class="btn-group">
                                            <button @click.prevent="supprimerProgrammationMarchePlurieAnnuel(appelOffre.id)"  class="btn btn-danger ">
                                                <span class=""><i class="icon-trash"></i></span></button>

                                        </div>
                                        </td>

                                    </tr>
                    </tbody>
                </table>
                <div id="ajouterMarche" class="modal hide grdirModalActeEffet">
             <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Ajouter  marché pluriannuel  </h3>

            </div>
            <div class="modal-body">
 <table class="table table-bordered table-striped">
                          <tr>
                           <td colspan="">
                  <div class="control-group">
                     <label class="control-label" > Année budgetaire</label>
                    <div class="controls ">

             <select v-model="formData.anneeBudgetaire" class="span" >
              
               <option v-for="plans in exercices_budgetaires" :key="plans.id" 
               :value="plans.annee"> {{plans.annee}}</option>
              
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
                                <label>Cummul des types de finacement <code>*</code></label>
                                <input type="text" class="span" placeholder="" :value="afficherTypeFinancement(formData.type_financement)" readonly /> 
                            </div>
                        </div>
                            </td>
                              
                                 <td colspan="">
                        <div class="control-group">
                            <div class="controls">
                                <label >Montant  <code>*</code></label>
                                <money type="text" class="span" placeholder="" v-model="formData.montant"  > </money>
                            </div>
                        </div>
                            </td>
                             
                      
                           
                            </tr>

                            <tr>
                                 <td colspan="">
                      <div class="control-group">
            <label class="control-label">Source de financement</label>
            <div class="controls">
            
               <select v-model="formData.source_financement_id" class="span" >
               <option v-for="plans in listeSourceFinancement(formData.type_financement)" :key="plans.id" 
               :value="plans.source_financement_id"> {{afficherLibelle(plans.source_financement_id) }}</option>
               <!-- <code v-if="message_offre">{{message_offre}}</code> -->
           </select>
            </div>
          </div>
                        </td>

                          <td colspan="">
                        <div class="control-group">
                            <div class="controls">
                                <label >Taux <code>*</code></label>
                                <input type="text" class="span" placeholder="" :value="afficherTaux(formData.source_financement_id)"  /> 
                            </div>
                        </div>
                            </td>

                             <td colspan="">
                        <div class="control-group">
                            <div class="controls">
                                <label >Montant par bailleur <code>*</code></label>
                                <input type="text" class="span" placeholder=""   :value="CalculSomme" readonly/> 
                            </div>
                        </div>
                            </td>

                              <td>
                  <hr>
                  <button class="btn btn-danger" @click.prevent="addS()" v-if="cummulDesBailleur<= this.formData.montant">
                  Ajouter
                </button>
                </td>

                            </tr>


             <tr class="odd gradeX" v-for="item in structure"
                  :key="item.id">

                <td> 
                  {{item.source_financement_id || 'Non renseigné'}}
                </td>
                 <td>
                  {{item.taux_cp || 'Non renseigné'}}
                </td>
                 <td>
                  {{item.CalculSomme || 'Non renseigné'}}
                </td>
                 
                    
                <div class="btn-group">
                  <button class="btn btn-link" title="Supprimer"  @click.prevent="supprimeStructureSelectionner(item.id)">
                    <span class=""><i class="icon-trash"></i>Supprimer</span>
                  </button>

                </div>

              </tr>

             
                 
              

                            <!-- <tr>
                         
                             <td>
                        <div class="control-group">
                            <div class="controls">
                                <label v-html="tailleTableau(formData.type_financement)"> </label>
                               
                            </div>
                        </div>
                            </td>
                            </tr> -->
                     
                       
                    </table>
                     <td>
                    <label>Cummul des montants par bailleur</label>
                      <input type="text"  :value="cummulDesBailleur" readonly />
                  </td>
                       
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

         <div id="modifierMarchePluriannuel" class="modal hide grdirModalActeEffet">
             <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modifier  marché pluriannuel</h3>
            </div>
            <div class="modal-body">

                   <table class="table table-bordered table-striped">
                          <tr>
                           <td colspan="">
                  <div class="control-group">
                     <label class="control-label" > Année budgetaire</label>
                    <div class="controls ">

             <select v-model="editMarchePlu.anneeBudgetaire" class="span" >
              
               <option v-for="plans in exercices_budgetaires" :key="plans.id" 
               :value="plans.annee"> {{plans.annee}}</option>
              
           </select>
                            
                 
               </div>
               </div>
              </td>
                  <td colspan="">
                      <div class="control-group">
            <label class="control-label">Type de financement</label>
            <div class="controls">
            
               <select v-model="editMarchePlu.type_financement" class="span" >
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
                                <label>Cummul des types de finacement <code>*</code></label>
                                <input type="text" class="span" placeholder="" :value="afficherTypeFinancement(editMarchePlu.type_financement)" readonly /> 
                            </div>
                        </div>
                            </td>
                              
                                 <td colspan="">
                        <div class="control-group">
                            <div class="controls">
                                <label >Montant  <code>*</code></label>
                                <money type="text" class="span" placeholder="" v-model="editMarchePlu.montant"  > </money>
                            </div>
                        </div>
                            </td>
                             
                      
                           
                            </tr>

                            <tr>
                                 <td colspan="">
                      <div class="control-group">
            <label class="control-label">Source de financement</label>
            <div class="controls">
            
               <select v-model="editMarchePlu.source_financement_id" class="span" >
               <option v-for="plans in listeSourceFinancement(editMarchePlu.type_financement)" :key="plans.id" 
               :value="plans.source_financement_id"> {{afficherLibelle(plans.source_financement_id) }}</option>
               <!-- <code v-if="message_offre">{{message_offre}}</code> -->
           </select>
            </div>
          </div>
                        </td>

                          <td colspan="">
                        <div class="control-group">
                            <div class="controls">
                                <label >Taux <code>*</code></label>
                                <input type="text" class="span" placeholder="" :value="afficherTaux(editMarchePlu.source_financement_id)"  /> 
                            </div>
                        </div>
                            </td>

                             <td colspan="">
                        <div class="control-group">
                            <div class="controls">
                                <label >Montant par bailleur <code>*</code></label>
                                <input type="text" class="span" placeholder=""   :value="CalculSomme" readonly/> 
                            </div>
                        </div>
                            </td>

                              <td>
                  <hr>
                  <button class="btn btn-danger" @click.prevent="addS()" v-if="cummulDesBailleur<= this.formData.montant">
                  Ajouter
                </button>
                </td>

                            </tr>


             <tr class="odd gradeX" v-for="item in structure"
                  :key="item.id">

                <td> 
                  {{item.source_financement_id || 'Non renseigné'}}
                </td>
                 <td>
                  {{item.taux_cp || 'Non renseigné'}}
                </td>
                 <td>
                  {{item.CalculSomme || 'Non renseigné'}}
                </td>
                 
                    
                <div class="btn-group">
                  <button class="btn btn-link" title="Supprimer"  @click.prevent="supprimeStructureSelectionner(item.id)">
                    <span class=""><i class="icon-trash"></i>Supprimer</span>
                  </button>

                </div>

              </tr>

             
                 
              

                            <!-- <tr>
                         
                             <td>
                        <div class="control-group">
                            <div class="controls">
                                <label v-html="tailleTableau(formData.type_financement)"> </label>
                               
                            </div>
                        </div>
                            </td>
                            </tr> -->
                     
                       
                    </table>
                     <td>
                    <label>Cummul des montants par bailleur</label>
                      <input type="text"  :value="cummulDesBailleur" readonly />
                  </td>
                   

                
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
import {formatageSommeSansFCFA} from '../../../../../Repositories/Repository'
import {mapActions, mapGetters} from 'vuex'
export default {
      props:["macheid"],
     // props:["structureid"],
    data(){
        return{
            formData:{
                	type_financement:"",
                    anneeBudgetaire:"",
                montant:"",
            },
            structure:[],
            editMarchePlu:{}

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
                        return this.getterProgrammationMarchePlurieAnnuel.filter(idmarche => idmarche.marche_id == macheid && idmarche.anneeBudgetaire!=null)
                    }
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
           

            listeSourceFinancement(){
                return id =>{
                      if(id!="" && id!=null){
                          let Objet = this.getterProgrammationMarchePlurieAnnuel.filter(item =>
                            item.anneeBugetaire==null && item.marche_id==this.macheid
                           &&  item.type_financement==id )
                          if(Objet){
                              return Objet
                          } 
                           return 0
                      }
                  }
            },


            // afficher le libelle 
            afficherLibelle (){
                return id=>{
                    if(id!=null && id!=""){
                        let Answer = this.sources_financements.find(item => item.id==id)
                         if(Answer){
                             return Answer.libelle
                         }
                         return 0
                    }
                }
            },

            afficherTaux(){
                return id =>{
                    if(id!=null && id!=""){
                        let objet = this.getterProgrammationMarchePlurieAnnuel.find(item => item.anneeBugetaire==null && item.source_financement_id==id)
                         if(objet){
                             return objet.taux_cp
                         }
                         return 0
                    }
                }
            },

            CalculSomme(){
                let objet= (this.afficherTaux(this.formData.source_financement_id) * parseFloat(this.formData.montant)/100)
                if(isNaN(objet)){
                  return null
                } 
                return objet
            },


            // calcul du CP annuel prevu pour les type de financement  

           
 // afficher la taille du 
        //   cummulTypefinancement(){
             
        //   },

        afficherTypeFinancementId(){
                  return id =>{
                      if(id!="" && id!=null){
                          let Objet = this.getterProgrammationMarchePlurieAnnuel.find(item =>
                            item.anneeBugetaire==null && item.marche_id==this.macheid
                           && item.type_financement==id )
                           if(Objet) {
                               return Objet.taux_cp
                           }
                           return 0
                      }
                  }
            },

            afficherTypeFinancement(){
                  return id =>{
                      if(id!="" && id!=null){
                          let Objet = this.getterProgrammationMarchePlurieAnnuel.filter(item =>
                            item.anneeBugetaire==null && item.marche_id==this.macheid
                           && item.type_financement==id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montantCP), 0)
                           if(Objet) {
                               return Objet
                           }
                           return 0
                      }
                  }
            },


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

             // afficher la taille du tableau
              tailleTableau(){
                 return id =>{
                     if(id!=null && id!=""){
                       let Objet=this.getterProgrammationMarchePlurieAnnuel.filter(item => item.marche_id==this.macheid && item.anneeBugetaire==null);
                             let somme1=20;
                             
                             let arraytest=[];
                             if(Objet.length>0){
                                Objet.forEach(function(value) {
                                     //somme1=somme1*Objet.taux_cp
                                     arraytest.push(somme1 * value.taux_cp)
                                 });

                                 let retvalue = [...new Set(arraytest)];
                                 if(retvalue.length==0){
                                     return [];
                                 }else{
                                    return retvalue;
                                    // return "<input type='text' :value='retvalue[2]'/>"
                                 }
                             }
                             return [];
                    }
                     return 0
                 }
                          
                
              },


            //   calculeSomme(){
            //          return this.afficherTypeFinancementId(this.macheid)*this.formData.montant  
            //   },
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
            //  affiherLibelleTypefinancement(){
            //     return id =>{
            //         if(id!=null){
            //             let objet = this.types_financements.find(item =>item.id==id)
            //             if(objet) return objet.libelle
            //         }
            //         return null
            //     }
            // },

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
//    },a

afficher1(){
    return id=>{
        if(id!=null && id!=""){
            let objet= this.structure.find(item=>item.id==id)
            if(objet){
                return objet.CalculSomme
            }
            return 0
        }
    }
},

cummulDesBailleur() {
                        
                      
                     return this.structure.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.CalculSomme), 0) 
                 
                
            
            },


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


  afficherModalMarchePl(index){
                this.$('#modifierMarchePluriannuel').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.editMarchePlu = this.listeMarchePluriannuel(this.macheid)[index]
              //  console.log(this.edit_bailleur_marche)
            },
formatageSommeSansFCFA:formatageSommeSansFCFA,


addS(){
    let _objte=this.sources_financements.find(item=>item.id==this.formData.source_financement_id)
    let number=this.structure.length + 1
     let _objet_structure=this.structure.find(item=>item.source_id==this.formData.source_financement_id)
     if(_objet_structure!=undefined) return null

  let Objet={
      source_id:this.source_financement_id,
      source_financement_id:_objte.libelle,
      taux_cp:this.afficherTaux(this.formData.source_financement_id),
      CalculSomme:this.CalculSomme,
      id:number
  }
  
  this.structure.push(Objet)
    },

supprimeStructureSelectionner(id){

     this.structure= this.structure.filter(item=>item.id!=id)
     // this.source_financement_id=this.source_financement_id.filter(item=>item!=id)
      console.log(this.source_financement_id)
},

// sommeDeCalul(id){
//   return this.structure.find(item => item.id==id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.CalculSomme), 0)
// },


  ajouterLocal(){
            //    this.$router.push({
            //      name:'marcheHorsib'  
            //    })
              var nouvelObjet = {
                ...this.formData,
               cummul_type_financement:this.afficherTypeFinancement(this.formData.type_financement),
               marche_id:this.macheid,
               montant_cummul_bailleur:this.CalculSomme,
               somme_des_bailleur:this.cummulDesBailleur
              }
             this.ajouterProgrammationMarchePlurieAnnuel(nouvelObjet) 
              this.formData ={
     	   //type_financement:"",
                montant:"",
               // montantCP_notifie:"",
               // source_financement_id:"",
               // report_nouveau:"",
                anneeBudgetaire:""

   
              }
            },

             modificationLocal(){
                //   var nouvevObjetModif={
                //       ...this.editMarchePlu,
                //      duree_contratuel:this.afficherDureeContratuel(this.macheid),
                //     montantCP:this.calculCPAnnuelPourLesTypeFinancementModif
                //   }
             // console.log(this.edite_appel_offre)
                this.modifierProgrammationMarchePlurieAnnuel(this.editMarchePlu)
                this.$('#modifierMarchePluriannuel').modal('hide');
            },



    }
}
</script>

<style scoped>
.grdirModalActeEffet{
     width: 1200px;
 margin: 0 -530px;
 height: 500px;

}
</style>