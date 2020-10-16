marche_id
<template>
<div>
  <div v-for="item in lot" :key="item.id" class="widget-content">
    <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>

      <div class="span8"><h5>LOT N°{{ item.numero_lot }} / {{item.objet}}
      </h5></div>
      <div align="right">
      <!-- <div class="widget-content">
        
        <button class="btn btn-primary"  @click.prevent="afficheModaleAnoBailleur(item.id)" data-toggle="modal"  v-if="listeAvisDemandeAno(item.id)==1"  >Ajouter</button>
        <button class="btn btn-primary"  title="veillez recommencer le jugement , car l'Avis ANO DMP est Objection" disabled v-else  >Ajouter</button>
      </div> -->
       <div class="span3">
         <button @click.prevent="afficheModaleAnoBailleur(item.id)" 
       v-if="listeAvisDemandeAno(item.id)==0"
                                     class="btn btn-primary" title="Ajouter Bailleur">
           <span class=""><i class="icon-edit"></i></span> Ajouter</button>
           <button  
       title="veillez recommencer le jugement , car l'Avis ANO DMP est Objection" disabled v-else
                                     class="btn btn-primary">
           <span class=""><i class="icon-edit"></i></span> Ajouter</button>
           </div>
    </div>
      <!-- <div align="right">
        <div class="span3"><button @click.prevent="afficheModaleAnoBailleur(item.id)"
                                     class="btn btn-primary" title="Ajouter Bailleur">
           <span class=""><i class="icon-edit"></i></span> Ajouter</button></div>
      </div> -->
          
<!--      <div class="span2"><button @click.prevent="supprimerAnalyseDossierMultiple(item.id)"  class="btn btn-danger " title="Supprimer">-->
<!--        <span class=""><i class="icon-trash"></i></span></button></div>-->
    </div>

    <table class="table table-bordered table-striped" v-if="macheid">
      <thead>
        <tr>
        <th>Numéro courrier</th>
        <th>Date ANO bailleur</th>
        <th>Fichier</th>
        <th>Avis</th>
        <th>Observation</th>
        <th>Date de l'avis</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
     <tr class="odd gradeX" v-for="anoBailleur in listeAnoDMPBailleur(item.id)"
          :key="anoBailleur.id" >
        <td @click="afficheAnoDPMBailleurModale(anoBailleur.id)">
          {{anoBailleur.numero_courie || 'Non renseigné'}}</td>
        <td @click="afficheAnoDPMBailleurModale(anoBailleur.id)">
          {{formaterDate(anoBailleur.date_ano_dmp) || 'Non renseigné'}}</td>
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
          {{LibelleDecision(anoBailleur.plan_motif_decision_id) || 'Non renseigné'}}</td>
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
  </div>

  <!--Integration ACt-->

  <div id="ajouterAvisBailleur" class="modal hide grdirModalActeEffet" >
    <div class="modal-header">
      <button data-dismiss="modal" class="close" type="button">×</button>
      <h3>Information du Bailleur sur le : Lot N° {{infoLot.numero_lot}} {{infoLot.objet}}</h3>
    </div>

    <div class="widget-title">
      <ul class="nav nav-tabs">
        <li class="active"><a data-toggle="tab" href="#tab8888">Information Sur Ano Bailleur</a></li>
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

  <div id="ajouterAnoBailleur" class="modal hide">
    <div class="modal-header">
      <button data-dismiss="modal" class="close" type="button">×</button>
      <h3>Ajouter avis d'ANO bailleur{{edit_bailleur.marche_id}}</h3>
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
          <label class="control-label">Reference pv{{affichierIdMarcheGlobal(edit_bailleur.marche_id)}}</label>
          <div class="controls" >
            <input
                type="text"
                :value="affichierPvMarche(affichierIdMarcheGlobal(edit_bailleur.marche_id))"
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
             </td>
             <td>
                 <div class="control-group">
            <label class="control-label">Avis</label>
            <div class="controls">
              <select v-model="edit_bailleur.avis_bail" class="span">
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
          <label class="control-label" v-if="edit_bailleur.avis_bail==1">Motif</label>
          <div class="controls">
            <select v-model="edit_bailleur.DecisionNiveau1" class="span" v-if="edit_bailleur.avis_bail==1">
             <option></option>
             <option v-for="varText in lesPlansParents" :key="varText.id"
              :value="varText.id">{{varText.libelle}}</option>
            </select>
            <select v-model="edit_bailleur.DecisionNiveau2" class="span" :readOnly="verroNiveau5" v-if="edit_bailleur.avis_bail==1">
            <option></option>
             <option v-for="varText in affichierNiveauDecission(edit_bailleur.DecisionNiveau1)" :key="varText.id"
              :value="varText.id">{{varText.libelle}}</option>
            </select>
            <select v-model="edit_bailleur.DecisionNiveau3" class="span" :readOnly="verroNiveau6" v-if="edit_bailleur.avis_bail==1">
            <option></option>
             <option v-for="varText in affichierNiveauDecission(edit_bailleur.DecisionNiveau2)" :key="varText.id"
              :value="varText.id">{{varText.libelle}}</option>
            </select>
             <select v-model="edit_bailleur.avis_bail" class="span" :readOnly="verroNiveau7" v-if="edit_bailleur.avis_bail==1">
             <option></option>
             <option v-for="varText in affichierNiveauDecission(edit_bailleur.DecisionNiveau3)" :key="varText.id"
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
          @click.prevent="editAnoBailleur()"
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
      formBailleur:{
        date_ano_dmp:"",
        numero_courie:"",
        
        appel_offre_id:"",
        plan_motif_decision_id:"",
        difference_personnel_bienService:"bienservice"
      },

      edit_bailleur:"",
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
     
