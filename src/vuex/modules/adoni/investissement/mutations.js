// get all investissement
export const GET_ALL_INVESTISSEMENT = (state, tableau_investissement) =>{
    state.investissements = tableau_investissement
}

// add * investissement

export const AJOUTER_INVESTISSEMENT = (state, elementAjouter) => {
    state.investissements.unshift(elementAjouter)
}

// update all investissement
export const MODIFIER_INVESTISSEMENT = (state, elementModif)=>{
    state.investissements = state.investissements.map(response => {
        if(response.id == elementModif.id){
            response = {...elementModif}
        }
        return response
    })
}


// delete all investissement

export const SUPPRIMER_INVESTISSEMENT = (state, id)=> {
    state.investissements = state.investissements.filter(prest => prest.id !=id)
}









