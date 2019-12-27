import { groupBy } from "../../../../Repositories/Repository";


const familles = state =>
  state.familles.sort((a, b) => (a.code > b.code ? 1 : -1));

const services = state =>
  state.services.sort((a, b) => (a.code > b.code ? 1 : -1));
const amortissements = state =>
  state.amortissements.sort((a, b) => (a.code > b.code ? 1 : -1));
const immobilisations = state =>
  state.immobilisations.sort((a, b) => (a.id > b.id ? 1 : -1));
// const besoinImmobilisations = state =>
//   state.besoinImmobilisations.sort((a, b) =>
//     a.quantite > b.quantite ? 1 : -1
//   );
const besoinImmobilisations = state =>state.besoinImmobilisations;
const equipements = state =>
  state.equipements.sort((a, b) => (a.code > b.code ? 1 : -1));

const normeEquipements = state => state.normeEquipements;
const articles = state => state.articles;
const stockageArticles = state => state.stockageArticles;





listeBesoinValider



export const listeImmoRealise = state =>
  state.immobilisations.filter(
    Immrealise => Immrealise.date_mise_service !== null
  );
export const listeImmoPrevue = state =>
  state.immobilisations.filter(
    Immrealise => Immrealise.date_mise_service == null
  );

// export const triAnneenCours = rootState =>
//   rootState.parametreGenerauxAdministratif / exercices_budgetaires.filter(
//     AnneeEncours => AnneeEncours.encours == 1
//   );

// export const triAnneenCours = rootState =>
//   rootState["parametreGenerauxAdministratif/exercices_budgetaires"].find(
//     AnneeEncours => AnneeEncours.encours == 1
//   );




////////////getter des migration des cle etrangere/////////

export const SuiviImmo = (state, getters, rootState, rootGetters) =>
  state.immobilisations.map(element => {
    if (
      element.famillearticle_id !== null &&
      element.acteurdepense_id !== null &&
      element.acteurdepense_id !== null &&
      element.uniteadministrative_id !== null &&
      element.typeuniteadminis_id !== null &&
      element.articleImmo_id !== null
      // element.besoinimmo_id !== null
    ) {
      element = {
        ...element,
        exoBudgetaire: rootGetters["parametreGenerauxAdministratif/exercices_budgetaires"].find(exercice => exercice.id == element.exercice_budgetaire_id),
        acteurDepense: rootGetters["personnelUA/personnaliseActeurDepense"].find(auteurDep => auteurDep.id == element.acteurdepense_id),
        uniteAdminist: rootGetters["uniteadministrative/uniteAdministratives"].find(uniteAdm => uniteAdm.id == element.uniteadministrative_id),

        familleImmo: rootGetters["SuiviImmobilisation/familles"].find(Famileimmo => Famileimmo.id == element.famillearticle_id),

        serviceImmo: rootGetters["SuiviImmobilisation/services"].find(servImmo => servImmo.id == element.service_id),
        typeUniteAdministrative: rootGetters["parametreGenerauxAdministratif/type_Unite_admins"].find(typeUniteAdmin => typeUniteAdmin.id == element.typeuniteadminis_id
        ),

        articleImmo: rootGetters["SuiviImmobilisation/articles"].find(artic => artic.id == element.articleImmo_id),
        // BesoinImmobilisation: rootGetters["SuiviImmobilisation/trieUaImmobilisation"].find(besoinimmo => besoinimmo.id == element.besoinimmo_id)

      };
    }

    return element;
  });

//////////////////////////////////////fin///////////////


export const getPersonnaliseSuivImmo = (state, getters, rootState, rootGetters) =>
  state.immobilisations.map(element => {
    if (element.famille_id !== null) {
      element = {
        ...element,
        familleImmo: rootGetters["SuiviImmobilisation/familles"].find(familImmo => familImmo.id == element.famille_id)
      };
    }

    return element;
  });

