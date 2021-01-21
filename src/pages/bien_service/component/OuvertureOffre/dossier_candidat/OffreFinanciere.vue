<template>
<div>



 <!-- <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
    <div class="span4">
      <h5>L'OFFRE FINANCIERE </h5>
    </div>
  </div>-->
  <notifications />
  <div align="right">
    <a href="#addd10" data-toggle="modal" class="btn btn-primary">Ajouter</a>
  </div>
  <div class="widget-box" >

    <div class="widget-content nopadding">
      <table class="table table-bordered table-striped">
        <thead>
        <tr>
          <!-- <th>Ref</th> -->
          <th>N°Lot</th>
          <th>Montant HT </th>
          <th>Montant TTC </th>
          <th>Rabais % </th>
          <th>Action </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="offre in listeOffreFinLotCandidat(dossier_candidature.id)" :key="offre.id">
          <td @click="afficheEdite(offre.id)">N°{{offre.numero_lot}}</td>
          <td @click="afficheEdite(offre.id)">
            {{formatageSomme(parseFloat(offre.montant_total_ht)) || 'Non renseigné'}}
          </td>

          <td @click="afficheEdite(offre.id)">
            {{formatageSomme(parseFloat(offre.hist_montant_ttc)) || 'Non renseigné'}}
          </td>

          <td @click="afficheEdite(offre.id)">
            {{offre.Rabais || 'Non renseigné'}}
            </td>
          <td>
            <button @click.prevent="supprimerOffreFinancier(offre.id)"  class="btn btn-danger ">
              <span class=""><i class="icon-trash"></i></span></button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>


  <!--Ajout offre fin-->

  <div id="addd10" class="modal hide modaloffreFin" style="width: 50% !important; left: 650px; ">
    <div class="modal-header">
      <button data-dismiss="modal" class="close" type="button">×</button>
      <h3>Ajouter l'offre financière</h3>
    </div>
    <div class="modal-body">
      <!-- <table class="table table-bordered table-striped">
       
      </table> -->
      <table class="table table-bordered table-striped">
         <tr>
          <td>
            <div class="control-group">
              <label>Offre</label>
              <div class="controls">
                <input v-if="listeAppelOffre(dossier_candidature.marche_id)" type="text" class="span" placeholder="Offre"
                       v-model="listeAppelOffre(dossier_candidature.marche_id).ref_appel" disabled>
              </div>
            </div>
          </td>
          <td colspan="2">
            <div class="control-group">
              <label>Lot</label>
              <div class="controls">
                <select v-model="formOffreFinanciere.marche_id" class="span" >
                  <option v-for="varText in lotTechniqueOffre(dossier_candidature.id)" :key="varText.id"
                          :value="varText.id">LOT N°{{varText.numero_lot}} {{varText.objet}}</option>
                </select>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="control-group">
              <label class="control-label">Montant total ht :</label>
              <div class="controls">
                <input type="text"   class="span" placeholder="Montant total HT" v-model="formOffreFinanciere.montant_total_ht">
              </div>
            </div>
          </td>
          <td>
            <div class="control-group">
              <label class="control-label">Montant HT:</label>
              <div class="controls">
                <input type="number" class="span" placeholder="Montant TTC" v-model="formOffreFinanciere.montant_total_ttc">
              </div>
            </div>

          </td>
          <td>

            <div class="control-group">
              <label class="control-label">Montant TTC :</label>
              <div class="controls">
                <input type="number" class="span" placeholder="Montant TTC" v-model="formOffreFinanciere.montant_total_ttc">
              </div>
            </div>

          </td>
<<<<<<< HEAD

        </tr>
        <tr>
       

          <td>
=======
<td>
>>>>>>> fd760bc2f87c08f2b583d664f6e1c222a351f926

            <div class="control-group">
              <label class="control-label">Rabais (%) :</label>
              <div class="controls">
                <input type="number" class="span" placeholder="Rabais" v-model="formOffreFinanciere.Rabais">
              </div>
            </div>

          </td>
        </tr>
        


      </table>

    </div>
    <div class="modal-footer">
      <button @click.prevent="ajouterOffreF()" class="btn btn-primary">Ajouer</button>
      <!--<a data-dismiss="modal" class="btn btn-primary" href="#" @click.prevent="ajouterOffreF()"> Ajouter</a>-->
      <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>
  </div>


  <div id="edite100" class="modal hide modaloffreFin" style="width: 1000px !important; left: 550px; ">
    <div class="modal-header">
      <button data-dismiss="modal" class="close" type="button">×</button>
      <h3>Modification</h3>
    </div>
    <div class="modal-body">
      <table class="table table-bordered table-striped">
        <tr>
          <td>
            <div class="control-group">
              <label>Offre</label>
              <div class="controls">
                <input v-if="listeAppelOffre(dossier_candidature.marche_id)" type="text" class="span" placeholder="Offre"
                       v-model="listeAppelOffre(dossier_candidature.marche_id).ref_appel" disabled>
              </div>
            </div>
          </td>
          <td>
            <div class="control-group">
              <label>Lot</label>
              <div class="controls">
                <select v-model="editer.marche_id" class="span" >
                  <option v-for="varText in lotTechniqueFOffre(dossier_candidature.id)" :key="varText.id"
                          :value="varText.id">LOT N°{{varText.numero_lot}} {{varText.objet}}</option>
                </select>
              </div>
            </div>
          </td>
        </tr>
      </table>
      <table class="table table-bordered table-striped">
        <tr>
          <td>
            <div class="control-group">
              <label class="control-label">Montant total ht :</label>
              <div class="controls">
                <input type="text"   class="span" placeholder="Montant total HT" v-model="editer.montant_total_ht">
              </div>
            </div>
          </td>


          <td>

            <div class="control-group">
              <label class="control-label">Montant HT:</label>
              <div class="controls">
                <input type="number" class="span" placeholder="Montant TTC" v-model="editer.montant_total_ttc">
              </div>
            </div>

          </td>

        </tr>
        <tr>

          <td>

            <div class="control-group">
              <label class="control-label">Rabais (%) :</label>
              <div class="controls">
                <input type="number" class="span" placeholder="prix unitaire" v-model="editer.Rabais">
              </div>
            </div>

          </td>
        </tr>


      </table>

    </div>
    <div class="modal-footer">
      <button @click.prevent="editeOffreF()" class="btn btn-primary">Modification</button>
      <!--<a data-dismiss="modal" class="btn btn-primary" href="#" @click.prevent="ajouterOffreF()"> Ajouter</a>-->
      <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>
  </div>
