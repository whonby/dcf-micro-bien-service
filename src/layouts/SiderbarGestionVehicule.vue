
<template>
  <div>
    <!--Header-part-->
    <div id="header">
      <h1>
        <a href="#">S I D C F</a>
      </h1>
    </div>
    <!--close-Header-part-->
    <!--sidebar-menu-->
    <div id="sidebar" style="position: fixed;">
      <!-- <a title=" Dashboard" href="#" class="visible-phone">
        <i class="icon icon-home"></i>Dashboard
      </a> -->
      <ul style=" background:#1f262d; height: 1000px">

       <li>

  <center>
      <router-link tag="a" :to="{ name: 'photoProfil' }">
        <img v-bind:src="AffichePhoto(afficheIdUtilisateur)" name="aboutme" class="avatar">
        </router-link>
      <h6 style="color:orange;font-size:14px">{{afficheNomUtilisateur}}</h6>
      <span class="user-level" style="color:#ffffff;font-size:14px">({{afficheRoleUtilisateur}})</span>
		</center>
       </li>
       
        
       
        
           <!-- <li @click.prevent="navigateToParametreVehicule">
          <a href="#">
            <i class="icon-group"></i>
            <span>PARAMETRES</span>
          </a>
        </li> -->
        <!-- <li  @click.prevent="navigateToSuivMarche" >
          <a href="#">
            <i class="icon-group"></i>
            <span> SUIVI DES CONTRATS</span>
          </a>
        </li> -->
        <li  @click.prevent="navigateToComptaMatiere" >
          
          <a href="#">
            <i class="icon-group"></i>
            <span style="text-align:center"> TABLEAU DE BORD</span>
          </a>
        </li>
         <li  @click.prevent="navigateToGestionParc" :class="{active: active_el == 43}">
          <a href="#">
            <i class="icon-group"></i>
            <span  style="text-align:center"> GESTION DU PATRIMOINE</span>
          </a>
        </li>
         <!-- <li>
          <a href="#">
            <i class="icon-group"></i>
            <span  style="text-align:center"> INVENTAIRE DU PATRIMOINE</span>
          </a>
        </li> -->
        <!-- <li  @click.prevent="navigateToGestionParc">
          <a href="#">
            <i class="icon-group"></i>
            <span style="text-align:center"> GESTION DU PARC IMMOBILIER</span>
          </a>
        </li> -->

<!-- 
 <li  @click.prevent="navigateToComptaMatiere" >
          
          <a href="#">
            <i class="icon-group"></i>
            <span style="text-align:center"> MOBILIERS & MATERIELS</span>
          </a>
        </li>
         <li  @click.prevent="navigateToGestionParc" :class="{active: active_el == 43}">
          <a href="#">
            <i class="icon-group"></i>
            <span  style="text-align:center"> GESTION DU PARC VEHICULE</span>
          </a>
        </li>
        <li  @click.prevent="navigateToGestionParc">
          <a href="#">
            <i class="icon-group"></i>
            <span style="text-align:center"> GESTION DU PARC IMMOBILIER</span>
          </a>
        </li> -->





        <!-- <li  @click.prevent="navigateToGestionParc" >
          <a href="#">
            <i class="icon-group"></i>
            <span> SAISIE & AFFECTATION</span>
          </a>
        </li>
        <li  @click.prevent="navigateToReparation" >
          <a href="#">
            <i class="icon-group"></i>
            <span> REPARATION VEHICULE</span>
          </a>
        </li> -->
        
         <!-- <li  @click.prevent="navigateToSuiviMarcheProjet" >
          <a href="#">
            <i class="icon-group"></i>
            <span>EXPLOITATION</span>
          </a>
        </li>
         <li  @click.prevent="navigateToSuiviMarcheProjetpARtYPEmArche" >
          <a href="#">
            <i class="icon-group"></i>
            <span>ALERTE</span>
          </a>
        </li> -->
         
        <li >
           <router-link :to="{ name: 'pagePresentation'}" tag="a"  >
         
            <i class="icon-arrow-left"></i>
            <span>RETOUR AU MENU</span>
           
          </router-link>
        </li>
        
       
     
        
          <li @click.prevent="logoutUser()" >
          <a title="DECONNEXION" href="#">
            <i class="icon icon-off"></i>
            <span>DECONNEXION</span>
            <span class="label label-important"></span>
          </a>
        </li>
      </ul>
    </div>
    <!--sidebar-menu-->

  </div>
</template>

<script>
import {mapGetters, mapState, mapMutations, mapActions } from "vuex";
import {admin,dcf,cf} from "../Repositories/Auth"

export default {
   
  mounted() {
    // console.log(this.$store.state);
  },


  computed: {
      ...mapState('parametrageMenu', {
     active_el: state => state.active_el
  }),
  ...mapGetters('personnelUA', ['sauvegardePhoto']),




  AffichePhoto() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sauvegardePhoto.find(qtreel => qtreel.user_id == id);

      if (qtereel) {
        return qtereel.fichier;
      }
      return "http://localhost:8002/apiv4/savephotoprofil/1_!1595119277.jpg "
        }
      };
    },
  afficheNomUtilisateur(){
  let objLinea = localStorage.getItem("Users");
let objJson = JSON.parse(objLinea);
return objJson.name

},
afficheRoleUtilisateur(){
  let objLinea = localStorage.getItem("Users");
let objJson = JSON.parse(objLinea);
return objJson.user_role.role.libelle

},
  afficheIdUtilisateur(){
  let objLinea = localStorage.getItem("Users");
let objJson = JSON.parse(objLinea);
return objJson.id

},
  },

  methods: {
   
      ...mapMutations('parametrageMenu', ['activate']),
      ...mapActions('Utilisateurs', ['logoutUser']),
    admin:admin,
    dcf:dcf,
    cf:cf,
 
       
     navigateToComptaMatiere(){
        this.activate()
        this.$router.push({
          name: 'TableauBordGestionVehicule1'
        })
      },
navigateToGestionParc(){
        this.activate(43)
        this.$router.push({
          name: 'gestionStockCorporels'
        })
      },
navigateToReparation(){
        
        this.$router.push({
          name: 'ReparationVehicule'
        })
      },
      navigateToParametreVehicule(){
        this.activate(42)
        this.$router.push({
          name: 'TableauBordGestionVehicule'
        })
      },




  }
};
</script>
<style>
.avatar {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
