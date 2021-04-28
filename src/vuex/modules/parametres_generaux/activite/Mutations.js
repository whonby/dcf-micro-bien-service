const GET_ACTIVITE = (state , tableau_structure_activite) => {

    state.structures_activites = tableau_structure_activite
}

//  ajouter structure budgetaire
const AJOUTER_STRUCTURE_ACTIVITE = (state , nouveuaObjet) => {
    state.structures_activites.unshift(nouveuaObjet)
}
// modifier structure budgetaire 
const MODIFIER_STRUCTURE_ACTIVITE = (state , objetModifie) => {

    state.structures_activites = state.structures_activites.map( budgetaire => {

    if(budgetaire.id == objetModifie.id){
        budgetaire = {...objetModifie}
    }
    return budgetaire
    })
}
// supprimer structure budgetaire
const SUPPRIMER_STRUCTURE_ACTIVITE = (state , id) =>{

    state.structures_activites = state.structures_activites.filter( budgetaire => budgetaire.id != id)
}



const GET_PLAN_ACTIVITE = (state, tableau_plan_activite) => {

    state.plans_activites = tableau_plan_activite
}

//  ajouter structure budgetaire
const AJOUTER_PLAN_ACTIVITE = (state, nouveuaObjet) => {
    state.plans_activites.unshift(nouveuaObjet)
}

//  importation structure budgetaire
const IMPORTATION_PLAN_ACTIVITE = (state, nouveuaObjet) => {
    state.plans_activites.unshift(nouveuaObjet)
}
// modifier structure budgetaire 
const MODIFIER_PLAN_ACTIVITE = (state, objetModifie) => {

    state.plans_activites = state.plans_activites.map(budgetaire => {

        if (budgetaire.id == objetModifie.id) {
            budgetaire = { ...objetModifie }
        }
        return budgetaire
    })
}
// supprimer structure budgetaire
const SUPPRIMER_PLAN_ACTIVITE = (state, id) => {

    state.plans_activites = state.plans_activites
.filter(budgetaire => budgetaire.id != id)
}














export const GET_STRUCTURE_INFRASTRUCTURE = (state , tableau_structure_activite) => {

    state.structures_Infrastructures = tableau_structure_activite
}

//  ajouter structure budgetaire
export const AJOUTER_STRUCTURE_INFRASTRUCTURE = (state , nouveuaObjet) => {
    state.structures_Infrastructures.unshift(nouveuaObjet)
}
// modifier structure budgetaire 
export const MODIFIER_STRUCTURE_INFRASTRUCTURE = (state , objetModifie) => {

    state.structures_Infrastructures = state.structures_Infrastructures.map( budgetaire => {

    if(budgetaire.id == objetModifie.id){
        budgetaire = {...objetModifie}
    }
    return budgetaire
    })
}
// supprimer structure budgetaire
export const SUPPRIMER_STRUCTURE_INFRASTRUCTURE = (state , id) =>{

    state.structures_Infrastructures = state.structures_Infrastructures.filter( budgetaire => budgetaire.id != id)
}



export const GET_PLAN_INFRASTRUCTURE = (state, tableau_plan_activite) => {

    state.plans_Infrastructures = tableau_plan_activite
}

//  ajouter structure budgetaire
export const AJOUTER_PLAN_INFRASTRUCTURE = (state, nouveuaObjet) => {
    state.plans_Infrastructures.unshift(nouveuaObjet)
}
// modifier structure budgetaire 
export const MODIFIER_PLAN_INFRASTRUCTURE = (state, objetModifie) => {

    state.plans_Infrastructures = state.plans_Infrastructures.map(budgetaire => {

        if (budgetaire.id == objetModifie.id) {
            budgetaire = { ...objetModifie }
        }
        return budgetaire
    })
}
// supprimer structure budgetaire
export const SUPPRIMER_PLAN_INFRASTRUCTURE = (state, id) => {

    state.plans_Infrastructures = state.plans_Infrastructures
.filter(budgetaire => budgetaire.id != id)
}


export{

    GET_ACTIVITE,
    AJOUTER_STRUCTURE_ACTIVITE,
    MODIFIER_STRUCTURE_ACTIVITE,
    SUPPRIMER_STRUCTURE_ACTIVITE,

    GET_PLAN_ACTIVITE,
    AJOUTER_PLAN_ACTIVITE,
    MODIFIER_PLAN_ACTIVITE,
    SUPPRIMER_PLAN_ACTIVITE,
    IMPORTATION_PLAN_ACTIVITE,
 
}