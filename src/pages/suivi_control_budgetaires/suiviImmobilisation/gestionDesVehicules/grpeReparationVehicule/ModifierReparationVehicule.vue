
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
                  <label class="control-label" style="font-size:14px">Unité Administrative</label>
                  <div class="controls">
                    <select  class="span" v-model="detail.ua_id ">
                      <option></option>                     
                      <option
                        v-for="typeUniteA in afficherUAParDroitAccess"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
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
                        v-for="typeUniteA in typeVehiculeparUa(detail.ua_id)"
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
                    <select  class="span" v-model="detail.vehicule_id ">
                      <option></option>                     
                      <option
                        v-for="typeUniteA in listeVehicule(detail.ua_id)"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.numimmatriculation}}-{{libellemarqueVehicules(typeUniteA.marque)}}</option>
                    </select>
                  </div>
                </div>
                 </td>
                 <td>
                    <div class="control-group">
                  <label class="control-label" style="font-size:14px">Numéro Contrat</label>
                  <div class="controls">
                    <select  class="span" v-model="detail.acte_id ">
                      <option></option>                     
                      <option
                        v-for="typeUniteA in NumeroContrat(detail.ua_id)"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.reference_act}}</option>
                    </select>
                  </div>
                </div>
                 </td>
               </tr>
               <tr>
                 <td colspan="4">
                   
   
      
      <div class="widget-content">
        <div class="control-group">
          <form>
            <div class="controls">
              <textarea class="textarea_editor span14" :value="libelleMarche(MarcheActe_id(detail.acte_id))" rows="6" placeholder="Enter text ..."></textarea>
            </div>
          </form>
        </div>
      </div>
    
  
                 </td>
               </tr>
               <tr>
                 <td colspan="3">
               <div class="control-group">
            <label class="control-label">Ligne Budgétaire</label>
            <div class="controls">
               <input
                type="text"
                :value="Codeeconomique(LigneBudgetaireAttrivue(MarcheActe_id(formData.acte_id)))"
                class="span"
                readonly
              />

            </div>
          </div>
            </td>
                  <td>
               <div class="control-group">
            <label class="control-label">Détenteur</label>
            <div class="controls">
                              <select   class="span" v-model="detail.personnel_id">
                                <option></option>
            <option v-for="resultat in affichePersonnel(detail.vehicule_id)" :key="resultat.id" 
            :value="resultat.personnel_id">{{NomPersonnel(resultat.personnel_id)}}</option>
                </select>
            </div>
          </div>
            </td>
             
               </tr>
                <tr>
                  <td>
               <div class="control-group">
            <label class="control-label">Date du signal</label>
            <div class="controls">
              <input
                type="date"
                v-model="detail.date_signal"
                class="span"
                
              />
            </div>
          </div>
            </td>
                  <td>
               <div class="control-group">
            <label class="control-label">Date d'envoi</label>
            <div class="controls">
              <input
                type="date"
                v-model="detail.date_envoi"
                class="span"
                
              />
            </div>
          </div>
            </td>
                  <td>
               <div class="control-group">
            <label class="control-label">Garage</label>
            <div class="controls">
                              <input
                type="text"
                :value="RaisonSocialEntreprise(idEntreprise(detail.acte_id))"
                class="span"
                readonly
              />
            </div>
          </div>
            </td>
             <!-- <td>
               <div class="control-group">
            <label class="control-label">Date du Retour</label>
            <div class="controls">
              <input
                type="date"
                v-model="detail.date_retour"
                class="span"
                
              />
            </div>
          </div>
            </td> -->
            <td>
               <div class="control-group">
            <label class="control-label">Coût de réparation</label>
            <div class="controls">
              <input
                type="text"
                :value="MontantReparation(detail.acte_id)"
                class="span"
                readonly
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
                        >Modifier</a>
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
// // import { ModelListSelect } from "vue-search-select";
// // import "vue-search-select/dist/VueSearchSelect.css";
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
         
            this.detail=this.ReparationVehicules.find(item=>item.id==this.$route.params.id)
            
           
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
    "plans_programmes",
 "uniteAdministratives",
 "afficheNiveauAction",
 "afficheNiveauActivite",
 "derniereNivoPlanBudgetaire",
 "getPersonnaliseBudgetGeneralParPersonnel",
   "decomptefactures",
   "getvehicules",
   "ReparationVehicules"
   
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
    
    anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },
    libelleMarche(){
      return id =>{
        if(id!=null && id!=""){
          let objet1 = this.marches.find(item => item.id==id)
          if(objet1){
            return objet1.objet
          }
          return null
        }
      }
    },
    
    NumeroContrat() {
      return id => {
        if (id != null && id != "") {
           return this.acteEffetFinanciers.filter(qtreel => qtreel.ua_id == id && qtreel.etatcontrat == 1);
      
        }
      }
    },
    RaisonSocialEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.raison_sociale;
      }
      return 0
        }
      };
    },
    MontantReparation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.montant_act;
      }
      return 0
        }
      };
    },
    idEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.entreprise_id;
      }
      return 0
        }
      };
    },
    MarcheActe_id() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.marche_id;
      }
      return 0
        }
      };
    },
    LigneBudgetaireAttrivue() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.economique_id;
      }
      return 0
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
           return this.getvehicules.filter(qtreel => qtreel.uniteadministrative == id && qtreel.typevehicule == this.formData.typeveh);
      
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
             lesClassDe3() { 
const isClassDe3 = (code) => code.charAt(0) == "2"; 
return this.derniereNivoPlanBudgetaire.filter(x => isClassDe3(x.code));
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
      "ajouterReparationVehicule",
      "modifierReparationVehicule"
      ]),
      afficherModalListePersonnel(){
                this.$router.push({ name: 'ReparationVehicule' })
            },
      afficherModalListeExecution(){
                window.history.back();
            },
     AjouterVehicule() {
      
       var nouvelObjet = {
         ...this.detail,
        anneebudgetaire:this.anneeAmort
      }
      this.modifierReparationVehicule(nouvelObjet);
    
      this.detail = {
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
 