


<template>
  <div>

    <!-- debut de liste analyse  -->
    <h4>Liste des dossiers analyses</h4>
    <table class="table table-bordered table-striped" >
      <thead>
      <tr>
        <th>Ref offre</th>
        <th>Date Analyse </th>
        <th>Rang d'analyse</th>
        <th>Note</th>
        <th>Numero dossier Candidat</th>
        <th> Montant Offre financiere TTC (Fcfa)</th>
        <th>Type d'analyse</th>


        <th>Action</th>
      </tr>
      </thead>
      <tbody v-if="macheid">
      <tr class="odd gradeX" v-for="(appelOffre, index) in listeAnalyseDossier(macheid)"
          :key="appelOffre.id">

        <td @click="afficheAnnalyseDossier(index)">

          {{listeAppelOffreLibelle(appelOffre.appel_offre_id)|| 'Non renseigné'}}</td>


        <!-- <td @click="afficheAnnalyseDossier(index)">
            {{appelOffre.dossier_candidature.nom_cand || 'Non renseigné'}}</td> -->
        <td @click="afficheAnnalyseDossier(index)">
          {{formaterDate(appelOffre.date_analyse) || 'Non renseigné'}}</td>
        <td @click="afficheAnnalyseDossier(index)">
          {{appelOffre.rang_analyse || 'Non renseigné'}}</td>
        <td @click="afficheAnnalyseDossier(index)">
          {{appelOffre.note_analyse || 'Non renseigné'}}</td>

        <td @click="afficheAnnalyseDossier(index)">
          {{afficherNumeroDossierCandidat1(appelOffre.dossier_candidat_id) || 'Non renseigné'}}</td>

        <td @click="afficheAnnalyseDossier(index)">
          {{formatageSomme(parseFloat(afficherListeMontant(afficherOffrefID(appelOffre.dossier_candidat_id)))) || 'Non renseigné'}}</td>


        <td @click="afficheAnnalyseDossier(index)">
          {{appelOffre.type_analyse.libelle || 'Non renseigné'}}</td>
        <!-- <td @click="afficheAnnalyseDossier(index)">
            {{appelOffre.cojo.controleur_finnancier || 'Non renseigné'}}</td> -->
        <!--<td @click="afficheAnnalyseDossier(index)">
            <button class="btn btn-info btn-mini" v-if="avisPv(appelOffre.reference_pv)==null">En attende</button>
            <button class="btn btn-success btn-mini" v-else-if="avisPv(appelOffre.reference_pv)== 1">Non Objection</button>
            <button class="btn btn-danger btn-mini" v-else>Objection</button>
        </td>-->
        <div class="btn-group">
          <button @click.prevent="supprimerAnalyseDossier(appelOffre.id)"  class="btn btn-danger " title="Supprimer">
            <span class=""><i class="icon-trash"></i></span></button>

        </div>

      </tr>
      </tbody>
    </table>

    <div id="ajouterMP" class="modal hide grdirModalAnalyse">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter le jugement des offres</h3>
      </div>

      <table class="table table-bordered table-striped">
        <tr>
          <td>
            <div class="control-group">
              <label class="control-label">Reference offre</label>
              <div class="controls">
                <!-- <select v-model="formAnalyseDossier.appel_offre_id" class="span" disabled>
                    <option v-for="plans in listeAppelOffre(macheid)" :key="plans.id"
                            :value="plans.id">{{plans.ref_offre}}</option>
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
          <td>
            <div class="control-group">
              <label class="control-label">Numero du dossier</label>
              <div class="controls">
                <select v-model="formAnalyseDossier.dossier_candidat_id" class="span">
                  <option v-for="plans in afficherNumeroDossierCandidatMenuDeroulant(macheid)" :key="plans.id"
                          :value="plans.id">{{plans.numero_dossier}} => {{plans.nom_cand}}</option>
                </select>

                <!-- <input
                       type="text"
                       :value="afficherNumeroDossierCandidat(macheid)"
                       class="span"
                          readonly
               /> -->

              </div>
            </div>
          </td>


          <td>

            <div class="control-group">
              <label class="control-label">Offre Financiere</label>
              <div class="controls">
                <!-- <select v-model="formAnalyseDossier.cojo_id" class="span" :readOnly="verifiBanqueExist">
                    <option v-for="plans in afficherMontant(formAnalyseDossier.dossier_candidat_id)" :key="plans.id"
                            :value="plans.id">{{plans.controleur_finnancier}}</option>
                </select> -->
                <input type="text" :value="afficherMontant(formAnalyseDossier.dossier_candidat_id)" readonly>
              </div>
            </div>
          </td>


          <td colspan="">
            <div class="control-group">
              <label class="control-label">Type analyse</label>
              <div class="controls">
                <select v-model="formAnalyseDossier.type_analyse_id" class="span">
                  <option v-for="plans in typeAnalyses" :key="plans.id"
                          :value="plans.id">{{plans.libelle}}</option>
                </select>
              </div>
            </div>
          </td>


        </tr>

        <tr>

          <td>
            <div class="control-group">
              <label class="control-label">Note</label>
              <div class="controls">
                <input type="text"
                       v-model="formAnalyseDossier.note_analyse"
                       class="span"
                       placeholder="Saisir la note"
                />
              </div>
            </div>

          </td>


          <td>

            <div class="control-group">
              <label class="control-label">Rang</label>
              <div class="controls">
                <input
                    type="text"
                    v-model="formAnalyseDossier.rang_analyse"
                    class="span"
                    placeholder="Rang d'analyse"
                />
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
                <input type="hidden" v-model="formAnalyseDossier.difference_personnel_bienService">
              </div>
            </div>
          </td>

        </tr>


      </table>

      <div class="modal-footer">
        <a data-dismiss="modal" class="btn btn-primary" @click.prevent="ajouterAnalyseD()" href="#">Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>
    </div>
    <!-- fin formulaire ajout analyse  -->




    <div id="modifierJugement" class="modal hide grdirModalAnalyse">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modification du dossier Analyse</h3>
      </div>

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
              <label class="control-label">Dossier candidat</label>
              <div class="controls">

                <select v-model="edite_analyse_dossier.dossier_candidat_id" class="span">
                  <option v-for="plans in afficherNumeroDossierCandidatMenuDeroulant(macheid)" :key="plans.id"
                          :value="plans.id">{{plans.numero_dossier}} => {{plans.nom_cand}} </option>
                </select>

                <!-- <input
                        type="text"
                        :value="afficherNumeroDossierCandidat(macheid)"
                        class="span"
                           readonly
                /> -->
              </div>
            </div>
          </td>


          <td>

            <div class="control-group">
              <label class="control-label">Offre Financiere</label>
              <div class="controls">
                <!-- <select v-model="formAnalyseDossier.cojo_id" class="span" :readOnly="verifiBanqueExist">
                    <option v-for="plans in afficherMontant(formAnalyseDossier.dossier_candidat_id)" :key="plans.id"
                            :value="plans.id">{{plans.controleur_finnancier}}</option>
                </select> -->
                <input type="text" :value="afficherMontant(edite_analyse_dossier.dossier_candidat_id)" readonly>
              </div>
            </div>
          </td>

          <td colspan="2">
            <div class="control-group">
              <label class="control-label">Type analyse</label>
              <div class="controls">
                <select v-model="edite_analyse_dossier.type_analyse_id" class="span">
                  <option v-for="plans in typeAnalyses" :key="plans.id"
                          :value="plans.id">{{plans.libelle}}</option>
                </select>
              </div>
            </div>
          </td>
        </tr>
        <tr>

          <td>

            <div class="control-group">
              <label class="control-label">Note</label>
              <div class="controls">
                <input type="text"
                       v-model="edite_analyse_dossier.note_analyse"
                       class="span"
                       placeholder=""
                />
              </div>
            </div>
          </td>
          <td>

            <div class="control-group">
              <label class="control-label">Rang analyse :</label>
              <div class="controls">
                <input
                    type="text"
                    v-model="edite_analyse_dossier.rang_analyse"
                    class="span"
                    placeholder="Rang d'analyse"
                />
              </div>
            </div>
          </td>




          <td >
            <div class="control-group">
              <label class="control-label">Date :</label>
              <div class="controls">
                <input type="date"
                       v-model="edite_analyse_dossier.date_analyse"
                       class="span"
                       placeholder=""
                />
                <input type="hidden" v-model="edite_analyse_dossier.difference_personnel_bienService">
              </div>
            </div>
          </td>
        </tr>
      </table>


      <!-- <div class="control-group">
          <label class="control-label">Decision</label>
          <div class="controls">
              <select   v-model="edite_analyse_dossier.decision" >
                  <option value="1">Non objection</option>
                  <option value="2">Objection</option>
              </select>
          </div>
      </div> -->


      <div class="modal-footer">
        <a data-dismiss="modal" class="btn btn-primary" @click.prevent="modificationDossierAnalyse()" href="#">Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>
    </div>
    <notifications/>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

