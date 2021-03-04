import { groupBy } from "../../../../Repositories/Repository";

const typeTextes = state =>
  state.typeTextes.sort((a, b) => (a.code > b.code ? 1 : -1));

const uniteAdministratives = state =>
  state.uniteAdministratives.sort((a, b) => (a.code > b.code ? 1 : -1));
const archivageDocuments = state =>
  state.archivageDocuments.sort((a, b) => (a.reference > b.reference ? 1 : -1));



export const nombreUniteAdministratives = state =>
  state.uniteAdministratives.length;
export const nombreArchivageDocument = state => state.archivageDocuments.length;
export const nombreTypeText = state => state.typeTextes.length;
const budgetGeneral = state =>
  state.budgetGeneral.sort((a, b) => (a.code > b.code ? 1 : -1));

const historiquebudgetGeneral = state =>
  state.historiquebudgetGeneral.sort((a, b) => (a.code > b.code ? 1 : -1));
export const uniteZones = state =>
  state.uniteZones.sort((a, b) => (a.code > b.code ? 1 : -1));

// const listeDocUniteAdministratives = state =>
//   state.listeDocUniteAdministratives;
// const nbreUniteAdministratives = state => state.nbreUniteAdministratives;
// const nbreTypeTextes = state => state.nbreTypeTextes;

export const historiquemontantBudgetGeneral = (state, getters) =>
  getters.historiquebudgetGeneral.reduce(
    (prec, cur) => parseInt(prec) + parseInt(cur.Dotation_Initiale),
    0
  );


export const getPersonnaliseHistoriqueBudgetGeneral = (
  state,
  getters,
  rootState,
  rootGetters
) =>
  state.historiquebudgetGeneral.map(element => {
    if (
      element.gdenature_id !== null &&
      element.program_id !== null &&
      element.section_id !== null &&
      element.ua_id !== null &&
      element.typeua_id !== null &&
      element.fonctionnel_id !== null &&
      element.economique_id !== null &&
      element.action_id !== null &&
      element.activite_id !== null
    ) {
      element = {
        ...element,
        afficheGdeNature: rootGetters[
          "parametreGenerauxAdministratif/grandes_natures"
        ].find(Gdenat => Gdenat.id == element.gdenature_id),
        afficheSection: rootGetters["parametreGenerauxAdministratif/sections"].find(
          Secti => Secti.id == element.section_id
        ),
        afficheUA: rootGetters[
          "uniteadministrative/uniteAdministratives"
        ].find(uniteA => uniteA.id == element.ua_id),
        affichetypeua: rootGetters[
          "parametreGenerauxAdministratif/type_Unite_admins"
        ].find(typeUadmin => typeUadmin.id == element.typeua_id),
        afficheProgramme: rootGetters[
          "parametreGenerauxAdministratif/plans_programmes"
        ].find(planProg => planProg.id == element.program_id),
        afficheFonctionnel: rootGetters[
          "parametreGenerauxFonctionnelle/plans_fonctionnels"
        ].find(planfonct => planfonct.id == element.fonctionnel_id),
        afficheEconomique: rootGetters[
          "parametreGenerauxBudgetaire/plans_budgetaires"
        ].find(planEconomiq => planEconomiq.id == element.economique_id),
        afficheAction: rootGetters[
          "parametreGenerauxActivite/plans_activites"
        ].find(planaction => planaction.id == element.action_id),
        afficheActivite: rootGetters[
          "parametreGenerauxActivite/plans_activites"
        ].find(planactivite => planactivite.id == element.activite_id)
      };
    }
    return element;
  });

