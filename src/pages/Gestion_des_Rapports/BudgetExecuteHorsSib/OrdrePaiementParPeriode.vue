
<template>
  <div>
<div  class="row-fluid" v-if="affiche_filtre" style="margin-top: -20px">
                <div class="span1">
 
    
                </div>
                <div class="span10 " style="background-color: transparent; !important;">
                    <table class="table table-striped"  >
                        <tbody>
                        <tr>
                          <td colspan="2">
                            <br>
                          
                            
                                <label style="color:#000;font-size:14px;font-weight: bolder;">UNITE ADMINISTRATIVE<a href="#"  style="color: red"></a>
                                </label>
                                <model-list-select style="background-color: #fff;border:2px solid #000"
                                                   class="wide"
                                                   :list="uniteAdministratives"
                                                   v-model="uniteAdministrative_id"
                                                   option-value="id"
                                                   option-text="libelle"
                                                   placeholder="TOUTES LES UNITES ADMINISTRATIVES"
                                >

                                </model-list-select>
                            </td>
                          
                            
                        </tr>
<tr>
  <td >
                               <div class="control-group">
            <label class="control-label" style="color:#000;font-size:14px;font-weight: bolder;">Date debut</label>
            <div class="controls">
              <input type="date" v-model="formData.date_debut" class="span"  style="background-color: #fff;border:2px solid #000"/>
            </div>
          </div>
                            </td>
                             <td >
                               <div class="control-group">
            <label class="control-label" style="color:#000;font-size:14px;font-weight: bolder;">Date Fin</label>
            <div class="controls">
              <input type="date" v-model="formData.date_fin" class="span"  style="background-color: #fff;border:2px solid #000"/>
            </div>
          </div>
                            </td>
</tr>
                        </tbody>
                    </table>

                </div>


            </div>
 <div class="widget-content nopadding">
    <table class="table table-bordered table-striped html2pdf__page-break" id="app1"  >
               <tr>
                 <td style="text-align:center">
<p>MINISTERE  DU BUDGET</p>
<p>-------------------------</p>
 <p>DIRECTION DU CONTRÔLE FINANCIER</p>
 <p>-------------------------</p>
 <img  :src="AfficheLogODCF">
                 </td>
                  <td style="text-align:center">
                   <img  :src="AfficheAmoirie">
                 </td>
                  <td style="text-align:center">
                   <p>REPUBLIQUE DE CÔTE D'IVOIRE </p>
                   <p>-------------------------</p>
      <P>Union-Discipline-Travail</P>
                 </td>
               </tr>
               </table>
               <h2 style="font-size:25px;font-weight:bold;color:#000;text-align:center">Listes des ordres de paiement du {{formData.date_debut}} au {{formData.date_fin}}</h2>
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     <th   style="font-size:14px;font-weight:bold">LIGNE BUDGETAIRE</th>
                      <th   style="font-size:14px;font-weight:bold">TYPE ORDRE PAIEMENT</th>
                     <th   style="font-size:14px;font-weight:bold;color:#000">N°ORDRE PAIEMENT</th>
                     <th   style="font-size:14px;font-weight:bold">BAILLEUR</th>
                      <th   style="font-size:14px;font-weight:bold">OBJET</th>
                     <th   style="font-size:14px;font-weight:bold;color:#000">MONTANT (FCFA)</th>
                     <th   style="font-size:14px;font-weight:bold;color:#000">VISA CF</th>
                     
                  </tr>
                </thead>
                 <tbody>
                  <tr class="odd gradeX" v-for="(type) in filtre_type_teste" :key="type.id">
                    <td style="font-size:14px;font-weight:bold;text-align:center">{{libelleLigneEconomique(type.ligne_economique_id) || 'Non renseigné'}}</td>
                     
 <td v-if="type.type_ordre_paiement==1"
                      style="font-size:14px;font-weight:bold;text-align:center"                
                    > <span>OP Direct</span></td>
                    <td v-else-if="type.type_ordre_paiement==2" style="font-size:14px;font-weight:bold;text-align:center"                
                    > <span>OP Provisoire</span></td>
                    <td v-else-if="type.type_ordre_paiement==3"
                      style="font-size:14px;font-weight:bold;text-align:center"                
                    > <span>OP Annulation</span></td>
                    <td v-else
                      style="font-size:14px;font-weight:bold;text-align:center"                
                    > <span>OP Définitif</span></td>
                      <td style="font-size:14px;font-weight:bold;text-align:center">{{type.numero_ordre_paiement || 'Non renseigné'}}</td>
                      <td style="font-size:14px;font-weight:bold;text-align:center">{{libelleBailleur(type.source_financement_id) || 'Non renseigné'}}</td>
                    <td style="font-size:14px;font-weight:bold;text-align:center">{{type.odjet_autre_depense || 'Non renseigné'}}</td>
                      <td style="font-size:14px;font-weight:bold;text-align:center">{{formatageSommeSansFCFA(parseFloat(type.montant_ordre_paiement)) || 'Non renseigné'}}</td>
                   
