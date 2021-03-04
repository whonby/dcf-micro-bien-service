
<template>

<div class="container-fluid">
      <hr />
       <div  align="left" style="cursor:pointer;">
    <button class="btn btn-danger" @click.prevent="pagePrecedent">Page Précédente</button>
    
        </div>
      <div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Ajouter Sous Budget</h5>
              <!-- <div align="right">
                Search:
                <input type="search" placeholder />
              </div>-->
            </div>

            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <li class="active">
                        <a data-toggle="tab" href="#INFORMATIONUA">INFORMATION</a>
                      </li>
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="INFORMATIONUA" class="tab-pane active">
                         
                  <table class="table table-bordered table-striped" style="border:1px solid #000">
                     <tr>
                           <td colspan="">
              <div class="control-group">
                <label class="control-label">Exercice</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  :value="anneeAmort"
                    class="span"
                     readonly
                  />
                </div>
              </div>
              
            </td>
            <td colspan="">
              
              
            </td>
                     </tr>
                      <tr>
                        
                        <td>
                                <label>Unité Administrative <code style="color:red;font-size:16px">*</code>
                                </label>
                                <model-list-select style="border:1px solid #000"
                                                   class="wide"
                                                   :list="listeDesUa"
                                                   v-model="formData.unite_administrative_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder=""
                                >

                                </model-list-select>
                                 
                            </td>
              <td colspan="">
              <div class="control-group">
                <label class="control-label">Activité</label>
                <div class="controls">
                  <select v-model="formData.activite_parent_id" class="span" style="border:1px solid #000">
                    <option></option>
                     <option
                        v-for="typeFact in LibelleActivite(formData.unite_administrative_id)"
                        :key="typeFact[0].id"
                        :value="typeFact[0].activite_id"
                      >{{NomActivite(typeFact[0].activite_id)}}</option>
                  </select>
                </div>
              </div>
              
                     </td>
                        
          
                      </tr>
                      <tr>
                           <td colspan="">
              <div class="control-group">
                <label class="control-label">Ligne budgetaire</label>
                <div class="controls">
                  <select v-model="formData.ligneeconomique_id" class="span" style="border:1px solid #000">
                    
                     <option
                        v-for="typeFact in RecupererlibelleLigneEconomique(formData.activite_parent_id)"
                        :key="typeFact[0].id"
                        :value="typeFact[0].economique_id"
                      >{{libelleLigneEconomique(typeFact[0].economique_id)}}</option>
                  </select>
                </div>
              </div>
              
                     </td>
             <td>
                       <div class="control-group">
                <label class="control-label">Montant Restant</label>
                <div class="controls">
                   <money :value="dotationTotal"  readOnly  style="text-align:left;color:red;font-size:16px"  class="span"></money>
                 
                </div>
              </div>
                  </td>
                      </tr>
                      
                  </table>
        <table class="table table-bordered table-striped">
            <tr>
        <td colspan="">
              <div class="control-group">
                <label class="control-label">Code Sous Budget</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  v-model="formData.code"
                    class="span"
                     
                  />
                </div>
              </div>
              
                     </td>
                           <td colspan="">
              <div class="control-group">
                <label class="control-label">Libelle Sous Budget</label>
                <div class="controls">
                  <input
                    type="text"
                    style="border:1px solid #000"
                  v-model="formData.activite_enfant"
                    class="span"
                     
                  />
                </div>
              </div>
              
                     </td>
             <td>
                       <div class="control-group">
                <label class="control-label">Montant Attribué</label>
                <div class="controls">
                   <money v-model="formData.montant_budgetaire" :readOnly="griserMontant"   style="text-align:left;color:red;font-size:16px"  class="span"></money>
                 <code style="color:red;font-size:12px" v-if="dotationTotal==0">Montant de la Ligne Budgetaire est Saturé</code>
                </div>
              </div>
                  </td>
            </tr>
        </table>
                
                
                    </div>
                  </div>
