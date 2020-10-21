<template>
  <!--top-Header-menu-->
  <div id="user-nav" style="position: fixed;">
    <ul class="nav">
      <!--Paramètres administratifs-->

       <li>
         <router-link :to="{name:'recrutementPersonnelHorsSib'}" tag="a">
           SUIVI DE RECRUTEMENT
         </router-link>

       </li>

       <li>
            <router-link :to="{name: 'ListesPersonnel'}" tag="a">
              PERSONNEL
            </router-link>
          </li>
<li>
            <router-link :to="{name: 'paiementPersonnel'}" tag="a">
              PAIEMENT PERSONNEL
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'executionPersonnel'}" tag="a">
              EXECUTION PERSONNEL
            </router-link>
          </li>
          
           <li>
            <router-link :to="{name: 'Mission'}" tag="a">
              SUIVI DES MISSIONS
            </router-link>
          </li>
          
    </ul>
  </div>
</template>

<script>


export default {

};
</script>