<td style="font-size:14px;font-weight:bold;text-align:center">{{type.date_decision_cf || 'Non renseigné'}}</td>
                    
                  </tr>
                </tbody>
              </table>
              
            </div>
            <fab :actions="fabActions"  @searchMe="filter" main-icon="apps" bg-color="green"></fab>
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import { formatageSommeSansFCFA } from "@/Repositories/Repository";
import {partition} from '@/Repositories/Repository'
import {  ModelListSelect } from 'vue-search-select'
     import 'vue-search-select/dist/VueSearchSelect.css'
export default {
   components: {
    
    ModelListSelect,
     
  },
  name:'typetext',
  data() {
    return {
       page:0,
       size:10,
      active_el:0,
      fabActions: [
       {
                  name: 'searchMe',
                   icon: "search"
              }
      ],
     
        options2: [
          { id: '1', libelle: 'OP Direct'},
          { id: '2', libelle: 'OP Provisoire'},
          { id: '3', libelle: 'OP Annulation'},
          { id: '4', libelle: 'OP Définitif'},
          
        ],
      json_fields: {
        CODE: "code",
        LIBELLE: "libelle"
      },
       affiche_filtre1:false,
        affiche_filtre:false,
      affiche_boutton_filtre:true,
      formData: {
        code: "",
        libelle: ""
      },
      EditDetache:{},
      typeop_id:0,
      NumeroOp:0,
      uniteAdministrative_id:0,
      
      editMandat: {
        
      },
      EditAnulation:{},
      editDecisionFinal:{},
      search: ""
    };
  },

  computed: {
     ...mapGetters("Utilisateurs", ["getterAffectionServiceCF","getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
            ...mapGetters('personnelUA', ["salairesActeur","personnaliseActeurDepense","personnaFonction","afficheNombrePersonnelRecuActeNormination","fonctionBudgetaire","type_salaries","type_contrats","acte_personnels","type_acte_personnels","fonctions","grades","niveau_etudes",
                "nbr_acteur_actredite_taux","all_acteur_depense","personnaliseActeurFinContrat",
                "totalActeurEnctivite","totalActeurDepense","totalActeurAccredite","tauxActeurAccredite","totalActeurNonAccredite","affichePersonnelRecuActeNormination"]),
    ...mapGetters("bienService", ["gettershistoriqueDecisionCfOP","typeMarches","gettersgestionOrdrePaiementAnnulation","gettersgestionOrdrePaiement","gettersDossierAutreDepense","gettersDossierMandat","gettersDossierFacturePiece","typeFactures","gettersDemandeEngagement","gettersnomPieceJustificative","modepaiements","gettersCotationPersonnaliser","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots","villes","communes","pays","modePassations", "procedurePassations","getterDossierCandidats","marches","gettersPersonnaliserRapportJugement",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","selectionner_candidats",
                "getActeEffetFinancierPersonnaliserContrat", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
 ...mapGetters("gestionMarche", [ 'groupeVille','entreprises','banques','comptes','getCompte', 'getEntreptise','getPersonnaliseAgence','agenceBanques']),
   ...mapGetters('parametreGenerauxFonctionnelle', ['structureActe','planActe']),
...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
   ...mapGetters("gestionMarche", ["entreprises"]),
  ...mapGetters("uniteadministrative", ["budgetEclate","groupeLigneEconomiqueBudget","getSousBudget","groupeActiviteBudget","budgetGeneral","fonctionsua","servicesua","directions","uniteZones","uniteAdministratives","getPersonnaliseBudgetGeneralParPersonnel"]),
    ...mapGetters('parametreGenerauxFonctionnelle', ['structuresDecision',
  'plans_Decision']),
  ...mapGetters('parametreGenerauxBudgetaire',["plans_budgetaires","derniereNivoPlanBudgetaire"]),
...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements']),

libelleBailleur() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.sources_financements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
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
        return qtereel.code.concat('    ',qtereel.libelle)
      }
      return 0
        }
      };
    },



AfficheLogODCF() {
      
   
        return "http://dcf-personnel-ua.kognishare.com/savephotoprofil/log3.png";
   
     
       
    },
    AfficheAmoirie() {
      
   
        return "http://dcf-personnel-ua.kognishare.com/savephotoprofil/amoirie.png";
   
     
       
    },
listeOpdiffere() {
      return id => {
        if (id != null && id != "") {
           return this.gettershistoriqueDecisionCfOP.filter(qtreel => qtreel.id_op == id && qtreel.diff_decision==0 && qtreel.decision_cf==2);

     
        }
      };
    },
    EurreurCorrige() {
      return id => {
        if (id != null && id != "") {
           return this.gettershistoriqueDecisionCfOP.filter(qtreel => qtreel.id_op == id && qtreel.diff_decision==1 && qtreel.decision_cf==2);

     
        }
      };
    },
    MotifLibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_Decision.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    FamilleMotifLibelle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_Decision.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
verifier() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettershistoriqueDecisionCfOP.find(qtreel => qtreel.id_op == id);

      if (qtereel) {
        return qtereel.id_op;
      }
      return 0
        }
      };
    },
 VideUa(){
          return this.uniteAdministrative_id==""
            },

