
<template>

<div>
<table class="table table-bordered table-striped">
  <tr>
    <td>
      <label class="control-label">Unite Administrative</label>
       <select  class="span5" v-model="formData.uAdministrative_id">
                      <option></option>                     
                      <option
                        v-for="typeUniteA in uniteAdministratives"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
    </td>
  </tr>
</table>

            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      
                       <li class="active">
                        <a data-toggle="tab" href="#tab78965122">PERSONNEL</a>
                      </li>
                       <li class="">
                        <a data-toggle="tab" href="#tab475815">SERVICE </a>
                      </li>
                      <!-- <li class="">
                        <a data-toggle="tab" href="#tab12">Liste du Personnel Equipées    </a>
                      </li>
                      <li class="">
                        <a data-toggle="tab" href="#tab1296">Taux équipement par agent</a>
                      </li> -->
                    </ul>
                  </div>
                  <div class="widget-content tab-content">
  <div id="tab475815" class="tab-pane">
    <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <!-- <li class="active">
                        <a data-toggle="tab" href="#tab789651">Liste du Personnel</a>
                      </li> -->
                       <li class="active">
                        <a data-toggle="tab" href="#tab475815">Listes des services</a>
                      </li>
                      <!-- <li class="">
                        <a data-toggle="tab" href="#tab475815">Equipements Non Couverts   </a>
                      </li>
                       <li class="">
                        <a data-toggle="tab" href="#tab12">Liste du Personnel Equipées    </a>
                      </li>
                      <li class="">
                        <a data-toggle="tab" href="#tab1296">Taux équipement par agent</a>
                      </li> -->
                    </ul>
                  </div>
                  <div class="widget-content tab-content">

          <div id="tab475815" class="tab-pane active">
            <table class="table table-bordered table-striped">
                <thead>
                   <tr>

                        
                        <th style="width:40%">Service</th>
                        <th style="width:10%">Equipé</th>
                        <th style="width:10%">Affectation</th>
                         
                    </tr>
                </thead>
                <tbody>
                    <tr class="odd gradeX" v-for=" affectService in listeDesServiceNonEquipeDeUa(formData.uAdministrative_id)"
                        :key="affectService.id">
                        
                             
                            <td >
                            {{afficherLibelleService(affectService.serviceua_id) || 'Non renseigné'}}</td>
                             <td style="text-align: center;">
                      
                       
                          
                         
                     <span style="font-weight: 500;" v-if="affectService.normeequipement == 0"  class="btn btn-success" >Oui</span>
                     <span  v-else  class="btn btn-danger" style="font-weight: 500;"> Non</span>
                     
                        
                     
                    </td>
                    <td>
                       <router-link
                        :to="{name : 'listedesArticleParService', params: {id:affectService.id}}"
                        class="btn btn-default"
                        title=""
                      >
                        <span>
                          <i class="icon icon-folder-open"></i>
                        </span>
                      </router-link>
                     </td>
                      <!-- <td title="Affectation d'equipement" style="font-weight: 500;">
                        <button class="btn btn-info" @click="fenetreAjouterAffectation(index)">
                        <span>
                          <i class="icon-hand-right"></i>
                        </span>
                      </button>
                     </td> -->
                    </tr>
                    </tbody>
              </table>
          </div>

 
        </div>
      </div>
      
              </table>
 
  </div>
  </div>
          <div id="tab78965122" class="tab-pane active">
            
            

            <div class="table-responsive text-nowrap">
              <table class="table table-bordered table-striped">
                <div class="widget-box">
                  <div class="widget-title">
                    <ul class="nav nav-tabs">
                      <!-- <li class="active">
                        <a data-toggle="tab" href="#tab789651">Liste du Personnel</a>
                      </li> -->
                       <li class="active">
                        <a data-toggle="tab" href="#tab7896512">Listes du Personnel</a>
                      </li>
                      <!-- <li class="">
                        <a data-toggle="tab" href="#tab475815">Equipements Non Couverts   </a>
                      </li>
                       <li class="">
                        <a data-toggle="tab" href="#tab12">Liste du Personnel Equipées    </a>
                      </li>
                      <li class="">
                        <a data-toggle="tab" href="#tab1296">Taux équipement par agent</a>
                      </li> -->
                    </ul>
                  </div>
                  <div class="widget-content tab-content">

          <div id="tab7896512" class="tab-pane active">
            <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     
                    
                   <th style="width:40%">Matricule</th>
                        <th style="width:40%">Nom && Prénoms</th>
                        
                        <th style="width:40%">Fonction</th>
                    <!-- <th >Equipé</th> -->
                     <th >Action</th>
                  </tr>
                </thead>
                <tbody>
                  
                  <tr
                    class="odd gradeX"
                    v-for="BesoinImmo in listePersonnelNonEquipee(formData.uAdministrative_id)"
                    :key="BesoinImmo.id"
                  >
                  <td style="text-align: center;"
                   
                    >{{afficherActeurDepenseMatricule(BesoinImmo.acteur_depense_id) || 'Non renseigné'}}</td>
                  
                     <td style="text-align: center;"
                   
                    >{{afficherActeurDepenseNomPrenoms(BesoinImmo.acteur_depense_id) || 'Non renseigné'}}</td>
                    <td style="text-align: center;"
                      
                    >{{afficheFonction(BesoinImmo.fonction_id)}}</td>
                   
                    <!-- <td style="text-align: center;">
                      
                       
                          
                         
                     <span style="font-weight: 500;" v-if="BesoinImmo.normeequipement == 0"  class="btn btn-success" >Oui</span>
                     <span  v-else  class="btn btn-danger" style="font-weight: 500;"> Non</span>
                     
                        
                     
                    </td> -->
                   
                     
                         
                    
                     <td>
                       <router-link
                        :to="{name : 'listedesArticleparPerso', params: {id:BesoinImmo.id}}"
                        class="btn btn-default"
                        title="Detail Immobilisation"
                      >
                        <span>
                          <i class="icon icon-folder-open"></i>
                        </span>
                      </router-link>
                     </td>
                     
                    
                    
                  </tr>
                 
                 
                 
                </tbody>
              </table>
          </div>

 
        </div>
      </div>
      
              </table>
 
  </div>


    
          </div>

 
        </div>
      </div>
      
              </table>
 
  </div>


    

              
     




  






    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import { formatageSomme } from '../../../../../Repositories/Repository';
