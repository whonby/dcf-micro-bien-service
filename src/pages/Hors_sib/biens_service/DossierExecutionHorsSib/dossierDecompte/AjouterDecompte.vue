
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
              <h5>Ajouter Décompte</h5>
             
            </div>

            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                     <li class="active"><a data-toggle="tab" href="#MARCHE">INFO ENTREPRISE</a></li>
        <li class=""><a data-toggle="tab" href="#DEMARRAGE">INFO MARCHE</a></li>
        <li class=""><a data-toggle="tab" href="#DECOMPTE">INFO DECOMPTE</a></li>
                      
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                  <div id="DECOMPTE" class="tab-pane">
         <table class="table table-bordered table-striped">
           <tr>
              <td>

              <div class="control-group">
              <label class="control-label">N°décompte</label>
                <div class="controls">
                  <input
                      type="number"
                      
                      v-model="formData.numero_decompte"
                      class="span"
                      
                  />
                </div>
              </div>
            </td>
           
             <td >
              <div class="control-group">
                <label class="control-label" >Date décompte</label>
                <div class="controls">
                  <input
                      type="date"
                    v-model="formData.date_decompte"
                      
                      class="span"
                      
                  />
                </div>
              </div>
            </td>
            <td>

              <div class="control-group">
                <label class="control-label">Montant Acompte HTVA</label>
                <div class="controls">
                  <input type="text" 
                         class="span"
                         readonly
                         :value="MontantFacture(detail_Facture.id)"
                  />
                </div>
              </div>
            </td>
            
             
           </tr>
            <tr>
               <td >
              <div class="control-group">
                <label class="control-label" > Retenue d'avance </label>
                <div class="controls">
                  <input
                      type="number"
                       :value="MontantRetenuAvance(detail_Facture.marche_id)"
                    readonly
                      class="span"
                     
                  />

                </div>
              </div>
            </td>
             <td >
              <div class="control-group">
                <label class="control-label" > Retenue de garantie</label>
                <div class="controls">
                  <input
                      type="number"
                      
                    :value="MontantRetenuGarantie(detail_Facture.marche_id)"
                      class="span"
                      readonly
                  />

                </div>
              </div>
            </td>
            
             <td colspan="">
              <div class="control-group">
                <label class="control-label" >Retenue de pénalité</label>
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
            <tr>
               <td >
              <div class="control-group">
                <label class="control-label" > Retenue d'avance</label>
                <div class="controls">
                  <input
                      type="number"
                       
                    v-model="formData.retenu_avance"
                      class="span"
                     
                  />
