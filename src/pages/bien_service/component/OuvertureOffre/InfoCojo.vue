<template>
  <div>
    <div align="right">

      <a href="#ajouterCojoB" data-toggle="modal" class="btn btn-primary">Ajouter</a>
    </div>

    <table class="table table-bordered table-striped" v-if="macheid">
      <thead>
      <tr>
        <!-- <th>Entreprise</th> -->
        <th>Date Composition </th>
        <th>Date effective d'ouverture</th>
        <th>Nombre de participants</th>
        <th>Action</th>
      </tr>

      </thead>
      <tbody>
      <tr class="odd gradeX" v-for="(appelOffre, index) in listeCojo(macheid)"
          :key="appelOffre.id">

        <!-- <td @click="afficheBouttonTechCojo(index)">
      {{affichierNomEntreprise(appelOffre.entreprise_id) || 'Non renseigné'}}</td> -->

        <td @click="afficheBouttonTechCojo(index)">
          {{formaterDate(appelOffre.date_composition) || 'Non renseigné'}}
        </td>
        <td @click="afficheBouttonTechCojo(index)">
          {{formaterDate(appelOffre.date_ouverture) || 'Non renseigné'}}</td>

        <td @click="afficheBouttonTechCojo(index)">
          {{appelOffre.nbr_participant || 'Non renseigné'}}</td>

        <!-- <td @click="afficheBouttonTechCojo(index)">
            {{appelOffre.cotation.ref_offre || 'Non renseigné'}}</td> -->
        <div class="btn-group">
          <button @click.prevent="supprimerCojo(appelOffre.id)"  class="btn btn-danger " title="Supprimer">
            <span class=""><i class="icon-trash"></i></span></button>

        </div>

      </tr>
      </tbody>
    </table>

<hr>
    <StructureDAO :macheid="macheid"></StructureDAO>

    <!-- add formulaire cojo -->
    <div id="ajouterCojoB" class="modal hide grdirModalActeEffet">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter COJO</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
          <table class="table">
            <tbody>
            <tr>
            <td>
              <div>
                <label>Référence DAO</label>
                <div>
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

                <div>
                  <label>Date éffective d'ouverture</label>
                  <div>
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
                <div>
                  <label>Date de composition</label>
                  <div>
                    <input
                            type="date"
                            v-model="formDataCojo.date_composition"
                            class="span"

                    />
                  </div>
                </div>
              </td>
              <td>

                <div>
                  <label>Nombre de participants</label>
                  <div>
                    <input
                            type="text"
                            v-model="formDataCojo.nbr_participant"
                            class="span"
                    />
                    <input type="hidden" v-model="formDataCojo.difference_personnel_bienService"/>
                  </div>
                </div>
              </td>
            </tr>

            </tbody>
          </table>


          <div>
            <table class="table">

              <tbody>
              <tr>
                <td>
                  <label>UA</label>
                  <model-list-select style="background-color: #fff;"
                                     class="wide"
                                     :list="filtre_unite_admin"
                                     v-model="nom_structure"
                                     option-value="id"
                                     option-text="libelle"
                                     placeholder="Unité administrative"
                  >

                  </model-list-select>

                </td>

                <td>
                  <hr>
                  <button class="btn btn-danger" @click.prevent="addStructure()">
                  Ajouter
                </button>
                </td>
              </tr>
              <tr class="odd gradeX" v-for="appelOffre in structure"
                  :key="appelOffre">

                <td>
                  {{appelOffre.libelle || 'Non renseigné'}}
                </td>
                <div class="btn-group">
                  <button class="btn btn-link" title="Supprimer" @click.prevent="supprimeStructureSelectionner(appelOffre.id)">
                    <span class=""><i class="icon-trash"></i></span>
                  </button>

                </div>

              </tr>
              </tbody>
            </table>
          </div>

        </form>



      </div>
      <div class="modal-footer">
        <a data-dismiss="modal" class="btn btn-primary" @click.prevent="ajouterCojoMarche()" href="#">Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>
    </div>

    <!-- end formulaire cojo  -->

    <!-- bigin modifie cojo  -->
    <div id="modificationCojo" class="modal hide grdtaill">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modification de COJO</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">


          <div class="control-group">
            <label class="control-label">Référence DAO</label>
            <div class="controls">
              <!-- <select v-model="edite_cojo.cotation_id" class="span" disabled>
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
              <label class="control-label">Entreprise.</label>
              <div class="controls">
                <select v-model="edite_cojo.entreprise_id" class="span">
                      <option v-for="varText in afficherEntrepriseRecep(macheid)" :key="varText.id"
                              :value="varText.objetEntreprise.id">{{varText.objetEntreprise.raison_sociale}}</option>
                  </select>

              </div>
          </div> -->


          <div class="control-group">
            <label class="control-label">Date éffectiive d'ouverture</label>
            <div class="controls">
              <input
                  type="date"
                  v-model="edite_cojo.date_ouverture"
                  class="span"

              />
            </div>
          </div>


          <!-- <div class="control-group">
            <label class="control-label">Date de composition</label>
            <div class="controls">
              <input
                  type="date"
                  v-model="edite_cojo.date_composition"
                  class="span"

              />
            </div>
          </div> -->

          <div class="control-group">
            <label class="control-label">Nombre de participants</label>
            <div class="controls">
              <input
                  type="text"
                  v-model="edite_cojo.nbr_participant"
                  class="span"
              />
              <input type="hidden" v-model="formDataCojo.difference_personnel_bienService"/>
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <a data-dismiss="modal" class="btn btn-primary" @click.prevent="modificationCojo()" href="#">Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>
    </div>
    <!-- end modifier cojo -->
