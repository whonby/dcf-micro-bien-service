
const structures_fonctionnelles = state => state.structures_fonctionnelles 
const plans_fonctionnels = state => state.plans_fonctionnels.sort((a, b) => (a.code > b.code) ? 1 : -1)

export const afficheNiveauPlanFonctionnel = state =>
    state.plans_fonctionnels.filter(
        affichenaturedep => affichenaturedep.code.length == 4
    );
export {

    structures_fonctionnelles,
    plans_fonctionnels
}


