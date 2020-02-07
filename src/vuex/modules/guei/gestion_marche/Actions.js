import axios from "./url/api"
var housecall = require('housecall');
var queue = housecall({ concurrency: 2, cooldown: 1000 });
import { asyncLoading } from 'vuejs-loading-plugin'
/**
 *Action mode de passation
 */
export async function  getModePassation({commit}) {
    queue.push(() =>  axios.get('/liste_mode_passation').then(response => {
        commit('GET_MODE_PASSATION', response.data)
    }).catch(error => console.log(error)));

}

export  function ajouterModePassation({commit}, objetAjoute){
    this.$app.$loading(true)

    axios.post('/add_mode_passation', objetAjoute ).then(res => {
        if(res.status == 201){
            this.$app.$notify({
                title: 'success',
                text: 'Enregistrement effectuer',
                type:"success"
            });
            commit('AJOUTER_MODE_PASSATION', res.data)
            this.$app.$loading(false)
        }
    }).catch(error =>{
        console.log(error)
        this.$app.$loading(false)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type:"error"
        });
    })
}

export function supprimerModePassation({commit}, id){

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
        this.$app.$notify({
            title: 'Suppression',
            text: 'Suppression effectuer',
            type:"error"
        });
        commit('SUPPRIMER_MODE_PASSATION', id)
        axios.delete('/delete_mode_passation/' + id).then(() => dialog.close() )
    })
}

export function modifierModePassation({commit}, formData){
    this.$app.$loading(true)
    axios.put('/update_mode_passation' ,formData).then(response => {
        this.$app.$notify({
            title: 'success',
            text: 'Modification effectuer',
            type:"success"
        });
        commit('MODIFIER_MODE_PASSATION', response.data)
        this.$app.$loading(false)
    }).catch(error =>{
        console.log(error)
        this.$app.$loading(false)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type:"error"
        });
    })
}

/**
 * Fin mode de passation
 */
/**
 *
Type de marche
 */

export async function  getTypeMarche({commit}) {

    queue.push(() =>  axios.get('/liste_type_marche').then(response => {
        commit('GET_TYPE_MARCHE', response.data)
    }).catch(error => console.log(error)));

}

export  function ajouterTypeMarche({commit}, objetAjoute){
    this.$app.$loading(true)
    axios.post('/add_type_marche', objetAjoute ).then(res => {
        if(res.status == 201){
            this.$app.$notify({
                title: 'success',
                text: 'Enregistrement effectuer',
                type:"success"
            });
            commit('AJOUTER_TYPE_MARCHE', res.data)
            this.$app.$loading(false)
        }
    }).catch(error =>{
        console.log(error)
        this.$app.$loading(true)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type:"error"
        });
    })
}

export function supprimerTypeMarche({commit}, id){
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
        this.$app.$notify({
            title: 'Suppression',
            text: 'Suppression effectuer',
            type:"error"
        });
        commit('SUPPRIMER_TYPE_MARCHE', id)
        axios.delete('/delete_type_marche/' + id).then(() => dialog.close() )
    })
}

export function modifierTypeMarche({commit}, formData){
    this.$app.$loading(true)
    axios.put('/update_type_marche' ,formData).then(response => {
        this.$app.$notify({
            title: 'success',
            text: 'Modification effectuer',
            type:"success"
        });
        commit('MODIFIER_TYPE_MARCHE', response.data)
        this.$app.$loading(false)
    }).catch(error =>{
        console.log(error)
        this.$app.$loading(false)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type:"error"
        });
    })
}
/** Fin type marche
 **/

/**Debut Secteur**/

export async function  getSecteurActivite({commit}) {

    queue.push(() =>  axios.get('/liste_secteur_activite').then(response => {
        commit('GET_SECTEUR_ACTIVITE', response.data)
    }).catch(error => console.log(error)));

}

export  function ajouterSecteurActivite({commit}, objetAjoute){
    this.$app.$loading(true)
    axios.post('/add_secteur_activite', objetAjoute ).then(res => {
        if(res.status == 201){
            this.$app.$notify({
                title: 'success',
                text: 'Enregistrement effectuer',
                type:"success"
            });
            commit('AJOUTER_SECTEUR_ACTIVITE', res.data)
            this.$app.$loading(false)
        }
    }).catch(error =>{
        console.log(error)
        this.$app.$loading(false)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type:"error"
        });
    })
}

