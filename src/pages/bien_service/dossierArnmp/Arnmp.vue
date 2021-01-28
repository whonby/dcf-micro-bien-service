
<template>
    <div>
        <div align="right">
    <div class="widget-content">
      <a href="#ajouterArnmp" data-toggle="modal" class="btn btn-primary">Ajouter</a>
    </div>
  </div>
  <table class="table table-bordered table-striped">
     <thead>
    <tr>
      <th>Référence de l'offre </th>
      <th>Numéro du lot</th>
      <th>Objet de recours</th>
      <th>Date de recours</th>
      <th>Entreprise</th>
      <th>Date de résolution</th>
      <th>Organe de résolution</th>
      <th>Décision de l'organe</th>
      <th>Action</th>
     

    </tr>
    </thead>
        <tbody>
        <tr v-for="(item,index) in afficherListeANRMP(macheid)" :key="item.id">
          <td @click="afficherModificationReserveCf(index)">{{item.ref_courier || 'Non renseigné'}}</td>
          <td @click="afficherModificationReserveCf(index)">{{afficherListeNumeroLot(item.lot_id)}}=>{{afficherListeLot(item.lot_id) || 'Non renseigné'}} </td>
           <td @click="afficherModificationReserveCf(index)">{{item.objet_recours || 'Non renseigné'}}</td>
          <td @click="afficherModificationReserveCf(index)">{{formaterDate(item.date_recour || 'Non renseigné')}}</td>
          <td @click="afficherModificationReserveCf(index)">{{afficherNumeroDossierCandidat1(item.entreprise_id) || 'Non renseigné'}}</td>
         <td @click="afficherModificationReserveCf(index)">{{formaterDate(item.date_resolution || 'Non renseigné')}}</td>
         <td @click="afficherModificationReserveCf(index)">{{afficherLibelleOrganeDecision(item.organe_id) || 'Non renseigné'}}</td>
         <td @click="afficherModificationReserveCf(index)">{{item.decision_organe || 'Non renseigné'}}</td>
         <div class="btn-group">
          <button @click.prevent="supprimerArnmp(item.id)"  class="btn btn-danger " title="Supprimer">
            <span class=""><i class="icon-trash"></i>Supprimer</span></button>
            </div>
         
        </tr>
        </tbody>
      </table>

  <div id="ajouterArnmp" class="modal hide grdirModalAnalyse">
    <div class="modal-header">
      <button data-dismiss="modal" class="close" type="button">×</button>
      <h3>Ajouter Autorité Nationale de Régularisation des Marchés Publics (ANRMP)</h3>
    </div>
    <div class="modal-body">
        <table class="table table-bordered table-striped">
                          <tr>
                            <td >
                        <div class="control-group">
                        <label class="control-label">Référence</label>
                        <div class="controls">
                            <!-- <select v-model="formeReserve.appel_offre_id" class="span" disabled>
                                <option v-for="plans in listeAppelOffre(macheid)" :key="plans.id"
                                        :value="plans.id">{{plans.ref_appel}}</option>
                            </select> -->
                            <input
                                    type="text"
                                    :value="affichierReferenceAppelOffre(macheid)"
                                    class="span"
                                   readonly
                            />
                            
                        </div>
                    </div>
                            </td>
                          <td colspan="2">
            <div class="control-group">
              <label>Numéro du lot  </label>
              <div class="controls">
                <select v-model="formeReserve.lot_id" class="span" >
                  <option v-for="varText in getLotMarche" :key="varText.id"
                          :value="varText.id">{{varText.numero_lot}}=>{{varText.objet}}</option>
                </select>
              </div>
            </div>
          </td>
           
                        
                            </tr>
                            <tr>
                            <td colspan="3" width="">
                        <div class="control-group">
                            <label class="control-label">Objet de recours</label>
                            <div class="controls">
                                 <textarea  v-model="formeReserve.objet_recours"  class="textarea_editor span12" rows="3" placeholder="Entrer le texte ..."></textarea>
                    
                            </div>
                        </div>
                            </td>
                            </tr>
                            <tr>
                                      <td colspan="2">
            <div class="control-group">
              <label>Entreprise  </label>
              <div class="controls">
                <select v-model="formeReserve.entreprise_id"   class="span"  :readOnly="DeveroullageEntreprise" >
                  <option v-for="varText in listeAnalyseDossier(formeReserve.lot_id)" :key="varText.id" 
                          :value="varText.dossier_candidat_id"> {{afficherNumeroDossierCandidat1(varText.dossier_candidat_id)}}</option>
                </select>
              </div>
            </div>
          </td>
            
                            <td>
                        <div class="control-group">
                        <label class="control-label">Date de recours</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="formeReserve.date_recour"
                                    class="span"
                                    placeholder="Saisir "
                            />
                        </div>
                    </div>
                                </td>
                             
                            </tr>
                            <tr>
                                  <td>
                         <div class="control-group">
                        <label class="control-label">Date de résolution</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="formeReserve.date_resolution"
                                    class="span"
                                    placeholder=""
                            />
                        </div>
                    </div>
                        </td> 
                                   <td colspan="">
            <div class="control-group">
              <label> Organe de résolution </label>
              <div class="controls">
                <select v-model="formeReserve.organe_id" class="span" >
                  <option v-for="varText in gettersOrganeDecision" :key="varText.id"
                          :value="varText.id">{{varText.libelle}}</option>
                </select>
              </div>
            </div>
          </td>
                             
                           <!-- <td>
                         <div class="control-group">
                        <label class="control-label"> </label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="formeReserve.organe_resolution"
                                    class="span"
                                    placeholder=""
                            />
                        </div>
                    </div>
                        </td> -->
                        <td colspan="">
                        <div class="control-group">
                   <label class="control-label">Fichier joint:</label>
                    <div class="controls">
                     <input type="file"    />
              </div>
            </div>
                        </td>
                        </tr>
                        <tr>
                             <td colspan="3">
                         <div class="control-group">
                        <label class="control-label"> Décision de l'organe</label>
                        <div class="controls">
                          <textarea v-model="formeReserve.decision_organe"   class="textarea_editor span"   rows="3" placeholder="Entrer  le text ..."></textarea>
                            <!-- <input
                                    type="text"
                                    v-model="formeReserve.decision_organe"
                                    class="span"
                                    placeholder=""
                            /> -->
                        </div>
                    </div>
                        </td>
                        </tr>
                    </table> 
      
    </div>


    <div class="modal-footer">
      <a data-dismiss="modal"  class="btn btn-primary" @click.prevent="ajouterArnmpLocal"  href="#">Valider</a>
      <a data-dismiss="modal" class="btn" href="#">Cancel</a>
    </div>
  </div>
  <!-- fin formulaire ajout analyse  -->

   <div id="modifierArnmpms" class="modal hide grdirModalAnalyse">
    <div class="modal-header">
      <button data-dismiss="modal" class="close" type="button">×</button>
      <h3> Modification Autorité Nationale de Régularisation des Marchés Publics (ANRMP)</h3>
    </div>
    <div class="modal-body">
      <table class="table table-bordered table-striped">
                          <tr>
                            <td >
                        <div class="control-group">
                        <label class="control-label">Référence</label>
                        <div class="controls">
                            <!-- <select v-model="formeReserve.appel_offre_id" class="span" disabled>
                                <option v-for="plans in listeAppelOffre(macheid)" :key="plans.id"
                                        :value="plans.id">{{plans.ref_appel}}</option>
                            </select> -->
                            <input
                                    type="text"
                                    :value="affichierReferenceAppelOffre(macheid)"
                                    class="span"
                                   readonly
                            />
                            
                        </div>
                    </div>
                            </td>
                          <td colspan="2">
            <div class="control-group">
              <label>Numéro du lot  </label>
              <div class="controls">
                <select v-model="editReserve.lot_id" class="span" >
                  <option v-for="varText in getLotMarche" :key="varText.id"
                          :value="varText.id">{{varText.numero_lot}}=>{{varText.objet}}</option>
                </select>
              </div>
            </div>
          </td>
           
                        
                            </tr>
                            <tr>
                            <td colspan="3" width="">
                        <div class="control-group">
                            <label class="control-label">Objet de recours</label>
                            <div class="controls">
                                 <textarea  v-model="editReserve.objet_recours"  class="textarea_editor span12" rows="3" placeholder="Entrer le  texte ..."></textarea>
                    
                            </div>
                        </div>
                            </td>
                            </tr>
                            <tr>
                                      <td colspan="2">
            <div class="control-group">
              <label>Entreprise  </label>
              <div class="controls">
                <select v-model="editReserve.entreprise_id"   class="span"   >
                  <option v-for="varText in listeAnalyseDossier(editReserve.lot_id)" :key="varText.id" 
                          :value="varText.id"> {{afficherNumeroDossierCandidat1(varText.dossier_candidat_id)}}</option>
                </select>
              </div>
            </div>
          </td>
            
                            <td>
                        <div class="control-group">
                        <label class="control-label">Date de recours</label>
                        <div class="controls">
                            <input
                                    type="date"
                                    v-model="editReserve.date_recour"
                                    class="span"
                                    placeholder="Saisir "
                            />
                        </div>
                    </div>
                                </td>
                             
                            </tr>
                            <tr>
                                                <td colspan="">
            <div class="control-group">
              <label> Organe de résolution </label>
              <div class="controls">
                <select v-model="editReserve.organe_id" class="span" >
                  <option v-for="varText in gettersOrganeDecision" :key="varText.id"
                          :value="varText.id">{{varText.libelle}}</option>
                </select>
              </div>
            </div>
          </td>
                             
                           <!-- <td>
                         <div class="control-group">
                        <label class="control-label"> Organe de résolution</label>
                        <div class="controls">
                            <input
                                    type="text"
                                    v-model="editReserve.organe_resolution"
                                    class="span"
                                    placeholder=""
                            />
                        </div>
                    </div>
                        </td> -->
                        <td colspan="">
                        <div class="control-group">
                   <label class="control-label">Fichier joint:</label>
                    <div class="controls">
                     <input type="file"    />
              </div>
            </div>
                        </td>
                        </tr>
                        <tr>
                             <td colspan="3">
                         <div class="control-group">
                        <label class="control-label"> Décision de l'organe</label>
                        <div class="controls">
                          <textarea v-model="editReserve.decision_organe"   class="textarea_editor span"   rows="3" placeholder="Entrer  le texte ..."></textarea>
                            <!-- <input
                                    type="text"
                                    v-model="formeReserve.decision_organe"
                                    class="span"
                                    placeholder=""
                            /> -->
                        </div>
                    </div>
                        </td>
                        </tr>
                    </table> 
      
    </div>


    <div class="modal-footer">
      <a data-dismiss="modal"  class="btn btn-primary" @click.prevent="modifierArnmpLocal"  href="#">Modifier</a>
      <a data-dismiss="modal" class="btn" href="#">Annuler</a>
    </div>
  </div>
  <notifications/>
    </div>
