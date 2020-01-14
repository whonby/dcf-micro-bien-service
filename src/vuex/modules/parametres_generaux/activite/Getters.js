const structures_activites = state=> state.structures_activites.sort((a,b)=>(a.niveau>b.niveau)? 1:-1)

const plans_activites = state => state.plans_activites.sort((a, b) => (a.code > b.code) ? 1 : -1)


// export const afficheNiveauAction= state =>
//     state.plans_activites.filter(
//         affichenaturedep => affichenaturedep.code.length == 7
//     );
// export const afficheNiveauActivite = state =>
//     state.plans_activites.filter(
//         affichenaturedep => affichenaturedep.code.length == 11
//     );





export{
structures_activites,
    plans_activites

}