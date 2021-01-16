
<template>
  <div>

            <div class="table-responsive text-nowrap">
               <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                   
                    <th>Unité Administrative</th>
                    <th>Total Stock</th>
                     <th>Restant en Stock</th>
                      <th>Qté Réquise</th>
                      <th>Affecté</th>
                       <th>Non affecté</th>
                        <th>Montant a Couvert</th>
                         <th>Taux</th>
                          
                    
                  </tr>
                </thead>
                <tbody>
                   <tr
                    class="odd gradeX"
                    
                  >
                   
               
                    <td style="font-size:14px;font-weight:bold;">{{service.libelle || 'Non renseigné'}}</td>
                      
                      <td style="text-align: center;font-size:14px;font-weight:bold;">{{TotalEnStock(service.id) || 0}}</td>
                      <td style="text-align: center;font-size:14px;font-weight:bold;">{{RestantEnStock(service.id) || 0}}</td>
                      <td style="text-align: center;font-size:14px;font-weight:bold;">{{parseFloat(QteRequiseCotePersonnel(service.id))+parseFloat(QteRequiseCoteService(service.id)) || 0}}</td>
                      <td style="text-align: center;font-size:14px;font-weight:bold;">{{parseFloat(QteAffecteCotePersonnel(service.id))+parseFloat(QteAffecteCoteService(service.id)) || 0}}</td>
                      <td style="text-align: center;font-size:14px;font-weight:bold;">{{parseFloat((parseFloat(QteRequiseCotePersonnel(service.id))+parseFloat(QteRequiseCoteService(service.id))))-parseFloat((parseFloat(QteAffecteCotePersonnel(service.id))+parseFloat(QteAffecteCoteService(service.id))))}}</td>
                      <td style="text-align: center; color:red;font-size:14px;font-weight:bold;">{{formatageSomme(parseFloat(parseFloat(MONTANTACouvertCotePersonnel(service.id))+parseFloat(MONTANTACouvertCoteService(service.id)))) || 0}}</td>
                      <td style="text-align: center; color:red;font-size:14px;font-weight:bold;">{{(((parseFloat(QteAffecteCotePersonnel(service.id))+parseFloat(QteAffecteCoteService(service.id)))/(parseFloat(QteRequiseCotePersonnel(service.id))+parseFloat(QteRequiseCoteService(service.id))+0.01))*100).toFixed(2)|| 0}}%</td>
                    
                  

                  </tr>
                </tbody>
              </table>
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#tab1">PERSONNEL </a>
                      </li>
                       <li>
                        <a data-toggle="tab" href="#tab2">SERVICE </a>
                      </li>
                      <!-- <li>
                        <a data-toggle="tab" href="#tab3">AFFECTION DE LA DIRECTION</a>
                      </li> --> 
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="tab1" class="tab-pane active">
  <div class="widget-content nopadding" >
  
              <table class="table table-bordered table-striped" id="equipementTaux">
                <thead>
                  <tr>
                     
                    <!-- <th>Type Unite d'administrative</th> -->
                    
                     
                    <th>Matricule && Nom && Prénoms</th>
                    <th>Unité administrative</th>
                    <th>Unité de zone</th>
                    <th>Service</th>
                    <th>Fonction</th>
                  
                    <th >Quantité requise</th>
                     <th >Quantité couverte</th>
                     <th >Quantité non couverte</th>
                     <th >Montant A Paye</th>
                    <th>Taux</th>
                  </tr>
                </thead>
                <tbody>
                  
                  <tr
                    class="odd gradeX"
                    v-for="BesoinImmo in listeDesEquipementParAgent(service.id)"
                    :key="BesoinImmo.id"
                  >
   
                    
                    <td
                      style="font-size:14px;font-weight:bold;"
                    >{{afficherActeurDepense(BesoinImmo.acteur_depense_id) || 'Non renseigné'}}</td> 
                    <td
                      style="font-size:12px;font-weight:bold;"
                    >{{afficherUniteAdministrative(BesoinImmo.unite_administrative_id) || 'Non renseigné'}}</td> 
                     <td
                       style="font-size:12px;font-weight:bold;"
                    >{{afficheUniteZone(BesoinImmo.uniteZone_id)  || 'Non renseigné'}}</td> 
                    <td
                      style="font-size:12px;font-weight:bold;"
                    >{{afficheServiceLibelle(afficheService(BesoinImmo.service_id)) || 'Non renseigné'}}</td>
                  
                      <td style="font-size:12px;font-weight:bold;"
                      
                    >{{afficheFonction(BesoinImmo.fonction_id) || 'Non renseigné'}}</td>
                      <td style="text-align: center;font-size:14px;font-weight:bold;"
                      
                    >{{BesoinImmo.historiquenormequipement || 0}}</td>
                    <td 
                      style="text-align: center;font-size:14px;font-weight:bold;"
                    >{{BesoinImmo.normeequipement || 0}}</td>
                   
                     <td 
                     style="text-align: center;font-size:14px;font-weight:bold;"
                    >{{(BesoinImmo.historiquenormequipement) - (BesoinImmo.normeequipement) || 0}}</td>
                   <td 
                      style="text-align: center;font-size:14px;font-weight:bold;"
                    >{{formatageSomme(parseFloat(BesoinImmo.montantequipement)) || 0}}</td>
                      <td
                      style="text-align: center;font-size:14px;font-weight:bold;"
                    >{{((((BesoinImmo.historiquenormequipement) - (BesoinImmo.normeequipement))/(BesoinImmo.historiquenormequipement))*100).toFixed(2) || 0 }}%</td> 
                    
                     
                    
                    

                  </tr>
                 <tr>
                   <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td style="text-align: center;font-size:14px;font-weight:bold;"></td>
                  <td style="text-align: center; color:red;font-size:14px;font-weight:bold;"></td>
                  <td style="text-align: center; color:red;font-size:14px;font-weight:bold;"></td>
                  <td style="text-align: center;font-size:14px;font-weight:bold;">Total</td>
                  <td style="text-align: center; color:red;font-size:14px;font-weight:bold;">{{formatageSomme(parseFloat(MontantResteAPayeCotePersonnel(service.id)))}}</td>
                  <td style="text-align: center; color:red;font-size:14px;font-weight:bold;"></td>
                 </tr>
                 
                </tbody>
              </table>
            </div>
          </div>
                            <div id="tab2" class="tab-pane ">
  <div class="widget-content nopadding" >
     <!-- <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search1"/>
              </div> -->
               <table class="table table-bordered table-striped" id="TauxequipementParsService">
                    <thead>
                    <tr>

                        <th style="width:20%">Unité administrative</th>
                        <th style="width:20%">Service</th>
                        <th >Quantité requise</th>
                     <th >Quantité couverte</th>
                     <th >Quantité non couverte</th>
                     <th >Montant A Paye</th>
                       <th >Taux</th>
                         
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="odd gradeX" v-for="affectService in tauxServiceEquipe(service.id)"
                        :key="affectService.id">
                        
                              <td style="font-size:12px;font-weight:bold;">
                            {{afficherUniteAdministrative(affectService.ua_id) || 'Non renseigné'}}</td>
                            <td style="font-size:12px;font-weight:bold;">
                            {{afficherLibelleService(affectService.serviceua_id) || 'Non renseigné'}}</td>
                     
                      <td style="text-align: center;font-size:14px;font-weight:bold;" >
                            {{affectService.historiqueequipement || 0 }}</td>
                             
                            <td 
                      style="text-align: center;font-size:14px;font-weight:bold;"
                    >{{(affectService.historiqueequipement) - (affectService.normeequipement) || 0}}</td> 
                            <td 
                      style="text-align: center;font-size:14px;font-weight:bold;"
                    >{{affectService.normeequipement || 0}}</td>
                     <td 
                      style="text-align: center; color:red;font-size:14px;font-weight:bold;"
                    >{{formatageSomme(parseFloat(affectService.montantequipement)) || 0}}</td>
                    <td
                      style="text-align: center; color:red;font-size:14px;font-weight:bold;"
                    >{{((((affectService.historiqueequipement) - (affectService.normeequipement))/(affectService.historiqueequipement))*100).toFixed(2) || 0 }}%</td> 
                    </tr>
                   <tr>
                   <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                 
                  <td style="text-align: center; color:red;font-size:14px;font-weight:bold;">Total</td>
                  <td style="text-align: center; color:red;font-size:14px;font-weight:bold;">{{formatageSomme(parseFloat(MontantResteAPayeCoteService(service.id)))}}</td>
                  <td style="text-align: center; color:red;font-size:14px;font-weight:bold;"></td>
                 </tr>
                 
                    </tbody>
                </table>

            </div>
          </div>
        </div>
      </div>
      
     
 
              </table>
 
  </div>

  </div>
