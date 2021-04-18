
<template>

<div class="container-fluid">
      <hr />
      
      <div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              
              <!-- <div align="right">
                Search:
                <input type="search" placeholder />
              </div>-->
            </div>

            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                    <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Ajouter Decompte</h5>
              
            </div>
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#SansContratIdent">Identification</a>
                      </li>
                       
                      <!-- <li>
                        <a data-toggle="tab" href="#SansContratAffect">Affectation</a>
                      </li> -->
                      
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="SansContratIdent" class="tab-pane active">
                      <div class="modal-body">
        <table class="table table-bordered table-striped">
            <tr>
<td colspan="">
                     <div class="control-group">
                                                    <label class="control-label">Exercice</label>
                                                    <div class="controls">
                                                        <select v-model="formData.exercicebudget" class="span12">
                                                            <option></option>
                                                            <option v-for="item in exercices_budgetaires" :key="item.id" :value="item.annee">
                                                                {{item.annee}}
                                                            </option>

                                                        </select>
                                                    </div>
                                                </div>
                </td>
               <td>
 
                                                    <label class="control-label">Numéro Decompte</label>
                                                    <div class="controls">
                                                        <input type="text"  v-model="formData.numero_decompte"  placeholder="" class="span"/>
                                                    </div>
                                                
                </td>
               <td colspan="2">
                       <div class="control-group">
                <label class="control-label">Numéro du marche <code style="color:red;font-size:16px">*</code></label>
                <div class="controls">
                  <model-list-select style="border:1px solid #000"
                                                   class="wide"
                                                   :list="acteEffetFinanciers"
                                                   v-model="formData.marche_id"
                                                   option-value="marche_id"
                                                   option-text="numero_marche"
                                                   
                                                   placeholder=""
                                >

                                </model-list-select>
                </div>
              </div>
              
                  </td>
                
                
               
              
                
            </tr>
            <tr>
                <td colspan="">
                       <div class="control-group">
                <label class="control-label">Unite administrative <code style="color:red;font-size:16px">*</code></label>
                <div class="controls">
                  <model-list-select style="border:1px solid #000"
                                                   class="wide"
                                                   :list="uniteAdministratives"
                                                   v-model="formData.uniteadministrative_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   
                                                   placeholder=""
                                >

                                </model-list-select>
                </div>
              </div>
              
                  </td>
               <td colspan="">
                       <div class="control-group">
                <label class="control-label">Entreprise <code style="color:red;font-size:16px">*</code></label>
                <div class="controls">
                  <model-list-select style="border:1px solid #000"
                                                   class="wide"
                                                   :list="entreprises"
                                                   v-model="formData.entreprise_id"
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
                                                    <label class="control-label">Montant Global du marche(Marche + Avenant)</label>
                                                    <div class="controls">
                                                         <money :value="MontantDeBase"  readOnly  style="text-align:left;color:red;font-size:16px"  class="span"></money>
                                                        
                                                    </div>
                                                </div>
                </td>
            </tr>
            <tr>
                <td colspan="4">
               <div class="control-group">
            <label class="control-label">Objet marché / contrat</label>
            <div class="controls">
              <textarea
               
                :value="AfficheObjetMarche(formData.marche_id)"
                class="span" rows="2"
                placeholder=""
              ></textarea>
            </div>
          </div>
              </td>
            </tr>
            <tr>
              <td colspan="">
                     <div class="control-group">
                                                    <label class="control-label">Montant Facture</label>
                                                    <div class="controls">
                                                         <money v-model="formData.montantmarche"    style="text-align:left;color:red;font-size:16px"  class="span"></money>
                                                        
                                                    </div>
                                                </div>
                </td>
               <td >
              <div class="control-group">
                <label class="control-label" > Retenue d'avance</label>
                <div class="controls">
                  <money v-model="formData.retenu_avance"    style="text-align:left;color:red;font-size:16px"  class="span"></money>
                

                </div>
              </div>
            </td>
             <td >
              <div class="control-group">
                <label class="control-label" > Retenue de garantie</label>
                <div class="controls">
                
            <money v-model="formData.retenu_garantie"    style="text-align:left;color:red;font-size:16px"  class="span"></money>
                </div>
              </div>
            </td>
            </tr>
             
           <tr>
             <td colspan="">
              <div class="control-group">
                <label class="control-label" >Retenue de pénalité</label>
                <div class="controls">
                  <money v-model="formData.retenu_penalite"    style="text-align:left;color:red;font-size:16px"  class="span"></money>
                

                </div>
              </div>
            </td>
              <td>
                <div class="control-group">
                <label class="control-label">exonéré</label>
                <div class="controls">
                  <select v-model="formData.exonere" class="span">
                  
                    <option value="0">Oui</option>
                     <option value="1">Non</option>
                  </select>
                
                </div>
              </div>
              </td>
               
                <!-- <td colspan="">
                     <div class="control-group">
                                                    <label class="control-label">Montant (Apres Retenu)</label>
                                                    <div class="controls">
                                                         <money :value="montantDeBase"    style="text-align:left;color:red;font-size:16px"  class="span"></money>
                                                        
                                                    </div>
                                                </div>
                </td> -->
               
            <td >
              <div class="control-group">
                <label class="control-label" >Montant HT (aprés retenues)</label>
                <div class="controls">
                  <!-- <input
                      type="text"  
                        :value="Montantapresretenues"
                     
                      class="span"
                      readonly
                  /> -->
