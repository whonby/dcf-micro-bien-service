// import axios from '../../../../../urls/api_parametrage/api'
import axios from '../../../../request/parametreGeneraux'
import { asyncLoading } from 'vuejs-loading-plugin'

var housecall = require('housecall')
var queue = housecall({ concurrency: 2, cooldown: 1000 })



export function getGestionModules({ commit }) {
    queue.push(() => axios.get('/gestionModule').then((response) => {
        commit('GET_GESTION_MODULE', response.data)

    }).catch(error => console.log(error)))
}



// get all titres
export function getTitres({ commit }) {
    queue.push(() => axios.get('/liste_titre').then((response) => {
        commit('GET_TITRES', response.data)

    }).catch(error => console.log(error)))
}


// ajouter titre
export function ajouterTitre({ commit }, objetAjoute) {
    asyncLoading(axios.post('/add_titre', {
        code: objetAjoute.code,
        libelle: objetAjoute.libelle
    })).then(res => {
        if (res.status == 201) {
            commit('AJOUTER_TITRE', res.data)

            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué avec success !',
                type: "success"
            })

        }
    }).catch(error => console.log(error))
}

// supprimer titre
export function supprimerTitre({ commit }, id) {

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_TITRE', id)
            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/delete_titre/' + id).then(() => dialog.close())
        })
}

// modifier titre 
export function modifierTitre({ commit }, titre) {
    asyncLoading(axios.put('/update_titre/' + titre.id, {
        code: titre.code,
        libelle: titre.libelle
    })).then(response => {
        commit('MODIFIER_TITRE', response.data)

        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué avec success !',
            type: "success"
        })
    }).catch(error => console.log(error))

}

// get all exercices budgetaires 
export function getExercicesBudgetaires({ commit }) {

    queue.push(() => axios.get('/liste_exercice_budgetaire').then((response) => {
        commit('GET_EXERCICES_BUDGETAIRES', response.data)

    }).catch(error => console.log(error)))


}
// ajouter execice budgetaire
export function ajouterExerciceBudgetaire({ commit }, objetAjout) {
    asyncLoading(axios.post('/add_exercice_budgetaire', {
        annee: objetAjout.annee,
        date_debut: objetAjout.date_debut,
        date_fin: objetAjout.date_fin,
        encours: objetAjout.encours,
        date_cloture: objetAjout.date_cloture
    })).then(varExerciceBudgetaire => {
        if (varExerciceBudgetaire.status == 201) {
            commit('AJOUTER_EXERCICE_BUDGETAIRES', varExerciceBudgetaire.data)

            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué avec success !',
                type: "success"
            })
        }
    }).catch(error => console.log(error))
}


//modification exercice budgetaire
export function modifierExerciceBudgetaire({ commit }, exercice_budgetaire) {

    asyncLoading(axios.put('/update_exercice_budgetaire/' + exercice_budgetaire.id, {
        annee: exercice_budgetaire.annee,
        date_debut: exercice_budgetaire.date_debut,
        date_fin: exercice_budgetaire.date_fin,
        encours: exercice_budgetaire.encours
    })).then(response => {
        commit('MODIFIER_EXERCICE_BUDGETAIRE', response.data)
        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué avec success !',
            type: "success"
        })
    }).catch(error => console.log(error))

}


// supprimer exercice budgetaire

export function supprimerExerciceBudgetaire({ commit }, id) {

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_EXERCICE_BUDGETAIRE', id)
            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/delete_exercice_budgetaire/' + id).then(() => dialog.close())
        })
}
// export function EncoursExerciceBudgetaire({ commit }, id) {

//     this.$app.$dialog
//         .confirm("Voulez vouz vraiment supprimer ?.")
//         .then(dialog => {
//             commit('ENCOURS_EXERCICE_BUDGETAIRES', id)
//             // dispatch('getExercicesBudgetaires')
//             // commit('ENCOURS_EXERCICE_BUDGETAIRES', varExerciceBudgetaire.data)
//             // // dialog.loading(false) // stops the proceed button's loader
//             axios.post('/encours_exercice_budgetaire/' + id).then(() => dialog.close())
//         })



// }
// get all nature de section
export function getNatureSection({ commit }) {

    queue.push(() => axios.get('/liste_nature_section').then((response) => {
        commit('GET_NATURE_SECTION', response.data)
    }).catch(error => console.log(error)))


}


