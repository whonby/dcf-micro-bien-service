import axios from "../../../../request/ua";
import { asyncLoading } from 'vuejs-loading-plugin'
var housecall = require("housecall");
var queue = housecall({ concurrency: 2, cooldown: 1000 });


export function getAllHistoriqueBudgetGeneral({ commit }) {
  queue.push(() => {
    axios
      .get("/histo_liste_Budget_General")
      .then(response => {
        commit("GET_ALL_HISTORIQUE_BUDGET_GENERAL", response.data);
      })
      .catch(error => console.log(error));
  });
}

// ajouter type texte
export function ajouterHistoriqueBudgetGeneral({ commit, dispatch }, nouveau) {
  asyncLoading(axios
    .post("/histo_ajouter_Budget_General", {
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
        commit("AJOUTER_HISTORIQUE_BUDGET_GENERAL", response.data);
        dispatch('getAllHistoriqueBudgetGeneral')
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
export function modifierHistoriqueBudgetGeneral({ commit, dispatch }, nouveau) {
  asyncLoading(axios
    .put("/histo_modifier_Budget_General/" + nouveau.id, {
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
      commit("MODIFIER_HISTORIQUE_BUDGET_GENERAL", response.data);
      dispatch('getAllHistoriqueBudgetGeneral')
      dispatch('getAllUniteAdministrative')
      this.$app.$notify({
        title: 'Success',
        text: 'Modification Effectué avec Succès!',
        type: "success"
      })
    });
}
//supprimer
export function supprimerHistoriqueBudgetGeneral({ commit, dispatch }, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit("SUPPRIMER_HISTORIQUE_BUDGET_GENERAL", id);
      dispatch('getAllHistoriqueBudgetGeneral')
      dispatch('getAllUniteAdministrative')
      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete("/histo_supprimer_Budget_General/" + id).then(() => dialog.close());
    });
}



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
        dispatch('getAllHistoriqueBudgetGeneral')
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
// export function ajouterUniteAdministrative({ commit, dispatch}, nouveau) {
//   asyncLoading(axios
//     .post("/ajouter_unite_administrative", {
//       type_ua_id: nouveau.type_ua_id,
//       section_id: nouveau.section_id,
//       nature_section_id: nouveau.nature_section_id,
//       servicegest_id: nouveau.servicegest_id,
//       localisationgeo_id: nouveau.localisationgeo_id,
//       code: nouveau.code,
//       libelle: nouveau.libelle,
//       date_creation: nouveau.date_creation,
//       code_ua: nouveau.code_ua
//     }))
//     .then(response => {
//       if (response.status == 201) {
//         commit("AJOUTER_UNITE_ADMINISTRATIVE", response.data);
//         dispatch('getAllUniteAdministrative')
//         this.$app.$notify({
//           title: 'Success',
//           text: 'Enregistrement Effectué avec Succès!',
//           type: "success"
//         })
//       }
//     });
// }

export  function ajouterUniteAdministrative({commit,dispatch}, nouveauObjet){
  this.$app.$loading(true)
  axios.post('/ajouter_unite_administrative', nouveauObjet ).then(res => {
      this.$app.$notify({
          title: 'success',
          text: 'Enregistrement effectuer',
          type:"success"
      });
      commit('AJOUTER_UNITE_ADMINISTRATIVE', res.data)
      dispatch('getAllUniteAdministrative')
      dispatch('getAllUniteAdministrative')
      dispatch('getAllUniteAdministrative')
      this.$app.$loading(false)
  }).catch(error =>{
      console.log(error)
      this.$app.$loading(false)
      this.$app.$notify({
          title: 'Erreur',
          text: "Ce code existe déja",
          type:"error"
      });
  })
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




export function getAllUniteZone({ commit }) {
  queue.push(() => {
    axios
      .get("/listeUniteZone")
      .then(response => {
        commit("GET_ALL_UNITE_ZONE", response.data);
      })
      .catch(error => console.log(error));
  });
}

// ajouter type texte
export function ajouterUniteZone({ commit, dispatch }, nouveau) {
  asyncLoading(axios
    .post("/ajouterUniteZone", {
      id_zone_geographique: nouveau.id_zone_geographique,
      id_unite_administrative: nouveau.id_unite_administrative,
      libelle: nouveau.libelle,
      	longitude: nouveau.longitude,
      latitude: nouveau.latitude,
      telephone_cel: nouveau.telephone_cel,
      adresse_postale: nouveau.adresse_postale,
      telephone_fixe: nouveau.telephone_fixe,
      description_localisation: nouveau.description_localisation,
      quartier: nouveau.quartier,
      
    }))

    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_UNITE_ZONE", response.data);
        dispatch('getAllUniteZone')
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
export function modifierUniteZone({ commit, dispatch }, nouveau) {
  asyncLoading(axios
    .put("/modifierUniteZone/" + nouveau.id, {
      id_zone_geographique: nouveau.id_zone_geographique,
      id_unite_administrative: nouveau.id_unite_administrative,
      libelle: nouveau.libelle,
      longitude: nouveau.longitude,
      latitude: nouveau.latitude,
      telephone_cel: nouveau.telephone_cel,
      adresse_postale: nouveau.adresse_postale,
      telephone_fixe: nouveau.telephone_fixe,
      description_localisation: nouveau.description_localisation,
      quartier: nouveau.quartier,
    }))
    .then(response => {
      commit("MODIFIER_UNITE_ZONE", response.data);
      dispatch('getAllUniteZone')
      dispatch('getAllUniteAdministrative')
      this.$app.$notify({
        title: 'Success',
        text: 'Modification Effectué avec Succès!',
        type: "success"
      })
    });
}
//supprimer
export function supprimerUniteZone({ commit, dispatch }, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit("SUPPRIMER_UNITE_ZONE", id);
      dispatch('getAllUniteZone')
      dispatch('getAllUniteAdministrative')
      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete("/supprimerUniteZone/" + id).then(() => dialog.close());
    });
}

export function getAllTransfert({ commit }) {
  queue.push(() => {
    axios
      .get("/listeTransfert")
      .then(response => {
        commit("GET_ALL_TRANSFERT", response.data);
      })
      .catch(error => console.log(error));
  });
}

// ajouter type texte
export function ajouterTransfert({ commit, dispatch }, nouveau) {
  asyncLoading(axios
    .post("/ajouterTransfert", {
      	num_transfert: nouveau.num_transfert,
      acteurdepense_id: nouveau.acteurdepense_id,
      grande_natrue_id:nouveau.grande_natrue_id,
      inputation_id:nouveau.inputation_id,
      unitezone_id: nouveau.unitezone_id,
      montant_total_contrat: nouveau.montant_total_contrat,
      montant_transfert: nouveau.montant_transfert,
      fonction_id: nouveau.fonction_id,
      montant_restant: nouveau.montant_restant,
      ligne_budgetaire_id: nouveau.ligne_budgetaire_id,
      grandnatire_id: nouveau.grandnatire_id,
      ua_id: nouveau.ua_id,
      date_jours: nouveau.date_jours,
      typefinancement_id:nouveau.typefinancement_id,
      exerciceencours: nouveau.exerciceencours

    }))

    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_TRANSFERT", response.data);
        dispatch('getAllTransfert')
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
export function modifierTransfert({ commit, dispatch }, elementModifie) {
  asyncLoading(axios
    .put("/modifierTransfert/" + elementModifie.id, {
      	num_transfert: elementModifie.num_transfert,
      acteurdepense_id: elementModifie.acteurdepense_id,
      grande_natrue_id:elementModifie.grande_natrue_id,
      inputation_id:elementModifie.inputation_id,
      unitezone_id: elementModifie.unitezone_id,
      montant_total_contrat: elementModifie.montant_total_contrat,
      montant_transfert: elementModifie.montant_transfert,
      fonction_id: elementModifie.fonction_id,
      montant_restant: elementModifie.montant_restant,
      ligne_budgetaire_id:elementModifie.ligne_budgetaire_id,
      grandnatire_id:elementModifie.grandnatire_id,
      ua_id:elementModifie.ua_id,
        	decision_cf:elementModifie.decision_cf,
      motif:elementModifie.motif,
      observation:elementModifie.observation,
      date_motif:elementModifie.date_motif,
      date_jours:elementModifie.date_jours, 
      delaitraitement:elementModifie.delaitraitement,
      typefinancement_id:elementModifie.typefinancement_id,
      exerciceencours:elementModifie.exerciceencours
    }))
    .then(response => {
      commit("MODIFIER_TRANSFERT", response.data);
      dispatch('getAllTransfert')
      dispatch('getAllUniteAdministrative')
      this.$app.$notify({
        title: 'Success',
        text: 'Modification Effectué avec Succès!',
        type: "success"
      })
    });
}
//supprimer
export function supprimerTransfert({ commit, dispatch }, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit("SUPPRIMER_TRANSFERT", id);
      dispatch('getAllTransfert')
      dispatch('getAllUniteAdministrative')
      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete("/supprimerTransfert/" + id).then(() => dialog.close());
    });
}





export function getAllHistoriqueTransfert({ commit }) {
  queue.push(() => {
    axios
      .get("/listeHistoTransfert")
      .then(response => {
        commit("GET_ALL_HISTOTRANSFERT", response.data);
      })
      .catch(error => console.log(error));
  });
}

// ajouter type texte
export function ajouterHistoriqueTransfert({ commit}, nouveau) {
  asyncLoading(axios
    .post("/ajouterHistoTransfert", {
      num_transfert: nouveau.num_transfert,
      acteurdepense_id: nouveau.acteurdepense_id,
      unitezone_id: nouveau.unitezone_id,
      montant_total_contrat: nouveau.montant_total_contrat,
      montant_transfert: nouveau.montant_transfert,
      fonction_id: nouveau.fonction_id,
      montant_restant: nouveau.montant_restant,
      ligne_budgetaire_id: nouveau.ligne_budgetaire_id,
      grandnatire_id: nouveau.grandnatire_id,
      ua_id: nouveau.ua_id,
      decision_cf: nouveau.decision_cf,
      motif: nouveau.motif,
      observation: nouveau.observation,
      date_motif: nouveau.date_motif,
      date_jours: nouveau.date_jours,
      delaitraitement: nouveau.delaitraitement,
      aj_transfert: nouveau.aj_transfert,
      //  maj_transfert: nouveau.maj_transfert
      

    }))

    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_HISTOTRANSFERT", response.data);
       

        // this.$app.$notify({
        //   title: 'Success',
        //   text: 'Enregistrement Effectué avec Succès!',
        //   type: "success"
        // })
      }
    });
}

