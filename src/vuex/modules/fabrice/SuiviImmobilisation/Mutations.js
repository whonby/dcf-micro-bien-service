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



// supprimer FAMILLE
const SUPPRIMER_BESOIN_IMMO = (state, id) => {
  state.besoinImmobilisations = state.besoinImmobilisations.filter(
    besoin_immo => besoin_immo.id != id
  );
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
      besoinRealise.quantite = objet.qte_actu;
      besoinRealise.qterealise = objet.qte_real;
      besoinRealise.totalrealise = objet.total_qte_real;
      besoinRealise.montant_total = objet.montant_actu
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



//modifier QUANTITE REEL
const MODIFIER_NORME_REALISE = (state, objet) => {
  state.normeEquipements = state.normeEquipements.map(norme_real => {
    if (norme_real.id == objet.id) {
      norme_real.normedmd = objet.qtedmd;

      // besoin_immo.montant_total = objet.montant_actu;
    }

    return norme_real;
  });
};





const GET_ALL_NATURE_ENTRE = (state, tableauNormeArticle) => {
  state.natureEntres = tableauNormeArticle;
};

// ajouter NORME_EQUIPEMENTS
const AJOUTER_NATURE_ENTRE = (state, nouveau_normeArt) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.natureEntres.unshift(nouveau_normeArt);
};


// modifier NORME_EQUIPEMENTS
const MODIFIER_NATURE_ENTRE = (state, objetModifie) => {
  state.natureEntres = state.natureEntres.map(norme => {
    if (norme.id == objetModifie.id) {
      norme = { ...objetModifie };
    }

    return norme;
  });
};

// supprimer NORME_EQUIPEMENTS
const SUPPRIMER_NATURE_ENTRE = (state, id) => {
  state.natureEntres = state.natureEntres.filter(norme => norme.id != id);
};


const GET_ALL_CAUSE_INACTIVITE = (state, tableauNormeArticle) => {
  state.causeInactivite = tableauNormeArticle;
};

// ajouter NORME_EQUIPEMENTS
const AJOUTER_CAUSE_INACTIVITE = (state, nouveau_normeArt) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.causeInactivite.unshift(nouveau_normeArt);
};


// modifier NORME_EQUIPEMENTS
const MODIFIER_CAUSE_INACTIVITE = (state, objetModifie) => {
  state.causeInactivite = state.causeInactivite.map(norme => {
    if (norme.id == objetModifie.id) {
      norme = { ...objetModifie };
    }

    return norme;
  });
};

// supprimer NORME_EQUIPEMENTS
const SUPPRIMER_CAUSE_INACTIVITE = (state, id) => {
  state.causeInactivite = state.causeInactivite.filter(norme => norme.id != id);
};

const GET_ALL_ETAT_IMMOBILISATION = (state, tableauNormeArticle) => {
  state.EtatImmobilisations = tableauNormeArticle;
};

// ajouter NORME_EQUIPEMENTS
const AJOUTER_ETAT_IMMOBILISATION = (state, nouveau_normeArt) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.EtatImmobilisations.unshift(nouveau_normeArt);
};


// modifier NORME_EQUIPEMENTS
const MODIFIER_ETAT_IMMOBILISATION = (state, objetModifie) => {
  state.EtatImmobilisations = state.EtatImmobilisations.map(norme => {
    if (norme.id == objetModifie.id) {
      norme = { ...objetModifie };
    }

    return norme;
  });
};

// supprimer NORME_EQUIPEMENTS
const SUPPRIMER_ETAT_IMMOBILISATION = (state, id) => {
  state.EtatImmobilisations = state.EtatImmobilisations.filter(norme => norme.id != id);
};








const GET_ALL_NORMEIMMOB = (state, tableauNormeArticle) => {
  state.normeImmo = tableauNormeArticle;
};

// ajouter NORME_EQUIPEMENTS
const AJOUTER_NORMEIMMOB = (state, nouveau_normeArt) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.normeImmo.unshift(nouveau_normeArt);
};


// modifier NORME_EQUIPEMENTS
const MODIFIER_NORMEIMMOB = (state, objetModifie) => {
  state.normeImmo = state.normeImmo.map(norme => {
    if (norme.id == objetModifie.id) {
      norme = { ...objetModifie };
    }

    return norme;
  });
};

// supprimer NORME_EQUIPEMENTS
const SUPPRIMER_NORMEIMMOB = (state, id) => {
  state.normeImmo = state.normeImmo.filter(norme => norme.id != id);
};







const GET_ALL_HISTORIQUE_AFFECTATION = (state, tableauNormeArticle) => {
  state.historiqueAffectation = tableauNormeArticle;
};

// ajouter NORME_EQUIPEMENTS
const AJOUTER_HISTORIQUE_AFFECTATION = (state, nouveau_normeArt) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.historiqueAffectation.unshift(nouveau_normeArt);
};


