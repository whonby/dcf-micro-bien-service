
<template>
  <div>
 
<div id="exampleModalStock" class="modal hide tailgrand">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter quantité Entrant</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
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
      <div class="modal-footer">
        <a
          @click.prevent="modifierStockEntrant(editStock)"
          class="btn btn-primary"
          href="#"
         
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>

<!----- fin modifier modal  ---->
    <!--///////////////////////////////////////// fin modal de modification //////////////////////////////-->
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
      <hr />
      <div class="row-fluid">
        <div class="span12">
          <!-- <div> -->

                                        <!-- <download-excel
                                            class="btn btn-success pull-right"
                                            style="cursor:pointer;"
                                              :fields = "json_fields"
                                              title="Liste Section "
                                              name ="Liste section"
                                              worksheet = "section"
                                            :data="uniteAdministratives">
                    <i title="Exporter en excel" class="icon-table"> Exporter en excel</i>

                                                 </download-excel>  -->
                      <!-- <div align="right" style="cursor:pointer;">
           <button class="btn btn-info" @click.prevent="genererEnPdf()">Exporter en PDF</button>
          </div> 
                                     </div> -->
                                     
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Stock par UA </h5>
              <!-- <div align="right">
                Recherche:
                <input type="search" placeholder v-model="search" />
               
              </div> -->
            </div>


            <div class="widget-content nopadding"  >
              <StockComponent v-for="equipement in uniteAdministratives"
               :key="equipement.id"
                :groupe="equipement"
                @modification="afficherModalModifierService" 
                @suppression="supprimerSect"
                >
              </StockComponent>

              <!-- <div v-if="filtre_famille.length"></div>
              <div v-else>
                <p style="text-align:center;font-size:20px;color:red;">Aucun Article</p>
              </div> -->

            
              
            </div>
          </div>
        </div>
      </div>
    </div>

    
<button style="display:none;" v-shortkey.once="['ctrl', 'f']"
  @shortkey="ajouterEntreEnPatrimoine()">Open</button>

 <fab :actions="fabActions"
                main-icon="apps"
          @cache="ajouterEntreEnPatrimoine"
         
        bg-color="green"

  ></fab>
<notifications  />
  </div>

</template>




  
<script>
import { mapGetters, mapActions } from "vuex";
import StockComponent from './StockComponent'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
export default {
  name: 'Famille',
 components: {
      StockComponent
  },
  data() {
    return {
      json_fields: {
         
           
        },
     fabActions: [
              {
                  name: 'cache',
                  icon: 'add',
                
              },
              
          ],
     
        formData : {
                
              libelle:"",
             marque_id:""
        },

        editStock: {
            
        },
        editReparation:{},
       search:""
    };
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
  
...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
      ...mapGetters('personnelUA', ["acteur_depenses","personnaFonction","afficheNombrePersonnelRecuActeNormination","fonctionBudgetaire","type_salaries","type_contrats","acte_personnels","type_acte_personnels","fonctions","grades","niveau_etudes",
                "nbr_acteur_actredite_taux","all_acteur_depense","personnaliseActeurFinContrat","personnaliseActeurDepense",
                "totalActeurEnctivite","totalActeurDepense","totalActeurAccredite","tauxActeurAccredite","totalActeurNonAccredite","personnaliseActeurDepense","affichePersonnelRecuActeNormination"]),
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
  filtre_Stock() {
       
        if (this.noDCfNoAdmin){
            let colect=[];
            this.GestionStockageArticles.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uAdministrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect;
        }

        return this.GestionStockageArticles;

    },


nombreDeQuantiteEnStock() {
       


        if (this.noDCfNoAdmin){
            let colect=[];
            this.GestionStockageArticles.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uAdministrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantitestock), 0).toFixed(0);
          
        }
return this.GestionStockageArticles.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.quantitestock), 0).toFixed(0);
       

    },
nombreDeQuantiteSortiEnStock() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.GestionStockageArticles.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.uAdministrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
          
          return colect.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.qtesortie), 0).toFixed(0);
        }

       return this.GestionStockageArticles.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.qtesortie), 0).toFixed(0);

    },









     libelleFamilleEquipement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.familles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
     libelleTypeEquipement() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.equipements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
     libelleUniteAdministrative() {
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
quantiteActuel() {
      const val = parseInt(this.quantiteEnt) + parseInt(this.quantiteenstock);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
    nouvelleQte() {
      const val = parseInt(this.editStock.histo_qte) + parseInt(this.editStock.qteentrant1);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },


quantiteenstock() {
      const val = parseInt(this.editStock.quantitestock);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
quantiteEnt() {
      const val = parseInt(this.editStock.qteentrant1);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },

    fammillesDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.familles.filter(element => element.equipemt_id == id);
        }
      };
    },
 articlesDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.articles.filter(element => element.famille_id == id);
        }
      };
    },
    Historqte() {
      const val = parseInt(this.formData.quantitestock);
      return parseInt(val).toFixed(0);
    },
     HistorqteModifier() {
      const val = parseInt(this.editStock.quantitestock);
      return parseInt(val).toFixed(0);
    },

  },
  
   


  
  methods: {
   ...mapActions("uniteadministrative", [
      "ajouterReparationVehicule",
      "modifierReparationVehicule"
      ]),
afficherModalModifierService(articles) {
      this.$("#exampleModalStock").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editStock = articles;
    },

afficherModalModifierTitre(id) {

      this.$router.push({
        path: "/ModifierEntrePatrimoine/" + id
      });
    },
ajouterEntreEnPatrimoine(){
                this.$router.push({ name: 'AjouterEntrePatrimoine' })
            },
            
   // exportation en pdf

     genererEnPdf(){
  var doc = new jsPDF()
  // doc.autoTable({ html: this.uniteAdministratives })
   var data = this.sections;
    doc.setFontSize(8)
    doc.text(75,10,"LISTE DES SECTIONS")
  doc.autoTable(this.getColumns(),data)
doc.save('section.pdf')
return 0
},
getColumns() {
    return [
        
        {title: "N° ORDRE", dataKey: "code"},
        {title: "CODE ", dataKey: "code_section"},
        {title: "LIBELLE ", dataKey: "nom_section"},
        
    ];
},

    supprimerSect(id){
      this.supprimerModeleVehicule(id)
    },
    
    //afiicher modal ajouter
    afficherModalajouterModeleVehicule(){
       this.$('#exampleModal').modal({
              backdrop: 'static',
              keyboard: false
             });
    },
     // fonction pour vider l'input
    ajouterTitreLocal () {
      
      this.modifierReparationVehicule(this.editReparation)
this.$("#exampleModal").modal('hide');
       
    },
    // afficher modal de modification
    afficherModalmodifierModeleVehicule(article) {
      this.$("#modifierModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editSection = article;
    },



    alert() {
      console.log("ok");
    },
    
    ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>
<style>

.tailgrand{
  width: 90%;
  margin: 0 -42%;
}

</style>