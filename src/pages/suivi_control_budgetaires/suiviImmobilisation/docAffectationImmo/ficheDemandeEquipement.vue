
<template>
  
   
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">


 














     
      <div class="row-fluid">
        <div class="span12">
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>AFFECTATION D'EQUIPEMENT </h5>
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
                        <a data-toggle="tab" href="#tab8969">DEMANDE PERSONNEL  <span class="badge badge-important">{{afficheNombrePersonneNonEquipe}}</span></a>
                      </li>
                       <li>
                        <a data-toggle="tab" href="#tab7458">DEMANDE SERVICE    <span class="badge badge-success">{{nombreDemandeImmobilisation}}</span></a>
                      </li>
                       <!-- <li class="">
                        <a data-toggle="tab" href="#tab1005">NOUVEAU SERVICE   <span class="badge badge-important">{{afficheNombrePersonneNonEquipe}}</span></a>
                      </li> -->
                       <!-- <li>
                        <a data-toggle="tab" href="#tab2005">AFFECTATION DES DEMANDES DU SERVICE   <span class="badge badge-success">{{nombreDemandeImmobilisation}}</span></a>
                      </li> -->
                      <!-- <li>
                        <a data-toggle="tab" href="#tab3">AFFECTION DE LA DIRECTION</a>
                      </li> --> 
                     
                    </ul>
                  </div>
                  <div class="widget-content tab-content">


          <div id="tab8969" class="tab-pane active"><historisqueAffection></historisqueAffection> </div>

 <div id="tab7458" class="tab-pane"><historisqueDemandeParService></historisqueDemandeParService></div>

        </div>
      </div>
      
        <!-- <fab :actions="fabActions" @cache="afficherModalAjouterBesoinImmobilisation" main-icon="apps" bg-color="green"></fab>
    <notifications  />
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
     <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjouterBesoinImmobilisation()">Open</button>
 
  -->
 
              </table>
 
  </div>


    </div>
</div>


    </div>
    <!-- <fab :actions="fabActions" @cache="afficherModalAjouterTitre" bg-color="green"></fab> -->
    <!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
   
   

    <!--///////////////////////////////////////// fin modal d ajout //////////////////////////////-->
 
   
  
   
    </div>
  
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import historisqueAffection from '../docAffectationImmo/historisqueAffection'
import historisqueDemandeParService from '../docAffectationImmo/historisqueDemandeParService'
import { formatageSomme } from "../../../../Repositories/Repository";

export default {
  
  name: 'besionImmolisation',
  components: {
      historisqueAffection,
      historisqueDemandeParService
     
  },
  data() {
    return {
      fabActions: [
        {
          name: "cache",
          icon: "add"
        }
        // {
        //   name: "alertMe",
        //   icon: "add_alert",
        //   class: ""
        // }
      ],
json_fields: {
        TYPE_UNITE_ADMINISTRATIVE: "typeUniteAdmin.libelle",
        UNITE_ADMINISTRATIVE: "uniteAdminist.libelle",
        DESIGNATION: "famille.libelle",
        QUANTITE: "quantite",
        PRIX_UNITAIRE: "prix_unitaire",
        MONTANT_TOTAL: "montant_total",
         DATE_DE_DEMANDE: "date_jour",
      },
      formData: {
        unite_administrative_id: "",
        fonction_id:"",
        acteur_depense_id:"",
        uniteZone_id:"",
        service_id:"",
        

        
      },
      valideService:{
motif:"",
date_motif:""
      },
      valideDirecteur:{
        article_id:"",
motif:"",
date_motif_directeur:"",
cause_directeur:""
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
      formData3:{
        acteur_id:"",
        ua_id:"",
          unitezone_id:"",
          fonction_id:"",
          article_id:"",
          qte:"",
          dure_vie:"",
          etatimmo_id:""
      },
      direct:"",
      search: ""
    };
  },
// created() {
//     this.formData = this.filtre_besoinImmo.find(
//       BesoinImmo => BesoinImmo.id == this.$route.params.id
//     )
// },
  computed: {
    ...mapGetters("SuiviImmobilisation", [
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
    ...mapGetters("uniteadministrative", ["uniteAdministratives","directions","servicesua","uniteZones"]),
    ...mapGetters("parametreGenerauxAdministratif", ["type_Unite_admins","exercices_budgetaires"]),
...mapGetters("personnelUA", ["acte_personnels","all_acteur_depense","acteur_depenses","personnaFonction","fonctions"]),


afficheMontantTotalEquipementNonCouvert() {
     
         return this.acte_personnels.filter(element => element.normeequipement != 0).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montantequipement), 0).toFixed(0);

     
      
     
    },

afficherMontantRestant() {
      const val = this.affichierTotal(this.formData.fonction_id) - this.afficherValeurOrigine;
      return parseFloat(val).toFixed(0);
    },
 


affichierTotal() {
      return id => {
        if (id != null && id != "") {
         return this.normeImmo.filter(element => element.fonction_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.total), 0).toFixed(0);

     
        }
      };
    },
    coutMoyenActicle() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.normeImmo.find(qtreel => qtreel.famille_id == id);

      if (qtereel) {
        return qtereel.cout_moyen;
      }
      return 0
        }
      };
    },
 

