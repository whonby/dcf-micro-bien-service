import apiGuest from '../../../request/login'
import router from '../../../routes/index'
import axios from '../../../request/parametreGeneraux'
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
                       this.$app.$notify({
                           title: 'error',
                           text: error.response.data.message,
                           type:"error"
                       })
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
        let objetData=response.data
            commit('GET_AFFECTATION', response.data)
        let objet=localStorage.getItem('Users');
        let user=JSON.parse(objet)
       // console.log(objetData)
        if (user.user_role.role.code_role!="SUPER_ADMIN"){
            let affectationUsers=objetData

            if (objetData){
                affectationUsers =objetData.filter(item=>{
                    if(item.date_fin==null && item.user_id==user.id){
                        return item
                    }
                })
                console.log(affectationUsers)
                console.log("..........getAffectation...........")
                commit('GET_UNITEADMIN_BY_USER', affectationUsers)
            }

        }else {
            commit('GET_UNITEADMIN_BY_USER', objetData)
        }


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
export function GroupeUser({commit}, id){
    this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_AFFECTATION', id)
            apiGuest.delete('/affectations/' + id).then(() => dialog.close() )

        })
}

export function modifierAffection({commit}, formData){
    return  asyncLoading(apiGuest.put('/affectations', formData )).then(res => {
        commit('MODIFIER_AFFECTATION', res.data)
        this.$app.$notify({
            title: 'success ',
            text: 'Modification effectué !',
            type:"success"
        })
    }).catch(error => console.log(error))

}


export  function  getAffectationGroupeUser({commit}) {

    queue.push(() =>  apiGuest.get('/liste_aff').then(response => {
            // console.log(response.data)
            commit('GET_AFFECTAION_GROUPE_USER', response.data)
        }).catch(error => console.log(error))
    );


}

export  function ajouterAffectationMultiple({commit}, objetAjoute){
    return  asyncLoading(apiGuest.post('/affectations_multiple', objetAjoute )).then(res => {
         if(res.status == 201){
             commit('AJOUTER_AFFECTATION_GROUPE_USER', res.data)
             this.$app.$notify({
                 title: 'success ',
                 text: 'Enregistrement effectué !',
                 type:"success"
             })
         }
     }).catch(error => console.log(error))
 }

 export function supprimerAffectationGroupeUser({commit,dispatch}, id){
    this.$app.$dialog
        .confirm("Voulez vous desactivé?")
        .then(dialog => {
            dispatch('getAffectationGroupeUser')
            commit('SUPPRIMER_AFFECTATION_GROUPE_USER', id)
            this.$app.$notify({
                title: 'success ',
                text: 'Desactivation effectuéé avec success!',
                type:"success"
              })
            apiGuest.delete('/list_aff/' + id).then(() => dialog.close() )

        })
}

 


export function getUniteAdminUser({commit}, objet){
  //  console.log(id)
    commit('GET_UNITEADMIN_BY_USER', objet)
}


export function ajouterSauvegardePhoto({ commit}, objetAjoute, config) {
    this.$app.$loading(true)
    axios.post('/users', objetAjoute, config).then(res => {
        if (res.status == 201) {
            this.$app.$notify({
                title: 'success',
                text: 'Enregistrement effectuer',
                type: "success"
            });
            commit('MODIFIER_UTILISATEUR', res.data)
           
            this.$app.$loading(false)
        }
    }).catch(error => {
        console.log(error)
        this.$app.$loading(false)
        this.$app.$notify({
            title: 'Erreur',
            text: "Erreur c'est produit lors de l'enregistrement",
            type: "error"
        });
    })
}



/**
 * Action equipe cf
 * **/

export  function  getEquipeCF({commit}) {

    queue.push(() =>  apiGuest.get('/equipe_cf').then(response => {
            // console.log(response.data)
            commit('GET_EQUIPE_CF', response.data)
        }).catch(error => console.log(error))
    );


}


export  function ajouterEquipeCF({commit,dispatch}, objetAjoute){
    asyncLoading(apiGuest.post('/equipe_cf', objetAjoute )).then(res => {
        if(res.status == 201){
            dispatch("getUtilisateurs")
            dispatch("getEquipeCF")
            commit('AJOUTER_EQUIPE_CF', res.data)
            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué !',
                type:"success"
            })
        }
    }).catch(error => console.log(error))
}


export function supprimerEquipeCF({commit}, id){
  this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_EQUIPE_CF', id)
            apiGuest.delete('/equipe_cf/' + id).then(() => dialog.close() )

        })
}