export function supprimerSecteurActivite({commit}, id){
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
        this.$app.$notify({
            title: 'Suppression',
            text: 'Suppression effectuer',
            type:"error"
        });
        commit('SUPPRIMER_SECTEUR_ACTIVITE', id)
        axios.delete('/delete_secteur_activite/' + id).then(() => dialog.close() )
    })
}

export function modifierSecteurActivite({commit}, formData){
    this.$app.$loading(true)
    axios.put('/update_secteur_activite' ,formData).then(response => {
        this.$app.$notify({
            title: 'success',
            text: 'Modification effectuer',
            type:"success"
        });
        commit('MODIFIER_SECTEUR_ACTIVITE', response.data)
        this.$app.$loading(false)
    }).catch(error =>{
        console.log(error)
        this.$app.$loading(false)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type:"error"
        });
    })
}
/**Fin secteur**/


// action banque 





// action pour banque && compte

export  function  getBanque({commit}) {
    queue.push(() => axios.get('/banques').then((response) => {
      commit('GET_ALL_BANQUE', response.data)
      
  }).catch(error => console.log(error)))
  }
  
  // action pour ajouter banque
  export function ajouterBanque({commit}, elementAjout){
    asyncLoading(axios.post('/banques',{
        code_banque:elementAjout.code_banque,
      numero_banque:elementAjout.numero_banque,
      libelle:elementAjout.libelle,
      telephone:elementAjout.telephone,
      situation_geographique:elementAjout.situation_geographique
      
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
    asyncLoading( axios.put('/banques',element_modifie)).then(response => {
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
       axios.delete('/banques/' + id).then(() => dialog.close() )   
   })
  
  }
  


// action pour compte


export  function  getCompte({commit}) {
    queue.push(() => axios.get('/comptes').then((response) => {
      commit('GET_ALL_COMPTE', response.data)
      
  }).catch(error => console.log(error)))
  }
  
  // action pour ajouter compte
  export function ajouterCompte({commit}, elementAjout){
    asyncLoading(axios.post('/comptes',elementAjout)).then(response =>{
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
  
  // action pour modifier banque
  
  
  export function modifierCompte({commit}, element_modifie) {
    asyncLoading( axios.put('/comptes',element_modifie)).then(response => {
         commit('MODIFIER_COMPTE', response.data)
         
  
         this.$app.$notify({
           title: 'success ',
           text: 'Modification effectué !',
           type:"success"
         })
     }).catch(error => console.log(error))
  }
  // supprimer banque
  
  export function supprimerCompte({commit}, id) {
   this.$app.$dialog
   .confirm("Voulez vouz vraiment supprimer ?.")
   .then(dialog => {
      commit('SUPPRIMER_COMPTE', id)
     // // dialog.loading(false) // stops the proceed button's loader
       axios.delete('/comptes/' + id).then(() => dialog.close() )   
   })
  
  }
  






/**Entreprise**/
export async function  getEntreprise({commit}) {

    queue.push(() =>  axios.get('/liste_entreprise').then(response => {
        commit('GET_ENTREPRISE', response.data)
    }).catch(error => console.log(error)));

}

export  function ajouterEntreprise({commit}, objetAjoute){
    this.$app.$loading(true)
    axios.post('/add_entreprise', objetAjoute ).then(res => {
        if(res.status == 201){
            this.$app.$notify({
                title: 'success',
                text: 'Enregistrement effectuer',
                type:"success"
            });
            commit('AJOUTER_ENTREPRISE', res.data)
            this.$app.$loading(false)
        }
    }).catch(error =>{
        console.log(error)
        this.$app.$loading(false)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type:"error"
        });
    })
}

export function supprimerEntreprise({commit}, id){
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
        this.$app.$notify({
            title: 'Suppression',
            text: 'Suppression effectuer',
            type:"error"
        });
        commit('SUPPRIMER_ENTREPRISE', id)
        axios.delete('/delete_entreprise/' + id).then(() => dialog.close() )
    })

}

// export function modifierEntreprise({commit}, formData){
//     this.$app.$loading(true)
//     axios.put('/update_entreprise' ,formData.id).then(response => {
//         this.$app.$notify({
//             title: 'success',
//             text: 'Modification effectuer',
//             type:"success"
//         });
//         commit('MODIFIER_ENTREPRISE', response.data)
//         this.$app.$loading(false)
//     })
//     //     .catch(error => {
//     //     console.log(error)
//     //     this.$app.$loading(false)
//     //     this.$app.$notify({
//     //         title: 'Erreur',
//     //         text: "Erreur c'est produit lors de l'enregistrement",
//     //         type:"error"
//     //     });
//     // })
// }
export function modifierEntreprise({ commit }, formData) {
    asyncLoading(axios
        .put("/update_entreprise/" + formData.id, {
            numero_idu:formData.numero_idu,
            numero_cc: formData.numero_cc,
            numero_rc: formData.numero_rc,
            raison_sociale: formData.raison_sociale,
            sigle: formData.sigle,
            secteur_activite_id: formData.secteur_activite_id,
            activite_principale: formData.activite_principale,
            pays: formData.pays,
            ville: formData.ville,
            forme_juridique: formData.forme_juridique,
            centre_impot: formData.centre_impot,
            regime_impossition: formData.regime_impossition,
            capitale_sociale: formData.capitale_sociale,
            immatriculation_cnps: formData.immatriculation_cnps,
            date_enregistrement_cnps: formData.date_enregistrement_cnps,
            telephone: formData.telephone,
            email: formData.email,
            nbre_travailleur_permanent: formData.nbre_travailleur_permanent,
            nbre_travailleur_journalier: formData.nbre_travailleur_journalier,
            service_assiette_impot: formData.service_assiette_impot,
            adresse: formData.adresse,

        }))
        .then(response => {
            commit("MODIFIER_ENTREPRISE", response.data);
           
            this.$app.$notify({
                title: 'Success',
                text: 'Modification Effectu� avec Succ�s!',
                type: "success"
            })
        });
}

export function ajouterSanction({commit}, formData,config){
    this.$app.$loading(true)
    axios.post('/add_sanction' ,formData,config).then(response => {
        this.$app.$notify({
            title: 'success',
            text: 'Modification effectuer',
            type:"success"
        });
        commit('MODIFIER_ENTREPRISE', response.data)
        this.$app.$loading(false)
    }).catch(error =>{
        console.log(error)
        this.$app.$loading(false)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type:"error"
        });
    })
}
/**Fin entreprise**/