export const personBesoinImmo = (state, getters, rootState, rootGetters) =>
  state.besoinImmobilisations.map(element => {
    if (element.uniteadmin_id !== null && element.typeuniteadminist_id !== null) {
      element = {
        ...element,
        uniteAdminist: rootGetters[
          "uniteadministrative/uniteAdministratives"
        ].find(uniteAdm => uniteAdm.id == element.uniteadmin_id),
        typeUniteAdmin: rootGetters["parametreGenerauxAdministratif/type_Unite_admins"].find(
          typeUniteAdmin => typeUniteAdmin.id == element.typeuniteadminist_id
        )
      };
    }

    return element;
  });
besoinEquipement
export const trieUaBesoinImmo = state =>
  state.besoinImmobilisations.filter(
    trieUaBesoin => trieUaBesoin.quantite !== 0
  );
  export const getBesoinValider = state =>
           state.besoinImmobilisations.filter(
             trieUaBesoin => trieUaBesoin.motif_ua == 1 && trieUaBesoin.quantite !== 0
           );

export const trieDemandeValider = state =>
  state.besoinImmobilisations.filter(
    trieUaBesoin => trieUaBesoin.motif_demande !== 1
  );

export const nombreDemandeEquipement = (state, getters) =>
  getters.trieDemandeValider.length;


// export const trieAnneeEnCoursImmo = getters =>
//   getters.SuiviImmo.filter(
//     AfficherAnneeEnCours => AfficherAnneeEnCours.exoBudgetaire.encours == 1
//   );




export const listeBesoinValider = (state, getters, rootState, rootGetters) =>
         getters.getBesoinValider.map(element => {
           if (
             element.equipe_id &&
             element.article_id !== null &&
             element.uniteadmin_id !== null &&
             element.famille_id !== null &&
             element.typeuniteadminist_id !== null &&
             element.service_id !== null &&
             element.norme_id !== null &&
             element.fonction_id
           ) {
             element = {
               ...element,
               afficherFonction: rootGetters["personnelUA/fonctions"].find(
                 afficheService => afficheService.id == element.fonction_id
               ),
               afficherNorme: rootGetters["SuiviImmobilisation/normeEquipements"].find(
                 afficheService => afficheService.id == element.norme_id
               ),
               service: rootGetters["SuiviImmobilisation/services"].find(
                 afficheService => afficheService.id == element.service_id
               ),
               uniteAdminist: rootGetters[
                 "uniteadministrative/uniteAdministratives"
               ].find(uniteAdm => uniteAdm.id == element.uniteadmin_id),
               famille: rootGetters["SuiviImmobilisation/familles"].find(
                 equipefamille => equipefamille.id == element.famille_id
               ),
               typeUniteAdmin: rootGetters[
                 "parametreGenerauxAdministratif/type_Unite_admins"
               ].find(
                 typeUniteAdmin =>
                   typeUniteAdmin.id == element.typeuniteadminist_id
               ),
               afficheArticle: getters.articles.find(
                 affichArticles => affichArticles.id == element.article_id
               ),
               afficheEquipe: getters.equipements.find(
                 affichequip => affichequip.id == element.equipe_id
               )
             };
           }

           return element;
         });





