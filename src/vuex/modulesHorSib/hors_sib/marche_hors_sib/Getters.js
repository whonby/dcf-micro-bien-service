//import { groupBy } from "../../../../Repositories/Repository";
export const gettersMarcheHorsib = state => state.marcheHorsib

export  const getPersonnaliserMarchehorSib = (state, getters,rootState, rootGetters) =>
state.marcheHorsib.map(element => {
    if (element.unite_administrative_id !== null && element.activite_id !== null && element.economique_id !== null ){
        element = {
            ...element,
            objetUniteAdministrative:rootGetters['uniteadministrative/uniteAdministratives'].find(
               plans => plans.id == element.unite_administrative_id
            ),
            afficheActivite: rootGetters[
          "parametreGenerauxActivite/plans_activites"
        ].find(planactivite => planactivite.id == element.activite_id),
            afficheEconomique: rootGetters[
                "parametreGenerauxBudgetaire/plans_budgetaires"
            ].find(planactivite => planactivite.id == element.economique_id)
            
        }
        
    }
    return element;
})


