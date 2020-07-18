// import { groupBy } from "../../../../Repositories/Repository";
const titres = state => state.titres.sort((a, b) => (a.code > b.code) ? 1 : -1)

const exercices_budgetaires = state => state.exercices_budgetaires.sort((a,b)=>(a.annee>b.annee)? 1:-1)
const taux = state => state.taux.sort((a, b) => (a.libelle > b.libelle) ? 1 : -1)
const natures_sections = state => state.natures_sections.sort((a,b)=>(a.code>b.code)? 1:-1)
const sections = state => state.sections.sort((a,b)=>(a.code>b.code)? 1:-1)
const structures_programmes = state=>state.structures_programmes.sort((a,b)=>(a.niveau>b.niveau)? 1:-1)
const structures_administratives = state => state.structures_administratives.sort((a,b)=>(a.niveau>b.niveau)? 1:-1)
const plans_programmes = state => state.plans_programmes.sort((a,b)=>(a.code>b.code)? 1:-1)
const services_gestionnaires = state => state.services_gestionnaires.sort((a,b)=>(a.code>b.code)? 1:-1)
const chapitres = state => state.chapitres.sort((a,b)=>(a.code>b.code)? 1:-1)
const grandes_natures = state => state.grandes_natures.sort((a,b)=>(a.code>b.code)? 1:-1)
const structures_geographiques = state => state.structures_geographiques.sort((a,b)=>(a.niveau>b.niveau)? 1:-1)
const localisations_geographiques = state => state.localisations_geographiques.sort((a,b)=>(a.code>b.code)? 1:-1)
const type_Unite_admins = state => state.type_Unite_admins
// const organigrammeUa = state => state.organigrammeUa
export const getterformeJuridique = state => state.formejuridiques
export const getterregimeImpositions = state => state.regimeImpositions
export const getterstructures_pays = state => state.strutures_pays.sort((a, b) => (a.niveau > b.niveau) ? 1 : -1)
export const getterplan_pays = state => state.plan_pays.sort((a, b) => (a.code > b.code) ? 1 : -1)
// export const titreFiltres = (state, search) => {

export const getterstructuresOrganisationUa = state => state.structureOrganigrammeUa.sort((a, b) => (a.niveau > b.niveau) ? 1 : -1)
export const getterplanOrganisationUa = state => state.planOrganigrammeUa.sort((a, b) => (a.code > b.code) ? 1 : -1)
// const searchTerm = search.toLowerCase();

// return state.titres.filter((item) => {
  
//     return item.code.toLowerCase().includes(searchTerm) 
//     // || item.prenom.toLowerCase().includes(searchTermPrenom) 
//     || item.libelle.toLowerCase().includes(searchTerm) 

//    }
// )

// }
// export const groupeService1 = (state, getters) => {
//     //delete getters.trieUaImmobilisation.
//     return groupBy(getters.planOrganigrammeUa, "serviceua_id");
// };
export const afficheNiveauPlanProg = state =>
    state.plans_programmes.filter(
        affichenaturedep => affichenaturedep.code.length ==  5
           
        
        
    );
export const afficheNatureTransfert = state =>
    state.grandes_natures.filter(
        affichenaturedep => affichenaturedep.code != 3
    );
    export const afficheServiceGestionnaireNiveau4 = state =>
    state.services_gestionnaires.filter(
        afficheSeviceG => afficheSeviceG.code.length == 8
    );
    export const afficheLocalisationGeoNiveau5 = state =>
             state.localisations_geographiques.filter(
               afficheSeviceG =>
                     afficheSeviceG.code.length == 6
             );

export {
    
    taux,
    titres,
    exercices_budgetaires,
    natures_sections,
    sections,
    structures_programmes,
    structures_administratives,
    plans_programmes,
    services_gestionnaires,
    chapitres,
    grandes_natures,
    structures_geographiques,
    localisations_geographiques,
    type_Unite_admins
}