export const ressultatBesoin = (state, getters, rootState, rootGetters) =>
  getters.besoinImmobilisations.map(element => {
    if (
      element.equipe_id &&
      element.article_id !== null &&
      element.uniteadmin_id !== null &&
      element.famille_id !== null &&
      element.typeuniteadminist_id !== null &&
      element.service_id !== null &&
      element.norme_id !== null &&
      element.fonction_id
    ) {
      element = {
        ...element,
        afficherFonction: rootGetters["personnelUA/fonctions"].find(
          afficheService => afficheService.id == element.fonction_id
        ),
        afficherNorme: rootGetters["SuiviImmobilisation/normeEquipements"].find(
          afficheService => afficheService.id == element.norme_id
        ),
        service: rootGetters["SuiviImmobilisation/services"].find(
          afficheService => afficheService.id == element.service_id
        ),
        uniteAdminist: rootGetters[
          "uniteadministrative/uniteAdministratives"
        ].find(uniteAdm => uniteAdm.id == element.uniteadmin_id),
        famille: rootGetters["SuiviImmobilisation/familles"].find(
          equipefamille => equipefamille.id == element.famille_id
        ),
        typeUniteAdmin: rootGetters[
          "parametreGenerauxAdministratif/type_Unite_admins"
        ].find(
          typeUniteAdmin =>
            typeUniteAdmin.id == element.typeuniteadminist_id
        ),
        afficheArticle: getters.articles.find(
          affichArticles => affichArticles.id == element.article_id
        ),
        afficheEquipe: getters.equipements.find(
          affichequip => affichequip.id == element.equipe_id
        )
      };
    }

    return element;
  });









export const trieUaImmobilisation = (state, getters, rootState, rootGetters) =>
  getters.trieUaBesoinImmo.map(element => {
    if (
      element.equipe_id !== null &&
      element.article_id !== null &&
      element.uniteadmin_id !== null &&
      element.famille_id !== null &&
      element.typeuniteadminist_id !== null &&

      element.fonction_id !== null
    ) {
      element = {
        ...element,
        fonctionActeur: rootGetters["personnelUA/fonctions"].find(fonctAct => fonctAct.id == element.fonction_id
        ),
      
        uniteAdminist: rootGetters[
          "uniteadministrative/uniteAdministratives"
        ].find(uniteAdm => uniteAdm.id == element.uniteadmin_id),
        famille: rootGetters["SuiviImmobilisation/familles"].find(
          equipefamille => equipefamille.id == element.famille_id
        ),
        typeUniteAdmin: rootGetters[
          "parametreGenerauxAdministratif/type_Unite_admins"
        ].find(
          typeUniteAdmin => typeUniteAdmin.id == element.typeuniteadminist_id
        ),
        afficheArticle: getters.articles.find(
          affichArticles => affichArticles.id == element.article_id
        ),
        afficheEquipe: getters.equipements.find(
          affichequip => affichequip.id == element.equipe_id
        )
      };
    }

    return element;
  });
export const trieUaImmo = (state, getters, rootState, rootGetters) =>
  getters.trieUaBesoinImmo.map(element => {
    if (element.uniteadmin_id !== null && element.famille_id !== null && element.typeuniteadminist_id !== null) {
      element = {
        ...element,
        uniteAdminist: rootGetters[
          "uniteadministrative/uniteAdministratives"
        ].find(uniteAdm => uniteAdm.id == element.uniteadmin_id),
        famille: rootGetters["SuiviImmobilisation/familles"].find(
          equipefamille => equipefamille.id == element.famille_id
        ),
        typeUniteAdmin: rootGetters["parametreGenerauxAdministratif/type_Unite_admins"].find(
          typeUniteAdmin => typeUniteAdmin.id == element.typeuniteadminist_id
        )
      };
    }

    return element;
  });



// export const groupTriUa = (state, getters) => {
//   //delete getters.trieUaImmobilisation.
//   return groupBy(getters.trieUaImmobilisation, "typeuniteadminist_id");
// };


//////////////// getter calcul des nombre////////////////
export const nombreTotalBesoinImmoUa = state =>
  state.besoinImmobilisations.length;
export const nombreFamilleArticle = state => state.familles.length;
export const nombreServices = state => state.services.length;
export const nombreAmortissement = state => state.amortissements.length;
export const nombreImmobilisation = state => state.besoinImmobilisations.length;
export const nbreImmoRealise = state =>
  state.besoinImmobilisations.filter(Immrealise => Immrealise.quantite == 0)
    .length;

export const NbreImmobilisationPrevue = state =>
  state.besoinImmobilisations.filter(
    immobilisationPrevu => immobilisationPrevu.quantite !== 0
  );

