
<template>

<div>
    
    
       <div class="modal-header" >
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Eclatement du Budget</h3>
      </div>
      <div class="modal-body" :value="fonctionTest()">
        
        <table class="table table-bordered table-striped">
         
            <tr>
               <td>
                <div class="control-group">
                  <label class="control-label">Exercice budgetaire</label>
                  <div class="controls">
                       <input
                      type="text"
                    :value="anneeAmort"
                      class="span5"
                     readonly
                      
                    />
                   
                  </div>
                </div>
              </td>
              
               <td>
                <div class="control-group">
                  <label class="control-label">UA Réceptrice</label>
                  <div class="controls">
                     
                            <input
                      type="text"
                   :value="libelleUAdministrative(detail_Ua.unitezone_id)"
                      class="span5"
                     readonly
                      
                    />
                  </div>
                </div>
              </td>
               <td colspan="">
                <div class="control-group">
                  <label class="control-label">Budget Restant</label>
                  <div class="controls">
                       <input
                      type="text"
                   :value="RestantMontantTransferer"
                      class="span5"
                     readonly
                      
                    />
                   
                  </div>
                </div>
              </td>
             </tr>
              <tr>
               
               <td>
                <div class="control-group">
                  <label class="control-label">Ligne Economique</label>
                  <div class="controls">
                    <select v-model="formData.ligneeconomique_id" class="span5">
                     <option
                        v-for="Bgeneral in recupererDernierNiveauPlanEconomique(calculerTaillerStructureEconomique)"
                        :key="Bgeneral.id"
                        :value="Bgeneral.id"
                      >{{Bgeneral.code}}-{{Bgeneral.libelle}}</option>
                    </select>

                    
                  </div>
                </div>
              </td>
               <td>
                <div class="control-group">
                  <label class="control-label">Grande Nature</label>
                  <div class="controls">
                    <select v-model="formData.grandenature_id" class="span5">
                       <option
                        v-for="gdenature in grandes_natures"
                        :key="gdenature.id"
                        :value="gdenature.id"
                      >{{gdenature.code}} - {{gdenature.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
              <td colspan="">
                <div class="control-group">
                  <label class="control-label">Dotation</label>
                  <div class="controls">
                       <input
                      type="text"
                   
                      class="span5"
                     v-model="formData.dotation"
                      
                    />
                   
                  </div>
                </div>
              </td>
              
             </tr>
            
              <tr>
                 
              </tr>
             
      
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="ajouterUniteAdministrativeLocal(formData)"
          class="btn btn-primary"
          href="#"
         v-if="RestantMontantTransferer!=0"
        >Valider</a>
       <a
                          @click.prevent="afficherModalListePersonnel()"
                          class="btn"
                          href="#"
                        >Fermer</a>
      </div>
</div>
</template>
  
<script>

import { mapGetters, mapActions } from "vuex";

import {admin,dcf,cf,noDCfNoAdmin} from "../../../../src/Repositories/Auth"
  // import {  ModelListSelect } from 'vue-search-select'
  //   import 'vue-search-select/dist/VueSearchSelect.css'
import { formatageSomme } from "../../../../src/Repositories/Repository";
export default {
 
  name:'typetext',
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
        CODE: "code",
        LIBELLE: "libelle"
      },
      formData: {
        
      },
      editBudgetEclate: {
        
      },
      search: ""
    };
  },

  computed: {
        ...mapGetters("uniteadministrative", [
      "directions",
      "servicesua",
      "fonctionsua",
      "getPersonnaliseBudgetGeneral",
      "montantBudgetGeneral",
      "uniteZones",
      "getPersonnaliseBudgetGeneralParTransfert",
      "uniteAdministratives",
      "jointureUaChapitreSection",
      "budgetEclate",
      "GroupeUaReceptrice",
      "transferts"
      // "chapitres",
      // "sections"
    ]),
    ...mapGetters("bienService", ['modepaiements','getMandatPersonnaliserVise','getMandatPersonnaliser','choixprocedure','acteDepense',"getMarchePersonnaliser","appelOffres","getFacturePersonnaliser",
                "lots","modePassations", "procedurePassations","getterDossierCandidats","marches",
                "getterOffreFinanciers","gettersOffreTechniques","getterLettreInvitation","typeFactures",
                "getterMandate","getterCojos","conditions","getterAnalyseDossiers","typeAnalyses","getterDemandeAno",
                "documentProcedures","getterAnalyseDMP","getterAnoDMPBailleur" ,"getterObseravtionBailleurs",
                 "typeActeEffetFinanciers", "analyseDossiers","text_juridiques", "livrables","motifDecisions",
                "getActeEffetFinancierPersonnaliser", "acteEffetFinanciers",'getEngagementPersonnaliser',"engagements","getEngagementPersonnaliser1","mandats","avenants","getterActeEffetFinanciers"]),

    ...mapGetters("parametreGenerauxAdministratif", [
      
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires",
      "afficheLocalisationGeoNiveau5"
    ]),
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "plans_fonctionnels",
      "afficheNiveauPlanFonctionnel"
     
    ]),
    ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

    ...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire","structures_budgetaires"]),
 
 ...mapGetters('personnelUA', ['all_acteur_depense']),
 admin:admin,
      dcf:dcf,
        cf:cf,
        noDCfNoAdmin:noDCfNoAdmin,
      ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
    // BudgetEchateParUa() {
    //   const st = this.search.toLowerCase();
    //   return this.budgetEclate.filter(type => {
    //     return (
         
    //       type.uabudget_eclate.libelle.toLowerCase().includes(st)
    //     );
    //   });
    // },

    UaRecuTransfert() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.GroupeUaReceptrice.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unitezone_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect
          
        }
        return this.GroupeUaReceptrice

    },

CodeeUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code;
      }
      return 0
        }
      }
    },
    LibelleUniteAdministrative() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteAdministratives.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      }
    },









    BudgetEchateParUa() {
      const st = this.search.toLowerCase();
      return this.budgetEclate.filter(items => {
        return (
          items.uabudget_eclate.libelle.toLowerCase().includes(st)
        );
      })
      
    },
     
    budgetParUa() {
      const st = this.search.toLowerCase();
      return this.getPersonnaliseBudgetGeneral.filter(items => {
        return (
          items.uabudget_eclate.libelle.toLowerCase().includes(st)
         
         
        );
      }).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.Dotation_Initiale), 0).toFixed(2);
      
    },
    afficherGdeNatureDep() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.grandes_natures.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
    Codeeconomique() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.plans_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code.concat('  ', qtereel.libelle);
      }
      return 0
        }
      }
    },
    
recupererDernierNiveauPlanEconomique() {
      return id => {
        if (id != null && id != "") {
           return this.plans_budgetaires.filter(qtreel => this.RecupererNiveauStructureEconomique(qtreel.structure_budgetaire_id) == id);
      
        }
      };
    },
   
   RecupererNiveauStructureEconomique() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.structures_budgetaires.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.niveau;
      }
      return 0
        }
      };
    },
   
   calculerTaillerStructureEconomique(){
     return this.structures_budgetaires.length
   },

sommeTotalDisponible() {
     return id => {
        if (id != null && id != "") {
          return this.transferts.filter(
            element => element.unitezone_id == id
          ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_total_contrat), 0).toFixed(0);
        }
        return 0
      };
    },
sommeTotalConsomme() {
     return id => {
        if (id != null && id != "") {
          return this.budgetEclate.filter(
            element => element.uniteadministrative_id == id
          ).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);
        }
         return 0
      };
     
    },

RestantMontantTransferer() {
      const val = parseFloat(this.sommeTotalDisponible(this.detail_Ua.unitezone_id)) - parseFloat(this.sommeTotalConsomme(this.detail_Ua.unitezone_id));
      return parseFloat(val).toFixed(0);
    },


 verroBanque() {
      return this.formData.ua_id == "";
    },

UniteAdministrative() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.uniteAdministratives.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect
          
        }
        return this.uniteAdministratives

    },
    filtre_unite_admin() {
        
        if(this.noDCfNoAdmin){
            let colect=[];
            
            this.transferts.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.unitezone_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect
          
        }
        return this.transferts

    },
    anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },
      uAReceptriceDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.GroupeUaReceptrice.filter(
            element => element[0].ua_id == id
          );
        }
      };
    },
    libelleUAdministrative() {
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
    
    
  },
  created() {
            this.marcheid=this.$route.params.id
   this.detail_Ua = this.transferts.find(
       idmarche => idmarche.unitezone_id == this.$route.params.id
   )
  
},
  methods: {
     ...mapActions("uniteadministrative", [
     
      "ajouterBudgetEclate",
      "modifierBudgetEclate",
      "supprimerBudgetEclate",
     
      // "ajouterHistoriqueBudgetGeneral"
    ]),
    fonctionTest(){
      if(this.RestantMontantTransferer==0){
        alert("Montant A Eclaté est egal a 0")
        
      }
     
    },
    afficherModalModifierExerciceBudgetaire(id){

 this.$('#exampleModal').modal({
         backdrop: 'static',
         keyboard: false
        });

        this.formData = this.GroupeUaReceptrice.find(item =>item[0].unitezone_id==id);


        
 },
 test () {
      alert('On a cliqué !');
    },
    //afiicher modal ajouter
    afficherModalAjouterTitre() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    formatageSomme:formatageSomme,
   ajouterUniteAdministrativeLocal() {
     
      if(this.RestantMontantTransferer == 0){
        alert("Pas de montant disponible")
      }
      else{
        var nouvelObjet = {
        ...this.formData,
            annebudgetaire: this.anneeAmort,
            uniteadministrative_id:this.detail_Ua.unitezone_id
         
      };
        this.ajouterBudgetEclate(nouvelObjet);

      this.formData = {
       	uniteadministrative_id:"",
      ligneeconomique_id: "",
      	grandenature_id:"",
      dotation: "",
      };
      }

      
      },
    // afficher modal de modification
    afficherModalModifierTypeTexte(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

     
      this.editBudgetEclate = this.budgetEclate[index];
    },
    // fonction pour vider l'input modification
    modifierTypeTexteLocal() {
      this.modifierTypeTexte(this.editBudgetEclate);
this.$("#modificationModal").modal('hide');
      // this.editBudgetEclate = {
      //   code: "",
      //   libelle: ""
      // };
       
    },
    supprimerBudget(id){
      this.supprimerBudgetEclate(id)
    },
     afficherModalListePersonnel(){
                this.$router.push({ name: 'BudgetEclatePrincipal' })
            },
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

.tailgrand12{
  width: 90%;
  margin: 0 -45%;
 
}

</style>