</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {formatageSomme} from "@/Repositories/Repository";

export default {
name: "OffreFinanciere",
  props:["dossier_candidature"],
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],
      editer:"",
      formOffreFinanciere:{
        numero_lot:"",
        Rabais:"",
        montant_total_ht:"",
        montant_total_ttc:"",
        dossier_candidat_id:"",
        hist_montant_ttc:"",
        marche_id:""
      },


    };
  },
  created() {

   // console.log(this.dossier_candidature)

  },
  computed:{
    ...mapGetters("bienService", ["gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
      "modePassations", "procedurePassations","getterDossierCandidats","marches",
      "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
      "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
      "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
      "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables",
      "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
    listeAppelOffre(){
      return  marche_id=>{
        if (marche_id!="") {
        //  console.log(marche_id)
          return this.appelOffres.find( idmarche => idmarche.marche_id == marche_id)
        }
      }
    },
    lotTechniqueOffre(){
      return dossier_candidat=>{
        let offre_technique=this.gettersOffreTechniques.filter(item=>item.dossier_candidat_id==dossier_candidat)
        let seft=this;
        console.log(offre_technique)
        if (offre_technique.length>0){
          let collection_marche=[];
          offre_technique.forEach(function (value) {

            let lot_marche=seft.getMarchePersonnaliser.find(item=>item.id==value.marche_id)

            collection_marche.push(lot_marche)

          })

          let collection=[];


          if (collection_marche.length>0){

            collection_marche.forEach(function (value) {
              let objet=seft.getterOffreFinanciers.find(item=>{
                if(item.marche_id==value.id && item.dossier_candidat_id==dossier_candidat){
                  return item
                }
              })
              if(objet==undefined){
                collection.push(value)
              }
            })

            return collection
          }


        return null

        }
        return null
      }
    },

    lotTechniqueFOffre(){
      return dossier_candidat=>{
        let offre_technique=this.gettersOffreTechniques.filter(item=>item.dossier_candidat_id==dossier_candidat)
        let seft=this;

        if (offre_technique.length>0){
          let collection_marche=[];
          offre_technique.forEach(function (value) {

            let lot_marche=seft.getMarchePersonnaliser.find(item=>item.id==value.marche_id)

            collection_marche.push(lot_marche)

          })

          return collection_marche

        }
        return null
      }
    },
    listeOffreFinLotCandidat(){
      return id=>{
        if(id!=""){
          return this.getterOffreFinanciers.filter(item=>item.dossier_candidat_id==id)
        }
      }
    },
     afficherNumeroDuLot(){
      return id =>{
        if(id!=null && id!=""){
          let varObjetListeMembrecojo = this.getMarchePersonnaliser.find(idmache =>idmache.id==id)
          return varObjetListeMembrecojo.numero_lot
        }
        return null
      }
    }
  },
  methods:{
    ...mapActions("bienService", [
      "supprimerDossierCandidat","ajouterOffreTechnique","modifierOffreTechnique",
      "supprimerchnique","ajouterOffreFinancier","modifierOffreFinancier","supprimerOffreFinancier",
      "ajouterLettreInvitation",

    ]),
    formatageSomme:formatageSomme,
    ajouterOffreF(){


      let lot_marche=this.getMarchePersonnaliser.find(item=>item.id==this.formOffreFinanciere.marche_id)
      this.formOffreFinanciere.numero_lot=lot_marche.numero_lot
      this.formOffreFinanciere.dossier_candidat_id=this.dossier_candidature.id
        this.formOffreFinanciere.hist_montant_ttc=this.formOffreFinanciere.montant_total_ttc

      this.ajouterOffreFinancier(this.formOffreFinanciere)
      this.$('#addd10').modal('hide');
      this.formOffreFinanciere={
                 numero_lot:"",
                montant_total_ttc:"",
                montant_total_ht:"",
                dossier_candidat_id:"",
                Rabais:"",
                marche_id:""
      }
    },
    afficheEdite(index){
      this.$('#edite100').modal({
        backdrop: 'static',
        keyboard: false
      });
      this.editer= this.getterOffreFinanciers.find(item=>item.id==index);
    },

    editeOffreF(){
      let objet={
        id:this.editer.id,
        // numero_lot:this.editer.numero_lot,
        Rabais:this.editer.Rabais,
         numero_lot:this.afficherNumeroDuLot(this.editer.marche_id),
        montant_total_ttc:this.editer.montant_total_ttc,
        dossier_candidat_id:this.editer.dossier_candidat_id,
        marche_id:this.editer.marche_id,
        hist_montant_ttc:this.editer.montant_total_ttc,
        montant_total_ht:this.editer.montant_total_ht
      }
      this.modifierOffreFinancier(objet)
      this.$('#edit_offre_technique').modal('hide');
    }
  }
}
</script>

<style scoped>

</style>