export const SommeEquipementPrevue = (state, getters) =>
  getters.NbreImmobilisationPrevue.reduce(
    (prec, cur) => parseInt(prec) + parseInt(cur.quantite),
    0
  );

export const SommeEquipementActuel = (state, getters) =>
  getters.SuiviImmo.reduce(
    (prec, cur) => parseInt(prec) + parseInt(cur.qte_actuel),
    0
  );

export const SommeEquipementRealise = (state, getters) =>
  getters.SuiviImmo.reduce(
    (prec, cur) => parseInt(prec) + parseInt(cur.qte_affecte),
    0
  );


export const nombreTotalEquipement = (state, getters) =>
  getters.besoinImmobilisations.reduce(
    (prec, cur) => parseInt(prec) + parseInt(cur.historiqueqte),
    0
  );

export const SommeTotalBesoin = (state, getters) =>
  getters.trieUaBesoinImmo.reduce(
    (prec, cur) => parseInt(prec) + parseInt(cur.montant_total),
    0
  );


// export const nombreTotalEquipement = (state, getters) => {
//   const val = parseInt(
//     getters.SommeEquipementPrevue + getters.SommeEquipementRealise
//   ).toFixed(0);
//   if (isNaN(val)) return null;
//   return val;
// };

export const tauxEquipementRealise = (state, getters) => {
  const val = parseFloat(
    (getters.SommeEquipementRealise / getters.nombreTotalEquipement) * 100
  ).toFixed(2);
  if (isNaN(val)) return null;
  return val;
};
export const tauxEquipementPrevue = (state, getters) => {
  const val = parseFloat(
    (getters.SommeEquipementPrevue / getters.nombreTotalEquipement) * 100
  ).toFixed(2);
  if (isNaN(val)) return null;
  return val;
};

export const tauxGlobalEquipement = (state, getters) => {
  const val = parseFloat(
    (getters.tauxEquipementRealise - getters.tauxEquipementPrevue)
  ).toFixed(2);
  if (isNaN(val)) return null;
  return val;
};

////////////////////getter calcul pourcentage///////////////
// export const volumeImmoPrevu = (state, getters) => {
//   const val = parseFloat(
//     getters.SommeEquipementPrevue / getters.nombreEquipement
//   ).toFixed(2);
//   if (isNaN(val)) return null;
//   return val;
// };

// export const tauximmobilisationUa = (state, getters) => {
//   const val = parseFloat((1 / getters.nombreImmobilisation) * 100).toFixed(2);
//   if (isNaN(val)) return null;
//   return val;
// };



export const persoEquipement = (state, getters, rootState, rootGetters) =>
  state.familles.map(element => {
    if (element.equipemt_id !== null) {
      element = {
        ...element,
        equipemt: rootGetters["SuiviImmobilisation/equipements"].find(
          typequipe => typequipe.id == element.equipemt_id
        )
      };
    }

    return element;
  });








export const getPersonnaliseImmobilisation = (
  state,
  getters,
  rootState,
  rootGetters
) =>
  state.immobilisations.map(element => {
    if (
      element.famille_id !== null &&
      element.uniteadministrative_id !== null &&
      element.service_id !== null &&
      element.exercice_budgetaire_id !== null &&
      element.acteurdepense_id !== null &&
      element.equipemt_id !== null
    ) {
      element = {
        ...element,
        uniteAdministrative: rootGetters[
          "uniteadministrative/uniteAdministratives"
        ].find(uniteAdm => uniteAdm.id == element.uniteadministrative_id),
        famille: rootGetters["SuiviImmobilisation/familles"].find(
          equipefamill => equipefamill.id == element.famille_id
        ),
        service: rootGetters["SuiviImmobilisation/services"].find(
          equipeservice => equipeservice.id == element.service_id
        ),
        acteurDepen: rootGetters["personnelUA/personnaliseActeurDepense"].find(
          acteurDepenUA => acteurDepenUA.id == element.acteurdepense_id
        ),
        exercBudget: rootGetters[
          "parametreGenerauxAdministratif/exercices_budgetaires"
        ].find(tempBudget => tempBudget.id == element.exercice_budgetaire_id),
        equipemt: rootGetters["SuiviImmobilisation/equipements"].find(
          equipe => equipe.id == element.equipemt_id
        )
      };
    }

    return element;
  });











