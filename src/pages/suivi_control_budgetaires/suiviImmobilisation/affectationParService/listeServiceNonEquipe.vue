
<template>

<div>

                
               
                 <!-- <div align="right"> -->
                <!-- Search:
                <input type="search" placeholder v-model="search" />
              </div> -->
                <table class="table table-bordered table-striped">
                    <thead>
                    <tr>

                        <th style="width:40%">Unité administrative</th>
                        <th style="width:40%">Service</th>
                        <th style="width:10%">Equipé</th>
                        <th style="width:10%">Affectation</th>
                         
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="odd gradeX" v-for=" (affectService,index) in listeDesServiceNonEquipeDeUa"
                        :key="affectService.id">
                        
                              <td >
                            {{afficherUniteAdministrative(affectService.ua_id) || 'Non renseigné'}}</td>
                            <td >
                            {{afficherLibelleService(affectService.serviceua_id) || 'Non renseigné'}}</td>
                             <td style="text-align: center;">
                      
                       
                          
                         
                     <span style="font-weight: 500;" v-if="affectService.normeequipement == 0"  class="btn btn-success" >Oui</span>
                     <span  v-else  class="btn btn-danger" style="font-weight: 500;"> Non</span>
                     
                        
                     
                    </td>
                      <td title="Affectation d'equipement" style="font-weight: 500;">
                        <button class="btn btn-info" @click="fenetreAjouterAffectation(index)">
                        <span>
                          <i class="icon-hand-right"></i>
                        </span>
                      </button>
                     </td>
                    </tr>
                    </tbody>
                </table>

              
     




<!--- fin ajout acte effet financier  -->