export const getPersonnaliseBudgetGeneral = (
  state,
  getters,
  rootState,
  rootGetters
) =>
  state.budgetGeneral.map(element => {
    if (
      element.gdenature_id !== null &&
      element.program_id !== null &&
      element.section_id !== null &&
      element.ua_id !== null &&
      element.typeua_id !== null &&
      element.fonctionnel_id !== null &&
      element.economique_id !== null &&
      element.action_id !== null &&
      element.activite_id !== null
    ) {
      element = {
        ...element,
        afficheGdeNature: rootGetters[
          "parametreGenerauxAdministratif/grandes_natures"
        ].find(Gdenat => Gdenat.id == element.gdenature_id),
        afficheSection: rootGetters["parametreGenerauxAdministratif/sections"].find(
          Secti => Secti.id == element.section_id
        ),
        afficheUA: rootGetters[
          "uniteadministrative/uniteAdministratives"
        ].find(uniteA => uniteA.id == element.ua_id),
        affichetypeua: rootGetters[
          "parametreGenerauxAdministratif/type_Unite_admins"
        ].find(typeUadmin => typeUadmin.id == element.typeua_id),
        afficheProgramme: rootGetters[
          "parametreGenerauxAdministratif/plans_programmes"
        ].find(planProg => planProg.id == element.program_id),
        afficheFonctionnel: rootGetters[
          "parametreGenerauxFonctionnelle/plans_fonctionnels"
        ].find(planfonct => planfonct.id == element.fonctionnel_id),
        afficheEconomique: rootGetters[
          "parametreGenerauxBudgetaire/plans_budgetaires"
        ].find(planEconomiq => planEconomiq.id == element.economique_id),
        afficheAction: rootGetters[
          "parametreGenerauxActivite/plans_activites"
        ].find(planaction => planaction.id == element.action_id),
        afficheActivite: rootGetters[
          "parametreGenerauxActivite/plans_activites"
        ].find(planactivite => planactivite.id == element.activite_id)
      };
    }
    return element;
  });

export const afficheBienEtService = state =>
  state.budgetGeneral.filter(
    affichenaturedep => affichenaturedep.testgdenature == 2
  );


export const groupUa = (state, getters) => {
  //delete getters.trieUaImmobilisation.
  return groupBy(getters.getPersonnaliseBudgetGeneral, "ua_id");
};

export const groupgranNature = (state, getters) => {
  //delete getters.trieUaImmobilisation.
  return groupBy(getters.getPersonnaliseBudgetGeneralParBienService, "gdenature_id");
};


export const getPersonnaliseBudgetGeneralParBienService = (
  state,
  getters,
  rootState,
  rootGetters
) =>
  getters.afficheBienEtService.map(element => {
    if (
      element.gdenature_id !== null &&
      element.program_id !== null &&
      element.section_id !== null &&
      element.ua_id !== null &&
      element.typeua_id !== null &&
      element.fonctionnel_id !== null &&
      element.economique_id !== null &&
      element.action_id !== null &&
      element.activite_id !== null
    ) {
      element = {
        ...element,
        afficheGdeNature: rootGetters[
          "parametreGenerauxAdministratif/grandes_natures"
        ].find(Gdenat => Gdenat.id == element.gdenature_id),
        afficheSection: rootGetters["parametreGenerauxAdministratif/sections"].find(
          Secti => Secti.id == element.section_id
        ),
        afficheUA: rootGetters[
          "uniteadministrative/uniteAdministratives"
        ].find(uniteA => uniteA.id == element.ua_id),
        affichetypeua: rootGetters[
          "parametreGenerauxAdministratif/type_Unite_admins"
        ].find(typeUadmin => typeUadmin.id == element.typeua_id),
        afficheProgramme: rootGetters[
          "parametreGenerauxAdministratif/plans_programmes"
        ].find(planProg => planProg.id == element.program_id),
        afficheFonctionnel: rootGetters[
          "parametreGenerauxFonctionnelle/plans_fonctionnels"
        ].find(planfonct => planfonct.id == element.fonctionnel_id),
        afficheEconomique: rootGetters[
          "parametreGenerauxBudgetaire/plans_budgetaires"
        ].find(planEconomiq => planEconomiq.id == element.economique_id),
        afficheAction: rootGetters[
          "parametreGenerauxActivite/plans_activites"
        ].find(planaction => planaction.id == element.action_id),
        afficheActivite: rootGetters[
          "parametreGenerauxActivite/plans_activites"
        ].find(planactivite => planactivite.id == element.activite_id)
      };
    }
    return element;
  });



