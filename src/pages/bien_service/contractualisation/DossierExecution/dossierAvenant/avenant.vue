

<template>

<div>
<div id="exampleModalAvenant" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Ajouter Avenant</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">Marché</label>
            <div class="controls">
              <input
                type="text"
                :value="afficheNumeroMarcheAttribuer(macheid)"
                
                class="span"
               readonly
              />
              
              
            </div>
            </div>
            <div class="control-group">
            <label class="control-label">Type Acte finnancier</label>
            <div class="controls">
              <select v-model="formData.type_acte_financier">
                      <option
                        v-for="typeUniteA in typeActeEffetFinanciers"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
            </div>
            </div>
              <div class="control-group">
            <label class="control-label">Numero avenant</label>
            <div class="controls">
              <input
                type="text"
                v-model="formData.numero_avenant"
                class="span"
               
              />
              {{macheid}}
            </div>
          </div>
            <div class="control-group">
            <label class="control-label">Objet</label>
            <div class="controls">
              <textarea rows="2"  v-model="formData.objet_avenant"  class="span" type="text">

              </textarea>
             
             
              
            </div>
          </div>
         
          <div class="control-group">
            <label class="control-label">Montant</label>
            <div class="controls">
              <input
                type="number"
                v-model="formData.montant_avenant"
                class="span"
               
              />
            </div>
          </div>
            <div class="control-group">
            <label class="control-label">Date avenant</label>
            <div class="controls">
              <input
                type="date"
                v-model="formData.date_avenant"
                class="span"
               
              />
            </div>
          </div>
            
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterTypeTexteLocal"
          class="btn btn-primary"
          href="#"
        
        >Valider</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <div id="modificationModalAvenant" class="modal hide">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier Avenant</h3>
      </div>
      <div class="modal-body">
        <form class="form-horizontal">
          <div class="control-group">
            <label class="control-label">Marché</label>
            <div class="controls">
            <input
                type="text"
                :value="afficheNumeroMarcheAttribuer(macheid)"
                
                class="span"
               readonly
              />
              
            </div>
          </div>
           <div class="control-group">
            <label class="control-label">Type Acte finnancier</label>
            <div class="controls">
              <select v-model="editAvenant.type_acte_financier">
                      <option
                        v-for="typeUniteA in typeActeEffetFinanciers"
                        :key="typeUniteA.id"
                        :value="typeUniteA.id"
                      >{{typeUniteA.libelle}}</option>
                    </select>
            </div>
            </div>
              <div class="control-group">
            <label class="control-label">Numero avenant</label>
            <div class="controls">
              <input
                type="text"
                v-model="editAvenant.numero_avenant"
                class="span"
               
              />
            </div>
          </div>
             <div class="control-group">
            <label class="control-label">Objet</label>
            <div class="controls">
               <textarea rows="2"  v-model="editAvenant.objet_avenant"  class="span" type="text">

              </textarea>
            </div>
          </div>
          
          <div class="control-group">
            <label class="control-label">Montant</label>
            <div class="controls">
              <input
                type="number"
                v-model="editAvenant.montant_avenant"
                class="span"
               
              />
            </div>
          </div>
            <div class="control-group">
            <label class="control-label">Date avenant</label>
            <div class="controls">
              <input
                type="date"
                v-model="editAvenant.date_avenant"
                class="span"
               
              />
            </div>
          </div>
           
        </form>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierTypeTexteLocal(editAvenant)"
          class="btn btn-primary"
          href="#"
        
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
                
               
                 
                      <table class="table table-bordered table-striped" v-if="macheid">
                                    <thead>
                                   <tr>
                    <th>Marché</th>
                      <th>Type acte financier</th>
                        <th>Numéro avenant</th>
                    <th>Objet Avenant</th>
                    <th>Montant Avenant</th>
                     <th>Date Avenant</th>
                    
                    <th>Action</th>
                  </tr>
                                    </thead>
                                    <tbody>
                                   
                 <tr class="odd gradeX" v-for="(type, index) in afficheMarcheAvenant(macheid)" :key="type.id">
                    <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{afficheNumeroMarcheAttribuer(type.marche_id) || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{afficheTypeActeFinancier(type.type_acte_financier) || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.numero_avenant || 'Non renseigné'}}</td>
                     <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{type.objet_avenant || 'Non renseigné'}}</td>
                    <td style="text-align: center"
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formatageSomme(parseFloat(type.montant_avenant)) || 0}}</td>
                    <td
                      @dblclick="afficherModalModifierTypeTexte(index)"
                    >{{formaterDate(type.date_avenant) || 'Non renseigné'}}</td>
                   

                    <td>
                      <button class="btn btn-danger" @click="supprimerAvenant(type.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    
                      <td style="font-weight:bold;">Total Avenant</td>
                    <td style="text-align: center;color:red;font-weight:bold;">{{formatageSomme(parseFloat(montantAvenantParMarche(this.macheid)))}}</td>
                    <td></td>
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
    afficheTypeActeFinancier() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.typeActeEffetFinanciers.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return ""
        }
      };
    },
    montantAvenantParMarche: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.avenants.filter(normeEquipe => normeEquipe.marche_id == id).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.montant_avenant)
                        },valInite);
                    }
                }
            },
    afficheMarcheAvenant() {
      return id => {
        if (id != null && id != "") {
          return this.avenants.filter(
            element => element.marche_id == id
          );
        }
      };
    },
   afficheNumeroMarcheAttribuer() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.numero_marche;
      }
      return "pas_numero"
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
</style>