// modifier NORME_EQUIPEMENTS
const MODIFIER_HISTORIQUE_AFFECTATION = (state, objetModifie) => {
  state.historiqueAffectation = state.historiqueAffectation.map(norme => {
    if (norme.id == objetModifie.id) {
      norme = { ...objetModifie };
    }

    return norme;
  });
};

// supprimer NORME_EQUIPEMENTS
const SUPPRIMER_HISTORIQUE_AFFECTATION = (state, id) => {
  state.historiqueAffectation = state.historiqueAffectation.filter(norme => norme.id != id);
};





const GET_ALL_DEMANDE_MATERIEL = (state, tableauNormeArticle) => {
  state.demandeMateriel = tableauNormeArticle;
};

// ajouter NORME_EQUIPEMENTS
const AJOUTER_DEMANDE_MATERIEL = (state, nouveau_normeArt) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.demandeMateriel.unshift(nouveau_normeArt);
};


// modifier NORME_EQUIPEMENTS
const MODIFIER_DEMANDE_MATERIEL = (state, objetModifie) => {
  state.demandeMateriel = state.demandeMateriel.map(norme => {
    if (norme.id == objetModifie.id) {
      norme = { ...objetModifie };
    }

    return norme;
  });
};

// supprimer NORME_EQUIPEMENTS
const SUPPRIMER_DEMANDE_MATERIEL = (state, id) => {
  state.demandeMateriel = state.demandeMateriel.filter(norme => norme.id != id);
};





const GET_ALL_HISTORIQUE_AFFECTATION_SERVICE = (state, tableauNormeArticle) => {
  state.historiqueAffectationService = tableauNormeArticle;
};

// ajouter NORME_EQUIPEMENTS
const AJOUTER_HISTORIQUE_AFFECTATION_SERVICE = (state, nouveau_normeArt) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.historiqueAffectationService.unshift(nouveau_normeArt);
};


// modifier NORME_EQUIPEMENTS
const MODIFIER_HISTORIQUE_AFFECTATION_SERVICE = (state, objetModifie) => {
  state.historiqueAffectationService = state.historiqueAffectationService.map(norme => {
    if (norme.id == objetModifie.id) {
      norme = { ...objetModifie };
    }

    return norme;
  });
};

// supprimer NORME_EQUIPEMENTS
const SUPPRIMER_HISTORIQUE_AFFECTATION_SERVICE = (state, id) => {
  state.historiqueAffectationService = state.historiqueAffectationService.filter(norme => norme.id != id);
};










export const GET_ALL_MARQUE_VEHICULE = (state, tableauFamille) => {
  state.marqueVehicules = tableauFamille;
};

// ajouter FAMILLE
export const AJOUTER_MARQUE_VEHICULE = (state, nouveau_famille) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.marqueVehicules.unshift(nouveau_famille);
};

// modifier FAMILLE
export const MODIFIER_MARQUE_VEHICULE = (state, objetModifie) => {
  state.marqueVehicules = state.marqueVehicules.map(famille => {
    if (famille.id == objetModifie.id) {
      famille = { ...objetModifie };
    }

    return famille;
  });
};


// supprimer FAMILLE
export const SUPPRIMER_MARQUE_VEHICULE = (state, id) => {
  state.marqueVehicules = state.marqueVehicules.filter(famille => famille.id != id);
};


export const GET_ALL_MODELE_VEHICULE = (state, tableauFamille) => {
  state.ModeleVehicules = tableauFamille;
};

// ajouter FAMILLE
export const AJOUTER_MODELE_VEHICULE = (state, nouveau_famille) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.ModeleVehicules.unshift(nouveau_famille);
};

// modifier FAMILLE
export const MODIFIER_MODELE_VEHICULE = (state, objetModifie) => {
  state.ModeleVehicules = state.ModeleVehicules.map(famille => {
    if (famille.id == objetModifie.id) {
      famille = { ...objetModifie };
    }

    return famille;
  });
};


// supprimer FAMILLE
export const SUPPRIMER_MODELE_VEHICULE = (state, id) => {
  state.ModeleVehicules = state.ModeleVehicules.filter(famille => famille.id != id);
};




export const GET_ALL_TYPE_ENTRETIEN = (state, tableauFamille) => {
  state.TypeEntretien = tableauFamille;
};

// ajouter FAMILLE
export const AJOUTER_TYPE_ENTRETIEN = (state, nouveau_famille) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.TypeEntretien.unshift(nouveau_famille);
};

// modifier FAMILLE
export const MODIFIER_TYPE_ENTRETIEN = (state, objetModifie) => {
  state.TypeEntretien = state.TypeEntretien.map(famille => {
    if (famille.id == objetModifie.id) {
      famille = { ...objetModifie };
    }

    return famille;
  });
};


