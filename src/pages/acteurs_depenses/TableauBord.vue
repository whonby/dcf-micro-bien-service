<template>
    <div class="container-fluid">
        <div class="quick-actions_homepage span12" >
            



             <div class="widget-title">
            <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#tab1" title=""> Tableau de bord global de recrutement personnel</a></li>
               
               <li class=""><a data-toggle="tab" href="#tab2" title=""> Tableau de bord global acteur de depense</a></li>
               <li><a data-toggle="tab" href="#tab3" title="">Tableau de bord global de missions</a></li> 
             
                
              

            </ul>
                            
          </div>

               <div class="widget-content tab-content">

                <div id="tab1" class="tab-pane active">
                   <div class="container-fluid">

               <ul class="quick-actions" style="margin: 0px !important;">
<li class="bg_lb span4"> <a href="#" style="color:black;"><h4>NOMBRE DE</h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{afficherLaListeDesContratsDuPersonnel}}</span><h4>CONTRAT</h4></a> </li>

        <li class="bg_lg span4"> <a href="#" style="color:black;"><h4>NOMBRE DE </h4> <i class="icon-inbox"></i><span class="label label-success" style="font-size:15px">{{afficherContratPlanifier}}</span><h4> CONTRAT PLANIFIER </h4>  </a> </li>

        <li class="bg_ly span4"> <a href="#" style="color:black;"><h4>NOMBRE DE CONTRAT EN</h4> <i class="icon-fullscreen"></i><span class="label label-important" style="font-size:15px">{{afficherNombreDeContratContratualisation}}</span> <h4>CONTRATUALISATION</h4></a> </li>
  
                <li class="bg_lo span4"> <a href="#" style="color:black;"><h4>NOMBRE DE CONTRAT</h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{nbreMarcheContrat}}</span><h4> EXECUTE</h4></a> </li>

        

        <li class="bg_ly span4"> <a href="#" style="color:black;"><h4>NOMBRE DE CONTRAT</h4> <i class="icon-fullscreen"></i><span class="label label-important" style="font-size:15px">{{afficheNombreMarcheResilier}}</span> <h4> RESILIE</h4></a> </li>
  
                
            </ul>            
            </div>
             
                </div>

             <div id="tab2" class="tab-pane">
             <div class="container-fluid">

               <ul class="quick-actions" style="margin: 0px !important;">


<li class="bg_lb span4"> <a href="#" style="color:black;"><h4>TOTAL </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{totalActeurDepense}}</span><h4>ACTEUR DEPENSE</h4></a> </li>

        <li class="bg_lg span4"> <a href="#" style="color:black;"><h4>TOTAL </h4> <i class="icon-inbox"></i><span class="label label-success" style="font-size:15px">{{totalActeurEnctivite}}</span><h4> ACTEUR EN ACTIVITE </h4>  </a> </li>

        <li class="bg_ly span4"> <a href="#" style="color:black;"><h4>TOTAL</h4> <i class="icon-fullscreen"></i><span class="label label-important" style="font-size:15px">{{totalActeurAccredite}}</span> <h4>ACTEUR ACCREDITE</h4></a> </li>
          <li class="bg_ly span4"> <a href="#" style="color:black;"><h4>TOTAL</h4> <i class="icon-fullscreen"></i><span class="label label-important" style="font-size:15px">{{totalActeurNonAccredite}}</span> <h4>ACTEUR NON ACCREDITE</h4></a> </li>
                <li class="bg_lo span4"> <a href="#" style="color:black;"><h4>TAUX</h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px" v-if="tauxActeurAccredite!='NaN'">{{tauxActeurAccredite}}%</span><h4> ACTEUR ACCREDITE</h4></a> </li>

        

        <li class="bg_ly span4"> <a href="#" style="color:black;"><h4>TAUX</h4> <i class="icon-fullscreen"></i><span class="label label-important" style="font-size:15px" v-if="tauxActeurNonAccredite!='NaN'">{{tauxActeurNonAccredite}}%</span> <h4> ACTEUR NON ACCREDITE</h4></a> </li>
  




             
            </ul>            
            </div>
            </div>


              <!--- debut deuxieme tableau  ---->

                     <div id="tab3" class="tab-pane">
            <div class="container-fluid">
         <div class="quick-actions_homepage" style="position: center;">
                  <ul class="quick-actions" style="margin: 0px !important;"> 