</template>
<script>
import {mapGetters, mapActions} from "vuex"
import moment from "moment";
export default {
    data(){
        return{
  formeReserve:{
	ref_courier:"",
lot_id:"",
objet_recours:"",
  date_recour:"",
  entreprise_id:"",
  date_resolution:"",
  //organe_resolution:"",
  decision_organe:""
  },
  editReserve:{

  },
  marche_id:""
        }
    },
    props:["macheid"],
    created() {
    this.lot=this.getMarchePersonnaliser.filter(item=>item.parent_id==this.macheid)
    //this.detail_marche=this.getMarchePersonnaliser.find(item=>item.id==this.macheid)
  //console.log(this.lot)
  },
    computed:{
  ...mapGetters("bienService", ["gettersArnmp","appelOffres","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
      "modePassations", "procedurePassations","getterDossierCandidats","marches", "gettersCotations",
      "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","gettersOrganeDecision",
      "getterMandate","getterCojos","getterAnalyseDossiers","typeAnalyses", "analyseDossiers","text_juridiques"
    
    ]),
    ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),

    afficherListeANRMP() {
      return id => {
        if (id != null && id != "") {
          return this.gettersArnmp.filter(
            element => element.marche_id == this.macheid
          );
        }
      };
    },
    
     afficherId(){
       return id=>{
         if(id!=null && id!=""){
           const objet = this.getterAnalyseDossiers.find(item => item.marche_id==id)
           if(objet) return objet.dossier_candidat_id
         }
       }
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
      getLotMarche(){
      return this.getMarchePersonnaliser.filter(item=>item.parent_id==this.macheid);
    },
      afficherListeLot(){
      return id1 =>{
        if(id1!=null && id1!=""){
          const objetAnswer = this.getMarchePersonnaliser.find(item=>item.id==id1)
          if(objetAnswer)   return objetAnswer.objet
         
          
        }
      }
    },
    afficherLibelleOrganeDecision(){
      return id =>{
        if(id!=null && id!=""){
          const objetAnswer = this.gettersOrganeDecision.find(item=>item.id==id)
          if(objetAnswer)   return objetAnswer.libelle
         
          
        }
      }
    },
    afficherListeNumeroLot(){
      return id =>{
        if(id!=null && id!=""){
          const objetAnswer = this.getMarchePersonnaliser.find(item=>item.id==id)
          if(objetAnswer)   return objetAnswer.numero_lot
         
          
        }
      }
    },
    afficherLibelleEntreprise(){
      return id =>{
        if(id!=null && id!=""){
       return this.getterAnalyseDossiers.filter(item=>item.marche_id==id)
         
         
          
        }
      }
    },
    DeveroullageEntreprise(){
      return this.formeReserve.lot_id=="";
    },

      listeAnalyseDossier: function () {
      return macheid => {
        if (macheid != "") {

          return this.getterAnalyseDossiers.filter(idmarche => idmarche.marche_id == macheid)
        }
      }
    },
    //  analyseByLot(){
     
    //    return this.getterAnalyseDossiers.filter(item=>item.marche_id==this.macheid)
     
    // },
 
    // afficherNumeroDossierCandidat1() {
    //   return id => {
    //     if (id != null && id != "") {
    //       const qtereel = this.getterDossierCandidats.find(qtreel => qtreel.id == id);

    //       if (qtereel) {
    //         return qtereel.numero_dossier.concat( ' =>  ',    qtereel.nom_cand);
    //       }
    //       return null
    //     }
    //   };
    // },
     afficherNumeroDossierCandidat1() {
      return id => {
        if (id != null && id != "") {
          const qtereel = this.getterDossierCandidats.find(qtreel => qtreel.id == id);

          if (qtereel) {
            return qtereel.numero_dossier.concat( ' =>  ',    this.afficheNomEntreprise(qtereel.entreprise_id));
          }
          return null
        }
      };
    },

afficheNomEntreprise() {
      return id => {
        if (id != null && id != "") {
          const qtereel = this.entreprises.find(qtreel => qtreel.id == id);
          if (qtereel) {
            return qtereel.raison_sociale;
          }
          return 0
        }
      };
    },

    },
    methods:{
...mapActions("bienService",['ajouterArnmp', 'modifierArnmp','supprimerArnmp']),

  afficherModificationReserveCf(index){
                this.$('#modifierArnmpms').modal({
                    backdrop: 'static',
                    keyboard: false
                });
                this.editReserve = this.afficherListeANRMP(this.macheid)[index];
            },
   ajouterArnmpLocal(){

     var nouvelObjet={
       ...this.formeReserve,
       ref_courier:this.affichierReferenceAppelOffre(this.macheid),
       marche_id:this.macheid

     }
     this.ajouterArnmp(nouvelObjet)
     this.formeReserve={
       	ref_courier:"",
lot_id:"",
objet_recours:"",
  date_recour:"",
  entreprise_id:"",
  date_resolution:"",
  //organe_resolution:"",
  decision_organe:""
     }

   },
   modifierArnmpLocal(){
     var objetModifi={
       ...this.editReserve,
        ref_courier:this.affichierReferenceAppelOffre(this.macheid),
        marche_id:this.macheid
     }
     this.modifierArnmp(objetModifi)
     this.$('#modifierReserveCf').modal('hide');

     
   },

    formaterDate(date) {
              return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },

    }
    
}
</script>
<style scoped>
.grdirModalAnalyse{
  width: 1000px;
  margin: 0 -500px;
  height: 500px;
}
</style>