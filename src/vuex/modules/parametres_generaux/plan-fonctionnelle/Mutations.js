
const GET_STRUCTURE_FONCTIONNELLE = (state, tableau_structure_fonctionnelle) => {

    state.structures_fonctionnelles = tableau_structure_fonctionnelle
}

// ajouter source de financement
const AJOUTER_STRUCTURE_FONCTIONNELLE = (state , nouvel_objet) => {
    state.structures_fonctionnelles.unshift(nouvel_objet)
}

// suppression de source de financement
const SUPPRIMER_STRUCTURE_FONCTIONNELLE = (state ,id) => {
    state.structures_fonctionnelles = state.structures_fonctionnelles.filter(fonctionnelle => 
        fonctionnelle.id !=id)
}

//modifier siource de financement
const MODIFIER_STRUCTURE_FONCTIONNELLE = (state, objetModifie) => {
   
    state.structures_fonctionnelles = state.structures_fonctionnelles.map(fonctionnelle => {

        if(fonctionnelle.id == objetModifie.id){
            fonctionnelle = {...objetModifie}

        }
        return fonctionnelle
    })
}

// get all plan fonctionnelle
const GET_PLAN_FONCTIONNELLE = (state, tableau_plan_fonctionnele) =>{
    state.plans_fonctionnels = tableau_plan_fonctionnele
}

// ajouter type de financement 
const AJOUTER_PLAN_FONCTIONNELLE = (state ,nouvel_objet) =>{

state.plans_fonctionnels.unshift(nouvel_objet)
}
// modififier type de financement 
const MODIFIER_PLAN_FONCTIONNELLE = (state,objetModifie) => {

    state.plans_fonctionnels = state.plans_fonctionnels.map(plan_fonctionnelle => {
        if(plan_fonctionnelle.id == objetModifie.id){
            plan_fonctionnelle = {...objetModifie}
        }
        return plan_fonctionnelle
    })
}

// suppression de source de financement
const SUPPRIMER_PLAN_FONCTIONNELLE = (state ,id) => {
    state.plans_fonctionnels = state.plans_fonctionnels.filter(plan_fonctionnelle => 
        plan_fonctionnelle.id !=id)
}
















const GET_STRUCTURE_DECISION = (state, tableau_structure_fonctionnelle) => {

    state.structuresDecision = tableau_structure_fonctionnelle
}

// ajouter source de financement
const AJOUTER_STRUCTURE_DECISION = (state, nouvel_objet) => {
    state.structuresDecision.unshift(nouvel_objet)
}

// suppression de source de financement
const SUPPRIMER_STRUCTURE_DECISION = (state, id) => {
    state.structuresDecision = state.structuresDecision.filter(fonctionnelle =>
        fonctionnelle.id != id)
}

//modifier siource de financement
const MODIFIER_STRUCTURE_DECISION = (state, objetModifie) => {

    state.structuresDecision = state.structuresDecision.map(fonctionnelle => {

        if (fonctionnelle.id == objetModifie.id) {
            fonctionnelle = { ...objetModifie }

        }
        return fonctionnelle
    })
}

// get all plan fonctionnelle
const GET_PLAN_DECISION = (state, tableau_plan_fonctionnele) => {
    state.plans_Decision = tableau_plan_fonctionnele
}

// ajouter type de financement 
const AJOUTER_PLAN_DECISION = (state, nouvel_objet) => {

    state.plans_Decision.unshift(nouvel_objet)
}
// modififier type de financement 
const MODIFIER_PLAN_DECISION = (state, objetModifie) => {

    state.plans_Decision = state.plans_Decision.map(plan_fonctionnelle => {
        if (plan_fonctionnelle.id == objetModifie.id) {
            plan_fonctionnelle = { ...objetModifie }
        }
        return plan_fonctionnelle
    })
}

// suppression de source de financement
const SUPPRIMER_PLAN_DECISION = (state, id) => {
    state.plans_Decision = state.plans_Decision.filter(plan_fonctionnelle =>
        plan_fonctionnelle.id != id)
}


















export {

    GET_STRUCTURE_DECISION,
    AJOUTER_STRUCTURE_DECISION,
    SUPPRIMER_STRUCTURE_DECISION,
    MODIFIER_STRUCTURE_DECISION,

    GET_PLAN_DECISION,
    AJOUTER_PLAN_DECISION,
    MODIFIER_PLAN_DECISION,
    SUPPRIMER_PLAN_DECISION,






// exportation de source de financement
GET_STRUCTURE_FONCTIONNELLE,
AJOUTER_STRUCTURE_FONCTIONNELLE,
SUPPRIMER_STRUCTURE_FONCTIONNELLE,
MODIFIER_STRUCTURE_FONCTIONNELLE,
// exportation de type de financement
GET_PLAN_FONCTIONNELLE,
AJOUTER_PLAN_FONCTIONNELLE,
MODIFIER_PLAN_FONCTIONNELLE,
SUPPRIMER_PLAN_FONCTIONNELLE
}