// modifier
export function modifierHistoriqueTransfert({ commit}, nouveau) {
  asyncLoading(axios
    .put("/modifierHistoTransfert/" + nouveau.id, {
      num_transfert: nouveau.num_transfert,
      acteurdepense_id: nouveau.acteurdepense_id,
      unitezone_id: nouveau.unitezone_id,
      montant_total_contrat: nouveau.montant_total_contrat,
      montant_transfert: nouveau.montant_transfert,
      fonction_id: nouveau.fonction_id,
      montant_restant: nouveau.montant_restant,
      ligne_budgetaire_id: nouveau.ligne_budgetaire_id,
      grandnatire_id: nouveau.grandnatire_id,
      ua_id: nouveau.ua_id,
      decision_cf: nouveau.decision_cf,
      motif: nouveau.motif,
      observation: nouveau.observation,
      date_motif: nouveau.date_motif,
      date_jours: nouveau.date_jours,
      delaitraitement: nouveau.delaitraitement,
      aj_transfert: nouveau.aj_transfert,
      // maj_transfert: nouveau.maj_transfert
    }))
    .then(response => {
      commit("MODIFIER_HISTOTRANSFERT", response.data);
    
      this.$app.$notify({
        title: 'Success',
        text: 'Modification Effectué avec Succès!',
        type: "success"
      })
    });
}
//supprimer
export function supprimerHistoriqueTransfert({ commit}, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit("SUPPRIMER_HISTOTRANSFERT", id);
      
      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete("/supprimerHistoTransfert/" + id).then(() => dialog.close());
    });
}