import moment from 'moment';
import {formatageSomme} from "@/Repositories/Repository";
export default {

  data(){
    return{
      formAnalyseDossier:{
        date_analyse:"",
        // appel_offre_id:"",
        rang_analyse:"",
        appel_offre_id:"",
        difference_personnel_bienService:"bienservice",
        note_analyse:"",
        dossier_candidat_id:"",
        type_analyse_id: "",
        // cojo_id:""
      },
      edite_analyse_dossier:""
    }
  },
  props:["macheid"],
  created(){
  },
  computed:{
    ...mapGetters("bienService", ["appelOffres","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
      "modePassations", "procedurePassations","getterDossierCandidats","marches", "gettersCotations",
      "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
      "getterMandate","getterCojos","getterAnalyseDossiers","typeAnalyses", "analyseDossiers","text_juridiques"
    ]),
    // ...mapGetters('personnelUA', ['acteur_depenses']),
    //             ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),
    //         ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
    //             'types_financements']) ,

    // ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),

    // ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),



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




    //  afficherMontant(){
    //     return id =>{
    //         if(id != null && id !=""){
    //           return this.getterOffreFinanciers.filter(element => element.dossier_candidat_id== id)


    //         }
    //     }
    // },



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





    //   afficherNumeroDossierCandidat() {
    //   return id => {
    //     if (id != null && id != "") {
    //        const qtereel = this.getterDossierCandidats.find(qtreel => qtreel.marche_id == id);

    //   if (qtereel) {
    //     return qtereel.numero_dossier;
    //   }
    //   return null
    //     }
    //   };
    // },


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
      'ajouterAnalyseDossier','modifierAnalyseDossier']),







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
      this.edite_analyse_dossier = this.listeAnalyseDossier(this.macheid)[index];
    },

    //   modificationDossierAnalyse(){
    //     this.modifierAnalyseDossier(this.edite_analyse_dossier)
    //     this.$('#modifierJugement').modal('hide');
    // },
// formatage de date
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
  height: 350px;
}
</style>