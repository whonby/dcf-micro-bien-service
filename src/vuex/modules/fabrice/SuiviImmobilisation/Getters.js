import { groupBy } from "../../../../Repositories/Repository";

export const Typebiengrpecorporels = state => state.Typebiengrpecorporels
export const groupecorporels = state => state.groupecorporels
export const AffectationUaBiens = state => state.AffectationUaBiens
export const marqueVehicules = state => state.marqueVehicules
export const ModeleVehicules = state => state.ModeleVehicules
export const TypeEntretien = state => state.TypeEntretien
export const TypeVehicule = state => state.TypeVehicule
export const TypeEnergie = state => state.TypeEnergie
export const TypeReparation = state => state.TypeReparation
export const Transmissions = state => state.Transmissions
export const AffectationVehicules = state => state.AffectationVehicules
export const Appreciations = state => state.Appreciations
export const factures = state => state.factures
export const normeImmo = state => state.normeImmo
export const demandeMateriel = state => state.demandeMateriel
export const natureEntres = state => state.natureEntres
export const causeInactivite = state => state.causeInactivite
export const EtatImmobilisations = state => state.EtatImmobilisations
export const historiqueAffectation = state => state.historiqueAffectation
export const historiqueAffectationService = state => state.historiqueAffectationService
export const demandeService = state => state.demandeService
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
const articles = state => state.articles.sort((a, b) => (a.libelle > b.libelle ? 1 : -1));
const stockageArticles = state => state.stockageArticles;


export const ficheArticle = state =>state.ficheArticle;



