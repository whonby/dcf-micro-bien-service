
<template>

<div>
    
 <div id="AfficheModalValidation" class="modal hide valDirecteur">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Decision Du directeur</h3>
      </div>
      <div class="modal-body">
        <table class="table table-bordered table-striped">
          <tr>
            <td>
                 <div class="control-group">
                            <label class="control-label">Décision Directeur</label>
                            <div class="controls">
                              <select v-model="serviceValiderDirecteur.motif_directeur_sce" class="span12">
                                        <option value=""></option>
                                      <option value="1">Visé</option>
                                    <option value="2">Différé</option>
                                    <option value="3">Réjeté</option>
                                    <option value="0">Attente</option>
                            
    
                             </select>
                              {{affichierQuantiteEnStock(this.serviceValiderDirecteur.article_id)}}
                           <!-- {{afficherResteStock}}
                           {{affichierQuantiteEnStock(serviceValiderDirecteur.article_id)}}
                           {{affichierIdQuantiteEnStock(serviceValiderDirecteur.article_id)}} -->
                            </div>
                          </div>
            </td>
          </tr>
          <tr>
            <td>
               <div class="control-group">
                            <label class="control-label">Cause</label>
                            <div class="controls">
                              <textarea name="" id="" cols="30" rows="2" class="span12" :readonly="verrouilleCause" v-model="serviceValiderDirecteur.cause_directeur_sce"></textarea>
                              
                               <!-- <input type="hidden" class="span"  :value="recuperer"/> -->
                            </div>
                          </div>
                          
            </td>
          </tr>
         <tr>
           <td>
             
                           <div class="control-group">
                            <label class="control-label">Date Decision :</label>
                            <div class="controls">
                              <input type="date" class="span12"  v-model="serviceValiderDirecteur.date_directeur_sce"/>
                            
                            </div>
                          </div>
           </td>
         </tr>
                               <!-- <div class="control-group">
                            <label class="control-label">Nom Emetteur :</label>
                            <div class="controls">
                              <input type="text" class="span"  v-model="editMandat.nom_emetteur"/>
                              <input type="hidden" class="span"  :value="recuperer"/> 
                            </div>
                          </div> -->
         
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierDecisionDirecteur(serviceValiderDirecteur)"
          class="btn btn-primary"
          href="#"
         
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
<div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                        <li class="active">
                        <a data-toggle="tab" href="#tab00001">Listes des Demande service    <span class="badge badge-info">{{nombreDemande}}</span></a>
                      </li>
                    
                       <li class="">
                        <a data-toggle="tab" href="#tab00007">Validation Directeur  <span class="badge badge-important">{{nombreValidationEnAttenteDirecteur}}</span></a>
                      </li>
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">

                    <div id="tab00007" class="tab-pane">
                <table class="table table-bordered table-striped">
                 <thead>
                  <tr>
                
                   
                    <th>Unite d'administrative</th>
                    <th>Service</th>
                    <th>Article</th>
                    <th>Quantite</th>
                    <th>Cause inactivite</th>
                    <th>Cause de la demande</th>
                    <th >Date demande</th>
                     <!-- <th>duré vie</th> -->
                    
                     <th>Date motif Directeur</th>
                     <!-- <th >Duré traitement Directeur</th> -->
                      <th>Décision Directeur</th>
                     
                  </tr>
                </thead>
                <tbody>
                  
                  <tr
                    class="odd gradeX"
                    v-for="(BesoinImmo,index) in validationDemandeDuServiceParDirecteur"
                    :key="BesoinImmo.id"
                  >
   
                    
                  
                    <td @click.prevent="modatValidationDemandeService(index)"
                      style=" color:black;font-size:14px;font-weight:bold;"
                    >{{afficherUniteAdministrative(BesoinImmo.uniteadmin_id) || 'Non renseigné'}}</td> 
                    
                                    
                      <td 
                      style=" color:black;font-size:14px;font-weight:bold;"
                    >{{affichierService(BesoinImmo.service_id) || 'Non renseigné'}}</td>
                      <td style=" color:black;font-size:14px;font-weight:bold;"
                      
                    >{{afficheFamille(BesoinImmo.article_id) || 0}}</td>
                    <td style=" text-align: center; color:black;font-size:14px;font-weight:bold;"
                     
                    >{{BesoinImmo.quantite || 0}}</td>
                   
                     <td 
                      style=" color:black;font-size:14px;font-weight:bold;"
                    >{{(afficheCauseInactivite(BesoinImmo.cause_inactivite)) || 'Non renseigné'}}</td>
                   
                      <td
                      style=" color:black;font-size:14px;font-weight:bold;"
                    >{{BesoinImmo.cause_directeur_sce || 'Non renseigné'}}</td> 
                     <td
                      style="text-align: center; color:red;font-size:14px;font-weight:bold;"
                    >{{formaterDate(BesoinImmo.date_demande) || 'Non renseigné'}}</td> 
               
                    
                    

 <td
                      style="text-align: center; color:red;font-size:14px;font-weight:bold;"
                    >{{formaterDate(BesoinImmo.date_directeur_sce) || 'Non renseigné'}}</td>
                    <!-- <td
                      style="text-align: center; color:red;font-size:14px;font-weight:bold;"
                    >{{BesoinImmo.dure_traitement_directeur || 0 }}  Jours</td> -->

