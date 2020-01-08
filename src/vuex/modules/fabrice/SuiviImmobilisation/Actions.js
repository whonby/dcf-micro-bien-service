import axios from "../../fabrice/SuiviImmobilisation/urls/api";
import { asyncLoading } from 'vuejs-loading-plugin'
var housecall = require("housecall");
var queue = housecall({ concurrency: 2, cooldown: 1000 });


//////////////////////////*debut action famille */////////////////////////////

// afficher liste famille
export function getAllNormeArticle({ commit }) {
  queue.push(() => {
    axios
      .get("/liste_normeArticle")
      .then(response => {
        commit("GET_ALL_NORME_EQUIPEMENTS", response.data);
      })
      .catch(error => console.log(error));
  });
}

// ajouter
export function ajouterNormeArticle({ commit, dispatch }, nouveau) {
  asyncLoading(axios
    .post("/ajouter_normeArticle",{
      typeua_id: nouveau.typeua_id,
      ua_id: nouveau.ua_id,
      date_enregistrement: nouveau.date_enregistrement,
      equipe_id: nouveau.equipe_id,
      famil_id: nouveau.famil_id,
      fonction_id: nouveau.fonction_id,
      // montant_ttc: nouveau.montant_ttc,
      quantite: nouveau.quantite,
      normedmd: nouveau.normedmd,
      // total_ttc: nouveau.total_ttc,
      // articl_id: nouveau.articl_id,
      // stock_id: nouveau.stock_id,
      // qtestock: nouveau.qtestock,
      dureviearticle: nouveau.dureviearticle
    })).then(response => {
      if (response.status == 201) {
        commit("AJOUTER_NORME_EQUIPEMENTS", response.data);
        dispatch('getAllNormeArticle')
        this.$app.$notify({
          title: 'Success',
          text: 'Enregistrement Effectué avec Succès!',
          type: "success"
        })
      }
    });
}


// modifier
export function modifierNormeArticle({ commit, dispatch }, nouveau) {
  asyncLoading(axios
    .put("/modifier_normeArticle/" + nouveau.id, {
      typeua_id: nouveau.typeua_id,
      ua_id: nouveau.ua_id,
      date_enregistrement: nouveau.date_enregistrement,
      equipe_id: nouveau.equipe_id,
      famil_id: nouveau.famil_id,
      fonction_id: nouveau.fonction_id,
      // montant_ttc: nouveau.montant_ttc,
      quantite: nouveau.quantite,
      normedmd: nouveau.normedmd,
      // total_ttc: nouveau.total_ttc,
      // articl_id: nouveau.articl_id,
      // stock_id: nouveau.stock_id,
      // qtestock: nouveau.qtestock,
      dureviearticle: nouveau.dureviearticle
    }))
    .then(response => {
      commit("MODIFIER_NORME_EQUIPEMENTS", response.data);
      dispatch('getAllNormeArticle')
      this.$app.$notify({
        title: 'Success',
        text: 'Modification Effectué avec Succès!',
        type: "success"
      })
    });
}
//supprimer
export function supprimerNormeArticle({ commit, dispatch }, id) {
  this.$app.$dialog
    .confirm("Voulez vous vraiment supprimer ?.")
    .then(dialog => {
      commit("SUPPRIMER_NORME_EQUIPEMENTS", id);
      dispatch('getAllNormeArticle')

      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete("/supprimer_normeArticle/" + id).then(() => dialog.close());
    });
}







//////////////////////////*debut action famille */////////////////////////////

// afficher liste famille
export function getAllFamille({ commit }) {
  queue.push(() => {
    axios
      .get("/liste_famille")
      .then(response => {
        commit("GET_ALL_FAMILLE", response.data);
      })
      .catch(error => console.log(error));
  });
}

