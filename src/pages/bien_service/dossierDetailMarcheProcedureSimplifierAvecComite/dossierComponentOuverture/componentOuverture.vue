<template>
        <div>

            <!-- debut de list  -->
            <div align="right">
                      <div class="widget-content">

                          <a href="#ajouterCojo" data-toggle="modal" class="btn btn-warning" >Ajouter </a>


                      </div>
                           
                  </div>
                  <h4> Infomation sur la cojo </h4>
            
                  <table class="table table-bordered table-striped" v-if="macheid">
                      <thead>
                      <tr>
                           <th>Référence de l'offre</th>
                           <th>Montant Confidentiel </th>
                           <th>Nombre de particiapnt</th>
                          <th>Date de composition </th>
                          <th>Date d'ouverture</th>
                          <th>Date de l'offre technique</th>
                          <th>Date de l'offre financière</th>
                          
                          <th>Action</th>
                      </tr>
                      
                      </thead>
                      <tbody>
                      <tr class="odd gradeX" v-for="(appelOffre, index) in listeCojo(macheid)"
                          :key="appelOffre.id">
                           <td @click="afficheBouttonTechCojo(index)">
                              {{listeAppelOffreLibelle(appelOffre.appel_offre_id)|| 'Non renseigné'}}</td>

                          <td listeMembreCojo @click="afficheBouttonTechCojo(index)">
                              {{formatageSomme(parseFloat( appelOffre.montant_ouverture)) || 'Non renseigné'}}</td>

                         <td @click="afficheBouttonTechCojo(index)">
                              {{appelOffre.nbr_participant || 'Non renseigné'}}</td>

                          <td @click="afficheBouttonTechCojo(index)">
                              {{formaterDate(appelOffre.date_composition) || 'Non renseigné'}}
                          </td>
                          <td @click="afficheBouttonTechCojo(index)">
                              {{formaterDate(appelOffre.date_ouverture) || 'Non renseigné'}}</td>

                              <td @click="afficheBouttonTechCojo(index)">
                              {{formaterDate(appelOffre.date_offre_tech) || 'Non renseigné'}}</td>

                              <td @click="afficheBouttonTechCojo(index)">
                              {{formaterDate(appelOffre.date_offre_fin) || 'Non renseigné'}}</td>
                         
                          

                          <!-- <td @click="afficheBouttonTechCojo(index)">
                              {{appelOffre.cotation.ref_offre || 'Non renseigné'}}</td> -->
                          <div class="btn-group">
                              <button @click.prevent="supprimerCojo(appelOffre.id)"  class="btn btn-danger " title="Supprimer">
                                  <span class=""><i class="icon-trash"></i>Supprimer</span></button>

                          </div>

                      </tr>
                      </tbody>
                  </table>



                 
            <!-- fin du list -->


            <!-- add formulaire cojo -->
                <div id="ajouterCojo" class="modal hide grdirModalAnalyse">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                 <h3>Ajouter la COJO</h3>
            </div>

                <table class="table table-bordered table-striped">
                        <tr>
                            <td>
                        <div class="control-group">
                        <label class="control-label">Référence de l'offre</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    :value="affichierReferenceAppelOffre(macheid)"
                                    class="span"
                                   readonly
                            />
                        </div>
                        </div>
                            </td>
                            <td>
                     <div class="control-group">
                        <label class="control-label">Nombre de participants</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="formDataCojo.nbr_participant"
                                    class="span"
                            />
                        </div>
                    </div>
                            </td>


                     <td>
                       
                     <div class="control-group">
                        <label class="control-label">Montant confidentiel</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="formDataCojo.montant_ouverture_ht"
                                    class="span"
                            />
                        </div>
                    </div>
                            </td>


                              <td colspan="">
                         <div class="control-group">
                        <label class="control-label">Date d'ouverture</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="formDataCojo.date_ouverture"
                                    class="span"
                                       
                            />
                        </div>
                    </div>
                            </td>
                           
                       
                           </tr>
                           
                        <tr>
                   
                            <td>
                       <div class="control-group">
                        <label class="control-label">Date de composition</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="formDataCojo.date_composition"
                                    class="span"
                
                            />
                        </div>
                    </div>

                            </td>
                        
                   
                            <td>

                     <div class="control-group">
                        <label class="control-label">Date d'ouverture offre Technique</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="formDataCojo.date_offre_tech"
                                    class="span"
                
                            />
                        </div>
                    </div>
                            </td>
                            <td >
                    <div class="control-group">
                        <label class="control-label">Date d'ouverture offre Financière</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="formDataCojo.date_offre_fin"
                                    class="span"
                            />
                        </div>
                    </div>
                            </td>
                              <td>
              
                                 <div class="control-group">
                                        <label class="control-label">Exonéré</label>
                                        <div class="controls">
                                        <select v-model="formDataCojo.exonere" class="span">
                                        
                                            <option value="0">Oui</option>
                                            <option value="1">Non</option>
                                        </select>
                                        
                                        </div>
                                    </div>
                                    </td>

                        </tr>
                         
                            <tr>
            <td >
              <div class="control-group">
                <label class="control-label" style="text-align:right;color:red">Taux</label>
               
                <div class="controls">
                  <input
                    type="number"
                    
              :value="afficherEnorere"
                    class="span"
                   readonly
                  />
                  
                   <input
                    type="hidden"
                    
                   
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
            
          
            <td>
              <div class="control-group">
                <label class="control-label" style="text-align:right;color:red">TVA</label>
               
               
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
            
            
         
         
            <td colspan="2" >
              <div class="control-group">
                <label class="control-label" style="text-align:right;color:red">Montant TTC</label>
            
               
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
            
            <div class="modal-footer">
                <a data-dismiss="modal" class="btn btn-primary" @click.prevent="ajouterCojoMarche()" href="#">Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>
        </div>

            <!-- end formulaire cojo  -->

            <!-- bigin modifie cojo  -->
             <div id="modificationCojo" class="modal hide grdirModalAnalyse">
            <div class="modal-header">
                <button data-dismiss="modal" class="close" type="button">×</button>
                <h3>Modification de la COJO</h3>
            </div>
            
                  <table class="table table-bordered table-striped">
                      <tr>


                          <td>
                            <div class="control-group">
                        <label class="control-label">Référence de l'offre</label>
                        <div class="controls">
                             <input
                                    type="text"
                                    :value="affichierReferenceAppelOffre(macheid)"
                                    class="span"
                                   readonly
                            />
                        </div>
                        </div>
                          </td>
                          <td>
                     <div class="control-group">
                        <label class="control-label">Nombre de participants</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="edite_cojo.nbr_participant"
                                    class="span"
                            />
                        </div>
                    </div>
                          </td>

                          
                        <td>
                       
                   <div class="control-group">
                        <label class="control-label">Montant Confidentiel</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="edite_cojo.montant_ouverture_ht"
                                    class="span"
                            />
                        </div>
                    </div>
                            </td>

                          <td colspan="">
                    
                    <div class="control-group">
                        <label class="control-label">Date d'ouverture</label>
                        <div class="controls">
                            <input 
                                   type="date"
                                   v-model="edite_cojo.date_ouverture"
                                   class="span"

                            />
                        </div>
                    </div>
                          </td>
                          </tr>
                      <tr>

                        <td>
                         <div class="control-group">
                        <label class="control-label">Date de composition</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="edite_cojo.date_composition"
                                    class="span"

                            />
                        </div>
                    </div>
                          </td>
                          <td>

                     <div class="control-group">
                        <label class="control-label">Date d'ouverture offre Technique</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="edite_cojo.date_offre_tech"
                                    class="span"
                
                            />
                        </div>
                    </div>
                            </td>
                            <td >
                    <div class="control-group">
                        <label class="control-label">Date d'ouverture offre Financière</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="edite_cojo.date_offre_fin"
                                    class="span"
                            />
                        </div>
                    </div>
                            </td>

                              <td>
              
                                 <div class="control-group">
                                        <label class="control-label">Exonéré</label>
                                        <div class="controls">
                                        <select v-model="edite_cojo.exonere" class="span">
                                        
                                            <option value="0">Oui</option>
                                            <option value="1">Non</option>
                                        </select>
                                        
                                        </div>
                                    </div>
                                    </td>
                      </tr>
                       <tr >
            <td >
              <div class="control-group">
                <label class="control-label" style="text-align:right;color:red">Taux</label>
               
                <div class="controls">
                  <input
                    type="number"
                    
              :value="editAfficherEnorere"
                    class="span"
                   readonly
                  />
                  
                   <input
                    type="hidden"
                    
                   
                    class="span3"
                   
                  />
                </div>
              </div>
            </td>
            
            
              
            <td >
              <div class="control-group">
                <label class="control-label" style="text-align:right;color:red">TVA</label>
               
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
            
            
            <td colspan="2">
              <div class="control-group">
                <label class="control-label" style="text-align:right;color:red">Montant TTC</label>
              
             
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
                
            
          <div class="modal-footer">
                <a data-dismiss="modal" class="btn btn-primary" @click.prevent="modificationCojo()" href="#">Valider</a>
                <a data-dismiss="modal" class="btn" href="#">Annuler</a> </div>
        </div>
            <!-- end modifier cojo -->

            <!-- bigin add formulaire membreCojo -->


            <!-- end formulaire membreCojo  --->
            <!-- debut modification de cojo membre  -->
            <notifications/>
  
            <!--fin de modification de cojo membre  -->
        </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import {formatageSomme} from '../../../../../src/Repositories/Repository'