import {admin,dcf,noDCfNoAdmin} from "../../../../../Repositories/Auth"
//import ListePersonnelParUa from '../../../suiviImmobilisation/RefaireComptabiliteMatiere/AffectationEquipementParUa/DossierAffectation/ListePersonnelParUa'
//import moment from 'moment';
export default {
  // components: {
    
  //   ListePersonnelParUa
     
  // },
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
  admin:admin,
      dcf:dcf,
      noDCfNoAdmin:noDCfNoAdmin,
     ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
            ...mapGetters("bienService", [ "gettersCotations","typeCandidat",'acteDepense',"getMarchePersonnaliser","appelOffres","lots",
                "modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs","obseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers", "personnaliseGetterMarcheBailleur","getterMembreCojo","getterProceVerballe"]),
            ...mapGetters("personnelUA", ["acte_personnels","all_acteur_depense","acteur_depenses","personnaFonction","fonctions"]),


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
      "demandeMateriel",
      "getterUa_idImo"
   
   ]),
  //  afficherLibelleService() {
  //     return id => {
  //       if (id != null && id != "") {
  //          const qtereel = this.services.find(qtreel => qtreel.id == id);

  //     if (qtereel) {
  //       return qtereel.libelle;
  //     }
  //     return 0
  //       }
  //     };
  //   },
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
          //return colect.filter(element => element.normeequipement != 0 && element.normeequipement != null)
        return id => {
        if (id != null && id != "") {
           return colect.filter(items=>items.ua_id == id && items.normeequipement != 0 && items.normeequipement != null);
        }
      };
       }

      // return this.getterplanOrganisationUa.filter(element => element.normeequipement != 0 && element.normeequipement != null)
 return id => {
        if (id != null && id != "") {
           return this.getterplanOrganisationUa.filter(items=>items.ua_id == id && items.normeequipement != 0 && items.normeequipement != null);
        }
      };
    },