<li class="bg_lb span4"> <a href="#" style="color:black;"><h4>NOMBRE TOTAL </h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px">{{nombreTotalDeTouteMissions}}</span><h4>DE MISSION GLOBAL</h4></a> </li>

        <li class="bg_lg span4"> <a href="#" style="color:black;"><h4>DUREE MOYENNE </h4> <i class="icon-inbox"></i><span class="label label-success" style="font-size:15px">{{dureeMoyenneDeTouteLesMissions}}</span><h4> DE MISSION </h4>  </a> </li>

        <li class="bg_ly span4"> <a href="#" style="color:black;"><h4>MONTANT TOTAL</h4> <i class="icon-fullscreen"></i><span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(coutTotalDemission))}}</span> <h4>DES MISSIONS</h4></a> </li>
          <li class="bg_ly span4"> <a href="#" style="color:black;"><h4>COUT MOYEN DES BILLETS</h4> <i class="icon-fullscreen"></i><span class="label label-important" style="font-size:15px">{{formatageSomme(parseFloat(coutMoyenDeBilletAvionDeMissions))}}</span> <h4>D'AVION GLOBALE DE MISSION</h4></a> </li>
                <li class="bg_lo span4"> <a href="#" style="color:black;"><h4>TAUX DE DOSSIERS</h4> <i class="icon-dashboard"></i> <span class="label label-important" style="font-size:15px" v-if="tauxActeurAccredite!='NaN'">{{tauxDossierRejetMissions}}%</span><h4> DE MISSIONS REJETES</h4></a> </li>

        

        <li class="bg_ly span4"> <a href="#" style="color:black;"><h4>COUT MOYEN</h4> <i class="icon-fullscreen"></i><span class="label label-important" style="font-size:15px" v-if="tauxActeurNonAccredite!='NaN'">{{formatageSomme(parseFloat(coutMoyenDeMission))}}</span> <h4> DE MISSION</h4></a> </li>
  




             
            </ul>            







  
  
    </div>
     

    </div>
            </div>
<!--- fin deuxieme tableau  ---->



               </div>
               
        </div>
    </div>
</template>

<script>

    import {mapGetters, mapActions} from 'vuex'
    import {formatageSomme} from '../../Repositories/Repository'
    import {admin,dcf} from "../../Repositories/Auth"
    export default {

        data() {
            return {
                fabActions: [
                    {
                        name: 'cache',
                        icon: 'add'
                    },

                ],
                liste:[],


            };
        },

        created() {

        },
        computed: {
// methode pour maper notre guetter



 ...mapGetters("suivi_controle_budgetaire", ["missions" ,
 "getMissionPersonnaliser",
      "nombreTotalDeTouteMissions",
      "coutTotalDemission",
      "dureeMoyenneDeTouteLesMissions",
      "coutMoyenDeBilletAvionDeMissions",
      "tauxDossierRejetMissions",
      "coutMoyenDeMission",

      
      
 

      // "nbreArchivageNotes"
    ]),
      admin:admin,
      dcf:dcf,
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

  ...mapGetters('personnelUA', ['totalActeurNonAccredite','acteur_depenses',"type_salaries","type_contrats","type_acte_personnels","fonctions",
                "grades","niveau_etudes","nbr_acteur_actredite_taux","all_acteur_depense","totalActeurAccredite",
                "totalActeurEnctivite","totalActeurDepense","totalActeurAccredite","tauxActeurAccredite","totalActeurNonAccredite","tauxActeurNonAccredite"]),
                

    ...mapGetters("bienService",["getActeEffetFinancierPersonnaliser45","typeMarches","printMarcheNonAttribue","marches"]),

  nbreMarcheContrat(){
  return this.getActeEffetFinancierPersonnaliser45.filter(recuper => this.afficherAttributMarche(recuper.marche_id) == 2 && this.affichertypeMarcheEx(recuper.marche.type_marche_id) == 2 && recuper.difference_personnel_bienService == 3).length
},



afficherLaListeDesContratsDuPersonnel(){
return this.printMarcheNonAttribue.filter(element => element.type_marche.code_type_marche == 2).length;
},


afficherContratPlanifier(){
return this.printMarcheNonAttribue.filter(element => element.type_marche.code_type_marche == 2 && element.attribue == 0).length;
},

afficherNombreDeContratContratualisation(){
return this.printMarcheNonAttribue.filter(element => element.type_marche.code_type_marche == 2 && element.attribue == 1).length;
},

//  afficheNombreMarcheResilier(){
// return this.getActeEffetFinancierPersonnaliser45.filter(element => element.marche.attribue == 3)
// },


afficheNombreMarcheResilier(){
return this.getActeEffetFinancierPersonnaliser45.filter(element =>this.afficherAttributMarche(element.marche_id) == 3 && element.difference_personnel_bienService == 3).length
},



          
afficherAttributMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.attribue;
      }
      return 0
        }
      };
    },

                 affichertypeMarcheEx() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.typeMarches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code_type_marche;
      }
      return 0
        }
      };
    },



                
        },
        methods: {
            // methode pour notre action
            ...mapActions('personnelUA', ['getActeur',"ajouterActeur","supprimerActeurs","getNbrActeurAcrediteTaux","allActeurDepense"]),
            formatageSomme:formatageSomme

        }
    };
</script>

