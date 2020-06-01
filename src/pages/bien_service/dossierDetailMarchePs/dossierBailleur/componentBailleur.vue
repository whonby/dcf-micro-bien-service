
<template>
    <div>

                <h4>Liste des bailleurs du marché</h4>

                                <table class="table table-bordered table-striped" v-if="macheid">
                                    <thead>
                                    <tr>
                                        <th>Bailleur</th>
                                        <th>Type finanncement</th>
                                         <th>Montant du bailleur TTC </th>
                                        <th>Montant TTC du contrat </th>
                                         <th>Taux % </th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr class="odd gradeX" v-for="appelOffre in listeBailleurMarche(macheid)"
                                        :key="appelOffre.id">
                                        <td @dblclick="editeMarcheBailleur(appelOffre.id)">
                                            {{appelOffre.bailleur.libelle || 'Non renseigné'}}</td>
                                        <td @dblclick="editeMarcheBailleur(appelOffre.id)">
                                            {{appelOffre.typeFinnancement.libelle || 'Non renseigné'}}</td>
                                        <td @dblclick="editeMarcheBailleur(appelOffre.id)">
                                            {{formatageSomme(parseFloat(appelOffre.montant ))|| 'Non renseigné'}}</td>

                                           <td @dblclick="editeMarcheBailleur(appelOffre.id)">
                                            {{ formatageSomme(parseFloat(montantAct(appelOffre.acte_effet_id)))|| 'Non renseigné'}}</td>
                                            

                                             <td @dblclick="editeMarcheBailleur(appelOffre.id)">
                                            {{((parseFloat(appelOffre.montant )) / parseFloat(montantAct(appelOffre.acte_effet_id)) * 100).toFixed(2)}}</td>

                                           <td>
                                        <div class="btn-group">
                                            <button @click.prevent="supprimerMarcheBailleur(appelOffre.id)"  class="btn btn-danger ">
                                                <span class=""><i class="icon-trash"></i></span></button>
                                        </div>
                                           </td>
                                    </tr>

                                     <tr>
                                       <td></td>
                              <td style="font-weight:bold;"> 
                      </td>
                       <td  style="text-align: center;color:red;font-weight:bold;">
                           {{formatageSomme(parseFloat(sommeBailleur(macheid)))}}
                           
                      </td>
                    
                      <td  style="text-align: center;color:red;font-weight:bold;">
                           {{formatageSomme(parseFloat(afficherMontantTtcDeActe(macheid)))}}
                           
                      </td>
                      <td  style="text-align: center;color:red;font-weight:bold;">
                        {{ ((parseFloat(sommeBailleur(macheid))) / parseFloat(afficherMontantTtcDeActe(macheid)) ) * 100}}   
                           
                      </td>
                      <td></td>
                      
                    </tr>
                                    </tbody>
                                </table>
              
     




             <div id="addBailleurMarche" class="modal hide grdirModalActeEffet" aria-hidden="true" style="display: none;">
                                    <div class="modal-header">
                                        <button data-dismiss="modal" class="close" type="button">×</button>
                                        <h3>Ajouter bailleur </h3>
                                    </div>
                                     <table class="table table-bordered table-striped" v-if="macheid">
                                       <tr>

                                            <td>
                          <div class="control-group">
                        <label class="control-label">N° marché</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    :value="afficherNumeroMarche(macheid)"
                                    class="span"
                                   readonly
                            />
                        </div>
                        </div>
                            </td>

                                       <td>
                          <div class="control-group">
                        <label class="control-label">Refference Marché</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    :value="afficherReffeMarche(macheid)"
                                    class="span"
                                   readonly
                            />
                        </div>
                        </div>
                            </td>

                                          <td>
                          <div class="control-group">
                        <label class="control-label">Montant marché (TTC )</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    :value="afficherMontantTtcDeActe(macheid)"
                                    class="span"
                                   readonly
                            />
                        </div>
                        </div>
                            </td>

                                           <td>
                                           <div class="control-group">
                                            <label div class="control-label">Bailleur</label>
                                            <div class="controls">
                                                <select v-model="formBailleur.bailleur_id" class="span" >
                                                    <option v-for="varText in sources_financements" :key="varText.id"
                                                            :value="varText.id">{{varText.libelle}}</option>
                                                </select>
                                            </div>
                                            </div>
                                           </td>

                                           <td>
                                            <div class="control-group">
                                            <label div class="control-label">Type finnancement <code>*</code> </label>
                                            <div class="controls">

                                                <select v-model="formBailleur.type_finnancement_id" class="span">
                                                    <option v-for="varText in types_financements" :key="varText.id"
                                                            :value="varText.id">{{varText.libelle}}</option>
                                                </select>
                                            </div>
                                            </div>
                                           </td>

                                            </tr>

                                            <tr>
                                           <td>
                                            <div class="control-group">
                                                <label class="control-label">Montant Hors Taxe (HT) <code>*</code> :</label>
                                                <div class="controls">
                                                    <input type="text" class="span"  v-model="formBailleur.montant_ht"
                                                     placeholder="saisir le montant hors taxe">
                                                </div>
                                                   <code v-if="essaiMontant>afficherMontantTtcDeActe(macheid)">la somme des bailleurs > au montant du contrat</code>   
                                            </div>
                                           </td>
                                      
                                        <td>
              
                                 <div class="control-group">
                                        <label class="control-label">exonéré</label>
                                        <div class="controls">
                                        <select v-model="formBailleur.exonere" class="span">
                                        
                                            <option value="0">Oui</option>
                                            <option value="1">Non</option>
                                        </select>
                                        
                                        </div>
                                    </div>
                                    </td>
                                       
            <td >
              <div class="control-group">
                <label class="control-label" style="text-align:right;color:red">Taux</label>
               
              </div>
            
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    
              :value="afficherEnorere"
                    class="span"
                   readonly
                  />
                </div>
              </div>
            </td>
            
            
                  
          
          
            <td >
              <div class="control-group">
                <label class="control-label" style="text-align:right;color:red">TVA</label>
               
              </div>
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    :value="montantTva"
             
                    class="span"
                   readonly
                  />
                  
                </div>
              </div>
            </td>
            
            
       
         
          
            <td >
              <div class="control-group">
                <label class="control-label" style="text-align:right;color:red">Montant TTC </label>
               
              </div>
           
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    :value="montantHTt"
              
                    class="span"
                   readonly
                  />
                
                </div>
              </div>
            </td>
            
            
                  
          </tr>
                                     </table>
                                   
                                        <div class="modal-footer" >
                                            <button @click.prevent="ajouterBailleur" class="btn btn-primary" v-if="essaiMontant<=afficherMontantTtcDeActe(macheid)">Valider</button>
                                            <button data-dismiss="modal" class="btn" href="#">Fermer</button>
                                        </div>
                                   
                                </div>



                                  <div id="editBailleuMarche" class="modal hide grdirModalActeEffet" aria-hidden="true" style="display: none;">
                                    <div class="modal-header">
                                        <button data-dismiss="modal" class="close" type="button">×</button>
                                        <h3>Modification Bailleur </h3>
                                    </div>
                                     <table class="table table-bordered table-striped">
                                       <tr>
                                                       <td>
                          <div class="control-group">
                        <label class="control-label">N° marché</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    :value="afficherNumeroMarche(macheid)"
                                    class="span"
                                   readonly
                            />
                        </div>
                        </div>
                            </td>

                                       <td>
                          <div class="control-group">
                        <label class="control-label">Refference Marché</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    :value="afficherReffeMarche(macheid)"
                                    class="span"
                                   readonly
                            />
                        </div>
                        </div>
                            </td>

                                          <td>
                          <div class="control-group">
                        <label class="control-label">Montant Contrat/marché (TTC )</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    :value="afficherMontantTtcDeActe(macheid)"
                                    class="span"
                                   readonly
                            />
                        </div>
                        </div>
                            </td>
                                           <td>
                                           <div class="control-group">
                                            <label div class="control-label">Bailleur</label>
                                            <div class="controls">
                                                <select v-model="edit_bailleur_marche.bailleur_id" class="span" >
                                                    <option v-for="varText in sources_financements" :key="varText.id"
                                                            :value="varText.id">{{varText.libelle}}</option>
                                                </select>
                                            </div>
                                            </div>
                                           </td>

                                           <td>
                                            <div class="control-group">
                                            <label div class="control-label">Type finnancement <code>*</code> </label>
                                            <div class="controls">

                                                <select v-model="edit_bailleur_marche.type_finnancement_id" class="span">
                                                    <option v-for="varText in types_financements" :key="varText.id"
                                                            :value="varText.id">{{varText.libelle}}</option>
                                                </select>
                                            </div>
                                            </div>
                                           </td>
                                       </tr>

                                       <tr>
                                           <td>
                                            <div class="control-group">
                                                <label class="control-label">Montant <code>*</code> :</label>
                                                <div class="controls">
                                                    <input type="text" class="span" placeholder="Montant" v-model="edit_bailleur_marche.montant_ht">
                                                </div>
                                                
                                            </div>
                                           </td>
                                        <td>
              
                                 <div class="control-group">
                                        <label class="control-label">exonéré</label>
                                        <div class="controls">
                                        <select v-model="edit_bailleur_marche.exonere" class="span">
                                        
                                            <option value="0">Oui</option>
                                            <option value="1">Non</option>
                                        </select>
                                        
                                        </div>
                                    </div>
                                    </td>
                                      
            <td >
              <div class="control-group">
                <label class="control-label" style="text-align:right;color:red">Taux</label>
               
              </div>
          
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    
              :value="editAfficherEnorere"
                    class="span"
                   readonly
                  />
                  
                   
                </div>
              </div>
            </td>
            
            
                  
         
          
            <td >
              <div class="control-group">
                <label class="control-label" style="text-align:right;color:red">TVA</label>
               
              </div>
           
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    :value="editMontantTva"
             
                    class="span"
                   readonly
                  />
                  
                </div>
              </div>
            </td>
            
            
                  
          
         
       
            <td >
              <div class="control-group">
                <label class="control-label" style="text-align:right;color:red">Montant TTC</label>
               
              </div>
            
              <div class="control-group">
               
                <div class="controls">
                  <input
                    type="number"
                    :value="editMontantHTt"
              
                    class="span"
                   readonly
                  />
                
                </div>
              </div>
            </td>
            
            
                  
          </tr>
                                     </table>
                                   
                                        <div class="modal-footer" >
                                           <button @click.prevent="modificationBailleurMarche" class="btn btn-primary">Modification</button>
                                            <button data-dismiss="modal" class="btn" href="#">Fermer</button>
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
        
          formBailleur: {
                    type_finnancement_id:"",
                    bailleur_id:"",
                   exonere:"",
                    montant:"",
                    acte_effet_id:"",
                    tva:"",
                    montant_tva:"",
                    
                },
        edit_bailleur_marche:{
             type_finnancement_id:"",
                    bailleur_id:"",
                    exonere:"",
                    montant:"",
                    acte_effet_id:"",
                    tva:"",
                    montant_tva:"",

        }

        }
    },
    props:["macheid"],
    created(){},

       computed: {

            ...mapGetters("bienService", [ "typeTypeProcedures","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
                "modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
            ...mapGetters('personnelUA', ['acteur_depenses']),


                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),
            ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
                'types_financements']) ,
                
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
      
