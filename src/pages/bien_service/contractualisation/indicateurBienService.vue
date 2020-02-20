
<template>
  <div>
  
  
    <!--///////////////////////////////////////// fin modal de modification //////////////////////////////-->
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
       <!-- <h4 v-if="marcheDetail(marcheid)" >Detail Marche : {{marcheDetail(marcheid).objet}} 
          <button class="btn btn-success btn-large" v-if="marcheDetail(marcheid).attribue==1">Marché attribué</button>
       </h4> -->
           
      <hr />
     
          <!-- <download-excel
            class="btn btn-default pull-right"
            style="cursor:pointer;"
            :fields="json_fields"
            title="Liste Types équipements"
            :data="filtre_equipement"
            name="Liste des types équipements"
          >
            <i title="Exporter en excel" ref="excel" class="icon-table">&nbsp;&nbsp;Exporter en excel</i>
          </download-excel> -->
         
          <div class="widget-box">
                <table>
                    <tr>
            <td>
                  <div class="control-group">
                                <label class="control-label">Année Budgetaire</label>
                                <div class="controls ">
                            
                          <select v-model="editMarche.unite_administrative_id" class="span">
                              <option></option>
               <option v-for="exo in exercices_budgetaires" :key="exo.id" value="exo.id">{{exo.annee}}</option>
           </select>
                                </div>
                                </div>
              </td>
              <td>
                  <div class="control-group">
                                <label class="control-label">Type marche</label>
                                <div class="controls ">
                            
                            <select v-model="editMarche.unite_administrative_id" class="span">
               <option ></option>
               <option v-for="typePas in typeMarches" :key="typePas.id"   :value="typePas.id">{{typePas.libelle}}</option>
           </select>
                                </div>
                                </div>
              </td>
              <td>
                  <div class="control-group">
                                <label class="control-label">Procedure passation</label>
                                <div class="controls ">
                            
                           <select v-model="editMarche.unite_administrative_id" class="span">
               <option></option>
               <option  v-for="propass in procedurePassations" :key="propass.id" :value="propass.id">{{propass.libelle}}</option>
           </select>
                                </div>
                                </div>
              </td>
               <td>
                  <div class="control-group">
                                <label class="control-label">Fournisseur</label>
                                <div class="controls ">
                            
                             <select v-model="editMarche.unite_administrative_id" class="span">
               <option 
               ></option>
           </select>
                                </div>
                                </div>
              </td>
              <td>
                  <div class="control-group">
                                <label class="control-label">Année Budgetaire</label>
                                <div class="controls ">
                            
                            <select v-model="editMarche.unite_administrative_id" class="span">
               <option 
               ></option>
           </select>
                                </div>
                                </div>
              </td>
              <td>
                  <div class="control-group">
                                <label class="control-label">Année Budgetaire</label>
                                <div class="controls ">
                            
                         <select v-model="editMarche.unite_administrative_id" class="span">
               <option 
               ></option>
           </select>
                                </div>
                                </div>
              </td>
                  </tr>
                      
                   </table>
                   
                   <div class="quick-actions_homepage " >
                       <br/>
                    
              <ul class="quick-actions">
                
                 <li class="bg_lb" title="Nombre Global d'équipement">
          <a href="#">
            <i class="icon-th-large"></i>
            <span class="label label-important"></span> QUANTITE GLOBAL
          </a>
        </li> 
         <li class="bg_ly" title="QUANTITE NON COUVERTE">
          <a href="#" >
            <i class=" icon-list-alt"></i>
            <span class="label label-success"></span>QTE NON COUVERTE
          </a>
        </li>
         <li class="bg_ly" title="QUANTITE COUVERTE">
          <a href="#">
            <i class=" icon-list-alt"></i>
            <span class="label label-success"></span> QTE COUVERTE
          </a>
        </li> 
        <li class="bg_lg" title="Taux QUANTITE COUVERTE">
          <a href="#">
            <i class="icon-th"></i>
            <span class="label label-warning"></span>TAUX QTE COUVERTE
          </a>
        </li>
         <li class="bg_lg" title="Taux QUANTITE NON COUVERTE">
          <a href="#">
            <i class="icon-th"></i>
            <span class="label label-warning"></span>TAUX QTE NON COUVERTE
          </a>
        </li>
         <li class="bg_lg" title="Taux QUANTITE NON COUVERTE">
          <a href="#">
            <i class="icon-th"></i>
            <span class="label label-warning"></span>TAUX QTE NON COUVERTE
          </a>
        </li>
              </ul>
            </div>
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>INDICATEURS BIENS SERVICES</h5>
              <div align="right">
                Search:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
            
                <thead>
                  <tr>
                      <th>Reference marché</th>
                      <th>Numero marché</th>
                      <th>Type marché</th>
                      <th>Type passation</th>
                      <th>Objet marché</th>
                    <th>Fournisseur</th>
                      <th>Montant Réel</th>
                    <th>Montant mandat</th>
                    <th>Montant facturé</th>
                    <th>Reste a payé</th>
                    
                    
                  
                    
                  
                  </tr>
                </thead>
                <tbody >
                  
                </tbody>
              </table>
              
            </div>
          </div>
       
    </div>

    <!-- <fab :actions="fabActions" @cache="afficherModalAjoutTypaPrestation" main-icon="apps" bg-color="green"></fab> -->
 <button style="display:none;" v-shortkey.once="['ctrl', 'f']" @shortkey="afficherModalAjoutTypaPrestation()">Open</button>
      <button style="display:none;" v-shortkey.once="['ctrl', 'e']" @shortkey="ExporterEnExel()">Open</button>
