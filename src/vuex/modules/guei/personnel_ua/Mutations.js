
/**
 * Mutation echelons
 */
/**
 *
 * @param state
 * @param data
 * @constructor
 */
export const GET_PERMISSION_CONGE = (state, data) => {
    state.permissionConge = data
}


export const AJOUTER_PERMISSION_CONGE = (state, nouvel_objet) => {
    state.permissionConge.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]
}

/**
 * Suppresions
 * @param state
 * @param id
 * @constructor
 */
export const SUPPRIMER_PERMISSION_CONGE = (state, id) => {
    state.permissionConge = state.permissionConge.filter(op => op.id != id)
}


export const MODIFIER_PERMISSION_CONGE = (state, objetModifie) => {
    state.permissionConge = state.permissionConge.map(op => {
        if (op.id == objetModifie.id) {
            op = { ...objetModifie }
        }
        return op
    })
}

/**























/**
 * Mutation echelons
 */
/**
 *
 * @param state
 * @param data
 * @constructor
 */
const GET_ORDRE_DE_PAIEMENT = (state, data) => {
    state.ordre_paiement = data
}


const AJOUTER_ORDRE_DE_PAIEMENT = (state, nouvel_objet) => {
    state.ordre_paiement.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]
}

/**
 * Suppresions
 * @param state
 * @param id
 * @constructor
 */
const SUPPRIMER_ORDRE_DE_PAIEMENT = (state, id) => {
    state.ordre_paiement = state.ordre_paiement.filter(op => op.id != id)
}


const MODIFIER_ORDRE_DE_PAIEMENT = (state, objetModifie) => {
    state.ordre_paiement = state.ordre_paiement.map(op => {
        if (op.id == objetModifie.id) {
            op = { ...objetModifie }
        }
        return op
    })
}

/**





/**
 * Mutation echelons
 */
/**
 *
 * @param state
 * @param data
 * @constructor
 */
const GET_PAIEMENTPERSONNEL = (state, data) => {
    state.paiementPersonnel = data
}


const AJOUTER_PAIEMENTPERSONNEL = (state, nouvel_objet) => {
    state.paiementPersonnel.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]
}

/**
 * Suppresions
 * @param state
 * @param id
 * @constructor
 */
const SUPPRIMER_PAIEMENTPERSONNEL = (state, id) => {
    state.paiementPersonnel = state.paiementPersonnel.filter(paiementPerso => paiementPerso.id != id)
}


const MODIFIER_PAIEMENTPERSONNEL = (state, objetModifie) => {
    state.paiementPersonnel = state.paiementPersonnel.map(paiementPerso => {
        if (paiementPerso.id == objetModifie.id) {
            paiementPerso = { ...objetModifie }
        }
        return paiementPerso
    })
}

/**


/**
 * Mutation type act personnel
 */
/**
 * Recuperation des type act
 * @param state
 * @param tableau_type_acte_personnels
 * @constructor
 */
const GET_TYPE_ACTE_PERSONNELS = (state, tableau_type_acte_personnels) => {
    state.type_acte_personnels = tableau_type_acte_personnels
}


const GET_SALAIRE_ACTUEL = (state, tableau_type_acte_personnels) => {
    state.tous_salaire_actuel_acteur = tableau_type_acte_personnels
}
/**
 * Ajouter type act personnel
 * @param state
 * @param nouvel_objet
 * @constructor
 */
const AJOUTER_TYPE_ACTE_PERSONNELS = (state, nouvel_objet) => {
    state.type_acte_personnels.unshift(nouvel_objet)
   // state.titres = [...nouvel_objet, ...state.titres]

}

/**
 * Suppresions
 * @param state
 * @param id
 * @constructor
 */
const SUPPRIMER_TYPE_ACTE_PERSONNELS= (state, id) => {
    state.type_acte_personnels = state.type_acte_personnels.filter(titre => titre.id != id)
}


const MODIFIER_TYPE_ACTE_PERSONNELS = (state, objetModifie) => {
    state.type_acte_personnels = state.type_acte_personnels.map(type_acte_personnel => {
        if(type_acte_personnel.id == objetModifie.id){
            type_acte_personnel = {...objetModifie}
        }
        return type_acte_personnel
    })
}

/**
 * Fin de type acte
 */


/**
 * Mutation fonctions
 */
/**
 *
 * @param state
 * @param data
 * @constructor
 */
