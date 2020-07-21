// import axios from "../../../../request/personnel"
import axios from '../../guei/personnel_ua/url/api_personnel_ua/api'
var housecall = require('housecall');
var queue = housecall({ concurrency: 2, cooldown: 1000 });
import { asyncLoading } from "vuejs-loading-plugin";







export function getPermissionConge({ commit }) {

    queue.push(() => axios.get('/listePermissionConge').then(response => {
        // console.log(response.data)
        commit('GET_PERMISSION_CONGE', response.data)
    }).catch(error => console.log(error))
    );


}

// ajouter type acte personnel
export function ajouterPermissionConge({ commit }, objetAjoute) {
    this.$app.$loading(true)
    axios.post('/addPermissionConge', objetAjoute).then(res => {
        if (res.status == 201) {
            this.$app.$notify({
                title: 'success',
                text: 'Enregistrement effectuer',
                type: "success"
            });
            commit('AJOUTER_PERMISSION_CONGE', res.data)
            this.$app.$loading(false)

        }
    }).catch(error => {
        console.log(error)
        this.$app.$loading(true)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type: "error"
        });
    })
}


export function modifierPermissionConge({ commit }, formData) {
    this.$app.$loading(true)
    axios.put('/updatePermissionConge', formData).then(response => {
        commit('MODIFIER_PERMISSION_CONGE', response.data)
        this.$app.$loading(false)
    }).catch(error => {
        console.log(error)
        this.$app.$loading(true)
        this.$app.$notify({
            title: 'success',
            text: "Modification effectuée !",
            type: "success"
        });
    })

        .then(response => {
            commit("MODIFIER_PERMISSION_CONGE", response.data);

            this.$app.$notify({
                title: "Success",
                text: "Modification Effectu� avec Succ�s!",
                type: "success"
            });
        });

}

// supprimer type act
export function supprimerPermissionConge({ commit }, id) {

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
            this.$app.$notify({
                title: 'Suppression',
                text: 'Suppression effectuer',
                type: "error"
            });
            commit('SUPPRIMER_PERMISSION_CONGE', id)
            axios.delete('/deletePermissionConge/' + id).then(() => dialog.close())
        })
}



/**
 * acteur_depenses
 * Gestion type acteur
 */
//ajouterActeur

export function getordrepaiement({ commit }) {

    queue.push(() => axios.get('/listeOrdrePaiement').then(response => {
        // console.log(response.data)
        commit('GET_ORDRE_DE_PAIEMENT', response.data)
    }).catch(error => console.log(error))
    );


}

// ajouter type acte personnel

export function ajouterordrepaiement({ commit }, objetAjoute) {
    this.$app.$loading(true)
    axios.post('/ajouterOrdrePaiement', objetAjoute).then(res => {
        this.$app.$notify({
            title: 'success',
            text: 'Enregistrement effectuer',
            type: "success"
        });
        commit('AJOUTER_ORDRE_DE_PAIEMENT', res.data)
        this.$app.$loading(false)
    }).catch(error => {
        console.log(error)
        this.$app.$loading(true)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type: "error"
        });
    })
}
// supprimer type act
export function supprimerordrepaiement({ commit }, id) {

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
            this.$app.$notify({
                title: 'Suppression',
                text: 'Suppression effectuer',
                type: "error"
            });
            commit('SUPPRIMER_ORDRE_DE_PAIEMENT', id)
            axios.delete('/deleteOrdrePaiement/' + id).then(() => dialog.close())
        })
}

export function modifierordrepaiement({ commit }, formData) {
    this.$app.$loading(true)
    axios.put('/updateOrdrePaiement', formData).then(response => {
        this.$app.$notify({
            title: 'success',
            text: 'Modification effectuer',
            type: "success"
        });
        commit('MODIFIER_ORDRE_DE_PAIEMENT', response.data)
        this.$app.$loading(false)
    }).catch(error => {
        console.log(error)
        this.$app.$loading(true)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type: "error"
        });
    })

}










// ajouter type acte personnel
export function ajouterpaiementPersonnel({ commit, dispatch }, objetAjoute) {
    this.$app.$loading(true)
    axios.post('/addPaiementPersonnel', objetAjoute).then(res => {
        this.$app.$notify({
            title: 'success',
            text: 'Enregistrement effectuer',
            type: "success"
        });
        commit('AJOUTER_PAIEMENTPERSONNEL', res.data)
        dispatch('getpaiementPersonnel')
        this.$app.$loading(false)
    }).catch(error => {
        console.log(error)
        this.$app.$loading(true)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type: "error"
        });
    })
}

// supprimer type act
export function supprimerpaiementPersonnel({ commit }, id) {

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
            this.$app.$notify({
                title: 'Suppression',
                text: 'Suppression effectuer',
                type: "error"
            });
            commit('SUPPRIMER_PAIEMENTPERSONNEL', id)
            axios.delete('/deletePaiementPersonnel/' + id).then(() => dialog.close())
        })
}

export function modifierpaiementPersonnel({ commit }, formData) {
    this.$app.$loading(true)
    axios.put('/updatePaiementPersonnel', formData).then(response => {
        this.$app.$notify({
            title: 'success',
            text: 'Modification effectuer',
            type: "success"
        });
        commit('MODIFIER_PAIEMENTPERSONNEL', response.data)
        this.$app.$loading(false)
    }).catch(error => {
        console.log(error)
        this.$app.$loading(true)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type: "error"
        });
    })

}
export function modifierSalaire({ commit }, formData) {
    this.$app.$loading(true)
    axios.put('/update_salarie', formData).then(response => {
        this.$app.$notify({
            title: 'success',
            text: 'Modification effectuer',
            type: "success"
        });
        commit('MODIFIER_SALAIRE', response.data)
        this.$app.$loading(false)
    }).catch(error => {
        console.log(error)
        this.$app.$loading(true)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type: "error"
        });
    })

}

