<template>
  <!--top-Header-menu-->
  <div id="user-nav" style="position: fixed;">
    <ul class="nav">
      <!--Paramètres administratifs-->

       <li>
         <router-link :to="{name:'recrutementPersonnel'}" tag="a">
           SUIVI DE RECRUTEMENT
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
          <span class="text">  ETAT TEST </span>
          <b class="caret"></b>
        </a>
        <ul class="dropdown-menu">
          <li class="divider"></li>
         <li>
           <router-link :to="{name: 'RegistreDepense'}" tag="a">  
            REGISTRE DES DEPENSES
           </router-link>
         </li>

            <li class="divider"></li>
         <li>
          <router-link :to="{name: 'LivreEnregistrement'}" tag="a">
           LIVRE D'ENREGISTREMENT
          </router-link>
        </li>
        
        <li>
          <router-link :to="{name: 'LivreSpecial'}" tag="a">
           LIVRE SPECIAL
          </router-link>
        </li>


           <li>
            <router-link :to="{name: 'RapportDepense'}" tag="a">
              SITUATION PERIODIQUE
            </router-link>
          </li>
        </ul>
      </li>     -->
           <!-- <li>
        <router-link :to="{name: 'Synthesebudg'}" tag="a">
          SYNTHESE BUDGET
        </router-link>
     </li> -->
     <!--  <li>
      <router-link :to="{name: 'cycledeVie'}" tag="a">
        CYCLE DE VIE
      </router-link>
    </li> -->
             <!-- <li>
           <router-link :to="{name: 'RegistreDepense'}" tag="a">  
            REGISTRE DES DEPENSES
           </router-link>
         </li>

            <li>
          <router-link :to="{name: 'LivreEnregistrement'}" tag="a">
           LIVRE D'ENREGISTREMENT
          </router-link>
        </li>

        <li>
          <router-link :to="{name: 'LivreSpecial'}" tag="a">
           LIVRE SPECIAL
          </router-link>
        </li>


           <li>
            <router-link :to="{name: 'RapportDepense'}" tag="a">
              SITUATION PERIODIQUE
            </router-link>
          </li> -->


      
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
          <!-- <li>
           <router-link :to="{name: 'RegistreDepense'}" tag="a">  
            REGISTRE DES DEPENSES
           </router-link>
         </li> -->
<!-- 
           <li>
            <router-link :to="{name: 'executionMission'}" tag="a">
             EXECUTION DE MISSION
            </router-link>
          </li> -->



                
    
   
   
   
   
   
  

          
     

  
     
     

     
     






      <!--Tableau de bord acteur de depense-->
       <!-- <li >
         <router-link :to="{name: 'TableauBordActeurDepense'}" tag="a">
          <span class="text">TABLEAU DE BORD </span>
         </router-link>
      
      </li> -->
    </ul>
  </div>
</template>

<script>


export default {

};
</script>