// ajouter nature de section
export function ajouterNatureSection({ commit, dispatch }, objetAjout) {
    asyncLoading(axios.post('/ajouter_nature_section', {
        code: objetAjout.code,
        libelle: objetAjout.libelle

    })).then(response => {
        if (response.status == 201) {
            commit('AJOUTER_NATURE_SECTION', response.data)
            dispatch('getNatureSection')
            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué avec success !',
                type: "success"
            })
        }
    }).catch(error => console.log(error))

}
// modififer nature de section
export function modifierNatureSection({ commit, dispatch }, objetModifie) {
    asyncLoading(axios.put('/modifier_nature_section/' + objetModifie.id, {

        code: objetModifie.code,
        libelle: objetModifie.libelle
    })).then(res => {
        commit('MODIFIER_NATURE_SECTION', res.data)
        dispatch('getNatureSection')
        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué avec success !',
            type: "success"
        })
    }).catch(error => console.log(error))

}
// supprimer nature de setion

export function supprimerNatureSection({ commit }, id) {

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_NATURE_SECTION', id)

            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/supprimer_nature_section/' + id).then(() => dialog.close())
        })
}





// get all  section
export function getSection({ commit }) {
    queue.push(() => axios.get('/liste_section').then(response => {
        commit('GET_SECTION', response.data)
    }).catch(error => console.log(error)))

}



// ajouter  section
export function ajouterSection({ commit, dispatch }, objetAjout) {
    asyncLoading(axios.post('/ajouter_section', {
        code: objetAjout.code,
        nom_section: objetAjout.nom_section,
        code_section: objetAjout.code_section,
        naturesection_id: objetAjout.naturesection_id
    })).then(response => {
        if (response.status == 201) {
            commit('AJOUTER_SECTION', response.data)
            dispatch('getSection')
            dispatch('getNatureSection')
            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué avec success !',
                type: "success"
            })
        }
    }).catch(error => console.log(error))

}

export function modifierSection({ commit, dispatch }, objetModifie) {
    asyncLoading(axios.put('/modifier_section/' + objetModifie.id, {

        code: objetModifie.code,
        nom_section: objetModifie.nom_section,
        code_section: objetModifie.code_section,
        naturesection_id: objetModifie.naturesection_id
    })).then(res => {
        commit('MODIFIER_SECTION', res.data)
        dispatch('getSection')
        dispatch('getNatureSection')
        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué avec success !',
            type: "success"
        })
    }).catch(error => console.log(error))

}

// supprimer de setion

export function supprimerSection({ commit, dispatch }, id) {

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_SECTION', id)
            dispatch('getSection')
            dispatch('getNatureSection')
            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/supprimer_section/' + id).then(() => dialog.close())
        })

}







// Action de structure programme
// get all struture programme
export function getStructureProgramme({ commit }) {
    queue.push(() => axios.get('/liste_Structure_Programme').then(response => {
        commit('GET_STRUCTURE_PROGRAMME', response.data)
    }).catch(error => console.log(error)))
}
// ajouter structure programme
export function ajouterStructureProgramme({ commit }, elementAjout) {
    asyncLoading(axios.post('/ajouter_Structure_Programme', {
        code: elementAjout.code,
        libelle: elementAjout.libelle
    })).then(response => {
        if (response.status == 201) {
            commit('AJOUTER_STRUCTURE_PROGRAMME', response.data)

            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué avec success !',
                type: "success"
            })
        }
    }).catch(error => console.log(error))
}

// modifier la structure programme
export function modifierStructureProgramme({ commit }, objetModifie) {
    asyncLoading(axios.put('/modifier_Structure_Programme/' + objetModifie.id, {

        code: objetModifie.code,
        libelle: objetModifie.libelle
    })).then(res => {
        commit('MODIFIER_STRUCTURE_PROGRAMME', res.data)

        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué avec success !',
            type: "success"
        })
    }).catch(error => console.log(error))

}


// souprime structure programme
export function supprimerStructureProgramme({ commit }, id) {


    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_STRUCTURE_PROGRAMME', id)
            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/supprimer_Structure_Programme/' + id).then(() => dialog.close())
        })
}




// get all plan programme
export function getPlanProgramme({ commit }) {
    queue.push(() => axios.get('/liste_Plan_Programme').then(response => {
        commit('GET_PLAN_PROGRAMME', response.data)
    }).catch(error => console.log(error)))


}
// ajouter plan programme
export function ajouterPlanProgramme({ commit, dispatch }, nouveauObjet) {
    asyncLoading(axios.post('/ajouterPlan_Programme', nouveauObjet)).then(response => {
        commit('AJOUTER_PLAN_PROGRAMME', response.data)
        dispatch('getPlanProgramme')

        this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué avec success !',
            type: "success"
        })
    }).catch(error => console.log(error))

}


//********// importer plan programme Lega */