/**
 * Etape Marche
 * */

export async function  getEtapeMarche({commit}) {

    queue.push(() =>  axios.get('/liste_etape_marche').then(response => {
        commit('GET_ETAPE_MARCHE', response.data)
    }).catch(error => console.log(error)));

}

export  function ajouterEtapeMarche({commit}, objetAjoute){
    this.$app.$loading(true)
    axios.post('/add_etape_marche', objetAjoute ).then(res => {
        if(res.status == 201){
            this.$app.$notify({
                title: 'success',
                text: 'Enregistrement effectuer',
                type:"success"
            });
            commit('AJOUTER_ETAPE_MARCHE', res.data)
            this.$app.$loading(false)
        }
    }).catch(error =>{
        console.log(error)
        this.$app.$loading(false)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type:"error"
        });
    })
}

export function supprimerEtapeMarche({commit}, id){
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
        this.$app.$notify({
            title: 'Suppression',
            text: 'Suppression effectuer',
            type:"error"
        });
        commit('SUPPRIMER_ETAPE_MARCHE', id)
        axios.delete('/delete_etape_marche/' + id).then(() => dialog.close() )
    })
}

export function modifierEtapeMarche({commit}, formData){
    this.$app.$loading(true)
    axios.put('/update_etape_marchee' ,formData).then(response => {
        this.$app.$notify({
            title: 'success',
            text: 'Modification effectuer',
            type:"success"
        });
        commit('MODIFIER_ETAPE_MARCHE', response.data)
        this.$app.$loading(false)
    }).catch(error =>{
        console.log(error)
        this.$app.$loading(false)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type:"error"
        });
    })
}

