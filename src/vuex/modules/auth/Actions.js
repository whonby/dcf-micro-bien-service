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
              
                    commit('LOGIN_USER', response.data.user)
                    localStorage.setItem('token', response.data.access_token)
                     localStorage.setItem("Users",JSON.stringify(response.data.user))
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
      localStorage.removeItem('Users')
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





export  function  getUtilisateurs({commit}) {

    queue.push(() =>  apiGuest.get('/users').then(response => {
            // console.log(response.data)
            commit('GET_UTILISATEUR', response.data)
        }).catch(error => console.log(error))
    );


}

// ajouter type acte personnel
export  function ajouterUtilisateur({commit}, objetAjoute){
    asyncLoading(apiGuest.post('/register', objetAjoute )).then(res => {
        if(res.status == 201){
            commit('AJOUTER_UTILISATEUR', res.data)
            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué !',
                type:"success"
            })
        }
    }).catch(error => console.log(error))
}

// supprimer type act
export function supprimerUtilisateur({commit}, id){


    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_UTILISATEUR', id)
            apiGuest.delete('/users/' + id).then(() => dialog.close() )

        })
}

export function modifierUtilisateur({commit}, formData){
    apiGuest.put('/users' ,formData).then(response => {
        commit('MODIFIER_UTILISATEUR', response.data)
    })

}



export  function  getRoles({commit}) {

    queue.push(() =>  apiGuest.get('/roles').then(response => {
            // console.log(response.data)
            commit('GET_ROLES', response.data)
        }).catch(error => console.log(error))
    );


}






export  function  getAffectation({commit}) {

    queue.push(() =>  apiGuest.get('/affectations').then(response => {
            // console.log(response.data)
            commit('GET_AFFECTATION', response.data)
        }).catch(error => console.log(error))
    );


}

// ajouter type acte personnel
export  function ajouterAffectation({commit}, objetAjoute){
   return  asyncLoading(apiGuest.post('/affectations', objetAjoute )).then(res => {
        if(res.status == 201){
            commit('AJOUTER_AFFECTATION', res.data)
            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué !',
                type:"success"
            })
        }
    }).catch(error => console.log(error))
}

// supprimer type act
export function supprimerAffectation({commit}, id){
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_AFFECTATION', id)
            apiGuest.delete('/affectations/' + id).then(() => dialog.close() )

        })
}

export function modifierAffection({commit}, formData){
    apiGuest.put('/affectations' ,formData).then(response => {
        commit('MODIFIER_AFFECTATION', response.data)
    })

}