export function getAllDirection({ commit }) {
  queue.push(() => {
    axios
      .get("/listeDirectionUa")
      .then(response => {
        commit("GET_ALL_DIRECTION", response.data);
      })
      .catch(error => console.log(error));
  });
}

// ajouter type texte
export function ajouterDirection({ commit, dispatch }, nouveau) {
  asyncLoading(axios
    .post("/ajouterDirectionUa", {
      	d_ua_id: nouveau.d_ua_id,
    
      libelle: nouveau.libelle,
     
      

    }))

    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_DIRECTION", response.data);
        dispatch('getAllDirection')
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
export function modifierDirection({ commit, dispatch }, nouveau) {
  asyncLoading(axios
    .put("/modifierDirectionUa/" + nouveau.id, {
      d_ua_id: nouveau.d_ua_id,

      libelle: nouveau.libelle,
    }))
    .then(response => {
      commit("MODIFIER_DIRECTION", response.data);
      dispatch('getAllDirection')
      dispatch('getAllUniteAdministrative')
      this.$app.$notify({
        title: 'Success',
        text: 'Modification Effectué avec Succès!',
        type: "success"
      })
    });
}
//supprimer
export function supprimerDirection({ commit, dispatch }, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit("SUPPRIMER_DIRECTION", id);
      dispatch('getAllDirection')
      dispatch('getAllUniteAdministrative')
      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete("/supprimerDirectionUa/" + id).then(() => dialog.close());
    });
}






