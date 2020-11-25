L
<template>
  <div >
    <div id="exampleModal" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier decompte</h3>
      </div>
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
                      
                      v-model="editDecompte.numero_decompte"
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
                    v-model="editDecompte.date_decompte"
                      
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
                         :value="MontantFacture(editDecompte.Facture_id)"
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
                       :value="MontantRetenuAvance(editDecompte.marche_id)"
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
                      
                    :value="MontantRetenuGarantie(editDecompte.marche_id)"
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
                       
                    v-model="editDecompte.retenu_avance"
                      class="span"
                     
                  />
<code v-if="this.MontantRetenuAvance(this.editDecompte.marche_id) < this.CumulRetenuAvanceNouveauModifier ">Restant a paye  :{{retenuAvanceResteApayesModifier}}</code>
                </div>
              </div>
            </td>
             <td >
              <div class="control-group">
                <label class="control-label" > Retenue de garantie</label>
                <div class="controls">
                  <input
                      type="number"
                      
                         v-model="editDecompte.retenu_garantie"
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
                        v-model="editDecompte.retenu_penalite"

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
                        :value="MontantapresretenuesModifier"
                     
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
                         :value="MontantTVAFacture(editDecompte.facture_id)"
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
                      :value="MontantTTCModifier"

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
                        :value="ModifierMarche(editDecompte.marche_id)"
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
                         :value="TauxBailleurDuMarcheModifier"
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
                      :value="MontantHTBailleurModifier"

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
                        :value="ModifierMarche(editDecompte.marche_id)"
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
                         :value="TauxBailleurTresor(editDecompte.marche_id)"
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
                      :value=" MontantHTEtatModifier"

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
                      :value="NomEntreprise(editDecompte.fournisseur_id)"
                      
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
                     :value="AdresseEmailEntreprise(editDecompte.fournisseur_id)"
                      
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
                       
                      :value="ContribuableEntreprise(editDecompte.fournisseur_id)"
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
                       
                      :value="libelleObjet(editDecompte.marche_id)"
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
                      :value="NumeroMarche(editDecompte.marche_id)"
                      
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
                         :value="dateApprobation(editDecompte.marche_id)"
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
                      
                      :value="Imputation(idParent(editDecompte.marche_id))"
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
                       :value="montantHtMarche(editDecompte.marche_id)"

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
                        :value="montantHtMarche(editDecompte.marche_id)"
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
                         :value="SommeBailleurDuMarcheModifier"
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
                      :value="MontantEtatCoteIvoire(editDecompte.marche_id)"

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
                      <!-- <div data-toggle="buttons-checkbox" class="btn-group">
                        <a
                          class="btn btn-primary"
                          @click.prevent="AjouterDecompte"
                        >Valider</a>
                        <a
                          @click.prevent="afficherModalListeExecution()"
                          class="btn"
                          href="#"
                        >Fermer</a>
                      </div> -->
                    </div>
                  </div>
                </div>
              </table>
 
      
       <div class="modal-footer">
        <a
          @click.prevent="ajouterTypeTexteLocal(formData)"
          class="btn btn-primary"
          href="#"
          
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
       </div>
    </div> 
   <table class="table table-bordered table-striped" v-if="macheid">
                                    <thead>
                                   <tr>
                   
          <th >Décompte  </th>
          <!-- <th >Objet  </th> -->
          <th>Date </th>
          <th>Acompte HTVA </th>
          <th>Avance </th>
          <th>Garantie </th>
          <th>Penalités </th>
          <th>Net HTVA </th>
          <th>Net TTC</th>
          <th>Etat(TVA 18%)</th>
          <th>Bailleur(100% HTVA) </th>
          <th>Actions </th>
                  </tr>

                  
                                    </thead>
                                    <tbody>
                                    <tr class="odd gradeX" v-for="(type, index) in decomptefactures" :key="type.id">
                    <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.numero_decompte || 'Non renseigné'}}</td>
                    <!-- <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{afficheObjetMarche(type.marche_id) || 'Non renseigné'}}</td> -->
                    <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formaterDate(type.date_decompte) || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formatageSomme(parseFloat(MontantFactureHT(type.facture_id))) || 'Non renseigné'}}</td>
