

<template>

<div>

                     <table class="table table-bordered table-striped" v-if="macheid">
                                    <thead>
                                   <tr>
                                        <th>N° du marche</th>
                                         <th>N° du mandat</th>
                                        <th>N° bordereau mandat</th>
                                        <th>N° demande engagement</th>
                                          <th>N° engagement</th>
                                       
                                   
                                <th>Montant Mandat</th>
                                 <th >Decision de emetteur</th>
                                <th title="Date validation Emetteur">Date Emetteur</th>
                                
                                <th>Décision CF</th>
                                <th title="Date validation Cf">Date validation CF</th>

                                
                                
                                
                                <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                     <tr
                    class="odd gradeX"
                    v-for="Manda in afficheFactureProformaEmetteur(macheid)"
                    :key="Manda.id"
                  >
        <td >{{marcheMandat(Manda.marche_id) || 'Non renseigné'}}</td>
                   <td >{{Manda.numero_mandat || 'Non renseigné'}}</td>
                  <td >{{Manda.numero_bordereau || 'Non renseigné'}}</td>
                    <td >{{afficherNumeroDemandeEngagemnt(Manda.engagement_id) || 'pas numero demande'}}</td>
                     <td >{{afficherNumeroEngagemnt(Manda.engagement_id) || 'pas numero engage'}}</td>
                     
            <!-- <td >{{uaMandat(Manda.ua_id) || 'Non renseigné'}}</td>
                                    -->
                    <td >{{formatageSomme(parseFloat(Manda.total_general))|| 'Non renseigné'}}</td>
                    
                    <td>
                        <button v-if="Manda.decision_emetteur == 1"  class="btn  btn-success" @click="afficherModalModifierMotifMandatEmetteur(index)" >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="Manda.decision_emetteur == 2" class="btn  btn-warning" @click="afficherModalModifierMotifMandatEmetteur(index)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="Manda.decision_emetteur == 3" class="btn  btn-danger" @click="afficherModalModifierMotifMandatEmetteur(index)" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalModifierMotifMandatEmetteur(index)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                    </td>
                    
                    <td >{{formaterDate(Manda.date_decision_emetteur) || 'Non renseigné'}}</td>
                      
              <td v-if="Manda.decision_emetteur == 1">
                        <button v-if="Manda.decision_cf == 8"  class="btn  btn-success" @click="afficherModalModifierMotifMandat(index)" >                        
                     
                      <span    >Visé</span>
                      
                      </button>
                       <button v-else-if="Manda.decision_cf == 2" class="btn  btn-warning" @click="afficherModalModifierMotifMandat(index)" >                        
                     
                      
                       <span  >Différé</span>
                      
                    
                      </button>
                        <button v-else-if="Manda.decision_cf == 3" class="btn  btn-danger" @click="afficherModalModifierMotifMandat(index)" >                        
                     
                      
                       <span  >Réjeté</span>
                      
                    
                      </button>
                     <button v-else class="btn  btn-info" @click="afficherModalModifierMotifMandat(index)" >                        
                     
                      
                       <span  >Attente</span>
                      
                    
                      </button>
                    </td>
                      <td v-else>
                        <h1 style="font-size:10px;color:red;">Désactivé  </h1>
                    </td>
                    <td >{{formaterDate(Manda.date_motif) || 'Non renseigné'}}</td>
                       <td>
                       
                       <router-link :to="{ name: 'DetailMandat', params: {id_detail_mandat:Manda.id}}"
                class="btn btn-default " title="Detail Mandat">
                  <span class=""><i class=" icon-folder-close"></i></span>
                   </router-link> 
                      <button class="btn btn-danger" @click="supprimerMandat(Manda.id)">
               <span class=""><i class="icon-trash">Supprimer</i></span></button>
                    </td>
                                     </tr>
               
                 
                                    </tbody>
                                </table>

              
     




  






    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import { formatageSomme } from './../../../../../Repositories/Repository';
