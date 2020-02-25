<template>
  <div>
    <!--Header-part-->
    <div id="header" style="background:#1f262d">
      <h1>
        <a href="#">S I D C F</a>
      </h1>
    </div>
    <!--close-Header-part-->
    <!--sidebar-menu-->
    <div id="sidebar" style="position: fixed; background:#1f262d;">
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
       
        <li :class="{active: active_el == 11 }" @click.prevent="navigateToParametreGeneraux">
          <a title="PARAMETRES GENERAUX" href="#">
            <i class="icon icon-signal"></i>
            <span>PARAMETRES GENERAUX</span>
          </a>
        </li>
        <li @click.prevent="navigateToUniteAdministrative" :class="{active: active_el == 1 }">
          <a  title="" href="#">
            <i class="icon icon-inbox"></i>
            <span>UNITE ADMINISTRATIVE</span>
          </a>
        </li>
        <li  @click.prevent="navigateToActeurDepense" :class="{active: active_el == 2 }">
          <a href="#">
            <i class="icon icon-th"></i>
            <span>PERSONNEL</span>
          </a>
        </li>
        <li @click.prevent="navigateToBienEtService" :class="{active: active_el ==3}">
          <a href="#">
            <i class="icon icon-fullscreen"></i>
            <span>BIENS ET SERVICES</span>
          </a>

       <li @click.prevent="navigateToComptaMatiere" :class="{active: active_el ==5}">
          <a title="COMPTABILITE DES MATIERE" href="#">
            <i class="icon icon-pencil"></i>
            <span>COMPTA DES MATIERES</span>
          </a>
        </li>


        <li @click.prevent="activate(4)" :class="{active: active_el ==4}">
          <a title="INVESTISSEMENT" href="#">
            <i class="icon icon-th-list"></i>
            <span>INVESTISSEMENT</span>
            <span class="label label-important"></span>
          </a>
        </li>
        
        
        <li @click.prevent="activate(6)" :class="{active: active_el ==6}">
          <a title="TRANSFERT" href="#">
            <i class="icon icon-file"></i>
            <span>TRANSFERT</span>
            <span class="label label-important"></span>
          </a>
        </li>
        <!-- <li  @click.prevent="activate(7)" :class="{active: active_el ==7}">
          <a title="" href="#">
            <i class="icon icon-info-sign"></i>
            <span>EXECUTION</span>
            <span class="label label-important"></span>
          </a>
        </li> -->
        <!-- <li @click.prevent="activate(8)" :class="{active: active_el ==8}">
          <a title="OPERATIONNALISATION DU DISPOSITIF DE CONTRÔLE INTERNE" href="#">
            <i class="icon icon-heart"></i>
            <span>OP. DU DISPOSITIF DE C. I.</span>
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

       navigateToParametreGeneraux(){
        this.activate(11)
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

 navigateToBienEtService(){
        this.activate(3)
        this.$router.push({
          name: 'tableauBord'
        })
      }
    


  }
};
</script>

