
<template>

<div class="container-fluid">
      <hr />
      
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Entrée des équipements dans le patrimoine</h5>
             
            </div>

            
                
              
                  
                <div class="widget-box">
                  <div class="widget-title">
                      
                    <ul class="nav nav-tabs">
                     <li class="active"><a data-toggle="tab" href="#Techniques1">Informations</a></li>
        <li class=""><a data-toggle="tab" href="#Informations2" v-show="formData.typestockage == 2">Information sur le véhicule</a></li>
        <li class=""><a data-toggle="tab" href="#Informations1" v-show="formData.typestockage == 1">Information sur le materiel</a></li>
                      
                     
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                   
                  <div id="Techniques1" class="tab-pane active">
         <table class="table table-bordered table-striped">
           <tr>
             <td>
                     <div class="control-group">
             <label class="control-label">Type de bien corporel</label>
              <div class="controls">
                 <select  class="span5" v-model="formData.typestockage">
                      <option></option>                     
                     <option value="1">Matériel et mobilier</option> 
                     <option value="2">Véhicule</option> 
                    </select>
              </div>
            </div>
                            </td>
           </tr>
               <tr>
               
                 <td colspan="">
                    <div class="control-group">
                  <label class="control-label">Unite Administrative</label>
                  <div class="controls">
                    <select  class="span5" v-model="formData.uAdministrative_id">
                      <option></option>                     
                      <option
                        v-for="typeUniteA in uniteAdministratives"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
                     <!-- <input
                type="text"
                :value="libelleUa(getterUa_idImo)"
                class="span"
                readonly
              /> -->
                  </div>
                </div>
                 </td>
                 <td colspan="">
                    <div class="control-group">
                  <label class="control-label">Marche</label>
                  <div class="controls">
                    <select  class="span5" v-model="formData.marche_id">
                      <option></option>                     
                      <option
                        v-for="typeUniteA in marcheTypeFournitureParUa(formData.ua_id)"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.objet}}</option>
                    </select>
                  </div>
                </div>
                 </td>
                <td>
               <div class="control-group">
            <label class="control-label">Nom du Prestataire</label>
            <div class="controls">
              <input
                type="text"
                :value="RecupererNomEntreprise(RecupereridEntreprise(formData.facture_id))"
                class="span5"
                readonly
              />
            </div>
          </div>
            </td>
               </tr>
              <tr>

              <td>
                    <div class="control-group">
                  <label class="control-label" >Numéro Facture</label>
                  <div class="controls">
                    <select  class="span5" v-model="formData.facture_id">
                      <option></option>                     
                      <option
                        v-for="typeUniteA in afficheNumeroFacture(formData.marche_id)"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.numero_facture}}</option>
                    </select>
                  </div>
                </div>
                 </td>
                 <td>
               <div class="control-group">
            <label class="control-label">Montant de Facture</label>
            <div class="controls">
              <input
                type="text"
                :value="MontantFacture(formData.facture_id)"
                class="span5"
                readonly
              />
            </div>
          </div>
            </td>
            <td>
               <div class="control-group">
            <label class="control-label">Date de la Facture</label>
            <div class="controls">
              <input
                type="date"
                :value="DateFacture(formData.facture_id)"
                class="span5"
                readonly
              />
            </div>
          </div>
            </td>
           
               </tr>
               <tr>
                  <td colspan="">
               <div class="control-group">
            <label class="control-label">Article</label>
            <div class="controls">
                              <select   class="span5" v-model="formData.famill_id">
                                <option></option>
            <option
                        v-for="typeUniteA in AfficheArticleAcquisition(formData.facture_id)"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{libelleFamilleEquipement(typeUniteA.designation)}}
                      {{libelleFamilleEquipement(typeUniteA.designation1)}}
                      {{libelleFamilleEquipement(typeUniteA.designation2)}}
                      {{libelleFamilleEquipement(typeUniteA.designation3)}}
                      {{libelleFamilleEquipement(typeUniteA.designation4)}}
                      {{libelleFamilleEquipement(typeUniteA.designation5)}}
                       {{libelleFamilleEquipement(typeUniteA.designation6)}}
                      {{libelleFamilleEquipement(typeUniteA.designation7)}}
                       {{libelleFamilleEquipement(typeUniteA.designation8)}}
                      {{libelleFamilleEquipement(typeUniteA.designation9)}}
                      {{libelleFamilleEquipement(typeUniteA.designation10)}}
                      </option>
                </select>
            </div>
          </div>
            </td>
            <td>
               <div class="control-group">
            <label class="control-label">Quantité Récu </label>
            <div class="controls">
                              <input
                type="text"
               :value="quantiteRecuFacture(formData.famill_id)"
                class="span5"
                readonly
              />
            </div>
          </div>
            </td>
            <td>
               <div class="control-group">
            <label class="control-label">Date d'entrée</label>
            <div class="controls">
              <input
                type="date"
                v-model="formData.date_entre"
                class="span5"
                
              />
            </div>
          </div>
            </td>
               </tr>
        </table>
      </div>
       <div id="Informations2" class="tab-pane">
<AjouterFicheVehicule></AjouterFicheVehicule>
                    </div>
                    <div id="Informations1" class="tab-pane">
