
<template>
    

<div>
        <div class="container-fluid">
            


            <div class="widget-box">
              
                <div class="widget-content">
                    <div class="widget-content nopadding">
                        <table class="table table-striped table-bordered" v-if="detail_marche">
                            <thead>
                            <tr>
                                <th>Exercice Budgétaire</th>
                                <th>Procedure de passation</th>
                                <th>Objet marché</th>
                                <th>Référence marché</th>
                                <th>Montant prévu marché</th>
                                <th>Montant Budgétaire</th>
                                <th>Type de marché</th>
                                <th>Unité administrative</th>
                                <th>Statut</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-if="detail_marche">
                                
                                 <td class="taskOptions">
                                    {{detail_marche.exo_id}}
                                </td>
                                <td class="taskDesc" style="text-align:center">{{afficherCodeTypeProcedure(detail_marche.procedure_passation_id)}}</td>
                                <td class="taskDesc">{{detail_marche.objet}}</td>
                                <td class="taskStatus">{{detail_marche.reference_marche}}</td>
                                <td class="taskOptions">
                                    {{formatageSomme(parseFloat(detail_marche.montant_marche))}}
                                </td>
                                 <td class="taskOptions">
                                    {{formatageSomme(parseFloat(budgetDisponible))}}
                                </td>
                                <td class="taskOptions">
                                    {{afficherLibelleTypeMarche(detail_marche.type_marche_id)}}
                                </td>
                                <td class="taskOptions">
                                    {{afficherLibelleUa(detail_marche.unite_administrative_id)}}
                                </td>
                                  <td>

                         <span v-if="detail_marche.economique_id == CodeExempte(detail_marche.economique_id) ">Exemptée procedure</span>
                         <span v-else>Ligne à marché</span>
                       </td>
                               <!-- <td>{{budgetDisponible}}</td> -->
                            </tr>
                            </tbody>
                        </table>             

                    </div>
                </div>
            </div> 
       

        <div class="row-fluid">
                <div class="span12">
                     
                    <div class="widget-box">
             <div class="widget-title">
                            <ul class="nav nav-tabs">
                                 <li class="active"><a data-toggle="tab" href="#tab4569">l'offre</a></li>
                                 <li class=""><a data-toggle="tab" href="#lot2">Lot</a></li>
                              <li class=""><a data-toggle="tab" href="#tab28">D.ANO Bailleur</a></li>

                                <li class=""><a data-toggle="tab" href="#tab10">Attribution</a></li>
                                <li class=""><a data-toggle="tab" href="#tab00214">Bailleur</a></li>
                                <li class=""><a data-toggle="tab" href="#tab2025">ANRMP</a></li>
                               
                              
                                
                                
                            </ul>
                        </div>
        
            <div class="widget-content tab-content">
        <div id="tab4569" class="tab-pane active ">
                                <div class="span4"></div>
                                <div class="span4"></div>
                                <div class="span4" align="right">
                                    <a href="#ajouterOffre" data-toggle="modal" class="btn btn-success" align="rigth">Ajouter</a></div>


                      <publication-Offre :macheid="detail_marche.id"></publication-Offre>
                         </div>

                          <div id="lot2" class="tab-pane">
                             <lot-marche :macheid="detail_marche.id"></lot-marche>
                           </div>

                         <div id="tab28" class="tab-pane">


                    <AnoBailleur1 :macheid="detail_marche.id"></AnoBailleur1>
              
<!--                 <componentAvisBailleurCf :macheid="detail_marche.id"> </componentAvisBailleurCf>-->

                </div>

                           <div id="tab10" class="tab-pane">
                    <ActEffeFinanciere :macheid="detail_marche.id"></ActEffeFinanciere>
<!--                <component-acte :macheid="detail_marche.id"></componentActe>-->

                </div>
                


                         <div id="tab00214" class="tab-pane">
                <div align="right">
             <div class="widget-content">
                 <a href="#addBailleurMarche" data-toggle="modal" class="btn btn-success">Ajouter</a>
                    </div>
                </div>
                <componentBailleur :macheid="detail_marche.id"></componentBailleur>
                </div>

                <div id="tab2025" class="tab-pane">
                <!-- <div align="right">
                    <div class="widget-content">
                        <a href="#addBailleurMarche" data-toggle="modal" class="btn btn-success">Ajouter</a>
                    </div>


                </div> -->
                <Arnmp :macheid="detail_marche.id"></Arnmp>

                </div>
            </div>
                    </div>
                </div>
             </div>
           
              <!-- <div class="modal-footer">
        
        <a data-dismiss="modal" class="btn btn-danger" @click.prevent="retourListeEntreprise" href="#">Voir Tableau Marché</a>
       
      </div> -->
        </div>
          

