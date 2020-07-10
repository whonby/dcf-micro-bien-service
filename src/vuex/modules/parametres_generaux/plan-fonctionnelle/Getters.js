
const Nature_des_prix = state => state.Nature_des_prix 
const Typeconges = state => state.typeconges 
const structures_fonctionnelles = state => state.structures_fonctionnelles 
const plans_fonctionnels = state => state.plans_fonctionnels.sort((a, b) => (a.code > b.code) ? 1 : -1)


export const structuresDecision = state => state.structuresDecision
export const plans_Decision = state => state.plans_Decision.sort((a, b) => (a.code > b.code) ? 1 : -1)

export const structureActe = state => state.structureActe
export const planActe = state => state.planActe.sort((a, b) => (a.code > b.code) ? 1 : -1)






export const afficheNiveauPlanFonctionnel = state =>
    state.plans_fonctionnels.filter(
        affichenaturedep => affichenaturedep.code.length == 4
    );
export {
    
    Nature_des_prix,
    Typeconges,
    structures_fonctionnelles,
    plans_fonctionnels
}   


