
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


///
export const GET_AFFECTAION_GROUPE_USER =(state, tableau_groupe_user) =>{
    state.affectationGroupeUser=tableau_groupe_user
}
export const AJOUTER_AFFECTATION_GROUPE_USER =(state, nouvel_objet) =>{
    state.affectationGroupeUser.unshift(nouvel_objet)
}
export const MODIFIER_AFFECTATION_GROUPE_USER=(state, elementModif) =>{
    state.affectationGroupeUser=state.affectationGroupeUser.map(res => {
        if(res.id==elementModif.id){
            res = {...elementModif}
        }
        return res
    })
}

export const SUPPRIMER_AFFECTATION_GROUPE_USER =(state, id) =>{
    state.affectationGroupeUser=state.affectationGroupeUser.filter(response =>response.id!=id)
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



export const MENU_MODULE_SIDCF = (state, menuModuleSidcf) => {
    state.menuModuleSidcf = menuModuleSidcf
}

// menu
export const GET_MENU = (state, tableau_menu) => {
    state.menu = tableau_menu
}
export const AJOUTER_MENU= (state, nouvel_objet) => {
    state.menu.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]

}

export const SUPPRIMER_MENU= (state, id) => {
    state.menu = state.menu.filter(type => type.id != id)
}

export const MODIFIER_MENU= (state, objetModifie) => {
    state.menu = state.menu.map(type => {
        if(type.id == objetModifie.id){
            type = {...objetModifie}
        }
        return type
    })
}

export const GET_MODULE = (state, tableau_module) => {
    state.module = tableau_module
}
export const AJOUTER_MODULE= (state, nouvel_objet) => {
    state.module.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]

}

export const SUPPRIMER_MODULE= (state, id) => {
    state.module = state.module.filter(type => type.id != id)
}

export const MODIFIER_MODULE= (state, objetModifie) => {
    state.module = state.module.map(type => {
        if(type.id == objetModifie.id){
            type = {...objetModifie}
        }
        return type
    })
}
/// ajouter groupe

export const GET_GROUPE = (state, tableau_groupe) => {
    state.groupe = tableau_groupe
}


export const AJOUTER_GROUPE= (state, nouvel_objet) => {
    state.groupe.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]

}

export const SUPPRIMER_GROUPE= (state, id) => {
    state.groupe = state.groupe.filter(type => type.id != id)
}

export const MODIFIER_GROUPE= (state, objetModifie) => {
    state.groupe = state.groupe.map(type => {
        if(type.id == objetModifie.id){
            type = {...objetModifie}
        }
        return type
    })
}

//

export const ACTIVATION_GROUPE = (state, elementModif) =>{
    state.groupe = state.groupe.map(userActif =>{
        if(userActif.id == elementModif.id){
            userActif = {...elementModif}
        }
        return userActif
    }) 
 }


/**
 * Getion des servces de cf
 * @param state
 * @param tab_type_uas
 * @constructor
 */

export const GET_SERVICECF = (state, tab_type_uas) => {
    state.serviceCF = tab_type_uas
}

/**
 * Ajouter service
 * @param state
 * @param nouvel_objet
 * @constructor
 */
export const AJOUTER_SERVICECF = (state, nouvel_objet) => {
    state.serviceCF.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]

}

/**
 * Suppresions
 * @param state
 * @param id
 * @constructor
 */
export const SUPPRIMER_SERVICECF= (state, id) => {
    state.serviceCF = state.serviceCF.filter(type => type.id != id)
}

/**
 * Modification
 * @param state
 * @param id
 * @param objetModifie
 * @constructor
 */
export const MODIFIER_SERVICECF = (state, objetModifie) => {
    state.serviceCF = state.serviceCF.map(type => {
        if(type.id == objetModifie.id){
            type = {...objetModifie}
        }
        return type
    })
}






/**
 * Gertion des affections Service pas CF
 * @param state
 * @param tab_type_uas
 * @constructor
 */

export const GET_AFFECTATION_SERVICE_CF = (state, tab_type_uas) => {
    state.affectationServiceCF = tab_type_uas
}

/**
 * Ajouter des affections Service pas CF
 * @param state
 * @param nouvel_objet
 * @constructor
 */
export const AJOUTER_AFFECTATION_SERVICE_CF = (state, nouvel_objet) => {
    state.affectationServiceCF.unshift(nouvel_objet)
    // state.titres = [...nouvel_objet, ...state.titres]

}

/**
 * Suppresions
 * @param state
 * @param id
 * @constructor
 */
export const SUPPRIMER_AFFECTATION_SERVICE_CF= (state, id) => {
    state.affectationServiceCF = state.affectationServiceCF.filter(type => type.id != id)
}

/**
 * Modification
 * @param state
 * @param id
 * @param objetModifie
 * @constructor
 */
export const MODIFIER_AFFECTATION_SERVICE_CF = (state, objetModifie) => {
    state.affectationServiceCF = state.affectationServiceCF.map(type => {
        if(type.id == objetModifie.id){
            type = {...objetModifie}
        }
        return type
    })
}