</div>


</template>

<script>
 import publicationOffre from '../../../pages/bien_service/DossierPso/publicationOffre/publicationOffre';
//import Offre from "../../../pages/bien_service/DossierProcedureGreAGre_Convention/Offre"
import componentBailleur from '../../../pages/bien_service/dossierDetailMarchePs/dossierBailleur/componentBailleur';
  import Arnmp from '../../../pages/bien_service/dossierArnmp/Arnmp';   
  import LotMarche from "../../../pages/bien_service/component/LotMarche";
  import AnoBailleur1 from "../../../pages/bien_service/component/AnoBailleur/AnoBailleur1";
   import ActEffeFinanciere from "../../../pages/bien_service/component/ActEffetFinancier/ActEffeFinanciere";
   //import executionLigneExempte from '../../../pages/bien_service/executionLigneExempte/executionLigneExempte';
    import { mapGetters, mapActions } from "vuex";
    //import moment from 'moment';
    
   
   
    import 'vue-search-select/dist/VueSearchSelect.css'
import { formatageSomme } from "../../../../src/Repositories/Repository";
 
    export default {
       
        components:{
             componentBailleur,
             ActEffeFinanciere,
            // executionLigneExempte,
            publicationOffre,
            //Offre,
            Arnmp,
            LotMarche,
            AnoBailleur1
       
         



        },
        data() {
            return {
                fabActions: [
                    {
                        name: "cache",
                        icon: "add"
                    }

                ],
                    
              marcheid:""
            };
        },
created() {
            this.marcheid=this.$route.params.id
   this.detail_marche = this.getPersonnaliserMarchehorSib.find(
       idmarche => idmarche.id == this.$route.params.id
   )
   console.log(this.detail_marche);
   console.log("bonnn")
   
 
},
mounted(){
  console.log("silvato")
   console.log(this.AffichageMarche.parent_id)
},
        computed: {

            ...mapGetters("bienService", ["getterCojos","mandate","getMandatPersonnaliserVise", "procedurePassations","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres",
               "getterDossierCandidats","marches","gettersOuverturePersonnaliser","getterAnalyseDossiers",
               "getActeEffetFinancierPersonnaliser","gettersCotationPersonnaliser","typeMarches","getterAnoDMPBailleur"
               
               
              ]),
 ...mapGetters("horSib", ["gettersMarcheHorsib","getPersonnaliserMarchehorSib"]),
               
              ...mapGetters('parametreGenerauxBudgetaire', ['structures_budgetaires', 
  'plans_budgetaires']),
            ...mapGetters('personnelUA', ['acteur_depenses']),


                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises']),
            ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
                'types_financements']) ,
                
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
           
            ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetGeneral",
      "getPersonnaliseBudgetGeneral",
      "afficheTransfertValider",
      "afficheBudgetActive",
      "getterligneExempter",
       "budgetEclate"
      // "chapitres",
      // "sections"
    ]),
     CodeExempte() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getterligneExempter.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.economique_id;
      }
      return 0
        }
      };
    },
afficheLeNomDesProcedure(){
    if( this.budgetDisponible < 10000000){
        return "Procédure Simplifiée de demande de Cotation(PSC Sans comité)"
    }
    else if(this.budgetDisponible < 30000000)
    {
return "Procédure Simplifiée de demande de Cotation(PSC Avec comité)"
    }
    else if(this.budgetDisponible < 60000000 )
    {
return "Procédure Simplifiée à compétition Limitée(PSL)"
    }
    else if(this.budgetDisponible < 100000000 )
    {
return "Procédure Simplifiée à compétition Ouverte(PSO)"
    }
     else if(100000000 < this.budgetDisponible)
    {
return "Appel d'Offre Ouvert(AON ou AOI)"
    }
    

  return null  


},

AffichageMarche(){
  return this.marches.find(itm =>itm.parent_id)
},

listeAvisAnoBailleur(){
       return id =>{
           if(id!=null && id!=""){
               const resultatAvis = this.getterAnoDMPBailleur.find(idDemande =>idDemande.marche_id==id
               && idDemande.avis_bail== 0)
               return resultatAvis
           }
           return null
       }
   },


// activationButtonJugement(){
//     return id =>{
//         if(id!=null && id!=""){
//             let objet = this.getterDossierCandidats.find(item =>item.marche_id==id && item.numero_dossier==null)
//             return objet  
//         }
//         return null
//     }
    
// },

