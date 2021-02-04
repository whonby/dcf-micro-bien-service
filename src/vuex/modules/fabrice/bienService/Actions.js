import axios from '../../../../request/bienService'
import { asyncLoading } from 'vuejs-loading-plugin'

var housecall= require('housecall')
var queue = housecall({concurrency: 2, cooldown: 1000})

// export function getDecompte({ commit }) {
//   queue.push(() => axios.get('/Listedecompte').then((response) => {
//     commit('GET_ALL_DECOMPTE', response.data)

//   }).catch(error => console.log(error)))
// }




// // action pour modifier candidat selectionner
// export function modifierDecompte({commit}, formData){
//   asyncLoading(axios.post('/modifierDecompte',formData)).then(response =>{
//       if(response.status == 201){
//         console.log(response.data)
//         commit('MODIFIER_DECOMPTE', response.data)
          
//           this.$app.$notify({
//             title: '',
//             text: 'Enregistrement effectué !',
//             type:"success"
//           })
//       }

//   }).catch(error => console.log(error))
// }

// // supprimer candidat selectionner
// export function supprimerDecompte({commit}, id) {
//   return this.$app.$dialog
//  .confirm("Voulez vouz vraiment supprimer ?.")
//  .then(dialog => {
//    commit('SUPPRIMER_DECOMPTE', id)
//    // // dialog.loading(false) // stops the proceed button's loader
//    return axios.delete('/supprimerdecompte/' + id).then(() => dialog.close() )   
//  })

// }


// export function ajouterDecompte({ commit }, formData) {
//   asyncLoading(axios.post('/ajouterdecompte', formData)).then(response => {
//     if (response.status == 201) {
//       console.log(response.data)
//       commit('AJOUTER_DECOMPTE', response.data)

//       this.$app.$notify({
//         title: 'success ',
//         text: 'Enregistrement effectué !',
//         type: "success"
//       })
//     }

//   }).catch(error => console.log(error))
// }












// export  function  getImageMarche({commit}) {
//   queue.push(() => axios.get('/image_marche').then((response) => {
//     commit('GET_ALL_IMAGE_MARCHE', response.data)
    
// }).catch(error => console.log(error)))
// }




export  function  getCandidatSelectionner({commit}) {
  queue.push(() => axios.get('/liste_candidat_select').then((response) => {
    commit('GET_ALL_SELECTIONNER_CANDIDAT', response.data)
    
}).catch(error => console.log(error)))
}

