affichierAppelOffreid
<template>
<div>
  <div v-for="item in lot" :key="item.id" class="widget-content">
    <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>

      <div class="span8"><h5>LOT N°{{ item.numero_lot }} / {{item.objet}}
      </h5></div>
      <div align="right">
        <div class="span3"><button @click.prevent="afficheModaleActe(item.id)"
                                     class="btn btn-primary" title="Ajouter Bailleur">
           <span class=""><i class="icon-edit"></i></span> Ajouter</button></div>
      </div>
          
<!--      <div class="span2"><button @click.prevent="supprimerAnalyseDossierMultiple(item.id)"  class="btn btn-danger " title="Supprimer">-->
<!--        <span class=""><i class="icon-trash"></i></span></button></div>-->
    </div>

    <table class="table table-bordered table-striped" v-if="macheid">
      <thead>
       <tr>
      <th>Numéro courrier</th>
      <th>Date demande</th>
      <th>Fichier</th>
      <th>Avis</th>
      <th>Date de l'avis</th>
      <th>Action</th>
    </tr>
      </thead>
      <tbody>
      <tr class="odd gradeX" v-for="demande in demandeAno(item.id)"
        :key="demande.id" >
      <td @click="afficheDemandeDAO(demande.id)">
        {{demande.num_courrier || 'Non renseigné'}}</td>
     
      <td @click="afficheDemandeDAO(demande.id)">
        {{formaterDate(demande.date_demande) || 'Non renseigné'}}</td>

      <td>
        <a v-if="demande.fichier" :href="demande.fichier" class="btn btn-default" target="_blank">
                                <span class=""><i class="icon-book"></i>
                                </span>
        </a>
      </td>


      <td @click="afficherModalDecisionAnocf (demande.id)">
        <span v-if="demande.avis== 0" class=" btn label label-success"> Non objection </span>
        <span v-else-if="demande.avis== 1" class=" btn label label-important"> objection </span>
        <span v-else class=" btn label label-info"> En attent</span>
      </td>

      <td @click="afficheDemandeDAO(demande.id)">
        {{formaterDate(demande.date_avis) || 'Non renseigné'}}</td>

      <div class="btn-group">
        <button @click.prevent="supprimerDemandeAno(demande.id)"  class="btn btn-danger " title="Supprimer">
          <span class=""><i class="icon-trash"></i></span>
        </button>
      </div>


    </tr>
      </tbody>
    </table>
  </div>

  <!--Integration ACt-->

  <div id="ajouterAvisDmp" class="modal hide grdirModalActeEffet" >
    <div class="modal-header">
      <button data-dismiss="modal" class="close" type="button">×</button>
      <h3>Information du Bailleur sur le : Lot N° {{infoLot.numero_lot}} {{infoLot.objet}}</h3>
    </div>

    <div class="widget-title">
      <ul class="nav nav-tabs">
        <li class="active"><a data-toggle="tab" href="#tab8888">Information Sur Ano DMP</a></li>
        <!-- <li class=""><a data-toggle="tab" href="#tab00050">Informations financières</a></li> -->
      </ul>
    </div>
    <div class="widget-content tab-content">

      <div id="tab8888" class="tab-pane active">