<notifications/>
  </div>

</template>

<script>
import {mapActions, mapGetters} from "vuex";
import moment from "moment";
import StructureDAO from "./StructureDAO";
import {  ModelListSelect } from 'vue-search-select'
import 'vue-search-select/dist/VueSearchSelect.css'
import {noDCfNoAdmin} from "../../../../Repositories/Auth"
export default {
name: "InfoCojo",
  components: {StructureDAO,ModelListSelect,},
  props:["macheid"],

  data(){
    return{

      formDataCojo:{
        date_ouverture:"",
        date_composition:"",
        num_dossier_appel_offre:"",
        nbr_participant:"",
        appel_offre_id:"",
        difference_personnel_bienService:"bienservice"
      },
       structure:[],
      nom_structure:'',
      edite_cojo:"",
      structure_id:[]
    }
  },
  created(){
  },

  computed:{
    ...mapGetters('bienService',['getterCojos',"gettersOuverturePersonnaliser",
      'gettersCotations','appelOffres',
      'gettersCojoPersonnaliser','gettersCotationPersonnaliser']),
    ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
    ...mapGetters('personnelUA', ['acteur_depenses']),
    ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),
    ...mapGetters("uniteadministrative", [
      "acteCreations",
      "typeTextes",
      "uniteAdministratives",
      "getterBudgeCharge",
      "decomptefactures"
    ]),
    noDCfNoAdmin:noDCfNoAdmin,
    filtre_unite_admin() {
      if(this.noDCfNoAdmin){

        let colect=[];
        let vM=this
        this.uniteAdministratives.filter(item=>{
          if(vM.getterUniteAdministrativeByUser.length>0){
            let val= vM.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
            if (val!=undefined){
              colect.push(item)
              return item
            }
          }

        })
        return colect
      }
      console.log()
      return this.uniteAdministratives
    },
    listeCojo() {
      return macheid => {
        if (macheid != "") {
          //   let Objet=  this.getterCojos.find(idmarche => idmarche.lettre_invitation.appel_offre.macheid == macheid);
          //     let vM=this;
          //     if(Objet!=undefined){
          //         vM.idcojo=Objet.id
          //     }
          return this.gettersOuverturePersonnaliser.filter(idmarche => idmarche.marche_id == macheid)
        }
      }
    },

    //  afficherEntrepriseRecep () {
    //         return id => {
    //             if (id != "") {
    //                 console.log("Marche lettre inviation marche")
    //                 return this.gettersCotationPersonnaliser.filter(idmarche => idmarche.marche_id == id)
    //              }
    //      }
    //     },
    //         affichierNomEntreprise() {
    //   return id => {
    //     if (id != null && id != "") {
    //        const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

    //   if (qtereel) {
    //     return qtereel.raison_sociale;
    //   }
    //   return 0
    //     }
    //   };
    // },
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
// listeAppelOffreId() {
//       return id => {
//         if (id != null && id != "") {
//            const qtereel = this.gettersCotations.find(qtreel => qtreel.marche_id == id);

//       if (qtereel) {
//         return qtereel.id;
//       }
//       return 0
//         }
//       };
//     },

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
//   listeAppelOffre(){
//                 return  macheid=>{
//                     if (macheid!="") {
//                         //console.log("Marche appel offre")
//                        const vM=this;
//                         let Objet=this.gettersCotations.find( idmarche => idmarche.marche_id == macheid)
//                        // console.log("Marche appel offre 10")
//                         if(Objet!=undefined){
//                            // vM.formDossierCadidature.appel_offre_id=Objet.id;
//                            // vM.formAnalyseDossier.appel_offre_id = Objet.id;
//                             //vM.formLot.appel_offre_id=Objet.id;
//                            // vM.formAno.appel_offre_id = Objet.id
//                             //vM.formLettre.appel_offre_id=Objet.id;
//                             vM.formDataCojo.cotation_id=Objet.ref_offre;
//                         }
//                        // console.log(Objet)
//                     return this.gettersCotations.filter( idmarche => idmarche.marche_id == macheid)
//                     }
//                 }
//             },

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
      this.edite_cojo = this.listeCojo(this.macheid.id)[index];

      //this.edite_lot.appel_offre_id=this.edite_lot. modifierDemandeAno
    },



    ajouterCojoMarche(){
      var nouvelObjet ={
        ...this.formDataCojo,
        marche_id:this.macheid,
        structure_dao:this.structure_id,
        appel_offre_id :this.affichierAppelOffreid(this.macheid)

      }
      this.ajouterCojo(nouvelObjet)
      this.formDataCojo={
        appel_offre_id:"",

        date_ouverture:"",
        date_composition:"",
        num_dossier_appel_offre:"",
        nbr_participant:"",
        difference_personnel_bienService:"bienservice"
      }
    },
// la fonction pour afficher le modal du cojo

    modificationCojo(){
      var nouvelObjet1 ={
        ...this.edite_cojo,
        marche_id:this.macheid.id,
        appel_offre_id :this.affichierAppelOffreid(this.macheid)

      }
      this.modifierCojo(nouvelObjet1)
      this.$('#modificationCojo').modal('hide');
    },
    // fonction pour formater la date
    formaterDate(date){
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    addStructure(){

      if(this.nom_structure=="")
         return ""
      let isStructureExist=this.structure.find(item=>item.id==this.nom_structure)
      if (isStructureExist!=undefined)
          return ""

      let objet=this.uniteAdministratives.find(item=>item.id==this.nom_structure)
        this.structure_id.unshift(objet.id)
      this.structure.unshift(objet)
console.log(this.structure)
      this.nom_structure=""
    },
    supprimeStructureSelectionner(id){

      this.structure= this.structure.filter(item=>item.id!=id)
      this.structure_id=this.structure_id.filter(item=>item!=id)
      console.log(this.structure_id)
    }
  }
}
</script>

<style scoped>
  .grdirModalActeEffet{
    width: 60%;
    margin: 0 -20%;
  }
</style>