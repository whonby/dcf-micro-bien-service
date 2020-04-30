import axios from '../../../../../urls/api_parametrage/api'
import { asyncLoading } from 'vuejs-loading-plugin'

 var housecall= require('housecall')
 var queue = housecall({concurrency: 2, cooldown: 1000})

// liste structure fonctionnelle

export  function getlisteNaturePrix({commit}){
    queue.push(() => axios.get('/listeNaturePrix').then(tony => {
        commit('GET_NATUREPRIX', tony.data)
    }).catch(error => console.log(error)))
}

// ajouter structure fonctionnelle
export function ajouterNaturePrix({commit}, objetAjout){
 asyncLoading(axios.post('/ajouterNaturePrix' ,{
     code:objetAjout.code,
     libelle:objetAjout.libelle,
   
})).then(tony => {
     if(tony.status == 201){
         commit('AJOUTER_NATUREPRIX', tony.data)

         this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué avec success !',
            type:"success"
          })
     }
 }).catch(error => console.log(error))
}
// supprimer structure fonctionnelle
export function supprimerNaturePrix({commit}, id){
  
    this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
       commit('SUPPRIMER_NATUREPRIX', id)
      // // dialog.loading(false) // stops the proceed button's loader
        axios.delete('/supprimerNaturePrix/' + id).then(() => dialog.close() )   
    })
}
//modifier structure fonctionnelle
export function modifierNaturePrix({commit},elementModifie){

   asyncLoading( axios.put('/modifierNaturePrix/' +elementModifie.id ,{
       code:elementModifie.code,
      libelle:elementModifie.libelle,

})).then(response => {
        commit('MODIFIER_NATUREPRIX', response.data)

        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué avec success !',
            type:"success"
          })
    }).catch(error => console.log(error))
   
}


// liste structure fonctionnelle

export  function getTypeconges({commit}){
    queue.push(() => axios.get('/Typeconges').then(tony => {
        commit('GET_TYPECONGES', tony.data)
    }).catch(error => console.log(error)))
}

// ajouter structure fonctionnelle
export function ajouterTypeconges({commit}, objetAjout){
 asyncLoading(axios.post('/ajouterTypeconges' ,{
    libelle:objetAjout.libelle,
   
})).then(tony => {
     if(tony.status == 201){
         commit('AJOUTER_TYPECONGES', tony.data)

         this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué avec success !',
            type:"success"
          })
     }
 }).catch(error => console.log(error))
}
// supprimer structure fonctionnelle
export function supprimerTypeconges({commit}, id){
  
    this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
       commit('SUPPRIMER_TYPECONGES', id)
      // // dialog.loading(false) // stops the proceed button's loader
        axios.delete('/supprimerTypeconges/' + id).then(() => dialog.close() )   
    })
}
//modifier structure fonctionnelle
export function modifierTypeconges({commit},elementModifie){

   asyncLoading( axios.put('/modifierTypeconges/' +elementModifie.id ,{
    libelle:elementModifie.libelle,

})).then(response => {
        commit('MODIFIER_TYPECONGES', response.data)

        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué avec success !',
            type:"success"
          })
    }).catch(error => console.log(error))
   
}



// liste structure fonctionnelle

export  function getStructureFonctionnelle({commit}){
    queue.push(() => axios.get('/liste_Structure_fontionnelle').then(tony => {
        commit('GET_STRUCTURE_FONCTIONNELLE', tony.data)
    }).catch(error => console.log(error)))
}

// ajouter structure fonctionnelle
export function ajouterStructureFonctionnelle({commit}, objetAjout){
 asyncLoading(axios.post('/ajouter_Structure_fontionnelle' ,{
    niveau:objetAjout.niveau,
    libelle:objetAjout.libelle,
   
})).then(tony => {
     if(tony.status == 201){
         commit('AJOUTER_STRUCTURE_FONCTIONNELLE', tony.data)

         this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué avec success !',
            type:"success"
          })
     }
 }).catch(error => console.log(error))
}
// supprimer structure fonctionnelle
export function supprimerStructureFonctionnelle({commit}, id){
  
    this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
       commit('SUPPRIMER_STRUCTURE_FONCTIONNELLE', id)
      // // dialog.loading(false) // stops the proceed button's loader
        axios.delete('/supprimer_Structure_fontionnelle/' + id).then(() => dialog.close() )   
    })
}
//modifier structure fonctionnelle
export function modifierStructureFonctionnelle({commit}, source_financement){

   asyncLoading( axios.put('/modifier_Structure_fontionnelle/' + source_financement.id ,{
    niveau:source_financement.niveau,
    libelle:source_financement.libelle,

})).then(response => {
        commit('MODIFIER_STRUCTURE_FONCTIONNELLE', response.data)

        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué avec success !',
            type:"success"
          })
    }).catch(error => console.log(error))
   
}

