
<template>
<div>
  <div class="widget-box" v-if="detail_dossier_candidature">

    <div class="widget-content nopadding">
      <table class="table table-bordered table-striped">
        <thead>
        <tr>
          <th>Numéro dossier</th>
          <!--<th>Type candidat</th>-->
          <th>Téléphone </th>
          <th>Adresse </th>
          <th>Situation géographique</th>
          <th>Email</th>
          <th>Meth reat travau</th>
          <th>Accord groupe</th>
          <th>Pauv habil signataire</th>
          <th>Caution</th>
          <th>Registre de commerce</th>
        </tr>
        </thead>

        <tr>
          <td>{{detail_dossier_candidature.numero_dossier || "Non renseigné"}}</td>
          <!--<td>{{afficheCandidat(detail_dossier_candidature.type_candidat_id) || "Non renseigne"}}</td>-->
          <td>{{detail_dossier_candidature.telephone_cand || "Non renseigné"}}</td>
          <td>{{detail_dossier_candidature.adresse_post || "Non renseigné"}}</td>
          <td>{{detail_dossier_candidature.situation_geo || "Non renseigné"}}</td>
          <td>{{detail_dossier_candidature.email_cand || "Non renseigné"}}</td>
          <td>{{detail_dossier_candidature.meth_real_travau || "Non renseigné"}}</td>
          <td>{{detail_dossier_candidature.accord_group || "Non renseigné"}}</td>
          <td>{{detail_dossier_candidature.pouv_habil_signataire || "Non renseigné"}}</td>
          <td>{{detail_dossier_candidature.cautionnement_prov || "Non renseigné"}}</td>
          <td>{{detail_dossier_candidature.reg_com || "Non renseigné"}}</td>

        </tr>


      </table>
    </div>
  </div>
</div>
</template>

<script>
export default {
name: "ListeCandidat",
  props:["detail_dossier_candidature"],
  created() {
  console.log(this.detail_dossier_candidature)
  }
}
</script>

<style scoped>

</style>