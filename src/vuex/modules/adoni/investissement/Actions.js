import axios from '../../fabrice/bienService/urls/api'
import { asyncLoading } from 'vuejs-loading-plugin'

var housecall= require('housecall')
var queue = housecall({concurrency: 2, cooldown: 1000})

// action for print all to prestation

export  function  getInvestissement({commit}) {
    queue.push(() => axios.get('/list_invest').then((response) => {
      commit('GET_ALL_INVESTISSEMENT', response.data)
      
  }).catch(error => console.log(error)))
  }

  // action pour ajouter prestation

  export function ajouterPrestation({commit}, elementAjout){
    asyncLoading(axios.post('/add_invest',elementAjout
       
  )).then(response =>{
        if(response.status == 201){
            commit('AJOUTER_INVESTISSEMENT', response.data)

            this.$app.$notify({
              title: 'success ',
              text: 'Enregistrement effectué !',
              type:"success"
            })
        }


    }).catch(error => console.log(error))

}



// action pour modifier prestation


 export function modifierInvestissement({commit}, element_modifie) {
    asyncLoading( axios.put('/update_invest/'+ element_modifie.id ,{
       

   })).then(response => {
         commit('MODIFIER_INVESTISSEMENT', response.data)

         this.$app.$notify({
           title: 'success ',
           text: 'Modification effectué !',
           type:"success"
         })
     }).catch(error => console.log(error))
 }

  // supprimer investissement

export function supprimerInvestissement({commit}, id) {
   this.$app.$dialog
   .confirm("Voulez vouz vraiment supprimer ?.")
   .then(dialog => {
      commit('SUPPRIMER_INVESTISSEMENT', id)
     // // dialog.loading(false) // stops the proceed button's loader
       axios.delete('/supprimer_invest/' + id).then(() => dialog.close() )   
   })
 
}





