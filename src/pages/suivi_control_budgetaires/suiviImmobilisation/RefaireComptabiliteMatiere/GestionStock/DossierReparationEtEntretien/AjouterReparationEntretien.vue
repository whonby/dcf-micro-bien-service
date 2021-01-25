
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
                     <li class="active"><a data-toggle="tab" href="#Techniques">UNITE ADMINISTRATIVE :  {{afficherLibelleUniteAdministrative(detail_vehicule.uAdministrative_id)}}</a></li>
        <!-- <li class=""><a data-toggle="tab" href="#Informations">Autres Informations</a></li> -->
        
                      
                     
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                  <div id="Techniques" class="tab-pane active">
         <table class="table table-bordered table-striped">
               <tr>
               
                <td colspan="">
               <div class="control-group">
            <label class="control-label">Famille Article</label>
            <div class="controls">
               <input
                type="text"
                :value="familleArticle(detail_vehicule.famill_id)"
                class="span"
                readonly
              />

            </div>
          </div>
            </td>
                 <td colspan="">
               <div class="control-group">
            <label class="control-label">Immatriculation</label>
            <div class="controls">
               <input
                type="text"
                :value="detail_vehicule.numimmatriculation"
                class="span"
                readonly
              />

            </div>
          </div>
            </td>
            <td colspan="">
               <div class="control-group">
            <label class="control-label">Service Rattaché</label>
            <div class="controls">
               <input
                type="text"
                :value="LibelleServiceRattache(serviceRattache(detail_vehicule.id))"
                class="span"
                readonly
              />

            </div>
          </div>
            </td>
            <td colspan="">
               <div class="control-group">
            <label class="control-label">Fonction Rattaché</label>
            <div class="controls">
               <input
                type="text"
                :value="LibellefonctionRattache(fonctionRattache(detail_vehicule.id))"
                class="span"
                readonly
              />

            </div>
          </div>
            </td>
                 <!-- <td>
                    <div class="control-group">
                  <label class="control-label" style="font-size:14px">Type véhicule</label>
                  <div class="controls">
                    <input
                type="text"
                :value="libelleTypeVehicule(Idtypevehicule(detail_vehicule.id))"
                class="span"
                readonly
              />
                  </div>
                </div>
                 </td> -->
                 <!-- <td>
                    <div class="control-group">
                  <label class="control-label" style="font-size:14px">Immatriculation</label>
                  <div class="controls">
                    <input
                type="text"
                :value="ImmatriculationVehicule(detail_vehicule.id)"
                class="span"
                readonly
              />
                  </div>
                </div>
                 </td> -->
                
               </tr>
               <tr>
                  <td>
                    <div class="control-group">
                  <label class="control-label" style="font-size:14px">Numéro Facture</label>
                  <div class="controls">
                    <select  class="span" v-model="formData.acte_id ">
                      <option></option>                     
                      <option
                        v-for="typeUniteA in NumeroFacture(marcheIdContrat(detail_vehicule.uAdministrative_id))"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.numero_facture}}</option>
                    </select>
                  </div>
                </div>
                 </td>
                 <td colspan="3">
                   
        <div class="control-group">
           <label class="control-label">Panne(s) Signalée(s)</label>
            <div class="controls">
              <textarea class="span14"  rows="3" placeholder="Enter text ..." :value="libelleMarche(recupereridParLaFacture(formData.acte_id))" readonly></textarea>
            </div>
          
        </div>
      
    
  
                 </td>
                  <!-- <td colspan="">
               <div class="control-group">
            <label class="control-label">Ligne Budgétaire</label>
            <div class="controls">
               <input
                type="text"
                :value="Codeeconomique(LigneBudgetaireAttrivue(recupereridParLaFacture(formData.acte_id)))"
                class="span"
                readonly
              />

            </div>
          </div>
            </td> -->
               </tr>
              
                <tr>
                   <td>
               <div class="control-group">
            <label class="control-label">Date du bon de commande</label>
            <div class="controls">
              <input
                type="date"
                v-model="formData.date_signal"
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
                
                class="span"
                readonly
              />
            </div>
          </div>
            </td>
                   
                  <td>
               <div class="control-group">
            <label class="control-label">Date de sorti</label>
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
import {admin,dcf,cf} from "../../../../../../Repositories/Auth"

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
   this.detail_vehicule = this.GestionStockageArticles.find(
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

   ...mapGetters('personnelUA', ['acteur_depenses',"paiementPersonnel","fonctions"]),
   ...mapGetters("SuiviImmobilisation", ["familles","services","immobilisations","AffectationUaBiens","getterUa_idImo","AffectationVehicules","Transmissions","EtatImmobilisations","TypeEnergie","marqueVehicules","ModeleVehicules","TypeEntretien","TypeVehicule","TypeReparation"]),
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
   "budgetEclate",
   "GestionStockageArticles"
   
   
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
     
familleArticle(){
      return id =>{
        if(id!=null && id!=""){
          let objet1 = this.familles.find(item => item.id==id)
          if(objet1){
            return objet1.libelle
          }
          return null
        }
      }
    },
serviceRattache(){
      return id =>{
        if(id!=null && id!=""){
          let objet1 = this.immobilisations.find(item => item.stock_id==id)
          if(objet1){
            return objet1.service_id
          }
          return null
        }
      }
    },
fonctionRattache(){
      return id =>{
        if(id!=null && id!=""){
          let objet1 = this.immobilisations.find(item => item.stock_id==id)
          if(objet1){
            return objet1.fonction_id
          }
          return null
        }
      }
    },
LibellefonctionRattache(){
      return id =>{
        if(id!=null && id!=""){
          let objet1 = this.fonctions.find(item => item.id==id)
          if(objet1){
            return objet1.libelle
          }
          return null
        }
      }
    },
LibelleServiceRattache(){
      return id =>{
        if(id!=null && id!=""){
          let objet1 = this.services.find(item => item.id==id)
          if(objet1){
            return objet1.libelle
          }
          return null
        }
      }
    },
  afficheIdUa(){
      return id =>{
        if(id!=null && id!=""){
          let objet1 = this.getvehicules.find(item => item.id==id)
          if(objet1){
            return objet1.uniteadministrative
          }
          return null
        }
      }
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
// return this.afficheLigneReparation(getterUa_idImo).filter(x => isClassDe3(x.code));
//  },
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
    
    NumeroContrat() {
      return id => {
        if (id != null && id != "") {
           return this.acteEffetFinanciers.filter(qtreel => qtreel.ua_id == id && qtreel.etatcontrat == 1);
      
        }
      }
    },


 marcheIdContrat() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.ua_id== id && qtreel.etatcontrat == 1);

      if (qtereel) {
        return qtereel.marche_id;
      }
      return 0
        }
      };
    },


NumeroFacture() {
      return id => {
        if (id != null && id != "") {
           return this.getFacturePersonnaliser.filter(qtreel => qtreel.marche_id== id );

      
      
        }
      };
    },

recupereridParLaFacture() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id== id );

      if (qtereel) {
        return qtereel.marche_id;
      }
      return 0
        }
      };
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
     anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
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
    Idtypevehicule() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getvehicules.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.typevehicule;
      }
      return 0
        }
      };
    },
    ImmatriculationVehicule() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getvehicules.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numimmatriculation;
      }
      return 0
        }
      };
    },
  },
  methods: {
    
     ...mapActions("uniteadministrative", [
      "ajouterReparationVehicule"
      ]),
      afficherModalListePersonnel(){
                this.$router.push({ name: 'gestionStockCorporels' })
            },
      afficherModalListeExecution(){
                window.history.back();
            },
     AjouterVehicule() {
      
      var nouvelObjet = {
        ...this.formData,
        anneebudgetaire:this.anneeAmort,
          ua_id:this.afficheIdUa(this.detail_vehicule.id),
          vehicule_id:this.detail_vehicule.id
      }
      
      this.ajouterReparationVehicule(nouvelObjet);
    
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