<money :value="montantDeBaseapresretenues" readonly   style="text-align:left;color:red;font-size:16px"  class="span"></money>
                </div>
              </div>
            </td>
             
           </tr>
            <tr>
               <td>
              <div class="control-group">
                <label class="control-label">Taux</label>
                <div class="controls">


                  <input type="text" 
                         class="span"
                        :value="afficherEnorere"
                         readonly
                  />

                </div>
              </div>
            </td>
             <td >
              <div class="control-group">
                <label class="control-label" >Montant Tva</label>
                <div class="controls">
                  <!-- <input
                      type="text"  
                        :value="Montantapresretenues"
                     
                      class="span"
                      readonly
                  /> -->
<money :value="montantTva"  readonly  style="text-align:left;color:red;font-size:16px"  class="span"></money>
                </div>
              </div>
            </td>
             
             <td>
               <div class="control-group">
                <label class="control-label" >Montant TTC</label>
                <div class="controls">
                  <!-- <input
                      type="text"
                      :value="montantHTt"

                      class="span"
                      readonly
                  /> -->
<money    style="text-align:left;color:red;font-size:16px" readonly :value="montantHTt"  class="span"></money>
                </div>
              </div>
             </td>
             
           </tr>
           <tr>
             <td>
              <div class="control-group">
                <label class="control-label">PART Bailleur</label>
                <div class="controls">