// afficher les structure les moin equipe

export const StructureMoinEquipe = getters =>
  getters.besoinImmobilisations.filter(
    structureMoin => structureMoin.quantite !== 0
  );


export const afficheStructureMoinEquipe = (state, getters, rootState, rootGetters) =>
  getters.StructureMoinEquipe.map(element => {
    if (
      element.famille_id !== null &&
      element.acteurdepense_id !== null &&

      element.uniteadmin_id !== null &&
      element.typeuniteadminist_id !== null
    ) {
      element = {
        ...element,

        uniteAdminist: rootGetters["uniteadministrative/uniteAdministratives"].find(uniteAdm => uniteAdm.id == element.uniteadmin_id),

        famillebesoin: rootGetters["SuiviImmobilisation/familles"].find(FamileB => FamileB.id == element.famille_id),


        typeUniteAdministrative: rootGetters["parametreGenerauxAdministratif/type_Unite_admins"].find(typeUniteAdmin => typeUniteAdmin.id == element.typeuniteadminist_id
        )

      };
    }

    return element;
  });











// afficher les structure les plus équipe

export const StructurePlusEquipe = getters =>
  getters.immobilisations.filter(
    structureMoin => structureMoin.qte_actuel == 0
  );




export const afficheStructurePlusEquipe = (state, getters, rootState, rootGetters) =>
  getters.StructurePlusEquipe.map(element => {
    if (
      element.familleimmo_id !== null &&
      element.acteurdepense_id !== null &&
      element.acteurdepense_id !== null &&
      element.uniteadministrative_id !== null &&
      element.typeuniteadminis_id !== null &&
      element.besoinimmo_id !== null
    ) {
      element = {
        ...element,
        exoBudgetaire: rootGetters["parametreGenerauxAdministratif/exercices_budgetaires"].find(exercice => exercice.id == element.exercice_budgetaire_id),
        acteurDepense: rootGetters["personnelUA/personnaliseActeurDepense"].find(auteurDep => auteurDep.id == element.acteurdepense_id),
        uniteAdminist: rootGetters["uniteadministrative/uniteAdministratives"].find(uniteAdm => uniteAdm.id == element.uniteadministrative_id),

        familleImmo: rootGetters["SuiviImmobilisation/familles"].find(Famileimmo => Famileimmo.id == element.familleimmo_id),

        serviceImmo: rootGetters["SuiviImmobilisation/services"].find(servImmo => servImmo.id == element.service_id),
        typeUniteAdministrative: rootGetters["parametreGenerauxAdministratif/type_Unite_admins"].find(typeUniteAdmin => typeUniteAdmin.id == element.typeuniteadminis_id
        ),
        BesoinImmobilisation: rootGetters["SuiviImmobilisation/trieUaImmobilisation"].find(besoinimmo => besoinimmo.id == element.besoinimmo_id)

      };
    }

    return element;
  });



export const getPersoNormeArticle = (state, getters, rootState, rootGetters) =>
  state.normeEquipements.map(element => {
    if (element.fonction_id !== null && element.equipe_id !== null && element.famil_id !== null && element.typeua_id !== null && element.ua_id !== null && element.articl_id !== null ) {
      element = {
        ...element,
        
        fonctionActeur: rootGetters["personnelUA/fonctions"].find(fonctAct => fonctAct.id == element.fonction_id
        ),
        familleArt: rootGetters["SuiviImmobilisation/familles"].find(articleAffiche => articleAffiche.id == element.famil_id),
        equipemt: rootGetters["SuiviImmobilisation/equipements"].find(afficherEquipe => afficherEquipe.id == element.equipe_id),
        uniteAdminist: rootGetters["uniteadministrative/uniteAdministratives"].find(uniteAdm => uniteAdm.id == element.ua_id),
        typeuniteAdminist: rootGetters["parametreGenerauxAdministratif/type_Unite_admins"].find(typeuniteAdm => typeuniteAdm.id == element.typeua_id),
        affichierArticle: rootGetters["SuiviImmobilisation/articles"].find(articl => articl.id == element.articl_id)
      };
    }

    return element;
  });