VideNumeroOp(){
            return this.NumeroOp==""
            },
            VideTypeOp(){
            return this.typeop_id==""
            },
ListeDEsEntreprise(){

                let vM=this;
                let objet=this.listeordrepaiementregie

                //retourne la section selectionner
              
                if(this.uniteAdministrative_id != 0 && this.typeop_id == 0 ){
                  
                    objet = this.listeordrepaiementregie.filter(item=>{
                        if(item.unite_administrative_id==vM.uniteAdministrative_id){
                            return item
                        }
                    })
                 return objet
                }
                 if(this.typeop_id != 0 && this.uniteAdministrative_id == 0){
                  
                    objet = this.listeordrepaiementregie.filter(item=>{
                        if(item.type_ordre_paiement==vM.typeop_id){
                            return item
                        }
                    })
                 
                }
                if(this.NumeroOp != 0){
                  
                    objet = this.listeordrepaiementregie.filter(item=>{
                        if(item.numero_ordre_paiement==vM.NumeroOp){
                            return item
                        }
                    })
                 return objet
                }
                  if(this.uniteAdministrative_id !=0  && this.typeop_id != 0){
                  
                    objet = this.listeordrepaiementregie.filter(item=>{
                        if(item.unite_administrative_id==vM.uniteAdministrative_id && item.type_ordre_paiement==vM.typeop_id){
                            return item
                        }
                    })
                 return objet
                }
            
                return objet
            },
NombreTotalOP() {
      
           return this.ListeDEsEntreprise.length

    },
NombreTotalOPDIRECTEnttente() {
      
           return this.ListeDEsEntreprise.filter(item=>item.type_ordre_paiement==1 && item.decision_cf==0).length

    },
    NombreTotalOPDIRECTVise() {
      
           return this.ListeDEsEntreprise.filter(item=>item.type_ordre_paiement==1 && item.decision_cf==8 || item.type_ordre_paiement==1 && item.decision_cf==9).length

    },
    NombreTotalOPDIRECTDiffere() {
      
           return this.ListeDEsEntreprise.filter(item=>item.type_ordre_paiement==1 && item.decision_cf==2).length

    },
    NombreTotalOPDIRECTRejete() {
      
           return this.ListeDEsEntreprise.filter(item=>item.type_ordre_paiement==1 && item.decision_cf==3).length

    },
     NombreTotalOPDIRECT() {
      
           return this.ListeDEsEntreprise.filter(item=>item.type_ordre_paiement==1).length

    },




