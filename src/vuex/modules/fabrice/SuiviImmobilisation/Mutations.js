/////////////////////////////////*debut mutation FAMILLE */////////////////////
// afficher FAMILLE*
const GET_ALL_NORME_EQUIPEMENTS = (state, tableauNormeArticle) => {
  state.normeEquipements = tableauNormeArticle;
};

// ajouter NORME_EQUIPEMENTS
const AJOUTER_NORME_EQUIPEMENTS = (state, nouveau_normeArt) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.normeEquipements.unshift(nouveau_normeArt);
};

// modifier NORME_EQUIPEMENTS
const MODIFIER_NORME_EQUIPEMENTS = (state, objetModifie) => {
  state.normeEquipements = state.normeEquipements.map(norme => {
    if (norme.id == objetModifie.id) {
      norme = { ...objetModifie };
    }

    return norme;
  });
};

// supprimer NORME_EQUIPEMENTS
const SUPPRIMER_NORME_EQUIPEMENTS = (state, id) => {
  state.normeEquipements = state.normeEquipements.filter(norme => norme.id != id);
};




/////////////////////////////////*debut mutation FAMILLE */////////////////////
// afficher FAMILLE*
const GET_ALL_FAMILLE = (state, tableauFamille) => {
  state.familles = tableauFamille;
};

// ajouter FAMILLE
const AJOUTER_FAMILLE = (state, nouveau_famille) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.familles.unshift(nouveau_famille);
};

// modifier FAMILLE
const MODIFIER_FAMILLE = (state, objetModifie) => {
  state.familles = state.familles.map(famille => {
    if (famille.id == objetModifie.id) {
      famille = { ...objetModifie };
    }

    return famille;
  });
};

// supprimer FAMILLE
const SUPPRIMER_FAMILLE = (state, id) => {
  state.familles = state.familles.filter(famille => famille.id != id);
};

/*fin mutation FAMILLE */

/////////////////////////////////*debut mutation service */////////////////////
// afficher service*
const GET_ALL_SERVICE = (state, tableauService) => {
  state.services = tableauService;
};

// ajouter service
const AJOUTER_SERVICE = (state, nouveau_service) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.services.unshift(nouveau_service);
};

// modifier service
const MODIFIER_SERVICE = (state, objetModifie) => {
  state.services = state.services.map(service => {
    if (service.id == objetModifie.id) {
      service = { ...objetModifie };
    }

    return service;
  });
};

// supprimer service
const SUPPRIMER_SERVICE = (state, id) => {
  state.services = state.services.filter(service => service.id != id);
};

/*fin mutation service */

/////////////////////////////////*debut mutation amortissement */////////////////////
// afficher amortissement*
const GET_ALL_AMORTISSEMENT = (state, tableauAmortissement) => {
  state.amortissements = tableauAmortissement;
};

// ajouter amortissement
const AJOUTER_AMORTISSEMENT = (state, nouveau_amortissement) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.amortissements.unshift(nouveau_amortissement);
};

// modifier amortissement
const MODIFIER_AMORTISSEMENT = (state, objetModifie) => {
  state.amortissements = state.amortissements.map(amortissement => {
    if (amortissement.id == objetModifie.id) {
      amortissement = { ...objetModifie };
    }

    return amortissement;
  });
};

// supprimer amortissement
const SUPPRIMER_AMORTISSEMENT = (state, id) => {
  state.amortissements = state.amortissements.filter(
    amortissement => amortissement.id != id
  );
};

/*fin mutation amortissement */

/////////////////////////////////*debut mutation immobilisation */////////////////////
// afficher immobilisation*
const GET_ALL_IMMOBILISATION = (state, tableauImmobilisation) => {
  state.immobilisations = tableauImmobilisation;
};

// ajouter immobilisation
const AJOUTER_IMMOBILISATION = (state, nouveau_immobilisation) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.immobilisations.unshift(nouveau_immobilisation);
};

// modifier immobilisation
const MODIFIER_IMMOBILISATION = (state, objetModifie) => {
  state.immobilisations = state.immobilisations.map(immobilisation => {
    if (immobilisation.id == objetModifie.id) {
      immobilisation = { ...objetModifie };
    }

    return immobilisation;
  });
};

// supprimer immobilisation
const SUPPRIMER_IMMOBILISATION = (state, id) => {
  state.immobilisations = state.immobilisations.filter(
    immobilisation => immobilisation.id != id
  );
};
// supprimer immobilisation
const GET_SEUL_IMMOBILISATION = (state, tableauImmobilisation) => {
  state.immobilisations = tableauImmobilisation;
};
/*fin mutation immobilisation */

