<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav">

<!-- administratifs-->
      



<li>
            <router-link :to="{name: 'marche'}" tag="a">
              PLANIFICATION DES MARCHES
            </router-link>
          </li>
      
       <li class="dropdown" id="execut">
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
      </li>

     
    </ul>
  </div>
</template>

<script>

export default {

};
</script>
