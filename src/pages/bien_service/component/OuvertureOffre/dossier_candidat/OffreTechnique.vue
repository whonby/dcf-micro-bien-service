<template>
<div>

  <div align="right">
    <a href="#ajouter_offre_fin" data-toggle="modal" class="btn btn-primary">Ajouter</a>
  </div>
  <div class="widget-box" >
    <div class="widget-content nopadding">
      <table class="table table-bordered table-striped">
        <thead>
        <tr>
          <th>N°LOT</th>
          <th>Programme mobilisation</th>
          <th>Capacite financiere </th>
          <th>CAA Moyenn</th>
          <th>Capacite technique exper </th>
          <th>Meth reat traveau</th>
          <th>Accord groupe</th>
          <th>Pauv habil signataire</th>
          <th>Caution</th>
          <th>Registe de commerce</th>
          <th>Observation</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="offre in listeOffreTechniqueLotCandidat(dossier_candidature.id)" :key="offre.id">
          <td>N°{{offre.numero_lot}}</td>
          <td>{{offre.prog_mobilisation}}</td>
          <td>{{offre.capacite_financiere}} </td>
          <td>{{offre.caa_moyen_ac_entre}} </td>
          <td>{{offre.capacite_tech_exp}} </td>
          <td>{{offre.meth_real_travau}}</td>
          <td>{{offre.accord_groupe}}</td>
          <td>{{offre.pouv_habil_signataire}}</td>
          <td>{{offre.cautionnement_prov}}</td>
          <td>{{offre.reg_com}}</td>
          <td v-if="offre.observation" style="background: green;color: #fff">CONFORME</td>
          <td v-if="!offre.observation" style="background: red;color: #fff">NON CONFORME</td>
          <td>
            <button @click.prevent="supprimerchnique(marche.id)"  class="btn btn-danger ">
              <span class=""><i class="icon-trash"></i></span></button>
          </td>
        </tr>
        </tbody>

      </table>
    </div>
  </div>