<div id="nonEquiper" class="modal hide tailgrand">
<div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Affectation Equipement au service</h5>
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
                        <a data-toggle="tab" href="#tab1">Identification</a>
                      </li>
                       
                      <li>
                        <a data-toggle="tab" href="#tab2">Affectation</a>
                      </li>
                      <!-- <li>
                        <a data-toggle="tab" href="#tab3">Descriptif3</a>
                      </li> -->
                      <!-- <li>
                        <a data-toggle="tab" href="#tab3">Autres Information</a>
                      </li> -->
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
                    <!--ongle identification-->
                    <div id="tab1" class="tab-pane active">
                      <div class="modal-body">
        <table class="table table-bordered table-striped">
            <tr>
  <td >
                          <label class="control-label">Exercice Budgetaire</label>
                          
                              <input    type="text"  class="span12"   readonly  :value="exerciceBudgetaireEnCours" />                
                             
                        </td>
                        <td colspan="2">
                          <label class="control-label">Unite d'administrative</label>
                          
                              <input    type="text"  class="span12"  readonly  :value="afficherUniteAdministrative(formData.s_ua_id)" />                              
                             
                        </td>
                        <!-- <td>
                          <label class="control-label">Unite de Zone</label>
                          
                              <input    type="text"   class="span4" readonly  :value="afficheUniteZone(formData.uniteZone_id)" />                
                             
                        </td> -->
                        <td colspan="2">
                          <label class="control-label">Service</label>
                          
                              <input    type="text" class="span12"   readonly  :value="afficherLibelleService(formData.serviceua_id)" />                
                             
                        </td>
                
            </tr>
            <tr>
                <td colspan="">
                          <label class="control-label">Besoin</label>
                          
                              <select  v-model="formData2.famillearticle_id" class="span12" >
                      <option value = ""></option>
                      <option v-for="item in afficheLeBesoinDemande(formData.serviceua_id)" 
                      :key="item.id" :value="item.norme_famille.id">{{item.norme_famille.libelle}}</option>
                    </select>
                            
                       
                        </td>
                        <td colspan="2">
                          <label class="control-label">Quantite en stock</label>
                          
                              <input    type="text" class="span12"   readonly  :value="afficherQuantiteEnStock(formData2.famillearticle_id)" />                
                             
                        </td>
                        <td colspan="2">
                          <label class="control-label">Quantite requise</label>
                          
                              <input    type="text" class="span12"   readonly  :value="afficherQuantiteEnRequise(formData2.famillearticle_id)" />                
                             
                        </td>
                        
            </tr>
            <tr>
                        
                          <td>
                          <label class="control-label">Quantite affecté</label>
                          
                              <input    type="text"   class="span12"  :max="afficherQuantiteEnRequise(formData2.famillearticle_id)" v-model="formData2.qte_affecte" />                
                             
                        </td>
                        <td colspan="2">
                          <label class="control-label">Prix unitaire</label>
                          
                              <input    type="text"   class="span12" readonly  :value="coutMonenArticle" />                
                             
                                              
                        </td>
                        <td colspan="2">
                          <label class="control-label">Valeur d'origine</label>
                          
                             <input    type="text"   class="span12" readonly  :value="afficherValeurOrigine" />                
                             
                             
                        </td>
                        
                        
                      </tr>
            </table>
          </div>
          
                    </div>
                    <!--ongle descriptif-->
                    <div id="tab2" class="tab-pane">
                          <div class="modal-body">
        <table class="table table-bordered table-striped">
                       <tr>
                        <td >
                          <label class="control-label">Date mise en service</label>
                          
                              <input    type="date"   class="span12"   v-model="formData2.date_mise_service" />                
                             
                        </td>
                          <td colspan="2">
                          <label class="control-label">Numero identification</label>
                          
                              <input    type="text"   class="span12"   v-model="formData2.identification" />                
                             
                        </td>
                        <td colspan="2">
                          <label class="control-label">Type Immobilisation</label>
                          
                              <select v-model="formData2.type_immo" class="span12">
                                <option value=""></option>
                              
    <option value="1">Corporelle</option>
    <option value="0">Incorporelle</option>
                              </select>
                                              
                        </td>
                     
                        
                        
                      </tr>
                      <tr>
                             <td>
                          <label class="control-label">Nature d'Entree</label>
                          
                            <select v-model="formData2.nature_dentree" class="span12">
                              <option value=""></option>
    <option v-for="item in natureEntres" :key="item.id" :value="item.id">{{item.libelle}}</option>
                              </select>
                             
                        </td>
                          <td colspan="2">
                          <label class="control-label">Nature du Bien</label>
                          
                              <input    type="text"   class="span12"   v-model="formData2.nature_bien" />                
                             
                        </td>
                          <td colspan="2">
                          <label class="control-label">Etat Immobilisation</label>
                          
                             <select v-model="formData2.etat_immobilisation" class="span12">
                              <option value=""></option>
    <option v-for="item in EtatImmobilisations" :key="item.id" :value="item.id">{{item.libelle}}</option>
                              </select>
                        </td>
                      </tr>
                      <tr>
                          <td>
                          <label class="control-label">Duree de vie</label>
                          
                             <input    type="text"   class="span12" readonly  :value="afficherDureeVieFamille(formData2.famillearticle_id)" />                
                             
                             
                        </td>  
                         <td>
                          <label class="control-label">Année Amortissement</label>
                          
                             <input
                                type="text"
                                class="span12"
                               readonly
                              :value="anneeAmortissement"
                              />
                        </td>
                      </tr>
        </table>
                    </div>
                     <!-- <div id="tab3" class="tab-pane">
                      

                    </div> -->
                    <!--ongle 3 -->
                    <!-- <div id="tab3" class="tab-pane">
                    
                      
                    </div> -->
                    </div>
                  </div>
                  <br />
                  <div align="right">
                    <div class="controls">
                      <div data-toggle="buttons-checkbox" class="btn-group">
                        <a
                          class="btn btn-primary"
                          @click.prevent="ajouterImmobilisationLocal(formData2)"
                        >Valider</a>
                        <a
                          data-dismiss="modal" class="btn" href="#"
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
</div>
  






    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import { formatageSomme } from '../../../../../src/Repositories/Repository';
