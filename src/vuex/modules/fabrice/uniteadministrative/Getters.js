import { groupBy } from "../../../../Repositories/Repository";

montantBudgetGeneral
// const typeTextes = state =>
//   state.typeTextes.sort((a, b) => (a.code > b.code ? 1 : -1));
export const organigrammeUa = state => state.organigrammeUa;
export const servicesua = state => state.servicesua;
export const directions = state => state.directions;
export const fonctionsua = state => state.fonctionsua;
export const banqueUa = state => state.banqueUa;
export const decomptefactures = state => state.decomptefactures;
export const realiteServiceFait = state => state.realiteServiceFait;
export const liquidation = state => state.liquidation;
const uniteAdministratives = state =>
  state.uniteAdministratives.sort((a, b) => (a.code > b.code ? 1 : -1));
// const archivageDocuments = state =>
//   state.archivageDocuments.sort((a, b) => (a.reference > b.reference ? 1 : -1));
// export const directions = state =>
//   state.directions.sort((a, b) => (a.id > b.id ? 1 : -1));
// export const servicesua = state =>
//   state.servicesua.sort((a, b) => (a.id > b.id ? 1 : -1));
// export const fonctionsua = state =>
//   state.fonctionsua.sort((a, b) => (a.id > b.id ? 1 : -1));


//export const banqueUa = state => state.banqueUa;
export const nombreUniteAdministratives = state =>
  state.uniteAdministratives.length;
export const nombreArchivageDocument = state => state.archivageDocuments.length;
export const nombreTypeText = state => state.typeTextes.length;
const budgetGeneral = state =>
  state.budgetGeneral.sort((a, b) => (a.code > b.code ? 1 : -1));
export const nombreTransfert = state => state.transferts.length;
const historiquebudgetGeneral = state =>
  state.historiquebudgetGeneral.sort((a, b) => (a.code > b.code ? 1 : -1));
export const uniteZones = state =>
  state.uniteZones.sort((a, b) => (a.code > b.code ? 1 : -1));
export const transferts = state =>
  state.transferts.sort((a, b) => (a.num_transfert > b.num_transfert ? 1 : -1));
export const historiquetransferts = state =>
  state.historiquetransferts.sort((a, b) => (a.date_jours > b.date_jours ? 1 : -1));
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
    affichenaturedep => affichenaturedep.gdenature_id == 5 && affichenaturedep.actived==1
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


// afficher le 


export const groupgranNaturePersonnel = (state, getters) => {
  //delete getters.trieUaImmobilisation.
  return groupBy(getters.getPersonnaliseBudgetGeneralParPersonnel, "gdenature_id");
};