import moment from 'moment';
export default {
   
    data(){
        return{
           fabActions: [
        {
          name: "cache",
          icon: "add"
        }
      ],
      formData :{
numero_avenant:"",
type_acte_financier:"",
objet_avenant:"",
montant_ht:"",
date_avenant:"",

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
       editAvenant: {},
search:""
        }
    },
    props:["macheid"],
    created(){},

              computed: {
            ...mapGetters("bienService", ['modepaiements','getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","typeFactures",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","motifDecisions",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers",'getEngagementPersonnaliser',"engagements","getEngagementPersonnaliser1","mandats","avenants","getterActeEffetFinanciers"]),

                ...mapGetters("gestionMarche", ['secteur_activites', 'entreprises',"comptes","banques"]),

           ...mapGetters("SuiviImmobilisation", [
      "familles",
      "services",
      "listeBesoinValider",
      "besoinImmobilisations",
      "groupTriUaImmo",
      "SuiviImmo",
      "listeBesoinValider",
      "getAfficheStockArticle",
      "getPersoNormeArticle",
      "getPersoStock",
      "stockageArticle",
      "getFacture"
      
    ]),
 ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
  ...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
    ...mapGetters("parametreGenerauxAdministratif", ["exercices_budgetaires","type_Unite_admins","grandes_natures","taux","sections","plans_programmes"]),
    ...mapGetters("parametreGenerauxProgrammeUnite", ["unites"]),
    ...mapGetters("personnelUA", ["all_acteur_depense","personnaliseActeurDepense","acteur_depenses","personnaFonction"]),
    
   
  ...mapGetters("uniteadministrative", [
      "jointureUaChapitreSection",
      "uniteAdministratives",
      "budgetGeneral",
      "getPersonnaliseBudgetGeneral",
      "groupUa",
      "getPersonnaliseBudgetGeneralParBienService",
      "groupgranNature", "montantBudgetGeneral","realiteServiceFait","liquidation"
      // "montantBudgetGeneral"
      // "chapitres",
      // "sections"
       
    ]),
     marcheMandat() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_marche;
      }
      return 0
        }
      };
    },
afficherTypeFacture() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.typfacture_id;
      }
      return 0
        }
      };
    },
 
       afficheFactureProformaEmetteur() {
      return id => {
        if (id != null && id != "") {
          return this.getMandatPersonnaliser.filter(
            element => element.marche_id == id  &&  this.afficherTypeFacture(element.facture_id) == 8
          );
        }
      };
    },
    afficherNumeroDemandeEngagemnt() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_demande_engage;
      }
      return 0
        }
      };
    },
afficherNumeroEngagemnt() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.engagements.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.numero_engage;
      }
      return 0
        }
      };
    },
      },
 
      methods:{ 

          ...mapActions('bienService',[  "ajouterAvenant",
      "modifierAvenant",
      "supprimerAvenant",]),
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

afficheFactureProforma() {
      return id => {
        if (id != null && id != "") {
          return this.getMandatPersonnaliser.filter(
            element => element.marche_id == id && this.AfficheTypeFacture(element.facture_id) == 8
          );
        }
      };
    },
AfficheTypeFacture() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getFacturePersonnaliser.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.typfacture_id;
      }
      return 0
        }
      };
    },

     afficherModalAjouterTitre() {
      this.$("#exampleModalAvenant").modal({
        backdrop: "static",
        keyboard: false
      });
    },
       ajouterTypeTexteLocal() {
      var nouvelObjet = {
      ...this.formData,
      marche_id :this.macheid,
   
       };
      this.ajouterAvenant(nouvelObjet);
this.$("#exampleModalAvenant").modal('hide');
     
    },
afficherModalModifierTypeTexte(index) {

      this.$("#modificationModalAvenant").modal({
        backdrop: "static",
        keyboard: false
      });

     
      this.editAvenant = this.afficheMarcheAvenant(this.macheid)[index];
    },
    modifierTypeTexteLocal() {
      var nouvelObjet = {
      ...this.editAvenant,
      marche_id :this.macheid,
   
       };
      this.modifierAvenant(nouvelObjet);
this.$("#modificationModalAvenant").modal('hide');
      // this.editTypeTexte = {
      //   code: "",
      //   libelle: ""
      // };
       
    },
formatageSomme:formatageSomme,

 formaterDate(date) {
              return moment(date, "YYYY-MM-DD").format("DD/MM/YYYY");
            },
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
.tailAvenant{
  width: 75%;
   margin: 0 -40%;
}
</style>