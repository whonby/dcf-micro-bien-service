
// get all plan fonctionnelle


const GET_NATUREPRIX = (state, tableau_nature_prix) => {

    state.Nature_des_prix = tableau_nature_prix
}

// ajouter source de financement
const AJOUTER_NATUREPRIX = (state , nouvel_objet) => {
    state.Nature_des_prix.unshift(nouvel_objet)
}

// suppression de source de financement
const SUPPRIMER_NATUREPRIX = (state ,id) => {
    state.Nature_des_prix = state.Nature_des_prix.filter(nature => 
        nature.id !=id)
}

//modifier siource de financement
const MODIFIER_NATUREPRIX = (state, objetModifie) => {
   
    state.Nature_des_prix = state.Nature_des_prix.map(nature => {

        if(nature.id == objetModifie.id){
            nature = {...objetModifie}

        }
        return nature
    })
}




// get all plan fonctionnelle


const GET_TYPECONGES = (state, tableau_typeconges) => {

    state.typeconges = tableau_typeconges
}

// ajouter source de financement
const AJOUTER_TYPECONGES = (state , nouvel_objet) => {
    state.typeconges.unshift(nouvel_objet)
}

// suppression de source de financement
const SUPPRIMER_TYPECONGES = (state ,id) => {
    state.typeconges = state.typeconges.filter(conges => 
        conges.id !=id)
}

//modifier siource de financement
const MODIFIER_TYPECONGES = (state, objetModifie) => {
   
    state.typeconges = state.typeconges.map(conges => {

        if(conges.id == objetModifie.id){
            conges = {...objetModifie}

        }
        return conges
    })
}

// get all plan fonctionnelle


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







// get all plan fonctionnelle
const GET_PLAN_ACTE = (state, tableau_plan_fonctionnele) => {
    state.planActe = tableau_plan_fonctionnele
}

// ajouter type de financement 
const AJOUTER_PLAN_ACTE = (state, nouvel_objet) => {

    state.planActe.unshift(nouvel_objet)
}
// modififier type de financement 
const MODIFIER_PLAN_ACTE = (state, objetModifie) => {

    state.planActe = state.planActe.map(plan_fonctionnelle => {
        if (plan_fonctionnelle.id == objetModifie.id) {
            plan_fonctionnelle = { ...objetModifie }
        }
        return plan_fonctionnelle
    })
}

// suppression de source de financement
const SUPPRIMER_PLAN_ACTE = (state, id) => {
    state.planActe = state.planActe.filter(plan_fonctionnelle =>
        plan_fonctionnelle.id != id)
}






const GET_STRUCTURE_ACTE = (state, tableau_structure_fonctionnelle) => {

    state.structureActe = tableau_structure_fonctionnelle
}

// ajouter source de financement
const AJOUTER_STRUCTURE_ACTE = (state, nouvel_objet) => {
    state.structureActe.unshift(nouvel_objet)
}

// suppression de source de financement
const SUPPRIMER_STRUCTURE_ACTE = (state, id) => {
    state.structureActe = state.structureActe.filter(fonctionnelle =>
        fonctionnelle.id != id)
}

//modifier siource de financement
const MODIFIER_STRUCTURE_ACTE = (state, objetModifie) => {

    state.structureActe = state.structureActe.map(fonctionnelle => {

        if (fonctionnelle.id == objetModifie.id) {
            fonctionnelle = { ...objetModifie }

        }
        return fonctionnelle
    })
}







export {

    GET_NATUREPRIX,
    AJOUTER_NATUREPRIX,
    SUPPRIMER_NATUREPRIX,
    MODIFIER_NATUREPRIX,

    GET_TYPECONGES,
    AJOUTER_TYPECONGES,
    SUPPRIMER_TYPECONGES,
    MODIFIER_TYPECONGES,

    GET_STRUCTURE_DECISION,
    AJOUTER_STRUCTURE_DECISION,
    SUPPRIMER_STRUCTURE_DECISION,
    MODIFIER_STRUCTURE_DECISION,

    GET_PLAN_DECISION,
    AJOUTER_PLAN_DECISION,
    MODIFIER_PLAN_DECISION,
    SUPPRIMER_PLAN_DECISION,


    GET_STRUCTURE_ACTE,
    AJOUTER_STRUCTURE_ACTE,
    SUPPRIMER_STRUCTURE_ACTE,
    MODIFIER_STRUCTURE_ACTE,

    GET_PLAN_ACTE,
    AJOUTER_PLAN_ACTE,
    MODIFIER_PLAN_ACTE,
    SUPPRIMER_PLAN_ACTE,



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