<ficheMateriel></ficheMateriel>
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
             
            
          
     <notifications  />
    </div>

</template>

<script>

import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import {admin,dcf,cf} from '../../../../../Repositories/Auth';
import AjouterFicheVehicule from '../../gestionDesVehicules/grpeVehicule/AjouterFicheVehicule'
import ficheMateriel from '../../../suiviImmobilisation/RefaireComptabiliteMatiere/FicheMateriel/ficheMateriel'
// import { ModelListSelect } from "vue-search-select";
// import "vue-search-select/dist/VueSearchSelect.css";
export default {
  components: {
    AjouterFicheVehicule,
    ficheMateriel
  },
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
   ...mapGetters("SuiviImmobilisation", ["familles","AffectationVehicules","Transmissions","EtatImmobilisations","TypeEnergie","marqueVehicules","ModeleVehicules","TypeEntretien","TypeVehicule","TypeReparation"]),
   ...mapGetters('uniteadministrative',[
    "plans_programmes",
 "uniteAdministratives",
 "afficheNiveauAction",
 "afficheNiveauActivite",
 "derniereNivoPlanBudgetaire",
 "getPersonnaliseBudgetGeneralParPersonnel",
   "decomptefactures",
   "getvehicules",
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
     

anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },


      quantiteGlobal() {
      const val = parseFloat(this.quantiteEnStock(this.formData.famille_id)) + parseFloat(this.quantiteRecuFacture(this.formData.articleRecu_id));
      return parseFloat(val).toFixed(0);
    },
     
     
     
     libelleFamilleEquipement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.familles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 
        }
      };
    },
               lesClassDe3() { 
const isClassDe3 = (code) => code.charAt(0)== "6" && code.charAt(1)== "1" && code.charAt(2)== "4"; 
return this.derniereNivoPlanBudgetaire.filter(x => isClassDe3(x.code));
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

     marcheTypeFournitureParUa() {
      return id => {
        if (id != null && id != "") {
           return this.marches.filter(qtreel => qtreel.unite_administrative_id == id && qtreel.type_marche_id==1 && qtreel.attrubue==2);
      
        }
      };
    },
    afficheNumeroFacture() {
      return id => {
        if (id != null && id != "") {
           return this.getFacturePersonnaliser.filter(qtreel => qtreel.marche_id == id);
      
        }
      };
    },
    MontantFacture() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.prix_propose_ttc;
      }
      return 0
        }
      };
    },
    DateFacture() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.date_facture;
      }
      return 0
        }
      };
    },
    AfficheArticleAcquisition() {
      return id => {
        if (id != null && id != "") {
           return this.getFacturePersonnaliser.filter(qtreel => qtreel.id == id);
      
        }
      };
    },
    AfficheArticleEnStock() {
      return id => {
        if (id != null && id != "") {
           return this.GestionStockageArticles.filter(qtreel => qtreel.uAdministrative_id == id);
      
        }
      };
    },
    quantiteEnStock() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.GestionStockageArticles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.quantitestock;
      }
      return 0
        }
      };
    },
    RecupereridEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getActeEffetFinancierPersonnaliser45.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.entreprise_id;
      }
      return 0
        }
      };
    },
    RecupererNomEntreprise() {
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
    // quantiteRecuFacture() {
      
    //        const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.famill_id == id);

    //   if (qtereel) {
    //     return qtereel.quantitestock;
    //   }
    //   return 0
       
    // },
    
   afficherUAParDroitAccess() {
    
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
       
    },
 










 fonctionModele() {
      return id => {
        if (id != null && id != "") {
           return this.ModeleVehicules.filter(qtreel => qtreel.marque_id == id);
      
        }
      };
    },


    quantiteRecuFacture() {
      
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.quantite;
      }
      return 0
        }
         else if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.quantite1;
      }
      return 0
        }
        else if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.quantite2;
      }
      return 0
        }
        else if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.quantite3;
      }
      return 0
        }
        else if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.quantite4;
      }
      return 0
        }
        else if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.quantite5;
      }
      return 0
        }
        else if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.quantite6;
      }
      return 0
        }
        else if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.quantite7;
      }
      return 0
        }
        else if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.quantite8;
      }
      return 0
        }
        else if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.quantite9;
      }
      return 0
        }
        else if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.quantite10;
      }
      return 0
        }
       
      };
      
      
    },
  },
  methods: {
    
     ...mapActions("uniteadministrative", [
      "ajouterStockArticle"
      ]),
      ...mapActions("SuiviImmobilisation", [
      "getAllStock",
      "ajouterStock",
      "modifierStock",
      "supprimerStock"
    ]),
      afficherModalListePersonnel(){
                this.$router.push({ name: 'gestionStockCorporels' })
            },
      afficherModalListeExecution(){
                window.history.back();
            },
     AjouterVehicule() {
      
      var nouveauObjet ={
        ...this.formData,
        quantitestock:this.quantiteRecuFacture(this.formData.famill_id)
      }
      
      this.ajouterStockArticle(nouveauObjet);
    
      this.formData = {
        uAdministrative_id:"",
        famill_id:"",
        
        marche_id:"",
        facture_id:"",
       
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