export function getAllServiceua({ commit }) {
  queue.push(() => {
    axios
      .get("/listeServiceUa")
      .then(response => {
        commit("GET_ALL_SERVICE", response.data);
      })
      .catch(error => console.log(error));
  });
}

// ajouter type texte
export function ajouterService({ commit, dispatch }, nouveau) {
  asyncLoading(axios
    .post("/ajouterServiceUa", {
      s_ua_id: nouveau.s_ua_id,
      // direction_id	: nouveau.direction_id	,
      serviceua_id: nouveau.serviceua_id,
      exercicebudget: nouveau.exercicebudget,
      normeequipement : nouveau.normeequipement,
      historiqueequipement:nouveau.historiqueequipement,
      montantequipement:nouveau.montantequipement

    }))

    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_SERVICE", response.data);
        dispatch('getAllUniteAdministrative')
        dispatch('getAllServiceua')
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
export function modifierService({ commit, dispatch }, nouveau) {
  asyncLoading(axios
    .put("/modifierServiceUa/" + nouveau.id, {
      s_ua_id: nouveau.s_ua_id,
      exercicebudget: nouveau.exercicebudget,
      serviceua_id: nouveau.serviceua_id,
      normeequipement : nouveau.normeequipement,
      historiqueequipement:nouveau.historiqueequipement,
      montantequipement:nouveau.montantequipement
    }))
    .then(response => {
      commit("MODIFIER_SERVICE", response.data);
      dispatch('getAllUniteAdministrative')
      dispatch('getAllServiceua')
      dispatch('getAllUniteAdministrative')
      this.$app.$notify({
        title: 'Success',
        text: 'Modification Effectué avec Succès!',
        type: "success"
      })
    });
}
//supprimer
export function supprimerService({ commit, dispatch }, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit("SUPPRIMER_SERVICE", id);
      dispatch('getAllUniteAdministrative')
      dispatch('getAllServiceua')
      dispatch('getAllUniteAdministrative')
      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete("/supprimerServiceUa/" + id).then(() => dialog.close());
    });
}






export function getAllFonction({ commit }) {
  queue.push(() => {
    axios
      .get("/listeFonctionUa")
      .then(response => {
        commit("GET_ALL_FONCTION", response.data);
      })
      .catch(error => console.log(error));
  });
}

// ajouter type texte
export function ajouterFonction({ commit, dispatch }, nouveau) {
  asyncLoading(axios
    .post("/ajouterFonctionUa", {
      f_ua_id: nouveau.f_ua_id,
      service_id: nouveau.service_id,
      fonction_id: nouveau.fonction_id,
      // direction_id: nouveau.direction_id


    }))

    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_FONCTION", response.data);
        dispatch('getAllServiceua')
        dispatch('getAllFonction')
        

        this.$app.$notify({
          title: 'Success',
          text: 'Enregistrement Effectué avec Succès!',
          type: "success"
        })
      }
    });
}