/**
 *Fin etape marche
 * */


/**
 * Document PTBA-PPM
 * */


export async function getDocumentPTBAPPM({commit}) {

    queue.push(() =>  axios.get('/liste_docs_ptba_ppm').then(response => {
        commit('GET_DOCUMENT_PTBA_PPM', response.data)
    }).catch(error => console.log(error)));

}

export  function ajouterDocumentPTBAPPM({commit} , objetAjoute,config){
    this.$app.$loading(true)
    axios.post('/add_docs_ptba_ppm', objetAjoute ,config).then(res => {
        if(res.status == 201 || res.status == 200){
            this.$app.$notify({
                title: 'success',
                text: 'Enregistrement effectuer',
                type:"success"
            });
            commit('AJOUTER_DOCUMENT_PTBA_PPM', res.data)
            this.$app.$loading(false)
        }
    }).catch(error =>{
        console.log(error)
        this.$app.$loading(false)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type:"error"
        });
    })
}

export function supprimerDocumentPTBAPPM({commit}, id){
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
        this.$app.$notify({
            title: 'Suppression',
            text: 'Suppression effectuer',
            type:"error"
        });
        commit('SUPPRIMER_DOCUMENT_PTBA_PPM', id)
        axios.delete('/delete_docs_ptba_ppm/' + id).then(() => dialog.close() )
    })
}

export function modifierDocumentPTBAPPM({commit}, formData,config){
    this.$app.$loading(true)
    axios.put('/update_docs_ptba_ppm' ,formData,config).then(response => {
        this.$app.$notify({
            title: 'success',
            text: 'Modification effectuer',
            type:"success"
        });
        commit('MODIFIER_DOCUMENT_PTBA_PPM', response.data)
        this.$app.$loading(false)
    }).catch(error =>{
        console.log(error)
        this.$app.$loading(false)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type:"error"
        });
    })
}


/**
 *Fin Document PTBA-PPM
 * */


export async function getMarcheContrat({commit}) {
    queue.push(() =>  axios.get('/liste_marche_previsionnel').then(response => {
        commit('GET_MARCHE_CONTRAT', response.data)
    }).catch(error => console.log(error)));

}

export  function ajouterMarcheContrat({commit} , objetAjoute,config){
    this.$app.$loading(true)
    axios.post('/add_marche_contrat', objetAjoute ,config).then(res => {
        if(res.status == 201){
            this.$app.$notify({
                title: 'success',
                text: 'Enregistrement effectuer',
                type:"success"
            });
            commit('AJOUTER_MARCHE_CONTRAT', res.data)
            this.$app.$loading(false)
        }
    }).catch(error =>{
        console.log(error)
        this.$app.$loading(false)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type:"error"
        });
    })
}

export function supprimerMarcheContrat({commit}, id){


    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
        this.$app.$notify({
            title: 'Suppression',
            text: 'Suppression effectuer',
            type:"error"
        });
        commit('SUPPRIMER_MARCHE_CONTRAT', id)
        axios.delete('/delete_marche_contrat/' + id).then(() => dialog.close() )
    })
}

export function modifierMarcheContrat({commit}, formData){
    this.$app.$loading(true)
    axios.put('/update_marche_contrat' ,formData).then(response => {
        this.$app.$notify({
            title: 'success',
            text: 'Modification effectuer',
            type:"success"
        });
        commit('MODIFIER_MARCHE_CONTRAT', response.data)
        this.$app.$loading(false)
    }).catch(error =>{
        console.log(error)
        this.$app.$loading(false)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type:"error"
        });
    })
}

export function detailMarcheContrat({commit,getters}, id){
        commit('DETAIL_MARCHE_CONTRAT', {getters,id})
}




export async function getPresenceCF({commit}) {
    queue.push(() =>  axios.get('/liste_presense_cf').then(response => {
        commit('GET_PRESENCE_CF', response.data)
    }).catch(error => console.log(error)));

}