LibelleDecision() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_Decision.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
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
//  listeAvisDemandeAno(){
//       return id =>{
//         if(id!=null && id!=""){
//           const resultatAvis = this.getterDemandeAno.filter(idDemande =>idDemande.marche_id==id
//               && idDemande.avis!= 0)
//           return resultatAvis
//         }
//         return null
//       }
//     },

listeAvisDemandeAno() {
      return id => {
        if (id != null && id != "") {
          const qtereel = this.getterDemandeAno.find(qtreel => qtreel.marche_id == id);

          if (qtereel) {
            return qtereel.avis;
          }
          return 10
        }
      };
    },

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




verroNiveau5(){
  return this.edit_bailleur.DecisionNiveau1 == ""
  
     
   },
verroNiveau6(){
     return this.edit_bailleur.DecisionNiveau2 == ""
   },
verroNiveau7(){
     return this.edit_bailleur.DecisionNiveau3 == ""
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
// affichieridMarcheGlobal() {
//       return id => {
//         if (id != null && id != "") {
//           const qtereel = this.marches.find(qtreel => qtreel.id == id);

//           if (qtereel) {
//             return qtereel.parent_id;
//           }
//           return 0
//         }
//       };
//     },
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
   ...mapActions('bienService',['supprimerAnoDMPBailleur','ajouterAnoDMPBailleur',
      'modifierAnoDMPBailleur','getAnoDMPBailleur','getAnalyseDMP',"modificationProceVerbalOffre2"]),




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
      formData.append('marche_id', this.infoLot.id);
      formData.append('difference_personnel_bienService', this.formBailleur.difference_personnel_bienService);
      formData.append('appel_offre_id', this.affichierAppelOffreid(this.macheid));
      formData.append('numero_courie', this.formBailleur.numero_courie);
      formData.append('proce_verbal_jugement_offre_id', this.affichierProceVerbalJugementOffre(this.affichierPvMarche(this.affichierIdMarcheGlobal(this.infoLot.id))));
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
      formData.append('marche_id',this.edit_bailleur.marche_id);
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

    afficheModaleAnoBailleur(index){
      this.$('#ajouterAvisBailleur').modal({
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