<code v-if="this.MontantRetenuAvance(this.detail_Facture.marche_id) < this.CumulRetenuAvanceNouveau ">Restant a paye  :{{retenuAvanceResteApayes}}</code>
                </div>
              </div>
            </td>
             <td >
              <div class="control-group">
                <label class="control-label" > Retenue de garantie</label>
                <div class="controls">
                  <input
                      type="number"
                      
                         v-model="formData.retenu_garantie"
                      class="span"
                      
                  />
            <code v-if="this.MontantRetenuGarantie(this.detail_Facture.marche_id) < this.CumulRetenuGarantieNouveau">Restant a paye   :{{retenuGarantieResteApayes}}</code>
                </div>
              </div>
            </td>
            
             <td colspan="">
              <div class="control-group">
                <label class="control-label" >Retenue de pénalité</label>
                <div class="controls">
                  <input
                      type="number"
                        v-model="formData.retenu_penalite"

                      class="span"
                      
                  />

                </div>
              </div>
            </td>
           </tr>
           <tr>
             <td >
              <div class="control-group">
                <label class="control-label" >Montant HT (aprés retenues)</label>
                <div class="controls">
                  <input
                      type="text"  
                        :value="Montantapresretenues"
                     
                      class="span"
                      readonly
                  />

                </div>
              </div>
            </td>
              <td>
              <div class="control-group">
                <label class="control-label">TVA(18%)</label>
                <div class="controls">


                  <input type="text" 
                         class="span"
                         :value="MontantTVAFacture(detail_Facture.id)"
                         readonly
                  />

                </div>
              </div>
            </td>
             <td>
               <div class="control-group">
                <label class="control-label" >Montant TTC</label>
                <div class="controls">
                  <input
                      type="text"
                      :value="MontantTTC"

                      class="span"
                      readonly
                  />

                </div>
              </div>
             </td>
             
           </tr>
           <tr>
             <td >
              <div class="control-group">
                <!-- <label class="control-label" >Part Bailleur </label> -->
                <div class="controls">
                  <input
                      type="hidden"  
                        :value="montantTTCMarche(macheid)"
                      step='100'
                      class="span"
                      readonly
                  />

                </div>
              </div>
            </td>
              <td>
              <div class="control-group">
                <!-- <label class="control-label">Taux Bailleur(HT)</label> -->
                <div class="controls">


                  <input type="hidden" 
                         class="span"
                         :value="TauxBailleurDuMarche"
                         readonly
                  />

                </div>
              </div>
            </td>
             <td>
               <div class="control-group">
                <!-- <label class="control-label" >Montant HT Bailleur</label> -->
                <div class="controls">
                  <input
                      type="hidden"
                      :value="MontantHTBailleur"

                      class="span"
                      readonly
                  />

                </div>
              </div>
             </td>
             
           </tr>
            <tr>
             <td >
              <div class="control-group">
                <!-- <label class="control-label" >Part Etat </label> -->
                <div class="controls">
                  <input
                      type="hidden"  
                        :value="montantTTCMarche(macheid)"
                      step='100'
                      class="span"
                      readonly
                  />

                </div>
              </div>
            </td>
              <td>
              <div class="control-group">
                <!-- <label class="control-label">Taux Etat(HT+TVA)</label> -->
                <div class="controls">


                  <input type="hidden" 
                         class="span"
                         :value="TauxBailleurTresor(detail_Facture.marche_id)"
                         readonly
                  />

                </div>
              </div>
            </td>
             <td>
               <div class="control-group">
                <!-- <label class="control-label" >Montant TTC Etat</label> -->
                <div class="controls">
                  <input
                      type="hidden"
                      :value="MontantHTEtat"

                      class="span"
                      readonly
                  />

                </div>
              </div>
             </td>
             
           </tr>
         </table>
        
      </div>
                      <div id="MARCHE" class="tab-pane active">
         <table class="table table-bordered table-striped">
           <tr>
              <td>

              <div class="control-group">
                <label class="control-label">Nom de l'Entreprise</label>
                <div class="controls">
                  <input
                      type="text"
                      :value="NomEntreprise(detail_Facture.fournisseur_id)"
                      
                      class="span"
                      readonly
                  />
                </div>
              </div>
            </td>
           
             <td >
              <div class="control-group">
                <label class="control-label" >Adresse</label>
                <div class="controls">
                  <input
                      type="text"
                     :value="AdresseEmailEntreprise(detail_Facture.fournisseur_id)"
                      
                      class="span"
                      readonly
                  />
                </div>
              </div>
            </td>
            <td >
              <div class="control-group">
                <label class="control-label" > N°de compte Contribuable</label>
                <div class="controls">
                  <input
                      type="text"
                       
                      :value="ContribuableEntreprise(detail_Facture.fournisseur_id)"
                      class="span"
                      readonly
                  />

                </div>
              </div>
            </td>
             
           </tr>
            <tr>
            
            
             <td colspan="3">
              <div class="control-group">
                <label class="control-label" >Objet</label>
                <div class="controls">
                  <input
                      type="text"
                       
                      :value="libelleObjet(detail_Facture.marche_id)"
                      class="span12"
                      readonly
                  />

                </div>
              </div>
            </td>
           </tr>
         </table>
        
      </div>
      <div id="DEMARRAGE" class="tab-pane">
         <table class="table table-bordered table-striped">
           <tr>
             <td >
              <div class="control-group">
                <label class="control-label" >N°de Marché</label>
                <div class="controls">
                  <input
                      type="text"  
                      :value="NumeroMarche(detail_Facture.marche_id)"
                      
                      class="span"
                      readonly
                  />

                </div>
              </div>
            </td>
              <td>
              <div class="control-group">
                <label class="control-label">Date d'Approbation du marché</label>
                <div class="controls">


                  <input type="text" 
                         class="span"
                         :value="dateApprobation(detail_Facture.marche_id)"
                         readonly
                  />

                </div>
              </div>
            </td>
             <td>
               <div class="control-group">
                <label class="control-label" >Imputation Budgétaire</label>
                <div class="controls">
                  <input
                      type="text"
                      
                      :value="Imputation(idParent(detail_Facture.marche_id))"
                      class="span"
                      readonly
                  />

                </div>
              </div>
             </td>
             <td >
              <div class="control-group">
                <label class="control-label" >Montant initial du marché HT</label>
                <div class="controls">
                  <input
                      type="number"
                       :value="montantHtMarche(detail_Facture.marche_id)"

                      class="span"
                      readonly
                  />

                </div>
              </div>
            </td>
           </tr>
             <tr>
             <td >
              <div class="control-group">
                <label class="control-label" >Montant total du marché TTC</label>
                <div class="controls">
                  <input
                      type="text"  
                        :value="montantTTCMarche(detail_Facture.marche_id)"
                      step='100'
                      class="span"
                      readonly
                  />

                </div>
              </div>
            </td>
              <td>
              <div class="control-group">
                <label class="control-label">PART Bailleur</label>
                <div class="controls">


                  <input type="text" 
                         class="span"
                         :value="SommeBailleurDuMarche"
                         readonly
                  />

                </div>
              </div>
            </td>
             <td colspan="2">
               <div class="control-group">
                <label class="control-label" >PART ETAT</label>
                <div class="controls">
                  <input
                      type="text"
                      :value="MontantEtatCoteIvoire(detail_Facture.marche_id)"

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
                          @click.prevent="AjouterDecompte"
                        >Valider</a>
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
      <notifications/>
    </div>


































