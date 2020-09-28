<template>
<div>
  <div align="right">
    <div class="widget-content">
      <a href="#ajouterMP" data-toggle="modal" class="btn btn-primary">Ajouter</a>
    </div>
  </div>


<div v-for="item in lot" :key="item.id" class="widget-content">
  <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>

      <div class="span9"><h5>LOT N°{{ item.numero_lot }} / {{item.objet}}
      </h5></div>
<!--    <div class="span1"><button @click.prevent="afficheAnnalyseDossier(item.id)"  class="btn btn-warning " title="Supprimer">-->
<!--      <span class=""><i class="icon-edit"></i></span></button></div>-->
      <div class="span2"><button @click.prevent="supprimerAnalyseDossierMultiple(item.id)"  class="btn btn-danger " title="Supprimer">
        <span class=""><i class="icon-trash"></i></span></button></div>
  </div>

  <table class="table table-bordered table-striped">
    <thead>
    <tr>
      <th>Ref offre</th>
      <th>Soumissionnaire</th>
      <th> Montant Offre financiere</th>
      <th>Type d'analyse</th>
      <th>Conclusion Analyse</th>

    </tr>
    </thead>
    <tbody>
    <tr class="odd gradeX" v-for="appelOffre in analyseByLot(item.id)"
        :key="appelOffre.id">

      <td v-if="appelOffre.rang_analyse==1" style="background: green;color: white" @click="afficheAnnalyseDossier(appelOffre.id)">

        {{affichierReferenceAppelOffre(macheid)|| 'Non renseigné'}}
      </td>
      <td v-if="appelOffre.rang_analyse!=1"  >

        {{affichierReferenceAppelOffre(macheid)|| 'Non renseigné'}}
      </td>



      <td v-if="appelOffre.rang_analyse==1" style="background: green;color: white" >
        {{afficherNumeroDossierCandidat1(appelOffre.dossier_candidat_id) || 'Non renseigné'}}
      </td>
      <td v-if="appelOffre.rang_analyse!=1"  >
        {{afficherNumeroDossierCandidat1(appelOffre.dossier_candidat_id) || 'Non renseigné'}}
      </td>

      <td v-if="appelOffre.rang_analyse==1" style="background: green;color: white" >
        {{formatageSomme(parseFloat(afficherListeMontant(afficherOffrefID(appelOffre.dossier_candidat_id)))) || 'Non renseigné'}}
      </td>
      <td v-if="appelOffre.rang_analyse!=1"  >
        {{formatageSomme(parseFloat(afficherListeMontant(afficherOffrefID(appelOffre.dossier_candidat_id)))) || 'Non renseigné'}}
      </td>


      <td v-if="appelOffre.rang_analyse==1" style="background: green;color: white"
           >
        {{appelOffre.type_analyse.libelle || 'Non renseigné'}}
      </td>
      <td v-if="appelOffre.rang_analyse!=1"   >
        {{appelOffre.type_analyse.libelle || 'Non renseigné'}}
      </td>


      <td v-if="appelOffre.rang_analyse==1" style="background: green;color: white">
        CONFORME
      </td>
      <td v-if="appelOffre.rang_analyse!=1" style="background: darkred;color: white">
        NON CONFORME
      </td>



    </tr>
    </tbody>
  </table>