// supprimer FAMILLE
export const SUPPRIMER_TYPE_ENTRETIEN = (state, id) => {
  state.TypeEntretien = state.TypeEntretien.filter(famille => famille.id != id);
};




export const GET_ALL_TYPE_VEHICULE = (state, tableauFamille) => {
  state.TypeVehicule = tableauFamille;
};

// ajouter FAMILLE
export const AJOUTER_TYPE_VEHICULE = (state, nouveau_famille) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.TypeVehicule.unshift(nouveau_famille);
};

// modifier FAMILLE
export const MODIFIER_TYPE_VEHICULE = (state, objetModifie) => {
  state.TypeVehicule = state.TypeVehicule.map(famille => {
    if (famille.id == objetModifie.id) {
      famille = { ...objetModifie };
    }

    return famille;
  });
};


// supprimer FAMILLE
export const SUPPRIMER_TYPE_VEHICULE = (state, id) => {
  state.TypeVehicule = state.TypeVehicule.filter(famille => famille.id != id);
};




export const GET_ALL_TYPE_ENERGIE = (state, tableauFamille) => {
  state.TypeEnergie = tableauFamille;
};

// ajouter FAMILLE
export const AJOUTER_TYPE_ENERGIE = (state, nouveau_famille) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.TypeEnergie.unshift(nouveau_famille);
};

// modifier FAMILLE
export const MODIFIER_TYPE_ENERGIE = (state, objetModifie) => {
  state.TypeEnergie = state.TypeEnergie.map(famille => {
    if (famille.id == objetModifie.id) {
      famille = { ...objetModifie };
    }

    return famille;
  });
};


// supprimer FAMILLE
export const SUPPRIMER_TYPE_ENERGIE = (state, id) => {
  state.TypeEnergie = state.TypeEnergie.filter(famille => famille.id != id);
};





export const GET_ALL_TYPE_REPARATION = (state, tableauFamille) => {
  state.TypeReparation = tableauFamille;
};

// ajouter FAMILLE
export const AJOUTER_TYPE_REPARATION = (state, nouveau_famille) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.TypeReparation.unshift(nouveau_famille);
};

// modifier FAMILLE
export const MODIFIER_TYPE_REPARATION = (state, objetModifie) => {
  state.TypeReparation = state.TypeReparation.map(famille => {
    if (famille.id == objetModifie.id) {
      famille = { ...objetModifie };
    }

    return famille;
  });
};


// supprimer FAMILLE
export const SUPPRIMER_TYPE_REPARATION = (state, id) => {
  state.TypeReparation = state.TypeReparation.filter(famille => famille.id != id);
};







export const GET_ALL_AFFECTATION_VEHICULE = (state, tableauFamille) => {
  state.AffectationVehicules = tableauFamille;
};

// ajouter FAMILLE
export const AJOUTER_AFFECTATION_VEHICULE = (state, nouveau_famille) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.AffectationVehicules.unshift(nouveau_famille);
};

// modifier FAMILLE
export const MODIFIER_AFFECTATION_VEHICULE = (state, objetModifie) => {
  state.AffectationVehicules = state.AffectationVehicules.map(famille => {
    if (famille.id == objetModifie.id) {
      famille = { ...objetModifie };
    }

    return famille;
  });
};


// supprimer FAMILLE
export const SUPPRIMER_AFFECTATION_VEHICULE = (state, id) => {
  state.AffectationVehicules = state.AffectationVehicules.filter(famille => famille.id != id);
};






export const GET_ALL_TRANSMISSION = (state, tableauFamille) => {
  state.Transmissions = tableauFamille;
};

// ajouter FAMILLE
export const AJOUTER_TRANSMISSION = (state, nouveau_famille) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.Transmissions.unshift(nouveau_famille);
};

// modifier FAMILLE
export const MODIFIER_TRANSMISSION = (state, objetModifie) => {
  state.Transmissions = state.Transmissions.map(famille => {
    if (famille.id == objetModifie.id) {
      famille = { ...objetModifie };
    }

    return famille;
  });
};


// supprimer FAMILLE
export const SUPPRIMER_TRANSMISSION = (state, id) => {
  state.Transmissions = state.Transmissions.filter(famille => famille.id != id);
};




export const GET_ALL_APPRECIATION = (state, tableauFamille) => {
  state.Appreciations = tableauFamille;
};

// ajouter FAMILLE
export const AJOUTER_APPRECIATION = (state, nouveau_famille) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.Appreciations.unshift(nouveau_famille);
};

// modifier FAMILLE
export const MODIFIER_APPRECIATION = (state, objetModifie) => {
  state.Appreciations = state.Appreciations.map(famille => {
    if (famille.id == objetModifie.id) {
      famille = { ...objetModifie };
    }

    return famille;
  });
};


