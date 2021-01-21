<template>
<div>

  <div align="right">
    <div class="widget-content">
      <a href="#ajouterPvBienservice" data-toggle="modal" class="btn btn-primary">Joindre Document</a>
    </div>
  </div>
  <table class="table table-bordered table-striped"  v-if="macheid">
    <thead>
    <tr>
      <th>Réference PV</th>
      <th>Date PV jugement</th>
      <th>Fichier</th>
      <th>Action</th>
    </tr>
    </thead>

    <tbody>
    <tr class="odd gradeX" v-for="(rapport,index) in listePV(macheid)"
        :key="rapport.id">

      <td @click="afficherModalRapportJugement(index)">
        {{rapport.reference|| 'Non renseigné'}}</td>

      <td @click="afficherModalRapportJugement(index)">
        {{formaterDate(rapport.date_rapport_jugement)|| 'Non renseigné'}}</td>

      <td @click="afficherModalRapportJugement(index)">
        <a v-if="rapport.fichier" :href="rapport.fichier" class="btn btn-default" target="_blank">
                                <span class=""><i class="icon-book"></i>
                                </span>
        </a>
      </td>
      <div class="btn-group">
        <td>
          <button href="#infoPV" @click.prevent="infoPVAffiche(rapport.reference)" data-toggle="modal" class="btn btn-info">
            <span title="voir la liste des classements des candidats"><i class="icon-pencil" ></i></span></button>
        </td>
        <td>
          <button @click.prevent="supprimerProceVerbal(rapport.id)"  class="btn btn-danger " title="Supprimer">
            <span class=""><i class="icon-trash"></i>Supprimer</span></button>
        </td>

      </div>



    </tr>
    </tbody>
  </table>


  <!--Ajouter PV Jugement-->
  <div id="ajouterPvBienservice" style="width: 1000px !important; left: 550px; " class="modal hide grdtaill">
    <div class="modal-header">
      <button data-dismiss="modal" class="close" type="button">×</button>
      <h3>Ajouter rapport d'ouverture</h3>
    </div>
    <div class="modal-body">
      <form class="form-horizontal">
        <div class="control-group">
          <label class="control-label">Date du rapport de jugement</label>
          <div class="controls">
            <input
                type="date"
                v-model="formJugement.date_rapport_jugement"
                class="span"

            />
            <input type="hidden" v-model="formJugement.difference_personnel_bienService"/>
          </div>
        </div>

        <div class="control-group">
          <label class="control-label">Fichier joint:</label>
          <div class="controls">
            <input type="file"  class="span" @change="OnchangeFichier" />
          </div>
        </div>


      </form>
    </div>
    <div class="modal-footer">
      <a class="btn btn-primary" @click.prevent="ajouterRapportJugementLocal()">Ajouter</a>
      <a data-dismiss="modal" class="btn btn-inverse" href="#">Cancel</a>
    </div>
  </div>

  <div id="infoPV" class="modal hide grdirModalActeEffet" style="width: 1000px !important; left: 550px; ">
    <div class="modal-header">
      <button data-dismiss="modal" class="close" type="button">×</button>
      <h3>PROCES-VERBAL DE JUGEMENT DES OFFRES</h3>
    </div>
    <div class="modal-body" v-if="resultaAnalysePv">
      <h4 class="text-center">ATTRIBUTION DU MARCHE</h4>
      <div>
        Suivant les résultats de l’évaluation des offres présentés par le rapporteur dans le
        tableau ci-dessus, il apparaît que le soumissionnaire <b v-if="resultaAnalysePv.length>0"></b> propose
        l’offre conforme la moins-disante.
      </div>
      <h4 class="text-center">TABLEAU RECAPITULATIF DE LA COMPARAISON DES OFFRES PAS LOT</h4>
      <div v-for="item in lot" :key="item.id" class="widget-content">
        <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>

          <div class="span9"><h5>LOT N°{{ item.numero_lot }} / {{item.objet}}
          </h5></div>
          <!--    <div class="span1"><button @click.prevent="afficheAnnalyseDossier(item.id)"  class="btn btn-warning " title="Supprimer">-->
          <!--      <span class=""><i class="icon-edit"></i></span></button></div>-->

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


    </div>
    <div class="modal-footer">

      <a data-dismiss="modal" class="btn" href="#">Fermer</a>
    </div>
  </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import moment from "moment";