//ajouter
export function ajouterFamille({ commit, dispatch }, nouveau) {
  asyncLoading(axios
    .post("/ajouter_famille", {
      equipemt_id: nouveau.equipemt_id,
     
      libelle: nouveau.libelle,
      dureVie: nouveau.dureVie
      
    }))
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_FAMILLE", response.data);
        dispatch('getAllFamille')
        this.$app.$notify({
          title: 'Success',
          text: 'Enregistrement Effectué avec Succès!',
          type: "success"
        })
      }
    });
}


// modifier
export function modifierFamille({ commit, dispatch }, nouveau) {
  asyncLoading(axios
    .put("/modifier_famille/" + nouveau.id, {
     
      equipemt_id: nouveau.equipemt_id,
      libelle: nouveau.libelle,
      dureVie: nouveau.dureVie
      
    }))
    .then(response => {
      commit("MODIFIER_FAMILLE", response.data);
      dispatch('getAllFamille')
      this.$app.$notify({
        title: 'Success',
        text: 'Modification Effectué avec Succès!',
        type: "success"
      })
    });
}
//supprimer
export function supprimerFamille({ commit }, id) {
  this.$app.$dialog
    .confirm("Voulez vous vraiment supprimer ?.")
    .then(dialog => {
      commit("SUPPRIMER_FAMILLE", id);
      //dispatch('getAllFamille')

      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete("/supprimer_famille/" + id).then(() => dialog.close());
    });
}

/*fin action famille */

//////////////////////////*debut action service */////////////////////////////

// afficher
export function getAllService({ commit }) {
  queue.push(() => {
    axios
      .get("/liste_service")
      .then(response => {
        commit("GET_ALL_SERVICE", response.data);
      })
      .catch(error => console.log(error));
  });
}

// ajouter
export function ajouterService({ commit,dispatch }, nouveau) {
  asyncLoading(axios
    .post("/ajouter_service", {
      code: nouveau.code,
      libelle: nouveau.libelle
    }))
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_SERVICE", response.data);
        dispatch('getAllService')
        this.$app.$notify({
          title: 'Success',
          text: 'Enregistrement Effectué avec Succès!',
          type: "success"
        })
      }
    });
}

// modifier
export function modifierService({ commit, dispatch}, nouveau) {
  asyncLoading(axios
    .put("/modifier_service/" + nouveau.id, {
      code: nouveau.code,
      libelle: nouveau.libelle
    }))
    .then(response => {
      commit("MODIFIER_SERVICE", response.data);
      dispatch('getAllService')
      this.$app.$notify({
        title: 'Success',
        text: 'Modification Effectué avec Succès!',
        type: "success"
      })
    });
}
//supprimer
export function supprimerService({ commit }, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit("SUPPRIMER_SERVICE", id);
      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete("/supprimer_service/" + id).then(() => dialog.close());
    });
}

/*fin action SERVICE */

//////////////////////////*debut action immobilisation*/////////////////////////////

// afficher
export function getAllImmobilisation({ commit }) {
  queue.push(() => {
    axios
      .get("/liste_immobilisation")
      .then(response => {
        commit("GET_ALL_IMMOBILISATION", response.data);
      })
      .catch(error => console.log(error));
  });
}

// ajouter
export function ajouterImmobilisation({ commit, dispatch}, formData) {
  asyncLoading(axios.post("/ajouter_immobilisation", formData)).then(response => {
    if (response.status == 201) {
      commit("AJOUTER_IMMOBILISATION", response.data);
      dispatch("getAllBesoinImmo");
      this.$app.$notify({
        title: 'Success',
        text: 'Enregistrement Effectué avec Succès!',
        type: "success"
      })
    }
  });
}

