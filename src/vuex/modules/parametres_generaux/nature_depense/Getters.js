const structures_budgetaires = state=> state.structures_budgetaires.sort((a,b)=>(a.niveau>b.niveau)? 1:-1)
const plans_budgetaires = state => state.plans_budgetaires.sort((a,b)=>(a.code>b.code) ? 1:-1)





export const derniereNivoPlanBudgetaire = state =>
    state.plans_budgetaires.filter(
        trieUaBesoin => trieUaBesoin.structure_budgetaire.niveau == 6
    );





export{
structures_budgetaires,
plans_budgetaires

}