
<template>
  <div>
    <div id="modificationModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier le Service</h3>
      </div>
      <div class="modal-body">
     <table class="table table-bordered table-striped">
         {{editService.id}}
          {{editService.vehicule_id}}
     </table>
      </div>
      <div class="modal-footer">
        <a
          
          class="btn btn-primary"
          href="#"
          
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          
                                    <div>
                                
                <!-- <div  align="right" style="cursor:pointer;">
    <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
        </div>  -->
                              </div>

          <div class="widget-box">
                <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                   
                    <th>Immatriculation</th>
                    <th>Type véhicule</th>
                     <th>Marque</th>
                    <th>Modèle</th>
                     <th>Ua</th>
                    
                  </tr>
                </thead>
               <tbody>
                  <tr
                    class="odd gradeX">	
    
                    <td style="">{{detail.numimmatriculation || 'Non renseigné'}}</td>
                    <td style="">{{libelleTypeVehicule(detail.typevehicule) || 'Non renseigné'}}</td>
                    <td style="">{{libellemarqueVehicules(detail.marque) || 'Non renseigné'}}</td>
                    <td style="">{{libelleModeleVehicules(detail.modele) || 'Non renseigné'}}</td>
                    <td style="">{{libelleUa(detail.uniteadministrative) || 'Non renseigné'}}</td>
                    
                  </tr>
                </tbody>
              </table>
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Affectation véhicules</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
              </div> -->
            </div>

            <div class="widget-content nopadding">
              
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                   
                   
                    <th>Date affectation</th>
                     <th>Personnel</th>
                      <!-- <th>Chauffeur</th> -->
                    <th colspan="2">Action</th>
                  </tr>
                </thead>
               <tbody>
                  <tr
                    class="odd gradeX"
                    v-for="service in listeAffectation(detail.id)"
                    :key="service.id"
                  >
                   
                    <td style="width:70%" @dblclick="afficherModalModifierService(service.id)">{{formaterDate(service.date_affectation) || 'Non renseigné'}}</td>
                    <td style="width:20%" @dblclick="afficherModalModifierService(service.id)">{{NomPersonnel(service.personnel_id) || 'Non renseigné'}}</td>
                    <!-- <td style="" @dblclick="afficherModalModifierService(index)">{{service.chauffeur_id || 'Non renseigné'}}</td> -->
                     <td>
                      <button class="btn  btn-success" @click="afficherModalModifierService(service.id)" v-if="service.etat_veh == 1"  title="Vehicule déja affecté">
                        <span>
                          <i class="icon-thumbs-up"></i>
                        </span>
                      </button>
                      <button v-else  class="btn  btn-danger" >
              
                        <span>
                          <i class=" icon-thumbs-down"></i>
                        </span>
                </button>
                    </td>
                     
                    <td>
                      <button class="btn btn-danger" @click="supprimerAffectationVehicule(service.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            



              
            </div>
          </div>
        </div>
      </div>
    </div>

    
<notifications  />
 </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
//   import {partition} from '../../../../src/Repositories/Repository'
import moment from "moment";
export default {
  name:'service',
  data() {
    return {
       page:0,
       size:10,
      active_el:0,
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
        // {
        //   name: "alertMe",
        //   icon: "add_alert",
        //   class: ""
        // }
      ],
json_fields: {
       
       
        LIBELLE: "libelle"
      },
      formData: {
      
        libelle: ""
      },
      editService: {
      
       
      },
      search: ""
    };
  },
created() {
         
            this.detail=this.getvehicules.find(item=>item.id==this.$route.params.id)
            
           
        },
  computed: {
      ...mapGetters("SuiviImmobilisation", ["AffectationVehicules","EtatImmobilisations","TypeEnergie","marqueVehicules","ModeleVehicules","TypeEntretien","TypeVehicule","TypeReparation"]),  
      
     ...mapGetters('uniteadministrative',[
 "uniteAdministratives",
   "getvehicules"
   
   ]),
   ...mapGetters('personnelUA', ["acteur_depenses","personnaFonction","afficheNombrePersonnelRecuActeNormination","fonctionBudgetaire","type_salaries","type_contrats","acte_personnels","type_acte_personnels","fonctions","grades","niveau_etudes",
                "nbr_acteur_actredite_taux","all_acteur_depense","personnaliseActeurFinContrat","personnaliseActeurDepense",
                "totalActeurEnctivite","totalActeurDepense","totalActeurAccredite","tauxActeurAccredite","totalActeurNonAccredite","personnaliseActeurDepense","affichePersonnelRecuActeNormination"]),
   
   
   
   
   
   NomPersonnel() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.personnaliseActeurDepense.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.nom.concat("  ", qtereel.prenom);
      }
      return 0
        }
      };
    },
   listeAffectation() {
      return id => {
        if (id != null && id != "") {
           return this.AffectationVehicules.filter(qtreel => qtreel.vehicule_id == id);
      
        }
      };
    },
    libelleEtatImmobilisations() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.EtatImmobilisations.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    libelleTypeVehicule() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.TypeVehicule.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
       libelleModeleVehicules() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.ModeleVehicules.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    libelleUa() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
     libellemarqueVehicules() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marqueVehicules.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    filtre_service() {
      const st = this.search.toLowerCase();
      return this.services.filter(type => {
        return (
         
          type.libelle.toLowerCase().includes(st)
        );
      });
    }
  },
  methods: {
    ...mapActions("SuiviImmobilisation", [
      "modifierAffectationVehicule",
      "supprimerAffectationVehicule"
    ]),
   ...mapActions("uniteadministrative", [
      "ajouterNouveauVehicule",
      "modifierVehicule"
      ]),








    //afiicher modal ajouter
    afficherModalAjouterService() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterServiceLocal() {
      this.ajouterService(this.formData);

      this.formData = {
        
        libelle: ""
      };
    },
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    // afficher modal de modification
    afficherModalModifierService(id) {
      // this.$("#modificationModal").modal({
      //   backdrop: "static",
      //   keyboard: false
      // });

      this.editService = this.listeAffectation(this.detail.id).find(item=>item.id=id);
       var nouveauObjet ={
        
        
        id:this.editService.id,
        etat_veh:0
      }
      var nouveauObjet1 ={
        
        id:this.editService.vehicule_id,
        situationvehicule:0
        
      }
      this.modifierAffectationVehicule(nouveauObjet);
      this.modifierVehicule(nouveauObjet1);
    },
    // fonction pour vider l'input modification
    modifierServiceLocal() {
       this.editService = this.listeAffectation(this.detail.id).find(item=>item.id=this.id);
        var nouveauObjet ={
        
        
        id:this.editService.id,
        etat_veh:0
      }
      var nouveauObjet1 ={
        
        id:this.editService.vehicule_id,
        situationvehicule:0
        
      }
      this.modifierAffectationVehicule(nouveauObjet);
      this.modifierVehicule(nouveauObjet1);

      // this.editService = {
      // 
      //   libelle: ""
      // };
    },
    alert() {
      console.log("ok");
    },

    ExporterEnExel(){
      this.$refs.excel.click()
    }
  },

  
};
</script>