// modifier
export function modifierImmobilisation({ commit, dispatch}, nouveau) {
  asyncLoading(axios
    .put("/modifier_immobilisation/" + nouveau.id, {
      type_immo: nouveau.type_immo,
      besoinimmo_id: nouveau.besoinimmo_id,
      identification: nouveau.identification,
      etat_immobilisation: nouveau.etat_immobilisation,
      date_acquisition: nouveau.date_acquisition,
      date_mise_service: nouveau.date_mise_service,
      numero_facture: nouveau.numero_facture,
      qte_reel: nouveau.qte_reel,
      qte_affecte: nouveau.qte_affecte,
      qte_stock: nouveau.qte_stock,      
      anneamortiss: nouveau.anneamortiss,
      prixUnitaire: nouveau.prixUnitaire,
      total_actuel: nouveau.total_actuel,
      valeurorigine: nouveau.valeurorigine,
      duree: nouveau.duree,
      numero_CC: nouveau.numero_CC,
      acteurdepense_id: nouveau.acteurdepense_id,
      exercice_budgetaire_id: nouveau.exercice_budgetaire_id,
      service_id: nouveau.service_id,
      nature_bien: nouveau.nature_bien,
      nature_dentree: nouveau.nature_dentree,
      acteur_depense_id: nouveau.acteur_depense_id,
      // TVA_id: nouveau.TVA_id,
      montant_evaluation: nouveau.montant_evaluation,
      date_evaluation: nouveau.date_evaluation,
      montant_cession: nouveau.montant_cession,
      date_cession: nouveau.date_cession,
      cause_inactivite: nouveau.cause_inactivite,
      montant_amortissement_anterieur: nouveau.montant_amortissement_anterieur,
      date_amortissement_anterieur: nouveau.date_amortissement_anterieur
    }))
 
    .then(response => {
      commit("MODIFIER_IMMOBILISATION", response.data);
      dispatch("getAllBesoinImmo");
      this.$app.$notify({
        title: 'Success',
        text: 'Modification Effectué avec Succès!',
        type: "success"
      })
    });
}
//supprimer
export function supprimerImmobilisation({ commit }, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit("SUPPRIMER_IMMOBILISATION", id);
      // // dialog.loading(false) // stops the proceed button's loader
      axios
        .delete("/supprimer_immobilisation/" + id)
        .then(() => dialog.close());
    });
}
export function afficherUnSeulImmobilisation({ commit }, id) {
  commit("GET_SEUL_IMMOBILISATION", id);

  axios.get("/seul_immobilisation/" + id);
}
/*fin action Immobilisation */

//////////////////////////*debut action amortissement */////////////////////////////

// afficher
export function getAllAmortissement({ commit }) {
  queue.push(() => {
    axios
      .get("/liste_amortissement")
      .then(response => {
        commit("GET_ALL_AMORTISSEMENT", response.data);
      })
      .catch(error => console.log(error));
  });
}

// afficher liste besoin immo
export function getAllBesoinImmo({ commit }) {
  queue.push(() => {
    axios
      .get("/liste_besoin_immo")
      .then(response => {
        commit("GET_ALL_BESOIN_IMMO", response.data);
      })
      .catch(error => console.log(error));
  });
}

// ajouter
export function ajouterBesoinImmo({ commit, dispatch }, nouveau) {
  asyncLoading(
    axios.post("/ajouter_besoin_immo", {
      typeuniteadminist_id: nouveau.typeuniteadminist_id,
      uniteadmin_id: nouveau.uniteadmin_id,
      famille_id: nouveau.famille_id,
      quantite: nouveau.quantite,
      equipe_id: nouveau.equipe_id,
      article_id: nouveau.article_id,
      prix_unitaire: nouveau.prix_unitaire,
      montant_total: nouveau.montant_total,
      date_jour: nouveau.date_jour,
      historiqueqte: nouveau.historiqueqte,
      // qtestock: nouveau.qtestock,
      // qte_recu: nouveau.qte_recu,
      // qteactuelstock: nouveau.qteactuelstock,
      motif_demande: nouveau.motif_demande,
      // service_id: nouveau.service_id,
      norme_id: nouveau.norme_id,
      normearticle: nouveau.normearticle,
      fonction_id: nouveau.fonction_id,
      qterealise: nouveau.qterealise,
      dure_vie: nouveau.dure_vie
    })
  ).then(response => {
    if (response.status == 201) {
      commit("AJOUTER_BESOIN_IMMO", response.data);
      dispatch("getAllBesoinImmo");
      dispatch('getAllNormeArticle');
      this.$app.$notify({
        title: "Success",
        text: "Enregistrement Effectué avec Succès!",
        type: "success"
      });
    }
  });
}

