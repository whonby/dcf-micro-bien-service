
<template>

<div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Suivi des Réparations</h5>
             
            </div>

            <div class="table-responsive text-nowrap">
                
              <table class="table table-bordered table-striped">
                  
                <div class="widget-box">
                  <div class="widget-title">
                      
                    <ul class="nav nav-tabs">
                     <li class="active"><a data-toggle="tab" href="#Techniques">Informations</a></li>
        <!-- <li class=""><a data-toggle="tab" href="#Informations">Autres Informations</a></li> -->
        
                      
                     
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                  <div id="Techniques" class="tab-pane active">
         <table class="table table-bordered table-striped">
               <tr>
               
                 <td>
                    

                 <div class="control-group">
            <label class="control-label" title="unite administrative">UA</label>
            <div class="controls" >
            <select v-model="formData.ua_id" class="span">
               <option v-for="plans in groupeUaPourMarheHorSib" :key="plans[0].id" 
               :value="plans[0].uniteadministrative_id">{{afficherLibelleUniteAdministrative(plans[0].uniteadministrative_id)}}</option>
           </select>
            </div>
          </div>
                 </td>
                 <td>
                    <div class="control-group">
                  <label class="control-label" style="font-size:14px">Type véhicule</label>
                  <div class="controls">
                    <select  class="span" v-model="formData1.typeveh">
                      <option></option>                     
                      <option
                        v-for="typeUniteA in typeVehiculeparUa(formData.ua_id)"
                        :key="typeUniteA.id"
                        :value="typeUniteA.typevehicule"
                      >{{libelleTypeVehicule(typeUniteA.typevehicule)}}</option>
                    </select>
                  </div>
                </div>
                 </td>
                 <td>
                    <div class="control-group">
                  <label class="control-label" style="font-size:14px">Véhicule</label>
                  <div class="controls">
                    <select  class="span" v-model="formData.vehicule_id ">
                      <option></option>                     
                      <option
                        v-for="typeUniteA in listeVehicule(formData.ua_id)"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.numimmatriculation}}-{{libellemarqueVehicules(typeUniteA.marque)}}</option>
                    </select>
                  </div>
                </div>
                 </td>
               </tr>
               <tr>
                 <td colspan="3">
                   
   
      
     
        <div class="control-group">
           <label class="control-label">Panne(s) signalée(s)</label>
            <div class="controls">
              <textarea class="span12" v-model="formData.panne_signale " rows="3" placeholder="Enter text ..."></textarea>
            </div>
          
        </div>
      
    
  
                 </td>
               </tr>
               <tr>
                  <td>
               <div class="control-group">
            <label class="control-label">Ligne Budgétaire</label>
            <div class="controls">
                              <select   class="span" v-model="formData.lignebudgetaire_id">
                                <option></option>
            <option
                        v-for="typeUniteA in afficheLigneReparation(formData.ua_id)"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{Codeeconomique(typeUniteA.ligneeconomique_id)}}</option>
                </select>
            </div>
          </div>
            </td>
                  <td>
               <div class="control-group">
            <label class="control-label">Détenteur</label>
            <div class="controls">
                              <select   class="span" v-model="formData.personnel_id">
                                <option></option>
            <option v-for="resultat in affichePersonnel(formData.vehicule_id)" :key="resultat.id" 
            :value="resultat.personnel_id">{{NomPersonnel(resultat.personnel_id)}}</option>
                </select>
            </div>
          </div>
            </td>
             <td>
               <div class="control-group">
            <label class="control-label">Date du signal</label>
            <div class="controls">
              <input
                type="date"
                v-model="formData.date_signal"
                class="span"
                
              />
            </div>
          </div>
            </td>
            
               </tr>
                <tr>
                  <td>
               <div class="control-group">
            <label class="control-label">Garage</label>
            <div class="controls">
                              <select   class="span" v-model="formData.entreprise_id">
                                <option></option>
            <!-- <option v-for="resultat in affichePersonnel(formData.ua_id)" :key="resultat.id" 
            :value="resultat.acteur_depense_id">{{NomPersonnel(resultat.acteur_depense_id)}}</option> -->
                </select>
            </div>
          </div>
            </td>
                   
                  <td>
               <div class="control-group">
            <label class="control-label">Date d'envoi</label>
            <div class="controls">
              <input
                type="date"
                v-model="formData.date_envoi"
                class="span"
                
              />
            </div>
          </div>
            </td>
             
            <td colspan="">
               <div class="control-group">
            <label class="control-label">Coût de réparation</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.cout_reparation"
                class="span"
                
              />
            </div>
          </div>
            </td>
               </tr>
        </table>
      </div>
                  </div>  

                  
                  
                  <br />
                  <div align="right">
                    <div class="controls">
                      <div data-toggle="buttons-checkbox" class="btn-group">
                        <a
                          class="btn btn-primary"
                          @click.prevent="AjouterVehicule"
                        >Valider</a>
                        <a
                          @click.prevent="afficherModalListePersonnel()"
                          class="btn"
                          href="#"
                        >Fermer</a>
                      </div>
                    </div>
                  </div>
                </div>
              </table>
            </div>
          </div>
        </div>
      </div>
     <notifications  />
    </div>

</template>

<script>

import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import {admin,dcf,cf} from '../../../../../Repositories/Auth';
// import { ModelListSelect } from "vue-search-select";
// import "vue-search-select/dist/VueSearchSelect.css";
export default {
  // components: {
  //   ModelListSelect
  // },
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],
formData:{

},
formData1:{

},
      search: ""
    };
  },
