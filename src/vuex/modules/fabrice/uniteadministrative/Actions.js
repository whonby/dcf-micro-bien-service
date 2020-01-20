import axios from "../../fabrice/uniteadministrative/urls/api";
import { asyncLoading } from 'vuejs-loading-plugin'
var housecall = require("housecall");
var queue = housecall({ concurrency: 2, cooldown: 1000 });



export function getAllBudgetGeneral({ commit }) {
  queue.push(() => {
    axios
      .get("/liste_Budget_General")
      .then(response => {
        commit("GET_ALL_BUDGET_GENERAL", response.data);
      })
      .catch(error => console.log(error));
  });
}

// ajouter type texte
export function ajouterBudgetGeneral({ commit, dispatch }, nouveau) {
  asyncLoading(axios
    .post("/ajouter_Budget_General", {
      exercicebudget_id: nouveau.exercicebudget_id,
      gdenature_id: nouveau.gdenature_id,
      program_id: nouveau.program_id,
      typeua_id: nouveau.typeua_id,
      ua_id: nouveau.ua_id,
      section_id: nouveau.section_id,
      fonctionnel_id: nouveau.fonctionnel_id,
      economique_id: nouveau.economique_id,
      Dotation_Initiale: nouveau.Dotation_Initiale,
      version: nouveau.version,
      testgdenature: nouveau.testgdenature,
      codebudget: nouveau.codebudget,
      action_id: nouveau.action_id,
      activite_id: nouveau.activite_id
    }))

    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_BUDGET_GENERAL", response.data);
        dispatch('getAllBudgetGeneral')
        dispatch('getAllUniteAdministrative')
        this.$app.$notify({
          title: 'Success',
          text: 'Enregistrement Effectué avec Succès!',
          type: "success"
        })
      }
    });
}

// modifier
export function modifierBudgetGeneral({ commit, dispatch}, nouveau) {
  asyncLoading(axios
    .put("/modifier_Budget_General/" + nouveau.id, {
      exercicebudget_id: nouveau.exercicebudget_id,
      gdenature_id: nouveau.gdenature_id,
      program_id: nouveau.program_id,
      typeua_id: nouveau.typeua_id,
      ua_id: nouveau.ua_id,
      section_id: nouveau.section_id,
      fonctionnel_id: nouveau.fonctionnel_id,
      economique_id: nouveau.economique_id,
      Dotation_Initiale: nouveau.Dotation_Initiale,
      version: nouveau.version,
      codebudget: nouveau.codebudget,
      action_id: nouveau.action_id,
      activite_id: nouveau.activite_id,
      testgdenature: nouveau.testgdenature,
    }))
    .then(response => {
      commit("MODIFIER_BUDGET_GENERAL", response.data);
      dispatch('getAllBudgetGeneral')
      dispatch('getAllUniteAdministrative')
      this.$app.$notify({
        title: 'Success',
        text: 'Modification Effectué avec Succès!',
        type: "success"
      })
    });
}
//supprimer
export function supprimerBudgetGeneral({ commit, dispatch}, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit("SUPPRIMER_BUDGET_GENERAL", id);
      dispatch('getAllBudgetGeneral')
      dispatch('getAllUniteAdministrative')
      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete("/supprimer_Budget_General/" + id).then(() => dialog.close());
    });
}














//////////////////////////*debut action type texte */////////////////////////////

// afficher liste des type de textes
export function getAllTypeTextes({ commit }) {
  queue.push(() => {
    axios
      .get("/liste_type_text")
      .then(response => {
        commit("GET_ALL_TYPES_TEXTES", response.data);
      })
      .catch(error => console.log(error));
  });
}

// ajouter type texte
export function ajouterTypeTexte({ commit }, nouveau) {
  asyncLoading(axios
    .post("/ajouter_type_text", {
      code: nouveau.code,
      libelle: nouveau.libelle
    }))
  
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_TYPE_TEXTE", response.data);
        this.$app.$notify({
          title: 'Success',
          text: 'Enregistrement Effectué avec Succès!',
          type: "success"
        })
      }
    });
}

// modifier
export function modifierTypeTexte({ commit }, nouveau) {
  asyncLoading(axios
    .put("/modifier_type_text/" + nouveau.id, {
      code: nouveau.code,
      libelle: nouveau.libelle
    }))
    .then(response => {
      commit("MODIFIER_TYPE_TEXTES", response.data);
      this.$app.$notify({
        title: 'Success',
        text: 'Modification Effectué avec Succès!',
        type: "success"
      })
    });
}
//supprimer
export function supprimerTypeTexte({ commit }, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit("SUPPRIMER_TYPE_TEXTE", id);
      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete("/supprimer_typetext/" + id).then(() => dialog.close());
    });
}