<td>
                        <button v-if="BesoinImmo.motif_directeur_sce == 1"  class="btn  btn-success" @click="modatValidationDemandeService(index)" >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="BesoinImmo.motif_directeur_sce == 2" class="btn  btn-warning" @click="modatValidationDemandeService(index)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="BesoinImmo.motif_directeur_sce ==3" class="btn  btn-danger"  @click="modatValidationDemandeService(index)">                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button  class="btn  btn-info" @click="modatValidationDemandeService(index)" v-else-if="BesoinImmo.motif_directeur_sce == 0" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                    
                      </button>
                    </td>
                    <td >
  <span v-if="BesoinImmo.motif_directeur_sce == 1">
  
<button @click.prevent="AjouterAffectationDemande(index)"  class="btn btn-success">
                <span class=""><i class=" icon-hand-right" title="Affectation Equipement"></i></span></button> 

  </span>
  <span v-else style="color:red;text-align:center">Affectation Desactivé</span>
</td>
                   
                  </tr>
                 
                 
                 
                 
                </tbody>
              </table>
                  </div>


                   <div id="tab00001" class="tab-pane active">
                     <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                
                   
                    <th>Unite d'administrative</th>
                    <th>Service</th>
                    <th>Article</th>
                    <th>Quantite</th>
                    <th>Cause inactivite</th>
                    <th>Cause de la demande</th>
                    <th >Date demande</th>
                     <!-- <th>duré vie</th> -->
                    
                     <th>Date motif Directeur</th>
                     <!-- <th >Duré traitement Directeur</th> -->
                      <th>Décision Directeur</th>
                     <th>Attribuer</th>
                  </tr>
                </thead>
                <tbody>
                  
                 
                 <tr
                    class="odd gradeX"
                    v-for="BesoinImmo in afficheToutDemande"
                    :key="BesoinImmo.id"
                  >
   
                    
                
                    <td
                      style=" color:black;font-size:14px;font-weight:bold;"
                    >{{afficherUniteAdministrative(BesoinImmo.uniteadmin_id) || 'Non renseigné'}}</td> 
                    
                                    
                      <td 
                      style=" color:black;font-size:14px;font-weight:bold;"
                    >{{affichierService(BesoinImmo.service_id) || 'Non renseigné'}}</td>
                      <td style=" color:black;font-size:14px;font-weight:bold;"
                      
                    >{{afficheFamille(BesoinImmo.article_id) || 0}}</td>
                    <td style=" text-align: center; color:black;font-size:14px;font-weight:bold;"
                     
                    >{{BesoinImmo.quantite || 0}}</td>
                   
                     <td 
                      style=" color:black;font-size:14px;font-weight:bold;"
                    >{{(afficheCauseInactivite(BesoinImmo.cause_inactivite)) || 'Non renseigné'}}</td>
                   
                      <td
                      style=" color:black;font-size:14px;font-weight:bold;"
                    >{{BesoinImmo.cause_directeur_sce || 'Non renseigné'}}</td> 
                     <td
                      style="text-align: center; color:red;font-size:14px;font-weight:bold;"
                    >{{formaterDate(BesoinImmo.date_demande) || 'Non renseigné'}}</td> 
               
                    
                    

 <td
                      style="text-align: center; color:red;font-size:14px;font-weight:bold;"
                    >{{formaterDate(BesoinImmo.date_directeur_sce) || 'Non renseigné'}}</td>
                    <!-- <td
                      style="text-align: center; color:red;font-size:14px;font-weight:bold;"
                    >{{BesoinImmo.dure_traitement_directeur || 0 }}  Jours</td> -->