import {admin,dcf,noDCfNoAdmin} from "../../../../../src/Repositories/Auth"
//import moment from 'moment';
export default {
    data(){
        return{
      formData :{
ua_id:"",
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
search:""
        }
    },
    props:["macheid"],
    created(){},

       computed: {

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
                
    ...mapGetters("parametreGenerauxAdministratif", ["getterplanOrganisationUa","exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections"]),
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
    admin:admin,
      dcf:dcf,
      noDCfNoAdmin:noDCfNoAdmin,
     ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
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
    //   filtreServiceUniteAdministrative() {
    //   const st = this.search.toLowerCase();
    //   return this.servicesua.filter(type => {
    //     return (
         
    //       type.afficherLibelleService(this.libelle).toLowerCase().includes(st)
    //     );
    //   });
    // },
    
listeDesServiceNonEquipeDeUa() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.getterplanOrganisationUa.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
          return colect.filter(element => element.normeequipement != 0 && element.serviceua_id != null)
        }

       return this.getterplanOrganisationUa.filter(element => element.normeequipement != 0 && element.serviceua_id != null)

    },
        afficherQuantiteSortir() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.stockageArticles.find(qtreel => qtreel.famill_id == id);

      if (qtereel) {
        return qtereel.qtesortie;
      }
      return 0
        }
      };
    },
    afficherQuantiteEnRequise() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.normeImmo.find(qtreel => qtreel.famille_id == id);

      if (qtereel) {
        return qtereel.norme;
      }
      return 0
        }
      };
    },
    afficherQuantiteEnStock() {
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
    afficheLeBesoinDemande() {
      
      return id => {
        if (id != null && id != "") {
          return this.normeImmo.filter(element => element.service_id == id);
        }
      };
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


afficheServiceNonEquipe(){
return this.servicesua.filter(element => element.normeequipement != 0)
},
      
      exerciceBudgetaireEnCours() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },

    
afficherRecupererQteActuelle() {
      const qtereel = this.immobilisations.find(
        qtreel => qtreel.famillearticle_id == this.formData2.famillearticle_id,
       
      );

      if (qtereel) {
        return qtereel.qte_actuel;
      }
      return 0
    },
totalNonCouvert(){
return this.immobilisations.filter(element=>element.qte_actuel != 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total_actuel), 0).toFixed(0);
},

afficherQteTotal() {
      const val = parseFloat(this.afficherRecupererQteActuelle) + parseFloat(this.formData2.qte_affecte) ;
      return parseFloat(val).toFixed(0);
    },

afficherQteEnStock() {
      const val = parseFloat(this.afficherQuantiteEnStock(this.formData2.famillearticle_id)) - parseFloat(this.formData2.qte_affecte) ;
      return parseFloat(val).toFixed(0);
    },
    afficherQteSortir() {
      const val = parseFloat(this.afficherQuantiteSortir(this.formData2.famillearticle_id)) + parseFloat(this.formData2.qte_affecte) ;
      return parseFloat(val).toFixed(0);
    },
afficherQteResteACouvert() {
      const val = parseFloat(this.afficherQuantiteEnRequise(this.formData2.famillearticle_id)) - parseFloat(this.formData2.qte_affecte) ;
      return parseFloat(val).toFixed(0);
    },
    afficherQteResteACouvertModifier() {
      const val = parseFloat(this.afficherQuantiteEnRequise(this.formData2.famillearticle_id)) - parseFloat(this.afficherQteTotal) ;
      return parseFloat(val).toFixed(0);
    },
    afficherPrixActuelResteACouvertModifier() {
      const val = parseFloat(this.afficherQteResteACouvertModifier) * parseFloat(this.coutMonenArticle) ;
      return parseFloat(val).toFixed(0);
    },
afficherPrixActuelResteACouvert() {
      const val = parseFloat(this.afficherQteResteACouvert) * parseFloat(this.coutMonenArticle) ;
      return parseFloat(val).toFixed(0);
    },

