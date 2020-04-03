

const GET_ALL_HISTORIQUE_BUDGET_GENERAL = (state, tableauBudgetGeneral) => {
  state.historiquebudgetGeneral = tableauBudgetGeneral;
};

// ajouter type_textes
const AJOUTER_HISTORIQUE_BUDGET_GENERAL = (state, nouveau_budgetGeneral) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.historiquebudgetGeneral.unshift(nouveau_budgetGeneral);
};

// modifier type_textes
const MODIFIER_HISTORIQUE_BUDGET_GENERAL = (state, objetModifie) => {
  state.historiquebudgetGeneral = state.historiquebudgetGeneral.map(type => {
    if (type.id == objetModifie.id) {
      type = { ...objetModifie };
    }

    return type;
  });
};

// supprimer type_texte
const SUPPRIMER_HISTORIQUE_BUDGET_GENERAL = (state, id) => {
  state.historiquebudgetGeneral = state.historiquebudgetGeneral.filter(type => type.id != id);
};


// const IMPORT_BUDGET = (state, nouveau_budgetGeneral) => {

// };







const GET_ALL_BUDGET_GENERAL = (state, tableauBudgetGeneral) => {
  state.budgetGeneral = tableauBudgetGeneral;
};

// ajouter type_textes
const AJOUTER_BUDGET_GENERAL = (state, nouveau_budgetGeneral) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.budgetGeneral.unshift(nouveau_budgetGeneral);
};

// modifier type_textes
const MODIFIER_BUDGET_GENERAL = (state, objetModifie) => {
  state.budgetGeneral = state.budgetGeneral.map(type => {
    if (type.id == objetModifie.id) {
      type = { ...objetModifie };
    }

    return type;
  });
};

// supprimer type_texte
const SUPPRIMER_BUDGET_GENERAL = (state, id) => {
  state.budgetGeneral = state.budgetGeneral.filter(type => type.id != id);
};








/////////////////////////////////*debut mutation type texte */////////////////////
// afficher les type de texte*
const GET_ALL_TYPES_TEXTES = (state, tableauTypeTexte) => {
  state.typeTextes = tableauTypeTexte;
};

// ajouter type_textes
const AJOUTER_TYPE_TEXTE = (state, nouveau_type) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.typeTextes.unshift(nouveau_type);
};

// modifier type_textes
const MODIFIER_TYPE_TEXTES = (state, objetModifie) => {
  state.typeTextes = state.typeTextes.map(type => {
    if (type.id == objetModifie.id) {
      type = { ...objetModifie };
    }

    return type;
  });
};

// supprimer type_texte
const SUPPRIMER_TYPE_TEXTE = (state, id) => {
  state.typeTextes = state.typeTextes.filter(type => type.id != id);
};

/*fin mutation type texte */

////////////////////////////////////*debut mutation unite administrative *//////////////////////

// afficher des unite administrative*
const GET_ALL_UNITE_ADMINISTRATIVE = (state, tableauUniteAdministrative) => {
  state.uniteAdministratives = tableauUniteAdministrative;
};
// ajouter unite administrative
const AJOUTER_UNITE_ADMINISTRATIVE = (state, nouveau_unite_administrative) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.uniteAdministratives.unshift(nouveau_unite_administrative);
};
// modifier unite administrative
const MODIFIER_UNITE_ADMINISTRATIVE = (state, objetModifie) => {
  state.uniteAdministratives = state.uniteAdministratives.map(
    uniteadministrative => {
      if (uniteadministrative.id == objetModifie.id) {
        uniteadministrative = { ...objetModifie };
      }

      return uniteadministrative;
    }
  );
};
// supprimer unite administrative
const SUPPRIMER_UNITE_ADMINISTRATIVE = (state, id) => {
  state.uniteAdministratives = state.uniteAdministratives.filter(
    uniteadministrative => uniteadministrative.id != id
  );
};
/*fin mutation unite administrative */