export function importPlanProgramme({ commit }, nouveauObjet) {

    asyncLoading(axios.post('/importProgramme', nouveauObjet)).then(res => {
      if (res.status === 201) {
        this.$app.$notify({
          title: 'success',
          text: 'importaion Effectuée',
          type: "success"
        });
        commit('IMPORT_PLAN_PROGRAMME', res.data)
      }else{
        this.$app.$notify({
          title: 'Erreur',
          text: 'Importaion Echouée ces données existe déjà !',
          type: "Erreur"
        });
      }
    })
      .catch(error => {
        console.log(error)
        this.$app.$notify({
          title: 'Erreur',
          text: "Importaion Echouée ces données existe déjà !",
          type: "error"
        });
      })
  }

// export function importPlanProgramme({ commit }, nouveauObjet) {
//     asyncLoading(axios.post('/importProgramme', nouveauObjet)).then(response => {
//         commit('IMPORT_PLAN_PROGRAMME', response.data)
//         this.$app.$notify({
//             title: 'success ',
//             text: 'Importation effectué avec success !',
//             type: "success"
//         })
//     }).catch(error => console.log(error))
// }


// modifier plan programme
export function modifierPlanProgramme({ commit, dispatch }, nouveauObjet) {
    asyncLoading(axios.put('/modifier_Plan_Programme/' + nouveauObjet.id, {
        code: nouveauObjet.code,
        libelle: nouveauObjet.libelle,
        structure_programme_id: nouveauObjet.structure_programme_id
    })).then(resultat => {
        commit('MODIFIER_PLAN_PROGRAMME', resultat.data)
        dispatch('getPlanProgramme')

        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué avec success !',
            type: "success"
        })
    })
}
// supprimer le plan programme
export function supprimerPlanProgramme({ commit, dispatch }, id) {

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_PLAN_PROGRAMME', id)
            dispatch('getPlanProgramme')

            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/supprimer_Plan_Programme/' + id).then(() => dialog.close())
        })
}








// Action structure administrative
// get all structure administartive
export function getStructureAdministrative({ commit }) {
    queue.push(() => axios.get('/liste_structure_administrative').then(response => {
        commit('GET_STRUCTURE_ADMINISTATIVE', response.data)
    }).catch(error => console.log(error)))

}
// ajouter structure administrative
export function ajouterStructureAdministrative({ commit }, objetAjoute) {
    asyncLoading(axios.post('/ajouter_structure_administrative', {
        niveau: objetAjoute.niveau,
        libelle: objetAjoute.libelle,

    })).then(response => {
        if (response.status == 201) {
            commit('AJOUTER_STRUCTURE_ADMINISTRATIVE', response.data)

            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué avec success !',
                type: "success"
            })
        }
    }).catch(error => console.log(error))
}
// modifier structure administrative
export function modifierStructureAdministrative({ commit }, nouveauObjet) {
    asyncLoading(axios.put('/modifier_structure_administrative/' + nouveauObjet.id, {
        niveau: nouveauObjet.niveau,
        libelle: nouveauObjet.libelle
    })).then(resultat => {
        commit('MODIFIER_STRUCTURE_ADMINISTRATIVE', resultat.data)

        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué avec success !',
            type: "success"
        })
    })
}

// supprimer structure administrative
export function supprimerStructureAdministrative({ commit }, id) {

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_STRUCTURE_ADMINISTRATIVE', id)
            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/supprimer_structure_administrative/' + id).then(() => dialog.close())
        })
}



// get all service gestionnaire
export function getServiceGestionnaire({ commit }) {
    queue.push(() => axios.get('/liste_service_gestionnaire').then(response => {
        commit('GET_SERVICE_GESTIONNAIRE', response.data)
    }).catch(error => console.log(error)))


}
// ajouter  service gestionnaire
// export  function ajouterServiceGestionnaire({commit, dispatch}, nouveauObjet){
// asyncLoading( axios.post('/ajouter_service_gestionnaire', nouveauObjet)).then(response =>{
//      commit('AJOUTER_SERVICE_GESTIONNAIRE', response.data)
//     dispatch('getServiceGestionnaire')
//      this.$app.$notify({
//         title: 'success ',
//         text: 'Enregistrement effectué avec success !',
//         type:"success"
//       })
//  }).catch(error => console.log(error))
// }
EncoursExerciceBudgetaire