const GET_FONCTIONS = (state, data) => {
    state.fonctions = data
}


const AJOUTER_FOCNTIONS = (state, nouvel_objet) => {
    state.fonctions.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]
}

/**
 * Suppresions
 * @param state
 * @param id
 * @constructor
 */
const SUPPRIMER_FONCTIONS= (state, id) => {
    state.fonctions = state.fonctions.filter(fonction => fonction.id != id)
}


const MODIFIER_FONCTIONS = (state, objetModifie) => {
    state.fonctions = state.fonctions.map(fonction => {
        if(fonction.id == objetModifie.id){
            fonction = {...objetModifie}
        }
        return fonction
    })
}

/**
 * Fin de type acte
 */




/**
 * Mutation classe
 */
/**
 *
 * @param state
 * @param data
 * @constructor
 */
const GET_CLASSES = (state, data) => {
    state.classes = data
}


const AJOUTER_CLASSES = (state, nouvel_objet) => {
    state.classes.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]
}

/**
 * Suppresions
 * @param state
 * @param id
 * @constructor
 */
const SUPPRIMER_CLASSES= (state, id) => {
    state.classes = state.classes.filter(classe => classe.id != id)
}


const MODIFIER_CLASSES = (state, objetModifie) => {
    state.classes = state.classes.map(classe => {
        if(classe.id == objetModifie.id){
            classe = {...objetModifie}
        }
        return classe
    })
}

/**
 * Fin de classes
 */


export const GET_ALL_DOSSIER_CANDIDAT =(state, tableau_candidat) => {
    state.dossierPersonnels = tableau_candidat
}

export const AJOUTER_DOSSIER_CANDIDAT = (state, elementAjout) => {
    state.dossierPersonnels.unshift(elementAjout)
   
}


export const MODIFIER_DOSSIER_CANDIDAT = (state, elementModifie) => {
    state.dossierPersonnels= state.dossierPersonnels.map( item =>{
        if(item.id == elementModifie.id){
            item ={...elementModifie}
        }
        return item
    })
    
}


export const SUPPRIMER_DOSSIER_CANDIDAT = (state, id) => {
    state.dossierPersonnels = state.dossierPersonnels.filter( response => response.id !=id)
}





export const GET_ALL_CONTRAT_RESILIE =(state, tableau_contrat_resilie) => {
    state.contrat_resilie = tableau_contrat_resilie
}

export const AJOUTER_CONTRAT_RESILIE = (state, elementAjout) => {
    state.contrat_resilie.unshift(elementAjout)
   
}


export const MODIFIER_CONTRAT_RESILIE = (state, elementModifie) => {
    state.contrat_resilie= state.contrat_resilie.map( item =>{
        if(item.id == elementModifie.id){
            item ={...elementModifie}
        }
        return item
    })
    
}


export const SUPPRIMER_CONTRAT_RESILIE = (state, id) => {
    state.contrat_resilie = state.contrat_resilie.filter( response => response.id !=id)
}

/**
 * Mutation niveau etude
 */
/**
 *
 * @param state
 * @param data
 * @constructor
 */
const GET_NIVEAU_ETUDE = (state, data) => {
    state.niveau_etudes = data
}


const AJOUTER_NIVEAU_ETUDE = (state, nouvel_objet) => {
    state.niveau_etudes.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]
}

/**
 * Suppresions
 * @param state
 * @param id
 * @constructor
 */
const SUPPRIMER_NIVEAU_ETUDE= (state, id) => {
    state.niveau_etudes = state.niveau_etudes.filter(classe => classe.id != id)
}


const MODIFIER_NIVEAU_ETUDE = (state, objetModifie) => {
    state.niveau_etudes = state.niveau_etudes.map(classe => {
        if(classe.id == objetModifie.id){
            classe = {...objetModifie}
        }
        return classe
    })
}

/**
 * Fin de niveau etude
 */






/**
 * Mutation type contrat
 */
/**
 *
 * @param state
 * @param data
 * @constructor
 */
const GET_TYPE_CONTRAT = (state, data) => {
    state.type_contrats = data
}


const AJOUTER_TYPE_CONTRAT = (state, nouvel_objet) => {
    state.type_contrats.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]
}

/**
 * Suppresions
 * @param state
 * @param id
 * @constructor
 */