// modifier
export function modifierFonction({ commit, dispatch }, nouveau) {
  asyncLoading(axios
    .put("/modifierFonctionUa/" + nouveau.id, {
      f_ua_id: nouveau.f_ua_id,
      service_id: nouveau.service_id,
      fonction_id: nouveau.fonction_id,
      // direction_id: nouveau.direction_id
    }))
    .then(response => {
      commit("MODIFIER_FONCTION", response.data);
      dispatch('getAllServiceua')
      dispatch('getAllFonction')
      this.$app.$notify({
        title: 'Success',
        text: 'Modification Effectué avec Succès!',
        type: "success"
      })
    });
}
//supprimer
export function supprimerFonction({ commit, dispatch }, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit("SUPPRIMER_FONCTION", id);
      dispatch('getAllServiceua')
      dispatch('getAllFonction')
      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete("/supprimerFonctionUa/" + id).then(() => dialog.close());
    });
}

export function importBudget({ commit }, element_modifie,config) {
    return asyncLoading(axios
        .post("/importBudge",element_modifie,config))
        .then(response => {
         /*   if (response.status == 201) {

            }*/
            commit("IMPORT_BUDGET", response.data);
        });
}


export function getBudgeChager({ commit }) {
    queue.push(() => {
        axios
            .get("/budgetCharger")
            .then(response => {
                commit("GET_BUDGET_CHARGE", response.data);
            })
            .catch(error => console.log(error));
    });
}

// ajouter type texte
export function ajouterBudgetCharge({ commit, dispatch }, nouveau) {
    return asyncLoading(axios
        .post("/budgetCharger",nouveau))

        .then(response => {
            commit("AJOUTER_BUDGET_CHARGE", response.data);
            dispatch('getAllBudgetGeneral')
            dispatch('getAllUniteAdministrative')
            dispatch('getBudgeChager')
            this.$app.$notify({
                title: 'Success',
                text: 'Enregistrement Effectué avec Succès!',
                type: "success"
            })
        });
}








export function getLigneExempter({ commit }) {
    queue.push(() => {
        axios
            .get("/ligne_exemptes")
            .then(response => {
                commit("GET_LIGNE_EXEMPTER", response.data);
            })
            .catch(error => console.log(error));
    });
}

// ajouter type texte
export function ajouterLigneExempter({ commit }, nouveau) {
    asyncLoading(axios
        .post("/ligne_exemptes", nouveau))
        .then(response => {
            if (response.status == 201) {
                commit("AJOUTER_LIGNE_EXEMPTER", response.data);

                this.$app.$notify({
                    title: 'Success',
                    text: 'Enregistrement Effectué avec Succès!',
                    type: "success"
                })
            }
        });
}

// modifier
export function modifierLigneExempter({ commit }, nouveau) {
    asyncLoading(axios
        .put("/ligne_exemptes/" + nouveau.id,nouveau))
        .then(response => {
            commit("MODIFIER_LIGNE_EXEMPTER", response.data);
            this.$app.$notify({
                title: 'Success',
                text: 'Modification Effectué avec Succès!',
                type: "success"
            })
        });
}
//supprimer
export function supprimerLigneExempter({ commit }, id) {
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit("SUPPRIMER_LIGNE_EXEMPTER", id);
            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete("/ligne_exemptes/" + id).then(() => dialog.close());
        });
}







export function getAllDecompteFacture({ commit }) {
  queue.push(() => {
    axios
      .get("/listedecomptefacture")
      .then(response => {
        commit("GET_ALL_DECOMPTE_FACTURE", response.data);
      })
      .catch(error => console.log(error));
  });
}


// ajouter type texte
export function ajouterDecompteFacture({ commit }, nouveau) {
  asyncLoading(axios
    .post("/ajouterdecomptefacture", nouveau)).then(response => {
      if (response.status == 201) {
        commit("AJOUTER_DECOMPTE_FACTURE", response.data);

      }
    }).catch(error => console.log(error))
}










export function getAllRealiteServiceFait({ commit }) {
  queue.push(() => {
    axios
      .get("/listeRealiteFait")
      .then(response => {
        commit("GET_ALL_REALITE_SERVICE_FAIT", response.data);
      })
      .catch(error => console.log(error));
  });
}

// ajouter type texte
export function ajouterRealiteServiceFait({ commit }, nouveau) {
  asyncLoading(axios
    .post("/ajouterRealiteFait", nouveau)).then(response => {
      if (response.status == 201) {
        commit("AJOUTER_REALITE_SERVICE_FAIT", response.data);
       
      }
    }).catch(error => console.log(error))
}