<td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formatageSomme(parseFloat(type.retenu_avance)) || 'Non renseigné'}}</td>

<td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formatageSomme(parseFloat(type.retenu_garantie)) || 'Non renseigné'}}</td>

<td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formatageSomme(parseFloat(type.retenu_penalite)) || 'Non renseigné'}}</td>
<td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formatageSomme(parseFloat(type.nethtva)) || 'Non renseigné'}}</td>

                    
                      <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formatageSomme(parseFloat(type.netttc)) || 'Non renseigné'}}</td>

                    
                      <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formatageSomme(parseFloat(type.parts_etat)) || 'Non renseigné'}}</td>

                    
                      <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formatageSomme(parseFloat(type.parts_bailleur)) || 'Non renseigné'}}</td>

                    <td>
                      <button class="btn btn-danger" @click="supprimerDecompteFacture(type.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                   
                   <td colspan="2" style="text-align:center;color;red">CUMULS</td>
                   
                   <td>{{formatageSomme(parseFloat(CumulMontantFacture(macheid)))}}</td>
                   <td>{{formatageSomme(parseFloat(CumulAvance(macheid)))}}</td>
                   <td>{{formatageSomme(parseFloat(CumulGArantie(macheid)))}}</td>
                   <td>{{formatageSomme(parseFloat(CumulPenalite(macheid)))}}</td>
                   <td>{{formatageSomme(parseFloat(CumulNetHtva(macheid)))}}</td>
                   <td>{{formatageSomme(parseFloat(CumulNetTTC(macheid)))}}</td>
                   <td>{{formatageSomme(parseFloat(CumulPartEtat(macheid)))}}</td>
                   <td>{{formatageSomme(parseFloat(CumulPartBailler(macheid)))}}</td>
                   <td></td>
                  </tr>
                  <!-- <tr>
 
                  <td colspan="2">% CUMULS</td>
                   <td>{{((parseFloat(CumulAvance(macheid))/parseFloat(MontantMarche(macheid)))/100).toFixed(2)}}</td>
                   <td>12</td>
                   <td>12</td>
                   <td>12</td>
                   <td>12</td>
                   <td>12</td>
                   <td>12</td>
                   <td>12</td>
                   <td>12</td>
                  </tr> -->
                </tbody>
                                </table>
 
  <notifications  />
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
     editDecompte:{
     },
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],

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
 "decomptefactures"
   
   
   ]),

   ...mapGetters('parametreGenerauxAdministratif',[

 "sections",
 "type_Unite_admins",
 "plans_programmes",
 "natures_sections",
 "grandes_natures",
 "afficheNiveauPlanProg",
 "exercices_budgetaires"
   ]),

   ...mapGetters('parametreGenerauxFonctionnelle',[

      "plans_fonctionnels",
 "afficheNiveauPlanFonctionnel"
   ]),