// modifier
export function modifierBesoinImmo({ commit, dispatch }, nouveau) {
  asyncLoading(
    axios.put("/modifier_besoin_immo/" + nouveau.id, {
      typeuniteadminist_id: nouveau.typeuniteadminist_id,
      uniteadmin_id: nouveau.uniteadmin_id,
      famille_id: nouveau.famille_id,
      quantite: nouveau.quantite,
      article_id: nouveau.article_id,
      // qtestock: nouveau.qtestock,
      // qteactuelstock: nouveau.qteactuelstock,
      // date_livraison: nouveau.date_livraison,
      prix_unitaire: nouveau.prix_unitaire,
      montant_total: nouveau.montant_total,
      date_jour: nouveau.date_jour,
      historiqueqte: nouveau.historiqueqte,
      motif_demande: nouveau.motif_demande,
      // service_id: nouveau.service_id,
      // qte_recu: nouveau.qte_recu,
      date_motif: nouveau.date_motif,
      motif_ua: nouveau.motif_ua,
      date_motif_ua: nouveau.date_motif_ua,
       norme_id: nouveau.norme_id,
      normearticle: nouveau.normearticle,
      fonction_id: nouveau.fonction_id,
      dure_vie: nouveau.dure_vie
    })
  ).then(response => {
    commit("MODIFIER_BESOIN_IMMO", response.data);
    dispatch("getAllBesoinImmo");
    this.$app.$notify({
      title: "Success",
      text: "Modification Effectué avec Succès!",
      type: "success"
    });
  });
}







export function modifierMontantActuel({ commit, dispatch }, objet) {
  // console.log(id_besoinImmo_a_modifier, qte_actu);
  axios.put("/modifier_besoin_immo/" + objet.id, {
    montant_total : objet.montant_actu
    
  })
    .then(response => {
      commit("MODIFIER_MONTANT_ACTUEL", response.objet);
      dispatch("getAllBesoinImmo");
    });
}
export function modifierQteRealisebesoin({ commit, dispatch}, objet) {
  // console.log(id_besoinImmo_a_modifier, qte_actu);
  axios.put("/modifier_besoin_immo/" + objet.id, {
    qterealise: objet.qte_real
    // ,
    // montant_total = objet.montant_actu
  })
    .then(response => {
      commit("MODIFIER_QTE_REALISE_BESOIN", response.objet)
      dispatch("getAllBesoinImmo");
    });
}
// export function modifierActeurDepenses({ commit }, objet) {
//    axios.put("/update_act_personnel/" + objet.id, {
//      equipe_immo: objet.equipemt
//   })
//     .then(response => {
//       commit("MODIFIER_ACT_PERSONNEL", objet);
//     });
// }

//supprimer
export function supprimerBesoinImmo({ commit }, id) {
  this.$app.$dialog
    .confirm("Voulez vous vraiment supprimer ?.")
    .then(dialog => {
      commit("SUPPRIMER_BESOIN_IMMO", id);
      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete("/supprimer_besoin_immo/" + id).then(() => dialog.close());
    });
}

/*fin action famille */

// afficher liste famille
export function getAllEquipement({ commit }) {
  queue.push(() => {
    axios
      .get("/liste_equipement")
      .then(response => {
        commit("GET_ALL_EQUIPEMENT", response.data);
      })
      .catch(error => console.log(error));
  });
}