trieUaImmobilisation


export const getFamilleEquipement = (state, getters, rootState, rootGetters) =>
  state.familles.map(element => {
    if (element.equipement_id !== null) {
      element = {
        ...element,

        AfficheEquipement: rootGetters["SuiviImmobilisation/equipements"].find(Equipe => Equipe.id == element.equipement_id
        )
       

      };
    }

    return element;
  });




export const getAfficheArticle = (state, getters) =>
  state.articles.map(element => {
    if (element.equipement_id !== null && element.famille_id !==null) {
      element = {
        ...element,

        AfficheEquipement: getters.equipements.find(Equipe => Equipe.id == element.equipement_id
        ),
        AfficheFamille: getters.familles.find(famille => famille.id == element.famille_id
        )


      };
    }

    return element;
  });

// export const getAfficheNormeEquipement = (state, getters, rootGetters) =>
//   state.normeEquipements.map(element => {
//     if (element.equipe_id !== null && element.famil_id !== null && element.fonction_id !== null ) {
//       element = {
//         ...element,

//         AfficheEquipement: rootGetters["SuiviImmobilisation/equipements"].find(Equipe => Equipe.id == element.equipe_id
//         ),
//         AfficheFamille: rootGetters["SuiviImmobilisation/familles"].find(famille => famille.id == element.famil_id),
        
//          fonctionActeur: rootGetters["personnelUA/fonctions"].find(fonctAct => fonctAct.id == element.fonction_id
//         )


//       };
//     }

//     return element;
//   });



export const getAfficheFamilleArticles = (state, getters) =>
  state.stockageArticles.map(element => {
    if (element.famill_id !== null && element.articlestock_id !== null) {
      element = {
        ...element,

        AfficheFamille: getters.familles.find(fam => fam.id == element.famill_id
        ),
        AfficheArticle: getters.articles.find(artic => artic.id == element.articlestock_id)
        // ),
        //  fonctionActeur: rootGetters["personnelUA/fonctions"].find(fonctAct => fonctAct.id == element.fonction_id
        // )


      };
    }

    return element;
  });

export const groupeEquipement = (state, getters) => {
  //delete getters.trieUaImmobilisation.
  return groupBy(getters.equipements, "equipe_id");
};

// export const groupeFamille = (state, getters) => {
//   //delete getters.trieUaImmobilisation.
//   return groupBy(getters.familles, "equipe_id");
// };


// export const getAfficheStockArticle = (state, getters, rootGetters,rootState) =>
//   state.stockageArticles.map(element => {
//     if (element.uAdministrative_id !== null && element.famill_id !== null && element.articlestock_id !== null) {
//       element = {
//         ...element,

//         AfficheArticle: getters.articles.find(VarArticles => VarArticles.id == element.articlestock_id
//         ),
//         AfficheFamille: getters.familles.find(famille => famille.id == element.famill_id
//         ),
//         uniteAdminist: rootGetters["uniteadministrative/uniteAdministratives"].find(uniteAdm => uniteAdm.id == element.uAdministrative_id)


//       };
//     }

//     return element;
//   });