export  function ajouterPresenceCF({commit} , objetAjoute){
    this.$app.$loading(true)
    axios.post('/add_presense_cf', objetAjoute ).then(res => {
        if(res.status == 201){
            this.$app.$notify({
                title: 'success',
                text: 'Enregistrement effectuer',
                type:"success"
            });
            commit('AJOUTER_PRESENCE_CF', res.data)
            this.$app.$loading(false)

        }
    }).catch(error =>{
        console.log(error)
        this.$app.$loading(false)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type:"error"
        });
    })
}

export function supprimerPresenceCF({commit}, id){
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
        this.$app.$notify({
            title: 'Suppression',
            text: 'Suppression effectuer',
            type:"error"
        });
        commit('SUPPRIMER_PRESENCE_CF', id)
        axios.delete('/delete_presense_cf/' + id).then(() => dialog.close() )
    })
}

export function modifierPresenceCF({commit}, formData){
    this.$app.$loading(true)
    axios.put('/update_presense_cf' ,formData).then(response => {
        this.$app.$notify({
            title: 'success',
            text: 'Modification effectuer',
            type:"success"
        });
        commit('MODIFIER_PRESENCE_CF', response.data)
        this.$app.$loading(false)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type:"error"
        });
    }).catch(error =>{
        console.log(error)
        this.$app.$loading(false)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type:"error"
        });
    })
}


export function marchePresenceCf({commit,getters}, id){
    commit('PRESENCE_CF_MARCHE_DETAIL', {getters,id})

}



export async function getDocumentPresence({commit}) {
    queue.push(() =>  axios.get('/liste_document_presence').then(response => {
        commit('GET_DOCUMENT', response.data)
    }).catch(error => console.log(error)));
}

export  function ajouterDocumentPresence({commit} , objetAjoute,config){
    this.$app.$loading(true)
    axios.post('/add_document_presence', objetAjoute ,config).then(res => {
        this.$app.$notify({
            title: 'success',
            text: 'Enregistrement effectuer',
            type:"success"
        });
        commit('AJOUTER_DOCUMENT', res.data)
        this.$app.$loading(false)
    }).catch(error =>{
        console.log(error)
        this.$app.$loading(false)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type:"error"
        });
    })
}

export function supprimerDocumentPresence({commit}, id){

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
        this.$app.$notify({
            title: 'Suppression',
            text: 'Suppression effectuer',
            type:"error"
        });
        commit('SUPPRIMER_DOCUMENT', id)
        axios.delete('/delete_document_presence/' + id).then(() => dialog.close() )
    })
}


export function supprimeDocumentPresenceCF({commit}, id){
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
        commit('SUPPRIMER_DOCUMENT_PRESENCE', id)
        axios.delete('/delete_document_presence/' + id).then(() => dialog.close() )
    })
}



export function modifierDocumentPresence({commit}, formData){
    this.$app.$loading(true)
    axios.put('/update_document_presence' ,formData).then(response => {
        this.$app.$notify({
            title: 'success',
            text: 'Modification effectuer',
            type:"success"
        });
        commit('MODIFIER_DOCUMENT', response.data)
        this.$app.$loading(false)
    }).catch(error =>{
        console.log(error)
        this.$app.$loading(false)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type:"error"
        });
    })
}

export function ptbaPPMbyUaExercie({commit,getters}, data){
    commit('PTBA_PPM_BY_UA_AND_EXERCICE', {getters,data})
}

export async function getDecisionMarche({commit},id) {
    axios.get('/dernier_decision_marche/'+id).then(response => {
        commit('DECISION_MARCHE_CF', response.data)
    }).catch(error => console.log(error));
}

export async function getNombreMarcheByProcedure({commit}) {
    queue.push(() =>  axios.get('/nombrMarchePrevisionnelByTypeProcedure').then(response => {
        commit('NBR_MARCHE_BY_PROCEDURE', response.data)
    }).catch(error => console.log(error)));
}


export async function sourcePersonnalise({commit}) {
    queue.push(() =>  axios.get('/source_financement_coustomise').then(response => {
        commit('SOURCE_PERSONNALISE', response.data)
    }).catch(error => console.log(error)));
}


