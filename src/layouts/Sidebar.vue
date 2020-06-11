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
        <!-- <li :class="{active: active_el == 0 }" @click.prevent="activate(0)">
          <a href="index.html">
            <i class="icon icon-home"></i>
            <span>Dashboard</span>
          </a>
        </li> -->
          <!-- <li class="submenu"> <a href="#">
            <i class="icon icon-key"></i> <span>UTILISATEURS && ACCES</span>
             </a>
          <ul>
            <li><a href="index2.html">UTILISATEURS</a></li>
            <li><a href="gallery.html">ACCES</a></li>
          
          </ul>
       </li> -->
        <li :class="{active: active_el == 11 }" @click.prevent="navigateToTableauBord">
          <a title="TABLEAU DE BORD" href="#">
            <i class="icon-dashboard"></i>
            <span>TABLEAU DE BORD</span>
          </a>
        </li>
        <li v-if="admin() || dcf()" :class="{active: active_el == 17 }" @click.prevent="navigateToParametreGeneraux">
          <a title="PARAMETRES GENERAUX" href="#">
            <i class="icon-cogs"></i>
            <span>PARAMETRES GENERAUX</span>
          </a>
        </li>
        <li @click.prevent="navigateToUniteAdministrative" :class="{active: active_el == 1 }">
          <a  title="" href="#">
            <i class="icon-home"></i>
            <span>UNITE ADMINISTRATIVE</span>
          </a>
        </li>
         <li @click.prevent="navigateToTransfert" :class="{active: active_el ==6}">
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
        </li>
        <li  @click.prevent="navigateToActeurDepense" :class="{active: active_el == 2 }">
          <a href="#">
            <i class="icon-group"></i>
            <span>PERSONNEL</span>
          </a>
        </li>
        <li @click.prevent="navigateToBienEtService" :class="{active: active_el ==3}">
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
        </li>
        
        
       
     
          <li @click.prevent="navigateToCatographieBudgetaire" :class="{active: active_el ==8}">
          <a title="CARTOGRAPHIE" href="#">
            <i class=" icon-globe"></i>
            <span>CARTOGRAPHIE</span>
            <span class="label label-important"></span>
          </a>
        </li>
          <!-- <li @click.prevent="navigateToRapport" :class="{active: active_el ==20}">
          <a title="CARTOGRAPHIE" href="#">
            <i class=" icon-globe"></i>
            <span>RAPPORT</span>
            <span class="label label-important"></span>
          </a>
        </li> -->
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
import { mapState, mapMutations, mapActions } from "vuex";
import {admin,dcf} from "../Repositories/Auth"
export default {
  mounted() {
    // console.log(this.$store.state);
  },

  computed: {
      ...mapState('parametrageMenu', {
     active_el: state => state.active_el
  })
  },

  methods: {
   
      ...mapMutations('parametrageMenu', ['activate']),
      ...mapActions('Utilisateurs', ['logoutUser']),
    admin:admin,
    dcf:dcf,
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
          name: 'tableaubordTransfert'
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
          name: 'ExerciceBudgetaire'
        })
      },
       navigateToParametreGeneraux(){
        this.activate(17)
        this.$router.push({
          name: 'ExerciceBudgetaire'
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
      }
    


  }
};
</script>