////////////////////////////////////*debut mutation archivage note de service *//////////////////////

// afficher des archivage note de service*
const GET_ALL_ARCHIVAGE_DOCUMENT = (state, tableauArchivageDocument) => {
  state.archivageDocuments = tableauArchivageDocument;
};
// ajouter note de service
const AJOUTER_ARCHIVAGE_DOCUMENT = (state, nouveau_archivage_document) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.archivageDocuments.unshift(nouveau_archivage_document);
};
// modifier note de service
const MODIFIER_ARCHIVAGE_DOCUMENT = (state, objetModifie) => {
  state.archivageDocuments = state.archivageDocuments.map(archivagedocument => {
    if (archivagedocument.id == objetModifie.id) {
      archivagedocument = { ...objetModifie };
    }

    return archivagedocument;
  });
};
// supprimer note de service
const SUPPRIMER_ARCHIVAGE_DOCUMENT = (state, id) => {
  state.archivageDocuments = state.archivageDocuments.filter(
    archivageDocuments => archivageDocuments.id != id
  );
};



const GET_ALL_UNITE_ZONE = (state, tableauBudgetGeneral) => {
  state.uniteZones = tableauBudgetGeneral;
};

// ajouter type_textes
const AJOUTER_UNITE_ZONE = (state, nouveau_budgetGeneral) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.uniteZones.unshift(nouveau_budgetGeneral);
};

// modifier type_textes
const MODIFIER_UNITE_ZONE = (state, objetModifie) => {
  state.uniteZones = state.uniteZones.map(type => {
    if (type.id == objetModifie.id) {
      type = { ...objetModifie };
    }

    return type;
  });
};

// supprimer type_texte
const SUPPRIMER_UNITE_ZONE = (state, id) => {
  state.uniteZones = state.uniteZones.filter(type => type.id != id);
};




const GET_ALL_TRANSFERT = (state, tableauBudgetGeneral) => {
  state.transferts = tableauBudgetGeneral;
};

// ajouter type_textes
const AJOUTER_TRANSFERT = (state, nouveau_budgetGeneral) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.transferts.unshift(nouveau_budgetGeneral);
};

// modifier type_textes
const MODIFIER_TRANSFERT = (state, objetModifie) => {
  state.transferts = state.transferts.map(type => {
    if (type.id == objetModifie.id) {
      type = { ...objetModifie };
    }

    return type;
  });
};

// supprimer type_texte
const SUPPRIMER_TRANSFERT = (state, id) => {
  state.transferts = state.transferts.filter(type => type.id != id);
};




const GET_ALL_HISTOTRANSFERT = (state, tableauBudgetGeneral) => {
  state.historiquetransferts = tableauBudgetGeneral;
};

// ajouter type_textes
const AJOUTER_HISTOTRANSFERT = (state, nouveau_budgetGeneral) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.historiquetransferts.unshift(nouveau_budgetGeneral);
};

// modifier type_textes
const MODIFIER_HISTOTRANSFERT = (state, objetModifie) => {
  state.historiquetransferts = state.historiquetransferts.map(type => {
    if (type.id == objetModifie.id) {
      type = { ...objetModifie };
    }

    return type;
  });
};

// supprimer type_texte
const SUPPRIMER_HISTOTRANSFERT = (state, id) => {
  state.historiquetransferts = state.historiquetransferts.filter(type => type.id != id);
};












const GET_ALL_DIRECTION = (state, tableauBudgetGeneral) => {
  state.directions = tableauBudgetGeneral;
};

// ajouter type_textes
const AJOUTER_DIRECTION = (state, nouveau_budgetGeneral) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.directions.unshift(nouveau_budgetGeneral);
};

// modifier type_textes
const MODIFIER_DIRECTION = (state, objetModifie) => {
  state.directions = state.directions.map(type => {
    if (type.id == objetModifie.id) {
      type = { ...objetModifie };
    }

    return type;
  });
};

