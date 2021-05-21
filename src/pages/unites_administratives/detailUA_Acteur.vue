
<template>
    

<div>
     <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="pagePrecedent">Page Précédente</button>
    
        </div>
        <div class="container-fluid">
            


            <div class="widget-box">
              
                <div class="widget-content">
                    <div class="widget-content nopadding">
                        <table class="table table-striped table-bordered" v-if="detail_marche">
                            <thead>
                            <tr>
                                <th>Type UA</th>
                                <th>Nature de section</th>
                                <th>Section</th>
                                <th>Code</th>
                                <th>UA</th>
                                
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-if="detail_marche">
                                
                                 <td class="taskOptions">
                                    {{libelleUa(detail_marche.type_ua_id)}}
                                </td>
                               
                                <td class="taskDesc">{{libelleNatureSection(detail_marche.nature_section_id)}}</td>
                                <td class="taskStatus">{{libelleSection(detail_marche.section_id)}}</td>
                                <td class="taskStatus">{{detail_marche.code}}</td>
                                <td class="taskStatus">{{detail_marche.libelle}}</td>
                            </tr>
                            </tbody>
                        </table>             

                    </div>
                </div>
            </div> 
      

 <table class="table table-bordered table-striped" id="">
                <thead>
                  <tr>
                    <th title="">Matricule  </th>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th title="">Sexe</th>
                     <th title="">Email</th>
                    <th>Date de naissance</th>
                    <th title="">Nom du père</th>
                    <th>Nom de mère  </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="odd gradeX" 
                    v-for="item in listeActeurEnfonctionDeUA(detail_marche.id)" :key="item.id"
                    
                  >
                   
                    <td >{{libelleActeurDepense(item.acteur_depense_id)}} </td>
                    <td>{{libelleNom(item.acteur_depense_id)}} </td>
                   <td>{{libellePrenom(item.acteur_depense_id)}} </td>
                   <td>{{libelleSexe(item.acteur_depense_id)}} </td>
                   <td>{{libelleEmail(item.acteur_depense_id)}} </td>
                   <td>{{libelleDateNaissance(item.acteur_depense_id)}} </td>
                   <td>{{libelleNomPere(item.acteur_depense_id)}} </td>
                   <td>{{libelleNomMere(item.acteur_depense_id)}} </td>
                 
                  
                  </tr>
                </tbody>
              </table>
    
              


           
              <!-- <div class="modal-footer">
        
        <a data-dismiss="modal" class="btn btn-danger" @click.prevent="retourListeEntreprise" href="#">Voir Tableau Marché</a>
       
      </div> -->
        </div>
          

</div>

</template>

<script>
//import guichet from "../../../pages/parametres_generaux/source_financement/ComponentGuichet/guichet"
    import { mapGetters} from "vuex";
    
    export default {
        
        components:{
         
       // guichet

        },
        data() {
            return {
                fabActions: [
                    {
                        name: "cache",
                        icon: "add"
                    }

                ],
                
                    
             // bailleurid:"",
              detail_marche:""
            };
        },
     props:["unite_administrative"],
created() {
            this.marcheid=this.$route.params.id
   this.detail_marche = this.jointureUaChapitreSection.find(
       idmarche => idmarche.id == this.$route.params.id
   )
  /*  this.appel_offre_marche=this.appelOffres.filter( idmarche => idmarche.marche.id == this.$route.params.id)
    console.log(this.appel_offre_marche)*/
},
        computed: {

    
           ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetEclate",
      
      // "chapitres",
      // "sections"
    ]),
    ...mapGetters("parametreGenerauxAdministratif", [
      "chapitres",
      "sections",
      "type_Unite_admins",
      "services_gestionnaires",
      "structures_administratives",
      "localisations_geographiques",
      "afficheServiceGestionnaireNiveau4",
      "afficheLocalisationGeoNiveau5",
      "natures_sections",
      "structures_geographiques"
    ]),
             ...mapGetters('personnelUA', ["personnaFonction","afficheNombrePersonnelRecuActeNormination","fonctionBudgetaire",
             "type_salaries","type_contrats","acte_personnels","type_acte_personnels","fonctions","grades","niveau_etudes",
                "nbr_acteur_actredite_taux","all_acteur_depense","personnaliseActeurFinContrat",
                "totalActeurEnctivite","totalActeurDepense","totalActeurAccredite","tauxActeurAccredite",
                "totalActeurNonAccredite","personnaliseActeurDepense","affichePersonnelRecuActeNormination"]),

                listeActeurEnfonctionDeUA(){
                    return id=>{
                        if(id!=null && id!=""){
                            return this.acte_personnels.filter(item1=> item1.unite_administrative_id==this.detail_marche.id)
                        }
                    }
                },
     

          // afficher ID UA dans la table Acte personnel

           libelleActeurDepense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.all_acteur_depense.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.matricule;
      }
      return 0
        }
      };
    },
    
      libelleNom() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.all_acteur_depense.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.nom;
      }
      return 0
        }
      };
    },
     libellePrenom() {
         
      return id => {
        if (id != null && id != "") {
           const qtereel = this.all_acteur_depense.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.Prenom;
      }
      return 0
        }
      };
    },

     libelleSexe() {
         
      return id => {
        if (id != null && id != "") {
           const qtereel = this.all_acteur_depense.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.sexe;
      }
      return 0
        }
      };
    },
    
         libelleEmail() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.all_acteur_depense.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.email;
      }
      return 0
        }
      };
    },

      libelleDateNaissance() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.all_acteur_depense.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.date_naissance;
      }
      return 0
        }
      };
    },

    libelleNomPere() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.all_acteur_depense.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.nom_pere;
      }
      return 0
        }
      };
    },
    libelleNomMere() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.all_acteur_depense.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.nom_mere;
      }
      return 0
        }
      };
    },

    
    



           libelleUa() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.type_Unite_admins.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
     libelleSection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sections.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.nom_section;
      }
      return 0
        }
      };
    },
     libelleNatureSection() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.natures_sections.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
   


        },
        
        methods: {
         
          


//formatageSomme:formatageSomme,




    //            ajouterEtatLocal(){
    //      this.ajouterEtatProcedure(this.formEtat)
    //      this.formEtat={
    //          date_realisation:"",
    //          libelle_etat:"reception de la cotation"
    //      }
    //  },

              pagePrecedent(){
                window.history.back()
            },
           
           
      
        }
    };
</script>
