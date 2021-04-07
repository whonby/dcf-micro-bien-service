<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav">
      <!--Paramètres administratifs-->
      <!-- <li class="dropdown" id="profile-messages">
        <a
          title="Unité administrative"
          href="#"
          data-toggle="dropdown"
          data-target="#profile-messages"
          class="dropdown-toggle"
        >
          <span class="text">UNITES ADMINISTRATIVES </span>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link :to="{name: 'uniteadministrative'}" tag="a">
              <i class="icon-user"></i>
              Gestion des unites administratives
            </router-link>
          </li>
        </ul>
      </li> -->

       <!-- <li>
            <router-link :to="{name: 'uniteadministrative'}" tag="a">
              UNITES ADMINISTRATIVES
            </router-link>
          </li>
           <li>
            <router-link :to="{name: 'uniteZone'}" tag="a">
              UNITES DE ZONE
            </router-link>
          </li> -->
        
  <li class="dropdown" id="menuBUDGET" v-if="admin() || dcf()">
        <a
          title="UNITES ADMINISTRATIVES"
          href="#"
          data-toggle="dropdown"
          data-target="#menuBUDGET"
          class="dropdown-toggle"
        >
          <span class="text" >UNITE ADMINISTRATIVE</span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link :to="{name: 'uniteadministrative'}" tag="a">
              <i class="icon-user"></i>
            Unité administrative
            </router-link>
          </li>

          <li class="divider"></li>
          <li>
            <router-link :to="{name: 'DirectionPrincipal'}" tag="a">
              <i class="icon-key"></i>Direction UA
            </router-link>
          </li>
          <li class="divider"></li>
            <li>
            <router-link :to="{name: 'uniteZone'}" tag="a">
              <i class="icon-key"></i>Unité de zone
            </router-link>
          </li>
           <li class="divider"></li>
            <li>
            <router-link :to="{name: 'StructureOrganigramme'}" tag="a">
              <i class="icon-key"></i>Structure Organigramme 
            </router-link>
          </li>
           <li class="divider"></li>
            <li>
            <router-link :to="{name: 'PlanOrganigrammeUa'}" tag="a">
              <i class="icon-key"></i>Organigramme
            </router-link>
          </li>
           <!-- <li class="divider"></li>
          <li>
            <router-link :to="{name: 'ServicePrincipal'}" tag="a">
              <i class="icon-key"></i>Service UA
            </router-link>
          </li>
           <li class="divider"></li>
          <li>
            <router-link :to="{name: 'FonctionPrincipal'}" tag="a">
              <i class="icon-key"></i>Fonction UA
            </router-link>
          </li> -->
            <!-- <li class="divider"></li> -->
        <!-- <li>
            <router-link :to="{name: 'banqueUa'}" tag="a">
              <i class="icon-key"></i>Banque UA
            </router-link>
          </li> -->
           <!-- <li class="divider"></li>
        <li>
            <router-link :to="{name: 'Organigramme'}" tag="a">
              <i class="icon-key"></i>Organigramme UA
            </router-link>
          </li> -->
           <li class="divider"></li>
         <li>
           <router-link :to="{name: 'banqueUa'}" tag="a">
             <i class="icon-key"></i>Banque UA
            </router-link>
         </li>
           <li class="divider"></li>
        
        </ul>
      </li>
        <li class="dropdown" id="Budget">
            <a title="Budget" href="#"
               data-toggle="dropdown"
               data-target="#Budget"
               class="dropdown-toggle">
                <span class="text">BUDGET</span>
                <b class="caret"></b>
            </a>
            <ul class="dropdown-menu">
                <li>
                    <router-link :to="{name: 'BudgetPasProgramme'}" tag="a">
                        BUGET PAR PROGRAMME
                    </router-link>
                </li>
                <li v-if="admin() || dcf()">
                    <router-link :to="{name: 'ImportBudget'}" tag="a">
                        IMPORTATION DU BUDGET
                    </router-link>
                </li>
                <li v-if="admin() || dcf()">
                    <router-link :to="{name: 'ModificationBudget'}" tag="a">
                        MODIFICATION BUDGET
                    </router-link>
                </li>

            </ul>
        </li>
<!--          <li v-if="admin() || dcf()">-->
<!--            <router-link :to="{name: 'ImportBudget'}" tag="a">-->
<!--              IMPORTATION DU BUDGET-->
<!--            </router-link>-->
<!--          </li>-->
          <li v-if="admin() || dcf()">
            <router-link :to="{name: 'budgetGenerals'}" tag="a">
              BUDGET PAR UA
            </router-link>
          </li>


           <li>
            <router-link :to="{name: 'BudgetParUa'}" tag="a">
              DETAIL DU BUDGET PAR UA
            </router-link>
          </li>
          <li class="divider"></li>
           <!-- <li>
            <router-link :to="{name: 'DetailbudgetGeneralsNew'}" tag="a">
              DETAIL DE BUDGET PAR UA new
            </router-link>
          </li> -->
           
          <li class="divider"></li>
           <li v-if="admin() || dcf()">
            <router-link :to="{name: 'Synthesebudg'}" tag="a">
              SYNTHESE DU BUDGET
            </router-link>
          </li>
          <li class="divider"></li>
           <li>
            <router-link :to="{name: 'listeDesUaBudget'}" tag="a">
              REPORTING DU BUDGET PAR UA
            </router-link>
          </li>

    </ul>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import {admin,dcf,noDCfNoAdmin} from "../../Repositories/Auth"

export default {
  mounted() {
    // console.log(this.$store.state);
  },

  computed: {
     
  },

  methods: {
   
      ...mapMutations('parametrageMenu', ['activate']),
      ...mapActions('Utilisateurs', ['logoutUser']),
    admin:admin,
    dcf:dcf,
 noDCfNoAdmin:noDCfNoAdmin


  }
};
</script>

