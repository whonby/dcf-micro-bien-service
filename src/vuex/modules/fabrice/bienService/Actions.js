import axios from '../../fabrice/bienService/urls/api'
import { asyncLoading } from 'vuejs-loading-plugin'

var housecall= require('housecall')
var queue = housecall({concurrency: 2, cooldown: 1000})

// action for print all to p^restation

export  function  getPrestation({commit}) {
    queue.push(() => axios.get('/url').then((response) => {
      commit('GET_ALL_PRESTATION', response.data)
      
  }).catch(error => console.log(error)))
  }

  // action pour ajouter prestation
  export function ajouterPrestation({commit}, elementAjout){
    asyncLoading(axios.post('/urls',{
        id_type_prestation:elementAjout.id_type_prestation,
      libelle:elementAjout.libelle,
      date_debut:elementAjout.date_debut,
      date_fin:elementAjout.date_fin,
      objet_prestation:elementAjout.objet_prestation
  })).then(response =>{
        if(response.status == 201){
            commit('AJOUTER_PRESTATION', response.data)

            this.$app.$notify({
              title: 'success ',
              text: 'Enregistrement effectué !',
              type:"success"
            })
        }


    }).catch(error => console.log(error))

}

// action pour modifier prestation


 export function modifierPrestation({commit}, element_modifie) {
    asyncLoading( axios.put('/urls/'+ element_modifie.id ,{
        id_type_prestation:element_modifie.id_type_prestation,
        libelle:element_modifie.libelle,
        date_debut:element_modifie.date_debut,
        date_fin:element_modifie.date_fin,
        objet_prestation:element_modifie.objet_prestation

   })).then(response => {
         commit('MODIFIER_PRESTATION', response.data)

         this.$app.$notify({
           title: 'success ',
           text: 'Modification effectué !',
           type:"success"
         })
     }).catch(error => console.log(error))
 }
  // supprimer categorie mision
export function supprimerPrestation({commit}, id) {
   this.$app.$dialog
   .confirm("Voulez vouz vraiment supprimer ?.")
   .then(dialog => {
      commit('DELETE_PRESTATION', id)
     // // dialog.loading(false) // stops the proceed button's loader
       axios.delete('/urls/' + id).then(() => dialog.close() )   
   })
 
}



export  function  getActeDepense({commit}) {
    queue.push(() => axios.get('/url').then((response) => {
      commit('GET_ALL_ACTE_DEPENSE', response.data)
      
  }).catch(error => console.log(error)))
  }

  // action pour ajouter acte depense
  export function ajouterActeDepense({commit}, elementAjout){
    asyncLoading(axios.post('/urls',{
    
    matricule:elementAjout.matricule,
    id_type_acte_depense:elementAjout.id_type_acte_depense,
    montant:elementAjout.montant,
    dotation_budgetaire:elementAjout.dotation_budgetaire,
    engagement_anterieur:elementAjout.engagement_anterieur,
    engagement_actuel:elementAjout.engagement_actuel,
    engagement_cumule:elementAjout.engagement_cumule,
    disponible_budgetaire:elementAjout.disponible_budgetaire,
    objet_depense:elementAjout.objet_depense,
    ligne_budgetaire:elementAjout.ligne_budgetaire,
    Type_de_procedure:elementAjout.Type_de_procedure

       
  })).then(response =>{
        if(response.status == 201){
            commit('AJOUTER_ACTE_DEPENSE', response.data)

            this.$app.$notify({
              title: 'success ',
              text: 'Enregistrement effectué !',
              type:"success"
            })
        }

    }).catch(error => console.log(error))
}

// action pour modifier acte depense


 export function modifierActeDepense({commit}, element_modifie) {
    asyncLoading( axios.put('/urls/'+ element_modifie.id ,{
   
      matricule:element_modifie.matricule,
      id_type_acte_depense:element_modifie.id_type_acte_depense,
      montant:element_modifie.montant,
      dotation_budgetaire:element_modifie.dotation_budgetaire,
      engagement_anterieur:element_modifie.engagement_anterieur,
      engagement_actuel:element_modifie.engagement_actuel,
      engagement_cumule:element_modifie.engagement_cumule,
      disponible_budgetaire:element_modifie.disponible_budgetaire,
      objet_depense:element_modifie.objet_depense,
      ligne_budgetaire:element_modifie.ligne_budgetaire,
      Type_de_procedure:element_modifie.Type_de_procedure

   })).then(response => {
         commit('MODIFIER_ACTE_DEPENSE', response.data)
         

         this.$app.$notify({
           title: 'success ',
           text: 'Modification effectué !',
           type:"success"
         })
     }).catch(error => console.log(error))
 }
  // action pour la suppression d'acte de depense
export function supprimerActeDepense({commit}, id) {
   this.$app.$dialog
   .confirm("Voulez vouz vraiment supprimer ?.")
   .then(dialog => {
      commit('SUPPRIMER_ACTE_DEPENSE', id)
     // // dialog.loading(false) // stops the proceed button's loader
       axios.delete('/urls/' + id).then(() => dialog.close() )   
   })
 
}


