<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav">
      <li>
        <router-link :to="{ name: 'TableauBordGestionMarche' }" tag="a">
          INFORMATIONS GENERALES
        </router-link>
      </li>
      <!--        <li>-->
      <!--            <router-link :to="{name: 'ficheReparationVehicule'}" tag="a">-->
      <!--                MARCHES ETUDES-->
      <!--            </router-link>-->
      <!--        </li>-->
      <!--        <li>-->
      <!--            <router-link :to="{name: 'ficheReparationVehicule'}" tag="a">-->
      <!--                MARCHES TRAVAUX-->
      <!--            </router-link>-->
      <!--        </li>-->
      <!--        <li>-->
      <!--            <router-link :to="{name: 'ficheReparationVehicule'}" tag="a">-->
      <!--                MARCHES FOURNITURES ET EQUIPEMENTS-->
      <!--            </router-link>-->
      <!--        </li>-->
      <!--        <li>-->
      <!--            <router-link :to="{name: 'ficheReparationVehicule'}" tag="a">-->
      <!--                MARCHES DES SERVICES-->
      <!--            </router-link>-->
      <!--        </li>-->
      <!--        <li>-->
      <!--            <router-link :to="{name: 'ficheReparationVehicule'}" tag="a">-->
      <!--                PRESTATIONS INTELLECTUELLES-->
      <!--            </router-link>-->
      <!--        </li>-->
      <!--        <li>-->
      <!--            <router-link :to="{name: 'TableauBordFinancier'}" tag="a">-->
      <!--                Tableau de bord financier-->
      <!--            </router-link>-->
      <!--        </li>-->
      <li>
        <router-link :to="{ name: 'ficheReparationVehicule' }" tag="a">
          LES DELAIS
        </router-link>
      </li>

      <!-- <li v-if="!noDCfNoAdmin">
        <router-link :to="{ name: 'ficheReparationVehicule' }" tag="a">
          TABLE DE SYNTHESE
        </router-link>
      </li> -->
      <!-- <li>
            <router-link :to="{name: 'suiviMarcheDesProjets'}" tag="a">
             MARCHE UA
            </router-link>
          </li>
           <li>
            <router-link :to="{name: 'suiviMarcheDesProjetParTypeMarche'}" tag="a">
             MARCHE UA PAR TYPE
            </router-link>
          </li>
           <li>
            <router-link :to="{name: 'etatRecapitulative'}" tag="a">
             ETAT RECAPITULATIF
            </router-link>
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