<div align="right">
                    <div class="controls">
                      <div data-toggle="buttons-checkbox" class="btn-group">
                        <a
                        v-show="dotationTotal!=0"
                          class="btn btn-primary"
                          @click.prevent="ajouterTypeTexteLocal"
                        >Valider</a>
                        <a
                          @click.prevent="pagePrecedent()"
                          class="btn"
                          href="#"
                        >Fermer</a>
                      </div>
                    </div>
                  </div>
                  
                  <br />
                  
                </div>
              </table>
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                   
                    <th>Code</th>
                     <th>Sous Budget</th>
                      <th>Ligne budgetaire</th>
                       <th>Montant</th>
                        <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type, index) in listeSousBudget(formData.unite_administrative_id,formData.ligneeconomique_id)" :key="type.id">
                    <!-- <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.execice || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{LibelleUniteAdministrative(type.unite_administrative_id) || 'Non renseigné'}}</td> -->
                    <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.code || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.activite_enfant || 'Non renseigné'}}</td>
                    <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{libelleLigneEconomique(type.ligneeconomique_id) || 'Non renseigné'}}</td>
                    <td style="font-weight:bold;font-size:14px;text-align:center;"
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formatageSomme(parseFloat(type.montant_budgetaire)) || 'Non renseigné'}}</td>

                    <td>
                      <button class="btn btn-danger" @click="supprimerTypeTexte(type.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td style="font-weight:bold;font-size:14px;text-align:center;">TOTAL SOUS BUDGET PAR LIGNE</td>
                    <td style="text-align:center;color:red;font-weight:bold;">{{formatageSomme(parseFloat(MontantSousBudget(formData.unite_administrative_id,formData.activite_parent_id,formData.ligneeconomique_id)))}}</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td style="font-weight:bold;font-size:14px;text-align:center;">TOTAL INITIAL</td>
                    <td style="text-align:center;color:red;font-weight:bold;">{{formatageSomme(parseFloat(MontantInitial(formData.unite_administrative_id,formData.activite_parent_id,formData.ligneeconomique_id)))}}</td>
                    
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <notifications/>
     
</div>
</template>
<script>

    import {mapGetters,mapActions} from 'vuex'
    import {admin,dcf,noDCfNoAdmin} from "@/Repositories/Auth"
    import {formatageSomme} from "@/Repositories/Repository"
import {  ModelListSelect } from 'vue-search-select'
    import moment from 'moment';
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
                
          info_pdf:false,
                formData:{
                 unite_administrative_id:""
                },
                
                editpiece:{},
                formData5:{
                  numeroDemande:""
                },
 formMandat:{
                 
                },
                formData2:{
                 
                },
                message_mandater:""
            };
        },

        created() {
          
        },
        computed: {
           admin:admin,
      dcf:dcf,
      noDCfNoAdmin:noDCfNoAdmin,
 ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
            ...mapGetters('personnelUA', ["salairesActeur","personnaliseActeurDepense","personnaFonction","afficheNombrePersonnelRecuActeNormination","fonctionBudgetaire","type_salaries","type_contrats","acte_personnels","type_acte_personnels","fonctions","grades","niveau_etudes",
                "nbr_acteur_actredite_taux","all_acteur_depense","personnaliseActeurFinContrat",
                "totalActeurEnctivite","totalActeurDepense","totalActeurAccredite","tauxActeurAccredite","totalActeurNonAccredite","affichePersonnelRecuActeNormination"]),
             ...mapGetters("uniteadministrative", ["groupeLigneEconomiqueBudget","getSousBudget","groupeActiviteBudget","budgetGeneral","fonctionsua","servicesua","directions","uniteZones","uniteAdministratives","getPersonnaliseBudgetGeneralParPersonnel"]),
            // ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires"]),
            ...mapGetters("parametreGenerauxBudgetaire", ["plans_budgetaires"]),
 ...mapGetters("SuiviImmobilisation", ["services"]),

...mapGetters("bienService", ["typeFactures","gettersDossierLiquidation","gettersDemandeEngagement","gettersnomPieceJustificative","modepaiements","gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots","villes","communes","pays","modePassations", "procedurePassations","getterDossierCandidats","marches","gettersPersonnaliserRapportJugement",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","selectionner_candidats",
                "getActeEffetFinancierPersonnaliserContrat", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
 ...mapGetters("gestionMarche", [ 'groupeVille','entreprises','banques','comptes','getCompte', 'getEntreptise','getPersonnaliseAgence','agenceBanques']),
   ...mapGetters('parametreGenerauxFonctionnelle', ['structureActe','planActe']),
...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
   ...mapGetters("parametreGenerauxAdministratif", [
      "services_gestionnaires",
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires",
      "afficheLocalisationGeoNiveau5"
    ]),
      ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements']),
MontantSousBudget() {
      return (id,id1,id2) => {
        if (id != null && id != "" && id1 != null && id1 != "" && id2 != null && id2 != "") {
           return this.getSousBudget.filter(qtreel => qtreel.unite_administrative_id == id && qtreel.activite_parent_id == id1 && qtreel.ligneeconomique_id == id2 && qtreel.execice==this.anneeAmort).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_budgetaire), 0).toFixed(0);

        }
      };
    },

MontantInitial() {
      return (id,id1,id2) => {
        if (id != null && id != "" && id1 != null && id1 != "" && id2 != null && id2 != "") {
           return this.budgetGeneral.filter(qtreel => qtreel.ua_id == id && qtreel.activite_id == id1 && qtreel.economique_id == id2 && qtreel.exercicebudget_id==this.anneeAmort && qtreel.actived==1).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.cp), 0).toFixed(0);

        }
      };
    },



LibelleUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },

       listeSousBudget() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
           return this.getSousBudget.filter(qtreel => qtreel.unite_administrative_id == id && qtreel.ligneeconomique_id == id1 && qtreel.execice==this.anneeAmort );

        }
      };
    },
      griserMontant(){
  return this.dotationTotal==0
},
      dotationTotal(){
return (parseFloat(this.RecuppererLaDotation(this.formData.ligneeconomique_id))-parseFloat(this.DotationRestantCumul(this.formData.unite_administrative_id,this.formData.ligneeconomique_id))-parseFloat(this.formData.montant_budgetaire))
},
       DotationRestantCumul() {
      return (id,id1) => {
        if (id != null && id != "" && id1 != null && id1 != "") {
           return this.getSousBudget.filter(qtreel => qtreel.unite_administrative_id == id && qtreel.ligneeconomique_id == id1 && qtreel.execice==this.anneeAmort ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_budgetaire), 0).toFixed(0);

        }
      };
    },
     RecuppererLaDotation() {
      return (id) => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id &&  qtreel.actived==1 && qtreel.exercicebudget_id==this.anneeAmort);

      if (qtereel) {
        return qtereel.cp
      }
      return 0
        }
      };
    },
      libelleLigneEconomique() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ',qtereel.libelle)
      }
      return 0
        }
      };
    },
      RecupererlibelleLigneEconomique() {
      return (id) => {
        if (id != null && id != "") {
           return this.groupeLigneEconomiqueBudget.filter(qtreel => qtreel[0].activite_id == id);

      
        }
      };
    },
    CodeActivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_activites.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code
      }
      return 0
        }
      };
    },
       NomActivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_activites.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ',qtereel.libelle)
      }
      return 0
        }
      };
    },
      LibelleActivite() {
      return (id) => {
        if (id != null && id != "") {
           return this.groupeActiviteBudget.filter(qtreel => qtreel[0].ua_id == id && qtreel[0].actived==1 && qtreel[0].exercicebudget_id==this.anneeAmort);

      
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
      listeDesUa() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.uniteAdministratives.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
                
            })
            return colect
        }

return this.uniteAdministratives

    },
      Activite() {
      return (id) => {
        if (id != null && id != "") {
           return this.budgetGeneral.filter(qtreel => qtreel.activite_id == id && qtreel.actived==1);

      
        }
      };
    },
    imputation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetGeneral.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.codebudget
      }
      return 0
        }
      };
    },
    

        },

methods: {
      ...mapActions("uniteadministrative", [
      "ajouterSousBudget",
      
     
      
      
    ]),
      ...mapActions('personnelUA', ["ajouterFichierJointDmd"]),
formatageSomme:formatageSomme,
ajouterTypeTexteLocal() {
    this.intitule=this.CodeActivite(this.formData.activite_parent_id) + "" + this.formData.code
    var nouvell={
        execice:this.anneeAmort,
        activite_parent_id:this.formData.activite_parent_id,
        ligneeconomique_id:this.formData.ligneeconomique_id,
        code:this.intitule,
        activite_enfant:this.formData.activite_enfant,
        montant_budgetaire:this.formData.montant_budgetaire,
        unite_administrative_id:this.formData.unite_administrative_id
    }
      this.ajouterSousBudget(nouvell);

      this.formData = {
       
        activite_enfant:"",
        montant_budgetaire:0,
       
      };
    },
pagePrecedent(){
                window.history.back()
            },


    formaterDate(date) {
              return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
            
       
}


    };
</script>

