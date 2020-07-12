<template>
 <div>
   
                         <div id="myAlert" class="modal hide tailModal"  >
           <div class="modal-header">
               <button data-dismiss="modal" class="close" type="button">×</button>
               <h3>Ajouter Utilisateur</h3>
           </div>
           <div class="modal-body">
                <table class="table table-bordered table-striped">
               <tr>
                    <td>
 <div class="control-group">
     <label>Créer Utilisateur </label>
     <div class="controls">
         <input type="text"  readonly   class="span4" placeholder="Nom utilisateur" >
     </div>
 </div>
   </td>
   </tr>
               <tr>
                   <td>
<div class="control-group">
    <label>Ancien mot de passe </label>
    <div class="controls">
        <input type="text"  readonly   class="span4" placeholder="Saisir Ancien mot de passe" >
    </div>
</div>
  </td>
  </tr>
                <tr>
                   <td>
<div class="control-group">
    <label>Nouveau mot de passe </label>
    <div class="controls">
        <input type="text"  readonly   class="span4" placeholder="Saisir nouveau mot de passe" >
    </div>
</div>
  </td>
  </tr>
                <tr>
                   <td>
<div class="control-group">
    <label>Confirmer nouveau mot de passe </label>
    <div class="controls">
        <input type="text"  readonly   class="span4" placeholder="Saisir confirmation mtp" >
    </div>
</div>
  </td>
  </tr>
 
  
                </table>    
           </div>
           
           <div class="modal-footer"> 
             
 <button 
             @click.prevent="ajouterBanqueUaLocal" class="btn btn-primary"
             href="#">Valider</button>
             <button data-dismiss="modal" class="btn" href="#">Fermer</button>
</div>
       </div>

  <div id="search">
   

       <div class="btn-group" v-if="$store.state.Utilisateurs.user !== null">
              <button data-toggle="dropdown"
                style="color: white;"
              class="tip-bottom btn dropdown-toggle">{{$store.state.Utilisateurs.user.name}} <span class="caret"></span></button>
              <ul class="dropdown-menu">
                <!-- <li><a href="#">Profil</a></li> -->
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
    ...mapGetters('Utilisateurs', ['user'])
  }
}
</script>