// ajouter
export function ajouterEquipement({ commit, dispatch }, nouveau) {
  asyncLoading(axios
    .post("/ajouter_equipement", {
     
      libelle: nouveau.libelle
    }))
 
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_EQUIPEMENT", response.data);
        dispatch('getAllEquipement')
        this.$app.$notify({
          title: 'Success',
          text: 'Enregistrement Effectué avec Succès!',
          type: "success"
        })
      }
    });
}

// modifier
export function modifierEquipement({ commit, dispatch }, nouveau) {
  asyncLoading(axios
    .put("/modifier_equipement/" + nouveau.id, {
     
      libelle: nouveau.libelle
    }))
    .then(response => {
      commit("MODIFIER_EQUIPEMENT", response.data);
      dispatch('getAllEquipement')
      this.$app.$notify({
        title: 'Success',
        text: 'Modification Effectué avec Succès!',
        type: "success"
      })
    });
}
//supprimer
export function supprimerEquipement({ commit }, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit("SUPPRIMER_EQUIPEMENT", id);
      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete("/supprimer_equipement/" + id).then(() => dialog.close());
    });
}

/*fin action famille */

// afficher liste famille
export function getAllArticles({ commit }) {
  queue.push(() => {
    axios
      .get("/liste_Articles")
      .then(response => {
        commit("GET_ALL_ARTICLES", response.data);
      })
      .catch(error => console.log(error));
  });
}

export function ajouterArticles({ commit, dispatch }, nouveau) {
  asyncLoading(axios
    .post("/ajouter_Articles", {
      equipement_id: nouveau.equipement_id,
      libelle: nouveau.libelle,
      prix_ht: nouveau.prix_ht,
      taux: nouveau.taux,
      tva: nouveau.tva,
      
      montant_ttc: nouveau.montant_ttc,
      famille_id: nouveau.famille_id
    }))
    .then(response => {
      if (response.status == 201) {
        commit("AJOUTER_ARTICLES", response.data);
        dispatch('getAllArticles')
        this.$app.$notify({
          title: 'Success',
          text: 'Enregistrement Effectué avec Succès!',
          type: "success"
        })
      }
    });
}


// modifier
export function modifierArticles({ commit, dispatch }, nouveau) {
  asyncLoading(axios
    .put("/modifier_Articles/" + nouveau.id, {

      
      equipement_id: nouveau.equipement_id,
      libelle: nouveau.libelle,
      prix_ht: nouveau.prix_ht,
      tva: nouveau.tva,
      
      montant_ttc: nouveau.montant_ttc,
      famille_id: nouveau.famille_id,
 taux: nouveau.taux
    }))
    .then(response => {
      commit("MODIFIER_ARTICLES", response.data);
      dispatch('getAllArticles')
      this.$app.$notify({
        title: 'Success',
        text: 'Modification Effectué avec Succès!',
        type: "success"
      })
    });
}
//supprimer
export function supprimerArticles({ commit}, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit("SUPPRIMER_ARTICLES", id);
      // dispatch('getAllArticles')

      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete("/supprimer_Articles/" + id).then(() => dialog.close());
    });
}




// afficher liste famille
export function getAllStock({ commit }) {
  queue.push(() => {
    axios
      .get("/liste_Stockage")
      .then(response => {
        commit("GET_ALL_STOCKAGE", response.data);
      })
      .catch(error => console.log(error));
  });
}

export function ajouterStock({ commit, dispatch }, nouveau) {
  asyncLoading(
    axios.post("/ajouter_Stockage", {
      famill_id: nouveau.famill_id,
      quantitestock: nouveau.quantitestock,
      articlestock_id: nouveau.articlestock_id,
      typeua_id: nouveau.typeua_id,
      uAdministrative_id: nouveau.uAdministrative_id,
      typeequipe_id: nouveau.typeequipe_id,
      // durevie: nouveau.durevie,
      histo_qte: nouveau.histo_qte,
      date_entre: nouveau.date_entre
    })
  ).then(response => {
    if (response.status == 201) {
      commit("AJOUTER_STOCKAGE", response.data);
      dispatch("getAllStock");
      this.$app.$notify({
        title: "Success",
        text: "Enregistrement Effectué avec Succès!",
        type: "success"
      });
    }
  });
}