import moment from 'moment';
export default {
    data(){
        return{
           
            formDataCojo:{
                   date_offre_fin:"",
                   exonere:"",
                   montant_tva:"",
                   tva:"",
                   montant_ouverture_ht:"",
                        date_offre_tech:'',
                        montant_ouverture:"",
                        date_ouverture:"",
                        date_composition:"",
                        num_dossier_appel_offre:"",
                        nbr_participant:"",
                        appel_offre_id:""
            },
            
            edite_cojo:"",
        }
    },
    props:["macheid"],
    created(){
    },
    computed:{
        ...mapGetters('bienService',['getterCojos','gettersCotations','appelOffres',
        'gettersCojoPersonnaliser']),
  ...mapGetters('personnelUA', ['acteur_depenses']),
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
  

         listeCojo() {
                return macheid => {
                    if (macheid != "") {
                    //   let Objet=  this.getterCojos.find(idmarche => idmarche.lettre_invitation.appel_offre.macheid == macheid);
                    //     let vM=this;
                    //     if(Objet!=undefined){
                    //         vM.idcojo=Objet.id
                    //     }
                        return this.getterCojos.filter(idmarche => idmarche.marche_id == macheid)
                    }
                }
            },
// listeAppelOffre() {
//       return id => {
//         if (id != null && id != "") {
//            const qtereel = this.gettersCotations.find(qtreel => qtreel.marche_id == id);

//       if (qtereel) {
//         return qtereel.ref_offre;
//       }
//       return 0
//         }
//       };
//     },

  listeAppelOffreLibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.appelOffres.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.ref_appel;
      }
      return 0
        }
      };
    },

    affichierReferenceAppelOffre() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.appelOffres.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.ref_appel;
      }
      return 0
        }
      };
    },