// modifier
export function modifierRealiteServiceFait({ commit }, nouveau) {
  asyncLoading(axios.put("/modifierRealiteFait/" + nouveau.id , {
  
  
      	section_id: nouveau.section_id,
      marche_id: nouveau.marche_id,
      fournisseur_id: nouveau.fournisseur_id,
    facture_id: nouveau.facture_id,
    ua_id: nouveau.ua_id,
    decision_service_beneficiaire: nouveau.decision_service_beneficiaire,
    date_service_beneficiaire: nouveau.date_service_beneficiaire,
    observation_service_beneficiaire: nouveau.observation_service_beneficiaire,
    nom_service_beneficiaire: nouveau.nom_service_beneficiaire,
    decision_controleur_financier: nouveau.decision_controleur_financier,
    date_controleur_financier: nouveau.date_controleur_financier,
    observation_controleur_financier: nouveau.observation_controleur_financier,
    nom_controleur_financier: nouveau.nom_controleur_financier,
    	montant: nouveau.	montant,
      exercice_budget: nouveau.	exercice_budget,
    engagement_id: nouveau.engagement_id,
    marchetype: nouveau.marchetype,
    motif_controleur: nouveau.motif_controleur
    }
  
  )).then(response => {
      commit("MODIFIER_REALITE_SERVICE_FAIT", response.data);
    
      this.$app.$notify({
        title: 'Success',
        text: 'Modification Effectué avec Succès!',
        type: "success"
      })
    });
}

//supprimer
export function supprimerRealiteServiceFait({ commit}, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit("SUPPRIMER_REALITE_SERVICE_FAIT", id);
    
      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete("/supprimerRealiteFait/" + id).then(() => dialog.close());
    });
}



export function getAllLiquidation({ commit }) {
  queue.push(() => {
    axios
      .get("/listeLiquidation")
      .then(response => {
        commit("GET_ALL_LIQUIDATION", response.data);
      })
      .catch(error => console.log(error));
  });
}

// ajouter type texte
export function ajouterLiquidation({ commit }, nouveau) {
  asyncLoading(axios
    .post("/ajouterLiquidation", nouveau)).then(response => {
      if (response.status == 201) {
        commit("AJOUTER_LIQUIDATION", response.data);
        
      }
    }).catch(error => console.log(error))
}

// modifier
export function modifierLiquidation({ commit, dispatch}, nouveau) {
  asyncLoading(axios
    .put("/modifierLiquidation/" + nouveau.id, {
      
      numero_bon_manuel: nouveau.numero_bon_manuel,
      numero_demande: nouveau.numero_demande,
      exo_id: nouveau.exo_id,
      imputation_budgetaire: nouveau.imputation_budgetaire,
      section_id: nouveau.section_id,
      programme_id: nouveau.programme_id,
      action_id: nouveau.action_id,
      activite_id: nouveau.activite_id,
      ua_id: nouveau.ua_id,
      nature_depense_id: nouveau.nature_depense_id,
      plan_budgetaire_id: nouveau.plan_budgetaire_id,
      marche_id: nouveau.marche_id,
      mode_paiement_id: nouveau.mode_paiement_id,
      fournisseur_id: nouveau.fournisseur_id,
      egagement_id: nouveau.egagement_id,
      decision_emetteur: nouveau.decision_emetteur,
      nom_emetteur: nouveau.nom_emetteur,
      	date_emetteur: nouveau.date_emetteur,
      
      observation_emetteur: nouveau.observation_emetteur,
       decision_ordonnateur: nouveau.decision_ordonnateur,
      observation_ordonnateur: nouveau.observation_ordonnateur,
      nom_ordonnateur: nouveau.nom_ordonnateur,
      date_ordonnateur: nouveau.date_ordonnateur,

       decision_controleur_financier: nouveau.decision_controleur_financier,
      nom_controleur_financier: nouveau.nom_controleur_financier,
      date_controleur_financier: nouveau.date_controleur_financier,
      observation_controleur_financier: nouveau.observation_controleur_financier,
      marchetype: nouveau.marchetype,
      facture_id: nouveau.facture_id,
      motif_controleur_f: nouveau.motif_controleur_f
    })).then(response => {
      commit("MODIFIER_LIQUIDATION", response.data);
      dispatch('getAllLiquidation')
      this.$app.$notify({
        title: 'Success',
        text: 'Modification Effectué avec Succès!',
        type: "success"
      })
    });
}

