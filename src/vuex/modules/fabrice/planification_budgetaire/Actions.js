import axios from "../../fabrice/planification_budgetaire/urls/api";
import { asyncLoading } from 'vuejs-loading-plugin'
var housecall = require("housecall");
var queue = housecall({ concurrency: 2, cooldown: 1000 });



//////////////////////////*debut action immobilisation*/////////////////////////////

// afficher
export function getAllBudgetGeneral({ commit }) {
  queue.push(() => {
    axios
      .get("/liste_budgetGeneral")
      .then(response => {
        commit("GET_ALL_BUDGET_GENERAL", response.data);
      })
      .catch(error => console.log(error));
  });
}

// ajouter
export function ajouterBudgetGeneral({ commit }, formData) {
  asyncLoading(axios.post("/ajouter_budgetGeneral", formData)).then(response => {
    if (response.status == 201) {
      commit("AJOUTER_BUDGET_GENERAL", response.data);
      this.$app.$notify({
        title: 'Success',
        text: 'Enregistrement Effectué avec Succès!',
        type: "success"
      })
    }
  });
}


// modifier
export function modifierBudgetGeneral({ commit }, nouveau) {
  asyncLoading(axios
    .put("/modifier_budgetGeneral/" + nouveau.id, {
      exercicebudget_id: nouveau.exercicebudget_id,
      gdnaturedepense_id: nouveau.gdnaturedepense_id,
      // section_id: nouveau.section_id,
      planprogramme_id: nouveau.planprogramme_id,
      // chapitre_id: nouveau.chapitre_id,
      // planfonctionnel_id: nouveau.planfonctionnel_id,
      planbudgetaire_id: nouveau.planbudgetaire_id,
      imputationbudgetaire: nouveau.imputationbudgetaire,
      sousfinancement_id: nouveau.sousfinancement_id,
      typefinancement_id: nouveau.typefinancement_id,
      dotation: nouveau.dotation,
      ua_id: nouveau.ua_id,
      date_jour: nouveau.date_jour,
      destination: nouveau.destination
      
    }))
 
    .then(response => {
      commit("MODIFIER_BUDGET_GENERAL", response.data);
      this.$app.$notify({
        title: 'Success',
        text: 'Modification Effectué avec Succès!',
        type: "success"
      })
    });
}
//supprimer
export function supprimerBudgetGeneral({ commit }, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit("SUPPRIMER_BUDGET_GENERAL", id);
      // // dialog.loading(false) // stops the proceed button's loader
      axios
        .delete("/supprimer_budgetGeneral/" + id)
        .then(() => dialog.close());
    });
}
// export function afficherUnSeulBudgetGeneral({ commit }, id) {
//   commit("GET_SEUL_IMMOBILISATION", id);

//   axios.get("/seul_immobilisation/" + id);
// }
/*fin action Immobilisation */