affichierAppelOffreid() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.appelOffres.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },

    
afficherEnorere(){
if(this.formDataCojo.exonere == 0){
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
      const val = parseFloat((this.formDataCojo.montant_ouverture_ht) * parseFloat(this.afficherEnorere)/100);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },

montantHTt() {
      const val = parseFloat(this.formDataCojo.montant_ouverture_ht) + parseFloat(this.montantTva);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },


    editAfficherEnorere(){
        if(this.edite_cojo.exonere == 0){
  return 0
}
else {
  return this.affcherTauxEnCours
  
}

    },

    editMontantTva(){
         const val = parseFloat((this.edite_cojo.montant_ouverture_ht) * parseFloat(this.editAfficherEnorere)/100);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0

    },

    editMontantHTt(){
          const val = parseFloat(this.edite_cojo.montant_ouverture_ht) + parseFloat(this.editMontantTva);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0

    }

          
    },
    methods:{
        ...mapActions('bienService',['supprimerCojo',
        'ajouterCojo', 'modifierCojo']),

            //  lettreInvitationAMarche: function () {
            //     return macheid => {
            //         if (macheid != "") {
                        
            //             return this.getterLettreInvitation.filter(idmarche => idmarche.appel_offre.macheid == macheid)
            //         }
            //     }
            // },
            // c'est une fonction pour afficher les membres
              
                afficheBouttonTechCojo(index){
        this.$('#modificationCojo').modal({
            backdrop: 'static',
            keyboard: false
        });
        this.edite_cojo = this.listeCojo(this.macheid)[index];
        //this.edite_lot.appel_offre_id=this.edite_lot. modifierDemandeAno
    },
    
  
  
     ajouterCojoMarche(){
         var nouvelObjet ={
             ...this.formDataCojo,
             marche_id:this.macheid,
             montant_ouverture:this.montantHTt,
             montant_tva:this.montantTva,
             tva:this.afficherEnorere,
             appel_offre_id :this.affichierAppelOffreid(this.macheid)

         }
              this.ajouterCojo(nouvelObjet)
                this.formDataCojo={
                        appel_offre_id:"",
                      date_offre_fin:"",
                      exonere:"",
                        date_offre_tech:'',
                        montant_ouverture:"",
                        date_ouverture:"",
                        date_composition:"",
                        num_dossier_appel_offre:"",
                        nbr_participant:""
                }
            },
// la fonction pour afficher le modal du cojo         editAfficherEnorere
           
 modificationCojo(){
      var nouvelObjet1 ={
             ...this.edite_cojo,
             marche_id:this.macheid,
             montant_ouverture:this.editMontantHTt,
             montant_tva:this.editMontantTva,
             tva:this.editAfficherEnorere,
             appel_offre_id :this.affichierAppelOffreid(this.macheid)

         }
                this.modifierCojo(nouvelObjet1)
                this.$('#modificationCojo').modal('hide');
            },
            // fonction pour formater la date
            formaterDate(date){
               return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY"); 
            },

            // formatage du montant

            formatageSomme:formatageSomme
    }
}
</script>

<style scoped>
 .grdirModalAnalyse{
         width: 900px;
 margin: 0 -500px;
 height: 500px;
    }
</style>

