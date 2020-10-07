export const GET_ALL_MARCHE_HORS_SIB = (state, tableau_marche_hors_sib) =>{
 state.marcheHorsib = tableau_marche_hors_sib
}

export const AJOUTER_MARCHE_HORS_SIB = (state, elementAjout) =>{
    state.marcheHorsib.unshift(elementAjout)
}

export const MODIFIER_MARCHE_HORS_SIB = (state, elementModifie) =>{
    state.marcheHorsib = state.marcheHorsib.map(item =>{
        if(item.id == elementModifie.id){
            item = {...elementModifie}
        }
        return item
    })
}

export const SUPPRIMER_MARCHE_HORS_SIB = (state, id) =>{
    state.marcheHorsib = state.marcheHorsib.filter(response => response.id!=id)
}