
const structures_budgetaires = state => state.structures_budgetaires
const plans_budgetaires = state => state.plans_budgetaires.sort((a, b) => (a.code > b.code) ? 1 : -1)


export {
    structures_budgetaires,
    plans_budgetaires

}