</template>
  
<script>
import { mapGetters } from "vuex";
import moment from "moment";
import {formatageSomme} from '../../../../../src/Repositories/Repository'
// import { formatageSomme } from "../../../../Repositories/Repository";
// import {admin,dcf,noDCfNoAdmin} from "../../../../Repositories/Auth"

export default {
  name: '',
  data() {
    return {
   
      search: "",
      search1: ""
    };
  },

created() {
    this.getDetail()
  },

  watch: {
    '$route' : 'getDetail'
  },
  computed: {
      ...mapGetters("SuiviImmobilisation", ["services"]),
   ...mapGetters("uniteadministrative", ["uniteAdministratives","directions","servicesua","uniteZones"]),
     ...mapGetters('personnelUA', ["personnaliseActeurDepense","acte_personnels","personnaFonction","fonctions"]),
    
     ...mapGetters('parametreGenerauxAdministratif', ['getterplanOrganisationUa']) ,
     ...mapGetters("SuiviImmobilisation", ["immobilisations","getPersoStock"]),
    
      ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
  MONTANTACouvertCoteService() {
      return id => {
    if(id !=""){
  
        
    return this.getterplanOrganisationUa.filter(element => element.ua_id == id && element.serviceua_id != null && element.normeequipement != 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montantequipement), 0).toFixed(0); 
      
    }
    return 0
  }
    },
    MONTANTACouvertCotePersonnel() {
      return id => {
    if(id !=""){
  
        
    return this.personnaliseActeurDepense.filter(element => element.unite_administrative_id == id && element.normeequipement != 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montantequipement), 0).toFixed(0); 
      
    }
    return 0
  }
    },
    MontantResteAPayeCotePersonnel() {
      return id => {
    if(id !=""){
  
        
    return this.personnaliseActeurDepense.filter(element => element.unite_administrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montantequipement), 0).toFixed(0); 
      
    }
    return 0
  }
    },
    MontantResteAPayeCoteService() {
      return id => {
    if(id !=""){
  
        
    return this.getterplanOrganisationUa.filter(element => element.ua_id == id && element.serviceua_id != null && element.fonction_id == null).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montantequipement), 0).toFixed(0); 
      
    }
    return 0
  }
    },
  afficherLibelleService() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.services.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
  afficheFonction() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.fonctions.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
  afficheService() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.servicesua.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.serviceua_id;
      }
      return 0
        }
      };
    },
 afficheServiceLibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.services.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