props:["macheid"],
 created() {
            this.marcheid=this.$route.params.id
   this.detail_Facture = this.getFacturePersonnaliser.find(
       idmarche => idmarche.id == this.$route.params.id
         )
      
},
  computed: {
  ...mapGetters("bienService", ["getFacturePersonnaliser","personnaliseGetterMarcheBailleur","modepaiements",'mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser", "typeActeEffetFinanciers"]),

   ...mapGetters('personnelUA', ['acteur_depenses',"paiementPersonnel"]),
   ...mapGetters("SuiviImmobilisation", ["AffectationVehicules","Transmissions","EtatImmobilisations","TypeEnergie","marqueVehicules","ModeleVehicules","TypeEntretien","TypeVehicule","TypeReparation"]),
   ...mapGetters('uniteadministrative',[
     "groupeUaPourMarheHorSib",
    "plans_programmes",
 "uniteAdministratives",
 "afficheNiveauAction",
 "afficheNiveauActivite",
 "derniereNivoPlanBudgetaire",
 "getPersonnaliseBudgetGeneralParPersonnel",
   "decomptefactures",
   "getvehicules",
   "budgetEclate"
   
   
   ]),

   ...mapGetters('parametreGenerauxAdministratif',[

 "sections",
 "type_Unite_admins",
 "plans_programmes",
 "natures_sections",
 "grandes_natures",
 "afficheNiveauPlanProg",
 "exercices_budgetaires",
 "taux"
   ]),

   ...mapGetters('parametreGenerauxFonctionnelle',[

      "plans_fonctionnels",
 "afficheNiveauPlanFonctionnel"
   ]),

...mapGetters('parametreGenerauxActivite',[ 'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

...mapGetters('parametreGenerauxBudgetaire',["plans_budgetaires","derniereNivoPlanBudgetaire"]),
...mapGetters("gestionMarche", ['secteur_activites', 'entreprises','banques','comptes','getCompte']),
   admin:admin,
dcf:dcf,
cf:cf,
...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
      ...mapGetters('personnelUA', ["acteur_depenses","personnaFonction","afficheNombrePersonnelRecuActeNormination","fonctionBudgetaire","type_salaries","type_contrats","acte_personnels","type_acte_personnels","fonctions","grades","niveau_etudes",
                "nbr_acteur_actredite_taux","all_acteur_depense","personnaliseActeurFinContrat","personnaliseActeurDepense",
                "totalActeurEnctivite","totalActeurDepense","totalActeurAccredite","tauxActeurAccredite","totalActeurNonAccredite","personnaliseActeurDepense","affichePersonnelRecuActeNormination"]),
      afficherLibelleUniteAdministrative(){
      return id =>{
        if(id!=null && id!=""){
          let objet = this.uniteAdministratives.find(item => item.id==id)
          if(objet){
            return objet.libelle
          }
          return null
        }
      }
    },
//                lesClassDe3() { 
// const isClassDe3 = (code) => code.charAt(0)== "6" && code.charAt(1)== "1" && code.charAt(2)== "4"; 
// return this.afficheLigneReparation(formData.ua_id).filter(x => isClassDe3(x.code));
//  },
 Codeeconomique() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ', qtereel.libelle);
      }
      return 0
        }
      }
    },
     afficheLigneReparation() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id);
      
        }
      };
    },
     affichePersonnel() {
      return id => {
        if (id != null && id != "") {
           return this.AffectationVehicules.filter(qtreel => qtreel.vehicule_id == id && qtreel.etat_veh==1);
      
        }
      };
    },
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

     typeVehiculeparUa() {
      return id => {
        if (id != null && id != "") {
           return this.getvehicules.filter(qtreel => qtreel.uniteadministrative == id);
      
        }
      };
    },
    listeVehicule() {
      return id => {
        if (id != null && id != "") {
           return this.getvehicules.filter(qtreel => qtreel.uniteadministrative == id && qtreel.typevehicule == this.formData1.typeveh);
      
        }
      };
    },
   afficherUAParDroitAccess() {
       // const st = this.search.toLowerCase();
        if (this.cf){
            let colect=[];
            this.uniteAdministratives.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
             return colect;
          
        }

        return this.uniteAdministratives;
        //return this.uniteAdministratives
            // return (
            //     items.secti.nom_section.toLowerCase().includes(st) ||
            //     items.libelle.toLowerCase().includes(st)
            // );
        

    },
 
 fonctionModele() {
      return id => {
        if (id != null && id != "") {
           return this.ModeleVehicules.filter(qtreel => qtreel.marque_id == id);
      
        }
      };
    },
  },
  methods: {
    
     ...mapActions("uniteadministrative", [
      "ajouterReparationVehicule"
      ]),
      afficherModalListePersonnel(){
                this.$router.push({ name: 'ReparationVehicule' })
            },
      afficherModalListeExecution(){
                window.history.back();
            },
     AjouterVehicule() {
      
      
      this.ajouterReparationVehicule(this.formData);
    
      this.formData = {
        ua_id:"",
        vehicule_id:"",
        
        panne_signale:"",
        typevehicule:"",
        personnel_id:"",
        date_signal:"",
        date_envoi:"",
        	entreprise_id:"",
        date_retour:"",
       
        
      };
    },
   
 formaterDate(date) {
            return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
    afficherModalAjouterpaiementPersonnel() {
      this.$("#ModalDecompte").modal({
        backdrop: "static",
        keyboard: false
      });
    }
  }
};
</script>
<style scoped>

.grdirModalActeEffet{
  width: 92%;
  margin: 0 -43%;
}
th{
  text-align:left;
}
</style>
