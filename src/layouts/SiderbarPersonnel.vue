
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
       
       
        <li :class="{active: active_el == 2 }" @click.prevent="navigateToActeurDepense">
          <a title="TABLEAU DE BORD" href="#">
            <i class="icon-dashboard"></i>
            <span>TABLEAU DE BORD</span>
          </a>
        </li>
        <!-- <li v-if="admin() || dcf()" :class="{active: active_el == 17 }" @click.prevent="navigateToParametreGeneraux">
          <a title="PARAMETRES GENERAUX" href="#">
            <i class="icon-cogs"></i>
            <span>PARAMETRES GENERAUX</span>
          </a>
        </li> -->
        <!-- <li @click.prevent="navigateToUniteAdministrative" :class="{active: active_el == 1 }">
          <a  title="" href="#">
            <i class="icon-home"></i>
            <span>UNITE ADMINISTRATIVE</span>
          </a>
        </li> -->
         <!-- <li @click.prevent="navigateToTransfert" :class="{active: active_el ==6}">
          <a title="TRANSFERT" href="#">
            <i class="icon-money"></i>
            <span>TRANSFERT</span>
            <span class="label label-important"></span>
          </a>
        </li>
         <li @click.prevent="navigateToGestionMarche" :class="{active: active_el ==7}">
          <a title="GESTION MARCHE" href="#">
            <i class="icon-shopping-cart"></i>
            <span>GESTION MARCHE</span>
            <span class="label label-important"></span>
          </a>
        </li> -->
        <li  @click.prevent="navigateToActeurDepense" :class="{active: active_el == 2 }">
          <a href="#">
            <i class="icon-group"></i>
            <span>PERSONNEL</span>
          </a>
        </li>
        <!-- <li @click.prevent="navigateToBienEtService" :class="{active: active_el ==3}">
          <a href="#">
            <i class="icon-truck"></i>
            <span>BIENS ET SERVICES</span>
          </a>

       <li @click.prevent="navigateToComptaMatiere" :class="{active: active_el ==5}">
          <a title="COMPTABILITE DES MATIERE" href="#">
            <i class=" icon-camera"></i>
            <span>COMPTA DES MATIERES</span>
          </a>
        </li>


        <li @click.prevent="navigateToInvestissement" :class="{active: active_el ==4}">
          <a title="INVESTISSEMENT" href="#">
            <i class="icon-truck"></i>
            <span>INVESTISSEMENT</span>
           
          </a>
        </li> -->
        <li >
           <router-link :to="{ name: 'pagePresentation'}" tag="a"  >
         
            <i class="icon-arrow-left"></i>
            <span>RETOUR AU MENU</span>
           
          </router-link>
        </li>
        
       
     
          <!-- <li @click.prevent="navigateToCatographieBudgetaire" :class="{active: active_el ==8}">
          <a title="CARTOGRAPHIE" href="#">
            <i class=" icon-globe"></i>
            <span>CARTOGRAPHIE</span>
            <span class="label label-important"></span>
          </a>
        </li> -->
        <!-- <li v-if="cf() || dcf()" @click.prevent="navigateGestionEquipe" :class="{active: active_el ==21}">
          <a href="#">
            <i class="icon icon-user"></i> <span>MON EQUIPE</span>
          </a> -->
          <!-- <li v-if="admin() || dcf()" @click.prevent="navigateGestionUser" :class="{active: active_el ==21}">
              <a href="#">
              <i class="icon icon-key"></i> <span>UTILISATEURS</span>
          </a>
          </li>  -->
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
      return "http://dcf-personnel-ua.kognishare.com/savephotoprofil/1_!1595119277.jpg "
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
 navigateToCatographieBudgetaire(){
        this.activate(8)
        this.$router.push({
          name: 'CartographieBudget'
        })
      },
       navigateToRapport(){
        this.activate(20)
        this.$router.push({
          name: ''
        })
      },
      
 navigateToTransfert(){
        this.activate(6)
        this.$router.push({
          name: 'transfert'
        })
      },
navigateToGestionMarche(){
        this.activate(7)
        this.$router.push({
          name: 'GestionMarche'
        })
      },



      navigateToActeurDepense(){
        this.activate(2)
        this.$router.push({
          name: 'TableauBordActeurDepense'
        })
      },

       navigateToUniteAdministrative(){
        this.activate(1)
        this.$router.push({
          name: 'tableaudebord'
        })
      },
 navigateToTableauBord(){
        this.activate(11)
        this.$router.push({
          name: 'TableauDeBordG'
        })
      },
       navigateToParametreGeneraux(){
        this.activate(17)
        this.$router.push({
          name: 'TableauDeBordG'
        })
      },
      
       navigateToComptaMatiere(){
        this.activate(5)
        this.$router.push({
          name: 'TableauBordImmo2'
        })
      },


      navigateToInvestissement(){
        this.activate(4)
        this.$router.push({
          name:'tableauBordInvestissement'
        })
      },

 navigateToBienEtService(){
        this.activate(3)
        this.$router.push({
          name: 'tableauBord'
        })
      },
      navigateGestionUser(){
          this.activate(21)
          this.$router.push({
              name: 'Groupe'
          })
      },

    navigateGestionEquipe(){
      this.activate(30)
      this.$router.push({
        name: 'MonEquipe'
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
