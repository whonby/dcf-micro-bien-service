<template>
    <div >
       <h3 style="text-align:center;font-size:50px">TABLEAU DE BORD EN MAINTENANCE</h3>
    </div>
</template>

<script>

    import {mapGetters, mapActions} from 'vuex'
    import {formatageSomme} from '../../src/Repositories/Repository';
import {noDCfNoAdmin,admin,dcf} from '../../src/Repositories/Auth';
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
      noDCfNoAdmin:noDCfNoAdmin,
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