afficherIdImmobilisation() {
      const qtereel = this.immobilisations.find(
        qtreel => qtreel.famillearticle_id == this.formData2.famillearticle_id,
       
      );

      if (qtereel) {
        return qtereel.id;
      }
      return 0
    },

afficherIdStock() {
      const qtereel = this.stockageArticles.find(
        qtreel => qtreel.famill_id == this.formData2.famillearticle_id,
       
      );

      if (qtereel) {
        return qtereel.id;
      }
      return 0
    },
nombreAffecter() {
      const val = parseFloat(this.formData2.qte_affecte) + parseFloat(this.afficherRecupererQteAffecter);
      return parseFloat(val).toFixed(0);
    },
afficherRecupererQteAffecter() {
      const qtereel = this.immobilisations.find(
        qtreel => qtreel.famillearticle_id == this.formData2.famillearticle_id,
       
      );

      if (qtereel) {
        return qtereel.qte_affecte;
      }
      return 0
    },
 afficherAffectationParFonction() {
      const qtereel = this.immobilisations.find(
        qtreel => qtreel.famillearticle_id == this.formData2.famillearticle_id,
       
      );

      if (qtereel) {
        return qtereel.service_id;
      }
      return 0
    },
 afficherAffectationParActeurDepense() {
      const qtereel = this.immobilisations.find(
        qtreel => qtreel.famillearticle_id == this.formData2.famillearticle_id,
       
      );

      if (qtereel) {
        return qtereel.acteurdepense_id;
      }
      return 0
    },

afficherAffectationParQuantiteAffecter() {
      const qtereel = this.immobilisations.find(
        qtreel => qtreel.famillearticle_id == this.formData2.famillearticle_id,
       
      );

      if (qtereel) {
        return qtereel.qte_affecte;
      }
      return 0
    },

afficherAffectationParUniteZone() {
      const qtereel = this.immobilisations.find(
        qtreel => qtreel.famillearticle_id == this.formData2.famillearticle_id,
       
      );

      if (qtereel) {
        return qtereel.uniteadministrative_id;
      }
      return 0
    },

afficherAffectationParService() {
      const qtereel = this.immobilisations.find(
        qtreel => qtreel.famillearticle_id == this.formData2.famillearticle_id,
       
      );

      if (qtereel) {
        return qtereel.service_id;
      }
      return 0
    },
afficherAffectationParBesoin() {
      const qtereel = this.immobilisations.find(
        qtreel => qtreel.famillearticle_id == this.formData2.famillearticle_id,
       
      );

      if (qtereel) {
        return qtereel.famillearticle_id;
      }
      return 0
    },
 idActePersonnel() {
      const qtereel = this.acte_personnels.find(
        qtreel => qtreel.acteur_depense_id == this.formData.acteur_depense_id,
       
      );

      if (qtereel) {
        return qtereel.id;
      }
      return 0
    },

afficherDureeVieFamille() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.familles.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.dureVie;
      }
      return 0
        }
      };
    },


 anneeAmortissement() {
      const val = parseInt(this.exerciceBudgetaireEnCours) + parseInt(this.afficherDureeVieFamille(this.formData2.famillearticle_id));
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
    },


afficherValeurOrigineModifier() {
      const val = parseFloat(this.nombreAffecter) * parseFloat(this.coutMonenArticle);
      return parseFloat(val).toFixed(0);
    },
  afficherValeurOrigine() {
      const val = parseFloat(this.formData2.qte_affecte) * parseFloat(this.coutMonenArticle);
      return parseFloat(val).toFixed(0);
    },

    afficherNombreEquipementRestant() {
      const val = parseFloat(this.formData.normeequipement) - parseFloat(this.formData2.qte_affecte);
      return parseFloat(val).toFixed(0);
    },

montantParBesoin() {
      return id => {
        if (id != null && id != "") {
          return this.articles.filter(element => element.famille_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ttc), 0).toFixed(0);
        }
      };
    },
nombreParBesoin() {
      return id => {
        if (id != null && id != "") {
          return this.articles.filter(element => element.famille_id == id).length;
        }
      };
    },