/////////////////////////////////*debut mutation besoin immo */////////////////////
// afficher FAMILLE*
const GET_ALL_BESOIN_IMMO = (state, tableauBesoinImmo) => {
  state.besoinImmobilisations = tableauBesoinImmo;
};

// ajouter FAMILLE
const AJOUTER_BESOIN_IMMO = (state, nouveau_besoin_immo) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.besoinImmobilisations.unshift(nouveau_besoin_immo);
};

// modifier FAMILLE
const MODIFIER_BESOIN_IMMO = (state, objetModifie) => {
  state.besoinImmobilisations = state.besoinImmobilisations.map(besoin_immo => {
    if (besoin_immo.id == objetModifie.id) {
      besoin_immo = { ...objetModifie };
    }

    return besoin_immo;
  });
};

//modifier QUANTITE REEL
const MODIFIER_QUANTITE_REEL = (state, objet) => {
  state.besoinImmobilisations = state.besoinImmobilisations.map(besoin_immo => {
    if (besoin_immo.id == objet.id) {
      besoin_immo.quantite = objet.qte_actu;
      
      // besoin_immo.montant_total = objet.montant_actu;
    }

    return besoin_immo;
  });
};

const MODIFIER_QUANTITE_EN_STOCK = (state, objet) => {
  state.besoinImmobilisations = state.besoinImmobilisations.map(STOCK => {
    if (STOCK.id == objet.id) {
      STOCK.qtestock = objet.qte_stock;

      // STOCK.montant_total = objet.montant_actu;
    }

    return STOCK;
  });
};
const MODIFIER_QUANTITE_EN_STOCK2 = (state, objet) => {
  state.stockageArticles = state.stockageArticles.map(qtestocker => {
    if (qtestocker.id == objet.id) {
      qtestocker.quantitestock = objet.qteactuelstock;
      qtestocker.date_sortie = objet.date_jour;
      qtestocker.qtesortie = objet.qte_recu;
      // qtestocker.montant_total = objet.montant_actu;
    }

    return qtestocker;
  });
};
const MODIFIER_QUANTITE_EN_STOCK_NORME = (state, objet) => {
  state.normeEquipements = state.normeEquipements.map(qtestocker => {
    if (qtestocker.id == objet.id) {
      qtestocker.qtestock = objet.qteactuelstock;
      
      // qtestocker.montant_total = objet.montant_actu;
    }

    return qtestocker;
  });
};





//modifier QUANTITE REEL
const MODIFIER_MONTANT_ACTUEL = (state, objet) => {
  state.besoinImmobilisations = state.besoinImmobilisations.map(besoin_immobil => {
    if (besoin_immobil.id == objet.id) {
      // besoin_immo.montant_total = objet.qte_actu;
      besoin_immobil.montant_total = objet.montant_actu;
    }

    return besoin_immobil;
  });
};


//modifier QUANTITE REEL
const MODIFIER_QTE_REALISE_BESOIN = (state, objet) => {
  state.besoinImmobilisations = state.besoinImmobilisations.map(besoinRealise => {
    if (besoinRealise.id == objet.id) {
      // besoin_immo.montant_total = objet.qte_actu;
      besoinRealise.qterealise = objet.qte_real;
    }

    return besoinRealise;
  });
};
// const MODIFIER_ACT_PERSONNEL = (state, objet) => {
//   state.acte_personnels = state.acte_personnels.map(acte_personnel => {
//     if (acte_personnel.id == objet.id) {
//       acte_personnel.equipe_immo = objet.equipemt;
//     }
//     return acte_personnel
//   })
// }



// supprimer FAMILLE
const SUPPRIMER_BESOIN_IMMO = (state, id) => {
  state.besoinImmobilisations = state.besoinImmobilisations.filter(
    besoin_immo => besoin_immo.id != id
  );
};

/*fin mutation BESOIN_IMMO */

/////////////////////////////////*debut mutation equipement */////////////////////
// afficher FAMILLE*
const GET_ALL_EQUIPEMENT = (state, tableauEquipement) => {
  state.equipements = tableauEquipement;
};

// ajouter FAMILLE
const AJOUTER_EQUIPEMENT = (state, nouveau_equipement) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.equipements.unshift(nouveau_equipement);
};