<form class="form-horizontal">
        <div class="control-group">
          <label class="control-label">Reference</label>
          <div class="controls">
            <input
                type="text"
                :value="affichierPvMarche(affichierIdMarcheGlobal(infoLot.id))"
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
          <label class="control-label">Numero du courrier</label>
          <div class="controls">
            <input
                type="text"
                v-model="formDemande.num_courrier"
                class="span"
                placeholder="Saisir le numero du courrier"
            />
          </div>
        </div>

        <div class="control-group">

          <label class="control-label">Date de demande</label>
          <div class="controls">
            <input
                type="date"
                v-model="formDemande.date_demande"
                class="span"
                placeholder="Saisir le libelle_type"
            />
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

    </div>

    <div class="modal-footer">
      <a
          @click.prevent="ajouterDemandeAnoLocal()"
          class="btn btn-primary"
          href="#"
         v-if="pvTraitement"
      >Valider</a>
      <a
          @click.prevent="ajouterDemandeAnoLocal()"
          class="btn btn-primary"
          href="#"
          v-if="!pvTraitement" disabled
      >Valider</a>
      <a data-dismiss="modal" class="btn" href="#">Fermer</a>
    </div>
  </div>




  <div id="ModalModification" class="modal hide grdirModalActeEffet" >
    <div class="modal-header">
      <button data-dismiss="modal" class="close" type="button">×</button>
      <h3>Information du Bailleur sur le : Lot N° {{infoLot.numero_lot}} {{infoLot.objet}}</h3>
    </div>

    <div class="widget-title">
      <ul class="nav nav-tabs">
        <li class="active"><a data-toggle="tab" href="#tab8888">Information du Bailleur</a></li>
        <!-- <li class=""><a data-toggle="tab" href="#tab00050">Informations financières</a></li> -->
      </ul>
    </div>
    <div class="widget-content tab-content">

      <div id="tab8888" class="tab-pane active">

        
      </div>



    </div>

    <div class="modal-footer">
      <a  @click.prevent="ajouterBailleur"
          class="btn btn-primary"
          href="#"
      >Valider</a>
      <a data-dismiss="modal" class="btn" href="#">Fermer</a>
    </div>
  </div>

  <div id="ajouterDecisionAvisCf" class="modal hide">
    <div class="modal-header">
      <button data-dismiss="modal" class="close" type="button">×</button>
      <h3>Ajouter avis d'ANO DMP sur Le DAO</h3>
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
          <label class="control-label">Reference pv</label>
          <div class="controls" >
            <input
                type="text"
                :value="affichierPvMarche(affichierIdMarcheGlobal(edite_demande_dao.marche_id))"
                class="span"
                readonly
            />
          </div>
        </div>
             </td>
           </tr>
           <tr>
             <td>
               <div class="control-group">

          <label class="control-label">Date d'avis d'ANO</label>
          <div class="controls">
            <input
                type="date"
                v-model="edite_demande_dao.date_avis"
                class="span"
                placeholder="Saisir le libelle_type"
            />
          </div>
        </div>
             </td>
             <td>
                <div class="control-group">
          <label class="control-label">Avis</label>
          <div class="controls">
            <select v-model="edite_demande_dao.avis" class="span">
              <option value="0"> Non objection</option>
              <option value="1">Objection </option>
            </select>
          </div>
        </div>
             </td>
           </tr>
           <tr >
             <td colspan="2" >
<div class="control-group">
          <label class="control-label" v-if="edite_demande_dao.avis==1">Motif</label>
          <div class="controls">
            <select v-model="edite_demande_dao.DecisionNiveau1" class="span" v-if="edite_demande_dao.avis==1">
             <option></option>
             <option v-for="varText in lesPlansParents" :key="varText.id"
              :value="varText.id">{{varText.libelle}}</option>
            </select>
            <select v-model="edite_demande_dao.DecisionNiveau2" class="span" :readOnly="verroNiveau2" v-if="edite_demande_dao.avis==1">
            <option></option>
             <option v-for="varText in affichierNiveauDecission(edite_demande_dao.DecisionNiveau1)" :key="varText.id"
              :value="varText.id">{{varText.libelle}}</option>
            </select>
            <select v-model="edite_demande_dao.DecisionNiveau3" class="span" :readOnly="verroNiveau3" v-if="edite_demande_dao.avis==1">
            <option></option>
             <option v-for="varText in affichierNiveauDecission(edite_demande_dao.DecisionNiveau2)" :key="varText.id"
              :value="varText.id">{{varText.libelle}}</option>
            </select>
             <select v-model="edite_demande_dao.plan_motif_decision_id" class="span" :readOnly="verroNiveau4" v-if="edite_demande_dao.avis==1">
             <option></option>
             <option v-for="varText in affichierNiveauDecission(edite_demande_dao.DecisionNiveau3)" :key="varText.id"
              :value="varText.id">{{varText.libelle}}</option>
            </select>
          </div>
        </div>
             </td>
           </tr>
         </table>
    </div>
    <div class="modal-footer">
      <a
          @click.prevent="editDemandeDAO()"
          class="btn btn-primary"
          href="#"

      >Valider</a>
      <a data-dismiss="modal" class="btn" href="#">Fermer</a>
    </div>
  </div>
  <notifications  />
  <!---->