// action pour modifier candidat selectionner
export function modifierCandidatSelectionner({commit}, formData){
  asyncLoading(axios.post('/update_candidat_select',formData)).then(response =>{
      if(response.status == 201){
        console.log(response.data)
          commit('MODIFIER_CANDIDAT_SELECTIONNER', response.data)
          
          this.$app.$notify({
            title: '',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// supprimer candidat selectionner
export function supprimerCandidatSelectionner({commit}, id) {
  return this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('SUPPRIMER_CANDIDAT_SELECTION', id)
   // // dialog.loading(false) // stops the proceed button's loader
   return  axios.delete('/suppri_candidat_select/' + id).then(() => dialog.close() )   
 })

}



// retourn de selection du candiadt 
export function supprimerCandidatSelectionnerDeselection({commit}, id) {
   return this.$app.$dialog
  .confirm("Voulez vouz déselectionner le candidat ?.")
  .then(dialog => {
     commit('SUPPRIMER_CANDIDAT_SELECTION', id)
    // // dialog.loading(false) // stops the proceed button's loader
    return  axios.delete('/suppri_candidat_select/' + id).then(() => dialog.close() )   
  })
 
 }




export function ajouterCandidatSelectionner({commit}, formData){

   return this.$app.$dialog
  .confirm("Voulez-vous selectionner ce candidat ?.")
  .then(dialog => {
    
    return asyncLoading(axios.post('/add_candidat_select',formData)).then(response =>{
      if(response.status == 201){
        console.log(response.data)
          commit('AJOUTER_CANDIDAT_SELECTIONNER', response.data)
          dialog.close()
          this.$app.$notify({
            title: '',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
    // // dialog.loading(false) // stops the proceed button's loader
     
  })

  
}


export  function getReception({commit}){
  queue.push(() => axios.get('/ReceptionMarche').then(tony => {
      commit('GET_RECEPTION', tony.data)
  }).catch(error => console.log(error)))
}




export function ajouterReception({commit}, formData){
  asyncLoading(axios.post('/ajouter_ReceptionMarche',formData)).then(response =>{
      if(response.status == 201){
        console.log(response.data)
          commit('AJOUTER_RECEPTION', response.data)
          
          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// ajouter role membrecojo
// export function ajouterRolemembreCojo({commit}, objetAjout){
// asyncLoading(axios.post('/ajouter_ListeRoleMembreCojo' ,{
  // code:objetAjout.code,
  // libelle:objetAjout.libelle,
//  
// })).then(tony => {
  //  if(tony.status == 201){
      //  commit('AJOUTER_ROLE_MEMBRECOJO', tony.data)
// 
      //  this.$app.$notify({
          // title: 'success ',
          // text: 'Enregistrement effectué avec success !',
          // type:"success"
        // })
  //  }
// }).catch(error => console.log(error))
// }
// supprimer role membrecojo
export function supprimerReception({commit}, id){

  this.$app.$dialog
  .confirm("Voulez vouz vraiment supprimer ?.")
  .then(dialog => {
     commit('SUPPRIMER_RECEPTION', id)
    // // dialog.loading(false) // stops the proceed button's loader
      axios.delete('/supprimer_ReceptionMarche/' + id).then(() => dialog.close() )   
  })
}
//modifier role membrecojo
export function modifierReception({commit}, elementModifie){

 asyncLoading( axios.put('/modifier_ReceptionMarche/' + elementModifie.id ,{
  code:elementModifie.code,
  libelle:elementModifie.libelle,

})).then(response => {
      commit('MODIFIER_RECEPTION', response.data)

      this.$app.$notify({
          title: 'success ',
          text: 'Modification effectué avec success !',
          type:"success"
        })
  }).catch(error => console.log(error))
 
}





 // liste role membrecojo
 export  function getRolemembreCojo({commit}){
  queue.push(() => axios.get('/ListeRoleMembreCojo').then(tony => {
      commit('GET_ROLE_MEMBRECOJO', tony.data)
  }).catch(error => console.log(error)))
}




export function ajouterRolemembreCojo({commit}, formData){
  asyncLoading(axios.post('/ajouter_ListeRoleMembreCojo',formData)).then(response =>{
      if(response.status == 201){
        console.log(response.data)
          commit('AJOUTER_ROLE_MEMBRECOJO', response.data)
          
          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// ajouter role membrecojo
// export function ajouterRolemembreCojo({commit}, objetAjout){
// asyncLoading(axios.post('/ajouter_ListeRoleMembreCojo' ,{
  // code:objetAjout.code,
  // libelle:objetAjout.libelle,
//  
// })).then(tony => {
  //  if(tony.status == 201){
      //  commit('AJOUTER_ROLE_MEMBRECOJO', tony.data)
// 
      //  this.$app.$notify({
          // title: 'success ',
          // text: 'Enregistrement effectué avec success !',
          // type:"success"
        // })
  //  }
// }).catch(error => console.log(error))
// }
// supprimer role membrecojo
export function supprimerRolemembreCojo({commit}, id){

  this.$app.$dialog
  .confirm("Voulez vouz vraiment supprimer ?.")
  .then(dialog => {
     commit('SUPPRIMER_ROLE_MEMBRECOJO', id)
    // // dialog.loading(false) // stops the proceed button's loader
      axios.delete('/supprimer_ListeRoleMembreCojo/' + id).then(() => dialog.close() )   
  })
}
//modifier role membrecojo
export function modifierRolemembreCojo({commit}, elementModifie){

 asyncLoading( axios.put('/modifier_ListeRoleMembreCojo/' + elementModifie.id ,{
  code:elementModifie.code,
  libelle:elementModifie.libelle,

})).then(response => {
      commit('MODIFIER_ROLE_MEMBRECOJO', response.data)

      this.$app.$notify({
          title: 'success ',
          text: 'Modification effectué avec success !',
          type:"success"
        })
  }).catch(error => console.log(error))
 
}



export  function  getBailleur({commit}) {
    queue.push(() => axios.get('/bailleurs').then((response) => {
      commit('GET_ALL_BAILLEUR', response.data)
      
  }).catch(error => console.log(error)))
  }

  // action pour ajouter bailleur
  export function ajouterBailleur({commit}, formData){
    asyncLoading(axios.post('/bailleurs',formData)).then(response =>{
        if(response.status == 201){
          console.log(response.data)
            commit('AJOUTER_BAILLEUR', response.data)
            
            this.$app.$notify({
              title: 'success ',
              text: 'Enregistrement effectué !',
              type:"success"
            })
        }

    }).catch(error => console.log(error))
}

// action pour modifier bailleur


 export function modifierBailleur({commit}, element_modifie) {
    asyncLoading( axios.put('/bailleurs' ,element_modifie)).then(response => {
         commit('MODIFIER_BAILLEUR', response.data)
         this.$app.$notify({
           title: 'success ',
           text: 'Modification effectué !',
           type:"success"
         })
     }).catch(error => console.log(error))
 }
  // supprimer categorie mision
export function supprimerBailleur({commit}, id) {
   this.$app.$dialog
   .confirm("Voulez vouz vraiment supprimer ?.")
   .then(dialog => {
      commit('SUPPRIMER_BAILLEUR', id)
     // // dialog.loading(false) // stops the proceed button's loader
       axios.delete('/bailleurs/' + id).then(() => dialog.close() )   
   })
 
}





// action pour execution des marches




export  function  getExecutionMarche({commit}) {
  queue.push(() => axios.get('/bailleurs').then((response) => {
    commit('GET_EXECUTION_MARCHE', response.data)
    
}).catch(error => console.log(error)))
}

// action 
export function ajouterExecutionMarche({commit}, formData){
  asyncLoading(axios.post('/bailleurs',formData)).then(response =>{
      if(response.status == 201){
        console.log(response.data)
          commit('AJOUTER_EXECUTION_MARCHE', response.data)
          
          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action 


export function modifierExecutionMarche({commit}, element_modifie) {
  asyncLoading( axios.put('/bailleurs' ,element_modifie)).then(response => {
       commit('MODIFIER_EXECUTION_MARCHE', response.data)
       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer categorie mision
export function supprimerExecutionMarche({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('DELETE_EXECUTION_MARCHE', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/bailleurs/' + id).then(() => dialog.close() )   
 })

}








// action pour le motif de decision

export  function  getMotifDecision({commit}) {
  queue.push(() => axios.get('/motif_dessions').then((response) => {
    commit('GET_MOTIF_DECISION', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter bailleur
export function ajouterMotifDecision({commit}, formData){
  asyncLoading(axios.post('/motif_dessions',formData)).then(response =>{
      if(response.status == 201){
        console.log(response.data)
          commit('AJOUTER_MOTIF_DECISION', response.data)
          
          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier motif de decision


export function modifierMotifDecision({commit}, element_modifie) {
  asyncLoading( axios.put('/motif_dessions' ,element_modifie)).then(response => {
       commit('MODIFIER_MOTIF_DECISION', response.data)
       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer categorie mision
export function supprimerMotifDecision({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('DELETE_MOTIF_DECISION', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/motif_dessions/' + id).then(() => dialog.close() )   
 })

}



// action pour le document procedure


export  function  getDocumentProcedure({commit}) {
  queue.push(() => axios.get('/document_procedures').then((response) => {
    commit('GET_DOCUMENT_PROCEDURE', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter bailleur
export function ajouterDocumentProcedure({commit}, formData){
  asyncLoading(axios.post('/document_procedures',formData)).then(response =>{
      if(response.status == 201){
        console.log(response.data)
          commit('AJOUTER_DOCUMENT_PROCEDURE', response.data)
          
          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier motif de decision


export function modifierDocumentProcedure({commit}, element_modifie) {
  asyncLoading( axios.put('/document_procedures' ,element_modifie)).then(response => {
       commit('MODIFIER_DOCUMENT_PROCEDURE', response.data)
       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer categorie mision
export function supprimerDocumentProcedure({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('DELETE_DOCUMENT_PROCEDURE', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/document_procedures/' + id).then(() => dialog.close() )   
 })

}







// action pour acte effet financier




export  function  getActeEffetFinancier({commit}) {
  queue.push(() => axios.get('/acte_effet_finnanciers').then((response) => {
    commit('GET_ALL_ACTE_EFFET_FINANCIER', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter bailleur
export function ajouterActeEffetFinancier({commit,dispatch}, formData){
  asyncLoading(axios.post('/acte_effet_finnanciers',formData)).then(response =>{
      if(response.status == 201){
        console.log(response.data)
          commit('AJOUTER_ACTE_EFFET_FINANCIER', response.data)
          dispatch("getActeEffetFinancier")
          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier motif de decision


export function modifierActeEffetFinancier({commit}, element_modifie) {
  asyncLoading( axios.put('/acte_effet_finnanciers' ,element_modifie)).then(response => {
       commit('MODIFIER_ACTE_EFFET_FINANCIER', response.data)
       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer categorie mision
export function supprimerActeEffetFinancier({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('DELET_ACTE_EFFET_FINANCIER', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/acte_effet_finnanciers/' + id).then(() => dialog.close() )   
 })

}






















export  function getTypeActeDepense({commit}) {
  queue.push(() => axios.get('/type_acte_depenses').then((response) => {
   // console.log(response.data)
    commit('GET_ALL_TYPE_ACTE_DEPENSE', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter type  acte depense
export function ajouterTypeActeDepense({commit},formData){
  asyncLoading(axios.post('/type_acte_depenses',formData)).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_TYPE_ACTE_DEPENSE', response.data)

          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier type acte depense


export function modifierTypeActeDepense({commit}, element_modifie) {
  asyncLoading( axios.put('/type_acte_depenses' ,element_modifie)).then(response => {
       commit('MODIFIER_TYPE_ACTE_DEPENSE', response.data)
       

       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer type acte acte depense
export function supprimerTypeActeDepense({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('SUPPRIMER_TYPE_ACTE_DEPENSE', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/type_acte_depenses/' + id).then(() => dialog.close() )   
 })

}


export  function  getTypeFacture({commit}) {
  queue.push(() => axios.get('/type_factures').then((response) => {
    commit('GET_TYPE_FACTURE', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter type facture
export function ajouterTypeFacture({commit}, formData){
  asyncLoading(axios.post('/type_factures',formData)).then(response =>{
      if(response.status == 201){
      console.log(response.data)
          commit('AJOUTER_TYPE_FACTURE', response.data)

          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier type facture


export function modifierTypeFacture({commit}, element_modifie) {
  asyncLoading( axios.put('/type_factures' ,element_modifie)).then(response => {
       commit('MODIFIER_TYPE_FACTURE', response.data)
       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer type facture
export function supprimerTypeFacture({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('SUPPRIMER_TYPE_FACTURE', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/type_factures/' + id).then(() => dialog.close() )   
 })

}

// action pour lot && type de prestation

export  function  getTypePrestation({commit}) {
  queue.push(() => axios.get('/type_prestations').then((response) => {
    commit('GET_ALL_TYPE_PRESTATION', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter type prestation
export function ajouterTypePrestation({commit}, formData){
  asyncLoading(axios.post('/type_prestations',formData)).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_TYPE_PRESTATION', response.data)

          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier type prestation


export function modifierTypePrestation({commit}, element_modifie) {
  asyncLoading( axios.put('/type_prestations',element_modifie)).then(response => {
       commit('MODIFIER_TYPE_PRESTATION', response.data)
       

       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer type facture
export function supprimerTypePrestation({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('SUPPRIMER_TYPE_PRESTATION', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/type_prestations/' + id).then(() => dialog.close() )   
 })

}






// action pour lot

export  function  getLot({commit}) {
  queue.push(() => axios.get('/lots').then((response) => {
    commit('GET_ALL_LOT', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter lot
export function ajouterLot({commit}, elementAjout){
  asyncLoading(axios.post('/lots',elementAjout)).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_LOT', response.data)

          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier lot


export function modifierLot({commit}, element_modifie) {
  asyncLoading( axios.put('/lots',element_modifie)).then(response => {
       commit('MODIFIER_LOT', response.data)
       

       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer compte

export function supprimerLot({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('SUPPRIMER_LOT', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/lots/' + id).then(() => dialog.close() )
 })

}



// action pour analyse dossier

export  function  getAnalyseDossier({commit}) {
  queue.push(() => axios.get('/analyse_dossier').then((response) => {
    commit('GET_ALL_ANALYSE_DOSSIER', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter analyse dossier
export function ajouterAnalyseDossierMultiple({commit,dispatch}, elementAjout){
  asyncLoading(axios.post('/analyse_dossier_multiple',elementAjout)).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_ANALYSE_DOSSIER', response.data)
          dispatch("getAnalyseDossier")
          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

export function supprimerAnalyseDossierMultiple({dispatch}, id) {
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {

            axios.delete('/delete_mutipleAnalyse/' + id).then(() =>{
                dispatch("getAnalyseDossier")
                dialog.close()

            }  )

        })

}

/***
 * A
 * @param commit
 * @param element_modifie
 */

// action pour modifier analyse dossier


export function modifierAnalyseDossier({commit}, element_modifie) {
  asyncLoading( axios.put('/analyse_dossier' ,element_modifie)).then(response => {
       commit('MODIFIER_ANALYSE_DOSSIER', response.data)

       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer analyse dossier

export function supprimerAnalyseDossier({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('SUPPRIMER_ANALYSE_DOSSIER', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/analyse_dossier/' + id).then(() => dialog.close() )
 })

}



// action pour cojo

export  function  getCojo({commit}) {
  queue.push(() => axios.get('/cojo').then((response) => {
    commit('GET_ALL_COJO', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter la cojo

export function ajouterCojo({commit,dispatch}, elementAjout){
  asyncLoading(axios.post('/cojo',elementAjout)).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_COJO', response.data.cojo)
          dispatch("getStructureDAO");
          response.data.marche.forEach(function (value) {
              commit('MODIFIER_MARCHE', value)
          })

        //  commit('AJOUTER_MEMBRE_COJO', response.data.membre)
          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}




// action pour modifier la cojo


export function modifierCojo({commit}, element_modifie) {
  asyncLoading( axios.put('/cojo',element_modifie)).then(response => {
       commit('MODIFIER_COJO', response.data)
       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer cojo

export function supprimerCojo({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('SUPRIMER_COJO', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/cojo/' + id).then(() => dialog.close() )
 })

}
// rapport d'ouverture

export  function  getRapport({commit}) {
  queue.push(() => axios.get('/liste_rapport').then((response) => {
    commit('GET_ALL_RAPPORT', response.data)
    
}).catch(error => console.log(error)))
}

export function ajouterRapport({commit}, elementAjout, config){
  asyncLoading(axios.post('/add_rapport',elementAjout, config)).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_RAPPORT', response.data.cojo)
          commit('AJOUTER_MEMBRE_COJO', response.data.membre)
          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

export function modifierRapport({commit}, element_modifie,config) {
  asyncLoading( axios.post('/update_rapport',element_modifie, config)).then(response => {
       commit('MODIFIER_RAPPORT', response.data)
       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}


export function supprimerRapport({commit}, id) {
  this.$app.$dialog
  .confirm("Voulez vouz vraiment supprimer ?.")
  .then(dialog => {
     commit('SUPPRIMER_RAPPORT', id)
    // // dialog.loading(false) // stops the proceed button's loader
      axios.delete('/delete_rapport/' + id).then(() => dialog.close() )
  })
 
 }


// acttion de l'obseravtion de bailleur



export  function  getObservationBailleur({commit}) {
  queue.push(() => axios.get('/observation_bailleurs').then((response) => {
    commit('GET_OBSERVATION_BAILLEUR', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter observation bailleur

export function ajouterObseravtionBailleur({commit}, elementAjout){
  asyncLoading(axios.post('/observation_bailleurs',elementAjout)).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_OBSERAVTION_BAILLEUR', response.data)

          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier obseravtion bailleur


export function modifierObservationBaileur({ commit, dispatch}, element_modifie) {
  asyncLoading( axios.put('/observation_bailleurs',element_modifie)).then(response => {
       commit('MODIFIER_OBSERAVTION_BAILLEUR', response.data)
    dispatch("getObservationBailleur");
       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer obseravtion bailleur

export function supprimerObseravtionBailleur({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('DELETE_OBSERVATION_BAILLEUR', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/observation_bailleurs/' + id).then(() => dialog.close() )
 })

}





///////////////////////////////////////////////////////////



// action pour la condition

export  function  getCondition({commit}) {
  queue.push(() => axios.get('/conditions').then((response) => {
    commit('GET_ALL_CONDITION', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter la condition
export function ajouterCondition({commit}, formData){
  asyncLoading(axios.post('/conditions',formData)).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_CONDITION', response.data)

          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier condition


export function modifierCondition({commit}, element_modifie) {
  asyncLoading( axios.put('/conditions',element_modifie)).then(response => {
       commit('MODIFIER_CONDITION', response.data)
       

       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer la condition
export function supprimerCondition({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('SUPPRIMER_CONDITION', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/conditions/' + id).then(() => dialog.close() )   
 })

}







// action pour de text juridique

export  function  getTextJuridique({commit}) {
  queue.push(() => axios.get('/text_juridicuques').then((response) => {
    commit('GET_TEXTJURIDIQUE', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter la condition
export function ajouterTextJuridique({commit}, formData){
  asyncLoading(axios.post('/text_juridicuques',formData)).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_TEXT_JURIDIQUE', response.data)

          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier condition


export function modifierTextJuridique({commit}, element_modifie) {
  asyncLoading( axios.put('/text_juridicuques',element_modifie)).then(response => {
       commit('MODIFIER_TEXT_JURIDIQUE', response.data)
       

       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer la condition
export function supprimerTextJuridique({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('SUPPRIMER_TEXT_JURIDIQUE', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/text_juridicuques/' + id).then(() => dialog.close() )   
 })

}




// action pour  fonction occuppee

// export  function  getFonctionOccuppe({commit}) {
//   queue.push(() => axios.get('/url').then((response) => {
//     commit('GET_ALL_FONCTION_OCCUPPE', response.data)
    
// }).catch(error => console.log(error)))
// }

// action pour ajouter la fonction occuppee
// export function ajouterFonctionOccuppe({commit}, elementAjout){
//   asyncLoading(axios.post('/urls',{
//     code_fonction:elementAjout.code_fonction,
//     libelle_fonction:elementAjout.libelle_fonction,
//     date_debut_fonction:elementAjout.date_debut_fonction,
//     date_fin_fonction:elementAjout.date_fin_fonction
    
// })).then(response =>{
//       if(response.status == 201){
//           commit('AJOUTER_FONCTION_OCCUPPE', response.data)

//           this.$app.$notify({
//             title: 'success ',
//             text: 'Enregistrement effectué !',
//             type:"success"
//           })
//       }

//   }).catch(error => console.log(error))
// }

// action pour modifier la fonction occuppe


// export function modifierFonctionOccuppe({commit}, element_modifie) {
//   asyncLoading( axios.put('/urls/'+ element_modifie.id ,{
//     code_fonction:element_modifie.code_fonction,
//     libelle_fonction:element_modifie.libelle_fonction,
//     date_debut_fonction:element_modifie.date_debut_fonction,
//     date_fin_fonction:element_modifie.date_fin_fonction
    
//  })).then(response => {
//        commit('MODIFIER_FONCTION_OCCUPPE', response.data)
       

//        this.$app.$notify({
//          title: 'success ',
//          text: 'Modification effectué !',
//          type:"success"
//        })
//    }).catch(error => console.log(error))
// }
// supprimer la fonction occuppe

// export function supprimerFonctionOccuppe({commit}, id) {
//  this.$app.$dialog
//  .confirm("Voulez vouz vraiment supprimer ?.")
//  .then(dialog => {
//     commit('SUPPRIMER_FONCTION_OCCUPPE', id)
  
//      axios.delete('/urls/' + id).then(() => dialog.close() )   
//  })

// }



// action pour la nature de fonction

// export  function  getNatureFonction({commit}) {
//   queue.push(() => axios.get('/url').then((response) => {
//     commit('GET_ALL_NATURE_FONCTION', response.data)
    
// }).catch(error => console.log(error)))
// }

// action pour ajouter la nature de fonction
// export function ajouterNatureFonction({commit}, elementAjout){
//   asyncLoading(axios.post('/urls',{
//     id_type:elementAjout.id_type,
//     libelle_fonction:elementAjout.libelle_fonction,
//     type_fonction:elementAjout.type_fonction
    
// })).then(response =>{
//       if(response.status == 201){
//           commit('AJOUTER_NATURE_FONCTION', response.data)

//           this.$app.$notify({
//             title: 'success ',
//             text: 'Enregistrement effectué !',
//             type:"success"
//           })
//       }

//   }).catch(error => console.log(error))
// }

// action pour modifier la nature de fonction


// export function modifierNatureFonction({commit}, element_modifie) {
//   asyncLoading( axios.put('/urls/'+ element_modifie.id ,{
//     id_type:element_modifie.id_type,
//     libelle_fonction:element_modifie.libelle_fonction,
//     type_fonction:element_modifie.type_fonction
    
    
//  })).then(response => {
//        commit('MODIFIER_NATURE_FONCTION', response.data)
       

//        this.$app.$notify({
//          title: 'success ',
//          text: 'Modification effectué !',
//          type:"success"
//        })
//    }).catch(error => console.log(error))
// }
// supprimer la nature de fonction

// export function supprimerNatureFonction({commit}, id) {
//  this.$app.$dialog
//  .confirm("Voulez vouz vraiment supprimer ?.")
//  .then(dialog => {
//     commit('SUPPRIMER_NATURE_FONCTION', id)
 
//      axios.delete('/urls/' + id).then(() => dialog.close() )   
//  })

// }



// action pour la signature

// export  function  getSignature({commit}) {
//   queue.push(() => axios.get('/url').then((response) => {
//     commit('GET_ALL_SIGNATURE', response.data)
    
// }).catch(error => console.log(error)))
// }

// action pour ajouter la signature

// export function ajouterSignature({commit}, elementAjout){
//   asyncLoading(axios.post('/urls',{
//     signature:elementAjout.signature,
//     debut_validite:elementAjout.debut_validite,
//     fin_validite:elementAjout.fin_validite,
//     version:elementAjout.version,
//     id_signature_modifie:elementAjout.id_signature_modifie
    
// })).then(response =>{
//       if(response.status == 201){
//           commit('AJOUTER_SIGNATURE', response.data)

//           this.$app.$notify({
//             title: 'success ',
//             text: 'Enregistrement effectué !',
//             type:"success"
//           })
//       }

//   }).catch(error => console.log(error))
// }

// action pour modifier la signature


// export function modifierSignature({commit}, element_modifie) {
//   asyncLoading( axios.put('/urls/'+ element_modifie.id ,{
//     signature:element_modifie.signature,
//     debut_validite:element_modifie.debut_validite,
//     fin_validite:element_modifie.fin_validite,
//     version:element_modifie.version,
//     id_signature_modifie:element_modifie.id_signature_modifie
    
//  })).then(response => {
//        commit('MODIFIER_SIGNATURE', response.data)
       

//        this.$app.$notify({
//          title: 'success ',
//          text: 'Modification effectué !',
//          type:"success"
//        })
//    }).catch(error => console.log(error))
// }
// supprimer la signature

// export function supprimerSignature({commit}, id) {
//  this.$app.$dialog
//  .confirm("Voulez vouz vraiment supprimer ?.")
//  .then(dialog => {
//     commit('SUPPRIMER_SIGNATURE', id)

//      axios.delete('/urls/' + id).then(() => dialog.close() )   
//  })

// }


// action pour type acte effet financier

export  function  getTypeActeEffetFinancier({commit}) {
  queue.push(() => axios.get('/type_act_effets').then((response) => {
    commit('GET_ALL_TYPE_ACTE_EFFET_FINANCIER', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter type acte effet financier

export function ajouterTypeActeEffetFinancier({commit}, formData){
  asyncLoading(axios.post('/type_act_effets',formData)).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_TYPE_ACTE_EFFET_FINANCIER', response.data)

          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier type acte effet financier


export function modifierTypeActeEffetFinancier({commit}, element_modifie) {
  asyncLoading( axios.put('/type_act_effets' ,element_modifie)).then(response => {
       commit('MODIFIER_TYPE_ACTE_EFFET_FINANCIER', response.data)
       

       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer type acte effet financier

export function supprimerTypeActeEffetFinancier({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('SUPPRIMER_TYPE_ACTE_AFFET_FINANCIER', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/type_act_effets/' + id).then(() => dialog.close() )   
 })

}



// action pour type analyse

export  function  getTypeAnalyse({commit}) {
  queue.push(() => axios.get('/type_analyses').then((response) => {
    commit('GET_TYPE_ANALYSE', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter type analyse

export function ajouterTypeAnalyse({commit}, formData){
  asyncLoading(axios.post('/type_analyses',formData)).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_TYPE_ANALYSE', response.data)

          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier type analyse


export function modifierTypeAnalyse({commit}, element_modifie) {
  asyncLoading( axios.put('/type_analyses',element_modifie)).then(response => {
       commit('MODIFIER_TYPE_ANALYSE', response.data)
       

       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer type analyse

export function supprimertypeAnalyse({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('SUPPRIMER_TYPE_ANALYSE', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/type_analyses/' + id).then(() => dialog.close() )   
 })

}




// export  function  getTypeUA({commit}) {
//   queue.push(() => axios.get('/url').then((response) => {
//     commit('GET_TYPE_UA', response.data)
    
// }).catch(error => console.log(error)))
// }

// action pour ajouter type unite administrative

// export function ajouterTypeUA({commit}, elementAjout){
//   asyncLoading(axios.post('/urls',{
//     libelle:elementAjout.libelle
// })).then(response =>{
//       if(response.status == 201){
//           commit('AJOUTER_TYPE_UA', response.data)

//           this.$app.$notify({
//             title: 'success ',
//             text: 'Enregistrement effectué !',
//             type:"success"
//           })
//       }

//   }).catch(error => console.log(error))
// }

// action pour modifier type unite administrative


// export function modifierTypeUA({commit}, element_modifie) {
//   asyncLoading( axios.put('/urls/'+ element_modifie.id ,{
//     libelle:element_modifie.libelle
    
//  })).then(response => {
//        commit('MODIFIER_TYPE_UA', response.data)
       

//        this.$app.$notify({
//          title: 'success ',
//          text: 'Modification effectué !',
//          type:"success"
//        })
//    }).catch(error => console.log(error))
// }
// supprimer type unite administrative

// export function supprimerTypeUA({commit}, id) {
//  this.$app.$dialog
//  .confirm("Voulez vouz vraiment supprimer ?.")
//  .then(dialog => {
//     commit('SUPPRIMER_TYPE_UA', id)
 
//      axios.delete('/urls/' + id).then(() => dialog.close() )   
//  })

// }



// action pour unite administrative

// export  function  getUniteAdministrative({commit}) {
//   queue.push(() => axios.get('/url').then((response) => {
//     commit('GET_ALL_UNITE_ADMINISTRATIVE', response.data)
    
// }).catch(error => console.log(error)))
// }

// action pour unite administrative

// export function ajouterUniteAdministrative({commit}, elementAjout){
//   asyncLoading(axios.post('/urls',{
//     type_service:elementAjout.type_service,
//     service_principale:elementAjout.service_principale,
//     groupe_de_service:elementAjout.groupe_de_service,
//     numero_ordre:elementAjout.numero_ordre
// })).then(response =>{
//       if(response.status == 201){
//           commit('AJOUTER_UNITE_ADMINISTRATIVE', response.data)

//           this.$app.$notify({
//             title: 'success ',
//             text: 'Enregistrement effectué !',
//             type:"success"
//           })
//       }

//   }).catch(error => console.log(error))
// }

// action pour modifier type analyse


// export function modifierUniteAdministrative({commit}, element_modifie) {
//   asyncLoading( axios.put('/urls/'+ element_modifie.id ,{
//      type_service:element_modifie.type_service,
//     service_principale:element_modifie.service_principale,
//     groupe_de_service:element_modifie.groupe_de_service,
//     numero_ordre:element_modifie.numero_ordre
//  })).then(response => {
//        commit('MODIFIER_UNITE_ADMINISTRATIVE', response.data)
       

//        this.$app.$notify({
//          title: 'success ',
//          text: 'Modification effectué !',
//          type:"success"
//        })
//    }).catch(error => console.log(error))
// }
// supprimer unite administrative

// export function supprimerUniteAdministrative({commit}, id) {
//  this.$app.$dialog
//  .confirm("Voulez vouz vraiment supprimer ?.")
//  .then(dialog => {
//     commit('SUPPRIMER_UNITE_ADMINISTRATIVE', id)
 
//      axios.delete('/urls/' + id).then(() => dialog.close() )   
//  })

// }



// action pour recuper la liste d'unite de zone

// export  function  getUniteZone({commit}) {
//   queue.push(() => axios.get('/url').then((response) => {
//     commit('GET_ALL_UNITE_ZONE', response.data)
    
// }).catch(error => console.log(error)))
// }

// action pour ajouter l'unite de zone

// export function ajouterUniteZone({commit}, elementAjout){
//   asyncLoading(axios.post('/urls',{
//     id_zone_geographique:elementAjout.id_zone_geographique,
//     id_unite_administrative:elementAjout.id_unite_administrative,
//     id_unite_zone:elementAjout.id_unite_zone,
//     longitude:elementAjout.longitude,
//     latitude:elementAjout.latitude,
//     telephone_cel:elementAjout.telephone_cel,
//     adresse_postale:elementAjout.adresse_postale,
//     telephone_fixe:elementAjout.telephone_fixe,
//     description_localisation:elementAjout.description_localisation,
//     quartier:elementAjout.quartier
    
// })).then(response =>{
//       if(response.status == 201){
//           commit('AJOUTER_UNITE_ZONE', response.data)

//           this.$app.$notify({
//             title: 'success ',
//             text: 'Enregistrement effectué !',
//             type:"success"
//           })
//       }

//   }).catch(error => console.log(error))
// }

// action pour modifier l'unite de zone


// export function modifierUniteZone({commit}, element_modifie) {
//   asyncLoading( axios.put('/urls/'+ element_modifie.id ,{
//     id_zone_geographique:element_modifie.id_zone_geographique,
//     id_unite_administrative:element_modifie.id_unite_administrative,
//     id_unite_zone:element_modifie.id_unite_zone,
//     longitude:element_modifie.longitude,
//     latitude:element_modifie.latitude,
//     telephone_cel:element_modifie.telephone_cel,
//     adresse_postale:element_modifie.adresse_postale,
//     telephone_fixe:element_modifie.telephone_fixe,
//     description_localisation:element_modifie.description_localisation,
//     quartier:element_modifie.quartier
//  })).then(response => {
//        commit('MODIFIER_UNITE_ZONE', response.data)
       

//        this.$app.$notify({
//          title: 'success ',
//          text: 'Modification effectué !',
//          type:"success"
//        })
//    }).catch(error => console.log(error))
// }
// action pour supprimer unite de zone

// export function supprimerUniteZone({commit}, id) {
//  this.$app.$dialog
//  .confirm("Voulez vouz vraiment supprimer ?.")
//  .then(dialog => {
//     commit('SUPPRIMER_UNITE_ZONE', id)
   
//      axios.delete('/urls/' + id).then(() => dialog.close() )   
//  })

// }


///////////////////////////////////////////////////////////////////////////////////


// action for ligne budgetaire 

// export  function  getLigneBudgetaire({commit}) {
//   queue.push(() => axios.get('/url').then((response) => {
//     commit('GET_ALL_LIGNE_BUDGETAIRE', response.data)
    
// }).catch(error => console.log(error)))
// }

// action pour ajouter la ligne budgetaire
// export function ajouterLigneBudgetaire({commit}, elementAjout){
//   asyncLoading(axios.post('/urls',{
//     id_unite_administrative:elementAjout.id_unite_administrative,
//     id_texte:elementAjout.id_texte,
//     id_ligne_modifie:elementAjout.id_ligne_modifie,
//     division:elementAjout.division,
//     groupe:elementAjout.groupe,
//     classe_fonctionnelle:elementAjout.classe_fonctionnelle,
//     classe_comptable:elementAjout.classe_comptable,
//     article:elementAjout.article,
//     paragraphe:elementAjout.paragraphe,
//     ligne:elementAjout.ligne,
//     rubrique:elementAjout.rubrique,
//     sous_rubrique:elementAjout.sous_rubrique,
//     dotation_initiale:elementAjout.dotation_initiale,
//     version:elementAjout.version

// })).then(response =>{
//       if(response.status == 201){
//           commit('AJOUTER_LIGNE_BUDGETAIRE', response.data)

//           this.$app.$notify({
//             title: 'success ',
//             text: 'Enregistrement effectué !',
//             type:"success"
//           })
//       }

//   }).catch(error => console.log(error))
// }

// action pour modifier la ligne budgetaire


// export function modifierLigneBudgetaire({commit}, element_modifie) {
//   asyncLoading( axios.put('/urls/'+ element_modifie.id ,{
//     id_unite_administrative:element_modifie.id_unite_administrative,
//     id_texte:element_modifie.id_texte,
//     id_ligne_modifie:element_modifie.id_ligne_modifie,
//     division:element_modifie.division,
//     groupe:element_modifie.groupe,
//     classe_fonctionnelle:element_modifie.classe_fonctionnelle,
//     classe_comptable:element_modifie.classe_comptable,
//     article:element_modifie.article,
//     paragraphe:element_modifie.paragraphe,
//     ligne:element_modifie.ligne,
//     rubrique:element_modifie.rubrique,
//     sous_rubrique:element_modifie.sous_rubrique,
//     dotation_initiale:element_modifie.dotation_initiale,
//     version:element_modifie.version
//  })).then(response => {
//        commit('MODIFIER_LIGNE_BUDGETAIRE', response.data)
       

//        this.$app.$notify({
//          title: 'success ',
//          text: 'Modification effectué !',
//          type:"success"
//        })
//    }).catch(error => console.log(error))
// }
// supprimer la ligne budgetaire
// export function supprimerLigneBudgetaire({commit}, id) {
//  this.$app.$dialog
//  .confirm("Voulez vouz vraiment supprimer ?.")
//  .then(dialog => {
//     commit('SUPPRIMER_LIGNE_BUDGETAIRE', id)
 
//      axios.delete('/urls/' + id).then(() => dialog.close() )   
//  })

// }



// action pour  la liste de dossier de candidat

export  function  getDossierCandidat({commit}) {
  queue.push(() => axios.get('/dossier_candidats').then((response) => {
    commit('GET_DOSSIER_CANDIDAT', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter la liste de dosseier candidat

export function ajouterDossierCandidat({commit}, elementAjout){
  asyncLoading(axios.post('/dossier_candidats',elementAjout)).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_DOSSIER_CANDIDAT', response.data)

          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier la liste de dossier de candidat


export function modifierDossierCandidat({commit}, element_modifie) {
  asyncLoading( axios.put('/dossier_candidats',element_modifie)).then(response => {
       commit('MODIFIER_DOSSIER_CANDIDAT', response.data)
       

       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer la liste de dossier de candidat

export function supprimerDossierCandidat({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('SUPPRIMER_DOSSIER_CANDIDAT', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/dossier_candidats/' + id).then(() => dialog.close() )
 })

}



// action pour offre technique


// action pour  la liste de dossier de candidat

export  function  getOffreTechnique({commit}) {
    queue.push(() => axios.get('/offre_techniques').then((response) => {
        commit('GET_ALL_OFFRE_TECHNIQUE', response.data)

    }).catch(error => console.log(error)))
}

// action pour ajouter la liste de dosseier candidat

export function ajouterOffreTechnique({commit}, elementAjout){
    asyncLoading(axios.post('/offre_techniques',elementAjout)).then(response =>{
        if(response.status == 201){
            commit('AJOUTER_OFFRE_TECHNIQUE', response.data)

            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué !',
                type:"success"
            })
        }

    }).catch(error => console.log(error))
}

// action pour modifier la liste de dossier de candidat


export function modifierOffreTechnique({commit}, element_modifie) {
    asyncLoading( axios.put('/offre_techniques',element_modifie)).then(response => {
        commit('MODIFIER_OFFRE_TECHNIQUE', response.data)


        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué !',
            type:"success"
        })
    }).catch(error => console.log(error))
}
// supprimer la liste de dossier de candidat

export function supprimerOffreTechnique({commit}, id) {
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('DELETE_OFFRE_TECHNIQUE', id)
            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/offre_techniques/' + id).then(() => dialog.close() )
        })

}


// action pour offre finanicier



// action pour  la liste de dossier de candidat

export  function  getOffreFinancier({commit}) {
    queue.push(() => axios.get('/offre_financieres').then((response) => {
        commit('GET_ALL_OFFRE_FINANCIER', response.data)

    }).catch(error => console.log(error)))
}

// action pour ajouter la liste de dosseier candidat

export function ajouterOffreFinancier({commit}, elementAjout){
    asyncLoading(axios.post('/offre_financieres',elementAjout)).then(response =>{
        if(response.status == 201){
            commit('AJOUTER_OFFRE_FINANCIER', response.data)

            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué !',
                type:"success"
            })
        }

    }).catch(error => console.log(error))
}

// action pour modifier la liste de dossier de candidat


export function modifierOffreFinancier({commit}, element_modifie) {
    asyncLoading( axios.put('/offre_financieres',element_modifie)).then(response => {
        commit('MODIFIER_OFFRE_FINANCIER', response.data)


        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué !',
            type:"success"
        })
    }).catch(error => console.log(error))
}
// supprimer la liste de dossier de candidat

export function supprimerOffreFinancier({commit}, id) {
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('DELETE_OFFRE_FINANCIER', id)
            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/offre_financieres/' + id).then(() => dialog.close() )
        })

}



// action pour obtenir les données de livrable

// export  function  getLivrable({commit}) {
//   queue.push(() => axios.get('/url').then((response) => {
//     commit('GET_ALL_LIVRABLE', response.data)
    
// }).catch(error => console.log(error)))
// }

// action pour ajouter la donnée du livrable

// export function ajouterLivrable({commit}, elementAjout){
//   asyncLoading(axios.post('/urls',{
//     id_zone_geographique:elementAjout.id_zone_geographique,
//     libelle_livrable:elementAjout.libelle_livrable,
//     type_livrable:elementAjout.type_livrable,
//     date_livraison:elementAjout.date_livraison,
//     imputation_budgetaire:elementAjout.imputation_budgetaire,
//     district:elementAjout.district,
//     departement:elementAjout.departement,
//     localite:elementAjout.localite,
//     commune:elementAjout.commune,
//     village:elementAjout.village,
//     sous_prefecture:elementAjout.sous_prefecture,
//     beneficiaire:elementAjout.beneficiaire,
//     quantite:elementAjout.quantite,
//     montant:elementAjout.montant
    
// })).then(response =>{
//       if(response.status == 201){
//           commit('AJOUTER_LIVRABLE', response.data)

//           this.$app.$notify({
//             title: 'success ',
//             text: 'Enregistrement effectué !',
//             type:"success"
//           })
//       }

//   }).catch(error => console.log(error))
// }

// action pour modifier le livrable


// export function modifierLivrable({commit}, element_modifie) {
//   asyncLoading( axios.put('/urls/'+ element_modifie.id ,{
//     id_zone_geographique:element_modifie.id_zone_geographique,
//     libelle_livrable:element_modifie.libelle_livrable,
//     type_livrable:element_modifie.type_livrable,
//     date_livraison:element_modifie.date_livraison,
//     imputation_budgetaire:element_modifie.imputation_budgetaire,
//     district:element_modifie.district,
//     departement:element_modifie.departement,
//     localite:element_modifie.localite,
//     commune:element_modifie.commune,
//     village:element_modifie.village,
//     sous_prefecture:element_modifie.sous_prefecture,
//     beneficiaire:element_modifie.beneficiaire,
//     quantite:element_modifie.quantite,
//     montant:element_modifie.montant
    
    
//  })).then(response => {
//        commit('MODIFIER_LIVRABLE', response.data)
       

//        this.$app.$notify({
//          title: 'success ',
//          text: 'Modification effectué !',
//          type:"success"
//        })
//    }).catch(error => console.log(error))
// }
// supprimer le livrable

// export function supprimerLivrable({commit}, id) {
//  this.$app.$dialog
//  .confirm("Voulez vouz vraiment supprimer ?.")
//  .then(dialog => {
//     commit('SUPPRIMER_LIVRABLE', id)
 
//      axios.delete('/urls/' + id).then(() => dialog.close() )   
//  })

// }



// action pour obtenir les données de modifier le dossier du candidat

export  function  getAutreTextJuridique({commit}) {
  queue.push(() => axios.get('/autre_textes_juridiques').then((response) => {
    commit('GET_AUTRE_TEXT_JURIDIQUE', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter la modification du dossier du candidat

export function ajouterAutreTextJuridique({commit}, formData){
  asyncLoading(axios.post('/autre_textes_juridiques',formData)).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_AUTRE_TEXT_JURIDIQUE', response.data)

          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }
      
  }).catch(error => console.log(error))
}

// action pour modifier la signature


export function modifierAutreTextJuridique({commit}, element_modifie) {
  asyncLoading( axios.put('/autre_textes_juridiques',element_modifie)).then(response => {
       commit('MODIFIER_AUTRE_TEXT_JURIDIQUE', response.data)
       

       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer la signature

export function supprimerAutreTextjuridique({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('SUPPRIMER_AUTRE_TEXT_JURIDIQUE', id)
   
     axios.delete('/autre_textes_juridiques/' + id).then(() => dialog.close() )   
 })

}


// action pour obtenir les données de zones geographiques

// export  function  getZoneGeographique({commit}) {
//   queue.push(() => axios.get('/url').then((response) => {
//     commit('GET_ALL_ZONE_GEOGRAPHIQUE', response.data)
    
// }).catch(error => console.log(error)))
// }

// action pour ajouter les donnees de zone geographiques

// export function ajouterZoneGeographique({commit}, elementAjout){
//   asyncLoading(axios.post('/urls',{
//     region:elementAjout.region,
//     departement:elementAjout.departement,
//     sous_prefecture:elementAjout.sous_prefecture,
//     commune:elementAjout.commune,
//     ville:elementAjout.ville,
//     village:elementAjout.village,
//     longitude_ville:elementAjout.longitude_ville,
//     latitude_ville:elementAjout.latitude_ville,
//     version:elementAjout.version,
//     id_zone_modif:elementAjout.id_zone_modif
// })).then(response =>{
//       if(response.status == 201){
//           commit('AJOUTER_ZONE_GEOGRAPHIQUE', response.data)

//           this.$app.$notify({
//             title: 'success ',
//             text: 'Enregistrement effectué !',
//             type:"success"
//           })
//       }

//   }).catch(error => console.log(error))
// }

// action pour modifier la zone geographique


// export function modifierZoneGeographique({commit}, element_modifie) {
//   asyncLoading( axios.put('/urls/'+ element_modifie.id ,{
//     region:element_modifie.region,
//     departement:element_modifie.departement,
//     sous_prefecture:element_modifie.sous_prefecture,
//     commune:element_modifie.commune,
//     ville:element_modifie.ville,
//     village:element_modifie.village,
//     longitude_ville:element_modifie.longitude_ville,
//     latitude_ville:element_modifie.latitude_ville,
//     version:element_modifie.version,
//     id_zone_modif:element_modifie.id_zone_modif
    
//  })).then(response => {
//        commit('MODIFIER_ZONE_GEOGRAPHIQUE', response.data)
       

//        this.$app.$notify({
//          title: 'success ',
//          text: 'Modification effectué !',
//          type:"success"
//        })
//    }).catch(error => console.log(error))
// }
// action pour la suppression la zone geographique

// export function supprimerZoneGeographique({commit}, id) {
//  this.$app.$dialog
//  .confirm("Voulez vouz vraiment supprimer ?.")
//  .then(dialog => {
//     commit('SUPPRIMER_ZONE_GEOGRAPHIQUE', id)
  
//      axios.delete('/urls/' + id).then(() => dialog.close() )   
//  })

// }


// action pour obtenir les infos du type text juridique

export function getTypeTextJuridique({commit}) {
  queue.push(() => axios.get('/type_text_juridiques').then((response) => {
    commit('GET_ALL_TYPE_TEXT_JURIDIQUE', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter les infos 

export function ajouterTypeTextJuridique({commit}, elementAjout){
  asyncLoading(axios.post('/type_text_juridiques',{
    
    libelle:elementAjout.libelle
    
})).then(response =>{
      if(response.status == 201){
        commit('AJOUTER_TYPE_TEXT_JURIDIQUE', response.data)

          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier le type text juridique



export function modifierTypeTextJuridique({ commit }, element_modifie) {
  asyncLoading(axios.put('/type_text_juridiques', element_modifie)).then(response => {
    commit('MODIFIER_TYPE_TEXT_JURIDIQUE', response.data)


    this.$app.$notify({
      title: 'success ',
      text: 'Modification effectué !',
      type: "success"
    })
  }).catch(error => console.log(error))
}


// supprimer le type text juridique

export function supprimerTypeTextJuridique({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vous vraiment supprimer ?.")
 .then(dialog => {
   commit('SUPPRIMER_TYPE_TEXT_JURIDIQUE', id)
   // // dialog.loading(false) // stops the proceed button's loader
   axios.delete('/type_text_juridiques/' + id).then(() => dialog.close() )   
 })

}



///



export function getCotation({commit}) {
  queue.push(() => axios.get('/liste_cotation').then((response) => {
    commit('GET_ALL_COTATION', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter les infos 

export function ajouterCotation({commit,dispatch}, elementAjout){
  asyncLoading(axios.post('/add_cotation', elementAjout)).then(response =>{
      if(response.status == 201){
        commit('AJOUTER_COTATION', response.data)
          dispatch('getCotation')
          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
        
      }

  }).catch(error => console.log(error))
}

// action pour modifier le type text juridique



export function modifierCotation({ commit }, element_modifie) {
  asyncLoading(axios.put('/update_cotation/' + element_modifie.id, element_modifie)).then(response => {
    commit('MODIFIER_COTATION', response.data)


    this.$app.$notify({
      title: 'success ',
      text: 'Modification effectué !',
      type: "success"
    })
  }).catch(error => console.log(error))
}


// supprimer le type text juridique

export function supprimerCotation({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vous vraiment supprimer ?.")
 .then(dialog => {
   commit('SUPPRIMER_COTATION', id)
   // // dialog.loading(false) // stops the proceed button's loader
   axios.delete('/suppri_cotation/' + id).then(() => dialog.close() )   
 })

}







export function getTransmission({commit}) {
  queue.push(() => axios.get('/list_transmission').then((response) => {
    commit('GET_ALL_TRANSMISSION', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter les infos 



export function ajouterTransmission({commit,dispatch}, elementAjout,config){
  asyncLoading(axios.post('/add_transmission',elementAjout,config)).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_TRANSMISSION', response.data)
          dispatch('getTransmission')
          this.$app.$notify({
              title: 'success ',
              text: 'Enregistrement effectué !',
              type:"success"
          })
      }

  }).catch(error => console.log(error))
}

export function modifiertransmission({commit,dispatch},element_modifie,config) {
  asyncLoading( axios.post('/update_transmission',element_modifie,config)).then(response => {
      commit('MODIFIER_TRANSMISSION', response.data)
      dispatch('getTransmission')
      this.$app.$notify({
          title: 'success ',
          text: 'Modification effectué !',
          type:"success"
      })
  }).catch(error => console.log(error))
}


export function modifierDecisionAnoDmp({commit,dispatch}, element_modifie,config) {
  asyncLoading( axios.post('/update_transmission',element_modifie,config)).then(response => {
      commit('MODIFIER_TRANSMISSION', response.data)
      dispatch('getTransmission')
        return this.$app.$notify({
          title: 'success ',
          text: 'Avis ANO sur le DAO effectué !',
          type:"success"
      }) 
  }).catch(error => console.log(error))
}



export function modificationAvisBailleurDmp({commit,dispatch}, element_modifie,config) {
  asyncLoading( axios.post('/update_transmission',element_modifie,config)).then(response => {
      commit('MODIFIER_TRANSMISSION', response.data)
      dispatch('getTransmission')
        return this.$app.$notify({
          title: 'success ',
          text: 'Avis bailleur effectué !',
          type:"success"
      }) 
  }).catch(error => console.log(error))
}


// supprimer le type text juridique

export function supprimerTransmission({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vous vraiment supprimer ?.")
 .then(dialog => {
   commit('SUPPRI_TRANSMISSION', id)
   // // dialog.loading(false) // stops the proceed button's loader
   axios.delete('/suppri_transmission/' + id).then(() => dialog.close() )   
 })

}







// action pour l'etat de procedure





// export function getCotation({commit}) {
//   queue.push(() => axios.get('/liste_cotation').then((response) => {
//     commit('GET_ALL_COTATION', response.data)
    
// }).catch(error => console.log(error)))
// }

// action pour ajouter les infos d'etat de procedure

export function ajouterEtatProcedure({commit}, elementAjout){
  asyncLoading(axios.post('/add_etat', elementAjout)).then(response =>{
      if(response.status == 201){
        commit('AJOUTER_ETAT_PROCEDURE', response.data)
          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier etat de procedure



export function modifierEtatProcedure({ commit }, element_modifie) {
  asyncLoading(axios.put('/update_etat/'+ element_modifie.id, element_modifie)).then(response => {
    commit('MODIFIER_ETAT_PROCEDURE', response.data)
    this.$app.$notify({
      title: 'success ',
      text: 'Modification effectué !',
      type: "success"
    })
  }).catch(error => console.log(error))
}


// supprimer le type text juridique

// export function supprimerEtatProcedure({commit}, id) {
//  this.$app.$dialog
//  .confirm("Voulez vous vraiment supprimer ?.")
//  .then(dialog => {
//    commit('SUPPRIMER_ETAT_PROCEDURE', id)
   
//    axios.delete('/suppri_etat/' + id).then(() => dialog.close() )   
//  })

// }






export function getOuverture({commit}) {
  queue.push(() => axios.get('/liste_ouverture').then((response) => {
    commit('GET_ALL_OUVERTURE', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter les infos 

export function ajouterOuverture({commit,dispatch}, elementAjout){
  asyncLoading(axios.post('/add_ouverture', elementAjout)).then(response =>{
      if(response.status == 201){
        commit('AJOUTER_OUVERTURE', response.data)
          dispatch('getOuverture')
          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier le type text juridique



export function modifierOuverture({ commit }, element_modifie) {
  asyncLoading(axios.put('/update_ouverture/' + element_modifie.id, element_modifie)).then(response => {
    commit('MODIFIER_OUVERTURE', response.data)


    this.$app.$notify({
      title: 'success ',
      text: 'Modification effectué !',
      type: "success"
    })
  }).catch(error => console.log(error))
}


// supprimer le type text juridique

export function supprimerOuverture({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vous vraiment supprimer ?.")
 .then(dialog => {
   commit('SUPPRIMER_OUVERTURE', id)
   // // dialog.loading(false) // stops the proceed button's loader
   axios.delete('/suppri_ouverture/' + id).then(() => dialog.close() )   
 })

}





//////////




// export function getOuverturePsc({commit}) {
//   queue.push(() => axios.get('/list_psc').then((response) => {
//     commit('GET_ALL_PSC', response.data)
    
// }).catch(error => console.log(error)))
// }

// action pour ajouter les infos 

// export function ajouterPsc({commit}, elementAjout){
//   asyncLoading(axios.post('/add_psc', elementAjout)).then(response =>{
//       if(response.status == 201){
//         commit('AJOUTER_PSC', response.data)
//           dispatch('getOuverture')
//           this.$app.$notify({
//             title: 'success ',
//             text: 'Enregistrement effectué !',
//             type:"success"
//           })
//       }

//   }).catch(error => console.log(error))
// }

// action pour modifier le type text juridique



// export function modifierPsc({ commit }, element_modifie) {
//   asyncLoading(axios.put('/update_psc/' + element_modifie.id, element_modifie)).then(response => {
//     commit('MODIFIER_PSC', response.data)


//     this.$app.$notify({
//       title: 'success ',
//       text: 'Modification effectué !',
//       type: "success"
//     })
//   }).catch(error => console.log(error))
// }


// supprimer le type text juridique

// export function supprimerPsc({commit}, id) {
//  this.$app.$dialog
//  .confirm("Voulez vous vraiment supprimer ?.")
//  .then(dialog => {
//    commit('SUPPRI_PSC', id)

//    axios.delete('/suppri_psc/' + id).then(() => dialog.close() )   
//  })

// }





////////////////////

export  function  getTypeProcedures({commit}) {
  queue.push(() => axios.get('/type_procedures').then((response) => {
    commit('GET_TYPE_PROCEDURE', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter les infos 

export function ajouterTypeProcedure({ commit, dispatch}, elementAjout){
  asyncLoading(axios.post('/type_procedures',elementAjout)).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_TYPE_PROCEDURE', response.data)
        dispatch('getProcedurePassation')
       
          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier le type text juridique


export function modifierTypeProcedure({ commit, dispatch}, element_modifie) {
  asyncLoading( axios.put('/type_procedures',element_modifie)).then(response => {
       commit('MODIFIER_TYPE_PROCEDURE', response.data)
    dispatch('getProcedurePassation')

       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer le type text juridique

export function supprimerTypeProcedure({ commit, dispatch}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
   commit('SUPPRIMER_TYPE_PROCEDURE', id)
   dispatch('getProcedurePassation')
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/type_procedures/' + id).then(() => dialog.close() )   
 })

}

// action  marche


export  function  getMarche({commit}) {
  queue.push(() => axios.get('/marches').then((response) => {
    commit('GET_MARCHE', response.data)
      commit("LOADING_MARCHE",false)
    
}).catch(error => console.log(error)))
}

// action pour ajouter les infos 

export function ajouterMarche({commit}, elementAjout){
  asyncLoading(axios.post('/marches',elementAjout)).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_MARCHE', response.data)

          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}



export function ajouterSousMarcheLot({commit}, elementAjout){
    asyncLoading(axios.post('/sous_marche',elementAjout)).then(response =>{
        if(response.status == 201){
            commit('AJOUTER_MARCHE', response.data)

            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué !',
                type:"success"
            })
        }

    }).catch(error => console.log(error))
}

// action pour modifier le type text juridique


export function modifierMarche({ commit, dispatch}, element_modifie) {
  asyncLoading( axios.put('/marches',element_modifie)).then(response => {
       commit('MODIFIER_MARCHE', response.data)
    dispatch('getMarche')
    dispatch('getActeEffetFinancier')
    
       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}


export function modifierSousMarche({ commit, dispatch}, element_modifie) {
    asyncLoading( axios.put('/sous_marche',element_modifie)).then(response => {
        commit('MODIFIER_MARCHE', response.data)
        dispatch('getMarche')
        dispatch('getActeEffetFinancier')

        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué !',
            type:"success"
        })
    }).catch(error => console.log(error))
}
//supprimer le type text juridique

export function supprimerMarche({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('SUPPRIMER_MARCHE', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/marches/' + id).then(() => dialog.close() )   
 })

}



// action pour l'appel d'offre




export  function  getTypeMarches({commit}) {
  queue.push(() => axios.get('/type_marches').then((response) => {
    commit('GET_TYPE_MARCHE', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter les infos 

export function ajouterTypeMarche({commit}, elementAjout){
  asyncLoading(axios.post('/type_marches',elementAjout)).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_TYPE_MARCHE', response.data)

          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier le type text juridique


export function modifierTypeMarche({commit}, element_modifie) {
  asyncLoading( axios.put('/type_marches',element_modifie)).then(response => {
       commit('MODIFIER_TYPE_MARCHE', response.data)
       

       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer appel d'offre

export function supprimerTypeMarche({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('SUPPRIMER_TYPE_MARCHE', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/type_marches/' + id).then(() => dialog.close() )   
 })

}


// action pour le mode de passation



export  function  getModePassations({commit}) {
  queue.push(() => axios.get('/mode_passations').then((response) => {
    commit('GET_MODE_PASSATION', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter les infos 

export function ajouterModePassation({commit}, elementAjout){
  asyncLoading(axios.post('/mode_passations',elementAjout)).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_MODE_PASSATION', response.data)

          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier le type text juridique


export function modifierModePassation({commit}, element_modifie) {
  asyncLoading( axios.put('/mode_passations',element_modifie)).then(response => {
       commit('MODIFIER_MODE_PASSATION', response.data)
       

       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer appel d'offre

export function supprimerModePassation({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('SUPPRIMER_MODE_PASSATION', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/mode_passations/' + id).then(() => dialog.close() )   
 })

}



// action appel offre



export  function  getAppelOffre({commit}) {
  queue.push(() => axios.get('/appel_offres').then((response) => {
    commit('GET_APPEL_OFFRE', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter les infos 

export function ajouterAppelOffre({commit}, elementAjout){
  asyncLoading(axios.post('/appel_offres',elementAjout)).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_APPEL_OFFRE', response.data)

          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier le type text juridique


export function modifierAppelOffre({commit}, element_modifie) {
  asyncLoading( axios.put('/appel_offres',element_modifie)).then(response => {
       commit('MODIFIER_APPEL_OFFRE', response.data)
       

       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer appel d'offre

export function supprimerAppelOffre({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('SUPPRIMER_APPEL_OFFRE', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/appel_offres/' + id).then(() => dialog.close() )   
 })

}





export  function  getProcedurePassation({commit}) {
  queue.push(() => axios.get('/procedure_passations').then((response) => {
    commit('GET_PROCEDURE_PASSATION', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter les infos 

export function ajouterProcedurePassation({ commit, dispatch}, elementAjout){
  asyncLoading(axios.post('/procedure_passations',elementAjout)).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_PROCEDURE_PASSATION', response.data)
        dispatch('getTypeProcedures')
        dispatch('getProcedurePassation')
          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier le type text juridique


export function modifierProcedurePassation({ commit, dispatch}, element_modifie) {
  asyncLoading( axios.put('/procedure_passations',element_modifie)).then(response => {
       commit('MODIFIER_PROCEDURE_PASSATION', response.data)
    dispatch('getTypeProcedures')
    dispatch('getProcedurePassation')

       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer le type text juridique

export function supprimerProcedurePassation({ commit, dispatch}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
   commit('SUPPRIMER_PROCEDURE_PASSATION', id)
   dispatch('getTypeProcedures')
   dispatch('getProcedurePassation')
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/procedure_passations/' + id).then(() => dialog.close() )   
 })

}



// action pour obtenir les données de realite du service fait

// export  function  getRealiteServiceFait({commit}) {
//   queue.push(() => axios.get('/url').then((response) => {
//     commit('GET_REALITE_SERVICE_FAIT', response.data)
    
// }).catch(error => console.log(error)))
// }

// action pour ajouter la realite du service fait

// export function ajouterRealiteServiceFait({commit}, elementAjout){
//   asyncLoading(axios.post('/urls',{
//     UA_CONCERNE:elementAjout.UA_CONCERNE,
//     AGENT_DCF:elementAjout.AGENT_DCF,
//     AGENT_UA:elementAjout.AGENT_UA,
//     DATE:elementAjout.DATE,
//     DECISION_AGENT_DCF:elementAjout.DECISION_AGENT_DCF,
//     ID_MOTIF:elementAjout.ID_MOTIF
// })).then(response =>{
//       if(response.status == 201){
//         commit('AJOUTER_REALITE_SERVICE_FAIT', response.data)

//           this.$app.$notify({
//             title: 'success ',
//             text: 'Enregistrement effectué !',
//             type:"success"
//           })
//       }

//   }).catch(error => console.log(error))
// }

// action pour modifier la realite du service fait


// export function modifierRealiteServicefait({commit}, element_modifie) {
//   asyncLoading( axios.put('/urls/'+ element_modifie.id ,{
//     UA_CONCERNE:element_modifie.UA_CONCERNE,
//     AGENT_DCF:element_modifie.AGENT_DCF,
//     AGENT_UA:element_modifie.AGENT_UA,
//     DATE:element_modifie.DATE,
//     DECISION_AGENT_DCF:element_modifie.DECISION_AGENT_DCF,
//     ID_MOTIF:element_modifie.ID_MOTIF
    
//  })).then(response => {
//        commit('MODIFIER_REALITE_SERVICE_FAIT', response.data)
       

//        this.$app.$notify({
//          title: 'success ',
//          text: 'Modification effectué !',
//          type:"success"
//        })
//    }).catch(error => console.log(error))
// }
// supprimer type unite administrative

// export function supprimerRealiteServiceFait({commit}, id) {
//  this.$app.$dialog
//  .confirm("Voulez vouz vraiment supprimer ?.")
//  .then(dialog => {
//     commit('SUPPRIMER_REALITE_SERVICE_FAIT', id)
  
//      axios.delete('/urls/' + id).then(() => dialog.close() )   
//  })

// }


/*Action lettre d'invitation*/

export  function  getLettreInvitation({commit}) {
    queue.push(() => axios.get('/lettre_invitations').then((response) => {
        commit('GET_LETTRE_INVITATION', response.data)

    }).catch(error => console.log(error)))
}

// action pour ajouter les infos

export function ajouterLettreInvitation({commit}, elementAjout,config){
    asyncLoading(axios.post('/lettre_invitations',elementAjout,config)).then(response =>{
        if(response.status == 201){
            commit('AJOUTER_LETTRE_INVITATION', response.data)

            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué !',
                type:"success"
            })
        }

    }).catch(error => console.log(error))
}

// action pour modifier le type text juridique


export function modifierLettreInvitation({commit,dispatch}, element_modifie,config) {
    asyncLoading( axios.post('/update_lettre_invitations',element_modifie,config)).then(response => {
        commit('MODIFIER_LETTRE_INVITATION', response.data)
        dispatch('getLettreInvitation')
        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué !',
            type:"success"
        })
    }).catch(error => console.log(error))
}
// supprimer le type text juridique

export function supprimerLettreInvitation({ commit, dispatch}, id) {
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
          commit('SUPPRIMER_LETTRE_INVITATION', id)
          dispatch('getLettreInvitation')
            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/lettre_invitations/' + id).then(() => dialog.close() )
        })

}
/*Action lettre d'invitation*/



/*Action mandater*/

export  function  getMandater({commit}) {
    queue.push(() => axios.get('/mondates').then((response) => {
        commit('GET_MANDATER', response.data)

    }).catch(error => console.log(error)))
}

// action pour ajouter les infos

export function ajouterMandater({commit}, elementAjout,config){
    asyncLoading(axios.post('/mondates',elementAjout,config)).then(response =>{
        if(response.status == 201){
            commit('AJOUTER_MANDATER', response.data)

            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué !',
                type:"success"
            })
        }

    }).catch(error => console.log(error))
}


// action pour modifier le type text juridique


export function modifierMandater({commit}, element_modifie) {
  asyncLoading(axios.put('/update_mondates',element_modifie)).then(response => {
        commit('MODIFIER_MANDATER', response.data)
        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué !',
            type:"success"
        })
    }).catch(error => console.log(error))
}
// supprimer le type text juridique

export function supprimerMandater({commit}, id) {
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_MANDATER', id)
            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/mondates/' + id).then(() => dialog.close() )
        })

}
/**Fin madate*/












/*Action mandater*/

export  function  getDocument({commit}) {
  queue.push(() => axios.get('/list_document').then((response) => {
      commit('GET_ALL_DOCUMENT', response.data)

  }).catch(error => console.log(error)))
}

// action pour ajouter les infos

export function ajouterDocument({commit}, elementAjout,config){
  asyncLoading(axios.post('/add_document',elementAjout,config)).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_DOCUMENT', response.data)

          this.$app.$notify({
              title: 'success ',
              text: 'Enregistrement effectué !',
              type:"success"
          })
      }

  }).catch(error => console.log(error))
}


// action pour modifier le type text juridique


export function modifierDocument({commit}, element_modifie) {
asyncLoading(axios.post('/update_document',element_modifie)).then(response => {
      commit('MODIFIER_DOCUMENT', response.data)
      this.$app.$notify({
          title: 'success ',
          text: 'Modification effectué !',
          type:"success"
      })
  }).catch(error => console.log(error))
}
// supprimer le type text juridique

export function supprimerDocument({commit}, id) {
  this.$app.$dialog
      .confirm("Voulez vouz vraiment supprimer ?.")
      .then(dialog => {
          commit('SUPPRIMER_DOCUMENT', id)
          // // dialog.loading(false) // stops the proceed button's loader
          axios.delete('/delete_document/' + id).then(() => dialog.close() )
      })

}
/**Fin madate*/





/*Action mandater*/

export  function  getRapportJugement({commit}) {
  queue.push(() => axios.get('/liste_rapport_iugement').then((response) => {
      commit('GET_ALL_RAPPORTJUGEMENT', response.data)

  }).catch(error => console.log(error)))
}

// action pour ajouter les infos

export function ajouterRapportJugement({commit,dispatch}, elementAjout,config){

  asyncLoading(axios.post('/add_rapport_jugement',elementAjout,config)).then(response =>{

      if(response.status == 201){
          commit('AJOUTER_RAPPORT_OUVERTURE', response.data.jugement)
          commit('GET_ALL_SELECTIONNER_CANDIDAT', response.data.annalyse.data)
          //commit('GET_ALL_ANALYSE_DOSSIER', response.data.annalyse.data)
          dispatch('getRapportJugement')
          this.$app.$notify({
              title: 'success ',
              text: 'Enregistrement effectué !',
              type:"success"
          })
      }

  }).catch(error => console.log(error))
}


// action pour modifier le type text juridique


export function modifierRapportJugement({commit}, element_modifie,config) {
asyncLoading(axios.post('/update_rapport_jugement',element_modifie,config)).then(response => {
      commit('MODIFIER_RAPPORT_OUVERTURE', response.data)
      this.$app.$notify({
          title: 'success ',
          text: 'Modification effectué !',
          type:"success"
      })
  }).catch(error => console.log(error))
}
// supprimer le type text juridique

export function supprimerRapportJugement({commit}, id) {
  this.$app.$dialog
      .confirm("Voulez vouz vraiment supprimer ?.")
      .then(dialog => {
          commit('SUPPRIMER_RAPPORT_OUVERTURE', id)
         
          // // dialog.loading(false) // stops the proceed button's loader
          axios.delete('/delete_rapport_jugement/' + id).then(response =>{
            commit('GET_ALL_SELECTIONNER_CANDIDAT', response.data)
            commit('GET_ALL_ANALYSE_DOSSIER', response.data)
            dialog.close()
        }  )

          //axios.delete('/delete_rapport_jugement/' + id).then(() => dialog.close() )
      })

}
/**Fin madate*/
















/*Action demande ANO*/

export  function  getDemandeAno({commit}) {
    queue.push(() => axios.get('/rdemande_ano').then((response) => {
        // console.log(response.data)
        commit('GET_DEMANDE_ANO', response.data)

    }).catch(error => console.log(error)))
}



export function ajouterDemandeAno({commit}, elementAjout,config){
    asyncLoading(axios.post('/rdemande_ano',elementAjout,config)).then(response =>{
        if(response.status == 201){
            commit('AJOUTER_DEMANDE_ANO', response.data)

            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué !',
                type:"success"
            })
        }

    }).catch(error => console.log(error))
}



export function modifierDemandeAno({commit,dispatch}, element_modifie,config) {
    asyncLoading( axios.post('/rdemande_ano_update',element_modifie,config)).then(response => {
        commit('MODIFIER_DEMANDE_ANO', response.data)
        dispatch('getDemandeAno')
        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué !',
            type:"success"
        })
    }).catch(error => console.log(error))
}

// export function modifierAvisAnoCf({commit,dispatch}, element_modifie,config) {
//   asyncLoading( axios.post('/rdemande_ano_update',element_modifie,config)).then(response => {
//       commit('MODIFIER_DEMANDE_ANO', response.data)
//       dispatch('getDemandeAno')
//       this.$app.$notify({
//           title: 'success ',
//           text: 'Decision effectué !',
//           type:"success"
//       })
//   }).catch(error => console.log(error))
// }

export function supprimerDemandeAno({commit}, id) {
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_DEMANDE_ANO', id)
            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/rdemande_ano/' + id).then(() => dialog.close() )
        })

}
/**Fin madate*/



/*Analyse DPM*/

export  function  getAnalyseDMP({commit}) {
    queue.push(() => axios.get('/analyse_dmp').then((response) => {
        commit('GET_ANALYSE_DMP', response.data)

    }).catch(error => console.log(error)))
}



export function ajouterAnalyseDMP({commit}, elementAjout){
    asyncLoading(axios.post('/analyse_dmp',elementAjout)).then(response =>{
        if(response.status == 201){
            /*console.log(response.data.jugement)
            console.log(response.data.analyse);*/
            commit('AJOUTER_ANALYSE_DMP', response.data.analyse)
             commit('MODIFIER_PV', response.data.jugement)
            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué !',
                type:"success"
            })
        }

    }).catch(error => console.log(error))
}



export function modifierAnalyseDMP({commit}, element_modifie) {
    asyncLoading( axios.put('/analyse_dmp',element_modifie)).then(response => {
        commit('MODIFIER_ANALYSE_DMP', response)
        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué !',
            type:"success"
        })
    }).catch(error => console.log(error))
}


export function supprimerAnalyseDMP({commit}, id) {
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_ANALYSE_DMP', id)
            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/analyse_dmp/' + id).then(() => dialog.close() )
        })

}
/*FIN Analyse DPM*/




export function getEngagement({ commit }) {
  queue.push(() => axios.get('/engagement').then((response) => {
    commit('GET_ENGAGEMENT', response.data)

  }).catch(error => console.log(error)))
}



export function ajouterEngagement({ commit, dispatch}, elementAjout) {
  asyncLoading(axios.post('/engagement', elementAjout)).then(response => {
    if (response.status == 201) {
      commit('AJOUTER_ENGAGEMENT', response.data)

      dispatch('getEngagement')
      this.$app.$notify({
        title: 'success ',
        text: 'Enregistrement effectué !',
        type: "success"
      })
    }

  }).catch(error => console.log(error))
}



export function modifierEngagement({ commit,dispatch }, element_modifie) {
  asyncLoading(axios.put('/engagement', element_modifie)).then(response => {
    commit('MODIFIER_ENGAGEMENT', response.data)
    dispatch('getEngagement')
    this.$app.$notify({
      title: 'success ',
       text: 'Modification effectué !',
      type: "success"
    })
  }).catch(error => console.log(error))
}


export function supprimerEngagement({ commit ,dispatch}, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit('SUPPRIMER_ENGAGEMENT', id)
      dispatch('getEngagement')
      dispatch('getEngagement')
      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete('/engagement/' + id).then(() => dialog.close())
    })

}







export function getMandat({ commit }) {
  queue.push(() => axios.get('/mandat').then((response) => {
    commit('GET_MANDAT', response.data)

  }).catch(error => console.log(error)))
}



export function ajouterMandat({ commit, dispatch }, elementAjout) {
  asyncLoading(axios.post('/mandat', elementAjout)).then(response => {
    if (response.status == 201) {
      commit('AJOUTER_MANDAT', response.data)

      dispatch('getMandat')
      this.$app.$notify({
        title: 'success ',
        text: 'Enregistrement effectué !',
        type: "success"
      })
    }

  }).catch(error => console.log(error))
}







export function modifierMandat({commit,dispatch}, element_modifie){
  asyncLoading( axios.put('/mandat/'+ element_modifie.id, element_modifie))
   .then(response => {
    commit('MODIFIER_MANDAT', response.data)
        dispatch('getMandat')
         this.$app.$notify({
           title: 'success ',
           text: 'Modification effectué avec succès!',
           type:"success"
         })
   }).catch(error => console.log(error))
  // console.log(element_modifie)
} 




export function supprimerMandat({ commit, dispatch }, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit('SUPPRIMER_MANDAT', id)
      dispatch('getMandat')
      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete('/mandat/' + id).then(() => dialog.close())
    })

}





// export function modifierEngagement_val({ commit, dispatch }, objet) {
//   // console.log(id_besoinImmo_a_modifier, qte_actu);
//   axios
//     .put("/engagement/" + objet.id, {
//       val: objet.modVal
//       // ,
//       // montant_total = objet.montant_actu
//     })
//     .then(response => {
//       commit("MODIFIER_ENGAGEMENT_VAL", response.data);
//       dispatch("getEngagement");

//     });
// }


export function modifierEngagement_val({ commit, dispatch }, objet) {
  // console.log(id_besoinImmo_a_modifier, qte_actu);
  axios
    .put("/engagement/" + objet.id, {
      val: objet.modVal
      // ,
      // montant_total = objet.montant_actu
    })
    .then(response => {
      commit("MODIFIER_ENGAGEMENT_VAL", response.data);
      dispatch("getEngagement");

    });
}






// export function modifierEngagement_val({ commit, dispatch }, element_modifie) {
//   asyncLoading(axios.put('/engagement', element_modifie)).then(response => {
//     commit('MODIFIER_ENGAGEMENT_VAL', response.data)
//     dispatch('getMandat')
//     this.$app.$notify({
//       title: 'success ',
//       text: 'Modification effectué !',
//       type: "success"
//     })
//   }).catch(error => console.log(error))
// }


// export function modifierEngagement_val({ commit, dispatch }, element_modifie) {
//   asyncLoading(axios.put('/engagement', element_modifie))
//     .then(response => {
//     commit('MODIFIER_ENGAGEMENT', response.data)
//     dispatch('getEngagement')
//     this.$app.$notify({
//       title: 'success ',
//       text: 'Modification effectué !',
//       type: "success"
//     })
//   }).catch(error => console.log(error))
// }


/*Analyse ano DMP bailleur*/

export  function  getAnoDMPBailleur({commit}) {
    queue.push(() => axios.get('/ano_dmp_bailleurs').then((response) => {
        commit('GET_ANO_DMP_BAILLEUR', response.data)

    }).catch(error => console.log(error)))
}

export function ajouterAnoDMPBailleur({commit,dispatch}, elementAjout,config){
    asyncLoading(axios.post('/ano_dmp_bailleurs',elementAjout,config)).then(response =>{
        if(response.status == 201){

            commit('AJOUTER_ANO_DMP_BAILLEUR', response.data.analyse)
           // commit('MODIFIER_PV', response.data.jugement)
            dispatch('getAnoDMPBailleur')
            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué !',
                type:"success"
            })
        }

    }).catch(error => console.log(error))
}

export function modifierAnoDMPBailleur({commit,dispatch}, element_modifie,config) {
    asyncLoading( axios.post('/update_ano_dmp_bailleurs',element_modifie,config)).then(response => {
        commit('MODIFIER_ANO_DMP_BAILLEUR', response)
        dispatch('getAnoDMPBailleur')
        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué !',
            type:"success"
        })
    }).catch(error => console.log(error))
}



export function supprimerAnoDMPBailleur({commit}, id) {
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_ANO_DMP_BAILLEUR', id)
            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/ano_dmp_bailleurs/' + id).then(() => dialog.close() )
        })

}
/*FIN Analyse DPM*/



export function modifierMontantBudgetaire({ commit, dispatch }, objet) {
  // console.log(id_besoinImmo_a_modifier, qte_actu);
  axios.put("/modifierBudgetGeneral/" + objet.id, {
    
    
    Dotation_Initiale : objet.montant_actuel

    // ,
    // montant_total = objet.montant_actu
  })
    .then(response => {
      commit("MODIFIER_MONTANT_BUDGET", response.objet)
      dispatch("getAllBudgetGeneral");
    });
}






// action pour lot && type de prestation

export function getTypeAppel({ commit }) {
  queue.push(() => axios.get('/typeAppel').then((response) => {
    commit('GET_ALL_TYPE_APPEL', response.data)

  }).catch(error => console.log(error)))
}

// action pour ajouter type prestation
export function ajouterTypeAppel({ commit }, formData) {
  asyncLoading(axios.post('/typeAppel', formData)).then(response => {
    if (response.status == 201) {
      commit('AJOUTER_TYPE_APPEL', response.data)

      this.$app.$notify({
        title: 'success ',
        text: 'Enregistrement effectué !',
        type: "success"
      })
    }

  }).catch(error => console.log(error))
}

// action pour modifier type prestation


export function modifierTypeAppel({ commit }, element_modifie) {
  asyncLoading(axios.put('/typeAppel', element_modifie)).then(response => {
    commit('MODIFIER_TYPE_APPEL', response.data)


    this.$app.$notify({
      title: 'success ',
      text: 'Modification effectué !',
      type: "success"
    })
  }).catch(error => console.log(error))
}
// supprimer type facture
export function supprimerTypeAppel({ commit }, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit('SUPPRIMER_TYPE_APPEL', id)
      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete('/typeAppel/' + id).then(() => dialog.close())
    })

}







// action pour lot && type de prestation

export function getTypeCandidat({ commit }) {
  queue.push(() => axios.get('/typeCandidat').then((response) => {
    commit('GET_ALL_TYPE_CANDADIT', response.data)

  }).catch(error => console.log(error)))
}

// action pour ajouter type prestation
export function ajouterTypeCandidat({ commit }, formData) {
  asyncLoading(axios.post('/typeCandidat', formData)).then(response => {
    if (response.status == 201) {
      commit('AJOUTER_TYPE_CANDADIT', response.data)

      this.$app.$notify({
        title: 'success ',
        text: 'Enregistrement effectué !',
        type: "success"
      })
    }

  }).catch(error => console.log(error))
}

// action pour modifier type prestation


export function modifierTypeCandidat({ commit }, element_modifie) {
  asyncLoading(axios.put('/typeCandidat', element_modifie)).then(response => {
    commit('MODIFIER_TYPE_CANDADIT', response.data)


    this.$app.$notify({
      title: 'success ',
      text: 'Modification effectué !',
      type: "success"
    })
  }).catch(error => console.log(error))
}
// supprimer type facture
export function supprimerTypeCandidat({ commit }, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit('SUPPRIMER_TYPE_CANDADIT', id)
      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete('/typeCandidat/' + id).then(() => dialog.close())
    })

}





export function getPays({ commit }) {
  queue.push(() => axios.get('/pays').then((response) => {
    commit('GET_ALL_PAYS', response.data)

  }).catch(error => console.log(error)))
}


// action pour ajouter bailleur
export function ajouterPays({ commit, dispatch }, formData) {
  asyncLoading(axios.post('/pays', formData)).then(response => {
    if (response.status == 201) {
      console.log(response.data)
      commit('AJOUTER_PAYS', response.data)
      dispatch('getVille')
      
      this.$app.$notify({
        title: 'success ',
        text: 'Enregistrement effectué !',
        type: "success"
      })
    }

  }).catch(error => console.log(error))
}

// action pour modifier bailleur


export function modifierPays({ commit, dispatch}, element_modifie) {
  asyncLoading(axios.put('/pays', element_modifie)).then(response => {
    commit('MODIFIER_PAYS', response.data)
    dispatch('getVille')
    this.$app.$notify({
      title: 'success ',
      text: 'Modification effectué !',
      type: "success"
    })
  }).catch(error => console.log(error))
}
// supprimer categorie mision
export function supprimerPays({ commit }, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit('SUPPRIMER_PAYS', id)
      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete('/pays/' + id).then(() => dialog.close())
    })

}


export function getVille({ commit }) {
  queue.push(() => axios.get('/ville').then((response) => {
    commit('GET_ALL_VILLE', response.data)

  }).catch(error => console.log(error)))
}


// action pour ajouter bailleur
export function ajouterVille({ commit, dispatch}, formData) {
  asyncLoading(axios.post('/ville', formData)).then(response => {
    if (response.status == 201) {
      console.log(response.data)
      commit('AJOUTER_VILLE', response.data)
       dispatch('getVille')
      dispatch('getPays')
     
      this.$app.$notify({
        title: 'success ',
        text: 'Enregistrement effectué !',
        type: "success"
      })
    }

  }).catch(error => console.log(error))
}

// action pour modifier bailleur


export function modifierVille({ commit, dispatch}, element_modifie) {
  asyncLoading(axios.put('/ville', element_modifie)).then(response => {
    commit('MODIFIER_VILLE', response.data)
    dispatch('getVille')
    dispatch('getCommune')
    
    this.$app.$notify({
      title: 'success ',
      text: 'Modification effectué !',
      type: "success"
    })
  }).catch(error => console.log(error))
}
// supprimer categorie mision
export function supprimerVille({ commit, dispatch }, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit('SUPPRIMER_VILLE', id)
      dispatch('getVille')
      dispatch('getCommune')
     
      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete('/ville/' + id).then(() => dialog.close())
    })

}


export function getCommune({ commit }) {
  queue.push(() => axios.get('/commune').then((response) => {
    commit('GET_ALL_COMMUNES', response.data)

  }).catch(error => console.log(error)))
}

// action pour ajouter bailleur
export function ajouterCommune({ commit, dispatch}, formData) {
  asyncLoading(axios.post('/commune', formData)).then(response => {
    if (response.status == 201) {
      console.log(response.data)
      commit('AJOUTER_COMMUNES', response.data)
      dispatch('getCommune')
      dispatch('getVille')
      this.$app.$notify({
        title: 'success ',
        text: 'Enregistrement effectué !',
        type: "success"
      })
    }

  }).catch(error => console.log(error))
}

// action pour modifier bailleur


export function modifierCommune({ commit, dispatch }, element_modifie) {
  asyncLoading(axios.put('/commune', element_modifie)).then(response => {
    commit('MODIFIER_COMMUNES', response.data)
    dispatch('getCommune')
    dispatch('getVille')
    this.$app.$notify({
      title: 'success ',
      text: 'Modification effectué !',
      type: "success"
    })
  }).catch(error => console.log(error))
}
// supprimer categorie mision
export function supprimerCommune({ commit, dispatch}, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit('SUPPRIMER_COMMUNES', id)
      dispatch('getCommune')
      dispatch('getVille')
      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete('/commune/' + id).then(() => dialog.close())
    })

}

export  function  getMarcheBailleur({commit}) {
    queue.push(() => axios.get('/marcheBailleurs').then((response) => {
        commit('GET_ALL_BAILLEUR_MARCHE', response.data)

    }).catch(error => console.log(error)))
}

export function ajouterMarcherBailleur({commit}, formData){
    asyncLoading(axios.post('/marcheBailleurs',formData)).then(response =>{
        if(response.status == 201){
            console.log(response.data)
            commit('AJOUTER_BAILLEUR_MARCHE', response.data)

            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué !',
                type:"success"
            })
        }

    }).catch(error => console.log(error))
}


export function modificationMarcheBailleur({commit}, element_modifie) {
    asyncLoading( axios.put('/marcheBailleurs' ,element_modifie)).then(response => {
        commit('MODIFIER_BAILLEUR_MARCHE', response.data)
        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué !',
            type:"success"
        })
    }).catch(error => console.log(error))
}

export function supprimerMarcheBailleur({commit}, id) {
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('DELETE_BAILLEUR_MARCHE', id)
            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/marcheBailleurs/' + id).then(() => dialog.close() )
        })

}


// action pour facture && lots

export function getFacture({ commit }) {
  queue.push(() => axios.get('/factures').then((response) => {
    commit('GET_ALL_FACTURE', response.data)

  }).catch(error => console.log(error)))
}

// action pour ajouter facture
export function ajouterFacture({ commit, dispatch }, elementAjout) {
  asyncLoading(axios.post('/factures', elementAjout)).then(response => {
    if (response.status == 201) {
      commit('AJOUTER_FACTURE', response.data)
      dispatch("getFacture");
      this.$app.$notify({
        title: 'success ',
        text: 'Enregistrement effectué !',
        type: "success"
      })
    }

  }).catch(error => console.log(error))
}

// action pour modifier facture


export function modifierFacture({ commit, dispatch}, element_modifie) {
  asyncLoading(axios.put('/factures', element_modifie)).then(response => {
    commit('MODIFIER_FACTURE', response.data)
    dispatch("getFacture");

    this.$app.$notify({
      title: 'success ',
      text: 'Modification effectué !',
      type: "success"
    })
  }).catch(error => console.log(error))
}
// supprimer facture
export function supprimerFacture({ commit, dispatch}, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit('SUPPRIMER_FACTURE', id)
      dispatch("getFacture");
      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete('/factures/' + id).then(() => dialog.close())
    })

}


export function ajouterChoixProcedure({ commit }, elementAjout) {
  asyncLoading(axios.post('/ChoixProcedure', elementAjout)).then(response => {
    if (response.status == 201) {
      commit('AJOUTER_CHOIX_PROCEDURE', response.data)

      // this.$app.$notify({
      //   title: 'success ',
      //   text: 'Enregistrement effectué !',
      //   type: "success"
      // })
    }

  }).catch(error => console.log(error))
}
export function getChoixProcedure({ commit }) {
  queue.push(() => axios.get('/ChoixProcedure').then((response) => {
    commit('GET_ALL_CHOIX_PROCEDURE', response.data)

  }).catch(error => console.log(error)))
}





export  function  getMembreCojo({commit}) {
    queue.push(() => axios.get('/membre_cojo').then((response) => {
        commit('GET_MEMBRE_COJO', response.data)

    }).catch(error => console.log(error)))
}

export function ajouterMembreCojo({commit, dispatch}, formData){
    asyncLoading(axios.post('/membre_cojo',formData)).then(response =>{
        if(response.status == 201){
            console.log(response.data)
            commit('AJOUTER_MEMBRE_COJO', response.data)
            dispatch('getMembreCojo')
            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué !',
                type:"success"
            })
        }

    }).catch(error => console.log(error))
}


export function modificationMembreCojo({commit}, element_modifie) {
    asyncLoading( axios.put('/membre_cojo' ,element_modifie)).then(response => {
        commit('MODIFIER_MEMBRE_COJO', response.data)
        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué !',
            type:"success"
        })
    }).catch(error => console.log(error))
}

export function supprimerMembreCojo({commit}, id) {
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_MEMBRE_COJO', id)
            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/membre_cojo/' + id).then(() => dialog.close() )
        })

}




export  function  getProceVerbal({commit}) {
    queue.push(() => axios.get('/proceVerbalJugementOffres').then((response) => {
        commit('GET_PV', response.data)

    }).catch(error => console.log(error)))
}



export function ajouterProceVerbal({commit}, objetAjoute,config){
    asyncLoading(axios.post('/proceVerbalJugementOffres',objetAjoute,config)).then(response =>{
        if(response.status == 201){
            console.log(response.data)
            commit('AJOUTER_PV', response.data.jugement)
            commit('GET_ALL_ANALYSE_DOSSIER', response.data.annalyse.data)
            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué !',
                type:"success"
                
            })
            console.log(objetAjoute)
        }

    }).catch(error => console.log(error))
}

export function supprimerProceVerbal({commit}, id) {
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_PV', id)
            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/suppri_proceVerbalJugementOffres/' + id).then(response =>{
                commit('GET_ALL_ANALYSE_DOSSIER', response.data)
                dialog.close()
            }  )
        })

}  
export function modificationProceVerbalOffre({commit}, element_modifie,config) {
    asyncLoading( axios.post('/update_proceVerbalJugementOffres' ,element_modifie,config)).then(response => {
        console.log(response)
        commit('MODIFIER_PV', response)
        //commit('GET_ALL_ANALYSE_DOSSIER', response.data.annalyse.data)
        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué !',
            type:"success"
        })
    }).catch(error => console.log(error))
}


export function modificationProceVerbalOffre2({commit}, element_modifie,config) {
    asyncLoading( axios.post('/update_pv' ,element_modifie,config)).then(response => {
        console.log(response)
        commit('MODIFIER_PV', response)
        //commit('GET_ALL_ANALYSE_DOSSIER', response.data.annalyse.data)
        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué !',
            type:"success"
        })
    }).catch(error => console.log(error))
}




















export function getAvenant({ commit }) {
  queue.push(() => axios.get('/avenant').then((response) => {
    commit('GET_ALL_AVENANT', response.data)

  }).catch(error => console.log(error)))
}

// action pour ajouter bailleur
export function ajouterAvenant({ commit }, formData) {
  asyncLoading(axios.post('/avenant', formData)).then(response => {
    if (response.status == 201) {
      // console.log(response.data)
      commit('AJOUTER_AVENANT', response.data)

      this.$app.$notify({
        title: 'success ',
        text: 'Enregistrement effectué !',
        type: "success"
      })
    }

  }).catch(error => console.log(error))
}

// action pour modifier bailleur


export function modifierAvenant({ commit }, element_modifie) {
  asyncLoading(axios.put('/avenant', element_modifie)).then(response => {
    commit('MODIFIER_AVENANT', response.data)
    this.$app.$notify({
      title: 'success ',
      text: 'Modification effectué !',
      type: "success"
    })
  }).catch(error => console.log(error))
}
// supprimer categorie mision
export function supprimerAvenant({ commit }, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit('DELETE_AVENANT', id)
      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete('/avenant/' + id).then(() => dialog.close())
    })

}





export function getModePaiement({ commit }) {
  queue.push(() => axios.get('/modepaiement').then((response) => {
    commit('GET_ALL_MODE_PAIEMNT', response.data)

  }).catch(error => console.log(error)))
}

// action pour ajouter bailleur
export function ajouterModePaiement({ commit }, formData) {
  asyncLoading(axios.post('/modepaiement', formData)).then(response => {
    if (response.status == 201) {
      // console.log(response.data)
      commit('AJOUTER_MODE_PAIEMNT', response.data)

      this.$app.$notify({
        title: 'success ',
        text: 'Enregistrement effectué !',
        type: "success"
      })
    }

  }).catch(error => console.log(error))
}

// action pour modifier bailleur


export function modifierModePaiement({ commit }, element_modifie) {
  asyncLoading(axios.put('/modepaiement', element_modifie)).then(response => {
    commit('MODIFIER_MODE_PAIEMNT', response.data)
    this.$app.$notify({
      title: 'success ',
      text: 'Modification effectué !',
      type: "success"
    })
  }).catch(error => console.log(error))
}
// supprimer categorie mision
export function supprimerModePaiement({ commit }, id) {
  this.$app.$dialog
    .confirm("Voulez vouz vraiment supprimer ?.")
    .then(dialog => {
      commit('DELETE_MODE_PAIEMNT', id)
      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete('/modepaiement/' + id).then(() => dialog.close())
    })

}



export  function  getPlanPassationMarche({commit}) {
    queue.push(() => axios.get('/plan_passation_marche').then((response) => {
        commit('GET_ALL_PLAN_PASSATION_MARCHE', response.data)

    }).catch(error => console.log(error)))
}

export function ajouterPlanPassationMarche({commit}, objetAjoute,config){
    return  asyncLoading(axios.post('/plan_passation_marche',objetAjoute,config)).then(response =>{
        if(response.status == 201){
            console.log(response.data)
            commit('AJOUTER_PLAN_PASSATION_MARCHE', response.data)
            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué !',
                type:"success"
            })
        }

    }).catch(error => console.log(error))
}

export function supprimerPlanPassationMarche({commit}, id) {
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('DELETE_PLAN_PASSATION_MARCHE', id)
            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/plan_passation_marche/' + id).then(response =>{
                commit('GET_ALL_ANALYSE_DOSSIER', response.data)
                dialog.close()
            }  )
        })

}
/*export function modificationPlanPassationMarche({commit}, element_modifie,config) {
    asyncLoading( axios.put('/plan_passation_marche' ,element_modifie,config)).then(response => {
        console.log(response)
        commit('MODIFIER_PLAN_PASSATION_MARCHE', response)
        //commit('GET_ALL_ANALYSE_DOSSIER', response.data.annalyse.data)
        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué !',
            type:"success"
        })
    }).catch(error => console.log(error))
}*/

export function modifierMarcheBascule({ commit, dispatch }, element_modifie) {
  asyncLoading(axios.put('/marches', element_modifie)).then(response => {
    commit('MODIFIER_MARCHE', response.data)
    dispatch('getMarche')
    dispatch('getActeEffetFinancier')

    this.$app.$notify({
      title: 'success ',
      text: 'Traitement effectué !',
      type: "success"
    })
  }).catch(error => console.log(error))
}











export function getEcheances({ commit }) {
    queue.push(() => axios.get('/echeances').then((response) => {
        commit('GET_ECHEANCES', response.data)

}).catch(error => console.log(error)))
}

// action pour ajouter bailleur
export function ajouterEcheances({ commit }, formData) {
    asyncLoading(axios.post('/echeances', formData)).then(response => {
        if (response.status == 201) {
        // console.log(response.data)
        commit('AJOUTER_ECHEANCES', response.data)

        this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type: "success"
        })
    }

}).catch(error => console.log(error))
}

// action pour modifier bailleur


export function modifierEcheances({ commit }, element_modifie) {
    asyncLoading(axios.put('/echeances', element_modifie)).then(response => {
        commit('MODIFIER_ECHEANCES', response.data)
    this.$app.$notify({
        title: 'success ',
        text: 'Modification effectué !',
        type: "success"
    })
}).catch(error => console.log(error))
}
// supprimer categorie mision
export function supprimerEcheances({ commit }, id) {
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
        commit('DELETE_ECHEANCES', id)
    // // dialog.loading(false) // stops the proceed button's loader
    axios.delete('/echeances/' + id).then(() => dialog.close())
})

}



export function getGestionModules({ commit }) {
  queue.push(() => axios.get('/gestionModule').then((response) => {
      commit('GET_GESTION_MODULE', response.data)

}).catch(error => console.log(error)))
}




export function getImageMarche({ commit }) {
  queue.push(() => axios.get('/liste_image_marche').then((response) => {
      commit('GET_IMAGE_MARCHE', response.data)

}).catch(error => console.log(error)))
}

export function ajouterImageMarche({ commit }, formData) {
  asyncLoading(axios.post('/image_marche', formData)).then(response => {
      if (response.status == 201) {
      // console.log(response.data)
      commit('AJOUTER_IMAGE_MARCHE', response.data)

      this.$app.$notify({
          title: 'success ',
          text: 'Enregistrement effectué !',
          type: "success"
      })
  }

}).catch(error => console.log(error))
}

export function pusherImageMarche({ commit }, formData) {
  commit('PUSHER_IMAGE_MARCHE', formData)
}

export function supprimerImageMarche({ commit }, id) {
  this.$app.$dialog
      .confirm("Voulez vouz vraiment supprimer ?.")
      .then(dialog => {
      commit('DELETE_IMAGE_MARCHE', id)
  // // dialog.loading(false) // stops the proceed button's loader
  axios.delete('/image_marche/' + id).then(() => dialog.close())
})

}


export  function  getTypeOrdrePaiement({commit}) {
  queue.push(() => axios.get('/typeOrdrePaiement').then((response) => {
    
    commit('GET_ALL_TYPE_ORDRE_PAIEMENT', response.data) 
    
}).catch(error => console.log(error)))
}


 // 
 export function ajouterTypeOrdrePaiement({commit},formData){
  asyncLoading( axios.post('/typeOrdrePaiement',formData)).then(response => {
       commit('AJOUTER_TYPE_ORDRE_PAIEMENT', response.data)
       
   }).catch(error => console.log(error))
//  console.log(formData)
}

export function modifierTypeOrdrePaiement({commit}, element_modifie){
  asyncLoading( axios.put('/typeOrdrePaiement/'+ element_modifie.id, element_modifie))
   .then(response => {
        commit('MODIFIER_TYPE_ORDRE_PAIEMENT',response.data)

   }).catch(error => console.log(error))
  // console.log(element_modifie)
} 


export function supprimerTypeOrdrePaiement({commit},id){
  
  this.$app.$dialog
  .confirm("Voulez vouz vraiment supprimer ?.")
  .then(dialog => {
     commit('SUPPRIMER_TYPE_ORDRE_PAIEMENT', id)
    // // dialog.loading(false) // stops the proceed button's loader
      axios.delete('/typeOrdrePaiement/' + id).then(() => dialog.close() )   
  })
}


// action pour le reserve cf

export  function  getReserveCf({commit}) {
  queue.push(() => axios.get('/reserve').then((response) => {
    
    commit('GET_ALL_RESERVE_CF', response.data) 
    
}).catch(error => console.log(error)))
}


 // 
 export function ajouterReserveCf({commit},formData){
  asyncLoading( axios.post('/reserve',formData)).then(response => {
       commit('AJOUTER_RESERVE_CF', response.data)
       
   }).catch(error => console.log(error))
//  console.log(formData)
}

export function modifierReserveCf({commit}, element_modifie){
  asyncLoading( axios.put('/reserve/'+ element_modifie.id, element_modifie))
   .then(response => {
        commit('MODIFIER_RESERVE_CF',response.data)

   }).catch(error => console.log(error))
  // console.log(element_modifie)
} 


export function supprimerReserveCf({commit},id){
  
  this.$app.$dialog
  .confirm("Voulez vouz vraiment supprimer ?.")
  .then(dialog => {
     commit('SUPRIMER_RESERVE_CF', id)
    // // dialog.loading(false) // stops the proceed button's loader
      axios.delete('/reserve/' + id).then(() => dialog.close() )   
  })
}


// action pour le ARNMP

export  function  getArnmp({commit}) {
  queue.push(() => axios.get('/arnmp').then((response) => {
    
    commit('GET_ALL_ARNP', response.data) 
    
}).catch(error => console.log(error)))
}


 // 
 export function ajouterArnmp({commit},formData){
  asyncLoading( axios.post('/arnmp',formData)).then(response => {
       commit('AJOUTER_ARNMP', response.data)
       
   }).catch(error => console.log(error))
//  console.log(formData)
}

export function modifierArnmp({commit}, element_modifie){
  asyncLoading( axios.put('/arnmp/'+ element_modifie.id, element_modifie))
   .then(response => {
        commit('MODIFIER_ARNMP',response.data)

   }).catch(error => console.log(error))
  // console.log(element_modifie)
} 


export function supprimerArnmp({commit},id){
  
  this.$app.$dialog
  .confirm("Voulez vouz vraiment supprimer ?.")
  .then(dialog => {
     commit('SUPPRIMER_ARNMP', id)
    // // dialog.loading(false) // stops the proceed button's loader
      axios.delete('/arnmp/' + id).then(() => dialog.close() )   
  })
}

/// action pour l'organe de decision


export  function  getOrganeDecision({commit}) {
  queue.push(() => axios.get('/organe').then((response) => {
    
    commit('GET_ALL_ORGANE_DECISION', response.data) 
    
}).catch(error => console.log(error)))
}


 // 
 export function ajouterOrganeDecision({commit},formData){
  asyncLoading( axios.post('/organe',formData)).then(response => {
       commit('AJOUTER_ORGANE_DECISION', response.data)
       
   }).catch(error => console.log(error))
//  console.log(formData)
}

export function modifierOrganeDecision({commit}, element_modifie){
  asyncLoading( axios.put('/organe/'+ element_modifie.id, element_modifie))
   .then(response => {
        commit('MODIFIER_ORGANE_DECISION',response.data)

   }).catch(error => console.log(error))
  // console.log(element_modifie)
} 


export function supprimerOrganeDecision({commit},id){
  
  this.$app.$dialog
  .confirm("Voulez vouz vraiment supprimer ?.")
  .then(dialog => {
     commit('SUPPRIMER_ORGANE_DECISION', id)
    // // dialog.loading(false) // stops the proceed button's loader
      axios.delete('/organe/' + id).then(() => dialog.close() )   
  })
}
///

export  function  getNaturePrix({commit}) {
  queue.push(() => axios.get('/nature').then((response) => {
    
    commit('GET_ALL_NATURE_PRIX', response.data) 
    
}).catch(error => console.log(error)))
}


 // 
 export function ajouterNaturePrix({commit},formData){
  asyncLoading( axios.post('/nature',formData)).then(response => {
       commit('AJOUTER_NATURE_PRIX', response.data)
       
   }).catch(error => console.log(error))
//  console.log(formData)
}

export function modifierNaturePrix({commit}, element_modifie){
  asyncLoading( axios.put('/nature/'+ element_modifie.id, element_modifie))
   .then(response => {
        commit('MODIFIER_NATURE_PRIX',response.data)

   }).catch(error => console.log(error))
  // console.log(element_modifie)
} 


export function supprimerNaturePrix({commit},id){
  
  this.$app.$dialog
  .confirm("Voulez vouz vraiment supprimer ?.")
  .then(dialog => {
     commit('SUPPRIMER_NATURE_PRIX', id)
    // // dialog.loading(false) // stops the proceed button's loader
      axios.delete('/nature/' + id).then(() => dialog.close() )   
  })
}


export  function  getMotifPassation({commit}) {
  queue.push(() => axios.get('/motif_passation').then((response) => {
    
    commit('GET_ALL_MOTIF_PASSATION', response.data) 
    
}).catch(error => console.log(error)))
}


 // 
 export function ajouterMotifPassation({commit},formData){
  asyncLoading( axios.post('/motif_passation',formData)).then(response => {
       commit('AJOUTER_MOTIF_PASSATION', response.data)
       
   }).catch(error => console.log(error))
//  console.log(formData)
}

export function modifierMotifPassation({commit}, element_modifie){
  asyncLoading( axios.put('/motif_passation/'+ element_modifie.id, element_modifie))
   .then(response => {
        commit('MODIFIER_MOTIF_PASSATION',response.data)

   }).catch(error => console.log(error))
  // console.log(element_modifie)
} 


export function supprimerMotifPassation({commit},id){
  this.$app.$dialog
  .confirm("Voulez vouz vraiment supprimer ?.")
  .then(dialog => {
     commit('SUPPRIMER_MOTIF_PASSATION', id)
      axios.delete('/motif_passation/' + id).then(() => dialog.close() )   
  })
}




export function modifierActeEffet({commit}, element_modifie){
  asyncLoading( axios.put('/acte_finnanciers/'+ element_modifie.id, element_modifie))
   .then(response => {
    commit('MODIFIER_ACTE', response.data)
        // dispatch('getMandat')
         this.$app.$notify({
           title: 'success ',
           text: 'Modification effectué avec succès!',
           type:"success"
         })
   }).catch(error => console.log(error))
  // console.log(element_modifie)
} 
/**
 * Information carte
 */

export function ajouterListeMarcheFiltreCarteInfrastructure({commit},formData){
    commit('GET_MARCHE_FILTRE_CARTE_INFRASTRUCTURE', formData)
}

export function ajouterInfoFiltreCarteInfrastructure({commit},formData){
    commit('GET_INFORMATION_FILTRE_CARTE', formData)
}

export function supprmieMarcheFiltreCarteInfrastructure({commit},formData){
    commit('GET_MARCHE_FILTRE_CARTE_INFRASTRUCTURE',formData)
}

export function supprmiInfoFiltreCarteInfrastructure({commit},formData){
    commit('GET_INFORMATION_FILTRE_CARTE',formData)
}


/**
 *
 export const GET_TABLEAU_BORD_FILTRE = (state, objet) =>{
    state.tableauBordFilter = objet
}

 export const GET_INFO_TABLEAU_BORD= (state, objet) =>{
    state.infoFiltreTableauBord = objet
}
 */

export function ajouterTableauBordFiltre({commit},formData){
    commit('GET_TABLEAU_BORD_FILTRE', formData)
}

export function ajouterInfoTableauBordFiltre({commit},formData){
    commit('GET_INFO_TABLEAU_BORD', formData)
}


/**
 * Structure DAO
 */




export  function  getStructureDAO({commit}) {
    queue.push(() => axios.get('/structure_dao').then((response) => {
        commit('GET_STRUCTURE_DAO', response.data)

    }).catch(error => console.log(error)))
}

export function ajouterStructureDAO({commit}, formData){
    asyncLoading(axios.post('/structure_dao',formData)).then(response =>{
        if(response.status == 201){
            commit('AJOUTER_STRUCTURE_DAO', response.data)

            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué !',
                type:"success"
            })
        }

    }).catch(error => console.log(error))
}


export function modifierStructureDAO({commit}, element_modifie) {
    asyncLoading( axios.put('/structure_dao',element_modifie)).then(response => {
        commit('MODIFIER_STRUCTURE_DAO', response.data)


        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué !',
            type:"success"
        })
    }).catch(error => console.log(error))
}


export function supprimerStructureDAO({commit}, id) {
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_STRUCTURE_DAO', id)
            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/structure_dao/' + id).then(() => dialog.close() )
        })

}


/**
 * Comite d'evaluation
 */



export  function  getMembreComiteEvaluation({commit}) {
    queue.push(() => axios.get('/membre_comite_evaluation').then((response) => {
        commit('GET_MEMBRE_COMITE_EVALUATION', response.data)

    }).catch(error => console.log(error)))
}

export function ajouterMembreComiteEvaluation({commit}, formData){
    asyncLoading(axios.post('/membre_comite_evaluation',formData)).then(response =>{
        if(response.status == 201){
            commit('AJOUTER_MEMBRE_COMITE_EVALUATION', response.data)

            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué !',
                type:"success"
            })
        }

    }).catch(error => console.log(error))
}


export function modifierMembreComiteEvaluation({commit}, element_modifie) {
    asyncLoading( axios.put('/membre_comite_evaluation',element_modifie)).then(response => {
        commit('MODIFIER_MEMBRE_COMITE_EVALUATION', response.data)


        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué !',
            type:"success"
        })
    }).catch(error => console.log(error))
}


export function supprimerMembreComiteEvaluation({commit}, id) {
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_MEMBRE_COMITE_EVALUATION', id)
            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/membre_comite_evaluation/' + id).then(() => dialog.close() )
        })

}



export function getTacheMarche({ commit }) {
  queue.push(() => axios.get('/TacheMarche').then((response) => {
    commit('GET_TACHE_MARCHE', response.data)

  }).catch(error => console.log(error)))
}



export function ajouterTacheMarche({ commit, dispatch }, elementAjout) {
  asyncLoading(axios.post('/TacheMarche', elementAjout)).then(response => {
    if (response.status == 201) {
      commit('AJOUTER_TACHE_MARCHE', response.data)

      dispatch('getTacheMarche')
      this.$app.$notify({
        title: 'success ',
        text: 'Enregistrement effectué !',
        type: "success"
      })
    }

  }).catch(error => console.log(error))
}







export function modifierTacheMarche({commit,dispatch}, element_modifie){
  asyncLoading( axios.put('/TacheMarche/'+ element_modifie.id, element_modifie))
   .then(response => {
    commit('MODIFIER_TACHE_MARCHE', response.data)
        dispatch('getTacheMarche')
         this.$app.$notify({
           title: 'success ',
           text: 'Modification effectué avec succès!',
           type:"success"
         })
   }).catch(error => console.log(error))
  // console.log(element_modifie)
} 




export function supprimerTacheMarche({ commit, dispatch }, id) {
  this.$app.$dialog
    .confirm("Voulez vous vraiment supprimer ?.")
    .then(dialog => {
      commit('SUPPRIMER_TACHE_MARCHE', id)
      dispatch('getTacheMarche')
      // // dialog.loading(false) // stops the proceed button's loader
      axios.delete('/TacheMarche/' + id).then(() => dialog.close())
    })

}







export function getEntrepriseSousTraitance({ commit }) {
    queue.push(() => axios.get('/sous_traitance').then((response) => {
        commit('GET_ENTREPRISE_SOUS_TRAITANCE', response.data)

    }).catch(error => console.log(error)))
}



export function ajouterEntrepriseSousTraitance({ commit }, elementAjout) {
    asyncLoading(axios.post('/sous_traitance', elementAjout)).then(response => {
        if (response.status == 201) {
            commit('AJOUTER_ENTREPRISE_SOUS_TRAITANCE', response.data)

            //dispatch('getTacheMarche')
            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué !',
                type: "success"
            })
        }

    }).catch(error => console.log(error))
}







export function modifierEntrepriseSousTraitance({commit}, element_modifie){
    asyncLoading( axios.put('/sous_traitance/'+ element_modifie.id, element_modifie))
        .then(response => {
            commit('MODIFIER_ENTREPRISE_SOUS_TRAITANCE', response.data)
           // dispatch('getTacheMarche')
            this.$app.$notify({
                title: 'success ',
                text: 'Modification effectué avec succès!',
                type:"success"
            })
        }).catch(error => console.log(error))
    // console.log(element_modifie)
}




export function supprimerEntrepriseSousTraitance({ commit }, id) {
    this.$app.$dialog
        .confirm("Voulez vous vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_ENTREPRISE_SOUS_TRAITANCE', id)
          //  dispatch('getTacheMarche')
            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/sous_traitance/' + id).then(() => dialog.close())
        })

}


/***
 * Programmation Marche Plurie annuel
 */





export  function  getProgrammationMarchePlurieAnnuel({commit}) {
    queue.push(() => axios.get('/programmation_marche_plurie_annuel').then((response) => {
        commit('GET_MARCHE_PLURIE_ANNUEL', response.data)

    }).catch(error => console.log(error)))
}

// action
export function ajouterProgrammationMarchePlurieAnnuel({commit}, formData){
    asyncLoading(axios.post('/programmation_marche_plurie_annuel',formData)).then(response =>{
        if(response.status == 201){
            console.log(response.data)
            commit('AJOUTER_MARCHE_PLURIE_ANNUEL', response.data)

            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué !',
                type:"success"
            })
        }

    }).catch(error => console.log(error))
}

// action


export function modifierProgrammationMarchePlurieAnnuel({commit}, element_modifie) {
    asyncLoading( axios.put('/programmation_marche_plurie_annuel/'+ element_modifie.id, element_modifie)).then(response => {
        commit('MODIFIER_MARCHE_PLURIE_ANNUEL', response.data)
        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué !',
            type:"success"
        })
    }).catch(error => console.log(error))
}
// supprimer categorie mision
export function supprimerProgrammationMarchePlurieAnnuel({commit}, id) {
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_MARCHE_PLURIE_ANNUEL', id)
            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/programmation_marche_plurie_annuel/' + id).then(() => dialog.close() )
        })

}