...mapGetters('parametreGenerauxActivite',[ 'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

...mapGetters('parametreGenerauxBudgetaire',["plans_budgetaires","derniereNivoPlanBudgetaire"]),
...mapGetters("gestionMarche", ['secteur_activites', 'entreprises','banques','comptes','getCompte']),
    
    MontantMarche() {
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
    CumulMontantFacture() {
      return id => {
        if (id != null && id != "") {
           return this.getFacturePersonnaliser.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.prix_propose_ht), 0).toFixed(0);

        }
      };
    },
    CumulAvance() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.retenu_avance), 0).toFixed(0);

        }
      };
    },
    CumulGArantie() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.retenu_garantie), 0).toFixed(0);

        }
      };
    },
    CumulPenalite() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.retenu_penalite), 0).toFixed(0);

        }
      };
    },
    CumulNetHtva() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.nethtva), 0).toFixed(0);

        }
      };
    },
    CumulNetTTC() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.netttc), 0).toFixed(0);

        }
      };
    },
    CumulPartEtat() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.parts_etat), 0).toFixed(0);

        }
      };
    },
    CumulPartBailler() {
      return id => {
        if (id != null && id != "") {
           return this.decomptefactures.filter(qtreel => qtreel.marche_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.parts_bailleur), 0).toFixed(0);

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
    //      MontantRetenuAvance() {
    //   return id => {
    //     if (id != null && id != "") {
    //        const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

    //   if (qtereel) {
    //     return qtereel.avance_demarrage_ht;
    //   }
    //   return 0
    //     }
    //   };
    // }, 
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
      CumulRetenuAvanceNouveauModifier(){
      const val = parseFloat(this.CumulRetenuAvance(this.editDecompte.marche_id)) + parseFloat(this.editDecompte.retenu_avance);
      
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
        retenuAvanceResteApayesModifierModifier(){
      const val = parseFloat(this.MontantRetenuAvance(this.editDecompte.marche_id)) - parseFloat(this.CumulRetenuAvance(this.editDecompte.marche_id));
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
    MontantapresretenuesModifier(){
      const val =  parseFloat(this.MontantFacture(this.editDecompte.facture_id))-parseFloat(parseFloat(this.editDecompte.retenu_garantie) + parseFloat(this.editDecompte.retenu_avance)+ parseFloat(this.editDecompte.retenu_penalite));
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
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
     MontantTTCModifier(){
      const val =  parseFloat(this.MontantapresretenuesModifier)+parseFloat(this.MontantTVAFacture(this.editDecompte.facture_id));
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
       ModifierMarche() {
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
    //    TauxBailleurTresor() {
    //   return id => {
    //     if (id != null && id != "") {
    //        return this.personnaliseGetterMarcheBailleur.filter(qtreel => qtreel.marche_id == id && qtreel.type_finnancement_id == 14).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.tauxbailleur), 0).toFixed(0);

     
    //     }
    //   };
    // },
     TauxBailleurDuMarcheModifier(){
      const val = parseFloat(this.TauxBailleurDon(this.editDecompte.marche_id)) + parseFloat(this.TauxBailleurEmprunt(this.editDecompte.marche_id));
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
    },
    //   MontantHTBailleur(){
    //   const val =  parseFloat(this.Montantapresretenues)*(parseFloat(this.TauxBailleurDuMarche)/100);
      
    //    if (val) {
    //     return parseFloat(val).toFixed(0);
    //   }
      
    //   return 0
    // },
       MontantHTBailleurModifierModifier(){
      const val =  parseFloat(this.MontantapresretenuesModifier)*(parseFloat(this.TauxBailleurDuMarcheModifier)/100);
      
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
     MontantHTEtatModifier(){
      const val =  parseFloat(this.MontantTTCModifier)*(parseFloat(this.TauxBailleurTresor(this.editDecompte.marche_id))/100);
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
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
      SommeBailleurDuMarcheModifier(){
      const val = parseFloat(this.MontantBailleurEmprunt(this.editDecompte.marche_id)) + parseFloat(this.MontantBailleurDon(this.editDecompte.marche_id));
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
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
      MontantEtatCoteIvoire() {
      return id => {
        if (id != null && id != "") {
           return this.personnaliseGetterMarcheBailleur.filter(qtreel => qtreel.marche_id == id && qtreel.type_finnancement_id == 14).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant), 0).toFixed(0);

     
        }
      };
     },
  
    MontantFactureHT() {
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
 afficheDecompteTableau() {
      return id => {
        if (id != null && id != "") {
          return this.decomptefactures.filter(
            element => element.marche_id == id 
          );
        }
      };
    },
    afficheObjetMarche() {
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
  },
  methods: { 
    
    ...mapActions('uniteadministrative',[
    "ModifierDecompteFacture",
 "ModifierDecompteFacture",
 "supprimerDecompteFacture"
   
   
   ]),
    formatageSomme:formatageSomme,
 formaterDate(date) {
            return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
    afficherModalAjouterpaiementPersonnel() {
      this.$("#ModalDecompte").modal({
        backdrop: "static",
        keyboard: false
      });
    },
   
        afficherModalModifierTypeTexte(index){
      this.$('#exampleModal').modal({
        backdrop: 'static',
        keyboard: false
      });
      this.editDecompte = this.decomptefactures.find(item=>item.id==index)
    },
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