export const affichePersonnel = state =>
  state.budgetGeneral.filter(
    affichenaturedep => affichenaturedep.testgdenature == 1
  );


export const getPersonnaliseBudgetGeneralParPersonnel = (
  state,
  getters,
  rootState,
  rootGetters
) =>
  getters.affichePersonnel.map(element => {
    if (
      element.gdenature_id !== null &&
      element.program_id !== null &&
      element.section_id !== null &&
      element.ua_id !== null &&
      element.typeua_id !== null &&
      element.fonctionnel_id !== null &&
      element.economique_id !== null &&
      element.action_id !== null &&
      element.activite_id !== null
    ) {
      element = {
        ...element,
        afficheGdeNature: rootGetters[
          "parametreGenerauxAdministratif/grandes_natures"
        ].find(Gdenat => Gdenat.id == element.gdenature_id),
        afficheSection: rootGetters["parametreGenerauxAdministratif/sections"].find(
          Secti => Secti.id == element.section_id
        ),
        afficheUA: rootGetters[
          "uniteadministrative/uniteAdministratives"
        ].find(uniteA => uniteA.id == element.ua_id),
        affichetypeua: rootGetters[
          "parametreGenerauxAdministratif/type_Unite_admins"
        ].find(typeUadmin => typeUadmin.id == element.typeua_id),
        afficheProgramme: rootGetters[
          "parametreGenerauxAdministratif/plans_programmes"
        ].find(planProg => planProg.id == element.program_id),
        afficheFonctionnel: rootGetters[
          "parametreGenerauxFonctionnelle/plans_fonctionnels"
        ].find(planfonct => planfonct.id == element.fonctionnel_id),
        afficheEconomique: rootGetters[
          "parametreGenerauxBudgetaire/plans_budgetaires"
        ].find(planEconomiq => planEconomiq.id == element.economique_id),
        afficheAction: rootGetters[
          "parametreGenerauxActivite/plans_activites"
        ].find(planaction => planaction.id == element.action_id),
        afficheActivite: rootGetters[
          "parametreGenerauxActivite/plans_activites"
        ].find(planactivite => planactivite.id == element.activite_id)
      };
    }
    return element;
  });

  
// cette fonction permetre d'afficher la grande nature dans l'investissement
  export const groupegranNature = (state, getters) => {
    //delete getters.trieUaImmobilisation.
    return groupBy(getters.getPersonnaliserBudgetGeneralParInvestissement, "gdenature_id");
  };


export const afficherTableauDuBudget = state => 
  state.budgetGeneral.filter(itemPourTrie => itemPourTrie.testgdenature == 4);


  export const getPersonnaliserBudgetGeneralParInvestissement = (
    state,
    getters,
    rootState,
    rootGetters
  ) =>
    getters.afficherTableauDuBudget.map(element => {
      if (
        element.gdenature_id !== null &&
        element.program_id !== null &&
        element.section_id !== null &&
        element.ua_id !== null &&
        element.typeua_id !== null &&
        element.fonctionnel_id !== null &&
        element.economique_id !== null &&
        element.action_id !== null &&
        element.activite_id !== null
      ) {
        element = {
          ...element,
          afficheGdeNature: rootGetters[
            "parametreGenerauxAdministratif/grandes_natures"
          ].find(Gdenat => Gdenat.id == element.gdenature_id),
          afficheSection: rootGetters["parametreGenerauxAdministratif/sections"].find(
            Secti => Secti.id == element.section_id
          ),
          afficheUA: rootGetters[
            "uniteadministrative/uniteAdministratives"
          ].find(uniteA => uniteA.id == element.ua_id),
          affichetypeua: rootGetters[
            "parametreGenerauxAdministratif/type_Unite_admins"
          ].find(typeUadmin => typeUadmin.id == element.typeua_id),
          afficheProgramme: rootGetters[
            "parametreGenerauxAdministratif/plans_programmes"
          ].find(planProg => planProg.id == element.program_id),
          afficheFonctionnel: rootGetters[
            "parametreGenerauxFonctionnelle/plans_fonctionnels"
          ].find(planfonct => planfonct.id == element.fonctionnel_id),
          afficheEconomique: rootGetters[
            "parametreGenerauxBudgetaire/plans_budgetaires"
          ].find(planEconomiq => planEconomiq.id == element.economique_id),
          afficheAction: rootGetters[
            "parametreGenerauxActivite/plans_activites"
          ].find(planaction => planaction.id == element.action_id),
          afficheActivite: rootGetters[
            "parametreGenerauxActivite/plans_activites"
          ].find(planactivite => planactivite.id == element.activite_id)
        };
      }
      return element;
    });