export function ajouterServiceGestionnaire({ commit, dispatch }, nouveauObjet) {
    this.$app.$loading(true)
    axios.post('/ajouter_service_gestionnaire', nouveauObjet).then(res => {
        this.$app.$notify({
            title: 'success',
            text: 'Enregistrement effectuer',
            type: "success"
        });
        commit('AJOUTER_SERVICE_GESTIONNAIRE', res.data)
        dispatch('getServiceGestionnaire')
        dispatch('getServiceGestionnaire')

        this.$app.$loading(false)
    }).catch(error => {
        console.log(error)
        this.$app.$loading(false)
        this.$app.$notify({
            title: 'Erreur',
            text: "Ce code existe déja",
            type: "error"
        });
    })
}


// modifier service gestionnaire
export function modifierServiceGestionnaire({ commit, dispatch }, nouveauObjet) {
    asyncLoading(axios.put('/modifier_service_gestionnaire/' + nouveauObjet.id, {
        code: nouveauObjet.code,
        libelle: nouveauObjet.libelle,
        ordre: nouveauObjet.ordre,
        structure_administrative_id: nouveauObjet.structure_administrative_id
    })).then(resultat => {
        commit('MODIFIER_SERVICE_GESTIONNAIRE', resultat.data)
        dispatch('getServiceGestionnaire')
        dispatch('getServiceGestionnaire')
        dispatch('getServiceGestionnaire')
        dispatch('getServiceGestionnaire')
        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué avec success !',
            type: "success"
        })
    })
}
// supprimer service gestionnaire
export function supprimerServiceGestionnaire({ commit, dispatch }, id) {

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_SERVICE_GESTIONNAIRE', id)
            dispatch('getServiceGestionnaire')
            dispatch('getServiceGestionnaire')
            dispatch('getServiceGestionnaire')
            dispatch('getServiceGestionnaire')

            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/supprimer_service_gestionnaire/' + id).then(() => dialog.close())
        })
}



// Action de structure de geographique


// get all struture geographique
export function getStructureGeographique({ commit }) {
    queue.push(() => axios.get('/liste_structure_localgeo').then(resultat => {
        commit('GET_STRUCTURE_GEOGRAPHIQUE', resultat.data)
    }).catch(error => console.log(error)))
}

//  ajouter struture geographique
export function ajouterStructureGeographique({ commit }, nouveauObjet) {
    asyncLoading(axios.post('/ajouter_structure_localgeo', {
        niveau: nouveauObjet.niveau,
        libelle: nouveauObjet.libelle
    })).then(response => {
        commit('AJOUTER_STRUCTURE_GEOGRAPHIQUE', response.data)

        this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué avec success !',
            type: "success"
        })
    }).catch(error => console.log(error))
}
// modifier struture geographique
export function modifierStructureGeographique({ commit }, objetModifie) {
    asyncLoading(axios.put('/modifier_structure_localgeo/' + objetModifie.id, {
        niveau: objetModifie.niveau,
        libelle: objetModifie.libelle
    })).then(response => {
        commit('MODIFIER_STRUCTURE_GEOGRAPHIQUE', response.data)
        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué avec success !',
            type: "success"
        })
    }).catch(error => console.log(error))
}
// supprimer struture geographique
export function supprimerStructureGeographique({ commit }, id) {

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_STRUCTURE_GEOGRAPHIQUE', id)
            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/supprimer_structure_localgeo/' + id).then(() => dialog.close())
        })
}


// Action localisation geographique


// get all localisation geographique
export function getLocalisationGeographique({ commit }) {
    queue.push(() => axios.get('/liste_localisation_geo').then(resultat => {
        commit('GET_LOCALISATION_GEOGRAPHIQUE', resultat.data)
    }).catch(error => console.log(error)))
}

//  ajouter localisation geographique
export function ajouterLocalisationGeographique({ commit, dispatch }, objetElement) {
    asyncLoading(axios.post('/ajouter_localisation_geo', objetElement)).then(response => {
        commit('AJOUTER_LOCALISATION_GEOGRAPHIQUE', response.data)
        dispatch('getLocalisationGeographique')
        this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué avec success !',
            type: "success"
        })
    }).catch(error => console.log(error))
}
// modifier localisation geographique
export function modifierLocalisationGeographique({ commit, dispatch }, objetModifie) {
    asyncLoading(axios.put('/modifier_localisation_geo/' + objetModifie.id, {
        code: objetModifie.code,
        libelle: objetModifie.libelle,
        structure_localisation_geographique_id: objetModifie.structure_localisation_geographique_id,
        longitude: objetModifie.longitude,
        latitude: objetModifie.latitude,
    })).then(response => {
        commit('MODIFIER_LOCALISATION_GEOGRAPHIQUE', response.data)
        dispatch('getLocalisationGeographique')

        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué avec success !',
            type: "success"
        })
    }).catch(error => console.log(error))
}
// supprimer localisation geographique
export function supprimerLocalisationGeographique({ commit, dispatch }, id) {

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_LOCALISATION_GEOGRAPHIQUE', id)
            dispatch('getLocalisationGeographique')

            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/supprimer_localisation_geo/' + id).then(() => dialog.close())
        })
}