// modifier
export function modifierStock({ commit, dispatch }, nouveau) {
  asyncLoading(
    axios.put("/modifier_Stockage/" + nouveau.id, {
      famill_id: nouveau.famill_id,
      quantitestock: nouveau.quantitestock,
      articlestock_id: nouveau.articlestock_id,
      typeua_id: nouveau.typeua_id,
      uAdministrative_id: nouveau.uAdministrative_id,
      typeequipe_id: nouveau.typeequipe_id,
      // durevie: nouveau.durevie,
      histo_qte: nouveau.histo_qte,
      date_entre: nouveau.date_entre,
      date_sortie: nouveau.date_sortie,
      qteentrant: nouveau.qteentrant
    })
  ).then(response => {
    commit("MODIFIER_STOCKAGE", response.data);
    dispatch("getAllStock");
    this.$app.$notify({
      title: "Success",
      text: "Modification Effectué avec Succès!",
      type: "success"
    });
  });
}
//supprimer
export function supprimerStock({ commit}, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit("SUPPRIMER_STOCKAGE", id);
      
      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete("/supprimer_Stockage/" + id).then(() => dialog.close());
    });
}



export function modifierQuantiteEnStock2({ commit,dispatch }, objet) {
  // console.log(id_besoinImmo_a_modifier, qte_actu);
  axios
    .put("/modifier_Stockage/" + objet.id, {
      quantitestock: objet.qteactuelstock,
      date_sortie: objet.date_jour,
      qtesortie: objet.qte_recu,
      // ,
      // montant_total = objet.montant_actu
    })
    .then(response => {
      commit("MODIFIER_QUANTITE_EN_STOCK2", response.data);
      dispatch("getAllStock");
      
    });
    
    
    
}

export function modifierQuantiteEnStockNorme({ commit, dispatch }, objet) {
  // console.log(id_besoinImmo_a_modifier, qte_actu);
  axios
    .put("/modifier_normeArticle/" + objet.id, {
      qtestock: objet.qteactuelstock,
      
      // ,
      // montant_total = objet.montant_actu
    })
    .then(response => {
      commit("MODIFIER_QUANTITE_EN_STOCK_NORME", response.data);
      dispatch("getAllNormeArticle");

    });

}

export function modifierQuantiteEnStock({ commit }, objet) {
  // console.log(id_besoinImmo_a_modifier, qte_actu);
  axios.put("/modifier_besoin_immo/" + objet.id, {
    qtestock: objet.qte_stock
    // ,
    // montant_total = objet.montant_actu
  })
    .then(response => {
      commit("MODIFIER_QUANTITE_EN_STOCK", response.objet)
    });
}
export function modifierQuantiteReel({ commit, dispatch }, objet) {
  // console.log(id_besoinImmo_a_modifier, qte_actu);
  axios
    .put("/modifier_besoin_immo/" + objet.id, {
      quantite: objet.qte_actu
      // ,
      // montant_total = objet.montant_actu
    })
    .then(response => {
      commit("MODIFIER_QUANTITE_REEL", response.objet);
      dispatch("getAllBesoinImmo");
      
    });
}


export function modifierQuantiteNormeDmd({ commit, dispatch }, objet) {
  // console.log(id_besoinImmo_a_modifier, qte_actu);
  axios
    .put("/modifier_normeArticle/" + objet.id, {
      normedmd : objet.qtedmd
      // ,
      // montant_total = objet.montant_actu
    })
    .then(response => {
      commit("MODIFIER_NORME_REALISE", response.objet);
      dispatch("getAllNormeArticle");

    });
}