const SUPPRIMER_TYPE_CONTRAT= (state, id) => {
    state.type_contrats = state.type_contrats.filter(type_contrat => type_contrat.id != id)
}


const MODIFIER_TYPE_CONTRAT = (state, objetModifie) => {
    state.type_contrats = state.type_contrats.map(type_contrat => {
        if(type_contrat.id == objetModifie.id){
            type_contrat = {...objetModifie}
        }
        return type_contrat
    })
}

/**
 * Fin type contrat
 */

/**
 * Mutation type type salaire
 */
/**
 *
 * @param state
 * @param data
 * @constructor
 */
const GET_TYPE_SALARIE = (state, data) => {
    state.type_salaries = data
}


const AJOUTER_SALARIE = (state, nouvel_objet) => {
    state.type_salaries.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]
}

/**
 * Suppresions
 * @param state
 * @param id
 * @constructor
 */
const SUPPRIMER_TYPE_SALARIE= (state, id) => {
    state.type_salaries = state.type_salaries.filter(type_salarie => type_salarie.id != id)
}


const MODIFIER_TYPE_SALARIE = (state,  objetModifie) => {
    state.type_salaries = state.type_salaries.map(type_salarie => {
        if(type_salarie.id == objetModifie.id){
            type_salarie = {...objetModifie}
        }
        return type_salarie
    })
}

/**
 * Fin type salarie
 */


/**
 * Mutation echelons
 */
/**
 *
 * @param state
 * @param data
 * @constructor
 */
// const GET_PAIEMENTPERSONNEL = (state, data) => {
//     state.paiementPersonnel = data
// }


// const AJOUTER_PAIEMENTPERSONNEL = (state, nouvel_objet) => {
//     state.paiementPersonnel.unshift(nouvel_objet)
//     // state.titres = [...nouvel_objet, ...state.titres]
// }

/**
 * Suppresions
 * @param state
 * @param id
 * @constructor
 */
// const SUPPRIMER_PAIEMENTPERSONNEL= (state, id) => {
//     state.paiementPersonnel = state.paiementPersonnel.filter(paiementPerso => paiementPerso.id != id)
// }


// const MODIFIER_PAIEMENTPERSONNEL = (state,  objetModifie) => {
//     state.paiementPersonnel = state.paiementPersonnel.map(paiementPerso => {
//         if(paiementPerso.id == objetModifie.id){
//             paiementPerso = {...objetModifie}
//         }
//         return paiementPerso
//     })
// }

/**
 * Fin echelons
 */




/**
 * Mutation echelons
 */
/**
 *
 * @param state
 * @param data
 * @constructor
 */
const GET_GRADE = (state, data) => {
    state.grades = data
}


const AJOUTER_GRADE = (state, nouvel_objet) => {
    state.grades.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]
}

/**
 * Suppresions
 * @param state
 * @param id
 * @constructor
 */
const SUPPRIMER_GRADE= (state, id) => {
    state.grades = state.grades.filter(grade => grade.id != id)
}


const MODIFIER_GRADE = (state, objetModifie) => {
    state.grades = state.grades.map(grade => {
        if(grade.id == objetModifie.id){
            grade = {...objetModifie}
        }
        return grade
    })
}


/**
 * Fin echelons
 */





/**
 * Mutation acteurs
 */
/**
 *
 * @param state
 * @param data
 * @constructor
 */
const GET_ACTEURS = (state, data) => {
    state.acteur_depenses = data
}

const DETAIL_ACTEURS = (state, data) => {
    if(state.detail_acteurs.length==0){
        state.detail_acteurs = data
    }else{
        state.detail_acteurs = []
        state.detail_acteurs = data
    }

}



const AJOUTER_ACTEURS = (state, nouvel_objet) => {
    state.acteur_depenses.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]
}


const GET_ALL_ACTEURDEPENSE = (state, data) => {
    state.all_acteur_depense = data
}
/**
 * Suppresions
 * @param state
 * @param id
 * @constructor
 */
const SUPPRIMER_ACTEURS= (state, id) => {
    state.acteur_depenses = state.acteur_depenses.filter(acteur_depense => acteur_depense.id != id)
}


const MODIFIER_ACTEURS = (state,  objetModifie) => {
    state.acteur_depenses = state.acteur_depenses.map(acteur_depense => {
        if(acteur_depense.id == objetModifie.id){
            acteur_depense = {...objetModifie}
        }
        return acteur_depense
    })
}