afficherActeurDepense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.personnaFonction.find(qtreel => qtreel.acteur_depense.id == id);

      if (qtereel) {
        return qtereel.acteur_depense.matricule.concat('    ', qtereel.acteur_depense.nom,'     ',qtereel.acteur_depense.prenom);
      }
      return 'Non renseigné'
        }
      };
    },
afficherUniteAdministrative() {
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
afficheUniteZone() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteZones.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },


listeDesEquipementParAgent() {
      return id => {
    if(id !=""){
  
        
    return this.acte_personnels.filter(element => element.unite_administrative_id == id && element.normeequipement != null); 
      
    }
    return 0
  }
    },
tauxServiceEquipe() {
      return id => {
    if(id !=""){
  
        
    return this.getterplanOrganisationUa.filter(element => element.ua_id == id && element.serviceua_id != null && element.fonction_id == null); 
      
    }
    return 0
  }
    },







     RestantEnStock() {
      return id => {
    if(id !=""){
  
        
    return this.getPersoStock.filter(element => element.uAdministrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantitestock), 0).toFixed(0); 
      
    }
    return 0
  }
    },
    TotalEnStock() {
      return id => {
    if(id !=""){
  
        
    return this.getPersoStock.filter(element => element.uAdministrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.histo_qte), 0).toFixed(0); 
      
    }
    return 0
  }
    },
    QteRequiseCotePersonnel() {
      return id => {
    if(id !=""){
  
        
    return this.personnaliseActeurDepense.filter(element => element.unite_administrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.historiquenormequipement), 0).toFixed(0); 
      
    }
    return 0
  }
    },
     QteAffecteCotePersonnel() {
      return id => {
    if(id !=""){
  
        
    return this.acte_personnels.filter(element => element.unite_administrative_id == id && element.normeequipement ==0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.historiquenormequipement), 0).toFixed(0); 
      
    }
    return 0
  }
    },
    QteAffecteCoteService() {
      return id => {
    if(id !=""){
  
        
    return this.getterplanOrganisationUa.filter(element => element.ua_id == id && element.serviceua_id != null && element.normeequipement != element.historiqueequipement).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.normeequipement), 0).toFixed(0); 
      
    }
    return 0
  }
    },
    QteRequiseCoteService() {
      return id => {
    if(id !=""){
  
    return this.getterplanOrganisationUa.filter(element => element.ua_id == id && element.serviceua_id != null).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.historiqueequipement), 0).toFixed(0); 
      
    }
    return 0
  }
    },
 
    
    
    
  },
  methods: {
    getDetail(){
        this.service = this.uniteAdministratives.find(
      service => service.id == this.$route.params.id
    );
    },
    formatageSomme:formatageSomme,
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
   
       
  }
};
</script>
<style scoped>

</style>