<!--Ajouter offre technique-->
  <div id="ajouter_offre_fin" class="modal hide" style="width: 1000px !important; left: 550px; ">
    <div class="modal-header">
      <button data-dismiss="modal" class="close" type="button">×</button>
      <h3>Ajouter l'offre technique</h3>
    </div>
    <div class="modal-body" >
      <div class="widget-box" >
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
                  <select v-model="formchnique.marche_id" class="span" >
                    <option v-for="varText in listeLot(dossier_candidature.marche_id,dossier_candidature.id)" :key="varText.id"
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
                <label class="control-label">Accord groupement :</label>
                <div class="controls">
                  <select v-model="formchnique.accord_groupe" class="span">
                    <option value=""></option>
                    <option value="OUI">OUI</option>
                    <option value="NON">NON</option>
                    <option value="N/A">NON APPLICABLE</option>
                  </select>

                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Fiche de renseignement nombre de groupe :</label>
                <div class="controls">
                  <input v-if="formchnique.accord_groupe=='OUI'" type="text" class="span" placeholder="Attest banc"
                         v-model="formchnique.fiche_rsgnt_mbre_groupe">
                  <input v-if="formchnique.accord_groupe=='NON'" type="text" class="span" placeholder="Attest banc"
                         v-model="formchnique.fiche_rsgnt_mbre_groupe" disabled>
                  <input v-if="formchnique.accord_groupe=='N/A'" type="text" class="span" placeholder="Attest banc"
                         v-model="formchnique.fiche_rsgnt_mbre_groupe" disabled>
                  <input v-if="!formchnique.accord_groupe" type="text" class="span" placeholder="Attest banc"
                         v-model="formchnique.fiche_rsgnt_mbre_groupe" disabled>
                  <!-- <select v-model="formLot.fiche_rsgnt_mbre_groupe" class="span">
                     <option value=""></option>
                     <option value="OUI">OUI</option>
                     <option value="NON">NON</option>
                     <option value="N/A">NON APPLICABLE</option>
                   </select>-->
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Cautionnement provisoire :</label>
                <div class="controls">
                  <select v-model="formchnique.cautionnement_prov" class="span">
                    <option value=""></option>
                    <option value="OUI">OUI</option>
                    <option value="NON">NON</option>
                    <option value="N/A">NON APPLICABLE</option>
                  </select>
                  <!--<input type="text" class="span" placeholder="Cautionnement prov" v-model="formchnique.cautionnement_prov">-->
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Attestation bancaire:</label>
                <div class="controls">
                  <select v-model="formchnique.attest_banc" class="span">
                    <option value=""></option>
                    <option value="OUI">OUI</option>
                    <option value="NON">NON</option>
                    <option value="N/A">NON APPLICABLE</option>
                  </select>
                 <!-- <input type="text" class="span" placeholder="Pouv habil" v-model="formchnique.attest_banc">-->
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Fiche technique :</label>
                <div class="controls">
                  <select v-model="formchnique.formil_propo_tech" class="span">
                    <option value=""></option>
                    <option value="OUI">OUI</option>
                    <option value="NON">NON</option>
                    <option value="N/A">NON APPLICABLE</option>
                  </select>
                  <!--<input type="text" class="span" placeholder="Piece Admin" v-model="formchnique.formil_propo_tech">-->
                </div>
              </div>
            </td>

          </tr>
          <tr>

            <td>

              <div class="control-group">
                <label class="control-label">Antécédent des marchés non Execute :</label>
                <div class="controls">
                <!--  <input type="text" class="span" placeholder="Org travau" v-model="formchnique.atcdent_marche_non_exe">-->

                  <select v-model="formchnique.atcdent_marche_non_exe" class="span">
                    <option value=""></option>
                    <option value="OUI">OUI</option>
                    <option value="NON">NON</option>
                    <option value="N/A">NON APPLICABLE</option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Planning d'execution des travaux :</label>
                <div class="controls">
                 <!-- <input type="text" class="span" placeholder="Meth real travau" v-model="formchnique.org_travau_site">-->
                  <select v-model="formchnique.org_travau_site" class="span">
                    <option value=""></option>
                    <option value="OUI">OUI</option>
                    <option value="NON">NON</option>
                    <option value="N/A">NON APPLICABLE</option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Methode de réalisation des travaux:</label>
                <div class="controls">
                 <!-- <input type="text" class="span" placeholder="Prog mobilisation" v-model="formchnique.meth_real_travau">-->

                  <select v-model="formchnique.meth_real_travau" class="span">
                    <option value=""></option>
                    <option value="OUI">OUI</option>
                    <option value="NON">NON</option>
                    <option value="N/A">NON APPLICABLE</option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Programme mobilisation :</label>
                <div class="controls">
                 <!-- <input type="text" class="span" placeholder="Prog mobilisation" v-model="formchnique.prog_mobilisation">-->

                  <select v-model="formchnique.prog_mobilisation" class="span">
                    <option value=""></option>
                    <option value="OUI">OUI</option>
                    <option value="NON">NON</option>
                    <option value="N/A">NON APPLICABLE</option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Capacite de financement :</label>
                <div class="controls">
                  <!--  <input type="text" class="span" placeholder="Capacite financiere" v-model="formchnique.capacite_financiere">-->

                  <select v-model="formchnique.capacite_financiere" class="span">
                    <option value=""></option>
                    <option value="OUI">OUI</option>
                    <option value="NON">NON</option>
                    <option value="N/A">NON APPLICABLE</option>
                  </select>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">CAA moyen :</label>
                <div class="controls">
                 <input type="text" class="span" placeholder="Caa moyen ac"
                        v-model="formchnique.caa_moyen_ac_entre">

                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Expérience spécique :</label>
                <div class="controls">
                <!--  <input type="text" class="span" placeholder="Capacite techn exp" v-model="formchnique.capacite_techn_exp">-->
                  <select v-model="formchnique.capacite_tech_exp" class="span">
                    <option value=""></option>
                    <option value="OUI">OUI</option>
                    <option value="NON">NON</option>
                    <option value="N/A">NON APPLICABLE</option>
                  </select>

                </div>
              </div>

            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Expérience Général :</label>
                <div class="controls">
                  <!--  <input type="text" class="span" placeholder="Capacite techn exp" v-model="formchnique.capacite_techn_exp">-->
                  <select v-model="formchnique.experience_generale" class="span">
                    <option value=""></option>
                    <option value="OUI">OUI</option>
                    <option value="NON">NON</option>
                    <option value="N/A">NON APPLICABLE</option>
                  </select>

                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Personnel :</label>
                <div class="controls">
                  <!--  <input type="text" class="span" placeholder="Capacite techn exp" v-model="formchnique.capacite_techn_exp">-->
                  <select v-model="formchnique.personnel" class="span">
                    <option value=""></option>
                    <option value="OUI">OUI</option>
                    <option value="NON">NON</option>
                    <option value="N/A">NON APPLICABLE</option>
                  </select>

                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Matériel :</label>
                <div class="controls">
                  <!--  <input type="text" class="span" placeholder="Capacite techn exp" v-model="formchnique.capacite_techn_exp">-->
                  <select v-model="formchnique.materiel" class="span">
                    <option value=""></option>
                    <option value="OUI">OUI</option>
                    <option value="NON">NON</option>
                    <option value="N/A">NON APPLICABLE</option>
                  </select>

                </div>
              </div>
            </td>
          </tr>
          <tr>

            <td>
              <div class="control-group">
                <label class="control-label">Lettre de Soumission et pouvoir de signature :</label>
                <div class="controls">
                  <!--  <input type="text" class="span" placeholder="Capacite techn exp" v-model="formchnique.capacite_techn_exp">-->
                  <select v-model="formchnique.lettre_soumission_pouvoir_signature" class="span">
                    <option value=""></option>
                    <option value="OUI">OUI</option>
                    <option value="NON">NON</option>
                    <option value="N/A">NON APPLICABLE</option>
                  </select>

                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Registre de commerce :</label>
                <div class="controls">
                  <!--  <input type="text" class="span" placeholder="Capacite techn exp" v-model="formchnique.capacite_techn_exp">-->
                  <select v-model="formchnique.reg_com" class="span">
                    <option value=""></option>
                    <option value="OUI">OUI</option>
                    <option value="NON">NON</option>
                    <option value="N/A">NON APPLICABLE</option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Garantie de soumission :</label>
                <div class="controls">
                  <!--  <input type="text" class="span" placeholder="Capacite techn exp" v-model="formchnique.capacite_techn_exp">-->
                  <select v-model="formchnique.garantie_soumission" class="span">
                    <option value=""></option>
                    <option value="OUI">OUI</option>
                    <option value="NON">NON</option>
                    <option value="N/A">NON APPLICABLE</option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Délai d'exécution :</label>
                <div class="controls">
                  <!--  <input type="text" class="span" placeholder="Capacite techn exp" v-model="formchnique.capacite_techn_exp">-->
                  <select v-model="formchnique.delai_execution" class="span">
                    <option value=""></option>
                    <option value="OUI">OUI</option>
                    <option value="NON">NON</option>
                    <option value="N/A">NON APPLICABLE</option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div class="control-group">
                <label class="control-label">Validation de l'offre :</label>
                <div class="controls">
                  <!--  <input type="text" class="span" placeholder="Capacite techn exp" v-model="formchnique.capacite_techn_exp">-->
                  <select v-model="formchnique.validation" class="span">
                    <option value=""></option>
                    <option value="OUI">OUI</option>
                    <option value="NON">NON</option>
                    <option value="N/A">NON APPLICABLE</option>
                  </select>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="control-group">
                <label class="control-label">Observation :</label>
                <div class="controls">
                  <!--  <input type="text" class="span" placeholder="Capacite techn exp" v-model="formchnique.capacite_techn_exp">-->
                  <select v-model="formchnique.observation" class="span">
                    <option value=""></option>
                    <option value="1">CONFORME</option>
                    <option value="0">NON CONFORME</option>
                  </select>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>

    <div class="modal-footer">
      <button @click.prevent="ajouterOffreT" class="btn btn-primary">Ajouer</button>
      <a data-dismiss="modal" class="btn" href="#">Cancel</a> </div>
  </div>
  <!--Fin ajout affre technique-->
