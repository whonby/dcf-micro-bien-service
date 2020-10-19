<template>
<div>



  <div class="container-fluid">
    <div class="row-fluid">
      <div class="span4"></div>
      <div class="span4"></div>
      <div class="span4" align="right">
        <a href="#exampleModal" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter</a>
      </div>
      <div class="span12">

        <div class="widget-box">
          <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
            <h5>Liste des Lots</h5>
          </div>
          <div class="widget-content nopadding">
            <table class="table table-bordered table-striped">
              <thead>
              <tr>
                <th>N°</th>
                <th>Intitule du lot</th>
                <th>Montant estimatif en FCFA TTC</th>

                <th>Action</th>
              </tr>
              </thead>
              <tbody>
              <tr class="odd gradeX" v-for="marche in getLotMarche"
                  :key="marche.id">
                <td @dblclick="editeMarcheLot(marche.id)">
                  {{marche.numero_lot || 'Non renseigné'}}
                </td>
                <td @dblclick="editeMarcheLot(marche.id)">
                  {{marche.objet || 'Non renseigné'}}
                </td>
                <td @dblclick="editeMarcheLot(marche.id)">
                  {{formatageSomme(parseFloat(marche.montant_marche)) || 'Non renseigné'}}
                </td>
                <td>
                  <button @click.prevent="supprimerMarche(marche.id)"  class="btn btn-danger ">
                    <span class=""><i class="icon-trash"></i></span></button>
                </td>
               </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  </div>

  <!--Formulaire d'ajout de lot-->

  <div id="exampleModal" class="modal hide">
    <div class="modal-header">
      <button data-dismiss="modal" class="close" type="button">×</button>
      <h3>Ajouter Lot</h3>
    </div>
    <div class="modal-body">
      <form class="form-horizontal">
        <div class="control-group">
          <label class="control-label">Intitule du lot</label>
          <div class="controls">
            <input
                type="text"
                v-model="formData.objet"
                class="span"
                placeholder="Intitule du lot"
            />
          </div>
        </div>

        <div class="control-group">
          <label class="control-label">montant_lot</label>
          <div class="controls">
            <input
                type="text"
                v-model="formData.montant_marche"
                class="span"
                placeholder="Saisir le montant_lot"
            />
          </div>
          <code v-if="sommeMontant(formData.montant_marche)>detail_marche.montant_marche">
           Impossible d'effectuer l'engistrement</code>
          <code v-if="sommeMontant(formData.montant_marche)>detail_marche.montant_marche">
            Car le montant total des lots est supperieur  </code>
          <code v-if="sommeMontant(formData.montant_marche)>detail_marche.montant_marche">
            au montant du marché  </code>
          <table class="table table-bordered table-striped">
            <thead>
            <tr>
              <th>Montant marché</th>
              <th>Total montant lot</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>{{formatageSomme(parseFloat(detail_marche.montant_marche))}}</td>
              <td>{{formatageSomme(parseFloat(sommeMontant(formData.montant_marche)))}}</td>
            </tr>
            </tbody>
       </table>
        </div>

      </form>
    </div>
    <div class="modal-footer">
      <a v-if="sommeMontant(formData.montant_marche)<=detail_marche.montant_marche"
          @click.prevent="ajouter()"
          class="btn btn-primary"
          href="#"
      >Valider</a>
      <a data-dismiss="modal" class="btn" href="#">Fermer</a>
    </div>
  </div>



  <!--Edition de lot-->

  <div id="editBailleuMarche" class="modal hide" aria-hidden="true" style="display: none;">
    <div class="modal-header">
      <button data-dismiss="modal" class="close" type="button">×</button>
      <h3>Modification </h3>
    </div>
    <div class="modal-body">
      <form class="form-horizontal">
        <div class="control-group">
          <label class="control-label">Intitule du lot</label>
          <div class="controls">
            <input
                type="text"
                v-model="editor.objet"
                class="span"
                placeholder="Intitule du lot"
            />
          </div>
        </div>

        <div class="control-group">
          <label class="control-label">montant_lot</label>
          <div class="controls">
            <input
                type="text"
                v-model="editor.montant_marche"
                class="span"
                placeholder="Saisir le montant_lot"
            />
          </div>

        </div>

      </form>
    </div>
    <div class="modal-footer">
      <a
         @click.prevent="modification()"
         class="btn btn-primary"
         href="#"
      >Modification</a>
      <a data-dismiss="modal" class="btn" href="#">Fermer</a>
    </div>
  </div>

  <notifications/>