// modifier EQUIPEMENT
const MODIFIER_EQUIPEMENT = (state, objetModifie) => {
  state.equipements = state.equipements.map(equipement => {
    if (equipement.id == objetModifie.id) {
      equipement = { ...objetModifie };
    }

    return equipement;
  });
};

// supprimer EQUIPEMENT
const SUPPRIMER_EQUIPEMENT = (state, id) => {
  state.equipements = state.equipements.filter(
    equipement => equipement.id != id
  );
};

/*fin mutation EQUIPEMENT */


/////////////////////////////////*debut mutation FAMILLE */////////////////////
// afficher FAMILLE*
const GET_ALL_ARTICLES = (state, tableauArticle) => {
  state.articles = tableauArticle;
};

// ajouter ARTICLES
const AJOUTER_ARTICLES = (state, nouveau_article) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.articles.unshift(nouveau_article);
};

// modifier ARTICLES
const MODIFIER_ARTICLES = (state, objetModifie) => {
  state.articles = state.articles.map(articl => {
    if (articl.id == objetModifie.id) {
      articl = { ...objetModifie };
    }

    return articl;
  });
};

// supprimer ARTICLES
const SUPPRIMER_ARTICLES = (state, id) => {
  state.articles = state.articles.filter(articl => articl.id != id);
};

/////////////////////////////////*debut mutation FAMILLE */////////////////////
// afficher FAMILLE*
const GET_ALL_STOCKAGE = (state, tableauArticle) => {
  state.stockageArticles = tableauArticle;
};

// ajouter stockageArticles
const AJOUTER_STOCKAGE = (state, nouveau_article) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.stockageArticles.unshift(nouveau_article);
};

// modifier stockageArticles
const MODIFIER_STOCKAGE = (state, objetModifie) => {
  state.stockageArticles = state.stockageArticles.map(articl => {
    if (articl.id == objetModifie.id) {
      articl = { ...objetModifie };
    }

    return articl;
  });
};

// supprimer stockageArticles
const SUPPRIMER_STOCKAGE = (state, id) => {
  state.stockageArticles = state.stockageArticles.filter(articl => articl.id != id);
};











export {
  MODIFIER_QUANTITE_EN_STOCK_NORME,
  MODIFIER_QUANTITE_EN_STOCK2,
  MODIFIER_QUANTITE_EN_STOCK,

  GET_ALL_STOCKAGE,
  AJOUTER_STOCKAGE,
  MODIFIER_STOCKAGE,
  SUPPRIMER_STOCKAGE,



  GET_ALL_ARTICLES,
  AJOUTER_ARTICLES,
  MODIFIER_ARTICLES,
  SUPPRIMER_ARTICLES,

  MODIFIER_QTE_REALISE_BESOIN,
  // MODIFIER_ACT_PERSONNEL,
  MODIFIER_MONTANT_ACTUEL,
  MODIFIER_QUANTITE_REEL,
  /* mutation EQUIPEMENT*/
  GET_ALL_EQUIPEMENT,
  AJOUTER_EQUIPEMENT,
  MODIFIER_EQUIPEMENT,
  SUPPRIMER_EQUIPEMENT,
  /* mutation BESOIN_IMMO*/
  GET_ALL_BESOIN_IMMO,
  AJOUTER_BESOIN_IMMO,
  MODIFIER_BESOIN_IMMO,
  SUPPRIMER_BESOIN_IMMO,
  /* mutation famille*/
  GET_ALL_FAMILLE,
  AJOUTER_FAMILLE,
  MODIFIER_FAMILLE,
  SUPPRIMER_FAMILLE,
  /* mutation service*/

  GET_ALL_SERVICE,
  AJOUTER_SERVICE,
  MODIFIER_SERVICE,
  SUPPRIMER_SERVICE,
  /* mutation amortissement*/
  GET_ALL_AMORTISSEMENT,
  AJOUTER_AMORTISSEMENT,
  MODIFIER_AMORTISSEMENT,
  SUPPRIMER_AMORTISSEMENT,
  /* mutation amortissement*/
  GET_ALL_IMMOBILISATION,
  AJOUTER_IMMOBILISATION,
  MODIFIER_IMMOBILISATION,
  SUPPRIMER_IMMOBILISATION,
  GET_SEUL_IMMOBILISATION,


  /* mutation amortissement*/
  GET_ALL_NORME_EQUIPEMENTS,
  AJOUTER_NORME_EQUIPEMENTS,
  MODIFIER_NORME_EQUIPEMENTS,
  SUPPRIMER_NORME_EQUIPEMENTS
  
}; 