export const affichePersonnel = state =>
  state.budgetGeneral.filter(
    affichenaturedep => affichenaturedep.gdenature_id == 2
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




  // afficher le getter persponnaliser d'investissement


  
export const groupgranNatureInvestissement = (state, getters) => {
  //delete getters.trieUaImmobilisation.
  return groupBy(getters.getPersonnaliseBudgetGeneralParInvestissement, "gdenature_id");
};



export const afficherInvestissement = state =>
  state.budgetGeneral.filter(
    affichenaturedep => affichenaturedep.gdenature_id == 7
  );


export const getPersonnaliseBudgetGeneralParInvestissement = (
  state,
  getters,
  rootState,
  rootGetters
) =>
  getters.afficherInvestissement.map(element => {
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



export const getPersonnaliseTransfert = (
  state,
  getters,
  rootState,
  rootGetters
) =>
  state.transferts.map(element => {
    if (
      element.grandnatire_id !== null &&
      
      element.acteurdepense_id !== null &&
      element.ua_id !== null &&
     
      element.ligne_budgetaire_id !== null 
     
    ) {
      element = {
        ...element,
        afficheGdeNature: rootGetters[
          "parametreGenerauxAdministratif/grandes_natures"
        ].find(Gdenat => Gdenat.id == element.grandnatire_id),
        afficheAceurDepense: rootGetters["personnelUA/acteur_depenses"].find(
          Secti => Secti.id == element.acteurdepense_id
        ),
        afficheUA: rootGetters[
          "uniteadministrative/uniteAdministratives"
        ].find(uniteA => uniteA.id == element.ua_id),
       
      
        
        afficheEconomique: rootGetters[
          "parametreGenerauxBudgetaire/plans_budgetaires"
        ].find(planEconomiq => planEconomiq.id == element.ligne_budgetaire_id),
       
      };
    }
    return element;
  });





export const afficheTransfert = state =>
  state.budgetGeneral.filter(
    affichenaturedep => affichenaturedep.gdenature_id == 6
  );


export const getPersonnaliseBudgetGeneralParTransfert = (
  state,
  getters,
  rootState,
  rootGetters
) =>
  getters.afficheTransfert.map(element => {
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


export const afficheTransfertValider = state =>
  state.transferts.filter(
    affichenaturedep => affichenaturedep.decision_cf == 1
  );

export const afficheNbreTransfertValider = state =>
  state.transferts.filter(
    affichenaturedep => affichenaturedep.decision_cf == 1
  ).length;


export const nombreUniteZoneValider = state =>
  state.transferts.filter(
    marcheNonAttribue => marcheNonAttribue.decision_cf == 1
  ).length;

export const montantTransfert = (state, getters) =>
  getters.getPersonnaliseBudgetGeneralParTransfert.reduce(
    (prec, cur) => parseInt(prec) + parseInt(cur.Dotation_Initiale),
    0
  );
export const montantTransferer = (state, getters) =>
  getters.afficheTransfertValider.reduce(
    (prec, cur) => parseInt(prec) + parseInt(cur.montant_total_contrat),
    0
  );
export const montantTransfererGlobal = (state, getters) =>
  getters.transferts.reduce(
    (prec, cur) => parseInt(prec) + parseInt(cur.montant_total_contrat),
    0
  );


export const afficheTransfertEnAnttente = state =>
  state.transferts.filter(
    affichenaturedep => affichenaturedep.decision_cf == 0
  );
export const afficheNbreTransfertEnAnttente = state =>
  state.transferts.filter(
    affichenaturedep => affichenaturedep.decision_cf == 0
  ).length;
export const montantTransfererGlobalAttente = (state, getters) =>
  getters.afficheTransfertEnAnttente.reduce(
    (prec, cur) => parseInt(prec) + parseInt(cur.montant_total_contrat),
    0
  );

export const afficheTransfertDiffere = state =>
  state.transferts.filter(
    affichenaturedep => affichenaturedep.decision_cf == 2
  );
export const afficheNbreTransfertDiffere = state =>
  state.transferts.filter(
    affichenaturedep => affichenaturedep.decision_cf == 2
  ).length;
export const montantTransfererGlobalDifferer = (state, getters) =>
  getters.afficheTransfertDiffere.reduce(
    (prec, cur) => parseInt(prec) + parseInt(cur.montant_total_contrat),
    0
  );

export const afficheTransfertRejeter = state =>
  state.transferts.filter(
    affichenaturedep => affichenaturedep.decision_cf == 3
  );
export const affichenbreTransfertRejeter = state =>
  state.transferts.filter(
    affichenaturedep => affichenaturedep.decision_cf == 3
  ).length;
export const montantTransfererGlobalRejeter = (state, getters) =>
  getters.afficheTransfertRejeter.reduce(
    (prec, cur) => parseInt(prec) + parseInt(cur.montant_total_contrat),
    0
  );


export const getPersonnaliseHistoriqueTransfert = (
  state,
  getters,
  rootState,
  rootGetters
) =>
  state.historiquetransferts.map(element => {
    if (
      element.grandnatire_id !== null &&

      element.acteurdepense_id !== null &&

      element.ua_id !== null &&

      element.ligne_budgetaire_id !== null && 
      element.unitezone_id !== null &&
      element.motif !== null

    ) {
      element = {
        ...element,
        afficheMotifDecission: rootGetters[
          "bienService/motifDecisions"
        ].find(Gdenat => Gdenat.id == element.motif),
        afficheGdeNature: rootGetters[
          "parametreGenerauxAdministratif/grandes_natures"
        ].find(Gdenat => Gdenat.id == element.grandnatire_id),
        afficheAceurDepense: rootGetters["personnelUA/acteur_depenses"].find(
          Secti => Secti.id == element.acteurdepense_id
        ),
        afficheUA: rootGetters[
          "uniteadministrative/uniteAdministratives"
        ].find(uniteA => uniteA.id == element.ua_id),



        afficheEconomique: rootGetters[
          "parametreGenerauxBudgetaire/plans_budgetaires"
        ].find(planEconomiq => planEconomiq.id == element.ligne_budgetaire_id),

        afficheUniteZone: rootGetters[
          "uniteadministrative/uniteZones"
        ].find(planEconomiq => planEconomiq.id == element.unitezone_id),

      };
    }
    return element;
  });



export const afficheBudgetActive = state =>
  state.budgetGeneral.filter(
    affichenaturedep => affichenaturedep.actived == 1
  );



// export const listeTransfertEnAttente = state =>
//   state.uniteAdministratives.filter(
//     marcheNonAttribue1 => marcheNonAttribue1.decision_cf == 0
//   );
// export const listeTransfertVise = state =>
//   state.uniteAdministratives.filter(
//     marcheNonAttribue => marcheNonAttribue.uatransfert.decision_cf == 1
//   );
// export const listeTransfertDifferer = state =>
//   state.uniteAdministratives.filter(
//     marcheNonAttribue => marcheNonAttribue.uatransfert.decision_cf == 2
//   );
// export const listeTransfertRejete = state =>
//   state.uniteAdministratives.filter(
//     marcheNonAttribue => marcheNonAttribue.uatransfert.decision_cf == 3
//   );

export const groupBudgetGeneral = (state, getters) => {
  //delete getters.trieUaImmobilisation.
  return groupBy(getters.budgetGeneral, "ua_id");
};
export {
  // typeTextes,
  uniteAdministratives,
  // archivageDocuments,
  jointureUaChapitreSection1,
  budgetGeneral,
  historiquebudgetGeneral
  // listeDocUniteAdministratives,
  // nbreUniteAdministratives,
  // nbreTypeTextes
};


export const getterBudgeCharge = state => state.budgeCharge;
export const getterligneExempter = state => state.ligneExempter;

