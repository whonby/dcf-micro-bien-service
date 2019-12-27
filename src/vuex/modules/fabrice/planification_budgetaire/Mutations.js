/////////////////////////////////*debut mutation FAMILLE */////////////////////
// afficher FAMILLE*
const GET_ALL_BUDGET_GENERAL = (state, tableauBudgetGeneral) => {
  state.budgetGeneral = tableauBudgetGeneral;
};

// ajouter FAMILLE
const AJOUTER_BUDGET_GENERAL = (state, nouveau_budgetgeneral) => {
  // state.typeTextes = [...nouveau_type, ...state.typeTextes]
  state.budgetGeneral.unshift(nouveau_budgetgeneral);
};

// modifier FAMILLE
const MODIFIER_BUDGET_GENERAL = (state, objetModifie) => {
  state.budgetGeneral = state.budgetGeneral.map(budgetgenenale => {
    if (budgetgenenale.id == objetModifie.id) {
      budgetgenenale = { ...objetModifie };
    }

    return budgetgenenale;
  });
};

// supprimer FAMILLE
const SUPPRIMER_BUDGET_GENERAL = (state, id) => {
  state.budgetGeneral = state.budgetGeneral.filter(budgetgenenale => budgetgenenale.id != id);
};

/*fin mutation FAMILLE */




export {
  
  
  /* mutation BUDGET_GENERAL*/
  GET_ALL_BUDGET_GENERAL,
  AJOUTER_BUDGET_GENERAL,
  MODIFIER_BUDGET_GENERAL,
  SUPPRIMER_BUDGET_GENERAL,
  
};