</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {formatageSomme} from "@/Repositories/Repository";

export default {
name: "LotMarche",
  data(){
    return{
      fabActions: [
        {
          name: "cache",
          icon: "add"
        },
      ],
      formData: {
        objet:"",
        montant_marche:0,
        type_marche_id:"",
        unite_administrative_id:"",
        activite_id:"",
        imputation:"",
        attribue:"",
        Nature_des_prix:"",
        procedure_passation_id:"",
        exo_id:"",
        typeappel_id:"",
        gdenature_id:"",
        plan_passation_marche_id:"",
        type_financement:"",
        source_financement:"",
        activite:"",
        ligne_budgetaire:"",
        revue:"",
        beneficiaire:"",
        date_transmission_dao_dmp_prevu:"",
        date_dmp_dao_prevu:"",
        date_bailleur_dmp_prevu:"",
        date_publication_ao_prevu:"",
        date_lettre_invitation_prevu:"",
        date_reception_offre_prevu:"",
        date_ouverture_offre_technique_prevu:"",
        date_rapport_ouverture_prevu:"",
        date_ouverture_offre_finnancier_prevu:"",
        date_jugement_offre_prevu:"",
        date_rapport_evaluation_combine_prevue:"",
        date_demande_ano_dmp_prevue:"",
        date_ano_dmp_attribution_prevue:"",
        date_negociation_prevue:"",
        date_signature_attributaire_prevue:"",
        date_signature_autorite_contractante_prevue:"",
        date_approbation_marche_prevue:"",
        date_execution_marche_debut_prevue:"",
        durre_marche_prevue:"",
        date_execution_fin_prevue:"",
        nature_prix:"",
        libelle_procedure:"",
        parent_id:"",
        numero_lot:"",
      },
      editor:"",
      lot:"",
      search: "",
      detail_marche:"",

    }
  },

  props:["macheid"],
  created() {
    this.lot=this.getMarchePersonnaliser.filter(item=>item.parent_id==this.macheid)
    this.detail_marche=this.getMarchePersonnaliser.find(item=>item.id==this.macheid)
  //console.log(this.lot)
  },
  computed:{
    ...mapGetters('bienService',['personnaliseGetterMarcheBailleur',"getMarchePersonnaliser","marches"]),
    getLotMarche(){
      return this.getMarchePersonnaliser.filter(item=>item.parent_id==this.macheid);
    },
    sommeMontant(){
     return montant_saisi=>{
       //console.log(montant_saisi)
       let initialValue = 0;
       let ObjetMontant =this.lot.reduce(function (total, currentValue) {
         return total + parseFloat(currentValue.montant_marche) ;
       }, initialValue);
        console.log(ObjetMontant)
       if(montant_saisi==0){
         return ObjetMontant
       }

       let montant=parseFloat(ObjetMontant) + parseFloat(montant_saisi)
       return parseFloat(montant);
     }

    },
    afficherStatusSib() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.sib;
      }
      return 
        }
      };
    },
    AjouteMarcheSiBetHorsSib(){
      if(this.afficherStatusSib(this.macheid)==0)
      {
        return 0
      }
      else{
        return 1
      }
    }
  },
  methods:{
    ...mapActions("bienService", ['ajouterSousMarcheLot','modifierMarche','modifierMarcheBascule',
      'supprimerMarche','modifierActeEffetFinancier',"getMarche","getActeEffetFinancier","modifierSousMarche"]),
    formatageSomme:formatageSomme,
    ajouter(){
      let nbrlot=this.lot.length +1
     let intitule=this.detail_marche.objet+" / "+this.formData.objet
      this.formData={
        objet:intitule,
            montant_marche:this.formData.montant_marche,
            type_marche_id:this.detail_marche.type_marche_id,
            unite_administrative_id:this.detail_marche.unite_administrative_id,
            activite_id:this.detail_marche.activite_id,
            imputation:this.detail_marche.imputation,
            attribue:this.detail_marche.attribue,
            procedure_passation_id:this.detail_marche.procedure_passation_id,
            exo_id:this.detail_marche.exo_id,
            typeappel_id:this.detail_marche.typeappel_id,
            gdenature_id:this.detail_marche.gdenature_id,
            plan_passation_marche_id:this.detail_marche.plan_passation_marche_id,
            type_financement:this.detail_marche.type_financement,
            source_financement:this.detail_marche.source_financement,
            activite:this.detail_marche.activite,
            ligne_budgetaire:this.detail_marche.ligne_budgetaire,
            revue:this.detail_marche.revue,
            beneficiaire:this.detail_marche.beneficiaire,
            date_transmission_dao_dmp_prevu:this.detail_marche.date_transmission_dao_dmp_prevu,
            date_dmp_dao_prevu:this.detail_marche.date_dmp_dao_prevu,
            date_bailleur_dmp_prevu:this.detail_marche.date_bailleur_dmp_prevu,
            date_publication_ao_prevu:this.detail_marche.date_publication_ao_prevu,
            date_lettre_invitation_prevu:this.detail_marche.date_lettre_invitation_prevu,
            date_reception_offre_prevu:this.detail_marche.date_reception_offre_prevu,
            date_ouverture_offre_technique_prevu:this.detail_marche.date_ouverture_offre_technique_prevu,
            date_rapport_ouverture_prevu:this.detail_marche.date_rapport_ouverture_prevu,
            date_ouverture_offre_finnancier_prevu:this.detail_marche.date_ouverture_offre_finnancier_prevu,
            date_jugement_offre_prevu:this.detail_marche.date_jugement_offre_prevu,
            date_rapport_evaluation_combine_prevue:this.detail_marche.date_rapport_evaluation_combine_prevue,
            date_demande_ano_dmp_prevue:this.detail_marche.date_demande_ano_dmp_prevue,
            date_ano_dmp_attribution_prevue:this.detail_marche.date_ano_dmp_attribution_prevue,
            date_negociation_prevue:this.detail_marche.date_negociation_prevue,
            date_signature_attributaire_prevue:this.detail_marche.date_signature_attributaire_prevue,
            date_signature_autorite_contractante_prevue:this.detail_marche.date_signature_autorite_contractante_prevue,
            date_approbation_marche_prevue:this.detail_marche.date_approbation_marche_prevue,
            date_execution_marche_debut_prevue:this.detail_marche.date_execution_marche_debut_prevue,
            durre_marche_prevue:this.detail_marche.durre_marche_prevue,
            date_execution_fin_prevue:this.detail_marche.date_execution_fin_prevue,
            nature_prix:this.detail_marche.nature_prix,
            libelle_procedure:this.detail_marche.libelle_procedure,
            parent_id:this.detail_marche.id,
            numero_lot:nbrlot,
            sib:this.AjouteMarcheSiBetHorsSib
      }
    //  console.log(this.formData)
      this.ajouterSousMarcheLot(this.formData)



      this.formData= {
        objet:"",
            montant_marche:"",
            type_marche_id:"",
            unite_administrative_id:"",
            activite_id:"",
            imputation:"",
            attribue:"",
            Nature_des_prix:"",
            procedure_passation_id:"",
            exo_id:"",
            typeappel_id:"",
            gdenature_id:"",
            plan_passation_marche_id:"",
            type_financement:"",
            source_financement:"",
            activite:"",
            ligne_budgetaire:"",
            revue:"",
            beneficiaire:"",
            date_transmission_dao_dmp_prevu:"",
            date_dmp_dao_prevu:"",
            date_bailleur_dmp_prevu:"",
            date_publication_ao_prevu:"",
            date_lettre_invitation_prevu:"",
            date_reception_offre_prevu:"",
            date_ouverture_offre_technique_prevu:"",
            date_rapport_ouverture_prevu:"",
            date_ouverture_offre_finnancier_prevu:"",
            date_jugement_offre_prevu:"",
            date_rapport_evaluation_combine_prevue:"",
            date_demande_ano_dmp_prevue:"",
            date_ano_dmp_attribution_prevue:"",
            date_negociation_prevue:"",
            date_signature_attributaire_prevue:"",
            date_signature_autorite_contractante_prevue:"",
            date_approbation_marche_prevue:"",
            date_execution_marche_debut_prevue:"",
            durre_marche_prevue:"",
            date_execution_fin_prevue:"",
            nature_prix:"",
            libelle_procedure:"",
            parent_id:"",
            numero_lot:"",
      }
    },
  editeMarcheLot(index){
    this.$('#editBailleuMarche').modal({
      backdrop: 'static',
      keyboard: false
    });
    this.editor = this.getMarchePersonnaliser.find(item=>item.id==index)
  },
  modification(){
      let objet={
        id:this.editor.id,
        objet:this.editor.objet,
        montant_marche:this.editor.montant_marche,
      }
      this.modifierSousMarche(objet)
  }
  }
}
</script>

<style scoped>

</style>