// activedButtonActeEffet(){
//      return id =>{
//         if(id!=null && id!=""){
//             let objet = this.getterAnalyseDossiers.find(item =>item.marche_id==id && item.dossier_candidat_id==null)
//             return objet  
//         }
//         return null
//     }
// },
afficherLibelleTypeMarche(){
 return id =>{
     if(id!=null && id!=""){
       let response = this.typeMarches.find(item => item.id==id)
       if(response){
         return response.libelle
       }
     }
   }
 },

 afficherLibelleUa(){
   return id =>{
     if(id!=null && id!=""){
       let response = this.uniteAdministratives.find(item => item.id==id)
       if(response){
         return response.libelle
       }
     }
   }
 },


  afficherCodeTypeProcedure() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.procedurePassations.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code;
      }
      return 0
        }
      };
    },



 


        afficherLibelleTypeProcedure() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.procedurePassations.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
     afficherLaDotationIntial() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.budgetEclate.find(qtreel => qtreel.ligneeconomique_id == id);

      if (qtereel) {
        return qtereel.dotation;
      }
      return 0
        }
      };
    },

MontantTotal(){
  
    
    var montant = this.groupe.ua_budget_general.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0).toFixed(0); 
      if(isNaN(montant)) return null
      return montant
}, 
budgetConsommerBienService(){
  return id => {
    if(id !=""){
    return this.getMandatPersonnaliserVise.filter(element => element.economique_id == this.detail_marche.economique_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_general), 0).toFixed(0); 
      
    }
    
  }
},
budgetConsommerTransfert(){
  return id => {
    if(id !=""){
    return this.afficheTransfertValider.filter(element => element.ligne_budgetaire_id == this.detail_marche.economique_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_total_contrat), 0).toFixed(0); 
      
    }
    
  }
},
// budgetConsommerDesModule() {
//       const val = parseInt(this.budgetConsommerBienService(this.detail_marche.economique_id)) + parseInt(this.budgetConsommerTransfert(this.detail_marche.economique_id));
      
//        if (val) {
//         return parseInt(val).toFixed(0);
//       }
      
//       return 0
//     },

// budgetDisponible() {
//       const val = parseInt(this.afficherLaDotationIntial(this.detail_marche.economique_id)) ;
      
//        if (val) {
//         return parseInt(val).toFixed(0);
//       }
      
//       return 0
//     },


budgetConsommerDesModule() {
      const val = parseInt(this.budgetConsommerBienService(this.detail_marche.economique_id)) + parseInt(this.budgetConsommerTransfert(this.detail_marche.economique_id));
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },

budgetDisponible() {
  if(this.detail_marche.sib==1){
 const val = parseFloat(this.afficherLaDotationIntial(this.detail_marche.economique_id)) - parseFloat(this.budgetConsommerDesModule) ;
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
  }
  else{
const val = parseFloat(this.afficherLaDotationIntial1(this.detail_marche.economique_id)) - parseFloat(this.budgetConsommerDesModule);
      
       if (val) {
        return parseFloat(val).toFixed(0);
      }
      
      return 0
  }
      
    },

 afficherLaDotationIntial1() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.afficheBudgetActive.find(qtreel => qtreel.economique_id == id);

      if (qtereel) {
        return qtereel.Dotation_Initiale;
      }
      return 0
        }
      };
    },



        },
        
        methods: {
            ...mapActions("bienService", ['ajouterCotation' , 'modifierCotation','supprimerCotation']),
            ...mapActions('gestionMarche', ['getEntreprise',"ajouterEntreprise","supprimerEntreprise","modifierEntreprise","ajouterSanction"]),
            // 
          
isFormulaireDossierCand(){
                this.isFormulaireDossierCandidature=true
                this.isButtunAddDossierCandidat=false
                this.isDetailDossierCandidature=false
            },

formatageSomme:formatageSomme,



                 marcheDetail(){
                return  marche_id=>{
                    if (marche_id!="") {
                        const vM=this;
                       // console.log("Marche detail")
                        let Objet=this.marches.find(idmarche => idmarche.id == marche_id)
                        if(Objet!=undefined){
                           vM.formData.type_appel=Objet.procedure_passation.type_procedure.libelle;
                            vM.formData.imputation=Objet.imputation;
                            vM.formDossierCadidature.procedure_passation_id=Objet.procedure_passation.id;
                            vM.formDemande.ref_marche=Objet.reference_marche
                        }
                        return  this.marches.find(idmarche => idmarche.id == marche_id
                        )
                    }
                }

            },

    //            ajouterEtatLocal(){
    //      this.ajouterEtatProcedure(this.formEtat)
    //      this.formEtat={
    //          date_realisation:"",
    //          libelle_etat:"reception de la cotation"
    //      }
    //  },

              retourListeEntreprise(){
                 this.$router.push({ name: 'marche' })
            },
           
           
      
        }
    };
</script>
