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


export const GET_ALL_REALITE_SERVICE_HORS_SIB = (state, tableau_marche_hors_sib) =>{
    state.realiteServiceFaitHorsSib = tableau_marche_hors_sib
   }
   
   export const AJOUTER_REALITE_SERVICE_HORS_SIB = (state, elementAjout) =>{
       state.realiteServiceFaitHorsSib.unshift(elementAjout)
   }
   
   export const MODIFIER_REALITE_SERVICE_HORS_SIB = (state, elementModifie) =>{
       state.realiteServiceFaitHorsSib = state.realiteServiceFaitHorsSib.map(item =>{
           if(item.id == elementModifie.id){
               item = {...elementModifie}
           }
           return item
       })
   }
   
   export const SUPPRIMER_REALITE_SERVICE_HORS_SIB = (state, id) =>{
       state.realiteServiceFaitHorsSib = state.realiteServiceFaitHorsSib.filter(response => response.id!=id)
   }
   
   
   
   
export const GET_ALL_OP_PROVISOIRE = (state, tableau_marche_hors_sib) =>{
    state.opProvisoire = tableau_marche_hors_sib
   }
   
   export const AJOUTER_OP_PROVISOIRE = (state, elementAjout) =>{
       state.opProvisoire.unshift(elementAjout)
   }
   
   export const MODIFIER_OP_PROVISOIRE = (state, elementModifie) =>{
       state.opProvisoire = state.opProvisoire.map(item =>{
           if(item.id == elementModifie.id){
               item = {...elementModifie}
           }
           return item
       })
   }
   
   export const SUPPRIMER_OP_PROVISOIRE = (state, id) =>{
       state.opProvisoire = state.opProvisoire.filter(response => response.id!=id)
   }
   
   