</div>


  <div id="ajouterMP" class="modal hide grdirModalAnalyse">
    <div class="modal-header">
      <button data-dismiss="modal" class="close" type="button">×</button>
      <h3>Jugement des offres</h3>
    </div>
    <div class="modal-body">
      <table class="table table-bordered table-striped">
        <tr>
          <td>
            <div class="control-group">
              <label class="control-label">Reference offre</label>
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
              <label>Lot</label>
              <div class="controls">
                <select v-model="marche_id" class="span" >
                  <option v-for="varText in listeLot(macheid)" :key="varText.id"
                          :value="varText.id">LOT N°{{varText.numero_lot}} {{varText.objet}}</option>
                </select>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="">
            <div class="control-group">
              <label class="control-label">Type analyse</label>
              <div class="controls">
                <select v-model="formAnalyseDossier.type_analyse_id" class="span" disabled>
                  <option v-for="plans in typeAnalyses" :key="plans.id"
                          :value="plans.id">{{plans.libelle}}</option>
                </select>
              </div>
            </div>
          </td>
          <td colspan="">
            <div class="control-group">
              <label class="control-label">Date</label>
              <div class="controls">
                <input type="date"
                       v-model="formAnalyseDossier.date_analyse"
                       class="span"
                       placeholder="date"
                />
              <!--  <input type="hidden"
              v-model="formAnalyseDossier.difference_personnel_bienService">-->
              </div>
            </div>
          </td>
        </tr>

      </table>
      <table class="table table-bordered table-striped">
        <thead>
        <th>N°LOT</th>
        <th>Soumissionnaire</th>
        <th>Offre Financière</th>
        <th>Conclusion</th>
        </thead>
        <tbody>
        <tr v-for="item in getSoumissionaireByLot(marche_id)" :key="item.id">
          <td>{{item.numero_lot}}</td>
          <td>{{item.dossier_candidature.nom_cand}}</td>
          <td>{{formatageSomme(parseFloat(item.montant_total_ttc)) || 'Non renseigné'}}</td>
          <td v-if="item.retenu" style="background: green;color: white">
            CONFORME
          </td>
          <td v-if="!item.retenu" style="background: darkred;color: white">
            NON CONFORME
          </td>
        </tr>
        </tbody>
      </table>
    </div>


    <div class="modal-footer">
      <a data-dismiss="modal" v-if="getSoumissionaireByLot(marche_id)" class="btn btn-primary" @click.prevent="ajouterJugementOffre(marche_id)" href="#">Valider</a>
      <a data-dismiss="modal" v-if="!getSoumissionaireByLot(marche_id)" class="btn btn-primary" disabled href="#">Valider</a>
      <a data-dismiss="modal" class="btn" href="#">Cancel</a>
    </div>
  </div>
  <!-- fin formulaire ajout analyse  -->

  <div id="modifierJugement" class="modal hide grdirModalAnalyse">
    <div class="modal-header">
      <button data-dismiss="modal" class="close" type="button">×</button>
      <h3>MODICATION</h3>
    </div>
    <div class="modal-body">
      <table class="table table-bordered table-striped">
        <tr>
          <td>
            <div class="control-group">
              <label class="control-label">Reference offre</label>
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
              <label>Lot</label>
              <div class="controls">
                <select v-model="lot_id" class="span" >
                  <option v-for="varText in lot" :key="varText.id"
                          :value="varText.id">LOT N°{{varText.numero_lot}} {{varText.objet}}</option>
                </select>
              </div>
            </div>
          </td>



        </tr>

        <tr>
          <td colspan="">
            <div class="control-group">
              <label class="control-label">Type analyse</label>
              <div class="controls">
                <select v-model="formAnalyseDossier.type_analyse_id" class="span" disabled>
                  <option v-for="plans in typeAnalyses" :key="plans.id"
                          :value="plans.id">{{plans.libelle}}</option>
                </select>
              </div>
            </div>
          </td>
          <td colspan="">
            <div class="control-group">
              <label class="control-label">Date</label>
              <div class="controls">
                <input type="date"
                       v-model="formAnalyseDossier.date_analyse"
                       class="span"
                       placeholder="date"
                />
                <!--  <input type="hidden"
                v-model="formAnalyseDossier.difference_personnel_bienService">-->
              </div>
            </div>
          </td>
        </tr>

      </table>
      <table class="table table-bordered table-striped">
        <thead>
        <th>N°LOT</th>
        <th>Soumissionnaire</th>
        <th>Offre Financière</th>
        <th>Conclusion</th>
        </thead>
        <tbody>
        <tr v-for="item in getSoumissionaireByLot(lot_id)" :key="item.id">
          <td>{{item.numero_lot}}</td>
          <td>{{item.dossier_candidature.nom_cand}}</td>
          <td>{{formatageSomme(parseFloat(item.montant_total_ttc)) || 'Non renseigné'}}</td>
          <td v-if="item.retenu" style="background: green;color: white">
            CONFORME
          </td>
          <td v-if="!item.retenu" style="background: darkred;color: white">
            NON CONFORME
          </td>
        </tr>
        </tbody>
      </table>
    </div>


    <div class="modal-footer">
      <a data-dismiss="modal" v-if="getSoumissionaireByLot(marche_id)" class="btn btn-primary" @click.prevent="ajouterJugementOffre(marche_id)" href="#">MODIFICATION</a>
      <a data-dismiss="modal" v-if="!getSoumissionaireByLot(marche_id)" class="btn btn-primary" disabled href="#">MODIFICATION</a>
      <a data-dismiss="modal" class="btn" href="#">Cancel</a>
    </div>
  </div>

