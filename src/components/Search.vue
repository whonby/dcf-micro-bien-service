<template>
 <div>
   
                         

  <div id="search">
   

       <div class="btn-group">
              <button data-toggle="dropdown"
                style="color: white;"
              class="tip-bottom btn dropdown-toggle">MON PROFIL <span class="caret"></span></button>
              <ul class="dropdown-menu">
                
 <li >
    <router-link tag="a" :to="{ name: 'Profil' }">
   <i class="fa fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>Profil
    </router-link>
 </li>   
                <li>
                    <router-link tag="a" :to="{ name: 'Logout' }">
                  <i class="fa fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                  Déconnexion</router-link>                  
                </li>
 
              </ul>

            </div>
  </div>
                <!--<input type="text" style="background-color: black;" readonly />-->


  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {

created(){
  
 // console.log(JSON.stringify(this.$store.state.Utilisateurs.user))
//console.log(this)

},
 methods: {
      //afiicher modal ajouter
   afficherModalAjouterActeDepense() {
       this.$("#myAlert").modal({
           backdrop: "static",
           keyboard: false
       });
   },
 },

  computed: {
    ...mapGetters('Utilisateurs', ['user']),

    
afficheNomUtilisateur(){
  let objLinea = localStorage.getItem("Users");
let objJson = JSON.parse(objLinea);
return objJson.name

},
  }
}
</script>