listeBailleurMarche: function () {
                return macheid => {
                    if (macheid != "") {
                        //console.log("Marche lettre inviation marche")
                        return this.personnaliseGetterMarcheBailleur.filter(idmarche => idmarche.marche_id == macheid)
                    }
                }
            },


             afficherNumeroMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_marche;
      }
      return 0
        }
      };
    },


       afficherReffeMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.reference_marche;
      }
      return 0
        }
      };
    },


     afficherMontantTtcDeActe() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_act;
      }
      return 0
        }
      };
    },

    montantAct() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.montant_act;
      }
      return 0
        }
      };
    },

     enregistreIdActe() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },


afficherEnorere(){
if(this.formBailleur.exonere == 0){
  return 0
}
else {
  return this.affcherTauxEnCours
  
}
},

affcherTauxEnCours() {
      
      
      const norme = this.taux.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.libelle;
      }
      return 0
    },

  montantTva() {
      const val = parseFloat(((this.formBailleur.montant_ht) * parseFloat(this.afficherEnorere))/100);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },

montantHTt() {
      const val = parseFloat(this.formBailleur.montant_ht) + parseFloat(this.montantTva);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },


// comparaison
  // comparaisonMontantBailleur(){
  //   if( this.formBailleur.montant_ht == this.afficherMontantTtcDeActe){
  //     return this.formBailleur.montant_ht
  //   }else{
  //     alert('montant bailleur est superieur au montant du contrat')
  //   }
  //   return null
  // },

  sommeBailleur(){
    return id =>{
      if(id!=null && id!=""){
 return this.personnaliseGetterMarcheBailleur.filter(item =>item.marche_id==id).reduce((prec,cur)=> parseFloat(prec) + parseFloat(cur.montant), 0)
      }
    }
   
  },

  // calcule du taux

  essaiMontant(){

    return parseFloat(this.sommeBailleur(this.macheid)) + parseFloat(this.formBailleur.montant_ht) + parseFloat(this.montantTva)
  },

  // fonction de comparaison du montant de l'acte et celui de bailleur 


  comparaisonSommeActeEtBailleur(){
    if (this.sommeBailleur + this.formBailleur.montant_ht <= this.afficherMontantTtcDeActe){
      return  parseFloat(this.sommeBailleur + this.formBailleur.montant_ht) + parseFloat(this.montantTva)
    }else{
      alert('le montant du bailleur est superieur au montant de l\'acte')
    }
    return null
  },

    editAfficherEnorere(){
        if(this.edit_bailleur_marche.exonere == 0){
  return 0
}
else {
  return this.affcherTauxEnCours
  
}

    },

    editMontantTva(){
         const val = parseFloat((this.edit_bailleur_marche.montant_ht) * parseFloat(this.editAfficherEnorere)/100);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0

    },

    editMontantHTt(){
          const val = parseFloat(this.edit_bailleur_marche.montant_ht) + parseFloat(this.editMontantTva);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0

    }

      
      },

      methods:{ 

          ...mapActions("bienService", [
               "ajouterMarcherBailleur",
                "modificationMarcheBailleur","supprimerMarcheBailleur"
            
            ]),
              //  rechercheMandater(){
              //    if(sommeMontant > montantActe){
                   
              //    }
              //  },
            //  afficherModalModifierTransmission(index){
            //     this.$('#modificationAajouterAnalys01').modal({
            //         backdrop: 'static',
            //         keyboard: false
            //     });
            //     this.edit_transmission = this.listetransmissionDao(this.macheid.id)[index];
            // },

        editeMarcheBailleur(index){
                this.$('#editBailleuMarche').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.edit_bailleur_marche = this.personnaliseGetterMarcheBailleur.find(item =>item.id==index)
              //  console.log(this.edit_bailleur_marche)
            },

         ajouterBailleur(){

                this.formBailleur.acte_effet_id=this.enregistreIdActe(this.macheid)
                this.formBailleur.marche_id=this.macheid
                this.formBailleur.montant=this.montantHTt
                this.formBailleur.tva=this.afficherEnorere
                this.formBailleur.montant_tva= this.montantTva
               this.ajouterMarcherBailleur(this.formBailleur)
                this.formBailleur={
                      type_finnancement_id:"",
                        montant:0,
                        marche_id:"",
                        bailleur_id:"",
                }
            
              
           
                
            },


  modificationBailleurMarche(){
              this.edit_bailleur_marche.marche_id=this.macheid
              this.edit_bailleur_marche.acte_effet_id=this.enregistreIdActe(this.macheid)
              this.edit_bailleur_marche.montant=this.editMontantHTt
                this.edit_bailleur_marche.tva=this.editAfficherEnorere
                this.edit_bailleur_marche.montant_tva= this.editMontantTva
                this.modificationMarcheBailleur(this.edit_bailleur_marche)
                this.$('#editBailleuMarche').modal('hide');
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
     width: 1250px;
 margin: 0 -530px;
 height: 400px;

}
</style>