<!-- <fab :actions="fabActions1" @cache="afficherModalModifierTypeTexte" bg-color="red"></fab> -->
<notifications  />
  </div>
</template>
  
<script>
 import { mapGetters, mapActions } from "vuex";
 import { formatageSomme } from "../../../../src/Repositories/Repository";
export default {
  name:'type facture',
  data() {
    return {
      fabActions: [
        {
          // name: "cache",
          // icon: "add"
        }

      
      ],
    //   json_fields: {
    //     CODE: "code",
    //     libelle: "libelle"
    //   },

      formData: {
            objet:"",
            reference_marche:"",
            montant_marche:"",
                type_marche_id:"",
                unite_administrative_id:"",
                grdnature_id:"",
                activite_id:""
        
      },
      editMarche: {
        	 objet:"",
            reference_marche:"",
            montant_marche:"",
                type_marche_id:"",
                unite_administrative_id:""
      },
      search: ""
    };
  },

  computed: {
      ...mapGetters("bienService", ['acteEffetFinanciers','marches','typeMarches', 'getMarchePersonnaliser',
     "montantMarche", "printMarcheNonAttribue","procedurePassations","typeTypeProcedures","montantMarcheReel"]),

     ...mapGetters("uniteadministrative",['uniteAdministratives',"budgetGeneral",
      "getPersonnaliseBudgetGeneral","groupUa","groupgranNature","getPersonnaliseBudgetGeneralParBienService",
      "montantBudgetGeneral", ]),
       ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
 ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires']),


afficheMontantReelMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.acteEffetFinanciers.find(qtreel => qtreel.marche_id == id);

      if (qtereel) {
        return qtereel.montant_act;
      }
      return 0
        }
      };
    },







    marcherAttribuerFiltre()  {
     
        const searchTerm = this.search.toLowerCase();

return this. marcherAttribuer.filter((item) => {
  
     return item.objet.toLowerCase().includes(searchTerm) 
     
    

  
  


   }
)
    },
  
    
    deverouGrandNature() {
      return this.formData.unite_administrative_id == "";
    }, 
   
     deveroueconomiq() {
      return this.formData.activite_id == "";
    },
     economiqueDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseBudgetGeneralParBienService.filter(
            element => element.ua_id == id
          );
        }
      };
    },
    

    marcherAttribuer(){
      return this.getMarchePersonnaliser.filter(recuper => recuper.attribue == 1)
      
    },
    // MontatantImputationBudget() {
      
    //   const norme = this.getPersonnaliseBudgetGeneral.find(normeEquipe => normeEquipe.economique_id == this.formData.Economique);

    //   if (norme) {
    //     return norme.Dotation_Initiale;
    //   }
    //   return 0
    // },
  
   
exoEnCours(){
return this.exercices_budgetaires.filter(element => element.encours == 1)
},
anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },


    procedurePassationDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.procedurePassations.filter(
            element => element.type_procedure_id == id
          );
        }
      };
    },
     activiteDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseBudgetGeneralParBienService.filter(
            element => element.ua_id == id
          );
        }
      };
    },
    deverouPassation() {
      return this.formData.typeappel_id == "";
    }, 
     deverouPassationModi() {
      return this.editMarche.typeappel_id == "";
    }, 
  
    

  grandeNatureDynamiques() {
     return id => {
        if (id != null && id != "") {
          return this.getPersonnaliseBudgetGeneralParBienService.filter(
            element => element.ua_id == id
          );
        }
      };
    },










  
     ImputationBudgetModifier() {
      
      const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.afficheEconomique.id == this.editMarche.economique_id);

      if (norme) {
        return norme.codebudget;
      }
      return 0
    },
    // ImputationBudgetModif() {
      
    //   const norme = this.getPersonnaliseBudgetGeneralParBienService.find(normeEquipe => normeEquipe.economique_id == this.editMarche.Economique);

    //   if (norme) {
    //     return norme.codebudget;
    //   }
    //   return 0
    // },
    MontatantImputationBudget() {
      
      const norme = this.getPersonnaliseBudgetGeneral.find(normeEquipe => normeEquipe.economique_id == this.formData.Economique);

      if (norme) {
        return norme.Dotation_Initiale;
      }
      return 0
    },
  },
  methods: {
    ...mapActions("bienService", ['ajouterMarche','modifierMarche',
    'supprimerMarche'
     
    ]),
    //afiicher modal ajouter
    afficherModalAjoutTypaPrestation() {
      this.$("#exampleModal").modal({
        backdrop: "static",
        keyboard: false
      });
    },
    // fonction pour vider l'input ajouter
    ajouterModalTypePrestationLocal(){
      
       var nouvelObjet = {
      ...this.formData,
      imputation :this.ImputationBudget
       };
this.ajouterMarche(nouvelObjet)
this.formData = {
	          objet:"",
            reference_marche:"",
            montant_marche:"",
                type_marche_id:"",
                unite_administrative_id:"",
                imputation:"",
                	activite_id:""
}

    },
    formatageSomme:formatageSomme,
    // afficher modal de modification
    afficherModalModifierTypePrestation(index) {
      this.$("#modificationModal").modal({
        backdrop: "static",
        keyboard: false
      });

      this.editMarche = this.marcherAttribuerFiltre[index];
    },
    // fonction pour vider l'input modification
    modifierModalTypeprestationLocal(){
      this.modifierMarche(this.editMarche)
      this.$('#modificationModal').modal('hide');
    },
    
    // alert() {
    //   console.log("ok");
    // },
     ExporterEnExel(){
      this.$refs.excel.click()
    }
  }
};
</script>

<style scoped>
.taillModal{
  width: 980px;
   margin: 0 -25%;
}
</style>