import apiGuest from './urls/urlGuest'
import router from '../../../routes/index'
import axios from '../../../../urls/api_parametrage/api'
var housecall = require('housecall');
var queue = housecall({ concurrency: 2, cooldown: 1000 });
import { asyncLoading } from 'vuejs-loading-plugin'





export function login({commit}, user){
    if(user.email && user.password){
       // this.loader = true;
      // commit('SET_LOADER_TRUE')
    //  this.error = false
        commit('SET_ERROR_FALSE')
            //   this.loginError = false;
              asyncLoading( apiGuest.post('/login', {
                email: user.email,
                password: user.password
            })).then(response => {
                console.log(response)
                    commit('LOGIN_USER', response.data.user)
                    localStorage.setItem('token', response.data.access_token)
                   localStorage.setItem("user",JSON.stringify(response.data.user) )
                   // localStorage.setItem('user', response.data.user)
                  // commit('SET_LOADER_FALSE')

                     router.push({ name: 'Titre' })                   
                   
               }).catch((error) => {
                  // this.loginError = true
                   if (error.response.status === 401 || error.response.status === 403) {
                   commit('SET_ERROR_MESSAGE', error.response.data.message)
                     commit('SET_LOADER_FALSE')
                  //   //  this.error = false
                     commit('SET_ERROR_TRUE')
                    //this.$router.push({name: 'login'})
                }
               });
      }else if(!user.email){
        commit('SET_CHAMP_VIDE_TRUE')
      }else if(!user.password){
        commit('SET_CHAMP_VIDE_TRUE')
      }
}

    export function logoutUser({commit}){
      localStorage.removeItem('token')
        localStorage.removeItem('user')
     // localStorage.removeItem('user')
      commit('LOGOUT_USER')
      router.push({ name: 'Login' })                   

    }


    export  function  getTypeUa({commit}) {

      queue.push(() =>  axios.get('/type_uas').then(response => {
              // console.log(response.data)
              commit('GET_TYPE_UA', response.data)
          }).catch(error => console.log(error))
      );
  
  
  }
  
  // ajouter type acte personnel
  export  function ajouterTypeUa({commit}, objetAjoute){
      axios.post('/ajouter_type_ua', objetAjoute ).then(res => {
          if(res.status == 201){
              commit('AJOUTER_TYPE_UA', res.data)
          }
      }).catch(error => console.log(error))
  }
  
  // supprimer type act
  export function supprimerTypeUa({commit}, id){
      let conf = confirm("Voulez vouz vraiment supprimer ?")
  
      if(conf){
          commit('SUPPRIMER_TYPE_UA', id)
          axios.delete('/supprimer_type_ua/' + id)
  
      }
  }
  
  export function modifierFonction({commit}, formData){
      axios.put('/modifier_type_ua' ,formData).then(response => {
          commit('MODIFIER_TYPE_UA', response.data)
      })
  
  }


/***
 * Action role
 */

export function getRole({ commit }) {
    queue.push(() => apiGuest.get('/roles').then((response) => {
        commit('GET_ROLE', response)

    }).catch(error => console.log(error)))
}
/***
 * Fin action role
 */


/***
 * Action module
 */

export function getModule({ commit }) {
    queue.push(() => apiGuest.get('/modules').then((response) => {
        commit('GET_MODULE', response)

    }).catch(error => console.log(error)))
}



/***
 * Fin action module
 */

/***
 * Action entite
 */

export function getEntite({ commit }) {
    queue.push(() => apiGuest.get('/entites').then((response) => {
        commit('GET_ENTITE', response)

    }).catch(error => console.log(error)))
}
/***
 * Fin action entite
 */

/***
 * Action autorisation
 */

export function getAtorisation({ commit }) {
    queue.push(() => apiGuest.get('/autorisations').then((response) => {
        commit('GET_AUTORISATION', response.data)

    }).catch(error => console.log(error)))
}
/***
 * Fin action autorisation
 */


/**
 * Action controller finnancier
 * @param commit
 */
export function getUtilisateur({ commit }) {
    queue.push(() => apiGuest.get('/users').then((response) => {
        commit('GET_UTILISATEUR', response.data)

    }).catch(error => console.log(error)))
}


export function ajouterControllerFinnancier({ commit }, formData) {
    asyncLoading(apiGuest.post('/avenant', formData)).then(response => {
        if (response.status == 201) {
            // console.log(response.data)
            commit('AJOUTER_UTILISATEUR', response.data)

            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué !',
                type: "success"
            })
        }

    }).catch(error => console.log(error))
}



export function modifierControllerFinnancier({ commit }, element_modifie) {
    asyncLoading(apiGuest.put('/avenant', element_modifie)).then(response => {
        commit('MODIFIER_UTILISATEUR', response.data)
        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué !',
            type: "success"
        })
    }).catch(error => console.log(error))
}

export function supprimerControllerFinnancier({ commit }, id) {
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_UTILISATEUR', id)
            // // dialog.loading(false) // stops the proceed button's loader
            apiGuest.delete('/avenant/' + id).then(() => dialog.close())
        })

}

/***
 * Fin action
 */
