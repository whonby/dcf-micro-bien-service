
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
       
        
       
        <li  @click.prevent="navigateToActeurDepense" >
          <a href="#">
            <i class="icon-group"></i>
            <span>SUIVI ENTREPRISE</span>
          </a>
        </li>
        <li  @click.prevent="navigateToSuivMarche" >
          <a href="#">
            <i class="icon-group"></i>
            <span> SUIVI DES CONTRATS</span>
          </a>
        </li>
        <li  @click.prevent="navigateToDecompte" >
          <a href="#">
            <i class="icon-group"></i>
            <span> DECOMPTE PROVISOIRE</span>
          </a>
        </li>
        
         <li  @click.prevent="navigateToSuiviMarcheProjet" >
          <a href="#">
            <i class="icon-group"></i>
            <span>MARCHE UA</span>
          </a>
        </li>
         <li  @click.prevent="navigateToSuiviMarcheProjetpARtYPEmArche" >
          <a href="#">
            <i class="icon-group"></i>
            <span>MARCHE UA PAR TYPE</span>
          </a>
        </li>
          <li  @click.prevent="etatRecapitulativeS" >
          <a href="#">
            <i class="icon-group"></i>
            <span>ETAT RECAPITULATIF</span>
          </a>
        </li>
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

navigateToSuivMarche(){
        this.activate()
        this.$router.push({
          name: 'ficheSuivi'
        })
      },
    navigateToDecompte(){
        this.activate()
        this.$router.push({
          name: 'decompteProvisoire'
        })
      },


navigateToSuiviMarcheProjet(){
        this.activate()
        this.$router.push({
          name: 'suiviMarcheDesProjets'
        })
      },
navigateToSuiviMarcheProjetpARtYPEmArche(){
        this.activate()
        this.$router.push({
          name: 'suiviMarcheDesProjetParTypeMarche'
        })
      },
      etatRecapitulativeS(){
        this.activate()
        this.$router.push({
          name: 'etatRecapitulative'
        })
      },
      navigateToActeurDepense(){
        this.activate()
        this.$router.push({
          name: 'suiviDesEntreprise'
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