MontantParEquipementModifier(){
  
    
    var montant = this.articles.filter(element => element.famille_id == this.editTransfert.famille_id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ttc), 0).toFixed(0); 
      if(isNaN(montant)) return null
      return montant

   
  
}, 







afficheEquipementNonCouvt() {
      return id => {
        if (id != null && id != "") {
           return this.normeImmo.find(qtreel => qtreel.fonction_id == id);

    
     
        }
      };
    },



nombreDemandeImmobilisation() {
      
          return this.demandeMateriel.filter(element => element.motif != 10).length;
       
    },






afficherResteStock() {
      const val = this.affichierQuantiteEnStock(this.valideDirecteur.article_id) - this.valideDirecteur.quantite;
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
afficheAnneeAmortis() {
      const val = parseInt(this.valideDirecteur.annee_budgetaire) + parseInt(this.valideDirecteur.dure_vie);
      
       if (val) {
        return parseInt(val).toFixed(0);
      }
      
      return 0
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


nombreDejourCalculeTraitementService(){
                let vM=this;
    const acteAffet = vM.valideService
    if(acteAffet.date_demande == acteAffet.date_motif &&  acteAffet.date_motif !=="" && acteAffet.date_demande !=="") return 1
     if(acteAffet.date_motif =="" && acteAffet.date_demande =="") return null

       var dateF = new Date(acteAffet.date_motif).getTime()
        var dateO = new Date(acteAffet.date_demande).getTime()
           var resultat = dateF - dateO

             var diffJour =  resultat / (1000 * 3600 * 24)

               if(isNaN(diffJour)) return null

               if(parseFloat(diffJour) < 0 ) return "durée invalide"
    vM.valideService.duree=diffJour
                  return  diffJour;
   
},



nombreDejourCalculeTraitementDirecteur(){
                let vM=this;
    const acteAffet = vM.valideDirecteur
    if(acteAffet.date_motif == acteAffet.date_motif_directeur &&  acteAffet.date_motif_directeur !=="" && acteAffet.date_motif !=="") return 1
     if(acteAffet.date_motif_directeur =="" && acteAffet.date_motif =="") return null

       var dateF = new Date(acteAffet.date_motif_directeur).getTime()
        var dateO = new Date(acteAffet.date_motif).getTime()
           var resultat = dateF - dateO

             var diffJour =  resultat / (1000 * 3600 * 24)

               if(isNaN(diffJour)) return null

               if(parseFloat(diffJour) < 0 ) return "durée invalide"
    vM.valideDirecteur.duree=diffJour
                  return  diffJour;
   
},













verrouilleCause(){

    return this.valideDirecteur.motif == 3;
},



afficheValidationChefService() {
      
          return this.demandeMateriel.filter(element => element.motif != 3 && element.motif != 1 && element.motif != 10 );
       
    },


afficheValidationDirecteur() {
      
          return this.demandeMateriel.filter(element => element.motif != 0 && element.motif != 5 && element.motif != 4 && element.motif != 10);
       
    },

nombreValidationEnAttenteChefService() {
      
          return this.afficheValidationChefService.length;
       
    },
    nombreDemande() {
      
          return this.demandeMateriel.length;
       
    },
nombreValidationEnAttenteDirecteur() {
      
          return this.afficheValidationDirecteur.length;
       
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
        return qtereel.fonction_id;
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
        return qtereel.unitezon_id;
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











afficheLeBesoinDemande() {
      
      return id => {
        if (id != null && id != "") {
          return this.normeImmo.filter(element => element.fonction_id == id);
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
    equipementNonCouvert(){
return this.acte_personnels.filter(element => element.normeequipement != 0)
},
    NombreTauxequipementParAgent(){
return this.acte_personnels.filter(element => element.normeequipement != null).length
},
tauxequipementParAgent(){
return this.acte_personnels.filter(element => element.normeequipement != null)
},
afficheEquipementCouvert(){
return this.immobilisations.filter(element => element.qte_actuel == 0)
},
// afficheEquipementNonCouvert(){
// return this.immobilisations.filter(element => element.qte_actuel != 0)
// },
// NombreafficheEquipementNonCouvert(){
// return this.immobilisations.filter(element => element.qte_actuel != 0).length
// },
NombreafficheEquipementNonCouvert(){
return this.acte_personnels.filter(element => element.normeequipement != 0).length
},

affichePersonneNonEquipe(){
return this.acte_personnels.filter(element => element.normeequipement != 0)
},
NombreaffichePersonneEquipe(){
return this.acte_personnels.filter(element => element.normeequipement == 0).length
},
affichePersonneEquipe(){
return this.acte_personnels.filter(element => element.normeequipement == 0)
},
afficheNombrePersonneNonEquipe(){
return this.acte_personnels.filter(element => element.normeequipement != 0).length
},

afficheNombrePersonneEquipe(){
return this.acte_personnels.filter(element => element.normeequipement == 0).length
},
afficheNombreToutPersonne(){
return this.acte_personnels.length
},
exoEnCours(){
return this.exercices_budgetaires.filter(element => element.encours == 1)
},
 

 exerciceBudgetaireEnCours() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },

afficherActeurDepense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.all_acteur_depense.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.matricule.concat('    ', qtereel.nom,'     ',qtereel.prenom);
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
// identifierDmdService(){
// if(this.formData.service_id != 0){
//   return 2
// }


// return 0

// },

// identifierDmdFonction(){
// if(this.formData.fonction_id != 0){
//   return 1
// }

// return 0


// },

// identifierDmdServiceModifier(){
// if(this.editBesoinImmo.service_id != 0){
//   return 2
// }
// else {
// return 0
// }

// },

// identifierDmdFonctionModifier(){
// if(this.editBesoinImmo.fonction_id != 0){
//   return 1
// }
// else{
// return 0
// }

// },

afficheLibelleService() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.servicesua.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle
      }
      return 0
        }
      };
    },

afficheUniteZone() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteZones.find(qtreel => qtreel.id == id);

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
   
     
 deverouServiceEtFonction() {

      return this.formData.direction != 0;

    },


 deverouUniteZone() {

      return this.formData.uniteadmin_id == "";

    },


destinationDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.uniteZones.filter(element => element.id_unite_administrative == this.formData.uniteadmin_id);
        }
      };
    },
    destinationDynamiquesModifier() {
      return id => {
        if (id != null && id != "") {
          return this.uniteZones.filter(element => element.id_unite_administrative == this.editBesoinImmo.uniteadmin_id);
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
// verifierLaNorme(){
//     let normeInitial=parseFloat(this.afficheNormeFamille)
//       let qteDemande=parseFloat( this.formData.quantite)
//        if(normeInitial < qteDemande){
//         alert("La norme doit etre superieure a la qte demande")
//       }
// },


 


CoutMoyen() {
 return id => {
    if(id !=""){
      
    const val = parseFloat((this.getAfficheArticle.filter(element => element.famillearticle_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_ttc), 0).toFixed(2))/this.getAfficheArticle.filter(element => element.famillearticle_id == id).length).toFixed(0); 
    if (isNaN(val)) return null;
    return val;
  
 }
  }
    },

 montantTotalarticlesModifier() {
   if(this.editBesoinImmo.famillearticle_id !=""){
      const val = parseFloat(this.editBesoinImmo.quantite) * parseFloat(this.CoutMoyen(this.editBesoinImmo.famillearticle_id));
        if (isNaN(val)) return null;
     return parseFloat(val).toFixed(0);
    }
    return null

},
 montantTotalarticles() {
   if(this.formData2.famillearticle_id !=""){
      const val = parseFloat(this.formData.quantite) * parseFloat(this.CoutMoyen(this.formData2.famillearticle_id));
        if (isNaN(val)) return null;
     return parseFloat(val).toFixed(0);
    }
    return null

},

 deverouFonctionDirectionService() {
      return this.formData.uniteadmin_id == "";
    },
afficheActeurDepense() {
      return id => {
        if (id != null && id != "") {
          return this.all_acteur_depense.filter(element => element.fonction.id == id);
        }
      };
    },

// afficheActeurDepense() {
//       return id => {
//         if (id != null && id != "") {
//            const qtereel = this.all_acteur_depense.find(qtreel => qtreel.fonction.id == this.formData.fonction_id);

//       if (qtereel) {
//         return qtereel.matricule.concat('  ', qtereel.nom,'  ',qtereel.prenom)
//       }
//       return 0
//         }
//       };
//     },
 fonctionDynamiquesParUa() {
      return id => {
        if (id != null && id != "") {
          return this.all_acteur_depense.filter(element => element.uniteZone_id == id);
        }
      };
    },
auteurParUaDynamiques() {
      
      return id => {
        if (id != null && id != "") {
          return this.personnaFonction.filter(element => element.uniteZone_id == id);
        
        }
        
      };
    },
 familleNormeDynamiques() {
      
      return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseNormeEquipement.filter(element => element.direction_id == id);
        }
      };
    },
     familleNormeServiceDynamiques() {
      
      return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseNormeEquipement.filter(element => element.service_id == id);
        }
      };
    },
      familleNormeFonctionDynamiques() {
      
      return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseNormeEquipement.filter(element => element.fonction_id == id);
        }
      };
    },
uniteAdministDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.uniteAdministratives.filter(element => element.type_ua_id == id);
        }
      };
    },
directionDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.directions.filter(element => element.d_ua_id == id);
        }
      };
    },
 uniteAdministrativeDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.getPersoListeDesNorme.filter(element => element.typeua_id == id);
        }
      };
    },
fonctionDynamiques() {
      return id => {
        if (id != null && id != "") {
          return this.getPersoListeDesNorme.filter(element => element.ua_id == id);
        }
      };
    },
    afficheNormeFamille() {
      
      const norme1 = this.normeImmo.find(normeEquipe => normeEquipe.famillearticle_id == this.formData2.famillearticle_id);
      if (norme1) {
        return norme1.norme;
      }
      return 0
    },
        afficheNormeFamilleModifier() {
      
      const norme1 = this.normeImmo.find(normeEquipe => normeEquipe.famillearticle_id == this.editBesoinImmo.famillearticle_id);
      if (norme1) {
        return norme1.norme;
      }
      return 0
    },
  },
    
  methods: {
    ...mapActions("SuiviImmobilisation", [
       "ajouterImmobilisation",
       "modifierImmobilisation",
       "modifierStock",
       "ajouterHistotorisqueAffection",
       "modifierDemandeMateriel"
      
     
    ]),
     ...mapActions("personnelUA", [
       "getActeur","allActeurDepense","getActPersonnel",
       "modifierActeurDepenses",
     
    ]),
  


  AjouterAffectationDemande(index){
if(this.affichierQuantiteEnStock(this.valideDirecteur.article_id) < this.valideDirecteur.quantite)
{
  alert("Stock en Rupture")
}
else if ( confirm( "Voulez-vous attribuer l'equipement?") ) {
    this.valideDirecteur = this.afficheValidationDirecteur[index];
  
   var nouveauObjetDemande = {
        ...this.valideDirecteur,
 acteur_id:this.valideDirecteur.acteur_id,
 ua_id:this.valideDirecteur.uniteadmin_id,
 unitezone_id:this.valideDirecteur.uniteZone_id,
 fonction_id:this.valideDirecteur.fonction_id,
 article_id:this.valideDirecteur.article_id,
 qte:this.valideDirecteur.quantite,
 dure_vie:this.valideDirecteur.dure_vie,
 
 matricule_auteur:this.afficherActeurDepenseMatricule(this.valideDirecteur.acteur_id),
 annee:this.valideDirecteur.annee_budgetaire,
annee_amortissement:this.afficheAnneeAmortis,
 valeurorigine:this.afficheValeurOrigine(this.valideDirecteur.article_id),
 date_mise_service:this.valideDirecteur.date_motif_directeur,
 
};
   
      let dmdObjet = this.demandeMateriel.find(marche=>marche.id==this.valideDirecteur.id)
         dmdObjet.motif = 10
           let stockObjet = this.stockageArticles.find(marche=>marche.id==this.affichierIdQuantiteEnStock(this.valideDirecteur.article_id))
         stockObjet.quantitestock = this.afficherResteStock

this.ajouterHistotorisqueAffection(nouveauObjetDemande);
this.modifierDemandeMateriel(dmdObjet)
this.modifierStock(stockObjet)
} else {
    // Code à éxécuter si l'utilisateur clique sur "Annuler" 
}





},






modifierDecisionChefService(){

  var objetService = {
  ...this.valideService,
  motif_chef_sce:this.valideService.motif,
  dure_traitement_sce:this.nombreDejourCalculeTraitementService
 
}
this.modifierDemandeMateriel(objetService)
this.$("#exampleModalValidationChefService").modal('hide');

},

modifierDecisionDirecteur(){

var objetDirecteur = {
  ...this.valideDirecteur,
  motif_directeur:this.valideDirecteur.motif,
  dure_traitement_directeur:this.nombreDejourCalculeTraitementDirecteur
 
}
this.modifierDemandeMateriel(objetDirecteur)
this.$("#exampleModalValidationdirecteur").modal('hide');
},



afficherModalPourValidationChefService(index) {
      this.$("#exampleModalValidationChefService").modal({
        backdrop: "static",
        keyboard: false
      })
      this.valideService = this.afficheValidationChefService[index];
      
      },


afficherModalPourValidationDuDirecteur(index) {
      this.$("#exampleModalValidationdirecteur").modal({
        backdrop: "static",
        keyboard: false
      })
      this.valideDirecteur = this.afficheValidationDirecteur[index];
      
      },





  fenetreAjouterAffectation(index) {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.formData = this.affichePersonneNonEquipe[index];
    },
    formaterDate(date) {
      return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
    },
    formatageSomme: formatageSomme,







    ajouterImmobilisationLocal() {

      
if (this.formData.fonction_id == this.afficherAffectationParFonction &&  this.formData.acteur_depense_id == this.afficherAffectationParActeurDepense && this.afficherQuantiteEnRequise(this.formData2.famillearticle_id) == this.afficherAffectationParQuantiteAffecter){

alert("équipement déja attribué")
}
else if(this.afficherQuantiteEnStock(this.formData2.famillearticle_id) == 0){
alert("Veuillez approvisionner votre stock")
}
else if(this.afficherQuantiteEnRequise(this.formData2.famillearticle_id) < this.afficherQteTotal){
  alert("Vérifiez la quantité affecté")
}

else if (this.formData.fonction_id == this.afficherAffectationParFonction &&  this.formData.acteur_depense_id == this.afficherAffectationParActeurDepense && this.formData.uniteZone_id == this.afficherAffectationParUniteZone && this.formData.service_id == this.afficherAffectationParService && this.formData2.famillearticle_id == this.afficherAffectationParBesoin){

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
        id: this.afficherIdImmobilisation,
        prixUnitaire: this.coutMonenArticle,
        valeurorigine: this.afficherValeurOrigineModifier,
       
        exercice_budgetaire:this.exerciceBudgetaireEnCours,
      duree:this.afficherDureeVieFamille(this.formData2.famillearticle_id),
      acteurdepense_id : this.formData.acteur_depense_id,
     	uniteadministrative_id:this.formData.unite_administrative_id,
      service_id:this.formData.service_id,
      fonction_id:this.formData.fonction_id,
      anneamortiss:this.anneeAmortissement,
      
      unitezon_id:this.formData.uniteZone_id,
      qte_reel:this.afficherQuantiteEnRequise(this.formData2.famillearticle_id),
     
     qte_affecte:this.nombreAffecter,
     total_actuel:this.afficherPrixActuelResteACouvertModifier,
     qte_actuel:this.afficherQteResteACouvertModifier,

      };
   var nouveauObjetDemande = {
        
 acteur_id:this.formData.acteur_depense_id,
 ua_id:this.formData.unite_administrative_id,
 unitezone_id:this.formData.uniteZone_id,
 fonction_id:this.formData.fonction_id,
 article_id:this.formData2.famillearticle_id,
 qte:this.formData2.qte_affecte,
 dure_vie:this.afficherDureeVieFamille(this.formData2.famillearticle_id),
 etatimmo_id:this.formData2.etat_immobilisation,
 matricule_auteur:this.afficherActeurDepenseMatricule(this.formData.acteur_depense_id),
 annee:this.exerciceBudgetaireEnCours,
 annee_amortissement:this.anneeAmortissement,
 valeurorigine:this.afficherValeurOrigine,
 date_mise_service:this.formData2.date_mise_service
};


this.ajouterHistotorisqueAffection(nouveauObjetDemande)
      this.modifierStock(nouvelobjet8)
this.modifierActeurDepenses(nouvelobjet2)

  this.getActeur()
    this.allActeurDepense()
    this.getActPersonnel()
    this.modifierImmobilisation(nouvelObjet3);

     this.$("#exampleModal").modal('hide');
      this.formData={
unite_administrative_id: "",
        fonction_id:"",
        acteur_depense_id:"",
        uniteZone_id:"",
        service_id:"",
        
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
      acteurdepense_id : this.formData.acteur_depense_id,
     	uniteadministrative_id:this.formData.unite_administrative_id,
      service_id:this.formData.service_id,
      fonction_id:this.formData.fonction_id,
      anneamortiss:this.anneeAmortissement,
      
      unitezon_id:this.formData.uniteZone_id,
      qte_reel:this.afficherQuantiteEnRequise(this.formData2.famillearticle_id),
     qte_affecte:this.nombreAffecter,
     total_actuel:this.afficherPrixActuelResteACouvert,
     qte_actuel:this.afficherQteResteACouvert

      };
       var ObjetDemande = {
       ...this.formData,
       ...this.formData2,
 acteur_id:this.formData.acteur_depense_id,
 ua_id:this.formData.unite_administrative_id,
 unitezone_id:this.formData.uniteZone_id,
 fonction_id:this.formData.fonction_id,
 article_id:this.formData2.famillearticle_id,
 qte:this.formData2.qte_affecte,
 dure_vie:this.afficherDureeVieFamille(this.formData2.famillearticle_id),
 etatimmo_id:this.formData2.etat_immobilisation,
 matricule_auteur:this.afficherActeurDepenseMatricule(this.formData.acteur_depense_id),
 annee:this.exerciceBudgetaireEnCours,
annee_amortissement:this.anneeAmortissement,
valeurorigine:this.afficherValeurOrigine,
 date_mise_service:this.formData2.date_mise_service
};


this.ajouterHistotorisqueAffection(ObjetDemande)
       this.modifierStock(nouvelobjet9)
this.modifierActeurDepenses(nouvelobjet4)
  this.getActeur()
    this.allActeurDepense()
    this.getActPersonnel()
    this.ajouterImmobilisation(nouvelObjet);
this.$("#exampleModal").modal('hide');
     
     this.formData={
unite_administrative_id: "",
        fonction_id:"",
        acteur_depense_id:"",
        uniteZone_id:"",
        service_id:"",
      
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
   
  }
  
};
</script>
<style scoped>
.taillemodal {
  width: 1400px;
  margin: 0 -700px;
}
.taillemodal1 {
  width: 800px;
  margin: 0 -455px;
}
.sommecolor{
  background-color: red;
  color:red;
  font-size: 120%;
  text-align: center;
  font-weight:bold;
}
.tailgrand{
  width: 77%;
  margin: 0 -38%;
}
.tailleImmobilisation{
  width: 90%;
  margin: 0 -45%;
}
.valDirecteur{
  width:30%;
  margin:0 -15%;
}
</style>
