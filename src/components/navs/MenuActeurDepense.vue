<template>
  <!--top-Header-menu-->
  <div id="user-nav" class="navbar navbar-inverse">
    <ul class="nav">
      <!--Paramètres administratifs-->

       <li>
         <router-link :to="{name:'recrutementPersonnel'}" tag="a">
           PLANIFICATION DE RECRUTEMENT PERSONNEL
         </router-link>

       </li>

              <!-- <li class="dropdown" id="personnel">
        <a
          title=""
          href="#"
          data-toggle="dropdown"
          data-target="#personnel"
          class="dropdown-toggle"
        >
          <span class="text">  PLANIFICATION DE RECRUTEMENT PERSONNEL </span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li class="divider"></li>
          <li>
            <router-link :to ="{name: 'recrutementPersonnel'}" tag="a">
              <i class="icon-key"></i> Recrutement  du personnel
            </router-link>
          
          </li>

            <li class="divider"></li>
          <li>
            <router-link :to ="{name: ''}" tag="a">
              <i class="icon-key"></i> Norme de missions
            </router-link>
          
          </li>
        
          <li>
            
          </li>
        </ul>
      </li>    -->
       <li>
      <router-link :to="{name: 'cycledeVie'}" tag="a">
        CYCLE DE VIE
      </router-link>
    </li>
      
       <li>
            <router-link :to="{name: 'Acteur'}" tag="a">
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



                
    
   
   
   
   
   
  

          
     

  
     
     

     
     






      <!--Tableau de bord acteur de depense-->
       <li >
         <router-link :to="{name: 'TableauBordActeurDepense'}" tag="a">
          <span class="text">TABLEAU DE BOARD </span>
         </router-link>
      
      </li>
    </ul>
  </div>
</template>

<script>


export default {

};
</script>