// get all of plan fonctionnelle
export  function getPlanFonctionnelle({commit}){
    queue.push(()=> axios.get('/liste_Planfontionnelle').then(tony => {
        commit('GET_PLAN_FONCTIONNELLE', tony.data)
    }).catch(error => console.log(error)))
    
}

// ajouter plan fonctionnelle
export function ajouterPlanFonctionnel({commit, dispatch}, objetAjout){
   asyncLoading( axios.post('/ajouter_Planfontionnelle', objetAjout)).then(res => {
        commit('AJOUTER_PLAN_FONCTIONNELLE', res.data)
        dispatch('getPlanFonctionnelle')
        this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué avec success !',
            type:"success"
          })
    }).catch(error => console.log(error))
}
// modifier plan fonctionnelle

export function modifierPlanFonctionnel({ commit, dispatch},plan_fonctionnel){
   asyncLoading( axios.put('/modifier_Planfontionnelle/' + plan_fonctionnel.id, {
    code:plan_fonctionnel.code,
    libelle:plan_fonctionnel.libelle ,
    structure_fonctionnelle_id:plan_fonctionnel.structure_fonctionnelle_id
  } )).then(res => {
        commit('MODIFIER_PLAN_FONCTIONNELLE', res.data)
      dispatch('getPlanFonctionnelle')
        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué avec success !',
            type:"success"
          })
    }).catch(error => console.log(error))
}
// supprimer plan fonctionnelle
export function supprimerPlanFonctionnel({commit, dispatch}, id){
    
    this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
       commit('SUPPRIMER_PLAN_FONCTIONNELLE', id)
       dispatch('getPlanFonctionnelle')

      // // dialog.loading(false) // stops the proceed button's loader
        axios.delete('/supprimer_Planfontionnelle/' + id).then(() => dialog.close() )   
    })
}











export function getStructureDecision({ commit }) {
    queue.push(() => axios.get('/liste_StructureMotif').then(tony => {
        commit('GET_STRUCTURE_DECISION', tony.data)
    }).catch(error => console.log(error)))
}

// ajouter structure fonctionnelle
export function ajouterStructureDecision({ commit }, objetAjout) {
    asyncLoading(axios.post('/ajouter_StructureMotif', {
        niveau: objetAjout.niveau,
        libelle: objetAjout.libelle,

    })).then(tony => {
        if (tony.status == 201) {
            commit('AJOUTER_STRUCTURE_DECISION', tony.data)

            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué avec success !',
                type: "success"
            })
        }
    }).catch(error => console.log(error))
}
// supprimer structure fonctionnelle
export function supprimerStructureDecision({ commit }, id) {

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_STRUCTURE_DECISION', id)
            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/supprimer_StructureMotif/' + id).then(() => dialog.close())
        })
}
//modifier structure fonctionnelle
export function modifierStructureDecision({ commit }, source_financement) {

    asyncLoading(axios.put('/modifier_StructureMotif/' + source_financement.id, {
        niveau: source_financement.niveau,
        libelle: source_financement.libelle,

    })).then(response => {
        commit('MODIFIER_STRUCTURE_DECISION', response.data)

        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué avec success !',
            type: "success"
        })
    }).catch(error => console.log(error))

}

// get all of plan fonctionnelle
export function getPlanDecision({ commit }) {
    queue.push(() => axios.get('/liste_PlanMotifDecision').then(tony => {
        commit('GET_PLAN_DECISION', tony.data)
    }).catch(error => console.log(error)))

}

