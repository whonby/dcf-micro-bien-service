<template>
  <div>



    <div align="right">
      <div class="widget-content">
        <a href="#ajouterAnoDMPBAILLEURModal" data-toggle="modal" class="btn btn-primary" v-if="listeAvisDemandeAno(macheid)" >Ajouter</a>
        <button class="btn btn-primary"  title="veillez recommencer le jugement , car l'Avis ANO DMP est Objection" disabled v-else  >Ajouter</button>
      </div>
    </div>


    <table class="table table-bordered table-striped" v-if="macheid">
      <thead>
      <tr>
        <th>Numéro courrier</th>
        <!-- <th>Reférence d'offre </th> -->
        <!-- <th>Reference PV</th> -->
        <th>Date ANO bailleur</th>
        <th>Fichier</th>
        <th>Avis</th>
        <th>Date de l'avis</th>
        <th>Action</th>
      </tr>
      </thead>

      <tbody>

      <tr class="odd gradeX" v-for="anoBailleur in listeAnoDMPBailleur(macheid)"
          :key="anoBailleur.id" >
        <td @click="afficheAnoDPMBailleurModale(anoBailleur.id)">
          {{anoBailleur.numero_courie || 'Non renseigné'}}</td>
        <td @click="afficheAnoDPMBailleurModale(anoBailleur.id)">
          {{anoBailleur.date_ano_dmp || 'Non renseigné'}}</td>
        <td>
          <a v-if="anoBailleur.fichier" :href="anoBailleur.fichier" class="btn btn-default" target="_blank">
                                <span class=""><i class="icon-book"></i>
                                </span>
          </a>
        </td>


        <td @click="afficherModalDecisionAnocf (anoBailleur.id)">
          <span v-if="anoBailleur.avis_bail== 0" class=" btn label label-success"> Non objection </span>
          <span v-else-if="anoBailleur.avis_bail== 1" class=" btn label label-important"> objection </span>
          <span v-else class=" btn label label-info"> En attent</span>
        </td>

        <td @click="afficheAnoDPMBailleurModale(anoBailleur.id)">
          {{formaterDate(anoBailleur.date_avis) || 'Non renseigné'}}</td>

        <div class="btn-group">
          <button @click.prevent="supprimerAnoDMPBailleur(anoBailleur.id)"  class="btn btn-danger " title="Supprimer">
            <span class=""><i class="icon-trash"></i></span>
          </button>
        </div>


      </tr>
      </tbody>
    </table>







    <div id="ajouterAnoDMPBAILLEURModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter ANO bailleur</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">

          <div class="control-group">
            <label class="control-label">PV</label>
            <div class="controls" >
              <input
                  type="text"
                  :value="pvEntraitement.reference"
                  class="span"
                  readonly
              />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Reference offre</label>
            <div class="controls">
              <!-- <select v-model="formBailleur.appel_offre_id" class="span" disabled>
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


          <!-- <div class="control-group">
             <label class="control-label">PV</label>
             <div class="controls" v-if="listePVDemandePV(macheid)">
                 <select v-model="formBailleur.proce_verbal_jugement_offre_id" class="span">
                     <option :value="listePVDemandePV(macheid).id">{{listePVDemandePV(macheid).reference}}</option>
                 </select>
             </div>
         </div> -->


          <div class="control-group">
            <label class="control-label">Numero du courrier</label>
            <div class="controls">
              <input
                  type="text"
                  v-model="formBailleur.num_courrier"
                  class="span"
                  placeholder="Saisir le numero du courrier"
              />
            </div>
          </div>

          <div class="control-group">

            <label class="control-label">Date ANO bailleur</label>
            <div class="controls">
              <input
                  type="date"
                  v-model="formBailleur.date_ano_dmp"
                  class="span"
                  placeholder="Saisir le libelle_type"
              />
              <input type="hidden" v-model="formBailleur.difference_personnel_bienService"/>
            </div>
          </div>



          <div class="control-group">
            <label class="control-label">Fichier joint:</label>
            <div class="controls">
              <input type="file" @change="OnchangeFichierDemandeAno" />
            </div>
          </div>

        </form>
      </div>
      <div class="modal-footer">
        <a
            @click.prevent="ajouterDemandeAnoLocal()"
            class="btn btn-primary"
            href="#"

        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>



    <div id="modifDemandeAno" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modification ANO bailleur</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">PV</label>
            <div class="controls" v-if="pvEntraitement">
              <input
                  type="text"
                  :value="pvEntraitement.reference"
                  class="span"
                  readonly
              />
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Reference offre</label>
            <div class="controls">
              <!-- <select v-model="edit_bailleur.appel_offre_id" class="span" disabled>
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

          <!-- <div class="control-group">
              <label class="control-label">PV</label>
              <div class="controls" v-if="edit_bailleur">
                <input :value="edit_bailleur.proce_verbal_offre.reference" readonly/>
              </div>
          </div> -->

          <div class="control-group">
            <label class="control-label">Numero du courrier</label>
            <div class="controls">
              <input
                  type="text"
                  v-model="edit_bailleur.num_courrier"
                  class="span"
                  placeholder="Saisir le numero du courrier"
              />
            </div>
          </div>

          <div class="control-group">

            <label class="control-label">Date ANO bailleur</label>
            <div class="controls">
              <input
                  type="date"
                  v-model="edit_bailleur.date_ano_dmp"
                  class="span"
                  placeholder="Saisir le libelle_type"
              />
              <input type="hidden" v-model="edit_bailleur.difference_personnel_bienService"/>
            </div>
          </div>
          <div class="control-group">
            <label class="control-label">Fichier joint:</label>
            <div class="controls">
              <input type="file" @change="OnchangeFichierDemandeAno" />
            </div>
          </div>


        </form>
      </div>
      <div class="modal-footer">
        <a
            @click.prevent="editAnoBailleur()"
            class="btn btn-primary"
            href="#"

        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>




    <div id="ajouterAnoBailleur" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter avis d'ANO bailleur</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">PV</label>
            <div class="controls" v-if="pvEntraitement">
              <input
                  type="text"
                  :value="pvEntraitement.reference"
                  class="span"
                  readonly
              />
            </div>
          </div>

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


          <div class="control-group">

            <label class="control-label">Date d'avis d'ANO bailleur</label>
            <div class="controls">
              <input
                  type="date"
                  v-model="edit_bailleur.date_avis"
                  class="span"
                  placeholder="Saisir le libelle_type"
              />
            </div>
          </div>

          <div class="control-group">
            <label class="control-label">Avis</label>
            <div class="controls">
              <select v-model="edit_bailleur.avis_bail" class="span">
                <option value="0"> Non objection</option>
                <option value="1">Objection </option>
              </select>
            </div>
          </div>

          <div class="control-group">
            <label class="control-label">Observation:</label>
            <div class="controls">
              <textarea  v-model="edit_bailleur.observations_bailleur "  class="textarea_editor span"  :readonly="verouillageObservation" rows="" placeholder="Entrer  le text ..."></textarea>
            </div>

          </div>

          <!-- <div class="control-group">
                        <label class="control-label">Motif</label>
                        <div class="controls">
                          <select v-model="edit_bailleur.plan_motif_decision_id" class="span">
                                <option v-for="varText in motifDecisions" :key="varText.id"
                                        :value="varText.id">{{varText.libelle}}</option>
                            </select>

                        </div>
                    </div> -->

          <div class="control-group">
            <label class="control-label">Motif</label>
            <div class="controls">
              <select v-model="edit_bailleur.plan_motif_decision_id" class="span">
                <option v-for="varText in AffichierElementParent(affichierIdActeFinancierDansActePlan)" :key="varText.id"
                        :value="varText.id">{{varText.libelle}}</option>
              </select>

            </div>
          </div>

        </form>
      </div>
      <div class="modal-footer">
        <a
            @click.prevent="editAnoBailleur()"
            class="btn btn-primary"
            href="#"

        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>

    <notifications/>

  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import moment from "moment";