export  function  getBailleur({commit}) {
    queue.push(() => axios.get('/bailleurs').then((response) => {
      commit('GET_ALL_BAILLEUR', response.data.data)
      
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


// actions pour acteur depense


export  function  getActeurDepense({commit}) {
  queue.push(() => axios.get('/url').then((response) => {
    commit('GET_ALL_ACTEUR_DEPENSE', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter acteur depense
export function ajouterActeurDepense({commit}, elementAjout){
  asyncLoading(axios.post('/urls',{
     id_fonction:elementAjout.id_fonction,
     nom:elementAjout.nom,
     prenom:elementAjout.prenom,
     date_naissance:elementAjout.date_naissance,
     grade:elementAjout.grade,
     emploi:elementAjout.emploi,
     situation_matrimoniale:elementAjout.situation_matrimoniale,
     date_premier_service:elementAjout.date_premier_service
})).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_ACTEUR_DEPENSE', response.data)

          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier acteur depense


export function modifierActeurDepense({commit}, element_modifie) {
  asyncLoading( axios.put('/urls/'+ element_modifie.id ,{
    id_fonction:element_modifie.id_fonction,
    nom:element_modifie.nom,
    prenom:element_modifie.prenom,
    date_naissance:element_modifie.date_naissance,
    grade:element_modifie.grade,
    emploi:element_modifie.emploi,
    situation_matrimoniale:element_modifie.situation_matrimoniale,
    date_premier_service:element_modifie.date_premier_service
      

 })).then(response => {
       commit('MODIFIER_ACTEUR_DEPENSE', response.data)

       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer categorie mision
export function supprimerActeurDepense({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('SUPPRIMER_ACTEUR_DEPENSE', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/urls/' + id).then(() => dialog.close() )   
 })

}




export  function getTypeActeDepense({commit}) {
  queue.push(() => axios.get('/type_acte_depenses').then((response) => {
   // console.log(response.data.data)
    commit('GET_ALL_TYPE_ACTE_DEPENSE', response.data.data)
    
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
    commit('GET_TYPE_FACTURE', response.data.data)
    
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
    commit('GET_ALL_TYPE_PRESTATION', response.data.data)
    
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



// action pour banque && compte

export  function  getBanque({commit}) {
  queue.push(() => axios.get('/url').then((response) => {
    commit('GET_ALL_BANQUE', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter banque
export function ajouterBanque({commit}, elementAjout){
  asyncLoading(axios.post('/urls',{
    numero_banque:elementAjout.numero_banque,
    libelle_banque:elementAjout.libelle_banque,
    numero_telephone:elementAjout.numero_telephone,
    situation_geographique_banque:elementAjout.situation_geographique_banque
    
})).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_BANQUE', response.data)

          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier banque


export function modifierBanque({commit}, element_modifie) {
  asyncLoading( axios.put('/urls/'+ element_modifie.id ,{
    numero_banque:element_modifie.numero_banque,
    libelle_banque:element_modifie.libelle_banque,
    numero_telephone:element_modifie.numero_telephone,
    situation_geographique_banque:element_modifie.situation_geographique_banque
    
 })).then(response => {
       commit('MODIFIER_BANQUE', response.data)
       

       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer banque

export function supprimerBanque({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('SUPPRIMER_BANQUE', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/urls/' + id).then(() => dialog.close() )   
 })

}



// action pour code fonction && type de prestation

export  function  getCodeFonction({commit}) {
  queue.push(() => axios.get('/url').then((response) => {
    commit('GET_CODE_FONCTION', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter code fonction 
export function ajouterCodeFonction({commit}, elementAjout){
  asyncLoading(axios.post('/urls',{
    numero_code_fonction:elementAjout.numero_code_fonction,
    entite_concernee:elementAjout.entite_concernee,
    debut_validite:elementAjout.debut_validite,
    fin_validite:elementAjout.fin_validite
})).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_CODE_FONCTION', response.data)

          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier code fonction


export function modifierCodeFonction({commit}, element_modifie) {
  asyncLoading( axios.put('/urls/'+ element_modifie.id ,{
    numero_code_fonction:element_modifie.numero_code_fonction,
    entite_concernee:element_modifie.entite_concernee,
    debut_validite:element_modifie.debut_validite,
    fin_validite:element_modifie.fin_validite
    
 })).then(response => {
       commit('MODIFIER_CODE_FONCTION', response.data)
       

       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer code fonction
export function supprimerCodeFonction({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('SUPPRIMER_CODE_FONCTION', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/urls/' + id).then(() => dialog.close() )   
 })

}



// action pour  compte

export  function  getCompte({commit}) {
  queue.push(() => axios.get('/url').then((response) => {
    commit('GET_ALL_COMPTE', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter compte
export function ajouterCompte({commit}, elementAjout){
  asyncLoading(axios.post('/urls',{
    numero_compte:elementAjout.numero_compte,
    id_fournisseur:elementAjout.id_fournisseur,
    id_banque:elementAjout.id_banque,
    date_ouverture_compte:elementAjout.date_ouverture_compte,
    signataire_compte:elementAjout.signataire_compte,
    nature_compte:elementAjout.nature_compte,
    agence:elementAjout.agence,
    numero_agence:elementAjout.numero_agence,
    numero_telephone:elementAjout.numero_telephone

    
})).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_COMPTE', response.data)

          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier compte


export function modifierCompte({commit}, element_modifie) {
  asyncLoading( axios.put('/urls/'+ element_modifie.id ,{
    numero_compte:element_modifie.numero_compte,
    id_fournisseur:element_modifie.id_fournisseur,
    id_banque:element_modifie.id_banque,
    date_ouverture_compte:element_modifie.date_ouverture_compte,
    signataire_compte:element_modifie.signataire_compte,
    nature_compte:element_modifie.nature_compte,
    agence:element_modifie.agence,
    numero_agence:element_modifie.numero_agence,
    numero_telephone:element_modifie.numero_telephone
 })).then(response => {
       commit('MODIFIER_COMPTE', response.data)
       

       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer compte

export function supprimerCompte({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('SUPPRIMER_COMPTE', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/urls/' + id).then(() => dialog.close() )   
 })

}



/////////////// action pour les //////////////


// action pour facture && lots

export  function  getFacture({commit}) {
  queue.push(() => axios.get('/url').then((response) => {
    commit('GET_ALL_FACTURE', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter facture
export function ajouterFacture({commit}, elementAjout){
  asyncLoading(axios.post('/urls',{
    code_acte_depense:elementAjout.code_acte_depense,
    id_type_facture:elementAjout.id_type_facture,
    numero_facture:elementAjout.numero_facture,
    objet_facture:elementAjout.objet_facture,
    ligne_budgetaire:elementAjout.ligne_budgetaire,
    montant_facture:elementAjout.montant_facture,
    prix_unitaire:elementAjout.prix_unitaire,
    prix_propose_ht:elementAjout.prix_propose_ht,
    prix_propose_ttc:elementAjout.prix_propose_ttc
    
})).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_FACTURE', response.data)

          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier facture


export function modifierFacture({commit}, element_modifie) {
  asyncLoading( axios.put('/urls/'+ element_modifie.id ,{
    code_acte_depense:element_modifie.code_acte_depense,
    id_type_facture:element_modifie.id_type_facture,
    numero_facture:element_modifie.numero_facture,
    objet_facture:element_modifie.objet_facture,
    ligne_budgetaire:element_modifie.ligne_budgetaire,
    montant_facture:element_modifie.montant_facture,
    prix_unitaire:element_modifie.prix_unitaire,
    prix_propose_ht:element_modifie.prix_propose_ht,
    prix_propose_ttc:element_modifie.prix_propose_ttc
    
 })).then(response => {
       commit('MODIFIER_FACTURE', response.data)
       

       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer facture
export function supprimerFacture({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('SUPPRIMER_FACTURE', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/urls/' + id).then(() => dialog.close() )   
 })

}



// action pour lot

export  function  getLot({commit}) {
  queue.push(() => axios.get('/url').then((response) => {
    commit('GET_ALL_LOT', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter lot
export function ajouterLot({commit}, elementAjout){
  asyncLoading(axios.post('/urls',{
    code_lot:elementAjout.code_lot,
    numero_lot:elementAjout.numero_lot,
    libelle_lot:elementAjout.libelle_lot,
    montant_lot:elementAjout.montant_lot
    
})).then(response =>{
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
  asyncLoading( axios.put('/urls/'+ element_modifie.id ,{
    numero_lot:element_modifie.numero_lot,
    libelle_lot:element_modifie.libelle_lot,
    montant_lot:element_modifie.montant_lot
    
 })).then(response => {
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
     axios.delete('/urls/' + id).then(() => dialog.close() )   
 })

}



// action pour analyse dossier

export  function  getAnalyseDossier({commit}) {
  queue.push(() => axios.get('/url').then((response) => {
    commit('GET_ALL_ANALYSE_DOSSIER', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter analyse dossier
export function ajouterAnalyseDossier({commit}, elementAjout){
  asyncLoading(axios.post('/urls',{
    id_acte:elementAjout.id_acte,
    id_candidat:elementAjout.id_candidat,
    id_type_analyse:elementAjout.id_type_analyse,
    id_cojo:elementAjout.id_cojo,
    date_analyse:elementAjout.date_analyse,
    rang_analyse:elementAjout.rang_analyse,
    decision:elementAjout.decision
    
})).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_ANALYSE_DOSSIER', response.data)

          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier analyse dossier


export function modifierAnalyseDossier({commit}, element_modifie) {
  asyncLoading( axios.put('/urls/'+ element_modifie.id ,{
    id_acte:element_modifie.id_acte,
    id_candidat:element_modifie.id_candidat,
    id_type_analyse:element_modifie.id_type_analyse,
    id_cojo:element_modifie.id_cojo,
    date_analyse:element_modifie.date_analyse,
    rang_analyse:element_modifie.rang_analyse,
    decision:element_modifie.decision
    
 })).then(response => {
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
     axios.delete('/urls/' + id).then(() => dialog.close() )   
 })

}



// action pour cojo

export  function  getCojo({commit}) {
  queue.push(() => axios.get('/url').then((response) => {
    commit('GET_ALL_COJO', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter la cojo

export function ajouterCojo({commit}, elementAjout){
  asyncLoading(axios.post('/urls',{
    id_condition:elementAjout.id_condition,
    controleur_financier:elementAjout.controleur_financier,
    dmp:elementAjout.dmp,
    autorite_contractante:elementAjout.autorite_contractante,
    date_composition:elementAjout.date_composition,
    date_invitation:elementAjout.date_invitation,
    num_dossier_appel_offre:elementAjout.num_dossier_appel_offre,
    nbre_participant:elementAjout.nbre_participant
    
})).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_COJO', response.data)

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
  asyncLoading( axios.put('/urls/'+ element_modifie.id ,{
    id_condition:element_modifie.id_condition,
    controleur_financier:element_modifie.controleur_financier,
    dmp:element_modifie.dmp,
    autorite_contractante:element_modifie.autorite_contractante,
    date_composition:element_modifie.date_composition,
    date_invitation:element_modifie.date_invitation,
    num_dossier_appel_offre:element_modifie.num_dossier_appel_offre,
    nbre_participant:element_modifie.nbre_participant
    
 })).then(response => {
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
     axios.delete('/urls/' + id).then(() => dialog.close() )   
 })

}

///////////////////////////////////////////////////////////



// action pour la condition

export  function  getCondition({commit}) {
  queue.push(() => axios.get('/conditions').then((response) => {
    commit('GET_ALL_CONDITION', response.data.data)
    
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
    commit('GET_TEXTJURIDIQUE', response.data.data)
    
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

export  function  getFonctionOccuppe({commit}) {
  queue.push(() => axios.get('/url').then((response) => {
    commit('GET_ALL_FONCTION_OCCUPPE', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter la fonction occuppee
export function ajouterFonctionOccuppe({commit}, elementAjout){
  asyncLoading(axios.post('/urls',{
    code_fonction:elementAjout.code_fonction,
    libelle_fonction:elementAjout.libelle_fonction,
    date_debut_fonction:elementAjout.date_debut_fonction,
    date_fin_fonction:elementAjout.date_fin_fonction
    
})).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_FONCTION_OCCUPPE', response.data)

          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier la fonction occuppe


export function modifierFonctionOccuppe({commit}, element_modifie) {
  asyncLoading( axios.put('/urls/'+ element_modifie.id ,{
    code_fonction:element_modifie.code_fonction,
    libelle_fonction:element_modifie.libelle_fonction,
    date_debut_fonction:element_modifie.date_debut_fonction,
    date_fin_fonction:element_modifie.date_fin_fonction
    
 })).then(response => {
       commit('MODIFIER_FONCTION_OCCUPPE', response.data)
       

       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer la fonction occuppe

export function supprimerFonctionOccuppe({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('SUPPRIMER_FONCTION_OCCUPPE', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/urls/' + id).then(() => dialog.close() )   
 })

}



// action pour la nature de fonction

export  function  getNatureFonction({commit}) {
  queue.push(() => axios.get('/url').then((response) => {
    commit('GET_ALL_NATURE_FONCTION', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter la nature de fonction
export function ajouterNatureFonction({commit}, elementAjout){
  asyncLoading(axios.post('/urls',{
    id_type:elementAjout.id_type,
    libelle_fonction:elementAjout.libelle_fonction,
    type_fonction:elementAjout.type_fonction
    
})).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_NATURE_FONCTION', response.data)

          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier la nature de fonction


export function modifierNatureFonction({commit}, element_modifie) {
  asyncLoading( axios.put('/urls/'+ element_modifie.id ,{
    id_type:element_modifie.id_type,
    libelle_fonction:element_modifie.libelle_fonction,
    type_fonction:element_modifie.type_fonction
    
    
 })).then(response => {
       commit('MODIFIER_NATURE_FONCTION', response.data)
       

       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer la nature de fonction

export function supprimerNatureFonction({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('SUPPRIMER_NATURE_FONCTION', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/urls/' + id).then(() => dialog.close() )   
 })

}



// action pour la signature

export  function  getSignature({commit}) {
  queue.push(() => axios.get('/url').then((response) => {
    commit('GET_ALL_SIGNATURE', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter la signature

export function ajouterSignature({commit}, elementAjout){
  asyncLoading(axios.post('/urls',{
    signature:elementAjout.signature,
    debut_validite:elementAjout.debut_validite,
    fin_validite:elementAjout.fin_validite,
    version:elementAjout.version,
    id_signature_modifie:elementAjout.id_signature_modifie
    
})).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_SIGNATURE', response.data)

          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier la signature


export function modifierSignature({commit}, element_modifie) {
  asyncLoading( axios.put('/urls/'+ element_modifie.id ,{
    signature:element_modifie.signature,
    debut_validite:element_modifie.debut_validite,
    fin_validite:element_modifie.fin_validite,
    version:element_modifie.version,
    id_signature_modifie:element_modifie.id_signature_modifie
    
 })).then(response => {
       commit('MODIFIER_SIGNATURE', response.data)
       

       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer la signature

export function supprimerSignature({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('SUPPRIMER_SIGNATURE', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/urls/' + id).then(() => dialog.close() )   
 })

}


// action pour type acte effet financier

export  function  getTypeActeEffetFinancier({commit}) {
  queue.push(() => axios.get('/type_act_effets').then((response) => {
    commit('GET_ALL_TYPE_ACTE_EFFET_FINANCIER', response.data.data)
    
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
    commit('GET_TYPE_ANALYSE', response.data.data)
    
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




export  function  getTypeUA({commit}) {
  queue.push(() => axios.get('/url').then((response) => {
    commit('GET_TYPE_UA', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter type unite administrative

export function ajouterTypeUA({commit}, elementAjout){
  asyncLoading(axios.post('/urls',{
    libelle:elementAjout.libelle
})).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_TYPE_UA', response.data)

          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier type unite administrative


export function modifierTypeUA({commit}, element_modifie) {
  asyncLoading( axios.put('/urls/'+ element_modifie.id ,{
    libelle:element_modifie.libelle
    
 })).then(response => {
       commit('MODIFIER_TYPE_UA', response.data)
       

       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer type unite administrative

export function supprimerTypeUA({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('SUPPRIMER_TYPE_UA', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/urls/' + id).then(() => dialog.close() )   
 })

}



// action pour unite administrative

export  function  getUniteAdministrative({commit}) {
  queue.push(() => axios.get('/url').then((response) => {
    commit('GET_ALL_UNITE_ADMINISTRATIVE', response.data)
    
}).catch(error => console.log(error)))
}

// action pour unite administrative

export function ajouterUniteAdministrative({commit}, elementAjout){
  asyncLoading(axios.post('/urls',{
    type_service:elementAjout.type_service,
    service_principale:elementAjout.service_principale,
    groupe_de_service:elementAjout.groupe_de_service,
    numero_ordre:elementAjout.numero_ordre
})).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_UNITE_ADMINISTRATIVE', response.data)

          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier type analyse


export function modifierUniteAdministrative({commit}, element_modifie) {
  asyncLoading( axios.put('/urls/'+ element_modifie.id ,{
     type_service:element_modifie.type_service,
    service_principale:element_modifie.service_principale,
    groupe_de_service:element_modifie.groupe_de_service,
    numero_ordre:element_modifie.numero_ordre
 })).then(response => {
       commit('MODIFIER_UNITE_ADMINISTRATIVE', response.data)
       

       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer unite administrative

export function supprimerUniteAdministrative({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('SUPPRIMER_UNITE_ADMINISTRATIVE', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/urls/' + id).then(() => dialog.close() )   
 })

}



// action pour recuper la liste d'unite de zone

export  function  getUniteZone({commit}) {
  queue.push(() => axios.get('/url').then((response) => {
    commit('GET_ALL_UNITE_ZONE', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter l'unite de zone

export function ajouterUniteZone({commit}, elementAjout){
  asyncLoading(axios.post('/urls',{
    id_zone_geographique:elementAjout.id_zone_geographique,
    id_unite_administrative:elementAjout.id_unite_administrative,
    id_unite_zone:elementAjout.id_unite_zone,
    longitude:elementAjout.longitude,
    latitude:elementAjout.latitude,
    telephone_cel:elementAjout.telephone_cel,
    adresse_postale:elementAjout.adresse_postale,
    telephone_fixe:elementAjout.telephone_fixe,
    description_localisation:elementAjout.description_localisation,
    quartier:elementAjout.quartier
    
})).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_UNITE_ZONE', response.data)

          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier l'unite de zone


export function modifierUniteZone({commit}, element_modifie) {
  asyncLoading( axios.put('/urls/'+ element_modifie.id ,{
    id_zone_geographique:element_modifie.id_zone_geographique,
    id_unite_administrative:element_modifie.id_unite_administrative,
    id_unite_zone:element_modifie.id_unite_zone,
    longitude:element_modifie.longitude,
    latitude:element_modifie.latitude,
    telephone_cel:element_modifie.telephone_cel,
    adresse_postale:element_modifie.adresse_postale,
    telephone_fixe:element_modifie.telephone_fixe,
    description_localisation:element_modifie.description_localisation,
    quartier:element_modifie.quartier
 })).then(response => {
       commit('MODIFIER_UNITE_ZONE', response.data)
       

       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// action pour supprimer unite de zone

export function supprimerUniteZone({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('SUPPRIMER_UNITE_ZONE', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/urls/' + id).then(() => dialog.close() )   
 })

}


///////////////////////////////////////////////////////////////////////////////////


// action for ligne budgetaire 

export  function  getLigneBudgetaire({commit}) {
  queue.push(() => axios.get('/url').then((response) => {
    commit('GET_ALL_LIGNE_BUDGETAIRE', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter la ligne budgetaire
export function ajouterLigneBudgetaire({commit}, elementAjout){
  asyncLoading(axios.post('/urls',{
    id_unite_administrative:elementAjout.id_unite_administrative,
    id_texte:elementAjout.id_texte,
    id_ligne_modifie:elementAjout.id_ligne_modifie,
    division:elementAjout.division,
    groupe:elementAjout.groupe,
    classe_fonctionnelle:elementAjout.classe_fonctionnelle,
    classe_comptable:elementAjout.classe_comptable,
    article:elementAjout.article,
    paragraphe:elementAjout.paragraphe,
    ligne:elementAjout.ligne,
    rubrique:elementAjout.rubrique,
    sous_rubrique:elementAjout.sous_rubrique,
    dotation_initiale:elementAjout.dotation_initiale,
    version:elementAjout.version

})).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_LIGNE_BUDGETAIRE', response.data)

          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier la ligne budgetaire


export function modifierLigneBudgetaire({commit}, element_modifie) {
  asyncLoading( axios.put('/urls/'+ element_modifie.id ,{
    id_unite_administrative:element_modifie.id_unite_administrative,
    id_texte:element_modifie.id_texte,
    id_ligne_modifie:element_modifie.id_ligne_modifie,
    division:element_modifie.division,
    groupe:element_modifie.groupe,
    classe_fonctionnelle:element_modifie.classe_fonctionnelle,
    classe_comptable:element_modifie.classe_comptable,
    article:element_modifie.article,
    paragraphe:element_modifie.paragraphe,
    ligne:element_modifie.ligne,
    rubrique:element_modifie.rubrique,
    sous_rubrique:element_modifie.sous_rubrique,
    dotation_initiale:element_modifie.dotation_initiale,
    version:element_modifie.version
 })).then(response => {
       commit('MODIFIER_LIGNE_BUDGETAIRE', response.data)
       

       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer la ligne budgetaire
export function supprimerLigneBudgetaire({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('SUPPRIMER_LIGNE_BUDGETAIRE', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/urls/' + id).then(() => dialog.close() )   
 })

}



// action pour  la liste de dossier de candidat

export  function  getDossierCandidat({commit}) {
  queue.push(() => axios.get('/url').then((response) => {
    commit('GET_DOSSIER_CANDIDAT', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter la liste de dosseier candidat

export function ajouterDossierCandidat({commit}, elementAjout){
  asyncLoading(axios.post('/urls',{
    id_procedure_passation:elementAjout.id_procedure_passation,
    type_cand:elementAjout.type_cand,
    nom_cand:elementAjout.nom_cand,
    prenoms_cand:elementAjout.prenoms_cand,
    date_naiss_cand:elementAjout.date_naiss_cand,
    telephone_cand:elementAjout.telephone_cand,
    adresse_postal:elementAjout.adresse_postal,
    situation_geo:elementAjout.situation_geo,
    email_cand:elementAjout.email_cand,
    accord_group:elementAjout.accord_group,
    cautionnement_prov:elementAjout.cautionnement_prov,
    pouv_habil_signataire:elementAjout.pouv_habil_signataire,
    piece_admin:elementAjout.piece_admin,
    reg_com:elementAjout.reg_com,
    attest_banc:elementAjout.attest_banc,
    formul_propo_tech:elementAjout.formul_propo_tech,
    fiche_rsgnt_cand:elementAjout.fiche_rsgnt_cand,
    fiche_rsgnt_mbre_group:elementAjout.fiche_rsgnt_mbre_group,
    atcdent_marche_non_exe:elementAjout.atcdent_marche_non_exe,
    org_travau_site:elementAjout.org_travau_site,
    meth_real_travau:elementAjout.meth_real_travau,
    prog_mobilisation:elementAjout.prog_mobilisation,
    capacite_financiere:elementAjout.capacite_financiere,
    caa_moyen_ac_entre:elementAjout.caa_moyen_ac_entre,
    capacite_financement:elementAjout.capacite_financement,
    capacite_tech_exp:elementAjout.capacite_tech_exp,
    mt_offre_financiere:elementAjout.mt_offre_financiere
    
})).then(response =>{
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
  asyncLoading( axios.put('/urls/'+ element_modifie.id ,{
    id_procedure_passation:element_modifie.id_procedure_passation,
    type_cand:element_modifie.type_cand,
    nom_cand:element_modifie.nom_cand,
    prenoms_cand:element_modifie.prenoms_cand,
    date_naiss_cand:element_modifie.date_naiss_cand,
    telephone_cand:element_modifie.telephone_cand,
    adresse_postal:element_modifie.adresse_postal,
    situation_geo:element_modifie.situation_geo,
    email_cand:element_modifie.email_cand,
    accord_group:element_modifie.accord_group,
    cautionnement_prov:element_modifie.cautionnement_prov,
    pouv_habil_signataire:element_modifie.pouv_habil_signataire,
    piece_admin:element_modifie.piece_admin,
    reg_com:element_modifie.reg_com,
    attest_banc:element_modifie.attest_banc,
    formul_propo_tech:element_modifie.formul_propo_tech,
    fiche_rsgnt_cand:element_modifie.fiche_rsgnt_cand,
    fiche_rsgnt_mbre_group:element_modifie.fiche_rsgnt_mbre_group,
    atcdent_marche_non_exe:element_modifie.atcdent_marche_non_exe,
    org_travau_site:element_modifie.org_travau_site,
    meth_real_travau:element_modifie.meth_real_travau,
    prog_mobilisation:element_modifie.prog_mobilisation,
    capacite_financiere:element_modifie.capacite_financiere,
    caa_moyen_ac_entre:element_modifie.caa_moyen_ac_entre,
    capacite_financement:element_modifie.capacite_financement,
    capacite_tech_exp:element_modifie.capacite_tech_exp,
    mt_offre_financiere:element_modifie.mt_offre_financiere
    
 })).then(response => {
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
     axios.delete('/urls/' + id).then(() => dialog.close() )   
 })

}



// action pour obtenir les données de livrable

export  function  getLivrable({commit}) {
  queue.push(() => axios.get('/url').then((response) => {
    commit('GET_ALL_LIVRABLE', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter la donnée du livrable
export function ajouterLivrable({commit}, elementAjout){
  asyncLoading(axios.post('/urls',{
    id_zone_geographique:elementAjout.id_zone_geographique,
    libelle_livrable:elementAjout.libelle_livrable,
    type_livrable:elementAjout.type_livrable,
    date_livraison:elementAjout.date_livraison,
    imputation_budgetaire:elementAjout.imputation_budgetaire,
    district:elementAjout.district,
    departement:elementAjout.departement,
    localite:elementAjout.localite,
    commune:elementAjout.commune,
    village:elementAjout.village,
    sous_prefecture:elementAjout.sous_prefecture,
    beneficiaire:elementAjout.beneficiaire,
    quantite:elementAjout.quantite,
    montant:elementAjout.montant
    
})).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_LIVRABLE', response.data)

          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier le livrable


export function modifierLivrable({commit}, element_modifie) {
  asyncLoading( axios.put('/urls/'+ element_modifie.id ,{
    id_zone_geographique:element_modifie.id_zone_geographique,
    libelle_livrable:element_modifie.libelle_livrable,
    type_livrable:element_modifie.type_livrable,
    date_livraison:element_modifie.date_livraison,
    imputation_budgetaire:element_modifie.imputation_budgetaire,
    district:element_modifie.district,
    departement:element_modifie.departement,
    localite:element_modifie.localite,
    commune:element_modifie.commune,
    village:element_modifie.village,
    sous_prefecture:element_modifie.sous_prefecture,
    beneficiaire:element_modifie.beneficiaire,
    quantite:element_modifie.quantite,
    montant:element_modifie.montant
    
    
 })).then(response => {
       commit('MODIFIER_LIVRABLE', response.data)
       

       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer le livrable

export function supprimerLivrable({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('SUPPRIMER_LIVRABLE', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/urls/' + id).then(() => dialog.close() )   
 })

}



// action pour obtenir les données de modifier le dossier du candidat

export  function  getAutreTextJuridique({commit}) {
  queue.push(() => axios.get('/autre_textes_juridiques').then((response) => {
    commit('GET_AUTRE_TEXT_JURIDIQUE', response.data.data)
    
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

export  function  getZoneGeographique({commit}) {
  queue.push(() => axios.get('/url').then((response) => {
    commit('GET_ALL_ZONE_GEOGRAPHIQUE', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter les donnees de zone geographiques

export function ajouterZoneGeographique({commit}, elementAjout){
  asyncLoading(axios.post('/urls',{
    region:elementAjout.region,
    departement:elementAjout.departement,
    sous_prefecture:elementAjout.sous_prefecture,
    commune:elementAjout.commune,
    ville:elementAjout.ville,
    village:elementAjout.village,
    longitude_ville:elementAjout.longitude_ville,
    latitude_ville:elementAjout.latitude_ville,
    version:elementAjout.version,
    id_zone_modif:elementAjout.id_zone_modif
})).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_ZONE_GEOGRAPHIQUE', response.data)

          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier la zone geographique


export function modifierZoneGeographique({commit}, element_modifie) {
  asyncLoading( axios.put('/urls/'+ element_modifie.id ,{
    region:element_modifie.region,
    departement:element_modifie.departement,
    sous_prefecture:element_modifie.sous_prefecture,
    commune:element_modifie.commune,
    ville:element_modifie.ville,
    village:element_modifie.village,
    longitude_ville:element_modifie.longitude_ville,
    latitude_ville:element_modifie.latitude_ville,
    version:element_modifie.version,
    id_zone_modif:element_modifie.id_zone_modif
    
 })).then(response => {
       commit('MODIFIER_ZONE_GEOGRAPHIQUE', response.data)
       

       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// action pour la suppression la zone geographique

export function supprimerZoneGeographique({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('SUPPRIMER_ZONE_GEOGRAPHIQUE', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/urls/' + id).then(() => dialog.close() )   
 })

}


// action pour obtenir les infos du type text juridique

export  function  getTypeTextJurique({commit}) {
  queue.push(() => axios.get('/url').then((response) => {
    commit('GET_ALL_TYPE_TEXT_JURIDIQUE', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter les infos 

export function ajouterTypeTextJuridique({commit}, elementAjout){
  asyncLoading(axios.post('/urls',{
    id_texte:elementAjout.id_texte,
    libelle_type:elementAjout.libelle_type
    
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


export function modifierTypeTextJuridique({commit}, element_modifie) {
  asyncLoading( axios.put('/urls/'+ element_modifie.id ,{
    id_texte:element_modifie.id_texte,
    libelle_type:element_modifie.libelle_type
 })).then(response => {
       commit('MODIFIER_TYPE_TEXT_JURIDIQUE', response.data)
       

       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer le type text juridique

export function supprimerTypeTextJuridique({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('SUPPRIMER_TYPE_TEXT_JURIDIQUE', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/urls/' + id).then(() => dialog.close() )   
 })

}


////////////////////

export  function  getTypeProcedure({commit}) {
  queue.push(() => axios.get('/type_procedures').then((response) => {
    commit('GET_TYPE_PROCEDURE', response.data.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter les infos 

export function ajouterTypeProcedure({commit}, elementAjout){
  asyncLoading(axios.post('/type_procedures',elementAjout)).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_TYPE_PROCEDURE', response.data)

          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier le type text juridique


export function modifierTypeProcedure({commit}, element_modifie) {
  asyncLoading( axios.put('/type_procedures',element_modifie)).then(response => {
       commit('MODIFIER_TYPE_PROCEDURE', response.data)
       

       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer le type text juridique

export function supprimerTypeProcedure({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('SUPPRIMER_TYPE_PROCEDURE', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/type_procedures/' + id).then(() => dialog.close() )   
 })

}

// action type marche


// export  function  getTypeProcedure({commit}) {
//   queue.push(() => axios.get('/type_procedures').then((response) => {
//     commit('GET_TYPE_PROCEDURE', response.data.data)
    
// }).catch(error => console.log(error)))
// }

// action pour ajouter les infos 

// export function ajouterTypeProcedure({commit}, elementAjout){
//   asyncLoading(axios.post('/type_procedures',elementAjout)).then(response =>{
//       if(response.status == 201){
//           commit('AJOUTER_TYPE_PROCEDURE', response.data)

//           this.$app.$notify({
//             title: 'success ',
//             text: 'Enregistrement effectué !',
//             type:"success"
//           })
//       }

//   }).catch(error => console.log(error))
// }

// action pour modifier le type text juridique


// export function modifierTypeProcedure({commit}, element_modifie) {
//   asyncLoading( axios.put('/type_procedures',element_modifie)).then(response => {
//        commit('MODIFIER_TYPE_PROCEDURE', response.data)
       

//        this.$app.$notify({
//          title: 'success ',
//          text: 'Modification effectué !',
//          type:"success"
//        })
//    }).catch(error => console.log(error))
// }
// supprimer le type text juridique

// export function supprimerTypeProcedure({commit}, id) {
//  this.$app.$dialog
//  .confirm("Voulez vouz vraiment supprimer ?.")
//  .then(dialog => {
//     commit('SUPPRIMER_TYPE_PROCEDURE', id)
//    // // dialog.loading(false) // stops the proceed button's loader
//      axios.delete('/type_procedures/' + id).then(() => dialog.close() )   
//  })

// }



// action pour l'appel d'offre




export  function  getTypeMarche({commit}) {
  queue.push(() => axios.get('/type_marches').then((response) => {
    commit('GET_TYPE_MARCHE', response.data.data)
    
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



export  function  getModePassation({commit}) {
  queue.push(() => axios.get('/mode_passations').then((response) => {
    commit('GET_MODE_PASSATION', response.data.data)
    
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






export  function  getProcedurePassation({commit}) {
  queue.push(() => axios.get('/procedure_passations').then((response) => {
    commit('GET_PROCEDURE_PASSATION', response.data.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter les infos 

export function ajouterProcedurePassation({commit}, elementAjout){
  asyncLoading(axios.post('/procedure_passations',elementAjout)).then(response =>{
      if(response.status == 201){
          commit('AJOUTER_PROCEDURE_PASSATION', response.data)

          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier le type text juridique


export function modifierProcedurePassation({commit}, element_modifie) {
  asyncLoading( axios.put('/procedure_passations',element_modifie)).then(response => {
       commit('MODIFIER_PROCEDURE_PASSATION', response.data)
       

       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer le type text juridique

export function supprimerProcedurePassation({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('SUPPRIMER_PROCEDURE_PASSATION', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/procedure_passations/' + id).then(() => dialog.close() )   
 })

}











// action pour obtenir les données de realite du service fait

export  function  getRealiteServiceFait({commit}) {
  queue.push(() => axios.get('/url').then((response) => {
    commit('GET_REALITE_SERVICE_FAIT', response.data)
    
}).catch(error => console.log(error)))
}

// action pour ajouter la realite du service fait

export function ajouterRealiteServiceFait({commit}, elementAjout){
  asyncLoading(axios.post('/urls',{
    UA_CONCERNE:elementAjout.UA_CONCERNE,
    AGENT_DCF:elementAjout.AGENT_DCF,
    AGENT_UA:elementAjout.AGENT_UA,
    DATE:elementAjout.DATE,
    DECISION_AGENT_DCF:elementAjout.DECISION_AGENT_DCF,
    ID_MOTIF:elementAjout.ID_MOTIF
})).then(response =>{
      if(response.status == 201){
        commit('AJOUTER_REALITE_SERVICE_FAIT', response.data)

          this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué !',
            type:"success"
          })
      }

  }).catch(error => console.log(error))
}

// action pour modifier la realite du service fait


export function modifierRealiteServicefait({commit}, element_modifie) {
  asyncLoading( axios.put('/urls/'+ element_modifie.id ,{
    UA_CONCERNE:element_modifie.UA_CONCERNE,
    AGENT_DCF:element_modifie.AGENT_DCF,
    AGENT_UA:element_modifie.AGENT_UA,
    DATE:element_modifie.DATE,
    DECISION_AGENT_DCF:element_modifie.DECISION_AGENT_DCF,
    ID_MOTIF:element_modifie.ID_MOTIF
    
 })).then(response => {
       commit('MODIFIER_REALITE_SERVICE_FAIT', response.data)
       

       this.$app.$notify({
         title: 'success ',
         text: 'Modification effectué !',
         type:"success"
       })
   }).catch(error => console.log(error))
}
// supprimer type unite administrative

export function supprimerRealiteServiceFait({commit}, id) {
 this.$app.$dialog
 .confirm("Voulez vouz vraiment supprimer ?.")
 .then(dialog => {
    commit('SUPPRIMER_REALITE_SERVICE_FAIT', id)
   // // dialog.loading(false) // stops the proceed button's loader
     axios.delete('/urls/' + id).then(() => dialog.close() )   
 })

}