<td>
                        <button v-if="BesoinImmo.motif_directeur_sce == 10"  class="btn  btn-success"  >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="BesoinImmo.motif_directeur_sce == 4" class="btn  btn-warning"  >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="BesoinImmo.motif_directeur_sce == 5" class="btn  btn-danger"  >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info"  >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                    
                      </button>
                    </td>
                    
                    <td>
                       <button v-if="BesoinImmo.motif_directeur_sce == 10" class="btn  btn-success" >                        
                     
                      
                       <span  >Oui</span>
                      
                    
                    
                      </button>  
                      <button v-else class="btn  btn-danger" >                        
                     
                      
                       <span  >Non</span>
                      
                    
                    
                      </button>  
               
               
                    </td>
                  </tr>
                 
                 
                </tbody>
              </table>
                   </div>

                  </div>
                  <br />
              
                </div>
              </table>
            </div>  
       
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import { formatageSomme } from '../../../../../src/Repositories/Repository';
import {admin,dcf} from "../../../../../src/Repositories/Auth"
import moment from 'moment';
export default {
    data(){
        return{
      formData :{
s_ua_id:"",
serviceua_id:"",

      },
       formData2:{
        famillearticle_id :"",
        qte_affecte:"",
        date_mise_service:"",
        identification:"",
        type_immo:"",
        nature_dentree:"",
        nature_bien:"",
        etat_immobilisation:"",
        cause_inactivite:"",

      },
  
         serviceValiderDirecteur:{
        article_id:"",
motif_directeur_sce:"",
date_directeur_sce:"",
cause_directeur_sce:"",
service_id:""
      },
search:""
        }
    },
    props:["macheid"],
    created(){},

       computed: {
admin:admin,
      dcf:dcf,
     ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
            ...mapGetters("bienService", [ "gettersCotations","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
                "modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
            ...mapGetters('personnelUA', ['acteur_depenses']),


                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises','banques','comptes','getCompte']),
            ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements',
                'types_financements']) ,
                
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
       ...mapGetters('parametreGenerauxFonctionnelle', ['structureActe', 
  'planActe']),
 ...mapGetters("uniteadministrative", [
      "directions",
      "servicesua",
      "fonctionsua",
      "getPersonnaliseBudgetGeneral",
      "montantBudgetGeneral",
      "uniteZones",
      "getPersonnaliseBudgetGeneralParTransfert",
      "uniteAdministratives"
      // "chapitres",
      // "sections"
    ]),
   ...mapGetters("SuiviImmobilisation", ["services",
    "trieUaImmobilisation",
      "equipements",
      "familles",
      "articles",
      "SommeQuantiteNonCouvert",
      "getAfficheArticle",
      "getPersoStock",
      "stockageArticles",
      "groupUatypeNorme",
      "groupUaNorme",
      "groupUaNormeFamille",
      "normeEquipements",
      "groupUaNormeEquipe",
      "groupUaNormeFonction",
      "getPersoNormeArticle",
      "services",
      "besoinEquipement",
      "afficherDirection",
      "afficherService",
      "afficherFonction",
      "type_Unite_admins",
      "getPersoListeDesNorme",
      "normeImmo",
      "getPersonnaliseNormeEquipement",
      "afficherDemandeParService",
      "natureEntres",
      "EtatImmobilisations",
      "causeInactivite",
      "immobilisations",
      "afficheRegroupeEquipementCouvert",
      "demandeMateriel"
   
   ]),

   afficheToutDemande() {
      


        if (!this.admin || !this.dcf){
            let colect=[];
            this.demandeMateriel.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.s_ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
                  item.fonction_id == 0
            })
          
          
        }

       return 0

    },

    validationDemandeDuServiceParDirecteur() {
      


        if (!this.admin || !this.dcf){
            let colect=[];
            this.demandeMateriel.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.s_ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
                  item.fonction_id == 0 && item.motif_directeur_sce != 10
            })
          
          
        }

       return 0

    },
  




   nombreDemande() {
      


        if (!this.admin || !this.dcf){
            let colect=[];
            this.demandeMateriel.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.s_ua_id)
               
               if (val!=undefined){
                    colect.push(item)
                    return item
                }
                  
            })
          
          return colect.filter(items=> items.fonction_id == 0).length;
        }

       return this.demandeMateriel.filter(items=> items.fonction_id == 0).length

    },

    nombreValidationEnAttenteDirecteur() {
      


        if (!this.admin || !this.dcf){
            let colect=[];
            this.demandeMateriel.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.s_ua_id)
               
               if (val!=undefined){
                    colect.push(item)
                    return item
                }
                  
            })
          
          return colect.filter(items=>items.fonction_id == 0 && items.motif_directeur_sce != 10).length;
        }

       return this.demandeMateriel.filter(items=>items.fonction_id == 0 && items.motif_directeur_sce != 10).length;

    },
    //   filtreServiceUniteAdministrative() {
    //   const st = this.search.toLowerCase();
    //   return this.servicesua.filter(type => {
    //     return (
         
    //       type.afficherLibelleService(this.libelle).toLowerCase().includes(st)
    //     );
    //   });
    // },
    verrouilleCause(){

    return this.serviceValiderDirecteur.motif_directeur_sce == 1;
},
    afficheCauseInactivite() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.causeInactivite.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