</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

import moment from 'moment';
import {formatageSomme} from "@/Repositories/Repository";
export default {

  data(){
    return{
      marche_id:"",
      lot_id:"",
      formAnalyseDossier:{
        date_analyse:"",
        // appel_offre_id:"",
        rang_analyse:"",
        appel_offre_id:"",
        marche_parent_id:"",
        note_analyse:"",
        dossier_candidat_id:"",
        type_analyse_id: 2,
        // cojo_id:""
      },
      edite_analyse_dossier:"",
      lot:"",
      jugement:[]
    }
  },
  props:["macheid"],
  created(){
    this.lot=this.getMarchePersonnaliser.filter(item=>item.parent_id==this.macheid)
  },
  computed:{
    ...mapGetters("bienService", ["appelOffres","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
      "modePassations", "procedurePassations","getterDossierCandidats","marches", "gettersCotations",
      "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
      "getterMandate","getterCojos","getterAnalyseDossiers","typeAnalyses", "analyseDossiers","text_juridiques"
    ]),
   getSoumissionaireByLot(){
      return marche_id=>{
        let seft=this;
        let offreT=this.gettersOffreTechniques.filter(item=>{
          if(item.marche_id==marche_id && item.observation==1){
            return  item
          }
        })

        let collection=[]
        if (offreT.length>0){
          offreT.forEach(function (value) {
              let offer_fin=seft.getterOffreFinanciers.find(item=>{
                if(item.marche_id==value.marche_id && item.dossier_candidat_id==value.dossier_candidat_id){
                  return item
                }
              })
            //console.log(value)
            collection.push(offer_fin)
          })

      let objet=collection.sort(function (a, b) {
        return a.montant_total_ttc - b.montant_total_ttc;
        });
          let array_resutat=[]
          let note=objet.length
          objet.forEach((value, index) => {
            let ob={
              ...value,
              retenu:0,
               rang_analyse:index+1,
              note_analyse:note-index,
              type_analyse_id:2,
            }
            if(index==0){

              ob.retenu=1
            }
            array_resutat.push(ob)
            //seft.jugement.push(ob)
          })
//console.log(array_resutat)
          return array_resutat
          //sort((a,b)=>(a.montant_total_ttc>b.montant_total_ttc)? 1:-1)
         //
        }
        return null
      }
   },
    analyseByLot(){
     return id=>{
       return this.getterAnalyseDossiers.filter(item=>item.marche_id==id)
     }
    },
    listeLot(){
      return (marche_id)=>{
        if(marche_id!=""){
          let seft=this;

          let lot_marche=this.getMarchePersonnaliser.filter(item=>item.parent_id==marche_id)
          let collection=[];

          if (lot_marche.length>0){

            lot_marche.forEach(function (value) {
              let objet=seft.getterAnalyseDossiers.filter(item=>{
                if(item.marche_id==value.id){
                  return item
                }
              })
              if(objet.length==0){
                collection.push(value)
              }
            })
            return collection
          }
          return null
        }
      }
    },
    listeAnalyseDossier: function () {
      return macheid => {
        if (macheid != "") {

          return this.getterAnalyseDossiers.filter(idmarche => idmarche.marche_id == macheid).sort((a,b)=>(a.note_analyse>b.note_analyse)? 1:-1)
        }
      }
    },

    afficherMontant(){
      return id => {
        if( id !== undefined) {
          var acteur = this.getterOffreFinanciers.find(acteur => acteur.dossier_candidat_id == id)

          return  (acteur) ? acteur.montant_total_ttc :null
        }
        return null
      }

    },


    afficherListeMontant(){
      return id => {
        if( id !== undefined) {
          var acteur = this.getterOffreFinanciers.find(acteur => acteur.id == id)

          return  (acteur) ? acteur.montant_total_ttc :null
        }
        return null
      }

    },


    // afficher le montant
    afficherOffrefID() {
      return id => {
        if (id != null && id != "") {
          const qtereel = this.getterOffreFinanciers.find(qtreel => qtreel.dossier_candidat_id == id);

          if (qtereel) {
            return qtereel.id;
          }
          return 0
        }
      };
    },

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


    afficherNumeroDossierCandidatMenuDeroulant() {
      return id => {
        if (id != null && id != "") {
          return this.getterDossierCandidats.filter(qtreel => qtreel.marche_id == id);
        }
      };
    },

    afficherNumeroDossierCandidat1() {
      return id => {
        if (id != null && id != "") {
          const qtereel = this.getterDossierCandidats.find(qtreel => qtreel.id == id);

          if (qtereel) {
            return qtereel.numero_dossier.concat( ' =>  ',    qtereel.nom_cand);
          }
          return null
        }
      };
    },


  },

  methods:{
    ...mapActions('bienService',['supprimerAnalyseDossier',
      'ajouterAnalyseDossier','modifierAnalyseDossier',"ajouterAnalyseDossierMultiple","supprimerAnalyseDossierMultiple"]),

    ajouterAnalyseD(){
      var nouvelObjet ={
        ...this.formAnalyseDossier,
        marche_id:this.macheid,
        appel_offre_id:this.affichierAppelOffreid(this.macheid),
        //  dossier_candidat_id: this.afficherOffrefID(this.macheid)
      }
      this.ajouterAnalyseDossier(nouvelObjet)
      this.formAnalyseDossier={
        date_analyse:"",
        //appel_offre_id:"",
        rang_analyse:"",
        appel_offre_id:"",
        difference_personnel_bienService:"bienservice",
        note_analyse:"",
        // dossier_candidat_id:"",
        type_analyse_id: "",
        // cojo_id:""
      }
    },

    modificationDossierAnalyse(){
      var nouvelObjet1 ={
        ...this.edite_analyse_dossier,
        marche_id:this.macheid,
        appel_offre_id :this.affichierAppelOffreid(this.macheid),
        //    dossier_candidat_id: this.afficherOffrefID(this.macheid)
      }
      this.modifierAnalyseDossier(nouvelObjet1)
      this.$('#modificationAajouterAnalys01').modal('hide');
    },

    afficheAnnalyseDossier(index){
      this.$('#modifierJugement').modal({
        backdrop: 'static',
        keyboard: false
      });
      this.lot_id=index;
    //  this.edite_analyse_dossier = this.listeAnalyseDossier(this.macheid)[index];
    },

    formaterDate(date){
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    formatageSomme:formatageSomme,
    ajouterJugementOffre(id){
      console.log(this.getSoumissionaireByLot(id))
      let objet={
          analyse:this.getSoumissionaireByLot(id),
          marche_parent_id:this.macheid,
          appel_offre_id :this.affichierAppelOffreid(this.macheid),
      }
      this.ajouterAnalyseDossierMultiple(objet)
      this.marche_id=""
      this.$('#ajouterMP').modal('hide');
    }
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