<money  v-model="formData.parts_bailleur"   style="text-align:left;color:red;font-size:16px"  class="span"></money>
                  

                </div>
              </div>
            </td>
             <td colspan="">
               <div class="control-group">
                <label class="control-label" >PART ETAT</label>
                <div class="controls">
                <money  v-model="formData.parts_etat"   style="text-align:left;color:red;font-size:16px"  class="span"></money>
         
                  <!-- <input
                      type="text"
                      :value="MontantEtatCoteIvoire(formData.marche_id)"

                      class="span"
                      readonly
                  /> -->

                </div>
              </div>
             </td>
              <td>
              <div class="control-group">
                <label class="control-label">Date decompte</label>
                <div class="controls">


                  <input type="date" 
                         class="span"
                        v-model="formData.date_decompte"
                         
                  />

                </div>
              </div>
            </td>
           </tr>
          
          
          
            </table>
          </div>
          
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

    import {mapGetters, mapActions} from 'vuex'
    //import {admin,dcf,noDCfNoAdmin} from "../../../Repositories/Auth"
    import {  ModelListSelect } from 'vue-search-select'
    import 'vue-search-select/dist/VueSearchSelect.css'
    export default {
components: {
    
    ModelListSelect,

  },
        data() {
            return {
                fabActions: [
                    {
                        name: 'cache',
                        icon: 'add'
                    },

                ],
                liste:[],
                formData : {
                exonere:0,
                   diff_decompte:1
                },

                editTitre: {
                    code: "",
                    libelle: ""
                }

            };
        },

        created() {
            this.allActeurDepense();
            
        },
        computed: {
    //        admin:admin,
    //   dcf:dcf,
    //   noDCfNoAdmin:noDCfNoAdmin,
 ...mapGetters("bienService", ["personnaliseGetterMarcheBailleur","avenants",'mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',"gettersMotifPassations",
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser", "typeActeEffetFinanciers"]),


     ...mapGetters("uniteadministrative",['getterligneExempter','uniteAdministratives',"budgetGeneral",
      "getPersonnaliseBudgetGeneral","groupUa","groupeUaPourMarheHorSib" ,"budgetEclate","groupgranNature","getPersonnaliseBudgetGeneralParBienService",
      "montantBudgetGeneral","getPersonnaliseTransfert" ]),
       ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite',""]),
...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
 ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires',"grandes_natures",
 'structures_geographiques','localisations_geographiques','getterInfrastrucure',"taux"]),
   ...mapGetters("gestionMarche", ['entreprises']),
   ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements', 
  'types_financements']) ,
  ...mapGetters('parametreGenerauxFonctionnelle', ['Nature_des_prix','motif_passation']),
  

  ...mapGetters("Utilisateurs", ["user","getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
  // Montantapresretenues(){
  //     const val =  parseFloat(this.MontantFacture(this.formData.id))-parseFloat(parseFloat(this.formData.retenu_garantie) + parseFloat(this.formData.retenu_avance)+ parseFloat(this.formData.retenu_penalite));
      
  //      if (val) {
  //       return parseFloat(val).toFixed(0);
  //     }

      
  //     return 0
  //   },
  montantHTt() {
      const val =    parseFloat(this.montantDeBaseapresretenues) + parseFloat(this.montantTva);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
  montantTva() {
      const val =   parseFloat(this.montantDeBaseapresretenues) * parseFloat(this.afficherEnorere2);
      
       if (val) {
        return parseInt(val).toFixed(0);
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
    afficherEnorere2(){
if(this.formData.exonere == 0){
  return 0
}
else {
  return this.tauxArrondit
  
}
},
afficherEnorere(){
if(this.formData.exonere == 0){
  return 0
}
else {
  return this.affcherTauxEnCours
  
}
},
montantDeBaseapresretenues(){
return parseFloat(this.formData.montantmarche)-(parseFloat(this.formData.retenu_penalite)+parseFloat(this.formData.retenu_garantie)+parseFloat(this.formData.retenu_avance))
},

MontantHTBailleur(){
      const val =  parseFloat(this.Montantapresretenues)*(parseFloat(this.TauxBailleurDuMarche)/100);
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
    MontantHTEtat(){
      const val =  parseFloat(this.MontantTTC)*(parseFloat(this.TauxBailleurTresor(this.formData.marche_id))/100);
      
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
      const val = parseFloat(this.TauxBailleurDon(this.formData.marche_id)) + parseFloat(this.TauxBailleurEmprunt(this.formData.marche_id));
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
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
 retenuAvanceResteApayes(){
      const val = parseFloat(this.MontantRetenuAvance(this.formData.marche_id)) - parseFloat(this.CumulRetenuAvance(this.formData.marche_id));
      
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
      const val = parseFloat(this.CumulRetenuAvance(this.formData.marche_id)) + parseFloat(this.formData.retenu_avance);
      
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
      const val = parseFloat(this.MontantRetenuGarantie(this.formData.marche_id)) - parseFloat(this.CumulRetenuGarantie(this.formData.marche_id));
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
    CumulRetenuGarantieNouveau(){
      const val = parseFloat(this.CumulRetenuGarantie(this.formData.marche_id)) + parseFloat(this.formData.retenu_garantie);
      
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
      const val = parseFloat(this.MontantBailleurEmprunt(this.formData.marche_id)) + parseFloat(this.MontantBailleurDon(this.formData.marche_id));
      
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
    anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },



  MontantDeBase(){
return parseFloat(this.AfficheMontantMarche(this.formData.marche_id))+parseFloat(this.MontantAvenant(this.formData.marche_id))
  },
  MontantAvenant() {
      return id => {
        if (id != null && id != "") {
           return this.avenants.filter(qtreel => qtreel.marche_id == id).reduce(
              (prec, cur) =>
                parseFloat(prec) + parseFloat(cur.montant_ht),
              0
            )
            .toFixed(0);

     
      }
      }
  },
AfficheMontantMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_act;
      }
      return "Non renseigné"
        }
      };
    },
    AfficheObjetMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.objet;
      }
      return "Non renseigné"
        }
      };
    },
        },
        methods: {
            // methode pour notre action
            ...mapActions('personnelUA', ['getActeur',"ajouterActeur","supprimerActeurs","getNbrActeurAcrediteTaux","allActeurDepense"]),
            ...mapActions('bienService',[
          'ajouterActeEffetFinancier','modifierActeEffetFinancier', 'modifierMarche']),
           
...mapActions("uniteadministrative", [
      "ajouterDecompteFacture",
      
    ]),
           afficherModalListeExecution(){
                window.history.back();
            },
           afficherModalAjouterTitre(){
                this.$('#exampleModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            },
            
            AjouterDecompte () {
             var objetNouveau={
               ...this.formData,
               diff_decompte:1,
                
        marche_id:this.formData.marche_id,
       
      nethtva:this.montantDeBaseapresretenues,
     // netttc:this.Montantapresretenues,
      // parts_etat:this.MontantEtatCoteIvoire(this.formData.marche_id),
      // parts_bailleur:this.SommeBailleurDuMarche, 
      montantmarche:this.formData.montantmarche,
      netttc:this.montantHTt,
      exercicebudget:this.formData.exercicebudget
               
             }
                this.ajouterDecompteFacture(objetNouveau)
                
                this.formData = {
                    marche_id: "",
                    numero_decompte: "",
                     exercicebudget: "",
                    uniteadministrative_id: "",
                     entreprise_id: "",
                    montantmarche: "",
                     date_decompte: ""
                }
               
            },
// afficher
            


        }
    };
</script>