//supprimer
export function supprimerLiquidation({ commit }, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit("SUPPRIMER_LIQUIDATION", id);

      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete("/supprimerLiquidation/" + id).then(() => dialog.close());
    });
}





export function getStructureOrganigrammeUa({ commit }) {
  queue.push(() => axios.get('/listeStructureOrganigramme').then(tony => {
    commit('GET_ALL_STRUCTURE_ORGANIGRAMME_UA', tony.data)
  }).catch(error => console.log(error)))

}

// ajouter plan fonctionnelle
// export function ajouterStructureOrganigrammeUa({ commit, dispatch }, objetAjout) {
//   asyncLoading(axios.post('/ajouterStructureOrganigramme', objetAjout)).then(res => {
//     commit('AJOUTER_STRUCTURE_ORGANIGRAMME_UA', res.data)
//     dispatch('getStructureOrganigrammeUa')
//     dispatch('getStructureOrganigrammeUa')
//     dispatch('getStructureOrganigrammeUa')
//     dispatch('getStructureOrganigrammeUa')
//     this.$app.$notify({
//       title: 'success ',
//       text: 'Enregistrement effectué avec success !',
//       type: "success"
//     })
//   }).catch(error => console.log(error))
// }


export function ajouterStructureOrganigrammeUa({ commit, dispatch }, nouveau) {
  asyncLoading(axios
    .post("/ajouterStructureOrganigramme", {
      ua_id: nouveau.ua_id,
      niveau: nouveau.niveau,
      libelle: nouveau.libelle,
      
      
    }))

    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_STRUCTURE_ORGANIGRAMME_UA", response.data);
        dispatch('getStructureOrganigrammeUa')
        dispatch('getAllUniteAdministrative')
       
        this.$app.$notify({
          title: 'Success',
          text: 'Enregistrement Effectué avec Succès!',
          type: "success"
        })
      }
    });
}
// modifier plan fonctionnelle

export function modifierStructureOrganigrammeUa({ commit, dispatch }, plan_fonctionnel) {
  asyncLoading(axios.put('/modifierStructureOrganigramme/' + plan_fonctionnel.id, {
    ua_id: plan_fonctionnel.ua_id,
    libelle: plan_fonctionnel.libelle,
   niveau:plan_fonctionnel.niveau
  })).then(res => {
    commit('MODIFIER_STRUCTURE_ORGANIGRAMME_UA', res.data)
    dispatch('getStructureOrganigrammeUa')
        dispatch('getAllUniteAdministrative')
    this.$app.$notify({
      title: 'success ',
      text: 'Modification effectué avec success !',
      type: "success"
    })
  }).catch(error => console.log(error))
}
// supprimer plan fonctionnelle
export function supprimerStructureOrganigrammeUa({ commit, dispatch }, id) {

  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit('SUPPRIMER_STRUCTURE_ORGANIGRAMME_UA', id)
      dispatch('getStructureOrganigrammeUa')
        dispatch('getAllUniteAdministrative')
      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete('/supprimerStructureOrganigramme/' + id).then(() => dialog.close())
    })
}

export function getAllBanqueUa({ commit }) {
  queue.push(() => {
    axios
      .get("/listeBanqueUa")
      .then(response => {
        commit("GET_ALL_BANQUE_UA", response.data);
      })
      .catch(error => console.log(error));
  });
}

// ajouter type texte
export function ajouterBanqueUa({ commit }, nouveau) {
  asyncLoading(axios
    .post("/ajouterBanqueUa", {

      date_ouverture_compte: nouveau.date_ouverture_compte,
      signataire_compte: nouveau.signataire_compte,
      nature_compte: nouveau.nature_compte,
      agence: nouveau.agence,
      situation_geographique_angence: nouveau.situation_geographique_angence,
      numero_agence: nouveau.numero_agence,
      telephone_agence: nouveau.telephone_agence,
      ua_id: nouveau.ua_id,
      banque_id: nouveau.banque_id,
      commune_id: nouveau.commune_id,
      ville_id: nouveau.ville_id,
      numero_compte: nouveau.numero_compte,
      pays_id: nouveau.pays_id,
      agence_id: nouveau.agence_id,
      banq_id: nouveau.banq_id,
      swift: nouveau.swift,
      rib: nouveau.rib,
      iban: nouveau.iban,
      clerib: nouveau.clerib,

    }))

    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_BANQUE_UA", response.data);
        this.$app.$notify({
          title: 'Success',
          text: 'Enregistrement Effectué avec Succès!',
          type: "success"
        })
      }
    });
}