export function modifierEquipeCF({commit}, formData){
    apiGuest.put('/equipe_cf' ,formData).then(response => {
        commit('MODIFIER_EQUIPE_CF', response.data)
    })

}


export function modifierChangeProfile({commit}, formData){
    apiGuest.put('/update_profile' ,formData).then(response => {
        commit('MODIFIER_UTILISATEUR', response.data)
    })
}

export function changePasswordUsers({commit}, formData){
    apiGuest.put('/changer_password' ,formData).then(response => {
        commit('MODIFIER_UTILISATEUR', response.data)
    })
}

export function encienPasswordSaisi({commit}, formData){
    apiGuest.post('/login', formData).then(response => {
        console.log(response)
        commit('ANCIEN_PASSWORD', false)


    }).catch((error) => {

        commit('ANCIEN_PASSWORD', true)
        console.log(error)

    });

}



export  function activeMenuModuleSidcf({commit}, objetAjoute){
    commit('MENU_MODULE_SIDCF', objetAjoute)
}


export  function  getModule({commit}) {

    queue.push(() =>  apiGuest.get('/modules').then(response => {
            // console.log(response.data)
            commit('GET_MODULE', response.data)
        }).catch(error => console.log(error))
    );


}

export  function ajouterModule({commit,dispatch}, objetAjoute){
    asyncLoading(apiGuest.post('/modules', objetAjoute )).then(res => {
        if(res.status == 201){
           // dispatch("getUtilisateurs")
            dispatch("getModule")
            commit('AJOUTER_MODULE', res.data)
            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué !',
                type:"success"
            })
        }
    }).catch(error => console.log(error))
}


export function supprimerModule({commit}, id){
  this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_MODULE', id)
            apiGuest.delete('/modules/' + id).then(() => dialog.close() )

        })
}

export function modifierModule({commit}, formData){
    apiGuest.put('/modules' ,formData).then(response => {
        commit('MODIFIER_MODULE', response.data)
    })

}

// action menu
export  function  getMenu({commit}) {

    queue.push(() =>  apiGuest.get('/menu').then(response => {
            // console.log(response.data)
            commit('GET_MENU', response.data)
        }).catch(error => console.log(error))
    );


}

export  function ajouterMenu({commit,dispatch}, objetAjoute){
    asyncLoading(apiGuest.post('/menu', objetAjoute )).then(res => {
        if(res.status == 201){
           // dispatch("getUtilisateurs")
            dispatch("getMenu")
            commit('AJOUTER_MENU', res.data)
            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué !',
                type:"success"
            })
        }
    }).catch(error => console.log(error))
}


export function supprimerMenu({commit}, id){
  this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_MENU', id)
            apiGuest.delete('/menu/' + id).then(() => dialog.close() )

        })
}

export function modifierMenu({commit}, formData){
    apiGuest.put('/menu' ,formData).then(response => {
        commit('MODIFIER_MENU', response.data)
    })

}
// action pour le groupe


export  function  getGroupe({commit}) {

    queue.push(() =>  apiGuest.get('/liste_groupe').then(response => {
            // console.log(response.data)
            commit('GET_GROUPE', response.data)
        }).catch(error => console.log(error))
    );


}


export  function ajouterGroupe({commit,dispatch}, objetAjoute){
    asyncLoading(apiGuest.post('/liste_groupe', objetAjoute )).then(res => {
        if(res.status == 201){
           // dispatch("getUtilisateurs")
            dispatch("getGroupe")
            commit('AJOUTER_GROUPE', res.data)
            this.$app.$notify({
                title: 'success ',
                text: 'Enregistrement effectué !',
                type:"success"
            })
        }
    }).catch(error => console.log(error))
}


export function supprimerGroupe({commit}, id){
  this.$app.$dialog
        .confirm("Voulez vouz vraiment supprimer ?.")
        .then(dialog => {
            commit('SUPPRIMER_GROUPE', id)
            apiGuest.delete('/liste_groupe/' + id).then(() => dialog.close() )

        })
}

export function modifierGroupe({commit}, formData){
    apiGuest.put('/liste_groupe' ,formData).then(response => {
        commit('MODIFIER_GROUPE', response.data)
    })

}
export function activationGroupe({commit, dispatch}, elementAjout){
      apiGuest.post('/activedGroupe',{
        id:elementAjout
      }).then(varActivationUser =>{
        commit('ACTIVATION_GROUPE', varActivationUser.data)
        dispatch('getGroupe')
        // this.$app.$notify({
        //   title: 'success ',
        //   text: 'utilisateur selectionner avec success!',
        //   type:"success"
        // })
      }).catch(error => console.log(error))
      //dialog.close()
    //})
   
  }