</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
name: "OffreTechnique",
  props:["dossier_candidature"],
  data() {
    return {

      formchnique:{
        numero_lot:"",
        accord_groupe:"",
        cautionnement_prov:"",
        pouv_habil_signataire:"",
        peice_admin:"",
        reg_com:"",
        attest_banc:"",
        formil_propo_tech:"",
        fiche_rsgnt_mbre_groupe:"",
        atcdent_marche_non_exe:"",
        org_travau_site:"",
        meth_real_travau:"",
        prog_mobilisation:"",
        capacite_financiere:"",
        caa_moyen_ac_entre:"",
        capacite_techn_exp:"",
        dossier_candidat_id:"",
        experience_generale:"",
        personnel:"",
        materiel:"",
        observation:"",
        lettre_soumission_pouvoir_signature:"",
        garantie_soumission:"",
        delai_execution:"",
        validation:"",
        marche_id:"",
        appel_offre_id:""
      },

      formOffreFinanciere:{
        numero_lot:"",
        designation:"",
        unite:"",
        quantite:"",
        prix_unitaire:"",
        montant_total_ht:"",
        montant_total_ttc:"",
        dossier_candidat_id:"",
      },

    };
  },
  created() {
    console.log(this.dossier_candidature)
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
          //console.log("Marche appel offre")
          return this.appelOffres.find( idmarche => idmarche.marche_id == marche_id)
        }
      }
    },