// modifier
export function modifierBanqueUa({ commit }, nouveau) {
  asyncLoading(axios
    .put("/modifierBanqueUa/" + nouveau.id, {

      date_ouverture_compte: nouveau.date_ouverture_compte,
      signataire_compte: nouveau.signataire_compte,
      nature_compte: nouveau.nature_compte,
      agence: nouveau.agence,
      situation_geographique_angence: nouveau.situation_geographique_angence,
      numero_agence: nouveau.numero_agence,
      telephone_agence: nouveau.telephone_agence,
      ua_id: nouveau.ua_id,
      banque_id: nouveau.banque_id,
      commune_id: nouveau.commune_id,
      ville_id: nouveau.ville_id,
      numero_compte: nouveau.numero_compte,
      pays_id: nouveau.pays_id,
      agence_id: nouveau.agence_id,
      banq_id: nouveau.banq_id,
      swift: nouveau.swift,
      rib: nouveau.rib,
      iban: nouveau.iban,
      clerib: nouveau.clerib,
    }))
    .then(response => {
      commit("MODIFIER_BANQUE_UA", response.data);
      this.$app.$notify({
        title: 'Success',
        text: 'Modification Effectué avec Succès!',
        type: "success"
      })
    });
}
//supprimer
export function supprimerBanqueUa({ commit }, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit("SUPPRIMER_BANQUE_UA", id);
      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete("/supprimerBanqueUa/" + id).then(() => dialog.close());
    });
}





export function getAllBudgetEclate({ commit }) {
  queue.push(() => {
    axios
      .get("/budgetEclate")
      .then(response => {
        commit("GET_ALL_BUDGET_ECLATE", response.data);
      })
      .catch(error => console.log(error));
  });
}

// ajouter type texte
export function ajouterBudgetEclate({ commit, dispatch }, nouveau) {
  asyncLoading(axios
    .post("/budgetEclate", {
      annebudgetaire: nouveau.annebudgetaire,
      uniteadministrative_id: nouveau.	uniteadministrative_id,
      ligneeconomique_id: nouveau.ligneeconomique_id,
      grandenature_id: nouveau.grandenature_id,
      dotation: nouveau.dotation,
      
    }))

    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_BUDGET_ECLATE", response.data);
        dispatch('getAllBudgetEclate')
        dispatch('getAllUniteAdministrative')
        dispatch('getAllHistoriqueBudgetEclate')
        this.$app.$notify({
          title: 'Success',
          text: 'Enregistrement Effectué avec Succès!',
          type: "success"
        })
      }
    });
}

// modifier
export function modifierBudgetEclate({ commit, dispatch}, nouveau) {
  asyncLoading(axios
    .put("/budgetEclate/" + nouveau.id, {
      annebudgetaire: nouveau.annebudgetaire,
      uniteadministrative_id: nouveau.	uniteadministrative_id,
      ligneeconomique_id: nouveau.ligneeconomique_id,
      grandenature_id: nouveau.grandenature_id,
      dotation: nouveau.dotation,
    }))
    .then(response => {
      commit("MODIFIER_BUDGET_ECLATE", response.data);
      dispatch('getAllBudgetEclate')
      dispatch('getAllUniteAdministrative')
      this.$app.$notify({
        title: 'Success',
        text: 'Modification Effectué avec Succès!',
        type: "success"
      })
    });
}
//supprimer
export function supprimerBudgetEclate({ commit, dispatch}, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit("SUPPRIMER_BUDGET_ECLATE", id);
      dispatch('getAllBudgetEclate')
      dispatch('getAllUniteAdministrative')
      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete("/budgetEclate/" + id).then(() => dialog.close());
    });
}