coutMonenArticle() {
 
      
    const val = parseFloat((this.montantParBesoin(this.formData2.famillearticle_id))/this.nombreParBesoin(this.formData2.famillearticle_id)).toFixed(2); 
    if (isNaN(val)) return null;
    return val;
  

    },


afficherMontantRestant() {
      const val = this.affichierTotal(this.formData.serviceua_id) - this.afficherValeurOrigine;
      return parseFloat(val).toFixed(0);
    },


affichierTotal() {
      return id => {
        if (id != null && id != "") {
         return this.normeImmo.filter(element => element.service_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total), 0).toFixed(0);

     
        }
      };
    },







afficheIdFonction() {
      
      const norme = this.fonctions.find(normeEquipe => normeEquipe.libelle == this.formData.fonction_id);

      if (norme) {
        return norme.id;
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
              fenetreAjouterAffectation(index) {
      this.$("#nonEquiper").modal({
        backdrop: "static",
        keyboard: false
      });

      this.formData = this.afficheServiceNonEquipe[index];
    },

    ajouterImmobilisationLocal() {

      
if (this.formData.serviceua_id == this.afficherAffectationParFonction &&  this.afficherQuantiteEnRequise(this.formData2.famillearticle_id) == this.afficherAffectationParQuantiteAffecter){

alert("équipement déja attribué")
}
else if(this.afficherQuantiteEnStock(this.formData2.famillearticle_id) == 0){
alert("Veuillez approvisionner votre stock")
}
else if(this.afficherQuantiteEnRequise(this.formData2.famillearticle_id) < this.afficherQteTotal){
  alert("Vérifiez la quantité affecté")
}

else if (this.formData.serviceua_id == this.afficherAffectationParFonction  && this.formData.s_ua_id == this.afficherAffectationParUniteZone && this.formData.serviceua_id == this.afficherAffectationParService && this.formData2.famillearticle_id == this.afficherAffectationParBesoin){

var nouvelobjet8 ={
  ...this.formData,
  id: this.afficherIdStock,
 quantitestock:this.afficherQteEnStock,
 qtesortie:this.afficherQteSortir
}
var nouvelobjet2 ={
  ...this.formData,
 normeequipement:this.afficherNombreEquipementRestant,
 montantequipement:this.afficherMontantRestant
}
      var nouvelObjet3 = {
        ...this.formData2,
        ...this.formData,
        id: this.afficherIdImmobilisation,
        prixUnitaire: this.coutMonenArticle,
        valeurorigine: this.afficherValeurOrigineModifier,
       
        exercice_budgetaire:this.exerciceBudgetaireEnCours,
      duree:this.afficherDureeVieFamille(this.formData2.famillearticle_id),
      // acteurdepense_id : this.formData.acteur_depense_id,
     	uniteadministrative_id:this.formData.s_ua_id,
      	service_id:this.formData.serviceua_id,
    //   fonction_id:this.formData.fonction_id,
      anneamortiss:this.anneeAmortissement,
      
    //   unitezon_id:this.formData.uniteZone_id,
      qte_reel:this.afficherQuantiteEnRequise(this.formData2.famillearticle_id),
     
     qte_affecte:this.nombreAffecter,
     total_actuel:this.afficherPrixActuelResteACouvertModifier,
     qte_actuel:this.afficherQteResteACouvertModifier,

      };
   var nouveauObjetDemande = {
        ...this.formData,
        ...this.formData2,
//  acteur_id:this.formData.acteur_depense_id,
 ua_id:this.formData.s_ua_id,
//  unitezone_id:this.formData.uniteZone_id,
//  fonction_id:this.formData.fonction_id,
 article_id:this.formData2.famillearticle_id,
 qte:this.formData2.qte_affecte,
 dure_vie:this.afficherDureeVieFamille(this.formData2.famillearticle_id),
 etatimmo_id:this.formData2.etat_immobilisation,
//  matricule_auteur:this.afficherActeurDepenseMatricule(this.formData.acteur_depense_id),
 annee:this.exerciceBudgetaireEnCours,
 annee_amortissement:this.anneeAmortissement,
 valeurorigine:this.afficherValeurOrigine,
 date_mise_service:this.formData2.date_mise_service,
 service_id:this.formData.serviceua_id,
};


this.ajouterHistotorisqueAffectionService(nouveauObjetDemande)
      this.modifierStock(nouvelobjet8)
this.modifierService(nouvelobjet2)

  
    this.getAllServiceua()
   
    this.modifierImmobilisation(nouvelObjet3);

     this.$("#nonEquiper").modal('hide');
      this.formData={
s_ua_id: "",
       
        libelle:"",
        
     }
     this.formData2={
 famillearticle_id :"",
        qte_affecte:"",
        date_mise_service:"",
        identification:"",
        type_immo:"",
        nature_dentree:"",
        nature_bien:"",
        etat_immobilisation:"",
        cause_inactivite:"",
     }
}
else{
  
var nouvelobjet9 ={
  ...this.formData,
   id: this.afficherIdStock,
 quantitestock:this.afficherQteEnStock,
  qtesortie:this.afficherQteSortir
}
var nouvelobjet4 ={
  ...this.formData,
 normeequipement:this.afficherNombreEquipementRestant,
 montantequipement:this.afficherMontantRestant
}
      var nouvelObjet = {
        ...this.formData2,
        
        prixUnitaire: this.coutMonenArticle,
        valeurorigine: this.afficherValeurOrigine,
       
        exercice_budgetaire:this.exerciceBudgetaireEnCours,
      duree:this.afficherDureeVieFamille(this.formData2.famillearticle_id),
      // acteurdepense_id : this.formData.acteur_depense_id,
     	uniteadministrative_id:this.formData.s_ua_id,
      service_id:this.formData.serviceua_id,
      // fonction_id:this.formData.fonction_id,
      anneamortiss:this.anneeAmortissement,
      
      // unitezon_id:this.formData.uniteZone_id,
      qte_reel:this.afficherQuantiteEnRequise(this.formData2.famillearticle_id),
     qte_affecte:this.nombreAffecter,
     total_actuel:this.afficherPrixActuelResteACouvert,
     qte_actuel:this.afficherQteResteACouvert

      };
       var ObjetDemande = {
       ...this.formData,
       ...this.formData2,
//  acteur_id:this.formData.acteur_depense_id,
 ua_id:this.formData.s_ua_id,
 service_id:this.formData.serviceua_id,
//  unitezone_id:this.formData.uniteZone_id,
//  fonction_id:this.formData.fonction_id,
 article_id:this.formData2.famillearticle_id,
 qte:this.formData2.qte_affecte,
 dure_vie:this.afficherDureeVieFamille(this.formData2.famillearticle_id),
 etatimmo_id:this.formData2.etat_immobilisation,
//  matricule_auteur:this.afficherActeurDepenseMatricule(this.formData.acteur_depense_id),
 annee:this.exerciceBudgetaireEnCours,
annee_amortissement:this.anneeAmortissement,
valeurorigine:this.afficherValeurOrigine,
 date_mise_service:this.formData2.date_mise_service
};


this.ajouterHistotorisqueAffectionService(ObjetDemande)
       this.modifierStock(nouvelobjet9)
this.modifierService(nouvelobjet4)
  
    this.getAllServiceua()
   
    this.ajouterImmobilisation(nouvelObjet);
this.$("#nonEquiper").modal('hide');
     
     this.formData={
s_ua_id: "",
       
        serviceua_id:"",
      
     }
     this.formData2={
 famillearticle_id :"",
        qte_affecte:"",
        date_mise_service:"",
        identification:"",
        type_immo:"",
        nature_dentree:"",
        nature_bien:"",
        etat_immobilisation:"",
        cause_inactivite:"",
     }

}

    },


formatageSomme:formatageSomme,

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