// supprimer type_texte
const SUPPRIMER_DIRECTION = (state, id) => {
  state.directions = state.directions.filter(type => type.id != id);
};



const GET_ALL_SERVICE = (state, tableauBudgetGeneral) => {
  state.servicesua = tableauBudgetGeneral;
};

// ajouter type_textes
const AJOUTER_SERVICE = (state, nouveau_budgetGeneral) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.servicesua.unshift(nouveau_budgetGeneral);
};

// modifier type_textes
const MODIFIER_SERVICE = (state, objetModifie) => {
  state.servicesua = state.servicesua.map(type => {
    if (type.id == objetModifie.id) {
      type = { ...objetModifie };
    }

    return type;
  });
};

// supprimer type_texte
const SUPPRIMER_SERVICE = (state, id) => {
  state.servicesua = state.servicesua.filter(type => type.id != id);
};



const GET_ALL_FONCTION = (state, tableauBudgetGeneral) => {
  state.fonctionsua = tableauBudgetGeneral;
};

// ajouter type_textes
const AJOUTER_FONCTION = (state, nouveau_budgetGeneral) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.fonctionsua.unshift(nouveau_budgetGeneral);
};

// modifier type_textes
const MODIFIER_FONCTION = (state, objetModifie) => {
  state.fonctionsua = state.fonctionsua.map(type => {
    if (type.id == objetModifie.id) {
      type = { ...objetModifie };
    }

    return type;
  });
};

// supprimer type_texte
const SUPPRIMER_FONCTION = (state, id) => {
  state.fonctionsua = state.fonctionsua.filter(type => type.id != id);
};




export const GET_BUDGET_CHARGE = (state, tableauBudgetGeneral) => {
  state.budgeCharge = tableauBudgetGeneral;
};

// ajouter type_textes
export const AJOUTER_BUDGET_CHARGE = (state, nouveau_budgetGeneral) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.budgeCharge.unshift(nouveau_budgetGeneral);
};

// modifier type_textes
export const MODIFIER_BUDGET_CHARGE = (state, objetModifie) => {
  state.budgeCharge = state.budgeCharge.map(type => {
    if (type.id == objetModifie.id) {
      type = { ...objetModifie };
    }

    return type;
  });
};

// supprimer type_texte
export const SUPPRIMER_BUDGET_CHARGE = (state, id) => {
  state.budgeCharge = state.budgeCharge.filter(type => type.id != id);
};






export const GET_LIGNE_EXEMPTER = (state, tableauBudgetGeneral) => {
    state.ligneExempter = tableauBudgetGeneral;
};

// ajouter type_textes
export const AJOUTER_LIGNE_EXEMPTER = (state, nouveau_budgetGeneral) => {
    // state.typeTextes = [...nouveau_type, ...state.typeTextes]
    state.ligneExempter.unshift(nouveau_budgetGeneral);
};

// modifier type_textes
export const MODIFIER_LIGNE_EXEMPTER = (state, objetModifie) => {
    state.ligneExempter = state.ligneExempter.map(type => {
        if (type.id == objetModifie.id) {
            type = { ...objetModifie };
        }

        return type;
    });
};

// supprimer type_texte
export const SUPPRIMER_LIGNE_EXEMPTER = (state, id) => {
    state.ligneExempter = state.ligneExempter.filter(type => type.id != id);
};




const GET_ALL_REALITE_SERVICE_FAIT = (state, tableauBudgetGeneral) => {
  state.realiteServiceFait = tableauBudgetGeneral;
};

// ajouter type_textes
const AJOUTER_REALITE_SERVICE_FAIT = (state, nouveau_budgetGeneral) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.realiteServiceFait.unshift(nouveau_budgetGeneral);
};

// modifier type_textes
const MODIFIER_REALITE_SERVICE_FAIT = (state, objetModifie) => {
  state.realiteServiceFait = state.realiteServiceFait.map(type => {
    if (type.id == objetModifie.id) {
      type = { ...objetModifie };
    }

    return type;
  });
};

