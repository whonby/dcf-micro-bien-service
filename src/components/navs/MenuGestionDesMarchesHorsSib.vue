<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav">

<!-- administratifs-->




        <!-- <li class="dropdown" id="planification">
            <a  href="#" data-toggle="dropdown" data-target="#planification" class="dropdown-toggle">
                <span class="text">PLANIFICATION DES MARCHES </span>
                <b class="caret"></b>
            </a>
            <ul class="dropdown-menu">

                <li>

                    <router-link :to="{name: 'ppm'}" tag="a">
                        <i class="icon-list-alt"></i>
                        PPM
                    </router-link>
                </li>

                <li>
                    <router-link :to="{name: 'marche'}" tag="a">
                        <i class="icon-key"></i>
                        Marchés & contract planier
                    </router-link>

                </li>


            </ul>
        </li> -->
      
       <!-- <li class="dropdown" id="execut">
        <a  href="#" data-toggle="dropdown" data-target="#execut" class="dropdown-toggle">
          <span class="text">EXECUTION DU MARCHES </span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">

           <li>
            <router-link :to="{name: 'actesEffet'}" tag="a">
              <i class="icon-list-alt"></i>
             Acte à effet financier
            </router-link>
          </li>

           <li>
            <router-link :to="{name: 'executionMarche'}" tag="a">
              <i class="icon-key"></i>
              Marchés & contract attribués
            </router-link>
          </li>
         
        
         
          
         
          
        </ul>
      </li> -->
       <!-- <li>
            <router-link :to="{name: 'GestionMarcheHorSib'}" tag="a">
              LISTE DES MARCHES
            </router-link>
          </li> -->
     <li>
   <li>

            <router-link :to="{name: 'groupeMarcheParUa'}" tag ="a">
              LISTE DES MARCHES 
            </router-link>
          </li>
          <!-- <li>
           <router-link :to="{name: 'listeMarcheppm'}" tag ="a">
                LISTE DES MARCHES PPM
            </router-link>
          </li> -->
           <!-- <li>
        <router-link :to="{ name: 'AutresDepense' }" tag="a">
          AUTRES DEPENSES
        </router-link>
      </li> -->
           <!-- <li>
            <router-link :to="{name: 'marcheEntreprise'}" tag ="a">
                LISTE DES MARCHES PAR ENTREPRISES
            </router-link>
          </li> -->

           <li>
            <router-link :to="{name: 'marcheEntreprise'}" tag ="a">
                EXECUTION DES MARCHES
            </router-link>
          </li>

            <li v-if="admin() ||dcf()">
            <router-link :to="{name: 'ppmHorsSib'}" tag ="a">
                IMPORTATION PPM
            </router-link>
          </li>
          
     <!-- <li> 
            <router-link :to="{name: 'ajouterMarcheHor'}" tag="a">
TEST            </router-link>
          </li> -->
    </ul>
  </div>
</template>


<script>
import { admin, dcf, noDCfNoAdmin } from "../../../src/Repositories/Auth";
import { mapMutations, mapActions } from "vuex";
export default {

   methods: {
      ...mapMutations('parametrageMenu', ['activate']),
      ...mapActions('Utilisateurs', ['logoutUser']),
    admin:admin,
    dcf:dcf,
 noDCfNoAdmin:noDCfNoAdmin
  }

};
</script>























