import axios from '../../../../request/parametreGeneraux'
import { asyncLoading } from 'vuejs-loading-plugin'


var housecall= require('housecall')
var queue = housecall({concurrency: 2, cooldown: 1000})


// get all structure activite
export  function  getStructureActivite({commit}) {
  queue.push(() =>  axios.get('/liste_structure_activite').then((response) => {
    commit('GET_ACTIVITE', response.data)
    
}).catch(error => console.log(error)))
}


// ajouter structure activite
export  function ajouterStructureActivite({commit}, objetAjoute){
   asyncLoading( axios.post('/add_structure_activite', {
    niveau:objetAjoute.niveau,
    libelle: objetAjoute.libelle
} )).then(res => {
        if(res.status == 201){
            commit('AJOUTER_STRUCTURE_ACTIVITE', res.data)

            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué avec success !',
                type:"success"
              })
        
        }
    }).catch(error => console.log(error))
}

// modifier structure activite
export function modifierStructureActivite({commit}, activite){
   asyncLoading( axios.put('/update_structure_activite/' + activite.id, {
    niveau:activite.niveau,
    libelle: activite.libelle
})).then(response => {
        commit('MODIFIER_STRUCTURE_ACTIVITE', response.data)

        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué avec success !',
            type:"success"
          })
    }).catch(error => console.log(error))

}


// supprimer structureactivite
export function supprimerStructureActivite({commit}, id){
 
    this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
       commit('SUPPRIMER_STRUCTURE_ACTIVITE', id)
      // // dialog.loading(false) // stops the proceed button's loader
        axios.delete('/delete_structure_activite/' + id).then(() => dialog.close() )   
    })
}








// get all of plan fonctionnelle
export function getPlanActivite({ commit }) {
    queue.push(() => axios.get('/liste_activites').then(tony => {
        commit('GET_PLAN_ACTIVITE', tony.data)
    }).catch(error => console.log(error)))

}

// ajouter plan fonctionnelle
export function ajouterPlanActivite({ commit, dispatch }, objetAjout) {
    asyncLoading(axios.post('/add_activites', objetAjout)).then(res => {
        commit('AJOUTER_PLAN_ACTIVITE', res.data)
        dispatch('getPlanActivite')
        this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué avec success !',
            type: "success"
        })
    }).catch(error => console.log(error))
}
// modifier plan fonctionnelle

export function modifierPlanActivite({ commit, dispatch }, activite) {
    asyncLoading(axios.put('/update_activites/' + activite.id, {
        programme_id: activite.programme_id,
        numero_ordre: activite.numero_ordre,
        code: activite.code,
        libelle: activite.libelle,
        structure_activites_id: activite.structure_activites_id
    })).then(res => {
        commit('MODIFIER_PLAN_ACTIVITE', res.data)
        dispatch('getPlanActivite')
        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué avec success !',
            type: "success"
        })
    }).catch(error => console.log(error))
}
// supprimer plan fonctionnelle
export function supprimerPlanActivite({ commit, dispatch }, id) {

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_PLAN_ACTIVITE', id)
            dispatch('getPlanActivite')

            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/delete_activites/' + id).then(() => dialog.close())
        })
}