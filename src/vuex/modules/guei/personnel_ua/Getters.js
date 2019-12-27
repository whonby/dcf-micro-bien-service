const type_acte_personnels = state => state.type_acte_personnels;
const fonctions  = state => state.fonctions;
const classes =state => state.classes;
const niveau_etudes =state => state.niveau_etudes;
const type_contrats =state => state.type_contrats;
const type_salaries =state => state.type_salaries;
const grades =state => state.grades;
const echellons =state => state.echellons;
const acteur_depenses =state =>state.acteur_depenses;
const nbr_acteur_actredite_taux=state =>state.nbr_acteur_actredite_taux;
const detail_acteurs=state =>state.detail_acteurs;
const salaire_actuel_acteur=state =>state.salaire_actuel_acteur;
const all_salaires_acteurs =state =>state.all_salaires_acteurs;
const acte_personnels =state =>state.acte_personnels;
const load_act_personnel_acteur=state =>state.load_act_personnel_acteur;
const conges =state =>state.conges;
const conge_acteur_depense=state =>state.conge_acteur_depense;
const all_acteur_depense=state =>state.all_acteur_depense;
const temp_moyen_fin_activite_interruption=state =>state.temp_moyen_fin_activite_interruption;
const delais_mise_disposition_act=state =>state.delais_mise_disposition_act;
const jour_conge_disponible_acteur=state =>state.jour_conge_disponible_acteur;
const totalActeurEnctivite =state =>state.acte_personnels.filter(acteur_depense=>acteur_depense.date_fin_contrat==null ).length;
const totalActeurDepense =state => state.all_acteur_depense.length;
const totalActeurNonAccredite =state =>(state.acte_personnels.filter(acteur_depense=>acteur_depense.type_acte_id!='4' && acteur_depense.date_fin_contrat==null ).length);
const totalActeurAccredite =state =>(state.acte_personnels.filter(acteur_depense=>acteur_depense.type_acte_id=='4' && acteur_depense.date_fin_contrat==null).length);
const tauxActeurAccredite= (state,getters )=> parseFloat((getters.totalActeurAccredite*100)/getters.totalActeurEnctivite).toFixed(2);

const tous_salaire_actuel_acteur=state=>state.tous_salaire_actuel_acteur

const list_acteur_fin_contrat_activite=state=>state.list_acteur_fin_contrat_activite
export const personnaliseActeurDepense = (state, getters, rootState, rootGetters) =>
    state.all_acteur_depense.map(element => {
        if (element.unite_administrative_id !== null ) {
            element = {
                ...element,
                uniteAdmin: rootGetters['uniteadministrative/uniteAdministratives'].find(
                    section => section.id === element.unite_administrative_id
                ),
                salaireActeur: rootGetters['personnelUA/tous_salaire_actuel_acteur'].find(
                    act=>act.acte_personnel_id === element.acte_personnel_id
                ),
            };
        }

        return element;
    });

export const personnaliseActeurFinContrat = (state, getters, rootState, rootGetters) =>
    state.list_acteur_fin_contrat_activite.map(element => {
        if (element.unite_administrative_id !== null ) {
            element = {
                ...element,
                uniteAdmin: rootGetters['uniteadministrative/uniteAdministratives'].find(
                    section => section.id === element.unite_administrative_id
                ),
                salaireActeur: rootGetters['personnelUA/tous_salaire_actuel_acteur'].find(
                    act=>act.acte_personnel_id === element.acte_personnel_id
                ),
            };
        }

        return element;
    });



export const personnaFonction = (state, getters, rootState, rootGetters) =>
    state.acteur_depenses.map(element => {
        if (element.fonction_id !== null && element.unite_administrative_id !== null) {
            element = {
                ...element,
               
                fonctionActeur: rootGetters['personnelUA/fonctions'].find(
                    act => act.id === element.fonction_id
                ),
                uniteAdmin: rootGetters['uniteadministrative/uniteAdministratives'].find(
                    section => section.id === element.unite_administrative_id
                ),
            };
        }

        return element;
    });






export {
    type_acte_personnels,
    fonctions,
    classes,
    niveau_etudes,
    type_contrats,
    type_salaries,
    echellons,
    grades,
    acteur_depenses,
    nbr_acteur_actredite_taux,
    detail_acteurs,
    salaire_actuel_acteur,
    all_salaires_acteurs,
    acte_personnels,
    load_act_personnel_acteur,
    conges,
    conge_acteur_depense,
    all_acteur_depense,
    temp_moyen_fin_activite_interruption,
    delais_mise_disposition_act,
    jour_conge_disponible_acteur,
    totalActeurEnctivite,
    totalActeurDepense,
    totalActeurAccredite,
    totalActeurNonAccredite,
    tauxActeurAccredite,
    tous_salaire_actuel_acteur,
    list_acteur_fin_contrat_activite,
   // exercices_budgetaires
}