NombreTotalOPProvisoireEnttente() {
      
           return this.ListeDEsEntreprise.filter(item=>item.type_ordre_paiement==2 && item.decision_cf==0).length

    },
    NombreTotalOPProvisoireVise() {
      
           return this.ListeDEsEntreprise.filter(item=>item.type_ordre_paiement==2 && item.decision_cf==8 || item.type_ordre_paiement==2 && item.decision_cf==9).length

    },
    NombreTotalOPProvisoireDiffere() {
      
           return this.ListeDEsEntreprise.filter(item=>item.type_ordre_paiement==2 && item.decision_cf==2).length

    },
    NombreTotalOPProvisoireRejete() {
      
           return this.ListeDEsEntreprise.filter(item=>item.type_ordre_paiement==2 && item.decision_cf==3).length

    },




NombreTotalOPProvisoire() {
      
           return this.ListeDEsEntreprise.filter(item=>item.type_ordre_paiement==2).length

    },







    
NombreTotalOPANNULATIONEnttente() {
      
           return this.ListeDEsEntreprise.filter(item=>item.type_ordre_paiement==3 && item.decision_cf==0).length

    },
    NombreTotalOPANNULATIONVise() {
      
           return this.ListeDEsEntreprise.filter(item=>item.type_ordre_paiement==3 && item.decision_cf==8 || item.type_ordre_paiement==3 && item.decision_cf==9).length

    },
    NombreTotalOPANNULATIONDiffere() {
      
           return this.ListeDEsEntreprise.filter(item=>item.type_ordre_paiement==3 && item.decision_cf==2).length

    },
    NombreTotalOPANNULATIONRejete() {
      
           return this.ListeDEsEntreprise.filter(item=>item.type_ordre_paiement==3 && item.decision_cf==3).length

    },
    NombreTotalOPAnnulation() {
      
           return this.ListeDEsEntreprise.filter(item=>item.type_ordre_paiement==3).length

    },






    
NombreTotalOPDefinitifEnttente() {
      
           return this.ListeDEsEntreprise.filter(item=>item.type_ordre_paiement==4 && item.decision_cf==0).length

    },
    NombreTotalOPDefinitifVise() {
      
           return this.ListeDEsEntreprise.filter(item=>item.type_ordre_paiement==4 && item.decision_cf==8 || item.type_ordre_paiement==4 && item.decision_cf==9).length

    },
    NombreTotalOPDefinitifDiffere() {
      
           return this.ListeDEsEntreprise.filter(item=>item.type_ordre_paiement==4 && item.decision_cf==2).length

    },
    NombreTotalOPDefinitifRejete() {
      
           return this.ListeDEsEntreprise.filter(item=>item.type_ordre_paiement==4 && item.decision_cf==3).length

    },
    NombreTotalOPDefinitive() {
      
           return this.ListeDEsEntreprise.filter(item=>item.type_ordre_paiement==4).length

    },




NombreTotalOPTotalEnttente() {
      
           return this.ListeDEsEntreprise.filter(item=> item.decision_cf==0).length

    },
    NombreTotalOPTotalVise() {
      
           return this.ListeDEsEntreprise.filter(item=> item.decision_cf==8 ||  item.decision_cf==9).length

    },
    NombreTotalOPTotalDiffere() {
      
           return this.ListeDEsEntreprise.filter(item=> item.decision_cf==2).length

    },
    NombreTotalOPTotalRejete() {
      
           return this.ListeDEsEntreprise.filter(item=> item.decision_cf==3).length

    },
    OPTotal() {
      
           return this.ListeDEsEntreprise.length

    },