// supprimer type_texte
const SUPPRIMER_REALITE_SERVICE_FAIT = (state, id) => {
  state.realiteServiceFait = state.realiteServiceFait.filter(type => type.id != id);
};


const GET_ALL_LIQUIDATION = (state, tableauBudgetGeneral) => {
  state.liquidation = tableauBudgetGeneral;
};

// ajouter type_textes
const AJOUTER_LIQUIDATION = (state, nouveau_budgetGeneral) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.liquidation.unshift(nouveau_budgetGeneral);
};

// modifier type_textes
const MODIFIER_LIQUIDATION = (state, objetModifie) => {
  state.liquidation = state.liquidation.map(type => {
    if (type.id == objetModifie.id) {
      type = { ...objetModifie };
    }

    return type;
  });
};

// supprimer type_texte
const SUPPRIMER_LIQUIDATION = (state, id) => {
  state.liquidation = state.liquidation.filter(type => type.id != id);
};




export {

  GET_ALL_LIQUIDATION,
  AJOUTER_LIQUIDATION,
  MODIFIER_LIQUIDATION,
  SUPPRIMER_LIQUIDATION,

  GET_ALL_REALITE_SERVICE_FAIT,
  AJOUTER_REALITE_SERVICE_FAIT,
  MODIFIER_REALITE_SERVICE_FAIT,
  SUPPRIMER_REALITE_SERVICE_FAIT,



  GET_ALL_DIRECTION,
  AJOUTER_DIRECTION,
  MODIFIER_DIRECTION,
  SUPPRIMER_DIRECTION,

  GET_ALL_SERVICE,
  AJOUTER_SERVICE,
  MODIFIER_SERVICE,
  SUPPRIMER_SERVICE,

  GET_ALL_FONCTION,
  AJOUTER_FONCTION,
  MODIFIER_FONCTION,
  SUPPRIMER_FONCTION,













  GET_ALL_HISTOTRANSFERT,
  AJOUTER_HISTOTRANSFERT,
  MODIFIER_HISTOTRANSFERT,
  SUPPRIMER_HISTOTRANSFERT,

  GET_ALL_TRANSFERT,
  AJOUTER_TRANSFERT,
  MODIFIER_TRANSFERT,
  SUPPRIMER_TRANSFERT,



  GET_ALL_UNITE_ZONE,
  AJOUTER_UNITE_ZONE,
  MODIFIER_UNITE_ZONE,
  SUPPRIMER_UNITE_ZONE,




  GET_ALL_HISTORIQUE_BUDGET_GENERAL,
  AJOUTER_HISTORIQUE_BUDGET_GENERAL,
  MODIFIER_HISTORIQUE_BUDGET_GENERAL,
  SUPPRIMER_HISTORIQUE_BUDGET_GENERAL,



  GET_ALL_BUDGET_GENERAL,
  AJOUTER_BUDGET_GENERAL,
  MODIFIER_BUDGET_GENERAL,
  SUPPRIMER_BUDGET_GENERAL,





  GET_ALL_TYPES_TEXTES,
  AJOUTER_TYPE_TEXTE,
  MODIFIER_TYPE_TEXTES,
  SUPPRIMER_TYPE_TEXTE,
  /*export debut mutation ua */
  GET_ALL_UNITE_ADMINISTRATIVE,
  AJOUTER_UNITE_ADMINISTRATIVE,
  MODIFIER_UNITE_ADMINISTRATIVE,
  SUPPRIMER_UNITE_ADMINISTRATIVE,
  /*export fin mutation ua */

  /*export debut mutation note service */
  GET_ALL_ARCHIVAGE_DOCUMENT,
  AJOUTER_ARCHIVAGE_DOCUMENT,
  MODIFIER_ARCHIVAGE_DOCUMENT,
  SUPPRIMER_ARCHIVAGE_DOCUMENT
};