listeOffreTechniqueLotCandidat(){
      return id=>{
        if(id!=""){
          return this.gettersOffreTechniques.filter(item=>item.dossier_candidat_id==id)
        }
      }
},
    listeLot(){
      return (marche_id,candidat_id)=>{
        if(marche_id!=""){
          let seft=this;
console.log("okokokokokok")
          let lot_marche=this.getMarchePersonnaliser.filter(item=>item.parent_id==marche_id)
          let collection=[];
          console.log(lot_marche)
          if (lot_marche.length>0){
         //   console.log(lot_marche)
            lot_marche.forEach(function (value) {
              let objet=seft.gettersOffreTechniques.find(item=>{
                if(item.marche_id==value.id && item.dossier_candidat_id==candidat_id){
                  return item
                }
              })
              console.log("OG")
            console.log(objet)
              console.log("000000")
              if(objet==undefined){
                collection.push(value)
              }
            })
            return collection
          }
          return null
        }
      }
    }
  },
  methods:{
    ...mapActions("bienService", [
       "supprimerDossierCandidat","ajouterOffreTechnique","modifierOffreTechnique",
      "supprimerchnique","ajouterOffreFinancier","modifierOffreFinancier","supprimerOffreFinancier",
      "ajouterLettreInvitation",

    ]),
    ajouterOffreT(){
      let lot_marche=this.getMarchePersonnaliser.find(item=>item.id==this.formchnique.marche_id)
      this.formchnique.numero_lot=lot_marche.numero_lot
      this.formchnique.dossier_candidat_id=this.dossier_candidature.id
      this.ajouterOffreTechnique(this.formchnique)
      this.formchnique={
        numero_lot:"",
        accord_groupe:"",
        cautionnement_prov:"",
        pouv_habil_signataire:"",
        peice_admin:"",
        reg_com:"",
        attest_banc:"",
        formil_propo_tech:"",
        fiche_rsgnt_mbre_groupe:"",
        atcdent_marche_non_exe:"",
        org_travau_site:"",
        meth_real_travau:"",
        prog_mobilisation:"",
        capacite_financiere:"",
        caa_moyen_ac_entre:"",
        capacite_techn_exp:"",
        dossier_candidat_id:"",
      }

    },
    editeOffreT(){
      this.modifierOffreTechnique(this.edit_offre_technique_recupere)
      this.$('#modificationOffreT').modal('hide');
    },
  }
}
</script>

<style scoped>

</style>