//// chapitre //


// get all chapitre
export function getChapitre({ commit }) {
    queue.push(() => axios.get('/liste_chapitre').then(response => {
        commit('GET_CHAPITRE', response.data)
    }).catch(error => console.log(error)))


}
// ajouter  chapitre
export function ajouterChapitre({ commit }, nouveauObjet) {
    asyncLoading(axios.post('/ajouter_chapitre', {
        code: nouveauObjet.code,
        libelle: nouveauObjet.libelle,
        localisation_geographique_id: nouveauObjet.localisation_geographique_id,
        servicegestionnaires_id: nouveauObjet.servicegestionnaires_id
    })).then(response => {
        commit('AJOUTER_CHAPITRE', response.data)

        this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué avec success !',
            type: "success"
        })

    }).catch(error => console.log(error))
}
// modifier chapitre
export function modifierChapitre({ commit }, nouveauObjet) {
    asyncLoading(axios.put('/modifier_chapitre/' + nouveauObjet.id, {
        codeChapitre: nouveauObjet.codeChapitre,
        libelle: nouveauObjet.libelle,
        localisation_geographique_id: nouveauObjet.localisation_geographique_id,
        servicegestionnaires_id: nouveauObjet.servicegestionnaires_id

    })).then(resultat => {
        commit('MODIFIER_CHAPITRE', resultat.data)

        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué avec success !',
            type: "success"
        })
    })
}
// supprimer chapitre
export function supprimerChapitre({ commit }, id) {

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_CHAPITRE', id)
            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/supprimer_chapitre/' + id).then(() => dialog.close())
        })
}




// Action grande nature///

// get all grande nature
export async function getGrandeNature({ commit }) {
    await axios.get('/liste_grande_nature').then(resultat => {
        commit('GET_GRANDE_NATURE', resultat.data)
    }).catch(error => console.log(error))
}

//  ajouter grande nature
export function ajouterGrandeNature({ commit }, nouveauObjet) {
    asyncLoading(axios.post('/add_grande_nature', {
        code: nouveauObjet.code,
        libelle: nouveauObjet.libelle
    })).then(response => {
        commit('AJOUTER_GRANDE_NATURE', response.data)

        this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué avec success !',
            type: "success"
        })
    }).catch(error => console.log(error))
}
// modifier grande nature
export function modifierGrandeNature({ commit }, objetModifie) {
    asyncLoading(axios.put('/update_grande_nature/' + objetModifie.id, {
        code: objetModifie.code,
        libelle: objetModifie.libelle
    })).then(response => {
        commit('MODIFIER_GRANDE_NATURE', response.data)

        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué avec success !',
            type: "success"
        })
    }).catch(error => console.log(error))
}
// supprimer grande nature
export function supprimerGrandeNature({ commit }, id) {

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_GRANDE_NATURE', id)
            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/delete_grande_nature/' + id).then(() => dialog.close())
        })
}

// get all type unite administrative
export function getTypeUniteAdministrative({ commit }) {
    queue.push(() => axios.get('/type_uas').then((response) => {
        commit('GET_TYPE_UNITE_ADMINISTRATIVE', response.data)

    }).catch(error => console.log(error)))
}


// ajouter type ua
export function ajouterTypeUniteAdministrative({ commit }, objetAjoute) {
    asyncLoading(axios.post('/ajouter_type_ua', {

        libelle: objetAjoute.libelle
    })).then(response => {
        if (response.status == 201) {
            commit("AJOUTER_TYPE_UNITE_ADMINISTRATIVE", response.data);

            this.$app.$notify({
                title: 'Success',
                text: 'Enregistrement Effectué avec Succès!',
                type: "success"
            })
        }
    });
}

// supprimer type ua
export function supprimerTypeUniteAdministrative({ commit, dispatch }, id) {
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit("SUPPRIMER_TYPE_UNITE_ADMINISTRATIVE", id);
            dispatch('getTypeUniteAdministrative')

            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete("/supprimer_type_ua/" + id).then(() => dialog.close());
        });
}

// modifier type ua 
export function modifierTypeUniteAdministrative({ commit, dispatch }, typeua) {
    asyncLoading(axios.put('/modifier_type_ua/' + typeua.id, {

        libelle: typeua.libelle
    })).then(response => {
        commit("MODIFIER_TYPE_UNITE_ADMINISTRATIVE", response.data);
        dispatch('getTypeUniteAdministrative')
        this.$app.$notify({
            title: 'Success',
            text: 'Modification Effectué avec Succès!',
            type: "success"
        })
    });
}