/*fin action type texte */

////////////////////////////////*debut action Unite administrative*//////////////////////////////

// afficher liste des Unite administrative
export function getAllUniteAdministrative({ commit }) {
  queue.push(() => {
    axios
      .get("/liste_unite_administrative")
      .then(response => {
        commit("GET_ALL_UNITE_ADMINISTRATIVE", response.data);
      })
      .catch(error => console.log(error));
  });
}
// ajouter Unite administrative
export function ajouterUniteAdministrative({ commit, dispatch}, nouveau) {
  asyncLoading(axios
    .post("/ajouter_unite_administrative", {
      type_ua_id: nouveau.type_ua_id,
      section_id: nouveau.section_id,
      nature_section_id: nouveau.nature_section_id,
      servicegest_id: nouveau.servicegest_id,
      localisationgeo_id: nouveau.localisationgeo_id,
      code: nouveau.code,
      libelle: nouveau.libelle,
      date_creation: nouveau.date_creation,
      code_ua: nouveau.code_ua
    }))
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_UNITE_ADMINISTRATIVE", response.data);
        dispatch('getAllUniteAdministrative')
        this.$app.$notify({
          title: 'Success',
          text: 'Enregistrement Effectué avec Succès!',
          type: "success"
        })
      }
    });
}
// modifier Unite administrative
export function modifierUniteAdministrative({ commit, dispatch }, nouveau) {
  asyncLoading(
    axios.put("/modifier_unite_administrative/" + nouveau.id, {
      type_ua_id: nouveau.type_ua_id,
      section_id: nouveau.section_id,
      nature_section_id: nouveau.nature_section_id,
      servicegest_id: nouveau.servicegest_id,
      localisationgeo_id: nouveau.localisationgeo_id,
      code: nouveau.code,
      libelle: nouveau.libelle,
      date_creation: nouveau.date_creation,
      code_ua: nouveau.code_ua
    })
  ).then(response => {
    commit("MODIFIER_UNITE_ADMINISTRATIVE", response.data);
    dispatch('getAllUniteAdministrative')
    this.$app.$notify({
      title: "Success",
      text: "Modification Effectué avec Succès!",
      type: "success"
    });
  });
}
//supprimer Unite administrative
export function supprimerUniteAdministrative({ commit, dispatch }, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit("SUPPRIMER_UNITE_ADMINISTRATIVE", id);
      dispatch('getAllUniteAdministrative')
      // // dialog.loading(false) // stops the proceed button's loader
      axios
        .delete("/supprimer_unite_administrative/" + id)
        .then(() => dialog.close());
    });
}
/*fin action Unite administrative */

////////////////////////////////*debut action archivage note se service*//////////////////////////////

// afficher liste des archivage note se service

export function getAllArchivageDocument({ commit }) {
  queue.push(() => {
    axios
      .get("/liste_archivage_document")
      .then(response => {
        commit("GET_ALL_ARCHIVAGE_DOCUMENT", response.data);
      })
      .catch(error => console.log(error));
  });
}
// ajouter archivage note se service
export function ajouterArchivageDocument({ commit }, nouveau) {
  asyncLoading(axios
    .post("/ajouter_archivage_document", {
      reference: nouveau.reference,
      uniteadministrative_id: nouveau.uniteadministrative_id,
      typetexte_id: nouveau.typetexte_id,
      fichier_join: nouveau.fichier_join,
      date_jours: nouveau.date_jours,
      // url_fichier_join: nouveau.url_fichier_join,
    }))
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_ARCHIVAGE_DOCUMENT", response.data);
      }
    });
}
// modifier archivage note se service
export function modifierArchivageDocument({ commit }, nouveau) {
  asyncLoading(axios
    .put("/modifier_archivage_document/" + nouveau.id, {
      reference: nouveau.reference,
      uniteadministrative_id: nouveau.uniteadministrative_id,
      typetexte_id: nouveau.typetexte_id,
      fichier_join: nouveau.fichier_join,
      date_jours: nouveau.date_jours
    }))
    .then(response => {
      commit("MODIFIER_ARCHIVAGE_DOCUMENT", response.data);
      this.$app.$notify({
        title: 'Success',
        text: 'Modification Effectué avec Succès!',
        type: "success"
      })
    });
}
//supprimer archivage note se service

export function supprimerArchivageDocument({ commit }, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit("SUPPRIMER_ARCHIVAGE_DOCUMENT", id);
      // // dialog.loading(false) // stops the proceed button's loader
      axios
        .delete("/supprimer_archivage_document/" + id)
        .then(() => dialog.close());
    });
}
// afficher liste des archivage note se service
/*fin action archivage note se service */