export default {
name: "AnoBailleur",
  data(){
    return{
      formBailleur:{
        date_ano_dmp:"",
        numero_courie:"",
        // proce_verbal_jugement_offre_id:"",
        appel_offre_id:"",
        plan_motif_decision_id:"",
        difference_personnel_bienService:"bienservice"
      },

      edit_bailleur:"",
      imagePDFDemandeAno:"",
      namePDFDemandeAno:"",
      fichierPDFDemandeAno:"",
      selectedFileDemandeAno:""

    }
  },
  props:["macheid"],

  created(){


  },
  computed:{
    ...mapGetters("bienService", [ "typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
      "modePassations", "procedurePassations","getterDossierCandidats","marches",
      "motifDecisions","gettersOffreTechniques","getterLettreInvitation",
      "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
      "rapportDocuments","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
      "gettersCotations", "analyseDossiers","text_juridiques", "livrables",
      "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
    ...mapGetters('personnelUA', ['acteur_depenses']),
    ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),
    ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
      'types_financements']) ,

    ...mapGetters('parametreGenerauxFonctionnelle', ['structuresDecision',
      'plans_Decision']),

    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),

    pvTraitement(){
      return this.getterProceVerballe.find(item=>{
        if(item.marche_id==this.macheid && item.traitement==0){
          return item;
        }
      })
    },

    pvEntraitement(){
      return this.getterProceVerballe.find(item=>{
        console.log("Marche ")
        console.log(item.marche_id)
        console.log("Avies DMP ")
        console.log(item.avies_dmp)
        console.log("Traitement ")
        console.log(item.traitement)

        if(item.marche_id==this.macheid && item.traitement==1 && item.avies_dmp==0){
          console.log(item)
          return item.reference;
        }
      })
    },

    listeAnoDMPBailleur: function () {
      return macheid => {
        if (macheid != "") {
          //  console.log("Marche dmp bailleur")
          let objet=this.getterAnoDMPBailleur.filter(idmarche => idmarche.marche_id == macheid)
          //console.log("Marche dmp bailleru 7474")
          return objet
        }
      }
    },


    listeAvisDemandeAno(){
      return id =>{
        if(id!=null && id!=""){
          const resultatAvis = this.getterDemandeAno.find(idDemande =>idDemande.marche_id==id
              && idDemande.avis== 0)
          return resultatAvis
        }
        return null
      }
    },

    afficherReferencePv() {
      return id => {
        if (id != null && id != "") {
          const qtereel = this.rapportDocuments.find(qtreel => qtreel.appel_offre_id == id );

          if (qtereel) {
            return qtereel.reference;
          }
          return 0
        }
      };
    },



    affichierIdActeFinancierDansActePlan() {
      const qtereel = this.plans_Decision.find(
          qtreel => qtreel.code == "11",

      );

      if (qtereel) {
        return qtereel.id;
      }
      return 0
    },

    AffichierElementParent() {

      return id => {
        if (id != null && id != "") {
          return this.plans_Decision.filter(element => element.parent == id);
        }
      };
    },
    //  listeAppelOffre(){
    //     return  macheid=>{
    //         if (macheid!="") {
    //             //console.log("Marche appel offre")
    //            const vM=this;
    //             let Objet=this.gettersCotations.find( idmarche => idmarche.marche_id == macheid)

    //             if(Objet!=undefined){

    //                 vM.formBailleur.appel_offre_id = Objet.id;

    //             }

    //         return this.gettersCotations.filter( idmarche => idmarche.marche_id == macheid)
    //         }
    //     }
    // },


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

    //          listePVDemandePV(){
    //     return macheid=>{
    //         if(macheid!=""){
    //             return this.getterProceVerballe.find(item=>{
    //                 if(item.appel_offre.marche_id==macheid && item.avie==null ){
    //                     let vM=this;
    //                     vM.formBailleur.proce_verbal_jugement_offre_id=item.id
    //                     return item;
    //                 }
    //             });
    //         }
    //     }
    // },

    verouillageObservation(){
      return this.edit_bailleur.avis_bail == 0
    },





  },
  methods:{

    ...mapActions('bienService',['supprimerAnoDMPBailleur','ajouterAnoDMPBailleur',
      'modifierAnoDMPBailleur','getAnoDMPBailleur','getAnalyseDMP',"modificationProceVerbalOffre2"]),



    afficheAnoDPMBailleurModale(index){
      this.$('#modifDemandeAno').modal({
        backdrop: 'static',
        keyboard: false
      });
      this.edit_bailleur=this.listeAnoDMPBailleur(this.macheid)[index]
      //console.log(this.edit_bailleur)
    },



    afficherModalDecisionAnocf(index){
      this.$('#ajouterAnoBailleur').modal({
        backdrop: 'static',
        keyboard: false
      });
      this.edit_bailleur=this.getterAnoDMPBailleur.find(
          demandeAno => demandeAno.id == index
      )
      //console.log(this.edit_bailleur)
    },

    OnchangeFichierDemandeAno(e) {
      const files = e.target.files;
      this.selectedFileDemandeAno = event.target.files[0];
      console.log(this.selectedFileDemandeAno)
      Array.from(files).forEach(file => this.addFichierPDFDemandeAno(file));
    },
    addFichierPDFDemandeAno(file) {
      let reader = new FileReader();
      let vm = this;
      reader.onload = e => {
        vm.imagePDFDemandeAno = "pdf.png";
        vm.namePDFDemandeAno = file.name;
        vm.fichierPDFDemandeAno = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    ajouterDemandeAnoLocal(){

      const formData = new FormData();
      formData.append('fichier', this.selectedFileDemandeAno, this.selectedFileDemandeAno.name);
      //  formData.append('proce_verbal_jugement_offre_id', this.formBailleur.proce_verbal_jugement_offre_id);
      formData.append('date_ano_dmp', this.formBailleur.date_ano_dmp);
      formData.append('marche_id', this.macheid);
      formData.append('difference_personnel_bienService', this.formBailleur.difference_personnel_bienService);
      formData.append('appel_offre_id', this.affichierAppelOffreid(this.macheid));
      formData.append('numero_courie', this.formBailleur.numero_courie);
      formData.append('proce_verbal_jugement_offre_id', this.pvEntraitement.id);
      let config = {
        header : {
          'Content-Type' : 'multipart/form-data'
        }
      }
      console.log(formData)
      this.ajouterAnoDMPBailleur(formData,config)



      this.formBailleur={
        date_ano_dmp:"",
        appel_offre_id:"",
        numero_courie:"",

        // proce_verbal_jugement_offre_id:""
      }


    },

    editAnoBailleur(){

      //console.log(this.edit_bailleur)
      const formData = new FormData();
      // formData.append('proce_verbal_jugement_offre_id', this.edit_bailleur.proce_verbal_jugement_offre_id);
      formData.append('date_ano_dmp', this.edit_bailleur.date_ano_dmp);
      formData.append('appel_offre_id', this.affichierAppelOffreid(this.macheid));
      formData.append('numero_courie', this.edit_bailleur.numero_courie);
      formData.append('marche_id',this.macheid);
      formData.append('id', this.edit_bailleur.id);
      formData.append('difference_personnel_bienService', this.edit_bailleur.difference_personnel_bienService);
      formData.append('plan_motif_decision_id',this.edit_bailleur.plan_motif_decision_id);
      formData.append('observations_bailleur',this.edit_bailleur.	observations_bailleur)
      formData.append('date_avis',this.edit_bailleur.date_avis);
      formData.append('avis_bail',this.edit_bailleur.avis_bail);
      console.log(formData)
      if ( this.selectedFileDemandeAno!==""){
        formData.append('fichier', this.selectedFileDemandeAno, this.selectedFileDemandeAno.name);
      }
      let config = {
        header : {
          'Content-Type' : 'multipart/form-data'
        }
      }
      this.modifierAnoDMPBailleur(formData,config)


      let objet={
        id:this.pvEntraitement.id,
        avies_bailleur:this.edit_bailleur.avis_bail,
      }
      console.log()

      this.modificationProceVerbalOffre2(objet)
      this.getAnalyseDMP()
      this.getAnoDMPBailleur()
      this.$('#modifDemandeAno').modal('hide');



    },

    formaterDate(date){
      return moment(date,"YYYY-MM-DD").format("DD/MM/YYYY");
    }







  }
}
</script>

<style scoped>

</style>