export function EncoursExerciceBudgetaire({ commit, dispatch }, objetAjout) {

    this.$app.$dialog
        .confirm("Voulez vous changer année en cours ?.")
        .then(dialog => {

            asyncLoading(axios.post('/encours_exercice_budgetaire', {

                id: objetAjout,

            })).then(varExerciceBudgetaire => {
                // if (varExerciceBudgetaire.status == 201) {
                commit('ENCOURS_EXERCICE_BUDGETAIRES', varExerciceBudgetaire.data)
                dispatch('getExercicesBudgetaires')
                this.$app.$notify({
                    title: 'success ',
                    text: 'Option Effectué avec success !',
                    type: "success"
                })
                // }
            }).catch(error => console.log(error))
            dialog.close()
        });


}

export function EncoursTaux({ commit, dispatch }, objetAjout) {

    this.$app.$dialog
        .confirm("Voulez vous changer le taux en cours ?.")
        .then(dialog => {

            asyncLoading(axios.post('/encours_taux', {

                id: objetAjout,

            })).then(varExerciceBudgetaire => {
                // if (varExerciceBudgetaire.status == 201) {
                commit('ENCOURS_TAUX', varExerciceBudgetaire.data)
                dispatch('getTaux')
                this.$app.$notify({
                    title: 'success ',
                    text: 'Option Effectué avec success !',
                    type: "success"
                })
                // }
            }).catch(error => console.log(error))
            dialog.close()
        });


}

// get all exercices budgetaires 
export function getTaux({ commit }) {

    queue.push(() => axios.get('/liste_taux').then((response) => {
        commit('GET_TAUX', response.data)

    }).catch(error => console.log(error)))


}
// ajouter execice budgetaire
export function ajouterTaux({ commit }, objetAjout) {
    asyncLoading(axios.post('/add_taux', {
        libelle: objetAjout.libelle,
        arrondit: objetAjout.arrondit,
        encours: objetAjout.encours,

    })).then(varExerciceBudgetaire => {
        if (varExerciceBudgetaire.status == 201) {
            commit('AJOUTER_TAUX', varExerciceBudgetaire.data)

            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué avec success !',
                type: "success"
            })
        }
    }).catch(error => console.log(error))
}


//modification exercice budgetaire
export function modifierTaux({ commit }, exercice_budgetaire) {

    asyncLoading(axios.put('/update_taux/' + exercice_budgetaire.id, {
        libelle: exercice_budgetaire.libelle,
        arrondit: exercice_budgetaire.arrondit,
        encours: exercice_budgetaire.encours
    })).then(response => {
        commit('MODIFIER_TAUX', response.data)
        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué avec success !',
            type: "success"
        })
    }).catch(error => console.log(error))

}


// supprimer exercice budgetaire

export function supprimerTaux({ commit }, id) {

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_TAUX', id)
            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/delete_taux/' + id).then(() => dialog.close())
        })
}





export function getRegimeImpositions({ commit }) {
    queue.push(() => axios.get('/liste_RegimeImposition').then((response) => {
        commit('GET_REGIMEIMPOSITION', response.data)

    }).catch(error => console.log(error)))
}


// ajouter titre
export function ajouterRegimeImpositions({ commit }, objetAjoute) {
    asyncLoading(axios.post('/ajouter_RegimeImposition', {

        libelle: objetAjoute.libelle
    })).then(res => {
        if (res.status == 201) {
            commit('AJOUTER_REGIMEIMPOSITION', res.data)

            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué avec success !',
                type: "success"
            })

        }
    }).catch(error => console.log(error))
}

// supprimer titre
export function supprimerRegimeImpositions({ commit }, id) {

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_REGIMEIMPOSITION', id)
            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/supprimer_RegimeImposition/' + id).then(() => dialog.close())
        })
}

// modifier titre 
export function modifierRegimeImpositions({ commit }, titre) {
    asyncLoading(axios.put('/modifier_RegimeImposition/' + titre.id, {
        code: titre.code,
        libelle: titre.libelle
    })).then(response => {
        commit('MODIFIER_REGIMEIMPOSITION', response.data)

        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué avec success !',
            type: "success"
        })
    }).catch(error => console.log(error))

}








export function getFormeJuridiques({ commit }) {
    queue.push(() => axios.get('/liste_Formejuridique').then((response) => {
        commit('GET_FORMEJURIDIQUE', response.data)

    }).catch(error => console.log(error)))
}