AfficheTotalQteNonCouvert() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.acte_personnels.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
          
       
            return id => {
        if (id != null && id != "") {
          return colect.filter(element => element.unite_administrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.normeequipement), 0).toFixed(0);
        }
      };
       }

  
  return id => {
        if (id != null && id != "") {
          return this.acte_personnels.filter(element => element.unite_administrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.normeequipement), 0).toFixed(0);
        }
      };
    },
AfficheTotalQteACouvrir() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.acte_personnels.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
          //return colect
        return id => {
        if (id != null && id != "") {
          return colect.filter(element => element.unite_administrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.normeequipement), 0).toFixed(0);
        }
      };
      }

       //return this.acte_personnels
return id => {
        if (id != null && id != "") {
          return this.acte_personnels.filter(element => element.unite_administrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.normeequipement), 0).toFixed(0);
        }
      };
    },
   
    afficheMontantTotalEquipementNonCouv() {
     
         return this.acte_personnels.filter(element => element.normeequipement != 0);
    },
afficheMontantTotalEquipementNonCouvert() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.afficheMontantTotalEquipementNonCouv.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
         // return colect
       return id => {
        if (id != null && id != "") {
          return colect.filter(element => element.unite_administrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montantequipement), 0).toFixed(0);
        }
      };
       }

      // return this.afficheMontantTotalEquipementNonCouv.reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montantequipement), 0).toFixed(0);
return id => {
        if (id != null && id != "") {
          return this.afficheMontantTotalEquipementNonCouv.filter(element => element.unite_administrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montantequipement), 0).toFixed(0);
        }
      };
    },
    equipementNonCouvert(){
return this.acte_personnels.filter(element => element.normeequipement != 0)
},
   listeDesEquipementNonCouvert() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.equipementNonCouvert.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return id => {
        if (id != null && id != "") {
          return colect.filter(element => element.unite_administrative_id == id);
        }
      };
        }

          return id => {
        if (id != null && id != "") {
          return this.equipementNonCouvert.filter(element => element.unite_administrative_id == id);
        }
      };

    },
   affichePersonneNonEquipe(){
return this.acte_personnels.filter(element => element.normeequipement != 0)
},
  listePersonnelNonEquipee() {
      


        if (this.noDCfNoAdmin){
            let colect=[];
            this.affichePersonneNonEquipe.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
           return id => {
        if (id != null && id != "") {
          return colect.filter(element => element.unite_administrative_id == id);
        }
      };
        }

        return id => {
        if (id != null && id != "") {
          return this.affichePersonneNonEquipe.filter(element => element.unite_administrative_id == id);
        }
      };

    },
afficheFonction() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.fonctions.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },
 afficherActeurDepenseNomPrenoms() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.personnaFonction.find(qtreel => qtreel.acteur_depense.id == id);

      if (qtereel) {
        return qtereel.acteur_depense.nom.concat('    ',qtereel.acteur_depense.prenom);
      }
      return 'Non renseigné'
        }
      };
    },
afficherActeurDepenseMatricule() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.personnaFonction.find(qtreel => qtreel.acteur_depense.id == id);

      if (qtereel) {
        return qtereel.acteur_depense.matricule;
      }
      return 'Non renseigné'
        }
      };
    },



    //   filtreServiceUniteAdministrative() {
    //   const st = this.search.toLowerCase();
    //   return this.servicesua.filter(type => {
    //     return (
         
    //       type.afficherLibelleService(this.libelle).toLowerCase().includes(st)
    //     );
    //   });
    // },
listePersonnelAffectete() {
      
        if (this.noDCfNoAdmin ){
            let colect=[];
            this.acte_personnels.filter(item=>{
                let val= this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unite_administrative_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
               
            })
            return id => {
        if (id != null && id != "") {
          return colect.filter(element => element.unite_administrative_id == id );
        }
      };
          }
           return id => {
        if (id != null && id != "") {
          return this.acte_personnels.filter(element => element.unite_administrative_id == id);
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