export const getterUa_idImo=state=>state.ua_idImo


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
      element.uniteadministrative_id !== null &&
      element.typeuniteadminis_id !== null &&
      element.articleImmo_id !== null &&
       element.fonction_id !== null
    ) {
      element = {
        ...element,
        // exoBudgetaire: rootGetters["parametreGenerauxAdministratif/exercices_budgetaires"].find(exercice => exercice.id == element.exercice_budgetaire_id),
        acteurDepense: rootGetters["personnelUA/personnaliseActeurDepense"].find(auteurDep => auteurDep.id == element.acteurdepense_id),
        uniteAdminist: rootGetters["uniteadministrative/uniteAdministratives"].find(uniteAdm => uniteAdm.id == element.uniteadministrative_id),

        familleImmo: rootGetters["SuiviImmobilisation/familles"].find(Famileimmo => Famileimmo.id == element.famillearticle_id),

        fonctionImmo: rootGetters["personnelUA/fonctions"].find(fonctImmo => fonctImmo.id == element.fonction_id),
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

export const SommeQuantiteRealise = (state, getters) =>
  getters.besoinImmobilisations.reduce(
    (prec, cur) => parseInt(prec) + parseInt(cur.totalrealise),
    0
  );

  export const nbreQuantiteDemande = (state, getters) =>
           getters.besoinImmobilisations.reduce(
             (prec, cur) => parseInt(prec) + parseInt(cur.historiqueqte),
             0
  );
           

   export const nbreQuantiteNonCouvert = (state, getters) =>
            getters.besoinImmobilisations.reduce(
              (prec, cur) => parseInt(prec) + parseInt(cur.quantite),
              0
  );
            

   export const nbreQuantiteCouvert = (state, getters) =>
            getters.besoinImmobilisations.reduce(
              (prec, cur) => parseInt(prec) + parseInt(cur.qterealise),
              0
            );
         



  
export const SommeQuantiteNonCouvert = (state, getters) =>
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


getPersoStock





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



export const getPersoStock = (state, getters, rootState, rootGetters) =>
  state.stockageArticles.map(element => {
    if (element.typeua_id !== null && element.uAdministrative_id !== null && element.typeequipe_id !== null && element.famill_id !== null && element.articlestock_id !== null) {
      element = {
        ...element,

      
        famille: rootGetters["SuiviImmobilisation/familles"].find(articleAffiche => articleAffiche.id == element.famill_id),
        AfficheTypeequipement: rootGetters["SuiviImmobilisation/equipements"].find(afficherEquipe => afficherEquipe.id == element.typeequipe_id),
        uniteAdminist: rootGetters["uniteadministrative/uniteAdministratives"].find(uniteAdm => uniteAdm.id == element.uAdministrative_id),
        typeuniteAdminist: rootGetters["parametreGenerauxAdministratif/type_Unite_admins"].find(typeuniteAdm => typeuniteAdm.id == element.typeua_id),
        AfficheArticle: rootGetters["SuiviImmobilisation/articles"].find(articl => articl.id == element.articlestock_id)
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


// export const getAfficheStockArticle2 = (state, getters, rootGetters,rootState) =>
//   state.stockageArticles.map(element => {
//     if (element.articlestock_id !== null ) {
//       element = {
//         ...element,

       
//         uniteAdminist: rootGetters["uniteadministrative/uniteAdministratives"].find(uniteAdm => uniteAdm.id == element.articlestock_id)


//       };
//     }

//     return element;
//   });




// export const getAfficheStockArticle = (
//   state,
//   getters,
//   rootGetters
  
// ) =>
//   getters.stockageArticles.map(element => {
//     if (
//       element.typeequipe_id !== null &&
//       element.famill_id !== null &&
//       element.articlestock_id !== null &&
//       element.typeua_id !== null 
//       // element.typeua_id !== null 
     
     
//     ) {
//       element = {
//         ...element,

//         AfficheTypeequipement: rootGetters["SuiviImmobilisation/equipements"].find(
//           equipe => equipe.id == element.typeequipe_id
//         ),
//         famille: rootGetters["SuiviImmobilisation/familles"].find(
//           equipefamill => equipefamill.id == element.famill_id
//         ),
//         AfficheArticle: rootGetters["SuiviImmobilisation/articles"].find(
//           articlestock => articlestock.id == element.articlestock_id

//         ),
//         // uniteAdminist: rootGetters["uniteadministrative/uniteAdministratives"].find(uniteAdm => uniteAdm.id == element.uAdministrative_id),
//         typeuniteAdminist: rootGetters["parametreGenerauxAdministratif/type_Unite_admins"].find(typeuniteAdm => typeuniteAdm.id == element.typeua_id)
//       };
//     }

//     return element;
//   });

export const groupeTypeUniteAdmin = (state, getters) => {
  //delete getters.trieUaImmobilisation.
  return groupBy(getters.getPersoStock, "typeua_id");
};

export const groupeTypeUniteAdmin1 = (state, getters) => {
  //delete getters.trieUaImmobilisation.
  return groupBy(getters.getPersoNormeArticle, "typeua_id");
};
export const groupUatypeNorme = (state, getters) => {
  //delete getters.trieUaImmobilisation.
  return groupBy(getters.getPersoListeDesNorme, "typeua_id");
};
export const groupUaNorme = (state, getters) => {
  //delete getters.trieUaImmobilisation.
  return groupBy(getters.getPersoListeDesNorme, "ua_id");
};
export const groupUaNormeEquipe = (state, getters) => {
  //delete getters.trieUaImmobilisation.
  return groupBy(getters.getPersoNormeArticle, "equipe_id");
};
export const groupUaNormeFonction = (state, getters) => {
  //delete getters.trieUaImmobilisation.
  return groupBy(getters.getPersoNormeArticle, "fonction_id");
};
export const groupUaNormeFamille = (state, getters) => {
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

export const groupStock = (state, getters) => {
  //delete getters.trieUaImmobilisation.
  return groupBy(getters.getPersoStock, "typeequipe_id");
};
export const groupStockFammile = (state, getters) => {
  //delete getters.trieUaImmobilisation.
  return groupBy(getters.getPersoStock, "famill_id");
};

export const regroupeEquipementCouvert = getters =>
  getters.immobilisations.filter(
    structureMoin => structureMoin.qte_actuel == 0
  );

export const afficheRegroupeEquipementCouvert = (state, getters) => {
  //delete getters.trieUaImmobilisation.
  return groupBy(getters.regroupeEquipementCouvert, "acteurdepense_id");
};





// export const voiruntest = (state, getters, rootState, rootGetters) =>
//   getters.afficheRegroupeEquipementCouvert.map(element => {
//     if (element.acteurdepense_id !== null ) {
//       element = {
//         ...element,
        
//         fonctionActeur: rootGetters["personnelUA/acteur_depense"].find(fonctAct => fonctAct.id == element.acteurdepense_id
//         ),
        
//       };
//     }

//     return element;
//   });


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
SommeQuantiteNonCouvert

export const besoinEquipement1 = state =>
  state.besoinImmobilisations.filter(
    trieUaBesoin => trieUaBesoin.quantite !== 0
  );

export const besoinEquipementRealise = state =>
  state.besoinImmobilisations.filter(
    trieUaBesoin => trieUaBesoin.qterealise !== 0
  );

export const besoinRealiseEquipement = (state, getters, rootState, rootGetters) =>
  getters.besoinEquipementRealise.map(element => {
    if (
      element.equipe_id !== null &&
      element.uniteadmin_id !== null &&
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




export const afficherDirection = state =>
  state.besoinImmobilisations.filter(
    trieUaBesoin => trieUaBesoin.direction == "Direction"
  );





export const afficherFonction = state =>
  state.besoinImmobilisations.filter(
    trieUaBesoin => trieUaBesoin.identifier_dmd_fonction == 1
  );


export const afficherDemandeParService = state =>
  state.besoinImmobilisations.filter(
    trieUaBesoin => trieUaBesoin.identifier_dmd_service == 2
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







export const getPersoListeDesNorme = (state, getters, rootState, rootGetters) =>
  state.normeEquipements.map(element => {
    if (element.fonction_id !== null && element.equipe_id !== null && element.famil_id !== null && element.typeua_id !== null && element.ua_id !== null) {
      element = {
        ...element,

        fonctionActeur: rootGetters["personnelUA/fonctions"].find(fonctAct => fonctAct.id == element.fonction_id
        ),
        familleArt: rootGetters["SuiviImmobilisation/familles"].find(articleAffiche => articleAffiche.id == element.famil_id),
        equipemt: rootGetters["SuiviImmobilisation/equipements"].find(afficherEquipe => afficherEquipe.id == element.equipe_id),
        uniteAdminist: rootGetters["uniteadministrative/uniteAdministratives"].find(uniteAdm => uniteAdm.id == element.ua_id),
        typeuniteAdminist: rootGetters["parametreGenerauxAdministratif/type_Unite_admins"].find(typeuniteAdm => typeuniteAdm.id == element.typeua_id),

      };
    }

    return element;
  });
SommeQuantiteRealise




export const historiqueDemande = (state, getters, rootState, rootGetters) =>
  getters.besoinImmobilisations.map(element => {
    if (
      element.equipe_id !== null &&
      element.uniteadmin_id !== null &&
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



export const getPersonnaliseNormeEquipement = (state, getters, rootState, rootGetters) =>
  state.normeImmo.map(element => {
    if (element.famille_id !== null && element.service_id !== null) {
      element = {
        ...element,
        familleImmo: rootGetters["SuiviImmobilisation/familles"].find(familImmo => familImmo.id == element.famille_id),
        serviceImmo: rootGetters["uniteadministrative/servicesua"].find(familImmo => familImmo.id == element.service_id)
      };
    }

    return element;
  });






export const equipementNonCouvert = (state, getters, rootState, rootGetters) =>
  state.normeImmo.map(element => {
    if (element.fonction_id != null ) {
      element = {
        ...element, 
        Affichefonction: rootGetters["personnelUA/acte_personnels"].find(Equipe => Equipe.fonction_id == element.fonction_id
        ),
        
      };
    }

    return element;
  });

export const afficherNorme = state =>
  state.normeImmo.filter(
    trieUaBesoin => trieUaBesoin.service_id != null
  );
export const groupeServiceNorme = (state, getters) => {
  //delete getters.trieUaImmobilisation.
  return groupBy(getters.afficherNorme, "service_id");
};


export const afficherNormeFonction = state =>
  state.normeImmo.filter(
    trieUaBesoin => trieUaBesoin.fonction_id != null
  );
export const groupeFonctionNormeEquipe = (state, getters) => {
  //delete getters.trieUaImmobilisation.
  return groupBy(getters.afficherNormeFonction, "fonction_id");
};



export const groupeUaAffectation = (state, getters) => {
  //delete getters.trieUaImmobilisation.
  return groupBy(getters.immobilisations, "uniteadministrative_id");
};

export const groupeAffectationUaBiens = (state, getters) => {
  //delete getters.trieUaImmobilisation.
  return groupBy(getters.AffectationUaBiens, "ua_mettrice_id");
};




export const groupeArticle = (state, getters) => {
  //delete getters.trieUaImmobilisation.
  return groupBy(getters.articles, "libelle");
};






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



