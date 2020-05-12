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

                <li class="bg_lb">
                    <a href="#">
                        <i class="icon-dashboard"></i> <span class="label label-important">{{afficherLaListeDesContratsDuPersonnel}}</span> Nombre de contrat
                    </a>
                </li>
                <li class="bg_lg">
                    <a href="#"> <i class="icon-signal"></i> <span class="label label-important">{{afficherContratPlanifier}}</span> Nombre de contrat planifier
                    </a>
                </li>
                <li class="bg_ly">
                    <a href="#">
                        <i class="icon-inbox"></i><span class="label label-important">{{afficherNombreDeContratContratualisation}}</span> Nombre de contrat en contratualisation
                    </a>
                </li>

                <li class="bg_lo">
                    <a href="#">
                        <i class="icon-inbox"></i><span class="label label-important">{{nbreMarcheContrat}}</span> Nombre de contrat en execution
                    </a>
                </li>


                   <li class="bg_ls">
                    <a href="#">
                        <i class="icon-inbox"></i><span class="label label-important">{{afficheNombreMarcheResilier}}</span> Nombre de contrat resilié
                    </a>
                </li>
                
            </ul>            
            </div>
             
                </div>

             <div id="tab2" class="tab-pane">
             <div class="container-fluid">

               <ul class="quick-actions" style="margin: 0px !important;">

                <li class="bg_lb">
                    <a href="#">
                        <i class="icon-dashboard"></i> <span class="label label-important">{{totalActeurDepense}}</span> Total acteur depense
                    </a>
                </li>
                <li class="bg_lg">
                    <a href="#"> <i class="icon-signal"></i> <span class="label label-important">{{totalActeurEnctivite}}</span> Total acteur en activité
                    </a>
                </li>
                <li class="bg_ly">
                    <a href="#">
                        <i class="icon-inbox"></i><span class="label label-important">{{totalActeurAccredite}}</span> Total acteur accredité
                    </a>
                </li>
                <li class="bg_lb"> <a href="#"> <i class="icon-th"></i> <span class="label label-important">{{totalActeurNonAccredite}}</span> Total acteur non accredité</a> </li>
                <li class="bg_ls"> <a href="#"> <i class="icon-fullscreen"></i> <span class="label label-important" v-if="tauxActeurAccredite!='NaN'">{{tauxActeurAccredite || '0' }} %</span>
                    Taux acteurs acredité
                </a> </li>
                <li class="bg_ly">
                    <a href="#">
                        <i class="icon-inbox"></i><span class="label label-important">{{totalActeurAccredite}}</span> Total acteur accredité
                    </a>
                </li>
                <li class="bg_lb"> <a href="#"> <i class="icon-th"></i> <span class="label label-important">{{totalActeurNonAccredite}}</span> Total acteur non accredité</a> </li>
                <li class="bg_ls"> <a href="#"> <i class="icon-fullscreen"></i> <span class="label label-important" v-if="tauxActeurAccredite!='NaN'">{{tauxActeurAccredite || '0' }} %</span>
                    Taux acteurs acredité
                </a> </li>
            </ul>            
            </div>
            </div>


              <!--- debut deuxieme tableau  ---->

                     <div id="tab3" class="tab-pane">
            <div class="container-fluid">
         <div class="quick-actions_homepage" style="position: center;">
      <ul class="quick-actions" >
        
        <li class="bg_lb" title="Nombre total de mission global">
             <a href="#">
            <i class="icon-dashboard"></i> <span class="label label-important">{{nombreTotalDeTouteMissions}}
        </span> Nombre total de missions. </a> </li>
              
        <li class="bg_lg " title="Duree moyenne de mission">
             <a href="#">
             <i class="icon-eject"></i> <span class="label label-important">{{dureeMoyenneDeTouteLesMissions}} jrs</span>
                 Duree moyenne de missions 
             </a> </li>

        <li class="bg_ly" title="Montant total des missions ">
            <a href="#">
        <i class="icon-user"></i><span class="label label-success">{{formatageSomme(parseFloat(coutTotalDemission))}}
           </span> Cout total de missions . </a> </li>


        <li class="bg_lo" title="cout moyen des billets d'avion globale de mission">
             <a href="#">
             <i class="icon-th"></i><span class="label label-warning">{{formatageSomme(parseFloat(coutMoyenDeBilletAvionDeMissions))}}
              </span> Cout moyen des billets d'avion.</a> </li>

        <li class="bg_ls" title="Taux de dossiers de missions rejetés">
             <a href="#">
            <i class="icon-fullscreen"></i><span class="label label-success">{{tauxDossierRejetMissions}}
                %</span>
             Tx de dossiers de m. rejetés.</a> </li>
             

                 <li class="bg_lg" title="cout moyen de mission "> 
                <a href="#"> <i class="icon-info-sign"></i><span class="label label-primary">{{formatageSomme(parseFloat(coutMoyenDeMission))}}
             </span> cout moyen de missions </a> </li>
      

        
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
  ...mapGetters('personnelUA', ['totalActeurNonAccredite','acteur_depenses',"type_salaries","type_contrats","type_acte_personnels","fonctions",
                "grades","niveau_etudes","nbr_acteur_actredite_taux","all_acteur_depense","totalActeurAccredite",
                "totalActeurEnctivite","totalActeurDepense","totalActeurAccredite","tauxActeurAccredite","totalActeurNonAccredite"]),
                

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

