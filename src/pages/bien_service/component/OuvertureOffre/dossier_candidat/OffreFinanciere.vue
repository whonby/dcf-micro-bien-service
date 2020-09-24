<template>
<div>



 <!-- <div class="widget-title"> <span class="icon"> <i class="icon-th"></i> </span>
    <div class="span4">
      <h5>L'OFFRE FINANCIERE </h5>
    </div>
  </div>-->

  <div align="right">
    <a href="#ajouter_offre_fin" data-toggle="modal" class="btn btn-primary">Ajouter</a>
  </div>
  <div class="widget-box" >

    <div class="widget-content nopadding">
      <table class="table table-bordered table-striped">
        <thead>
        <tr>
          <!-- <th>Ref</th> -->
          <th>Quantite</th>
          <th>Prix unitaire</th>
          <th>Montant total ht </th>
          <th>Montant total ttc </th>
          <th>Action </th>
        </tr>
        </thead>

        <tr >

        </tr>


      </table>
    </div>
  </div>

</div>
</template>

<script>
import {mapGetters} from "vuex";

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
      demande:{},
      acteEffetActive:"",
      formFournisseur : {
        numero_cc: "",
        numero_rc: "",
        raison_sociale: "",
        telephone:"",
        email:"",
        adresse:"",
      },
      formAnalyseDMP:{
        //document_procedure_id:"",
        demande_ano_id:"",
        observation:"",
        avis_bail:"",
        ref_dmp:"",
        date_avis_bail:""
      },
      edite_analyse_dossier:"",
      edite_cojo:"",
      editer_mandater:"",
      edite_lettre_invitation:"",
      detail_dossier_candidature:"",
      detail_offre_technique:"",
      detail_offre_finnancier:"",
      detail_marche:"",
      marcheid:"",
      appel_offre_marche:"",
      edite_demande_dao:"",
      edite_analyse_dpm:"",
      formLot:{
        numero_lot:"",
        libelle_lot:"",
        montant_lot:"",
        marche_id:"",
        appel_offre_id:"",
        // mode_passation_id:""
      }
      ,
      formBailleur:{
        type_finnancement_id:"",
        montant:0,
        marche_id:"",
        bailleur_id:"",
      },
      edit_bailleur_marche:""
      ,formMandater:{
        lettre_invitation_id:"",
        date_id:"",
        fichier_joint:"",
        nom_mandat:"",
        prenom_nom:"",
        matricule_m:""
      },
      edite_pv:"",
      formAnalyseDossier:{
        date_analyse:"",
        appel_offre_id:"",
        note_analyse:"",
        rang_analyse:"",
        // decision:"",
        dossier_candidat_id:"",
        type_analyse_id: "",
        cojo_id:"",
        // motif:""
      },
      affiche_bouton_ajouter_cojo:false,
      idcojo:"",
      formDataCojo:{
        lettre_invitation_id:"",
        condition_id:'',
        controleur_finnancier:"",
        dmp:"",
        autorite_contractante:"",
        date_invitation:"",
        date_composition:"",
        num_dossier_appel_offre:"",
        nbr_participant:"",
        matricule:""
      },
      modification_offre_finnancier_recupere:{
        id:"",
        numero_lot:"",
        designation:"",
        unite:"",
        prix_unitaire:"",
        montant_total_ht:"",
        montant_total_ttc:"",
        taux:"",
        tva:"",
        dossier_candidat_id:"",
        quantite:""
      },
      isFormulaireDossierCandidature:false,
      isDetailDossierCandidature:false,
      isButtunAddDossierCandidat:true,
      formDossierCadidature:{
        secteur_activite_id:"",
        type_candidat_id:"",
        numero_cc:"",
        type_candidat:"",
        nom_cand:"",
        prenom_cand:"",
        marche_id:"",
        date_nais_cand:"",
        telephone_cand:"",
        adresse_post:"",
        situation_geo:"",
        email_cand:"",
        procedure_passation_id:"",
        appel_offre_id:"",
        accord_group:"",
        cautionnement_prov:"",
        pouv_habil_signataire:"",
        piece_admin:"",
        reg_com:"",
        attest_banc:"",
        formul_propo_tech:"",
        fiche_rsgnt_cand:"",
        fiche_rsgnt_mbre_group:"",
        atcdent_marche_non_exe:"",
        org_travau_site:"",
        meth_real_travau:"",
        prog_mobilisation:"",
        capacite_financiere:"",
        caa_moyen_ac_entre:"",
        capacite_tech_exp:"",
        mt_offre_financiere:"",
        numero_dossier:"",
        entreprise_id:"",
        capacite_financement:"",
      },
      editDossierCadidature:{
        secteur_activite_id:"",
        type_candidat_id:"",
        numero_cc:"",
        type_candidat:"",
        nom_cand:"",
        prenom_cand:"",
        date_nais_cand:"",
        telephone_cand:"",
        adresse_post:"",
        situation_geo:"",
        email_cand:"",
        procedure_passation_id:"",
        appel_offre_id:"",
        accord_group:"",
        cautionnement_prov:"",
        pouv_habil_signataire:"",
        piece_admin:"",
        reg_com:"",
        attest_banc:"",
        formul_propo_tech:"",
        fiche_rsgnt_cand:"",
        fiche_rsgnt_mbre_group:"",
        atcdent_marche_non_exe:"",
        org_travau_site:"",
        meth_real_travau:"",
        prog_mobilisation:"",
        capacite_financiere:"",
        caa_moyen_ac_entre:"",
        capacite_tech_exp:"",
        mt_offre_financiere:"",
        numero_dossier:"",
        marche_id:"",
        capacite_financement:"",
      },
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
      },
      formEffetFinancier:{
        code_act:"",
        libelle_act:"",
        reference_act:"",
        objet_act:"",
        incidence_financiere:"",
        montant_act:"",
        date_attributaire:"",
        date_reception:"",
        duree:"",
        date_fin_exe:"",
        date_odre_service:"",
        autorite_approbation:"",
        date_approbation:"",
        livrable_id:"",
        text_juridique_id:"",
        type_act_effet_id:"",
        analyse_dossier_id:"",
        entreprise_id:"",
        marche_id:"",
        numero_marche:"",
        ano_bailleur_id:""
      },
      formDataFacture:{
        prix_propose_ttc:"",
        prix_propose_ht:"",
        prix_unitaire:"",
        montant_facture:"",
        ligne_budgetaire:"",
        objet_facture:"",
        id_type_facture:"",
        code_acte_depense:"",
        numero_facture:"",
      },
      editActeEffetFinancier:{
        code_act:"",
        libelle_act:"",
        reference_act:"",
        objet_act:"",
        incidence_financiere:"",
        montant_act:"",
        date_attributaire:"",
        date_reception:"",
        duree:"",
        date_fin_exe:"",
        date_odre_service:"",
        autorite_approbation:"",
        date_approbation:"",
        livrable_id:"",
        text_juridique_id:"",
        type_act_effet_id:"",
        analyse_dossier_id:"",
        entreprise_id:"",
        marche_id:"",
        numero_marche:"",
        ano_bailleur_id:""
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
      formDemande:{
        date_demande:"",
        ref_marche:"",
        num_courrier:"",
        analyse_dossier_id:"",
        proce_verbal_jugement_offre_id:""
      },
      editMarche: {
        id:"",
        attribue:"",
        numero_marche:""
      },
      editDemandeAno:{
        date_demande:"",
        ref_marche:"",
        num_courrier:""
      },
      formObservation:{
        date_avis_baill:"",
        avis_bail:"",
        observations_bailleur:"",
        ano_dmp_bailleur_id:"",
        document_procedure_id:""
      },
      editObservation1:{
        date_avis_baill:"",
        avis_bail:"",
        observations_bailleur:"",
        ano_dmp_bailleur_id:"",
        document_procedure_id:""
      },
      edite_membre_cojo:"",
      formAno:{
        date_ano_dmp:"",
        observations_bailleur:"",
        avis_bail:"",
        ref_ano_dmp:"",
        numero_courie:"",
        appel_offre_id:"",
        analyse_dmp_id:""
      },
      avis_dmp:"",
      editAno:{
        date_ano_dmp:"",
        ref_ano_dmp:"",
        numero_courie:""
      },
      editDemamnde:{
        date_demande:"",
        ref_marche:"",
        num_courrier:""
      },
      formPv:{
        ref_pv:"",
        fichier_joint_pv:"",
      },
      editDossier:{
        type_candidat:"",
        nom_cand:"",
        prenom_cand:"",
        date_nais_cand:"",
        telephone_cand:"",
        adresse_post:"",
        situation_geo:"",
        email_cand:"",
        procedure_passation_id:"",
        appel_offre_id:"",
      },
      edite_ano_bailleur_dmp:"",
      edite_offre_technique:"",
      edite_offre_financiere:"",
      formData: {
        ref_appel:"",
        type_appel:"",
        financement:"",
        nom_bailleurs:"",
        date_emission:"",
        date_limite:"",
        objet_appel:"",
        imputation:"",
        marche_id:"",
      },
      formDataMembreCojo: {
        matricule:"",
        type_appel:"",
        nom_prenom:"",
        role:"",
        cojo_id:"",
      },
      edit_offre_technique_recupere:"",
      formLettre: {
        appel_offre_id:"",
        objet_lettre:"",
        date_lettre:"",
        ref_lettre:"",
        destination:"",
        date_cojo:""
      },
      edite_appel_offre: "",
      search: "",
      edite_lot:{
        numero_lot:"",
        libelle_lot:"",
        montant_lot:"",
        marche_id:"",
        appel_offre_id:"",
        //mode_passation_id:""
      },
      message_mandater:'',
      ischniqueFinancier:false,
      namePDF: "",
      fichierPDF: "",
      imagePDF:"",
      selectedFile:"",
      resultaAnalysePv:[],
      resultaFinalCandidat:[],
      entreprise_vainqueur:"",
      registrecc_vainqueur:"",
      identreprise_vainqueur:"",
      message_setion_vainqueur:"",
      info_avis_bailleur:"",
      namePDFDemandeAno: "",
      fichierPDFDemandeAno: "",
      imagePDFDemandeAno:"",
      selectedFileDemandeAno:"",
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

  },
  methods:{

  }
}
</script>

<style scoped>

</style>