export function getSalaire({ commit }) {

    queue.push(() => axios.get('/liste_salarie').then(response => {
        // console.log(response.data)
        commit('GET_SALAIRE', response.data)
    }).catch(error => console.log(error))
    );


}



export async function  getTypeActPersonnel({commit}) {

    queue.push(() =>  axios.get('/liste_type_acte_personnel').then(response => {
        commit('GET_TYPE_ACTE_PERSONNELS', response.data)
    }).catch(error => console.log(error)));

}
// ajouter type acte personnel
export  function ajouterTypeActPersonnel({commit}, objetAjoute){
    this.$app.$loading(true)
    axios.post('/add_type_acte_personnel', objetAjoute ).then(res => {
        if(res.status == 201){
            this.$app.$notify({
                title: 'success',
                text: 'Enregistrement effectuer',
                type:"success"
            });
            commit('AJOUTER_TYPE_ACTE_PERSONNELS', res.data)
            this.$app.$loading(false)
        }
    }).catch(error => {
        console.log(error)
        this.$app.$loading(true)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type:"error"
        });
    } )
}

// supprimer type act
export function supprimerTypeActPersonnel({commit}, id){

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
        this.$app.$notify({
            title: 'Suppression',
            text: 'Suppression effectuer',
            type:"error"
        });
        commit('SUPPRIMER_TYPE_ACTE_PERSONNELS', id)
        axios.delete('/delete_type_acte_personnel/' + id).then(() => dialog.close() )
    })
}


export function modifierTypeAct({commit}, formData){
    this.$app.$loading(true)
    axios.put('/update_type_acte_personnel' ,formData).then(response => {
        this.$app.$notify({
            title: 'success',
            text: 'Modification effectuer',
            type:"success"
        });
        commit('MODIFIER_TYPE_ACTE_PERSONNELS', response.data)
        this.$app.$loading(false)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type:"error"
        });
    })

}
export  function  getpaiementPersonnel({commit}) {

    queue.push(() =>  axios.get('/listePaiementPersonnel').then(response => {
            // console.log(response.data)
            commit('GET_PAIEMENTPERSONNEL', response.data)
        }).catch(error => console.log(error))
    );


}

// ajouter type acte personnel
// export  function ajouterpaiementPersonnel({commit}, objetAjoute){
//     this.$app.$loading(true)
//     axios.post('/addPaiementPersonnel', objetAjoute ).then(res => {
//         this.$app.$notify({
//             title: 'success',
//             text: 'Enregistrement effectuer',
//             type:"success"
//         });
//         commit('AJOUTER_PAIEMENTPERSONNEL', res.data)
//         this.$app.$loading(false)
//     }).catch(error =>{
//         console.log(error)
//         this.$app.$loading(true)
//         this.$app.$notify({
//             title: 'Erreur',
//             text: "Erreur c'est produit lors de l'enregistrement",
//             type:"error"
//         });
//     })
// }

// supprimer type act
// export function supprimerpaiementPersonnel({commit}, id){

//     this.$app.$dialog
//         .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
//         this.$app.$notify({
//             title: 'Suppression',
//             text: 'Suppression effectuer',
//             type:"error"
//         });
//         commit('SUPPRIMER_PAIEMENTPERSONNEL', id)
//         axios.delete('/deletePaiementPersonnel/' + id).then(() => dialog.close() )
//     })
// }

// export function modifierpaiementPersonnel({commit}, formData){
//     this.$app.$loading(true)
//     axios.put('/updatePaiementPersonnel' ,formData).then(response => {
//         this.$app.$notify({
//             title: 'success',
//             text: 'Modification effectuer',
//             type:"success"
//         });
//         commit('MODIFIER_PAIEMENTPERSONNEL', response.data)
//         this.$app.$loading(false)
//     }).catch(error =>{
//         console.log(error)
//         this.$app.$loading(true)
//         this.$app.$notify({
//             title: 'Erreur',
//             text: "Erreur c'est produit lors de l'enregistrement",
//             type:"error"
//         });
//     })

// }


/**
 * Fin fonction MODIFIER_PAIEMENTPERSONNEL
 * **/


export  function  getFonctions({commit}) {

    queue.push(() =>  axios.get('/liste_fonction').then(response => {
            // console.log(response.data)
            commit('GET_FONCTIONS', response.data)
        }).catch(error => console.log(error))
    );


}