// supprimer FAMILLE
export const SUPPRIMER_APPRECIATION = (state, id) => {
  state.Appreciations = state.Appreciations.filter(famille => famille.id != id);
};

export const AJOUTE_UA_IMO = (state, nouveau_normeArt) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.ua_idImo=nouveau_normeArt;
};



export const GET_ALL_FICHE_ARTICLE = (state, tableauNormeArticle) => {
  state.ficheArticle = tableauNormeArticle;
};

// ajouter NORME_EQUIPEMENTS
export const AJOUTER_FICHE_ARTICLE = (state, nouveau_normeArt) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.ficheArticle.unshift(nouveau_normeArt);
};


// modifier FICHE_ARTICLE
export const MODIFIER_FICHE_ARTICLE = (state, objetModifie) => {
  state.ficheArticle = state.ficheArticle.map(norme => {
    if (norme.id == objetModifie.id) {
      norme = { ...objetModifie };
    }

    return norme;
  });
};

// supprimer FICHE_ARTICLE
export const SUPPRIMER_FICHE_ARTICLE = (state, id) => {
  state.ficheArticle = state.ficheArticle.filter(norme => norme.id != id);
};






export const GET_ALL_GROUPE_CORPOREL = (state, tableauNormeArticle) => {
  state.groupecorporels = tableauNormeArticle;
};

// ajouter NORME_EQUIPEMENTS
export const AJOUTER_GROUPE_CORPOREL = (state, nouveau_normeArt) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.groupecorporels.unshift(nouveau_normeArt);
};


// modifier NORME_EQUIPEMENTS
export const MODIFIER_GROUPE_CORPOREL = (state, objetModifie) => {
  state.groupecorporels = state.groupecorporels.map(norme => {
    if (norme.id == objetModifie.id) {
      norme = { ...objetModifie };
    }

    return norme;
  });
};

// supprimer NORME_EQUIPEMENTS
export const SUPPRIMER_GROUPE_CORPOREL = (state, id) => {
  state.groupecorporels = state.groupecorporels.filter(norme => norme.id != id);
};







export const GET_ALL_TYPE_BIEN_CORPOREL = (state, tableauNormeArticle) => {
  state.Typebiengrpecorporels = tableauNormeArticle;
};

// ajouter NORME_EQUIPEMENTS
export const AJOUTER_TYPE_BIEN_CORPOREL = (state, nouveau_normeArt) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.Typebiengrpecorporels.unshift(nouveau_normeArt);
};


// modifier NORME_EQUIPEMENTS
export const MODIFIER_TYPE_BIEN_CORPOREL = (state, objetModifie) => {
  state.Typebiengrpecorporels = state.Typebiengrpecorporels.map(norme => {
    if (norme.id == objetModifie.id) {
      norme = { ...objetModifie };
    }

    return norme;
  });
};

// supprimer NORME_EQUIPEMENTS
export const SUPPRIMER_TYPE_BIEN_CORPOREL = (state, id) => {
  state.Typebiengrpecorporels = state.Typebiengrpecorporels.filter(norme => norme.id != id);
};



export {
  


  GET_ALL_HISTORIQUE_AFFECTATION_SERVICE,
  AJOUTER_HISTORIQUE_AFFECTATION_SERVICE,
  MODIFIER_HISTORIQUE_AFFECTATION_SERVICE,
  SUPPRIMER_HISTORIQUE_AFFECTATION_SERVICE,



  GET_ALL_DEMANDE_MATERIEL,
  AJOUTER_DEMANDE_MATERIEL,
  MODIFIER_DEMANDE_MATERIEL,
  SUPPRIMER_DEMANDE_MATERIEL,

  GET_ALL_HISTORIQUE_AFFECTATION,
  AJOUTER_HISTORIQUE_AFFECTATION,
  MODIFIER_HISTORIQUE_AFFECTATION,
  SUPPRIMER_HISTORIQUE_AFFECTATION,




  GET_ALL_NORMEIMMOB,
  AJOUTER_NORMEIMMOB,
  MODIFIER_NORMEIMMOB,
  SUPPRIMER_NORMEIMMOB,



  GET_ALL_ETAT_IMMOBILISATION,
  AJOUTER_ETAT_IMMOBILISATION,
  MODIFIER_ETAT_IMMOBILISATION,
  SUPPRIMER_ETAT_IMMOBILISATION,
  GET_ALL_CAUSE_INACTIVITE,
  AJOUTER_CAUSE_INACTIVITE,
  MODIFIER_CAUSE_INACTIVITE,
  SUPPRIMER_CAUSE_INACTIVITE,
  GET_ALL_NATURE_ENTRE,
  AJOUTER_NATURE_ENTRE,
  MODIFIER_NATURE_ENTRE,
  SUPPRIMER_NATURE_ENTRE,
















  MODIFIER_NORME_REALISE,
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