const NOMBRE_TAUX_ACTEURS = (state, data) => {
    state.nbr_acteur_actredite_taux = data
}

const SALAIRE_ACTUEL_ACTEURS = (state, data) => {
    if(state.salaire_actuel_acteur==""){
        state.salaire_actuel_acteur = data
    }else{
        state.salaire_actuel_acteur = data
    }

}

const ALL_SALAIRE_ACTEUR = (state, data) => {
    if(state.all_salaires_acteurs.length==0){

        state.all_salaires_acteurs = data
    }else{
        state.all_salaires_acteurs = []
        state.all_salaires_acteurs = data
    }

}



const GET_ACT_PERSONNEL = (state, data) => {
    state.acte_personnels = data
}

const AJOUTER_ACT_PERSONNEL = (state, nouvel_objet) => {
    state.acte_personnels.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]
}

/**
 * Suppresions
 * @param state
 * @param id
 * @constructor
 */
const SUPPRIMER_ACT_PERSONNEL= (state, id) => {
    state.acte_personnels = state.acte_personnels.filter(acte_personnel => acte_personnel.id != id)
}


const GET_LOAD_ACT_PERSONNEL = (state, data) => {
    state.load_act_personnel_acteur = data
}


const GET_CONGES = (state, data) => {
    state.conges = data
}


const AJOUTER_CONGES = (state, nouvel_objet) => {
    state.conges.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]
}

const SUPPRIMER_CONGES= (state, id) => {
    state.conges = state.conges.filter(conge => conge.id != id)
}

const MODIFIER_CONGES = (state,  objetModifie) => {
    state.conges = state.conges.map(conge => {
        if(conge.id == objetModifie.id){
            conge = {...objetModifie}
        }
        return conge
    })
}


const LOAD_CONGE_ACTEUR_DEPENSE= (state, data) => {
    if(state.conge_acteur_depense.length==0){
        state.conge_acteur_depense = data
    }else{
        state.conge_acteur_depense = []
        state.conge_acteur_depense = data
    }

}

const LOAD_TEMPS_MOYEN_FIN_ACTIVITE_AND_INTERRUPRION= (state, data) => {
    if(state.temp_moyen_fin_activite_interruption==0){
        state.temp_moyen_fin_activite_interruption = data
    }else{
        state.temp_moyen_fin_activite_interruption = data
    }

}

const DELAI_DISPOSITION_ACT= (state, data) => {
    if( state.delais_mise_disposition_act.length==0){
        state.delais_mise_disposition_act = data
    }else{
        state.delais_mise_disposition_act = []
        state.delais_mise_disposition_act = data
    }
}

const JOUR_CONGE_DISPONIBLE_ACTEUR= (state, data) => {
    if(state.jour_conge_disponible_acteur.length==0){
        state.jour_conge_disponible_acteur = data
    }else{
        state.jour_conge_disponible_acteur = []
        state.jour_conge_disponible_acteur = data
    }

}



const MODIFIER_ACT_PERSONNEL = (state,  objetModifie) => {
    state.acte_personnels = state.acte_personnels.map(acte_personnel => {
        if(acte_personnel.id == objetModifie.id){
            acte_personnel = {...objetModifie}
        }
        return acte_personnel
    })
}

const GET_FIN_ACTIVITE_CONTRAT = (state, data) => {
    state.list_acteur_fin_contrat_activite = data
}



//  * @param state
//     * @param data
//         */ @constructor
//  * /
const GET_FAMILLE_FONCTIONS = (state, data) => {
    state.familleFonction = data
}


const AJOUTER_FAMILLE_FONCTIONS = (state, nouvel_objet) => {
    state.familleFonction.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]
}

/**
 * Suppresions
 * @param state
 * @param id
 * @constructor
 */
const SUPPRIMER_FAMILLE_FONCTIONS = (state, id) => {
    state.familleFonction = state.familleFonction.filter(fonction => fonction.id != id)
}


const MODIFIER_FAMILLE_FONCTIONS = (state, objetModifie) => {
    state.familleFonction = state.familleFonction.map(fonction => {
        if (fonction.id == objetModifie.id) {
            fonction = { ...objetModifie }
        }
        return fonction
    })
}


//  * @param state
//     * @param data
//         */ @constructor
//  * /
const GET_CATEGORIE_GRADE = (state, data) => {
    state.categorieGrade = data;
}