listeUniteAdminPasSection(){
                if (this.uniteAdministrative_id!="" && this.typeop_id!=""){
                    return this.listeordrepaiementregie.filter(item=>item.unite_administrative_id==this.uniteAdministrative_id && item.type_ordre_paiement==this.typeop_id)
                }
                return this.listeordrepaiementregie
            },


   afficheNumeroOpDefinitive() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_ordre_paiement;
      }
      return 0
        }
      };
    },

    listeordrepaiementregie() {
     
          return  this.gettersgestionOrdrePaiement.filter(qtreel => qtreel.diff_op == null && qtreel.decision_cf==8 || qtreel.diff_op == null && qtreel.decision_cf==9);
    }, 
  afficheIdOpProvisoire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiementAnnulation.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.id_op_provisoire;
      }
      return 0
        }
      };
    },
  afficheNumeroOpAnuulation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiementAnnulation.find(qtreel => qtreel.id_op_provisoire == id);

      if (qtereel) {
        return qtereel.numero_op_annulation;
      }
      return 0
        }
      };
    },
    filtre_type_teste() {
      const st = this.search.toLowerCase();
      return this.listeordrepaiementregie.filter(type => {
        return (
          type.numero_ordre_paiement.toLowerCase().includes(st)
        );
      });
    },
    afficheDecisionOpAnuulation1() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiementAnnulation.find(qtreel => qtreel.id_op_provisoire == id);

      if (qtereel) {
        return qtereel.id_op_provisoire;
      }
      return 0
        }
      };
    },
        afficheDecisionOpAnuulation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiementAnnulation.find(qtreel => qtreel.id_op_provisoire == id);

      if (qtereel) {
        return qtereel.decision_cf_op_annul;
      }
      return 0
        }
      };
    },
    afficheDecisionOpProvisoir() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiement.find(qtreel => qtreel.id_op_provisoire == id);

      if (qtereel) {
        return qtereel.decision_cf;
      }
      return 0
        }
      };
    },
    
    afficheDecisionLiquidation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiementAnnulation.find(qtreel => qtreel.id_op_provisoire == id);

      if (qtereel) {
        return qtereel.id_op_provisoire;
      }
      return 0
        }
      };
    },
    afficheDecisionDefinitif() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiementAnnulation.find(qtreel => qtreel.id_op_provisoire == id);

      if (qtereel) {
        return qtereel.decision_cf_op_annul;
      }
      return 0
        }
      };
    },
    recupererNomDuControleurF() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterUtilisateur.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.name;
      }
      return 0
        }
      };
    },