</template>

<script>

import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import { formatageSomme } from './../../../../../Repositories/Repository';
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
retenu_avance:0,
retenu_garantie:0,
retenu_penalite:0
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
   
   ...mapGetters('uniteadministrative',[
    "plans_programmes",
 "uniteAdministratives",
 "afficheNiveauAction",
 "afficheNiveauActivite",
 "derniereNivoPlanBudgetaire",
 "getPersonnaliseBudgetGeneralParPersonnel",
   "decomptefactures",
   
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
    
MontantTVAFacture() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.tva;
      }
      return 0
        }
      };
    },
    MontantHTBailleur(){
      const val =  parseFloat(this.Montantapresretenues)*(parseFloat(this.TauxBailleurDuMarche)/100);
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
    MontantHTEtat(){
      const val =  parseFloat(this.MontantTTC)*(parseFloat(this.TauxBailleurTresor(this.detail_Facture.marche_id))/100);
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
    TauxBailleurTresor() {
      return id => {
        if (id != null && id != "") {
           return this.personnaliseGetterMarcheBailleur.filter(qtreel => qtreel.marche_id == id && qtreel.type_finnancement_id == 14).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.tauxbailleur), 0).toFixed(0);

     
        }
      };
    },
    TauxBailleurEmprunt() {
      return id => {
        if (id != null && id != "") {
           return this.personnaliseGetterMarcheBailleur.filter(qtreel => qtreel.marche_id == id && qtreel.type_finnancement_id == 15).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.tauxbailleur), 0).toFixed(0);

     
        }
      };
    }, 
    
    TauxBailleurDon() {
      return id => {
        if (id != null && id != "") {
           return this.personnaliseGetterMarcheBailleur.filter(qtreel => qtreel.marche_id == id && qtreel.type_finnancement_id == 13).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.tauxbailleur), 0).toFixed(0);

     
        }
      };
    },
    TauxBailleurDuMarche(){
      const val = parseFloat(this.TauxBailleurDon(this.detail_Facture.marche_id)) + parseFloat(this.TauxBailleurEmprunt(this.detail_Facture.marche_id));
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
    MontantTTC(){
      const val =  parseFloat(this.Montantapresretenues)+parseFloat(this.MontantTVAFacture(this.detail_Facture.id));
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
    montantTVA(){
      const val =  parseFloat(this.Montantapresretenues)*parseFloat(this.tauxArrondit);
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
affcherTauxEnCours() {
      
      
      const norme = this.taux.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.libelle;
      }
      return 0
    },
tauxArrondit() {
      
      const norme = this.taux.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.arrondit;
      }
      return 0
    },
Montantapresretenues(){
      const val =  parseFloat(this.MontantFacture(this.detail_Facture.id))-parseFloat(parseFloat(this.formData.retenu_garantie) + parseFloat(this.formData.retenu_avance)+ parseFloat(this.formData.retenu_penalite));
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
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
    idParent() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.parent_id;
      }
      return 0
        }
      };
    },
     Imputation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.imputation;
      }
      return 0
        }
      };
    },
    montantHtMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_act_ht;
      }
      return 0
        }
      };
    },
    montantTTCMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_act;
      }
      return 0
        }
      };
    },
    dateApprobation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return this.formaterDate(qtereel.date_approbation);
      }
      return 0
        }
      };
    },
     NumeroMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.numero_marche;
      }
      return 0
        }
      };
    },
     IdEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.entreprise_id;
      }
      return 0
        }
      };
    },   
    NomEntreprise() {
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
    AdresseEmailEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.telephone.concat(' - ', qtereel.email);
      }
      return 0
        }
      };
    },  
    ContribuableEntreprise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.entreprises.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_cc;
      }
      return 0
        }
      };
    },    
    libelleObjet() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.objet;
      }
      return 0
        }
      };
    }, 
    retenuAvanceResteApayes(){
      const val = parseFloat(this.MontantRetenuAvance(this.detail_Facture.marche_id)) - parseFloat(this.CumulRetenuAvance(this.detail_Facture.marche_id));
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
     MontantRetenuAvance() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.avance_demarrage_ht;
      }
      return 0
        }
      };
    }, 
    MontantRetenuGarantie() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_ht_retenu_garantie;
      }
      return 0
        }
      };
    }, 
  CumulRetenuAvanceNouveau(){
      const val = parseFloat(this.CumulRetenuAvance(this.detail_Facture.marche_id)) + parseFloat(this.formData.retenu_avance);
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
     CumulRetenuGarantie() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.retenu_garantie), 0).toFixed(0);

     
        }
      };
    }, 
    retenuGarantieResteApayes(){
      const val = parseFloat(this.MontantRetenuGarantie(this.detail_Facture.marche_id)) - parseFloat(this.CumulRetenuGarantie(this.detail_Facture.marche_id));
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
    CumulRetenuGarantieNouveau(){
      const val = parseFloat(this.CumulRetenuGarantie(this.detail_Facture.marche_id)) + parseFloat(this.formData.retenu_garantie);
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
    CumulRetenuAvance() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.retenu_avance), 0).toFixed(0);

     
        }
      };
    }, 
    MontantBailleurEmprunt() {
      return id => {
        if (id != null && id != "") {
           return this.personnaliseGetterMarcheBailleur.filter(qtreel => qtreel.marche_id == id && qtreel.type_finnancement_id == 15).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant), 0).toFixed(0);

     
        }
      };
    }, 
    
    MontantBailleurDon() {
      return id => {
        if (id != null && id != "") {
           return this.personnaliseGetterMarcheBailleur.filter(qtreel => qtreel.marche_id == id && qtreel.type_finnancement_id == 13).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant), 0).toFixed(0);

     
        }
      };
    },
    SommeBailleurDuMarche(){
      const val = parseFloat(this.MontantBailleurEmprunt(this.detail_Facture.marche_id)) + parseFloat(this.MontantBailleurDon(this.detail_Facture.marche_id));
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
    MontantEtatCoteIvoire() {
      return id => {
        if (id != null && id != "") {
           return this.personnaliseGetterMarcheBailleur.filter(qtreel => qtreel.marche_id == id && qtreel.type_finnancement_id == 14).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant), 0).toFixed(0);

     
        }
      };
    },
  },
  methods: {
    ...mapActions("personnelUA", [
      "getpaiementPersonnel",
      "ajouterpaiementPersonnel",
      "modifierpaiementPersonnel",
      "supprimerpaiementPersonnel"
      
    ]),
     ...mapActions("uniteadministrative", [
      "ajouterDecompteFacture",
      "ajouterHistoriqueDecompteFacture"
      ]),
      afficherModalListeExecution(){
                window.history.back();
            },
     AjouterDecompte() {
      
      var nouvelObjet = {
        ...this.formData,
        marche_id:this.detail_Facture.marche_id,
        facture_id:this.detail_Facture.id,
      nethtva:this.montantTVA,
      netttc:this.Montantapresretenues,
      parts_etat:this.MontantHTEtat,
      parts_bailleur:this.MontantHTBailleur,
      montantmarche:this.Montantapresretenues
      };
      this.ajouterDecompteFacture(nouvelObjet);
      this.ajouterHistoriqueDecompteFacture(nouvelObjet)
    this.afficherModalListeExecution()
      this.formData = {
      
      };
    },
    formatageSomme:formatageSomme,
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
