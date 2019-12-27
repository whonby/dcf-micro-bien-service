// import { groupBy } from "../../../../Repositories/Repository";

const budgetGeneral = state =>
  state.budgetGeneral.sort((a, b) => (a.code > b.code ? 1 : -1));

export const budgetGeneralUniteAdministrative = (state, getters, rootState, rootGetters) =>
  getters.getterspersoBudgetGeneral.map(element => {
    if (element.ua_id !== null && element.type_ua_id !== null) {
      element = {
        ...element,
        uniteAdminist: rootGetters[
          "uniteadministrative/jointureUaChapitreSection1"
        ].find(uniteAdm => uniteAdm.id == element.ua_id),
       
        typeUniteAdmin: rootGetters["parametreGenerauxAdministratif/type_Unite_admins"].find(
          typeUniteAdmin => typeUniteAdmin.id == element.type_ua_id
        )
      };
    }

    return element;
  });


export const getterspersoBudgetGeneral = (state, getters, rootState, rootGetters) =>
  state.budgetGeneral.map(element => {
    if (element.exercicebudget_id !== null
       && element.gdnaturedepense_id !== null 
     
      && element.planprogramme_id !== null
    
     
      && element.planbudgetaire_id !== null
      && element.sousfinancement_id !== null
      && element.typefinancement_id !== null
      && element.ua_id !== null
      && element.type_ua_id !== null
      
      
      
      ) {
      element = {
        ...element,
        uniteAdministrative: rootGetters[
          "uniteadministrative/uniteAdministratives"
        ].find(uniteAdm => uniteAdm.id == element.ua_id),
        exoBudgetaire: rootGetters["parametreGenerauxAdministratif/exercices_budgetaires"].find(
          exoBudget => exoBudget.id == element.exercicebudget_id
        ),
        grandeNatureDepense: rootGetters["parametreGenerauxAdministratif/grandes_natures"].find(
          natureDepense => natureDepense.id == element.gdnaturedepense_id
        ),
        planProgramme: rootGetters["parametreGenerauxAdministratif/plans_programmes"].find(
          programme => programme.id == element.planprogramme_id
        ),
        sousFinancement: rootGetters["parametreGenerauxSourceDeFinancement/sources_financements"].find(
          financement => financement.id == element.sousfinancement_id
        ),
        typeFinancement: rootGetters["parametreGenerauxSourceDeFinancement/types_financements"].find(
          finance => finance.id == element.typefinancement_id
        ),
        planBudget: rootGetters["parametreGenerauxBudgetaire/plans_budgetaires"].find(
          budget => budget.id == element.planbudgetaire_id
        ),
        typeua: rootGetters["parametreGenerauxAdministratif/type_Unite_admins"].find(
          typeuniteA => typeuniteA.id == element.type_ua_id
        )


      };
    }

    return element;
  });





export const SommeTotalBudgetDesUa = (state, getters) =>
  getters.budgetGeneral.reduce(
    (prec, cur) => parseInt(prec) + parseInt(cur.dotation),
    0
  );

// export const afficheNatureTransfert = getters =>
//   getters.budgetGeneralUniteAdministrative.filter(
//     afficheBudgetTransf => afficheBudgetTransf.grandeNatureDepense.code == 3
//   );

export {
  budgetGeneral
  
};