const AJOUTER_CATEGORIE_GRADE = (state, nouvel_objet) => {
    state.categorieGrade.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]
}

/**
 * Suppresions
 * @param state
 * @param id
 * @constructor
 */
const SUPPRIMER_CATEGORIE_GRADE = (state, id) => {
    state.categorieGrade = state.categorieGrade.filter(fonction => fonction.id != id)
}



const MODIFIER_CATEGORIE_GRADE = (state, objetModifie) => {
  state.categorieGrade = state.categorieGrade.map(type => {
    if (type.id == objetModifie.id) {
      type = { ...objetModifie };
    }

    return type;
  });
};

//  * @param state
//     * @param data
//         */ @constructor
//  * /
const GET_CLASSIFICATION_GRADE_FONCTION = (state, data) => {
    state.classificationGradeFonction = data
}


const AJOUTER_CLASSIFICATION_GRADE_FONCTION = (state, nouvel_objet) => {
    state.classificationGradeFonction.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]
}

/**
 * Suppresions
 * @param state
 * @param id
 * @constructor
 */
const SUPPRIMER_CLASSIFICATION_GRADE_FONCTION = (state, id) => {
    state.classificationGradeFonction = state.classificationGradeFonction.filter(fonction => fonction.id != id)
}


const MODIFIER_CLASSIFICATION_GRADE_FONCTION = (state, objetModifie) => {
    state.classificationGradeFonction = state.classificationGradeFonction.map(fonction => {
        if (fonction.id == objetModifie.id) {
            fonction = { ...objetModifie }
        }
        return fonction
    })
}











const GET_FONCTION_BUDGETAIRE = (state, data) => {
    state.fonctionBudgetaire = data
}


const AJOUTER_FONCTION_BUDGETAIRE = (state, nouvel_objet) => {
    state.fonctionBudgetaire.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]
}

/**
 * Suppresions
 * @param state
 * @param id
 * @constructor
 */
const SUPPRIMER_FONCTION_BUDGETAIRE = (state, id) => {
    state.fonctionBudgetaire = state.fonctionBudgetaire.filter(fonction => fonction.id != id)
}



const MODIFIER_FONCTION_BUDGETAIRE = (state, objetModifie) => {
    state.fonctionBudgetaire = state.fonctionBudgetaire.map(fonction => {
        if (fonction.id == objetModifie.id) {
            fonction = { ...objetModifie }
        }
        return fonction
    })
}
export const MODIFIER_SALAIRE = (state, objetModifie) => {
    state.salairesActeur = state.salairesActeur.map(fonction => {
        if (fonction.id == objetModifie.id) {
            fonction = { ...objetModifie }
        }
        return fonction
    })
}
export const GET_SALAIRE = (state, data) => {
    state.salairesActeur = data
}


/**
 * Mutation fonctions
 */



const GET_SITUATION_MATRIMONIAL = (state, data) => {
    state.situation_matrimonial = data
}


const AJOUTER_SITUATION_MATRIMONIAL = (state, nouvel_objet) => {
    state.situation_matrimonial.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]
}


const SUPPRIMER_SITUATION_MATRIMONIAL = (state, id) => {
    state.situation_matrimonial = state.situation_matrimonial.filter(fonction => fonction.id != id)
}


const MODIFIER_SITUATION_MATRIMONIAL = (state, objetModifie) => {
    state.situation_matrimonial = state.situation_matrimonial.map(fonction => {
        if (fonction.id == objetModifie.id) {
            fonction = { ...objetModifie }
        }
        return fonction
    })
}






export const GET_SAUVEGARDE_PHOTO = (state, data) => {
    state.sauvegardePhoto = data
}


export const AJOUTER_SAUVEGARDE_PHOTO = (state, nouvel_objet) => {
    state.sauvegardePhoto.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]
}


export const SUPPRIMER_SAUVEGARDE_PHOTO = (state, id) => {
    state.sauvegardePhoto = state.sauvegardePhoto.filter(fonction => fonction.id != id)
}


export const MODIFIER_SAUVEGARDE_PHOTO = (state, objetModifie) => {
    state.sauvegardePhoto = state.sauvegardePhoto.map(fonction => {
        if (fonction.id == objetModifie.id) {
            fonction = { ...objetModifie }
        }
        return fonction
    })
}
/**
 * Fin de type acte
 */