// ajouter titre
export function ajouterFormeJuridiques({ commit }, objetAjoute) {
    asyncLoading(axios.post('/ajouter_Formejuridique', {

        libelle: objetAjoute.libelle
    })).then(res => {
        if (res.status == 201) {
            commit('AJOUTER_FORMEJURIDIQUE', res.data)

            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué avec success !',
                type: "success"
            })

        }
    }).catch(error => console.log(error))
}

// supprimer titre
export function supprimerFormeJuridiques({ commit }, id) {

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_FORMEJURIDIQUE', id)
            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/supprimer_Formejuridique/' + id).then(() => dialog.close())
        })
}

// modifier titre 
export function modifierFormeJuridiques({ commit }, titre) {
    asyncLoading(axios.put('/modifier_Formejuridique/' + titre.id, {
        code: titre.code,
        libelle: titre.libelle
    })).then(response => {
        commit('MODIFIER_FORMEJURIDIQUE', response.data)

        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué avec success !',
            type: "success"
        })
    }).catch(error => console.log(error))

}









// Action de structure programme
// get all struture programme
export function getStructurePays({ commit }) {
    queue.push(() => axios.get('/liste_Structure_Pays').then(response => {
        commit('GET_STRUCTURE_PAYS', response.data)
    }).catch(error => console.log(error)))
}
// ajouter structure Pays
export function ajouterStructurePays({ commit }, elementAjout) {
    asyncLoading(axios.post('/ajouter_Structure_Pays', {
        niveau: elementAjout.niveau,
        libelle: elementAjout.libelle
    })).then(response => {
        if (response.status == 201) {
            commit('AJOUTER_STRUCTURE_PAYS', response.data)

            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué avec success !',
                type: "success"
            })
        }
    }).catch(error => console.log(error))
}

// modifier la structure Pays
export function modifierStructurePays({ commit }, objetModifie) {
    asyncLoading(axios.put('/modifier_Structure_Pays/' + objetModifie.id, {

        niveau: objetModifie.niveau,
        libelle: objetModifie.libelle
    })).then(res => {
        commit('MODIFIER_STRUCTURE_PAYS', res.data)

        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué avec success !',
            type: "success"
        })
    }).catch(error => console.log(error))

}


// souprime structure Pays
export function supprimerStructurePays({ commit }, id) {


    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_STRUCTURE_PAYS', id)
            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/supprimer_Structure_Pays/' + id).then(() => dialog.close())
        })
}




// get all plan programme
export function getPlanPays({ commit }) {
    queue.push(() => axios.get('/liste_Plan_Pays').then(response => {
        commit('GET_PLAN_PAYS', response.data)
    }).catch(error => console.log(error)))


}
// ajouter plan Pays
export function ajouterPlanPays({ commit, dispatch }, nouveauObjet) {
    asyncLoading(axios.post('/ajouterPlan_Pays', nouveauObjet)).then(response => {
        commit('AJOUTER_PLAN_PAYS', response.data)
        dispatch('getPlanPays')

        this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué avec success !',
            type: "success"
        })
    }).catch(error => console.log(error))
}


// modifier plan Pays
export function modifierPlanPays({ commit, dispatch }, nouveauObjet) {
    asyncLoading(axios.put('/modifier_Plan_Pays/' + nouveauObjet.id, {
        code: nouveauObjet.code,
        libelle: nouveauObjet.libelle,
        structurepays_id: nouveauObjet.structurepays_id
    })).then(resultat => {
        commit('MODIFIER_PLAN_PAYS', resultat.data)
        dispatch('getPlanPays')

        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué avec success !',
            type: "success"
        })
    })
}
// supprimer le plan Pays
export function supprimerPlanPays({ commit, dispatch }, id) {

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_PLAN_PAYS', id)
            dispatch('getPlanPays')

            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/supprimer_Plan_Pays/' + id).then(() => dialog.close())
        })
}







// Action de structure programme
// get all struture programme
export function getStructureOrganigrammeUa({ commit }) {
    queue.push(() => axios.get('/liste_Structure_OrganigrammeUa').then(response => {
        commit('GET_STRUCTURE_ORGANIGRAMME_UA', response.data)
    }).catch(error => console.log(error)))
}
// ajouter structure Pays
export function ajouterStructureOrganigrammeUa({ commit }, elementAjout) {
    asyncLoading(axios.post('/ajouter_Structure_OrganigrammeUa', {
        niveau: elementAjout.niveau,
        libelle: elementAjout.libelle
    })).then(response => {
        if (response.status == 201) {
            commit('AJOUTER_STRUCTURE_ORGANIGRAMME_UA', response.data)

            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué avec success !',
                type: "success"
            })
        }
    }).catch(error => console.log(error))
}