afficheFamille() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.familles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
affichierService() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.services.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },





// validationDemandeDuServiceParDirecteur() {
      
//           return this.demandeMateriel.filter(element => element.fonction_id == 0 && element.motif_directeur_sce != 10);
       
//     },
// afficheToutDemande() {
      
//           return this.demandeMateriel.filter(element => element.fonction_id == 0 );
       
//     },

//     nombreDemande() {
      
//           return this.afficheToutDemande.length;
       
//     },
// nombreValidationEnAttenteDirecteur() {
      
//           return this.validationDemandeDuServiceParDirecteur.length;
       
//     },





       ServiceEquipe (){
return this.servicesua.filter(element => element.normeequipement == 0)
},


afficherUniteAdministrative() {
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
afficherLibelleService() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.services.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    
afficherResteStock() {
      const val = this.affichierQuantiteEnStock(this.serviceValiderDirecteur.article_id) - this.serviceValiderDirecteur.quantite;
      return parseFloat(val).toFixed(0);
    },

affichierQuantiteEnStock() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.stockageArticles.find(qtreel => qtreel.famill_id == id);

      if (qtereel) {
        return qtereel.quantitestock;
      }
      return 0
        }
      };
    },
affichierIdQuantiteEnStock() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.stockageArticles.find(qtreel => qtreel.famill_id == id);

      if (qtereel) {
        return qtereel.id;
      }
      return 0
        }
      };
    },
    afficherActeurDepenseMatricule() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.all_acteur_depense.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.matricule;
      }
      return 0
        }
      };
    },
    afficheValeurOrigine() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.immobilisations.find(qtreel => qtreel.famillearticle_id == id);

      if (qtereel) {
        return qtereel.valeurorigine;
      }
      return 0
        }
      };
    },
    afficheAnneeAmortis() {
      const val = parseInt(this.serviceValiderDirecteur.annee_budgetaire) + parseInt(this.serviceValiderDirecteur.dure_vie);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },
      },

      methods:{ 

          ...mapActions('bienService',['supprimerActeEffetFinancier',
          'ajouterActeEffetFinancier','modifierActeEffetFinancier', 'modifierMarche']),
 ...mapActions("uniteadministrative", [
     "getAllServiceua",
      "ajouterService",
      "modifierService",
      "supprimerService",
     
      // "ajouterHistoriqueBudgetGeneral"
    ]),
...mapActions("SuiviImmobilisation", [
       "ajouterImmobilisation",
       "modifierImmobilisation",
       "modifierStock",
       "ajouterHistotorisqueAffectionService",
       "modifierDemandeMateriel"
      
     
    ]),

modifierDecisionDirecteur(){

var objetDirecteur = {
  ...this.serviceValiderDirecteur,
  motif_directeur:this.serviceValiderDirecteur.motif_directeur,
  
 
}
this.modifierDemandeMateriel(objetDirecteur)
this.$("#AfficheModalValidation").modal('hide');
},

AjouterAffectationDemande(index){
if(this.affichierQuantiteEnStock(this.serviceValiderDirecteur.article_id) < this.serviceValiderDirecteur.quantite)
{
  alert("Stock en Rupture")
}
else if ( confirm( "Voulez-vous attribuer l'equipement?") ) {
    this.serviceValiderDirecteur = this.validationDemandeDuServiceParDirecteur[index];
  
   var nouveauObjetDemande = {
        ...this.serviceValiderDirecteur,
 service_id:this.serviceValiderDirecteur.service_id,
 ua_id:this.serviceValiderDirecteur.uniteadmin_id,
unitezone_id:this.serviceValiderDirecteur.uniteZone_id,
 fonction_id:this.serviceValiderDirecteur.fonction_id,
 article_id:this.serviceValiderDirecteur.article_id,
 qte:this.serviceValiderDirecteur.quantite,
 dure_vie:this.serviceValiderDirecteur.dure_vie,
 
 matricule_auteur:this.afficherActeurDepenseMatricule(this.serviceValiderDirecteur.acteur_id),
 annee:this.serviceValiderDirecteur.annee_budgetaire,
annee_amortissement:this.afficheAnneeAmortis,
valeurorigine:this.afficheValeurOrigine(this.serviceValiderDirecteur.article_id),
 date_mise_service:this.serviceValiderDirecteur.date_directeur_sce,
 
};
   
      let dmdObjet = this.demandeMateriel.find(marche=>marche.id==this.serviceValiderDirecteur.id)
         dmdObjet.motif_directeur_sce = 10
           let stockObjet = this.stockageArticles.find(marche=>marche.id==this.affichierIdQuantiteEnStock(this.serviceValiderDirecteur.article_id))
         stockObjet.quantitestock = this.afficherResteStock

this.ajouterHistotorisqueAffectionService(nouveauObjetDemande);
this.modifierDemandeMateriel(dmdObjet)
this.modifierStock(stockObjet)
} else {
    // Code à éxécuter si l'utilisateur clique sur "Annuler" 
}





},







    modatValidationDemandeService(index) {
      this.$("#AfficheModalValidation").modal({
        backdrop: "static",
        keyboard: false
      })
      this.serviceValiderDirecteur = this.validationDemandeDuServiceParDirecteur[index];
      
      },


formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    formatageSomme: formatageSomme,

//  formaterDate(date) {
//               return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
//             },
      }
}
</script>

<style scoped>
.grdirModalActeEffet{
     width: 1200px;
 margin: 0 -530px;
 height: 550px;

}
.tailgrand{
  width: 77%;
  margin: 0 -38%;
}
</style>