export {

    GET_ORDRE_DE_PAIEMENT,
    AJOUTER_ORDRE_DE_PAIEMENT,
    SUPPRIMER_ORDRE_DE_PAIEMENT,
    MODIFIER_ORDRE_DE_PAIEMENT,
    
    
    
    GET_PAIEMENTPERSONNEL,
    AJOUTER_PAIEMENTPERSONNEL,
    SUPPRIMER_PAIEMENTPERSONNEL,
    MODIFIER_PAIEMENTPERSONNEL,
    GET_SITUATION_MATRIMONIAL,
    AJOUTER_SITUATION_MATRIMONIAL,
    SUPPRIMER_SITUATION_MATRIMONIAL,
    MODIFIER_SITUATION_MATRIMONIAL,


    GET_FONCTION_BUDGETAIRE,
    AJOUTER_FONCTION_BUDGETAIRE,
    SUPPRIMER_FONCTION_BUDGETAIRE,
    MODIFIER_FONCTION_BUDGETAIRE,


    GET_CLASSIFICATION_GRADE_FONCTION,
    AJOUTER_CLASSIFICATION_GRADE_FONCTION,
    SUPPRIMER_CLASSIFICATION_GRADE_FONCTION,
    MODIFIER_CLASSIFICATION_GRADE_FONCTION,
    
GET_CATEGORIE_GRADE,
    AJOUTER_CATEGORIE_GRADE,
    SUPPRIMER_CATEGORIE_GRADE,
    MODIFIER_CATEGORIE_GRADE,




GET_FAMILLE_FONCTIONS,
    AJOUTER_FAMILLE_FONCTIONS,
    SUPPRIMER_FAMILLE_FONCTIONS,
    MODIFIER_FAMILLE_FONCTIONS,



    GET_TYPE_ACTE_PERSONNELS,
    AJOUTER_TYPE_ACTE_PERSONNELS,
    SUPPRIMER_TYPE_ACTE_PERSONNELS,
    MODIFIER_TYPE_ACTE_PERSONNELS,
    AJOUTER_FOCNTIONS,
    GET_FONCTIONS,
    SUPPRIMER_FONCTIONS,
    MODIFIER_FONCTIONS,
    AJOUTER_CLASSES,
    MODIFIER_CLASSES,
    SUPPRIMER_CLASSES,
    GET_CLASSES,
    GET_NIVEAU_ETUDE,
    AJOUTER_NIVEAU_ETUDE,
    MODIFIER_NIVEAU_ETUDE,
    SUPPRIMER_NIVEAU_ETUDE,
    GET_TYPE_CONTRAT,
    AJOUTER_TYPE_CONTRAT,
    SUPPRIMER_TYPE_CONTRAT,
    MODIFIER_TYPE_CONTRAT,
    GET_TYPE_SALARIE,
    SUPPRIMER_TYPE_SALARIE,
    AJOUTER_SALARIE,
    MODIFIER_TYPE_SALARIE,
    
    GET_GRADE,
    AJOUTER_GRADE,
    SUPPRIMER_GRADE,
    MODIFIER_GRADE,
    GET_ACTEURS,
    AJOUTER_ACTEURS,
    SUPPRIMER_ACTEURS,
    MODIFIER_ACTEURS,
    NOMBRE_TAUX_ACTEURS,
    DETAIL_ACTEURS,
    SALAIRE_ACTUEL_ACTEURS,
    ALL_SALAIRE_ACTEUR,
    AJOUTER_ACT_PERSONNEL,
    MODIFIER_ACT_PERSONNEL,
    GET_ACT_PERSONNEL,
    SUPPRIMER_ACT_PERSONNEL,
    GET_LOAD_ACT_PERSONNEL,
    GET_CONGES,
    MODIFIER_CONGES,
    AJOUTER_CONGES,
    SUPPRIMER_CONGES,
    LOAD_CONGE_ACTEUR_DEPENSE,
    GET_ALL_ACTEURDEPENSE,
    LOAD_TEMPS_MOYEN_FIN_ACTIVITE_AND_INTERRUPRION,
    DELAI_DISPOSITION_ACT,
    JOUR_CONGE_DISPONIBLE_ACTEUR,
    GET_SALAIRE_ACTUEL,
    GET_FIN_ACTIVITE_CONTRAT
}
