
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
              <h5>Modification Mobilier</h5>
             
            </div>

            <div class="table-responsive text-nowrap">
                
                     <div class="widget-title">
                      
                    <ul class="nav nav-tabs">
                     <li class="active"><a data-toggle="tab" href="#IDENT">Identification</a></li>
        
                      
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                  <div id="IDENT" class="tab-pane active">
        <table class="table table-bordered table-striped">
            <tr>
              <td>
                                <label >Unite Administrative</label>
                                <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="uniteAdministratives"
                                                   v-model="detail_vehicule.uAdministrative_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                >

                                </model-list-select>
                            </td>
                     
                     <td colspan="">
                    <div class="control-group">
                  <label class="control-label">Fournisseur</label>
                  <div class="controls">
                    <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="entreprises"
                                                   v-model="detail_vehicule.fournisseur_id"
                                                   option-value="id"
                                                   option-text="raison_sociale"
                                                   placeholder=""
                                >

                                </model-list-select>
                   
                  </div>
                </div>
                 </td>
                 <td colspan="">
                    <div class="control-group">
                  <label class="control-label">Numéro du Marche</label>
                  <div class="controls">
                    
                     <input
                type="text"
              v-model="detail_vehicule.numero_marche"
                class="span"
                
              />
                  </div>
                </div>
                 </td>
                      
                    
                  </tr>
                  <tr>
                     <td colspan="">
                    <div class="control-group">
                  <label class="control-label" >Numéro de Facture</label>
                  <div class="controls">
                    <input
                type="text"
              v-model="detail_vehicule.numero_facture"
                class="span"
                
              />
                  </div>
                </div>
                 </td>
               
            <td>
                                <label >Groupe</label>
                                <!-- <model-list-select style="background-color: #fff;"
                                                   class="wide"
                                                   :list="equipements"
                                                   v-model="famille_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                >

                                </model-list-select> -->
                                <select   class="span" v-model="detail_vehicule.groupe_famille_id">
                                <option></option>
                                <option v-for="typeUniteA in equipements"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id">
                                   
                      {{GroupeEquipement(typeUniteA.id)}}
                                </option>
                                  </select>
                            </td>
                            <td>
              <div class="control-group">
            <label class="control-label">Famille</label>
            <div class="controls">
                              <select   class="span" v-model="detail_vehicule.famill_id">
                                <option></option>
                                <option v-for="typeUniteA in dependDuGroupe(detail_vehicule.groupe_famille_id)"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id">
                                   
                      {{typeUniteA.libelle}}
                                </option>
                                  </select>
                                  
            </div>
          </div>
            </td>
            
            
                  </tr>
                  <tr>
                    <td>
              <div class="control-group">
            <label class="control-label">Article</label>
            <div class="controls">
                              <select   class="span" v-model="detail_vehicule.articlestock_id">
                                <option></option>
                                <option v-for="typeUniteA in afficheListeArticleParFamille(detail_vehicule.groupe_famille_id,detail_vehicule.famill_id)"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id">
                                   
                      {{typeUniteA.libelle}}
                                </option>
                                  </select>
                                  
            </div>
          </div>
            </td>
                    <td>
               <div class="control-group">
            <label class="control-label">Quantité Reçu</label>
            <div class="controls">
                              <input
                type="text"
              v-model="detail_vehicule.quantitestock"
                class="span"
                
              />
                  
            </div>
          </div>
            </td>
            <td>
                     <div class="control-group">
             <label class="control-label">Type de bien corporel</label>
              <div class="controls">
                 <!-- <select  class="span" v-model="formData.typestockage">
                      <option></option>                     
                     <option value="1">Matériel</option> 
                     <option value="2">Véhicule</option> 
                     <option value="3">Mobilier</option>
                     <option value="4">Immobilier</option> 
                     <option value="5">Gros Travaux</option> 
                     
                    </select> -->
                     <input
                type="text"
            :value="afficheLibelleTypeBien(AfficheTypeDeBien(detail_vehicule.famill_id))"
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
                  
                 
                  
              <table class="table table-bordered table-striped">
                  
                <div class="widget-box">
                  <div class="widget-title">
                      
                    <ul class="nav nav-tabs">
                    
        <li class="active"><a data-toggle="tab" href="#vehicule">Fiche Mobilier</a></li>
        
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    
                
                      <div id="vehicule" class="tab-pane active">
     
         <table class="table table-bordered table-striped" >
             <tr>
                 <td colspan="3">
                   <div class="control-group">
                  <label class="control-label" style="font-size:14px">Description </label>
                  <div class="controls">
                   <textarea rows="4" v-model="detail_vehicule.description_article" class="span12">
                     
                     </textarea>
                  </div>
                </div>
                 </td>
                     
                     
                  </tr>
            <tr>
               <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Valeur d'acquisition unitaire HT </label>
                  <div class="controls">
                    <!-- <input
                      type="text"
                  v-model="detail_vehicule.prix_unitaire"
                      class="span"
                      
                    /> -->
                    <money v-model="detail_vehicule.prix_unitaire" type="text" style="text-align:left;color:red"  class="span"></money>
                  </div>
                </div>
                      </td> 
                       <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Date d'acquisition / mise en service </label>
                  <div class="controls">
                    <input
                      type="date"
                  v-model="detail_vehicule.date_mise_service"
                      class="span"
                      
                    />
                  </div>
                </div>
                      </td> 
                       <td>
                           <div class="control-group">
                  <label class="control-label" style="font-size:14px">Code immobilisation</label>
                  <div class="controls">
                    <input
                      type="text"
                  v-model="detail_vehicule.numero_matricule"
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
                        >Modifier</a>
                        <a
                          @click.prevent="afficherModalListeExecution()"
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
import {admin,dcf,cf} from '../../../../../../Repositories/Auth';
// import AjouterFicheVehicule from '../../gestionDesVehicules/grpeVehicule/AjouterFicheVehicule'
// import ficheMateriel from '../../../suiviImmobilisation/RefaireComptabiliteMatiere/FicheMateriel/ficheMateriel'
import { ModelListSelect } from "vue-search-select";
import "vue-search-select/dist/VueSearchSelect.css";
export default {
  components: {
   ModelListSelect
  },
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],
      formData7:{

},
formData:{

},
famille_id:"",
detail_vehicule:{

},
formData1:{

},
      search: ""
    };
  },