export const getAfficheStockArticle = (
  state,
  getters
  
) =>
  state.stockageArticles.map(element => {
    if (
      element.typeequipe_id !== null &&
      element.famill_id !== null &&
      element.articlestock_id !== null 
     
     
    ) {
      element = {
        ...element,

        AfficheTypeequipement: getters.equipements.find(
          equipe => equipe.id == element.typeequipe_id
        ),
        famille: getters.familles.find(
          equipefamill => equipefamill.id == element.famill_id
        ),
        AfficheArticle: getters.articles.find(
          articlestock => articlestock.id == element.articlestock_id
        )
      };
    }

    return element;
  });


export const groupeTypeUniteAdmin = (state, getters) => {
  //delete getters.trieUaImmobilisation.
  return groupBy(getters.getAfficheStockArticle, "typeua_id");
};

export const groupUaNorme = (state, getters) => {
  //delete getters.trieUaImmobilisation.
  return groupBy(getters.getPersoNormeArticle, "typeua_id");
};
export const groupUaNormeEquipe = (state, getters) => {
  //delete getters.trieUaImmobilisation.
  return groupBy(getters.getPersoNormeArticle, "ua_id");
};
export const groupUaNormeFonction = (state, getters) => {
  //delete getters.trieUaImmobilisation.
  return groupBy(getters.getPersoNormeArticle, "fonction_id");
};
export const groupUaNormeFamille= (state, getters) => {
  //delete getters.trieUaImmobilisation.
  return groupBy(getters.getPersoNormeArticle, "famil_id");
};

export const groupTriUaImmo = (state, getters) => {
  //delete getters.trieUaImmobilisation.
  return groupBy(getters.listeBesoinValider, "typeuniteadminist_id");
};


export const totalQteEntrant = (state, getters) =>
  getters.stockageArticles.reduce(
    (prec, cur) => parseInt(prec) + parseInt(cur.quantitestock),
    0
  );
export const totalQteSortant = (state, getters) =>
  getters.stockageArticles.reduce(
    (prec, cur) => parseInt(prec) + parseInt(cur.qtesortie),
    0
  );

  export const totalQteNonCouvert = (state, getters) =>
    getters.listeBesoinValider.reduce(
      (prec, cur) => parseInt(prec) + parseInt(cur.montant_total),
    0
  );




// export const getterStockNorme = (
//   state,
//   getters,
 
// ) =>
//   state.normeEquipements.map(element => {
//     if (
//       element.stock_id !== null 
    

//     ) {
//       element = {
//         ...element,
       
//         afficherNormeStock: getters.getAfficheStockArticle.find(
//           afficheNorme => afficheNorme.id == element.stock_id
//         )
//       };
//     }

//     return element;
//   });


export const besoinEquipement1 = state =>
  state.besoinImmobilisations.filter(
    trieUaBesoin => trieUaBesoin.quantite !== 0
  );



export const besoinEquipement = (state, getters, rootState, rootGetters) =>
  getters.besoinEquipement1.map(element => {
    if (
      element.equipe_id !== null && 
      element.uniteadmin_id !== null  &&
      element.fonction_id !== null && 
      element.article_id !== null
    ) {
      element = {
        ...element,
       
      
        AfficheEquipement: rootGetters["SuiviImmobilisation/equipements"].find(Equipe => Equipe.id == element.equipe_id
        ),
        Afficheua: rootGetters["uniteadministrative/uniteAdministratives"].find(Equipe => Equipe.id == element.uniteadmin_id
        ),
        Affichefamille: rootGetters["SuiviImmobilisation/familles"].find(Equipe => Equipe.id == element.famille_id
        ),
        
        Affichefonction: rootGetters["personnelUA/fonctions"].find(Equipe => Equipe.id == element.fonction_id
        ),
        AfficheArticle: rootGetters["SuiviImmobilisation/articles"].find(Equipe => Equipe.id == element.article_id
        ),
      };
    }

    return element;
  });







getAfficheStockArticle



export {
  familles,
  services,
  amortissements,
  immobilisations,
  besoinImmobilisations,
  equipements,
  normeEquipements,
  articles,
  stockageArticles
};