export const nbreNouveauProjet = state =>
  state.uniteAdministratives.filter(
    nouveauProjet => nouveauProjet.date_creation == null
  ).length;


export const jointureUaChapitreSection = (
  state,
  getters,
  rootState,
  rootGetters
) =>
  state.uniteAdministratives.map(element => {
    if (
      element.localisationgeo_id !== null &&
      element.servicegest_id !== null &&
      element.section_id !== null &&
      element.type_ua_id !== null &&
      element.nature_section_id !== null
    ) {
      element = {
        ...element,
        localgeo: rootGetters[
          "parametreGenerauxAdministratif/localisations_geographiques"
        ].find(chapitre1 => chapitre1.id == element.localisationgeo_id),
        secti: rootGetters["parametreGenerauxAdministratif/sections"].find(
          Secti => Secti.id == element.section_id
        ),
        naturesecti: rootGetters[
          "parametreGenerauxAdministratif/natures_sections"
        ].find(natureSecti => natureSecti.id == element.nature_section_id),
        typeua: rootGetters[
          "parametreGenerauxAdministratif/type_Unite_admins"
        ].find(typeUadmin => typeUadmin.id == element.type_ua_id),
        servivegest: rootGetters[
          "parametreGenerauxAdministratif/services_gestionnaires"
        ].find(planFonc => planFonc.id == element.servicegest_id)
      };
    }
    return element;
  });




const jointureUaChapitreSection1 = (
  state,
  getters,
  rootState,
  rootGetters
) =>
  state.uniteAdministratives.map(element => {
    if (
      element.chapitre_id !== null &&
      element.planfonctionnel_id !== null &&
      element.section_id !== null &&
      element.type_ua_id !== null
    ) {
      element = {
        ...element,
        chpitr: rootGetters["parametreGenerauxAdministratif/chapitres"].find(
          chapitre1 => chapitre1.id == element.chapitre_id
        ),
        secti: rootGetters["parametreGenerauxAdministratif/sections"].find(
          Secti => Secti.id == element.section_id
        ),
        typeua: rootGetters[
          "parametreGenerauxAdministratif/type_Unite_admins"
        ].find(typeUadmin => typeUadmin.id == element.type_ua_id),
        planFont: rootGetters[
          "parametreGenerauxFonctionnelle/plans_fonctionnels"
        ].find(planFonc => planFonc.id == element.planfonctionnel_id)
      };
    }
    return element;
  });


export const montantBudgetGeneral = (state, getters) =>
  getters.budgetGeneral.reduce(
    (prec, cur) => parseInt(prec) + parseInt(cur.Dotation_Initiale),
    0
  );





export {
  typeTextes,
  uniteAdministratives,
  archivageDocuments,
  jointureUaChapitreSection1,
  budgetGeneral,
  historiquebudgetGeneral
  // listeDocUniteAdministratives,
  // nbreUniteAdministratives,
  // nbreTypeTextes
};
