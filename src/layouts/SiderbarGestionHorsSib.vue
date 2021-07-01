<script src="../routes/bien_service/BienServiceRoutes.js"></script>
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
       
      <!-- <li style="background: #fff !important;">
          <a title="TABLEAU DE BORD" href="#">
            <i class="icon-dashboard"></i>
            <span style="color:#000 !important;font-size:15px;font-weight:bold;">MENU G-HORS SIGOBE</span>
          </a>
        </li> -->
        <li :class="{active: active_el == 1034 }" @click.prevent="navigateToTableauBord">
          <a title="TABLEAU DE BORD" href="#">
            <i class="icon-dashboard"></i>
            <span>TABLEAU DE BORD</span>
          </a>
        </li>
     

        <li @click.prevent="navigateTableBordBordBudgetEclate" :class="{active: active_el ==780}">
           <a href="#">
                  <i class="icon-truck"></i>
                  <span>GESTION DU BUDGET</span>
              </a>
        </li>
         

         <li @click.prevent="navigateToGestionMarche" :class="{active: active_el ==25}">
          <a href="#">
            <i class="icon-truck"></i>
            <span>GESTION DES MARCHES</span>
          </a>
        </li>
     

        <li @click.prevent="navigateToAutredepense" >
          <a title="INVESTISSEMENT" href="#">
            <i class="icon-truck"></i>
            <span>GESTION AUTRE DEPENSE</span>
           
          </a>
        </li>

           <li @click.prevent="navigateurOrdrePaiement" :class="{active: active_el ==1200}">
              <a title="GESTION DES IMAGES" href="#">
                  <i class="icon-truck"></i>
                  <span>CONTROLE EXECUTION</span>

              </a>
          </li>
          <li @click.prevent="navigateToImage" :class="{active: active_el ==75}">
              <a title="GESTION DES IMAGES" href="#">
                  <i class="icon-truck"></i>
                  <span>GESTION DES IMAGES</span>

              </a>
          </li>
 <!-- <li style="background: #fff !important;">
          <a title="TABLEAU DE BORD" href="#">
            <i class="icon-dashboard"></i>
            <span style="color:#000 !important;font-size:15px;font-weight:bold;">AUTRES MODULES</span>
          </a>
        </li>
         
 <li  title="UNITES ADMINISTRATIVES">
    <router-link
                  :to="{ name: 'TableauDeBordG', params: { id: 2 } }"        >
        
                  
                  <span>UNITES ADMINISTRATIVES</span>

            
               </router-link>
          </li>

<li  >
              <a title="GESTION DU PERSONNEL" href="#">
                  <i class=""></i>
                  <span>GESTION DU PERSONNEL</span>

              </a>
          </li>
          <li @click="goToModule(3)" >
              <a title="GESTION SIGOBE" href="#">
                  <i class=""></i>
                  <span>GESTION SIGOBE</span>

              </a>
          </li>
 <li @click="goToModule(8)" >
              <a title="COMPTABILITE DES MATIERES" href="#">
                  <i class=""></i>
                  <span>COMPTA DES MATIERES</span>

              </a>
          </li>
<li @click="goToModule(5)" >
              <a title="CARTOGRAPHIES DES BUDGETS ET DES MARCHES" href="#">
                  <i class=""></i>
                  <span>CARTOGRAPHIES</span>

              </a>
          </li>

          <li style="background: #fff !important;">
          <a title="TABLEAU DE BORD" href="#">
            <i class="icon-dashboard"></i>
            <span style="color:#000 !important;font-size:15px;font-weight:bold;"></span>
          </a>
        </li> -->
         <li @click.prevent="navigateRetourAuMenu" >
          <a title="Carte des infrastructure pas regison" href="#">
            <i class=" icon-globe"></i>
            <span>RETOUR AU MENU</span>
            <span class="label label-important"></span>
          </a>
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
      return "https://personnel.agosoftprojet.com/savephotoprofil/1_!1595119277.jpg "
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
    
      ...mapActions('Utilisateurs', ["logoutUser",'getUtilisateurs',"getRoles",'getGroupe',"getMenu","getModule",
    "getAffectation","getUniteAdminUser","getEquipeCF","activeMenuModuleSidcf","getAffectationGroupeUser","getServiceCF","getAffectationServiceCF"]),
    admin:admin,
    dcf:dcf,
    cf:cf,
    goToModule(id){
     console.log(id)
     if (id==6){
         this.$router.push({
             name: 'liste_ua_compta'
         })
     }else{

         this.$router.push({
             name: 'TableauDeBordG',
             params:{id:id}
         })
     }
      },
 navigateToCatographieBudgetaire(){
        this.activate(8)
        this.$router.push({
          name: 'CartographieBudget'
        })
      },
       navigateurOrdrePaiement(){
        this.activate(1200)
        this.$router.push({
        //  name:'TableauBordOp'
          name:'PresentationTableauBordControleExecution'
        })
      },
       navigateToRapport(){
        this.activate(20)
        this.$router.push({
          name: ''
        })
      },
      
 navigateToTransfert(){
        
        this.$router.push({
          name: 'BudgetEclatePrincipal'
        })
      },
navigateToGestionMarche(){
    this.activate(25)
    this.$router.push({
      //  name: 'TableauBordGestionMarche'
        name: 'PresentationTableauMarche'
    })
      },
       navigateTableBordBordBudgetEclate(){
          this.activate(780)
          this.$router.push({
             // name: 'TableauBordDuBudgetEclate'
              name: 'presentationTableau'
          })
      },
      navigateTableBordBord(){
          this.activate(45)
          this.$router.push({
              name: 'TableauBordGestionMarche'
          })
      },
//GestionMarcheHorSib gestion_marche

      navigateToActeurDepense(){
        this.activate(31)
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
        this.activate(1034)
        this.$router.push({
          name: 'TableauBordGestionHorsSibSimple'
        })
      },
       navigateToParametreGeneraux(){
        this.activate(17)
        this.$router.push({
          name: 'TableauBordGestionSibSimple'
        })
      },
      
       navigateToComptaMatiere(){
        this.activate(5)
        this.$router.push({
          name: 'TableauBordImmo2'
        })
      },
navigateRetourAuMenu(){
      this.activate(11)
      this.$router.push({
        name: 'pagePresentation'
      })
    },
      navigateToInvestissement(){
        this.activate(40)
        this.$router.push({
          name:'tableau_de_bors_sib_investissement'
        })
      },

       navigateToAutredepense(){
        this.activate(15)
        this.$router.push({
          name:'GroupeUaDesAutresDepense'
        })
      },

      navigateToImage(){
          this.activate(75)
          this.$router.push({
              name:'Images'
          })
      },
 navigateToBienEtService(){
        this.activate(7)
        this.$router.push({
          name: 'tableau_de_bord_hors'
        })
      },
      // suivi_marhe
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
