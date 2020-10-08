//import axios from '../../../../request/gestionMarcheHorSib'
import axios from '../../../../request/bienService'
import { asyncLoading } from 'vuejs-loading-plugin'

var housecall= require('housecall')
var queue = housecall({concurrency: 2, cooldown: 1000})

export  function  getMarcheHorSib({commit}) {
    queue.push(() => axios.get('/marche_hors_sib').then((response) => {
      
      commit('GET_ALL_MARCHE_HORS_SIB', response.data) 
      
  }).catch(error => console.log(error)))
  }


   // 
   export function ajouterMarcheHorSib({commit},formData){
    asyncLoading( axios.post('/marche_hors_sib',formData)).then(response => {
         commit('AJOUTER_MARCHE_HORS_SIB', response.data)
         this.$app.$notify({
           title: 'success ',
           text: 'Enregistrement effectué !',
           type:"success"
         })
     }).catch(error => console.log(error))
 //  console.log(formData)
 }

 export function modifierMarcheHorSib({commit}, element_modifie){
    asyncLoading( axios.put('/marche_hors_sib/'+ element_modifie.id, element_modifie))
     .then(response => {
          commit('MODIFIER_MARCHE_HORS_SIB',response.data)
 
           this.$app.$notify({
             title: 'success ',
             text: 'Modification effectué avec succès!',
             type:"success"
           })
     }).catch(error => console.log(error))
    // console.log(element_modifie)
 } 


 export function supprimerMarcheHorSib({commit},id){
    
    this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
       commit('SUPPRIMER_MARCHE_HORS_SIB', id)
      // // dialog.loading(false) // stops the proceed button's loader
        axios.delete('/marche_hors_sib/' + id).then(() => dialog.close() )   
    })
}