import {formatageSomme} from "@/Repositories/Repository";

export default {
name: "PvJugement",
  data(){
    return{
      lot:"",
      note_analyse:"",
      reference_pv:"",
      difference_personnel_bienService:"",
      dossier_candidat_id:"",
      formJugement:{
        date_rapport_jugement:"",
        attribue:"1",
        appel_offre_id:"",
        fichier:"",
        difference_personnel_bienService:"bienservice",
        marche_id:"",
        candidat_selection_id:""

      },
      reference:"",
      editRapport:{
        date_rapport_jugement:"",
        attribue:"1",
        appel_offre_id:"",
        fichier:"",
        difference_personnel_bienService:"bienservice",
        marche_id:"",
        candidat_selection_id:""
      },
      resultaAnalysePv:[],
      imagePDF:"",
      namePDF:"",
      fichierPDF:"",
      selectedFile:"",

      search: "",
      nom_candidat:""
    }
  },

  props:["macheid"],

  created(){
    this.lot=this.getMarchePersonnaliser.filter(item=>item.parent_id==this.macheid)
  },
  computed: {

    ...mapGetters("bienService", [ "getMarchePersonnaliser","gettersCotationPersonnaliser" ,"appelOffres",
      "gettersPersonnaliserRapportJugement","getterAnalyseDossiers","getterDossierCandidats","getterOffreFinanciers",
      "gettersCotations","rapportDocuments", 'listeJugementPersonnel','selectionner_candidats', "getterProceVerballe"]),

    ...mapGetters('personnelUA', ['acteur_depenses','dossierPersonnels']),


    ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),
    // ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
    //     'types_financements']) ,

    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
    analyseByLot(){
      return id=>{
        return this.getterAnalyseDossiers.filter(item=>item.marche_id==id)
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
//  listeRapport() {
//       return macheid => {
//         if (macheid != null && macheid != "") {
//           return this.rapportDocuments.filter(element => element.marche_id == macheid && element.date_rapport_ouverture==null);
//         }
//       };
//     },




    listePV(){
      return macheid=>{
        if(macheid!=""){
          let objet=this.getterProceVerballe.filter(item=>item.marche_id==macheid);
          // console.log("PV est en cour10")
          return objet
        }
      }
    },

//  afficherCandidatSelectionnerAtrribue() {
//       return id => {
//         if (id != null && id != "") {
//            const qtereel = this.getterAnalyseDossiers.find(qtreel => qtreel.id == id);

//       if (qtereel) {
//         return qtereel.attribue;
//       }
//       return 0
//         }
//       };
//     },



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

// afficher nom du candida

    afficherNomCandidat(){
      return id =>{
        if(id!=null && id!=""){
          const nomCandidat= this.getterDossierCandidats.find(item =>item.id==id)
          if(nomCandidat){
            return nomCandidat.nom_cand
          }
        }
      }
    },



    afficherNomCandidatId(){
      return id =>{
        if(id!=null && id!=""){
          const nomCandidat= this.getterDossierCandidats.filter(item =>item.marche_id==id)
          if(nomCandidat){
            return nomCandidat.id
          }
        }
      }
    },



// afficher ID du candidat selectionner

// affichierCandidatSelectionId() {
//       return id => {
//         if (id != null && id != "") {
//            const objetPourRecureperId = this.selectionner_candidats.find(objetPourRecureperId => objetPourRecureperId.marche_id == id);

//       if (objetPourRecureperId) {
//         return objetPourRecureperId.id;
//       }
//       return 0
//         }
//       };
//     },


// afficher ID de avis de re rutement

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
    // afficher le nom des candidats

    // afficherNomCandidat(){
    //     return id =>{
    //         if(id!=null && id!=""){
    //             let obejtNom = this.dossierPersonnels.find(obejtNom => obejtNom.id == id)
    //             if(obejtNom){
    //                 return obejtNom.nom_candidat.concat(' ', obejtNom.prenom_candidat)
    //             }
    //             return 0
    //         }
    //     }
    // }




  },
  methods:{
    ...mapActions('bienService',['supprimerProceVerbal',
      'ajouterProceVerbal','modificationProceVerbalOffre',"getProceVerbal"]),


    OnchangeFichier(e) {
      const files = e.target.files;
      this.selectedFile = event.target.files[0];

      Array.from(files).forEach(file => this.addFichierPDF(file));
    },
    addFichierPDF(file) {
      let reader = new FileReader();
      let vm = this;
      reader.onload = e => {
        vm.imagePDF = "pdf.png";
        vm.namePDF = file.name;
        vm.fichierPDF = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    afficherModalRapportJugement(index){
      this.$('#modifierRapportJugements').modal({
        backdrop: 'static',
        keyboard: false
      });
      this.editRapport = this.listePV(this.macheid)[index];
    },

    ajouterRapportJugementLocal(){


      const formData = new FormData();
      formData.append('fichier', this.selectedFile, this.selectedFile.name);
      formData.append('date_rapport_jugement', this.formJugement.date_rapport_jugement);
      formData.append('marche_id', this.macheid);
      //formData.append('attribue', this.formJugement.attribue);
      formData.append('appel_offre_id', this.affichierAppelOffreid(this.macheid));
      //formData.append('candidat_selection_id', this.affichierCandidatSelectionId(this.macheid));
      //formData.append('difference_personnel_bienService',this.formJugement.difference_personnel_bienService)
      let config = {
        header : {
          'Content-Type' : 'multipart/form-data'
        }
      }
      this.ajouterProceVerbal(formData, config)
      this.getProceVerbal()
      this.formJugement ={
        // difference_personnel_bienService:"",
        date_rapport_jugement:""
      }


    },


    modifierRapportOuverture(){

      const formData = new FormData();
      formData.append('date_rapport_jugement', this.editRapport.date_rapport_jugement);
      formData.append('marche_id', this.macheid);
      formData.append('appel_offre_id', this.affichierAppelOffreid(this.macheid));
      // formData.append('attribue',this.editRapport.attribue);
      //formData.append('candidat_selection_id', this.affichierCandidatSelectionId(this.macheid));
      //formData.append('difference_personnel_bienService', this.difference_personnel_bienService)
      formData.append('id', this.editRapport.id);

      console.log(formData)
      if ( this.selectedFile!==""){
        formData.append('fichier', this.selectedFile, this.selectedFile.name);
      }
      let config = {
        header : {
          'Content-Type' : 'multipart/form-data'
        }
      }

      this.modificationProceVerbalOffre(formData,config)
      // this.getRapportJugement()
      this.$('#modifierRapportJugements').modal('hide');


    },
    formaterDate(date){
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },

    // formatage sommme

    formatageSomme:formatageSomme,




    infoPVAffiche(ref){
      this.resultaAnalysePv=[]
      let resulta=this.getterAnalyseDossiers.filter(item=>item.reference_pv==ref);
      this.resultaAnalysePv=this.resultaAnalysePv.concat(resulta)
      if (this.resultaAnalysePv.length>0){
        this.resultaAnalysePv.sort(function (a, b) {
          return a.note_analyse - b.note_analyse;
        }).reverse()
      }
      //console.log(this.resultaAnalysePv)
    },

  }
}
</script>

<style scoped>

</style>