props:["macheid"],
 created() {
          
            this.detail_vehicule=this.GestionStockageArticles.find(item=>item.id==this.$route.params.id)
        
        },
  computed: {
  ...mapGetters("bienService", ["getFacturePersonnaliser","personnaliseGetterMarcheBailleur","modepaiements",'mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser", "typeActeEffetFinanciers"]),

   ...mapGetters('personnelUA', ['acteur_depenses',"paiementPersonnel"]),
   ...mapGetters("SuiviImmobilisation", ["Typebiengrpecorporels","equipements","articles","familles","AffectationVehicules","Transmissions","EtatImmobilisations","TypeEnergie","marqueVehicules","ModeleVehicules","TypeEntretien","TypeVehicule","TypeReparation"]),
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
     


dependDuGroupe() {
      return id => {
        if (id != null && id != "") {
           return  this.familles.filter(qtreel => qtreel.equipemt_id == id);

        }
      };
    },





imputationComptable() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code;
      }
      return 
        }
      };
    },

GroupeEquipement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.equipements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return this.imputationComptable(qtereel.code).concat("    ", qtereel.libelle);
      }
      return 
        }
      };
    },





AfficheTypeDeBien() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.familles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.type_bien;
      }
      return 
        }
      };
    },

  afficheLibelleTypeBien() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.Typebiengrpecorporels.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },



libelleImputationBudgetaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code;
      }
      return 
        }
      };
    },
recupererIdEquipement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.familles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.equipemt_id;
      }
      return 
        }
      };
    },
    dureDeVie() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.familles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.dureVie;
      }
      return 
        }
      };
    },
recupererCodeImputationBudgetaire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.equipements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code;
      }
      return 
        }
      };
    },


 afficheListeArticleParFamille() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
          return this.articles.filter(element => element.equipement_id == id && element.famille_id == id1);
        }
      };
    },


libelleArticle() {
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





     AfficheModelMaterielMobilier() {
      
           return this.marqueVehicules.filter(qtreel => qtreel.typecorporel == 1);
      
       
    },
    AfficheModelMaterielVehicule() {
      
           return this.marqueVehicules.filter(qtreel => qtreel.typecorporel == 2);
      
       
    },
 afficheModeleParMarque() {
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
           return this.marches.filter(qtreel => qtreel.unite_administrative_id == id && qtreel.type_marche_id==1 && this.validationMandatParcf(qtreel.id) == 8);
      
        }
      };
    },
    validationMandatParcf() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.mandats.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.decision_cf;
      }
      return 0
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
        return qtereel.prix_propose_ht;
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
       AfficheQuantiteArticle() {
      return id => {
        if (id != null && id != "") {
           return this.getFacturePersonnaliser.filter(qtreel => qtreel.designation == id);
      
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

  },
  methods: {
    
     ...mapActions("uniteadministrative", [
      "modifierStockArticle",
      "ajouterNouveauVehicule"
      ]),
      ...mapActions("SuiviImmobilisation", [
     
      "ajouterFicheArticle",
      
    ]),
      afficherModalListePersonnel(){
                this.$router.push({ name: 'gestionStockCorporels' })
            },
      afficherModalListeExecution(){
                window.history.back();
            },
            
            RafraichirPage(){
                window.location.reload()
            },
     AjouterVehicule() {
      
 var objetNew ={
             ...this.formData,
             id:this.detail_vehicule.id,
        uAdministrative_id:this.detail_vehicule.uAdministrative_id,
        quantitestock:this.detail_vehicule.quantitestock,
        famill_id:this.formData7.famill_id,
        articlestock_id:this.detail_vehicule.articlestock_id,
        marque_id:this.formData.marque_id,
        model_id:this.formData.model_id,
       histo_qte:this.detail_vehicule.quantitestock,
      numchassis:this.detail_vehicule.numchassis,
      anneevehicule:this.detail_vehicule.anneevehicule,
        anneebudgetaire:this.anneeAmort,
        
        fournisseur_id:this.detail_vehicule.fournisseur_id,
          numero_marche:this.detail_vehicule.numero_marche,
          numero_facture:this.detail_vehicule.numero_facture,
          durevie:this.dureDeVie(this.formData7.famill_id),
          typebien_id:this.AfficheTypeDeBien(this.formData7.famill_id),
          prix_unitaire:this.detail_vehicule.prix_unitaire,
          autreinfo:this.detail_vehicule.autreinfo
      }
      
      //this.ajouterNouveauVehicule(objetNew);
    this.modifierStockArticle(objetNew)
    this.afficherModalListePersonnel()
      this.formData = {
        uniteadministrative:"",
        numidentification:"",
        numimmatriculation:"",
        immobilisation:"",
        typevehicule:"",
        marque:"",
        modele:"",
        energie:"",
        numchassis:"",
        numserie:"",
        couleur:"",
        transmission:"",
        nombreportes:"",
        nombreplace:"",
        puissance:"",
        etatvehicule:"",
        votreassuranceexpirere:"",
        
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
