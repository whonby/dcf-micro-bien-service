import axios from './api_suivi_mission/api'
import { asyncLoading } from 'vuejs-loading-plugin'


var housecall= require('housecall')
var queue = housecall({concurrency: 2, cooldown: 1000})

// get all  categorie mission
// export  function  getCategorieMission({commit}) {
//     queue.push(() => axios.get('/liste_categorie_mission').then((response) => {
//       commit('GET_CATEGORIE_MISSION', response.data)
      
//   }).catch(error => console.log(error)))
//   }
  
// afficher avec la pagination

  export  function  getCategorieMission({commit}) {
    queue.push(() => axios.get('/liste_categorie_mission').then((response) => {
      
      commit('GET_CATEGORIE_MISSION', response.data) 
      
  }).catch(error => console.log(error)))
  }

  // ajouter categorie mission 
  export function ajouterCategorieMission({commit}, elementAjout){
      asyncLoading(axios.post('/add_categorie_mission',{
        code:elementAjout.code,
        libelle:elementAjout.libelle
    })).then(response =>{
          if(response.status == 201){
              commit('AJOUTER_CATEGORIE_MISSION', response.data)

              this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué !',
                type:"success"
              })
          }

      }).catch(error => console.log(error))
  }

  // modifier categorie mission
  export function modifierCategorieMission({commit}, element_modifie) {
     asyncLoading( axios.put('/update_categorie_mission/'+ element_modifie.id ,{
        code:element_modifie.code,
        libelle:element_modifie.libelle

    })).then(response => {
          commit('MODIFIER_CATEGORIE_MISSION', response.data)

          this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué !',
            type:"success"
          })
      }).catch(error => console.log(error))
  }
   // supprimer categorie mision
export function supprimerCategorieMission({commit}, id) {
    this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
       commit('SUPPRIMER_CATEGORIE_MISSION', id)
      // // dialog.loading(false) // stops the proceed button's loader
        axios.delete('/supprimer_categorie_mission/' + id).then(() => dialog.close() )   
    })
  
}







// get all mission
export  function  getMission({commit}) {
    queue.push(() => axios.get('/list_mission').then((response) => {
      commit('GET_MISSION', response.data)
      
  }).catch(error => console.log(error)))
  }


  // upload file of mission

  // export function addFile(){
   
  //   let formData = new FormData();

    
  //     formData.append('file', this.fichier_joint);
  //   asyncLoading(axios.post('/add_upload',
  //       formData,
  //       {
  //         headers:{'Content-Type':'multipart/form-data'}
  //       }
    
  //   )).then(function() {
  //     console.log('succes')
      

  //   }).catch(error => console.log(error))
  // }


// ajouter mission
export function ajouterMission({commit},formData){
   asyncLoading( axios.post('/add_mission',formData)).then(response => {
        commit('AJOUTER_MISSION', response.data)
        // dispatch('ajouterFichierJoint', [fichier])
        
        this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué avec success!',
            type:"success"
          })
    }).catch(error => console.log(error))
//  console.log(formData)
}

// ajouter le fichier joint a la mission
// export function ajouterFichierJoint({commit}, formData){
//   const config = {
//     header: {
//       'content-type': 'multipart/form-data'
//     }
//   }
//    axios.post('/add_upload', formData, config).then(response => {
//        commit('MODIFIER_MISSION', response.data)
       
//    }).catch(error => console.log(error))
// }




// modifier mission
export function modifierMission({commit}, element_modifie){
   asyncLoading( axios.put('/update_mission/'+ element_modifie.id, element_modifie))
    .then(response => {
         commit('MODIFIER_MISSION',response.data)

          this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué avec succès!',
            type:"success"
          })
    }).catch(error => console.log(error))
   // console.log(element_modifie)
} 

// supprimer mission
export function supprimerMission({commit},id){
    
    this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
       commit('SUPPRIMER_MISSION', id)
      // // dialog.loading(false) // stops the proceed button's loader
        axios.delete('/supprimer_mission/' + id).then(() => dialog.close() )   
    })
}






// get all norme de mission 
export  function  getNormeMission({commit}) {
    queue.push(() => axios.get('/liste_norme_mission').then((response) => {
      commit('GET_NORME_MISSION', response.data)
      
  }).catch(error => console.log(error)))  
  }
// ajouter mission
export function ajouterNormeMission({commit},formData){
   asyncLoading( axios.post('/add_norme_mission',formData)).then(response => {
        commit('AJOUTER_NORME_MISSION', response.data)
        this.$app.$notify({
          title: 'success ',
          text: 'Enregistrement effectué !',
          type:"success"
        })
    }).catch(error => console.log(error))
//  console.log(formData)
}

// modifier mission
export function modifierNormeMission({commit}, element_modifie){
  asyncLoading(  axios.put('/update_norme_mission/'+ element_modifie.id,{
    fonction_id:element_modifie.fonction_id,
    source_financement_id:element_modifie.source_financement_id,
    perdiem:element_modifie.perdiem,
    fichier_joint:element_modifie.fichier_joint,
    url_fichier_joint:element_modifie.url_fichier_joint,
    zone:element_modifie.zone
    

  }))
    .then(response => {
         commit('MODIFIER_NORME_MISSION',response.data)

         this.$app.$notify({
          title: 'success ',
          text: 'Modification effectué !',
          type:"success"
        })

    }).catch(error => console.log(error))
   // console.log(element_modifie)
} 

// supprimer mission
export function supprimerNormeMission({commit},id){
    
    this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
       commit('SUPPRIMER_NORME_MISSION', id)
      // // dialog.loading(false) // stops the proceed button's loader
        axios.delete('/supprimer_norme_mission/' + id).then(() => dialog.close() )   
    })
}


// get all historique mission

export  function  getHistoriqueMission({commit}) {
  queue.push(() => axios.get('/liste_historique_mission').then((response) => {
    commit('GET_HISTORIQUE_MISSION', response.data)
    
}).catch(error => console.log(error)))  
}


// ajouter mission
export function ajouterHistoriqueMission({commit, dispatch},formData){
asyncLoading( axios.post('/add_historique_mission',formData)).then(response => {
      commit('AJOUTER_HISTORIQUE_MISSION', response.data)
      dispatch('getHistoriqueMission')
      this.$app.$notify({
          title: 'Décision du C F',
          text: 'Le status a été mis à jour !',
          type:"success"
        })
  }).catch(error => console.log(error))
 // console.log(formData)
}



// modifier historique missions
export function modifierHistoriquesMission({commit}, element_modifie){
asyncLoading( axios.put('/update_historique_mission/'+ element_modifie.id, element_modifie))
 .then(response => {
      commit('MODIFIER_HISTORIQUE_MISSION',response.data)

      this.$app.$notify({
         title: 'success ',
         text: 'Modification  effectué avec success!',
         type:"success"
       })
 }).catch(error => console.log(error))
// console.log(element_modifie)
} 




// supprimer historique mission
export function supprimerHistoriqueMission({commit},id){

  this.$app.$dialog
  .confirm("Voulez vouz vraiment supprimer ?.")
  .then(dialog => {
     commit('SUPPRIMER_HISTORIQUE_MISSION', id)
    // // dialog.loading(false) // stops the proceed button's loader
      axios.delete('/supprimer_historique_mission/' + id).then(() => dialog.close() )   
  })
}