recupererIdUser() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterAffectionServiceCF.find(qtreel => qtreel.servicecf_id == id && qtreel.date_fin==null);

      if (qtereel) {
        return qtereel.user_id;
      }
      return 0
        }
      };
    },
 recupererIdServiceCF() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterAffectation.find(qtreel => qtreel.unite_administrative_id == id   && qtreel.date_fin==null);

      if (qtereel) {
        return qtereel.servicecf_id;
      }
      return 0
        }
      };
    },

   griserAutreMotif(){
  return this.editMandat.motif != 237 
},
      AffichierElementParent() {
      
      // return id => {
      //   if (id != null && id != "") {
          return this.plans_Decision.filter(element => this.RecupererNiveau3StructureDecision(element.structure_motif_decission_id) == 3);
      //   }
      // };
    },
      RecupererNiveau3StructureDecision() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.structuresDecision.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.niveau;
      }
      return 0
        }
      };
    },
    AffichierElementEnfant() {
      
      return id => {
        if (id != null && id != "") {
          return this.plans_Decision.filter(element => element.parent == id);
        }
      };
    },
    libelleDecision() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_Decision.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 'Non renseigné'
        }
      };
    },
     MontantMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_act
      }
      return 0
        }
      };
    },
    libelleMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_marche.concat('    ',qtereel.objet)
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
        return qtereel.libelle
      }
      return 0
        }
      };
    },
    recupererIdOpAnnulation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiementAnnulation.find(qtreel => qtreel.id_op_provisoire == id);

      if (qtereel) {
        return qtereel.id
      }
      return 0
        }
      };
    },
    recupererIdOpProvisoire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiementAnnulation.find(qtreel => qtreel.id_op_provisoire == id);

      if (qtereel) {
        return qtereel.id_op_provisoire
      }
      return 0
        }
      };
    },
    recupererIdUa() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.gettersgestionOrdrePaiement.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.unite_administrative_id
      }
      return 0
        }
      };
    },
  },
  methods: {
    ...mapActions("bienService", [
      "modifierGestionOrdrePaiement",
     "modifierGestionOrdrePaiementAnnulat",
     "supprimerGestionOrdrePaiement",
     "ajouterHistoriqueDecisionOp",
     "modifierHistoriqueDecisionOp"
    ]),



partition:partition,

getDataPaginate(index){
          this.active_el = index;
          this.page=index
      },
      precedent(){
          this.active_el--
          this.page --
      },
      suivant(){
          this.active_el++
          this.page ++
      },


    DetacheMotif(id) {
     
       this.EditDetache = this.gettershistoriqueDecisionCfOP.find(item=>item.id==id);
       this.ModifierMotif()
       
    },
DetacheMotifAttache(id) {
     
       this.EditDetache = this.gettershistoriqueDecisionCfOP.find(item=>item.id==id);
      
       this.ModifierMotifAttche()
    },

 ModifierMotif() {
   var objet ={
     id:this.EditDetache.id,
     decision_cf:this.EditDetache.decision_cf,
        famille_motif:this.EditDetache.famille_motif,
        motif:this.EditDetache.motif,
        date_decision:this.EditDetache.date_decision_cf,
        diff_decision:1,
        id_op:this.EditDetache.id_op
   }
      this.modifierHistoriqueDecisionOp(objet);

      
       
    },


 ModifierMotifAttche() {
   var objet ={
     id:this.EditDetache.id,
     decision_cf:this.EditDetache.decision_cf,
        famille_motif:this.EditDetache.famille_motif,
        motif:this.EditDetache.motif,
        date_decision:this.EditDetache.date_decision_cf,
        diff_decision:0,
        id_op:this.EditDetache.id_op
   }
      this.modifierHistoriqueDecisionOp(objet);

      
       
    },

     AfficheBoutonAjouter(){
                this.affiche_filtre1=!this.affiche_filtre1
               
            },
    filter(){
                this.affiche_filtre=!this.affiche_filtre
               
            },
    ajouterLiquidation(){
                this.$router.push({ name: 'AjouterOrdrePaiementAnnulation' })
            },
    modifierTypeTexteLocal() {
      var nouveauObjet ={
        decision_cf:this.editMandat.decision_cf,
        famille_motif:this.editMandat.famille_motif,
        motif:this.editMandat.motif,
        date_decision:this.editMandat.date_decision_cf,
        diff_decision:0,
        id_op:this.editMandat.id

      }
      this.ajouterHistoriqueDecisionOp(nouveauObjet)
      this.modifierGestionOrdrePaiement(this.editMandat);
this.$("#validationOpDefinitif").modal('hide');
      
       
    },
     modifierDecisionFinal() {
      this.modifierGestionOrdrePaiement(this.editDecisionFinal);
this.$("#validationOpDefinitif").modal('hide');
      
       
    },
    ModifierOpAnnulation() {
      var nouvelObjet={
        id:this.recupererIdOpAnnulation(this.EditAnulation.id),
        decision_cf_op_annul:this.EditAnulation.decision_cf_op_annul,
        famille_motif_id_op_annul:this.EditAnulation.famille_motif_id_op_annul,
        motif_op_annul:this.EditAnulation.motif_op_annul,
        date_decision_op_annul:this.EditAnulation.date_decision_op_annul,
        observation_op_annul:this.EditAnulation.observation_op_annul
        
      }
      this.modifierGestionOrdrePaiementAnnulat(nouvelObjet);
this.$("#decisionAnnulation").modal('hide');
      
       
    },
    ModalOpAnnulation(id) {
      this.$("#decisionAnnulation").modal({
        backdrop: "static",
        keyboard: false
      });
       this.EditAnulation = this.gettersgestionOrdrePaiement.find(item=>item.id==id);
    },
    apercuFacture(id) {
      this.$("#validationOpDefinitif").modal({
        backdrop: "static",
        keyboard: false
      });
       this.editMandat = this.gettersgestionOrdrePaiement.find(item=>item.id==id);
    },

    DecisionDefinitifCf(id) {
      this.$("#decisionDefinitif").modal({
        backdrop: "static",
        keyboard: false
      });
       this.editDecisionFinal = this.gettersgestionOrdrePaiement.find(item=>item.id==id);
    },
    formatageSommeSansFCFA:formatageSommeSansFCFA,
    ajouterOpSysteme(){
                this.$router.push({ name: 'AjoutOrdrePaiement' })
            },
            ajouterOpAnnulation(){
                this.$router.push({ name: 'AjouterOrdrePaiementAnnulation' })
            },
            ajouterOpDeffinitif(){
                this.$router.push({ name: 'AjouterOrdrePaiementDefinitive' })
            },
    //afiicher modal ajouter
    afficherModalAjouterTitre() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterTypeTexteLocal() {
      this.ajouterTypeTexte(this.formData);

      this.formData = {
        code: "",
        libelle: ""
      };
    },
    // afficher modal de modification
    afficherModalModifierTypeTexte(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

     
      this.editTypeTexte = this.typeTextes[index];
    },
    // fonction pour vider l'input modification
   
    alert() {
      console.log("ok");
    },
    
ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>

<style scoped>

.tailgrand{
  width: 65%;
  margin: 0 -30%;
  height:50%;
}
.tailBtn{
  width: 100%;
}
.modal-body { max-height: 85%; }

</style>