// ajouter plan fonctionnelle
export function ajouterPlanDecision({ commit, dispatch }, objetAjout) {
    asyncLoading(axios.post('/ajouter_PlanMotifDecision', objetAjout)).then(response => {
        commit('AJOUTER_PLAN_DECISION', response.data)
        
        dispatch('getPlanDecision')
        dispatch('getStructureDecision')
        this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué avec success !',
            type: "success"
        })
    }).catch(error => console.log(error))
}
// modifier plan fonctionnelle

export function modifierPlanDecision({ commit, dispatch }, plan_fonctionnel) {
    asyncLoading(axios.put('/modifier_PlanMotifDecision/' + plan_fonctionnel.id, {
        code: plan_fonctionnel.code,
        libelle: plan_fonctionnel.libelle,
        structure_motif_decission_id: plan_fonctionnel.structure_motif_decission_id
    })).then(res => {
        commit('MODIFIER_PLAN_DECISION', res.data)
        dispatch('getPlanDecision')
        dispatch('getStructureDecision')
        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué avec success !',
            type: "success"
        })
    }).catch(error => console.log(error))
}
// supprimer plan fonctionnelle
export function supprimerPlanDecision({ commit, dispatch }, id) {

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_PLAN_DECISION', id)
            dispatch('getPlanDecision')
            dispatch('getStructureDecision')

            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/supprimer_PlanMotifDecision/' + id).then(() => dialog.close())
        })
}




















export function getStructureActe({ commit }) {
    queue.push(() => axios.get('/liste_StructureActe').then(tony => {
        commit('GET_STRUCTURE_ACTE', tony.data)
    }).catch(error => console.log(error)))
}

// ajouter structure fonctionnelle
export function ajouterStructureActe({ commit }, objetAjout) {
    asyncLoading(axios.post('/ajouter_StructureActe', {
        niveau: objetAjout.niveau,
        libelle: objetAjout.libelle,

    })).then(tony => {
        if (tony.status == 201) {
            commit('AJOUTER_STRUCTURE_ACTE', tony.data)

            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué avec success !',
                type: "success"
            })
        }
    }).catch(error => console.log(error))
}
// supprimer structure fonctionnelle
export function supprimerStructureActe({ commit }, id) {

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_STRUCTURE_ACTE', id)
            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/supprimer_StructureActe/' + id).then(() => dialog.close())
        })
}
//modifier structure fonctionnelle
export function modifierStructureActe({ commit }, source_financement) {

    asyncLoading(axios.put('/modifier_StructureActe/' + source_financement.id, {
        niveau: source_financement.niveau,
        libelle: source_financement.libelle,

    })).then(response => {
        commit('MODIFIER_STRUCTURE_ACTE', response.data)

        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué avec success !',
            type: "success"
        })
    }).catch(error => console.log(error))

}

// get all of plan fonctionnelle
export function getPlanActe({ commit }) {
    queue.push(() => axios.get('/liste_PlanActe').then(tony => {
        commit('GET_PLAN_ACTE', tony.data)
    }).catch(error => console.log(error)))

}

// ajouter plan fonctionnelle
export function ajouterPlanActe({ commit, dispatch }, objetAjout) {
    asyncLoading(axios.post('/ajouter_PlanActe', objetAjout)).then(response => {
        commit('AJOUTER_PLAN_ACTE', response.data)

        dispatch('getPlanActe')
        dispatch('getStructureActe')
        this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué avec success !',
            type: "success"
        })
    }).catch(error => console.log(error))
}
// modifier plan fonctionnelle

export function modifierPlanActe({ commit, dispatch }, plan_fonctionnel) {
    asyncLoading(axios.put('/modifier_PlanActe/' + plan_fonctionnel.id, {
        code: plan_fonctionnel.code,
        libelle: plan_fonctionnel.libelle,
        structure_Acte_id: plan_fonctionnel.structure_Acte_id
    })).then(res => {
        commit('MODIFIER_PLAN_ACTE', res.data)
        dispatch('getPlanActe')
        dispatch('getStructureActe')
        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué avec success !',
            type: "success"
        })
    }).catch(error => console.log(error))
}
// supprimer plan fonctionnelle
export function supprimerPlanActe({ commit, dispatch }, id) {

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_PLAN_ACTE', id)
            dispatch('getPlanActe')
            dispatch('getStructureActe')

            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/supprimer_PlanActe/' + id).then(() => dialog.close())
        })
}