export async function getDocumentByPresenceOfMarche({commit},id) {
    axios.get('/liste_document_by_presence_and_marche/'+id).then(response => {
        commit('DOCUMENT_PRESENCE_BY_MARCHE_CF', response.data)
    }).catch(error => console.log(error));
}


export async function detailMarcheBack_end({commit},id) {
    axios.get('/show_marche_contrat/'+id).then(response => {
        commit('DETAIL_MARCHE_BACK_END', response.data)
    }).catch(error => console.log(error));

}

export async function getSourceFinnancementByMarche({commit}) {
    queue.push(() =>  axios.get('/liste_finnancement_marche').then(response => {
        commit('GET_FINANCEMENT_BY_MARCHE', response.data)
    }).catch(error => console.log(error)));
}


export  function ajouterSourceFinnancementByMarche({commit} , objetAjoute){
    this.$app.$loading(true)
    axios.post('/add_finnancement_marche', objetAjoute ).then(res => {
        if(res.status == 201){
            this.$app.$notify({
                title: 'success',
                text: 'Enregistrement effectuer',
                type:"success"
            });
            commit('AJOUTER_FINANCEMENT_BY_MARCHE', res.data)
            this.$app.$loading(false)

        }
    }).catch(error =>{
        console.log(error)
        this.$app.$loading(false)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type:"error"
        });
    })
}

export function supprimerSourceFinnancementByMarche({commit}, id){

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
        this.$app.$notify({
            title: 'Suppression',
            text: 'Suppression effectuer',
            type:"error"
        });
        commit('SUPPRIMER_FINANCEMENT_BY_MARCHE', id)
        axios.delete('/delete_finnancement_marche/' + id).then(() => dialog.close() )
    })
}

export function modifierSourceFinnancementByMarche({commit}, formData){
    this.$app.$loading(true)
    axios.put('/update_finnancement_marche' ,formData).then(response => {
        this.$app.$notify({
            title: 'success',
            text: 'Modification effectuer',
            type:"success"
        });
        commit('MODIFIER_FINANCEMENT_BY_MARCHE', response.data)
        this.$app.$loading(false)
    }).catch(error =>{
        console.log(error)
        this.$app.$loading(false)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type:"error"
        });
    })
}

export function detailMarcheFinnance({commit,getters}, id){
    commit('DETAIL_MARCHE_FINNANCEMENT', {getters,id})

}


export async function getMarcheContratExecution({commit}) {
    queue.push(() =>  axios.get('/liste_marche_contrat_enxecution').then(response => {
        commit('GET_MARCHE_CONTRAT_EN_EXECUTION', response.data)
    }).catch(error => console.log(error)));

}

/*export const formatageSomme = ({commit},montant) => {
    var p = montant.toFixed(2).split(".");
    return p[0].split("").reverse().reduce( (acc, montant, i) => {
        return montant == "-" ? acc : montant + (i && !(i % 3) ? "." : "") + acc;
    }, "") + " F CFA";
}*/




export function getAgence({ commit }) {
    queue.push(() => axios.get('/agence').then((response) => {
        commit('GET_ALL_AGENCE', response.data)

    }).catch(error => console.log(error)))
}

// action pour ajouter type facture
export function ajouterAgence({ commit, dispatch}, formData) {
    asyncLoading(axios.post('/agence', formData)).then(response => {
        if (response.status == 201) {
            console.log(response.data)
            commit('AJOUTER_AGENCE', response.data)
            dispatch('getAgence')
            dispatch('getBanque')
            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectu� !',
                type: "success"
            })
        }

    }).catch(error => console.log(error))
}

// action pour modifier type facture


export function modifierAgence({ commit, dispatch }, element_modifie) {
    asyncLoading(axios.put('/agence', element_modifie)).then(response => {
        commit('MODIFIER_AGENCE', response.data)
        dispatch('getAgence')
        dispatch('getBanque')
        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectu� !',
            type: "success"
        })
    }).catch(error => console.log(error))
}
// supprimer type facture
export function supprimerAgence({ commit, dispatch }, id) {
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_AGENCE', id)
            dispatch('getAgence')
            dispatch('getBanque')
            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/agence/' + id).then(() => dialog.close())
        })

}