</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {formatageSommeSansFCFA} from "@/Repositories/Repository";
import moment from "moment";
export default {
name: "ActEffeFinanciere",
  props:["macheid"],
  data(){
    return{
      pvencoure:"",
      formDemande:{
        date_demande:"",
        num_courrier:"",
        proce_verbal_jugement_offre_id:"",
        appel_offre_id:""
      },

      edite_demande_dao:"",
      imagePDFDemandeAno:"",
      namePDFDemandeAno:"",
      fichierPDFDemandeAno:"",
      selectedFileDemandeAno:"",
      reference_pv:"",
      lot:"",
     
      
      nom_candidata:"",
      dossier_candidat_id:"",
     marche_lot:"",
      infoLot:""
    }
  },
  created(){
    this.lot=this.getMarchePersonnaliser.filter(item=>item.parent_id==this.macheid)


  },
  computed:{
    ...mapGetters("bienService", [ "typeMarches","gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
      "modePassations", "procedurePassations","getterDossierCandidats","marches",
      "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
      "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
      "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
      "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables",
      "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
    ...mapGetters('personnelUA', ['acteur_depenses']),


    ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises','banques','comptes','getCompte']),
    ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
      'types_financements']) ,

    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
    ...mapGetters('parametreGenerauxFonctionnelle', ['structureActe','planActe',"plans_Decision"]),
     


affichierProceVerbalJugementOffre() {
      return id => {
        if (id != null && id != "") {
          const qtereel = this.getterProceVerballe.find(qtreel => qtreel.reference == id);

          if (qtereel) {
            return qtereel.id;
          }
          return 0
        }
      };
    },




verroNiveau2(){
  return this.edite_demande_dao.DecisionNiveau1 == ""
  
     
   },
verroNiveau3(){
     return this.edite_demande_dao.DecisionNiveau2 == ""
   },
verroNiveau4(){
     return this.edite_demande_dao.DecisionNiveau3 == ""
   },


lesPlansParents(){
     return this.plans_Decision.filter(plan => plan.parent == null)
   },

affichierNiveauDecission() {
      return id => {
        if (id != null && id != "") {
           return this.plans_Decision.filter(qtreel => qtreel.parent == id);
        }
      };
    },



    pvEntraitement(){
      return this.getterProceVerballe.find(item=>{
        if(item.marche_id==this.item.id && item.traitement==1){
          return item;
        }
      })
    },
affichierPvMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterProceVerballe.find(qtreel => qtreel.marche_id == id && qtreel.traitement==1);

      if (qtereel) {
        return qtereel.reference;
      }
      return 0
        }
      };
    },
    affichierIdMarcheGlobal() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.parent_id;
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
affichieridMarcheGlobal() {
      return id => {
        if (id != null && id != "") {
          const qtereel = this.marches.find(qtreel => qtreel.id == id);

          if (qtereel) {
            return qtereel.parent_id;
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
    affichierObjetMarche(){
      return id =>{
        if(id!=null && id!=""){
          let objetMarche = this.marches.find(idMarche => idMarche.id ==id);
          if(objetMarche){
            return objetMarche.objet
          }
          return 0
        }
      }
    },


    getDateFinExécutionValueEdit(){
      return !this.editBailleur.date_odre_service !=""
    },


    
demandeAno: function () {
      return macheid => {
        if (macheid != "") {
          let obje=this.getterDemandeAno.filter(idmarche => idmarche.marche_id == macheid)
          return obje
        }
      }
    },
analyseByLot(){
      return id=>{
        return this.getterAnalyseDossiers.filter(item=>{
          if (item.marche_id==id && item.rang_analyse==1)
             return item
        })
      }
    },

afficherNumeroDossierCandidat1() {
      return id => {
        if (id != null && id != "") {
          const qtereel = this.getterDossierCandidats.find(qtreel => qtreel.id == id);

          if (qtereel) {
            return qtereel.nom_cand;
          }
          return null
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
pvTraitement(){
     return this.getterProceVerballe.find(item=>{
       if(item.marche_id==this.macheid && item.traitement==0){
         return item;
       }
     })
},
  },

  methods:{
    ...mapActions('bienService',['supprimerDemandeAno','ajouterDemandeAno',
      'modifierDemandeAno','getAnoDMPBailleur','getAnalyseDMP',"modificationProceVerbalOffre2"]),

afficheDemandeDAO(index){
      this.$('#modifDemandeAno').modal({
        backdrop: 'static',
        keyboard: false
      });
      this.edite_demande_dao=this.getterDemandeAno.find(
          demandeAno => demandeAno.id == index
      )
      //console.log(this.edite_demande_dao)
    },



    // afficherModalDecisionAnocf(index){
    //   this.$('#ajouterDecisionAvisCf').modal({
    //     backdrop: 'static',
    //     keyboard: false
    //   });
    //   this.edite_demande_dao=this.getterDemandeAno.find(
    //       demandeAno => demandeAno.id == index
    //   )
    //   //console.log(this.edite_demande_dao)
    // },

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
     // formData.append('proce_verbal_jugement_offre_id', this.formDemande.proce_verbal_jugement_offre_id);
      formData.append('date_demande', this.formDemande.date_demande);
      formData.append('marche_id', this.infoLot.id);
      formData.append('appel_offre_id', this.affichierAppelOffreid(this.macheid));
      formData.append('num_courrier', this.formDemande.num_courrier);
      formData.append('proce_verbal_jugement_offre_id', this.affichierProceVerbalJugementOffre(this.affichierPvMarche(this.affichierIdMarcheGlobal(this.infoLot.id))));

      let config = {
        header : {
          'Content-Type' : 'multipart/form-data'
        }
      }
    //  console.log(formData)
      this.ajouterDemandeAno(formData,config)

      let objet={
        id:this.pvencoure.id,
        traitement:1,
      }

      this.modificationProceVerbalOffre2(objet)
      this.formDemande={
        date_demande:"",
        appel_offre_id:"",
        num_courrier:"",
      }
    },

    editDemandeDAO(){
      //console.log(this.edite_demande_dao)
      const formData = new FormData();
      // formData.append('proce_verbal_jugement_offre_id', this.edite_demande_dao.proce_verbal_jugement_offre_id);
      formData.append('date_demande', this.edite_demande_dao.date_demande);
      formData.append('appel_offre_id', this.affichierAppelOffreid(this.macheid));
      formData.append('num_courrier', this.edite_demande_dao.num_courrier);
      formData.append('marche_id',this.edite_demande_dao.marche_id );
      formData.append('id', this.edite_demande_dao.id);
      formData.append('plan_motif_decision_id',this.edite_demande_dao.plan_motif_decision_id);
      formData.append('observations',this.edite_demande_dao.observations)
      formData.append('date_avis',this.edite_demande_dao.date_avis);
      formData.append('avis',this.edite_demande_dao.avis);
      console.log(formData)
      if ( this.selectedFileDemandeAno!==""){
        formData.append('fichier', this.selectedFileDemandeAno, this.selectedFileDemandeAno.name);
      }
      let config = {
        header : {
          'Content-Type' : 'multipart/form-data'
        }
      }
      this.modifierDemandeAno(formData,config)

      let objet={
        id:this.edite_demande_dao.proce_verbal_jugement_offre_id,
        avies_dmp:this.edite_demande_dao.avis,
      }

      this.modificationProceVerbalOffre2(objet)

      this.getAnalyseDMP()
      this.getAnoDMPBailleur()
      this.$('#modifDemandeAno').modal('hide');
    },
afficherModalDecisionAnocf(index){
      this.$('#ajouterDecisionAvisCf').modal({
        backdrop: 'static',
        keyboard: false
      });
      this.edite_demande_dao=this.getterDemandeAno.find(
          demandeAno => demandeAno.id == index
      )
      //console.log(this.edite_demande_dao)
    },

    afficheModaleActe(index){
      this.$('#ajouterAvisDmp').modal({
        backdrop: 'static',
        keyboard: false
      });
        if ( this.analyseByLot(index).length>0){
          this.nom_candidata=this.afficherNumeroDossierCandidat1(this.analyseByLot(index)[0].dossier_candidat_id),
              this.dossier_candidat_id=this.analyseByLot(index)[0].dossier_candidat_id
        }
    this.marche_lot=index
      this.infoLot=this.getMarchePersonnaliser.find(item=>item.id==index)
      //  this.edite_analyse_dossier = this.listeAnalyseDossier(this.macheid)[index];
    },
formaterDate(date){
      return moment(date,"YYYY-MM-DD").format("DD/MM/YYYY");
    },
    formatageSommeSansFCFA:formatageSommeSansFCFA,

  }
}
</script>

<style scoped>

.grdirModalActeEffet{
  width: 50%;
  margin: 0 -30%;
}

</style>