// ajouter type acte personnel
export  function ajouterFonction({commit}, objetAjoute){
    this.$app.$loading(true)
    axios.post('/add_fonction', objetAjoute ).then(res => {
        this.$app.$notify({
            title: 'success',
            text: 'Enregistrement effectuer',
            type:"success"
        });
        commit('AJOUTER_FOCNTIONS', res.data)
        this.$app.$loading(false)
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

// supprimer type act
export function supprimerFonction({commit}, id){

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
        this.$app.$notify({
            title: 'Suppression',
            text: 'Suppression effectuer',
            type:"error"
        });
        commit('SUPPRIMER_FONCTIONS', id)
        axios.delete('/delete_fonction/' + id).then(() => dialog.close() )
    })
}

export function modifierFonction({commit}, formData){
    this.$app.$loading(true)
    axios.put('/update_fonction' ,formData).then(response => {
        this.$app.$notify({
            title: 'success',
            text: 'Modification effectuer',
            type:"success"
        });
        commit('MODIFIER_FONCTIONS', response.data)
        this.$app.$loading(false)
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








export  function  getContratResilie({commit}) {

    queue.push(() =>  axios.get('/list_contrat_resilie').then(response => {
            // console.log(response.data)
            commit('GET_ALL_CONTRAT_RESILIE', response.data)
        }).catch(error => console.log(error))
    );


}

// ajouter type acte personnel
export  function ajouterContratResilie({commit}, objetAjoute){
    this.$app.$loading(true)
    axios.post('/add_contrat_resilie', objetAjoute ).then(res => {
        this.$app.$notify({
            title: 'success',
            text: 'Enregistrement effectuer',
            type:"success"
        });
        commit('AJOUTER_CONTRAT_RESILIE', res.data)
        this.$app.$loading(false)
    }).catch(error =>{
        console.log(error)
        this.$app.$loading(true)
        this.$app.$notify({
            title: 'super',
            text: "Enregistrement effectué avec success",
            type:"super"
        });
    })
}

// supprimer type act
export function supprimerContratResilie({commit}, id){

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
        this.$app.$notify({
            title: 'Suppression',
            text: 'Suppression effectuer',
            type:"suppression"
        });
        commit('SUPPRIMER_CONTRAT_RESILIE', id)
        axios.delete('/delete_contrat_resilie/' + id).then(() => dialog.close() )
    })
}

export function modifierContratResilie({commit}, elementModifie){
    this.$app.$loading(true)
    axios.put('/update_contrat_resilie/' + elementModifie.id, elementModifie).then(response => {
        this.$app.$notify({
            title: 'success',
            text: 'Modification effectuer',
            type:"success"
        });
        commit('MODIFIER_FONCTIONS', response.data)
        this.$app.$loading(false)
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

/**
 * Fin fonction MODIFIER_CLASSES
 * **/




/**
 * Gestion des classes
 */
export  function  getClasses({commit}) {

    queue.push(() =>  axios.get('/liste_classes').then(response => {
            // console.log(response.data)
            commit('GET_CLASSES', response.data)
        }).catch(error => console.log(error))
    );


}

// ajouter type acte personnel
export  function ajouterClasses({commit}, objetAjoute){
    this.$app.$loading(true)
    axios.post('/add_classes', objetAjoute ).then(res => {
        if(res.status == 201){
            this.$app.$notify({
                title: 'success',
                text: 'Enregistrement effectuer',
                type:"success"
            });
            commit('AJOUTER_CLASSES', res.data)
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

// supprimer type act
export function supprimerClasse({commit}, id){


    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
        this.$app.$notify({
            title: 'Suppression',
            text: 'Suppression effectuer',
            type:"error"
        });
        commit('SUPPRIMER_CLASSES', id)
        axios.delete('/delete_classes/' + id).then(() => dialog.close() )
    })

}

export function modifierClasse({commit}, formData){
    this.$app.$loading(true)
    axios.put('/update_classes' ,formData).then(response => {
        this.$app.$notify({
            title: 'success',
            text: 'Modification effectuer',
            type:"success"
        });
        commit('MODIFIER_CLASSES', response.data)
        this.$app.$loading(false)
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






export  function  getDossierCandidatPersonnel({commit}) {

    queue.push(() =>  axios.get('/liste_candidat').then(response => {
            // console.log(response.data)
            commit('GET_ALL_DOSSIER_CANDIDAT', response.data)
        }).catch(error => console.log(error))
    );


}

// ajouter type acte personnel
export  function ajouterDossierCandidat({commit}, objetAjoute, config){
    this.$app.$loading(true)
    axios.post('/add_candidat', objetAjoute, config ).then(res => {
        if(res.status == 201){
            this.$app.$notify({
                title: 'success',
                text: 'Enregistrement effectuer',
                type:"success"
            });
            commit('AJOUTER_DOSSIER_CANDIDAT', res.data)
            this.$app.$loading(false)
        }
    }).catch(error =>{
        console.log(error)
        this.$app.$loading(true)
        this.$app.$notify({
            title: 'Success',
            text: "Enregistrement effectué avec success",
            type:"Success"
        });
    })
}

// supprimer type act
export function supprimerDossierCandidat({commit}, id){


    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
        this.$app.$notify({
            title: 'Suppression',
            text: 'Suppression effectuer',
            type:"Supprimer"
        });
        commit('SUPPRIMER_DOSSIER_CANDIDAT', id)
        axios.delete('/delete_candidat/' + id).then(() => dialog.close() )
    })

}

export function modifierDossierCandidat({commit}, formData,config){
    this.$app.$loading(true)
    axios.post('/update_candidat' ,formData,config).then(response => {
        this.$app.$notify({
            title: 'success',
            text: 'Modification effectuer',
            type:"success"
        });
        commit('MODIFIER_DOSSIER_CANDIDAT', response.data)
        this.$app.$loading(false)
    }).catch(error =>{
        console.log(error)
        this.$app.$loading(true)
        this.$app.$notify({
            title: 'Modifier',
            text: "Modification effectué avec success",
            type:"Modifier"
        });
    })

}













// modifier type acte personnel
/*export function modifierFonction({commit}, titre){

    console.log( 'titre :' + titre)
}*/


/**
 * Fin type acteur
 * **/





/**
 * Gestion des niveau etude
 */
export  function  getNiveauEtude({commit}) {

    queue.push(() => axios.get('/liste_niveau_etude').then(response => {
            // console.log(response.data)
            commit('GET_NIVEAU_ETUDE', response.data)
        }).catch(error => console.log(error))
    );


}

// ajouter type acte personnel
export  function ajouterNiveauEtude({commit}, objetAjoute){
    this.$app.$loading(true)
    axios.post('/add_niveau_etude', objetAjoute ).then(res => {
        if(res.status == 201){
            this.$app.$notify({
                title: 'success',
                text: 'Enregistrement effectuer',
                type:"success"
            });
            commit('AJOUTER_NIVEAU_ETUDE', res.data)
            this.$app.$loading(false)
        }
    }).catch(error => {
        console.log(error)
        this.$app.$loading(false)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type:"error"
        });
    })
}

// supprimer type act
export function supprimerNiveauEtude({commit}, id){

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
        this.$app.$notify({
            title: 'Suppression',
            text: 'Suppression effectuer',
            type:"error"
        });
        commit('SUPPRIMER_NIVEAU_ETUDE', id)
        axios.delete('/delete_niveau_etude/' + id).then(() => dialog.close() )
    })
}

export function modifierNiveauEtude({commit}, formData){
    this.$app.$loading(true)
    axios.put('/update_niveau_etude' ,formData).then(response => {
        this.$app.$notify({
            title: 'success',
            text: 'Modification effectuer',
            type:"success"
        });
        commit('MODIFIER_NIVEAU_ETUDE', response.data)
        this.$app.$loading(false)
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
// modifier type acte personnel
/*export function modifierFonction({commit}, titre){

    console.log( 'titre :' + titre)
}*/


/**
 * Fin niveau
 * **/



/**
 * Gestion des types contrat
 */
export  function  getTypeContrat({commit}) {

    queue.push(() => axios.get('/liste_type_contrats').then(response => {
            // console.log(response.data)
            commit('GET_TYPE_CONTRAT', response.data)
        }).catch(error => console.log(error))
    );
}

// ajouter type acte personnel
export  function ajouterTypeContrat({commit}, objetAjoute){
    this.$app.$loading(true)
    axios.post('/add_type_contrats', objetAjoute ).then(res => {
        if(res.status == 201){
            this.$app.$notify({
                title: 'success',
                text: 'Enregistrement effectuer',
                type:"success"
            });
            commit('AJOUTER_TYPE_CONTRAT', res.data)
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

// supprimer type act
export function supprimerTypeContrat({commit}, id){

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
        this.$app.$notify({
            title: 'Suppression',
            text: 'Suppression effectuer',
            type:"error"
        });
        commit('SUPPRIMER_TYPE_CONTRAT', id)
        axios.delete('/delete_type_contrats/' + id).then(() => dialog.close() )
    })
}

export function modifierTypeContrat({commit}, formData){
    this.$app.$loading(false)
    axios.put('/update_type_contrats' ,formData).then(response => {
        this.$app.$notify({
            title: 'success',
            text: 'Modification effectuer',
            type:"success"
        });
        commit('MODIFIER_TYPE_CONTRAT', response.data)
        this.$app.$loading(false)
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
// modifier type acte personnel
/*export function modifierFonction({commit}, titre){

    console.log( 'titre :' + titre)
}*/


/**
 * Fin type acteur
 * **/




/**
 * Gestion des types salarie
 */
export  function  getTypeSalarie({commit}) {

    queue.push(() => axios.get('/liste_type_salarie').then(response => {
            // console.log(response.data)
            commit('GET_TYPE_SALARIE', response.data)
        }).catch(error => console.log(error))
    );

}

// ajouter type acte personnel
export  function ajouterTypeSalarie({commit}, objetAjoute){
    this.$app.$loading(true)
    axios.post('/add_type_salarie', objetAjoute ).then(res => {
        if(res.status == 201){
            this.$app.$notify({
                title: 'success',
                text: 'Enregistrement effectuer',
                type:"success"
            });
            commit('AJOUTER_SALARIE', res.data)
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

// supprimer type act
export function supprimerTypeSalarie({commit}, id){

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
        this.$app.$notify({
            title: 'Suppression',
            text: 'Suppression effectuer',
            type:"error"
        });
        commit('SUPPRIMER_TYPE_SALARIE', id)
        axios.delete('/delete_type_salarie/' + id).then(() => dialog.close() )
    })
}

export function modifieTypeSalaire({commit}, formData){
    this.$app.$loading(true)
    axios.put('/update_type_salarie' ,formData).then(response => {
        commit('MODIFIER_TYPE_SALARIE', response.data)
        this.$app.$loading(false)
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

export  function  allActeurDepense({commit}) {
    queue.push(() => axios.get('/liste_all_acteur_depense').then(response => {
            // console.log(response.data)
            commit('GET_ALL_ACTEURDEPENSE', response.data)
        }).catch(error => console.log(error))
    );


}
// modifier type acte personnel
/*export function modifierFonction({commit}, titre){

    console.log( 'titre :' + titre)
}*/


/**
 * Fin type salaires
 * **/


/**
 * Gestion des echelons
 */
// export  function  getEchelons({commit}) {

//     queue.push(() =>axios.get('/liste_echellon').then(response => {
//             // console.log(response.data)
//             commit('GET_ECHELONS', response.data)
//         }).catch(error => console.log(error))
//     );


// }

// ajouter type acte personnel
export  function ajouterEchelons({commit}, objetAjoute){
    this.$app.$loading(true)
    axios.post('/add_echellon', objetAjoute ).then(res => {
        if(res.status == 201){
            this.$app.$notify({
                title: 'success',
                text: 'Enregistrement effectuer',
                type:"success"
            });
            commit('AJOUTER_ECHELONS', res.data)
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


// modifier echelon




export function modifierEchelons({commit}, formData){
    this.$app.$loading(true)
    axios.put('/update_echellon' ,formData).then(response => {
        commit('MODIFIER_ECHELONS', response.data)
        this.$app.$loading(false)
    }).catch(error =>{
        console.log(error)
        this.$app.$loading(true)
        this.$app.$notify({
            title: 'success',
            text: "Modification effectuée !",
            type:"success"
        });
    })

}

// supprimer type act
export function supprimerEchelons({commit}, id){

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
        this.$app.$notify({
            title: 'Suppression',
            text: 'Suppression effectuer',
            type:"error"
        });
        commit('SUPPRIMER_ECHELONS', id)
        axios.delete('/delete_echellon/' + id).then(() => dialog.close() )
    })
}

// modifier type acte personnel
/*export function modifierFonction({commit}, titre){

    console.log( 'titre :' + titre)
}*/


/**
 * Fin echelons
 * **/







/**
 * Gestion des grades
 */



// modifier le grade




// supprimer type act


export function getGrades({ commit }) {
         queue.push(() =>
           axios
             .get("/liste_grade")
             .then(response => {
               // console.log(response.data)
               commit("GET_GRADE", response.data);
             })
             .catch(error => console.log(error))
         );
       }

export function ajouterGrades({ commit, dispatch }, formData) {
         asyncLoading(axios.post("/add_grade", formData))
           .then(response => {
             if (response.status == 201) {
               console.log(response.data);
               commit("AJOUTER_GRADE", response.data);
               dispatch("getGrades");
               dispatch("getCategorieGrade");
               this.$app.$notify({
                 title: "success ",
                 text: "Enregistrement effectu� !",
                 type: "success"
               });
             }
           })
           .catch(error => console.log(error));
       }
export function supprimerGrades({ commit, dispatch }, id) {
         this.$app.$dialog
           .confirm("Voulez vouz vraiment supprimer ?.")
           .then(dialog => {
             commit("SUPPRIMER_GRADE", id);
             dispatch("getGrades");
             dispatch("getCategorieGrade");
             // // dialog.loading(false) // stops the proceed button's loader
             axios.delete("/delete_grade/" + id).then(() => dialog.close());
           });
       }

export function modifierGrade({ commit, dispatch }, nouveau) {
         asyncLoading(
           axios.put("/update_grade/" + nouveau.id, {
               categoriegrade_id: nouveau.categoriegrade_id,
             libelle: nouveau.libelle
           })
         ).then(response => {
           commit("MODIFIER_GRADE", response.data);
           dispatch("getGrades");
           dispatch("getCategorieGrade");
           this.$app.$notify({
             title: "Success",
             text: "Modification Effectu� avec Succ�s!",
             type: "success"
           });
         });
       }











































// modifier type acte personnel
/*export function modifierFonction({commit}, titre){

    console.log( 'titre :' + titre)
}*/


/**
 * Fin grades
 * **/
 
export  function  getActeur({commit}) {

    queue.push(() =>  axios.get('/liste_acteur_depense').then(response => {
        // console.log(response.data)
        commit('GET_ACTEURS', response.data)
    }).catch(error => console.log(error)));

}




// ajouter type acte personnel
export function ajouterActeur({ commit, dispatch}, objetAjoute){
    this.$app.$loading(true)
    axios.post('/nouveau_acteur_depense', objetAjoute ).then(res => {
        this.$app.$notify({
            title: 'success',
            text: 'Enregistrement effectuer',
            type:"success"
        });
        commit('AJOUTER_ACTEURS', res.data)
        
        dispatch('getActeur')
        dispatch('getActPersonnel')
        dispatch('allActeurDepense')
        this.$app.$loading(false)
    }).catch(error =>{
        console.log(error)
        this.$app.$loading(false)
        this.$app.$notify({
            title: 'Success',
            text: "Enregistrement effectué avec success",
            type:"Success"
        });
    })
}

// supprimer type act
export function supprimerActeurs({ commit, dispatch}, id){
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
        this.$app.$notify({
            title: 'Suppression',
            text: 'Suppression effectuer',
            type:"error"
        });
            commit('SUPPRIMER_ACTEURS', id)
            
            dispatch('getActeur')
            dispatch('getActPersonnel')
            dispatch('allActeurDepense')
        axios.delete('/delete_acteur_depense/' + id).then(() => dialog.close() )
    })
}


export  function  getNbrActeurAcrediteTaux({commit}) {
    queue.push(() =>  axios.get('/nbrActeurAcrediteTaux').then(response => {
            // console.log(response.data)
            commit('NOMBRE_TAUX_ACTEURS', response.data)
        }).catch(error => console.log(error))
    );

}
export  function  DetailActeur({commit},id) {
    axios.get('/show_acteur_depense/'+id).then(response => {
        commit('DETAIL_ACTEURS', response.data)
    }).catch(error => console.log(error));
}
export  function  getSalaireActuelActeur({commit}, id) {
    axios.get('/salaireActuelPersonnel/'+id).then(response => {
        // console.log(response.data)
        commit('SALAIRE_ACTUEL_ACTEURS', response.data)
    }).catch(error => console.log(error))

}

export  function  getAllSallairesActeurs({commit}, id) {
    axios.get('/allSallairePersonnel/'+id).then(response => {
        // console.log(response.data)
        commit('ALL_SALAIRE_ACTEUR', response.data)
    }).catch(error => console.log(error))

}
export  function  getListeSalaireActuelAll({commit}){
    queue.push(() =>  axios.get('/listeSalaireActeurActeur').then(response => {
        // console.log(response.data)
        commit('GET_SALAIRE_ACTUEL', response.data)
    }).catch(error => console.log(error)));
}
export  function  getActPersonnel({commit}) {
    queue.push(() =>  axios.get('/liste_act_personnel').then(response => {
        // console.log(response.data)
        commit('GET_ACT_PERSONNEL', response.data)
    }).catch(error => console.log(error)));
}

// ajouter type acte personnel
export function modifierActeurDepense({ commit, dispatch}, objetModifie,config){
    this.$app.$loading(true)
    axios.post('/add_act_nomination', objetModifie,config ).then(res => {
        this.$app.$notify({
            title: 'success',
            text: 'Modification effectuer',
            type:"success"
        });
        commit('MODIFIER_ACT_PERSONNEL', res.data)
        dispatch('getActeur')
        dispatch('getActPersonnel')
        dispatch('allActeurDepense')
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

// Modififie acter depense modification_acteur
export function modifierActeurDepenses({ commit, dispatch}, objetModifie){
    this.$app.$loading(true)
    axios.put('/update_act_personnel', objetModifie ).then(res => {
        if(res.status == 201){
            this.$app.$notify({
                title: 'success',
                text: 'Modification effectuer',
                type:"success"
            });
            commit('MODIFIER_ACT_PERSONNEL', res.data)
            dispatch('getActeur')
            dispatch('getActPersonnel')
            dispatch('allActeurDepense')
        }
        this.$app.$loading(false)
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


export function modificationActeur({ commit, dispatch}, objetModifie){
    this.$app.$loading(true)
    axios.put('/modification_acteur', objetModifie ).then(res => {
        if(res.status == 201){
            this.$app.$notify({
                title: 'success',
                text: 'Modification effectuer',
                type:"success"
            });
            commit('MODIFIER_ACT_PERSONNEL', res.data)
        } dispatch('getActeur')
        dispatch('getActPersonnel')
        dispatch('allActeurDepense')
        this.$app.$loading(false)
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


export  function  getLoadActeurDepense({commit}, id) {
    axios.get('/loading_personnel/'+id).then(response => {
        // console.log(response.data)
        commit('GET_LOAD_ACT_PERSONNEL', response.data)
    }).catch(error => console.log(error))

}



export  function  getConges({commit}) {
    queue.push(() =>  axios.get('/liste_conge_acteur').then(response => {
        // console.log(response.data)
        commit('GET_CONGES', response.data)
    }).catch(error => console.log(error)));
}

export  function  loadCongeActeur({commit}, id) {
    axios.get('/conge_by_users/'+id).then(response => {
        // console.log(response.data)
        commit('LOAD_CONGE_ACTEUR_DEPENSE', response.data)
    }).catch(error => console.log(error))

}


export  function  jourCongeDisponible({commit}, id) {
    axios.get('/jourCongeDisponibleByAgence/'+id).then(response => {
        // console.log(response.data)
        commit('JOUR_CONGE_DISPONIBLE_ACTEUR', response.data)
    }).catch(error => console.log(error))

}

export  function ajouterConges({commit}, objetModifie){
    this.$app.$loading(true)
    axios.post('/add_conge_acteur', objetModifie ).then(res => {

        this.$app.$notify({
            title: 'success',
            text: 'Enregistrement effectuer',
            type:"success"
        });
        commit('AJOUTER_CONGES', res.data)
        var self = this;
        setTimeout(function(){ self.$app.$loading(false); }, 4000);

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

export function supprimerConge({commit}, id){

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
        this.$app.$notify({
            title: 'Suppression',
            text: 'Suppression effectuer',
            type:"error"
        });
        commit('SUPPRIMER_CONGES', id)
        axios.delete('/delete_conge_acteur/' + id).then(() => dialog.close() )
    })
}

export  function modifierConges({commit}, objetModifie){
    this.$app.$loading(true)
    axios.post('/update_conge_acteur', objetModifie ).then(res => {
        this.$app.$notify({
            title: 'success',
            text: 'Modification effectuer',
            type:"success"
        });
        commit('MODIFIER_CONGES', res.data)
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

export function ajouterActeDepense({ commit, dispatch}, objetAjoute){
    this.$app.$loading(true)
    axios.post('/add_act_personnel', objetAjoute ).then(res => {
        this.$app.$notify({
            title: 'success',
            text: 'Enregistrement effectuer',
            type:"success"
        });
        commit('AJOUTER_ACT_PERSONNEL', res.data)
        
        dispatch('getActeur')
        dispatch('getActPersonnel')
        dispatch('allActeurDepense')
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

export  function  tempMoyenFinActiviteInterruption({commit}, id) {
    console.log("tempMoyenFinActiviteInterruption" + id)
    axios.get('/temps_moyen_fin_activite_and_interuption/'+id).then(response => {

        commit('LOAD_TEMPS_MOYEN_FIN_ACTIVITE_AND_INTERRUPRION', response.data)

    }).catch(error => console.log(error))

}

export  function  delaiMiseDispositionAct({commit}, id) {
    axios.get('/delaisMiseDispositionActnomination/'+id).then(response => {
        // console.log(response.data)
        commit('DELAI_DISPOSITION_ACT', response.data)
    }).catch(error => console.log(error))

}



export  function  getActeurFinContratAndActivite({commit}) {
    queue.push(() =>  axios.get('/liste_acteur_depense_fin_contrat').then(response => {
        // console.log(response.data)
        commit('GET_FIN_ACTIVITE_CONTRAT', response.data)
    }).catch(error => console.log(error)));
}
// modifier type acte personnel
/*export function modifierFonction({commit}, titre){

    console.log( 'titre :' + titre)
}*/


/**
 * Fin grades
 * **/





/**
 * Gestion des classes
 */
export function getCategorieGrade({ commit }) {

    queue.push(() => axios.get('/liste_CategorieGrade').then(response => {
        // console.log(response.data)
        commit('GET_CATEGORIE_GRADE', response.data)
    }).catch(error => console.log(error))
    );


}

export function ajouterCategorieGrade({ commit }, formData) {
         asyncLoading(axios.post("/add_CategorieGrade", formData))
           .then(response => {
             if (response.status == 201) {
               console.log(response.data);
               commit("AJOUTER_CATEGORIE_GRADE", response.data);

               this.$app.$notify({
                 title: "success ",
                 text: "Enregistrement effectu� !",
                 type: "success"
               });
             }
           })
           .catch(error => console.log(error));
       }
export function supprimerCategorieGrade({ commit}, id) {
         this.$app.$dialog
           .confirm("Voulez vouz vraiment supprimer ?.")
           .then(dialog => {
             commit("SUPPRIMER_CATEGORIE_GRADE", id);
            //  dispatch("getAllDirection");
            //  dispatch("getAllUniteAdministrative");
             // // dialog.loading(false) // stops the proceed button's loader
             axios
               .delete("/delete_CategorieGrade/" + id)
               .then(() => dialog.close());
           });
       }

export function modifierCategorieGrade({ commit }, nouveau) {
         asyncLoading(
           axios.put("/update_CategorieGrade/" + nouveau.id, {
             

             libelle: nouveau.libelle
           })
         ).then(response => {
           commit("MODIFIER_CATEGORIE_GRADE", response.data);
        //    dispatch("getAllDirection");
        //    dispatch("getAllUniteAdministrative");
           this.$app.$notify({
             title: "Success",
             text: "Modification Effectu� avec Succ�s!",
             type: "success"
           });
         });
       }


/**
 * Gestion des classes
 */
export function getFamilleFonction({ commit }) {

    queue.push(() => axios.get('/liste_FamilleFonction').then(response => {
        // console.log(response.data)
        commit('GET_FAMILLE_FONCTIONS', response.data)
    }).catch(error => console.log(error))
    );


}


// supprimer type act










export function ajouterFamilleFonction({ commit }, formData) {
         asyncLoading(axios.post("/add_FamilleFonction", formData))
           .then(response => {
             if (response.status == 201) {
               console.log(response.data);
               commit("AJOUTER_FAMILLE_FONCTIONS", response.data);

               this.$app.$notify({
                 title: "success ",
                 text: "Enregistrement effectu� !",
                 type: "success"
               });
             }
           })
           .catch(error => console.log(error));
       }
export function supprimerFamilleFonction({ commit }, id) {
         this.$app.$dialog
           .confirm("Voulez vouz vraiment supprimer ?.")
           .then(dialog => {
             commit("SUPPRIMER_FAMILLE_FONCTIONS", id);
             //  dispatch("getAllDirection");
             //  dispatch("getAllUniteAdministrative");
             // // dialog.loading(false) // stops the proceed button's loader
             axios
               .delete("/delete_FamilleFonction/" + id)
               .then(() => dialog.close());
           });
       }

export function modifierFamilleFonction({ commit }, nouveau) {
         asyncLoading(
           axios.put("/update_FamilleFonction/" + nouveau.id, {
             libelle: nouveau.libelle
           })
         ).then(response => {
           commit("MODIFIER_FAMILLE_FONCTIONS", response.data);
           //    dispatch("getAllDirection");
           //    dispatch("getAllUniteAdministrative");
           this.$app.$notify({
             title: "Success",
             text: "Modification Effectu� avec Succ�s!",
             type: "success"
           });
         });
       }


















/**
 * Gestion des classes
 */
export function getClassificationGradeFonction({ commit }) {

    queue.push(() => axios.get('/liste_ClassifGradeEmploie').then(response => {
        // console.log(response.data)
        commit('GET_CLASSIFICATION_GRADE_FONCTION', response.data)
    }).catch(error => console.log(error))
    );


}

// ajouter type acte personnel
export function ajouterClassificationGradeFonction({ commit,dispatch }, objetAjoute) {
    this.$app.$loading(true)
    axios.post('/add_ClassifGradeEmploie', objetAjoute).then(res => {
        if (res.status == 201) {
            this.$app.$notify({
                title: 'success',
                text: 'Enregistrement effectuer',
                type: "success"
            });
            commit('AJOUTER_CLASSIFICATION_GRADE_FONCTION', res.data)
            this.$app.$loading(false)
            dispatch("getClassificationGradeFonction");
            dispatch("getFamilleFonction");
        }
    }).catch(error => {
        console.log(error)
        this.$app.$loading(true)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type: "error"
        });
    })
}

// supprimer type act
// export function supprimerClassificationGradeFonction({ commit, dispatch }, id) {


//     this.$app.$dialog
//         .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
//             this.$app.$notify({
//                 title: 'Suppression',
//                 text: 'Suppression effectuer',
//                 type: "error"
//             });
//             commit('SUPPRIMER_CLASSIFICATION_GRADE_FONCTION', id)
//             dispatch("getClassificationGradeFonction");
//             dispatch("getFamilleFonction");
//             axios.delete('/delete_ClassifGradeEmploie/' + id).then(() => dialog.close())
//         })

// }
export function supprimerClassificationGradeFonction({ commit, dispatch }, id) {
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit("SUPPRIMER_CLASSIFICATION_GRADE_FONCTION", id);
            dispatch("getClassificationGradeFonction");
            dispatch("getFamilleFonction");
            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete("/delete_ClassifGradeEmploie/" + id).then(() => dialog.close());
        });
}






// export function modifierClassificationGradeFonction({ commit }, formData) {
//     this.$app.$loading(true)
//     axios.put('/update_ClassifGradeEmploie', formData).then(response => {
//         this.$app.$notify({
//             title: 'success',
//             text: 'Modification effectuer',
//             type: "success"
//         });
//         commit('MODIFIER_CLASSIFICATION_GRADE_FONCTION', response.data)
//         this.$app.$loading(false)
//     }).catch(error => {
//         console.log(error)
//         this.$app.$loading(true)
//         this.$app.$notify({
//             title: 'Erreur',
//             text: "Erreur c'est produit lors de l'enregistrement",
//             type: "error"
//         });
//     })

// }


export function modifierClassificationGradeFonction({ commit, dispatch }, nouveau) {
    asyncLoading(
        axios.put("/update_ClassifGradeEmploie/" + nouveau.id, {
            
            famille_fonction_id: nouveau.famille_fonction_id,
            fonction_id: nouveau.fonction_id,
            grade_id: nouveau.grade_id,
            recrutement: nouveau.recrutement,
            promotion: nouveau.promotion
        })
    ).then(response => {
        commit("MODIFIER_CLASSIFICATION_GRADE_FONCTION", response.data);
        dispatch("getClassificationGradeFonction");
        dispatch("getFamilleFonction");
        this.$app.$notify({
            title: "Success",
            text: "Modification Effectu� avec Succ�s!",
            type: "success"
        });
    });
}






export function getFonctionBudgetaire({ commit }) {

    queue.push(() => axios.get('/listeFonctionBudgetaire').then(response => {
        // console.log(response.data)
        commit('GET_FONCTION_BUDGETAIRE', response.data)
    }).catch(error => console.log(error))
    );


}

// ajouter type acte personnel
export function ajouterFonctionBudgetaire({ commit}, objetAjoute) {
    this.$app.$loading(true)
    axios.post('/addFonctionBudgetaire', objetAjoute).then(res => {
        if (res.status == 201) {
            this.$app.$notify({
                title: 'success',
                text: 'Enregistrement effectuer',
                type: "success"
            });
            commit('AJOUTER_FONCTION_BUDGETAIRE', res.data)
            this.$app.$loading(false)
           
        }
    }).catch(error => {
        console.log(error)
        this.$app.$loading(true)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type: "error"
        });
    })
}


export function modifierFonctionBudgetaire({ commit }, formData) {
    this.$app.$loading(true)
    axios.put('/updateFonctionBudgetaire', formData).then(response => {
        commit('MODIFIER_FONCTION_BUDGETAIRE', response.data)
        this.$app.$loading(false)
    }).catch(error => {
        console.log(error)
        this.$app.$loading(true)
        this.$app.$notify({
            title: 'success',
            text: "Modification effectuée !",
            type: "success"
        });
    })

        .then(response => {
            commit("MODIFIER_FONCTION_BUDGETAIRE", response.data);
           
            this.$app.$notify({
                title: "Success",
                text: "Modification Effectu� avec Succ�s!",
                type: "success"
            });
        });

}

// supprimer type act
export function supprimerFonctionBudgetaire({ commit }, id) {

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
            this.$app.$notify({
                title: 'Suppression',
                text: 'Suppression effectuer',
                type: "error"
            });
            commit('SUPPRIMER_FONCTION_BUDGETAIRE', id)
            axios.delete('/deleteFonctionBudgetaire/' + id).then(() => dialog.close())
        })
}








export function getSituationMatrimonial({ commit }) {

    queue.push(() => axios.get('/listeSituationMatrimonial').then(response => {
        // console.log(response.data)
        commit('GET_SITUATION_MATRIMONIAL', response.data)
    }).catch(error => console.log(error))
    );


}


// ajouter type acte personnel
export function ajouterSituationMatrimonial({ commit }, objetAjoute) {
    this.$app.$loading(true)
    axios.post('/ajouterSituationMatrimonial', objetAjoute).then(res => {
        this.$app.$notify({
            title: 'success',
            text: 'Enregistrement effectuer',
            type: "success"
        });
        commit('AJOUTER_SITUATION_MATRIMONIAL', res.data)
        this.$app.$loading(false)
    }).catch(error => {
        console.log(error)
        this.$app.$loading(true)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type: "error"
        });
    })
}

// supprimer type act
export function supprimerSituationMatrimonial({ commit }, id) {

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
            this.$app.$notify({
                title: 'Suppression',
                text: 'Suppression effectuer',
                type: "error"
            });
            commit('SUPPRIMER_SITUATION_MATRIMONIAL', id)
            axios.delete('/supprimerSituationMatrimonial/' + id).then(() => dialog.close())
        })
}

export function modifierSituationMatrimonial({ commit }, formData) {
    this.$app.$loading(true)
    axios.put('/modifierSituationMatrimonial', formData).then(response => {
        this.$app.$notify({
            title: 'success',
            text: 'Modification effectuer',
            type: "success"
        });
        commit('MODIFIER_SITUATION_MATRIMONIAL', response.data)
        this.$app.$loading(false)
    }).catch(error => {
        console.log(error)
        this.$app.$loading(true)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type: "error"
        });
    })

}






export function getSauvegardePhoto({ commit }) {

    queue.push(() => axios.get('/affichePhoto').then(response => {
        // console.log(response.data)
        commit('GET_SAUVEGARDE_PHOTO', response.data)
    }).catch(error => console.log(error))
    );

}


// ajouter type acte personnel
export function ajouterSauvegardePhoto({ commit, dispatch }, objetAjoute,config) {
    // this.$app.$loading(true)
    axios.post('/affichePhoto', objetAjoute, config).then(res => {
        if (res.status == 201) {
            // this.$app.$notify({
            //     title: 'success',
            //     text: 'Enregistrement effectuer',
            //     type: "success"
            // });
            commit('AJOUTER_SAUVEGARDE_PHOTO', res.data)
            dispatch("getSauvegardePhoto");
            dispatch("getSauvegardePhoto");
            dispatch("getSauvegardePhoto");
            dispatch("getSauvegardePhoto");
            // this.$app.$loading(false)
        }
    }).catch(error => {
        console.log(error)
        // this.$app.$loading(false)
        // this.$app.$notify({
        //     title: 'Erreur',
        //     text: "Erreur c'est produit lors de l'enregistrement",
        //     type: "error"
        // });
    })
}

// supprimer type act
export function supprimerSauvegardePhoto({ commit }, id) {

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.").then(dialog => {
            this.$app.$notify({
                title: 'Suppression',
                text: 'Suppression effectuer',
                type: "error"
            });
            commit('SUPPRIMER_SAUVEGARDE_PHOTO', id)
            axios.delete('/affichePhoto/' + id).then(() => dialog.close())
        })
}


export function modifieSauvegardePhoto({ commit, dispatch }, formData, config) {
    // this.$app.$loading(true)
    axios.put('/affichePhoto', formData, config).then(response => {
        commit('MODIFIER_SAUVEGARDE_PHOTO', response.data)
        dispatch("getSauvegardePhoto");
        dispatch("getSauvegardePhoto");
        // this.$app.$loading(false)
    })
    //     

}