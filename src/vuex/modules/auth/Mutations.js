
export const LOGIN_USER = (state, user) => {
    state.isLoggedIn = true
    state.user = user;
};

export const LOGOUT_USER = (state) => {
    state.isLoggedIn = false
   // state.user = user;
};

export const SET_ERROR_MESSAGE = (state, message) => {
    state.errorMessage = message
}


export const SET_CHAMP_VIDE_TRUE = state => state.champVide = true

export const SET_CHAMP_VIDE_FALSE = state => state.champVide = false

export const SET_LOADER_FALSE = state => state.loader = false

export const SET_LOADER_TRUE = state => state.loader = true

export const SET_ERROR_FALSE = state => state.error = false

export const SET_ERROR_TRUE = state => state.error = true


/**
 * Recuperation des type act
 * @param state
 * @param tableau_type_uas
 * @constructor
 */
export const GET_TYPE_UA = (state, tab_type_uas) => {
    state.type_uas = tab_type_uas
}

/**
 * Ajouter type act personnel
 * @param state
 * @param nouvel_objet
 * @constructor
 */
export const AJOUTER_type_uas = (state, nouvel_objet) => {
    state.type_uas.unshift(nouvel_objet)
   // state.titres = [...nouvel_objet, ...state.titres]

}

/**
 * Suppresions
 * @param state
 * @param id
 * @constructor
 */
export const SUPPRIMER_type_uas= (state, id) => {
    state.type_uas = state.type_uas.filter(type => type.id != id)
}

/**
 * Modification
 * @param state
 * @param id
 * @param objetModifie
 * @constructor
 */
export const MODIFIER_type_uas = (state, objetModifie) => {
    state.type_uas = state.type_uas.map(type => {
        if(type.id == objetModifie.id){
            type = {...objetModifie}
        }
        return type
    })
}




export const GET_UTILISATEUR = (state, tab_type_uas) => {
    state.utilisateur = tab_type_uas
}

/**
 * Ajouter personnel
 * @param state
 * @param nouvel_objet
 * @constructor
 */
export const AJOUTER_UTILISATEUR = (state, nouvel_objet) => {
    state.utilisateur.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]

}

/**
 * Suppresions
 * @param state
 * @param id
 * @constructor
 */
export const SUPPRIMER_UTILISATEUR= (state, id) => {
    state.utilisateur = state.utilisateur.filter(type => type.id != id)
}

/**
 * Modification
 * @param state
 * @param id
 * @param objetModifie
 * @constructor
 */
export const MODIFIER_UTILISATEUR = (state, objetModifie) => {
    state.utilisateur = state.utilisateur.map(type => {
        if(type.id == objetModifie.id){
            type = {...objetModifie}
        }
        return type
    })
}




export const GET_ROLES = (state, tab_type_uas) => {
    state.roles = tab_type_uas
}






export const GET_AFFECTATION = (state, tab_type_uas) => {
    state.affectation = tab_type_uas
}

/**
 * Ajouter personnel
 * @param state
 * @param nouvel_objet
 * @constructor
 */
export const AJOUTER_AFFECTATION = (state, nouvel_objet) => {
    state.affectation.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]

}

/**
 * Suppresions
 * @param state
 * @param id
 * @constructor
 */
export const SUPPRIMER_AFFECTATION= (state, id) => {
    state.affectation = state.affectation.filter(type => type.id != id)
}

/**
 * Modification
 * @param state
 * @param id
 * @param objetModifie
 * @constructor
 */
export const MODIFIER_AFFECTATION = (state, objetModifie) => {
    state.affectation = state.affectation.map(type => {
        if(type.id == objetModifie.id){
            type = {...objetModifie}
        }
        return type
    })
}


export const GET_UNITEADMIN_BY_USER = (state, objetModifie) => {
    state.uniteAdministrativeByUser = objetModifie

}

export const MODIFIER_PHOTO_PROFIL_USER = (state, objetModifie) => {
    state.utilisateur = state.utilisateur.map(acte_personnel => {
        if (acte_personnel.id == objetModifie.id) {
            acte_personnel = { ...objetModifie }
        }
        return acte_personnel
    })
}



/**
 * Equipe CF
 * **/


export const GET_EQUIPE_CF = (state, tab_type_uas) => {
    state.equipe_cf = tab_type_uas
}


export const AJOUTER_EQUIPE_CF= (state, nouvel_objet) => {
    state.equipe_cf.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]

}

export const SUPPRIMER_EQUIPE_CF= (state, id) => {
    state.equipe_cf = state.equipe_cf.filter(type => type.id != id)
}

export const MODIFIER_EQUIPE_CF= (state, objetModifie) => {
    state.equipe_cf = state.equipe_cf.map(type => {
        if(type.id == objetModifie.id){
            type = {...objetModifie}
        }
        return type
    })
}

export const ANCIEN_PASSWORD= (state, nouvel_objet) => {
    state.ancien_password=nouvel_objet
  //  state.ancien_password.unshift(nouvel_objet)
}