// modifier la structure Pays
export function modifierStructureOrganigrammeUa({ commit }, objetModifie) {
    asyncLoading(axios.put('/modifier_Structure_OrganigrammeUa/' + objetModifie.id, {

        niveau: objetModifie.niveau,
        libelle: objetModifie.libelle
    })).then(res => {
        commit('MODIFIER_STRUCTURE_ORGANIGRAMME_UA', res.data)

        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué avec success !',
            type: "success"
        })
    }).catch(error => console.log(error))

}


// souprime structure Pays
export function supprimerStructureOrganigrammeUa({ commit }, id) {


    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_STRUCTURE_ORGANIGRAMME_UA', id)
            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/supprimer_Structure_OrganigrammeUa/' + id).then(() => dialog.close())
        })
}




// get all plan programme
export function getPlanOrganigrammeUa({ commit }) {
    queue.push(() => axios.get('/liste_Plan_OrganigrammeUa').then(response => {
        commit('GET_PLAN_ORGANIGRAMME_UA', response.data)
    }).catch(error => console.log(error)))


}
// ajouter plan Pays
export function ajouterPlanOrganigrammeUa({ commit, dispatch }, nouveauObjet) {
    asyncLoading(axios.post('/ajouterPlan_OrganigrammeUa', nouveauObjet)).then(response => {
        commit('AJOUTER_PLAN_ORGANIGRAMME_UA', response.data)
        dispatch('getPlanOrganigrammeUa')

        this.$app.$notify({
            title: 'success ',
            text: 'Enregistrement effectué avec success !',
            type: "success"
        })
    }).catch(error => console.log(error))
}


// modifier plan Pays
export function modifierPlanOrganigrammeUa({ commit, dispatch }, nouveauObjet) {
    asyncLoading(axios.put('/modifier_Plan_OrganigrammeUa/' + nouveauObjet.id, {
        code: nouveauObjet.code,
        libelle: nouveauObjet.libelle,
        structure_organigramme_ua_id: nouveauObjet.structure_organigramme_ua_id,
        ua_id: nouveauObjet.ua_id,
        serviceua_id: nouveauObjet.serviceua_id,
        normeequipement: nouveauObjet.normeequipement,
        historiqueequipement: nouveauObjet.historiqueequipement,
        montantequipement: nouveauObjet.montantequipement
    })).then(resultat => {
        commit('MODIFIER_PLAN_ORGANIGRAMME_UA', resultat.data)
        dispatch('getPlanOrganigrammeUa')

        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué avec success !',
            type: "success"
        })
    })
}
// supprimer le plan Pays
export function supprimerPlanOrganigrammeUa({ commit, dispatch }, id) {

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_PLAN_ORGANIGRAMME_UA', id)
            dispatch('getPlanOrganigrammeUa')
            dispatch('getPlanOrganigrammeUa')
            dispatch('getPlanOrganigrammeUa')
            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/supprimer_Plan_OrganigrammeUa/' + id).then(() => dialog.close())

        })
}




export function getLocalisationGeographiqueAll({ commit }) {
    queue.push(() => axios.get('/localisation_geographique').then((response) => {
        commit('GET_LOCALISATION_GEO_ALL', response.data)

    }).catch(error => console.log(error)))
}



/**
 * Action infrastructure
 * **/

// get all titres
export function getInfrastructure({ commit }) {
    queue.push(() => axios.get('/infrastructure').then((response) => {
        commit('GET_INFRASTUCTURE', response.data)

    }).catch(error => console.log(error)))
}


// ajouter titre
export function ajouterInfrastructure({ commit }, objetAjoute) {
    asyncLoading(axios.post('/infrastructure', objetAjoute)).then(res => {
        if (res.status == 201) {
            commit('AJOUTER_INFRASTUCTURE', res.data)
            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué avec success !',
                type: "success"
            })

        }
    }).catch(error => console.log(error))
}

// supprimer titre
export function supprimerInfrastructure({ commit }, id) {

    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_INFRASTUCTURE', id)
            // // dialog.loading(false) // stops the proceed button's loader
            axios.delete('/infrastructure/' + id).then(() => dialog.close())
        })
}

// modifier titre
export function modifierInfrastructure({ commit }, objet) {
    asyncLoading(axios.put('/infrastructure/' + objet.id, objet)).then(response => {
        commit('MODIFIER_INFRASTUCTURE', response.data)
        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué avec success !',
            type: "success"
        })
    }).catch(error => console.log(error))

}


/***
 * Fin
 */

