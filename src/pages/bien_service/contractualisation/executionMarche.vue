ImputationBudgetModifier

<template>
  <div>


    <div id="modificationModal" class="modal hide taillModal">
      <div class="modal-header">
        <button data-dismiss="modal" class="close" type="button">×</button>
        <h3>Modifier marché</h3>
      </div>
      <div class="modal-body">
       <table class="table table-bordered table-striped">
          <tr>
            <td>
                  <div class="control-group">
                                <label class="control-label">Année Budgetaire</label>
                                <div class="controls ">
                            
                             <input
                type="text"
              :value="anneeAmort"
                class="span"
               readonly
              />
                                </div>
                                </div>
              </td>
               <td>
                 <div class="control-group">
            <label class="control-label">Refencence marché</label>
            <div class="controls">
              <input
                type="text"
                v-model="editMarche.reference_marche"
                class="span"
                placeholder="Saisir le libelle_type"
              />
            </div>
          </div>
              </td>
             <td colspan="2">
               <div class="control-group">
            <label class="control-label">Objet marché</label>
            <div class="controls">
              <input
                type="text"
                v-model="editMarche.objet"
                class="span4"
                placeholder="Saisir le libelle_type"
              />
            </div>
          </div>
              </td>
              
         </tr>
            <tr>
             <td>
               <div class="control-group">
            <label class="control-label" title="unite administrative">UA</label>
            <div class="controls">
            <select v-model="editMarche.unite_administrative_id" class="span">
               <option v-for="plans in groupUa" 
               :key="plans[0].id" 
               :value="plans[0].afficheUA.id">{{plans[0].afficheUA.libelle}}</option>
           </select>
            </div>
          </div>
              </td>
              <td>
                <div class="control-group">
                  <label class="control-label">Grand Nature</label>
                  <div class="controls">
                    <select v-model="editMarche.gdenature_id" :readOnly="deverouGrandNature">
                      <option
                        v-for="gdeNature in grandeNatureDynamiques(editMarche.unite_administrative_id)"
                        :key="gdeNature.id"
                        :value="gdeNature.afficheGdeNature.id"
                      >{{gdeNature.afficheGdeNature.libelle}}</option>
                    </select>
                  </div>
                </div>
              </td>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Activite</label>
                  <div class="controls">
                    <select v-model="editMarche.activite_id" >
                     <option
                        v-for="activite in activiteDynamiques(editMarche.unite_administrative_id)"
                        :key="activite.id"
                        :value="activite.afficheActivite.id"
                      >{{activite.afficheActivite.code}} - {{activite.afficheActivite.libelle}}</option>
                    </select>
                    
                  </div>
                   
                </div>
              </td>
               <td>
              
               <div class="control-group">
                  <label class="control-label">Classification Economique</label>
                  <div class="controls">
                    <select v-model="editMarche.economique_id" :readOnly="deveroueconomiq">
                    <option
                        v-for="eco in economiqueDynamiques(editMarche.unite_administrative_id)"
                        :key="eco.id"
                        :value="eco.afficheEconomique.id"
                      >{{eco.afficheEconomique.code}} - {{eco.afficheEconomique.libelle}}</option>
                    </select>
                  </div>
                   
                </div>
              </td>
               
             
            </tr>
            <tr>
               <td colspan=2>
                 <div class="control-group">
            <label class="control-label">Imputation Budgetaire</label>
            <div class="controls">
              <input
                type="text"
                
                class="span5"
                placeholder="Saisir le Imputation"
                readonly
              />
            </div>
          </div>
              </td>
              
              <!-- <td>
                 <div class="control-group">
            <label class="control-label">Montant Imputations</label>
            <div class="controls">
              <input
                type="text"
                :value="MontatantImputationBudget"
                class="span"
                
               readonly
              />
            </div>
          </div>
              </td> -->
                
           
             <td>
              
               <div class="control-group">
            <label class="control-label">Type marché</label>
            <div class="controls">
            <select v-model="editMarche.type_marche_id" class="span">
               <option v-for="plans in typeMarches" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
            </div>
          </div>
              </td>
                <td>
                 <div class="control-group">
            <label class="control-label">Montant prévu</label>
            <div class="controls">
              <input
                type="text"
                v-model="editMarche.montant_marche"
                class="span"
                placeholder="Saisir le libelle_type"
               
              />
            </div>
          </div>
              </td>
            </tr>
            <tr>
               
             
            
             <!-- <td>
               <div class="control-group">
            <label class="control-label">Numero marché</label>
            <div class="controls">
              <input
                type="text"
                v-model="editMarche.numero_marche"
                class="span"
                placeholder="Saisir le libelle_type"
              />
            </div>
          </div>
              </td> -->
               <td colspan="2">
              
               <div class="control-group">
            <label class="control-label">Type Appel Offre</label>
            <div class="controls">
            <select v-model="editMarche.typeappel_id" class="span4">
               <option v-for="plans in typeTypeProcedures" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
            </div>
          </div>
              </td>
             <td colspan="2">
              
               <div class="control-group">
            <label class="control-label">procedure passation</label>
            <div class="controls">
           
               <select v-model="editMarche.procedure_passation_id" class="span4" :readOnly="deverouPassationModi">
               <option v-for="plans in procedurePassationDynamiques(editMarche.typeappel_id)" :key="plans.id" 
               :value="plans.id">{{plans.libelle}}</option>
           </select>
            </div>
          </div>
              </td>
            </tr>
          
            
          
        </table>
      </div>
      <div class="modal-footer">
        <a
          @click.prevent="modifierModalTypeprestationLocal(editMarche)"
          class="btn btn-primary"
          href="#"
         
        >Modifier</a>
        <a data-dismiss="modal" class="btn" href="#">Fermer</a>
      </div>
    </div>
    <!--///////////////////////////////////////// fin modal de modification //////////////////////////////-->
    <!-- End Page Header -->
    <!-- Default Light Table -->
    <div class="container-fluid">
       <!-- <h4 v-if="marcheDetail(marcheid)" >Detail Marche : {{marcheDetail(marcheid).objet}} 
          <button class="btn btn-success btn-large" v-if="marcheDetail(marcheid).attribue==1">Marché attribué</button>
       </h4> -->
           
      <hr />
      <div class="row-fluid">
        <div class="span12">
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
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Liste des marches attribués </h5>
              <div align="right">
                Search:
                <input type="search" placeholder v-model="search" />
              </div>
            </div>

            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     <th>UA</th>
                    <th>Type marché</th>
                    <th>Activité</th>
                    <th>Imputation</th>
                    <th>Ligne Budgetaire</th>
                    <th>Objet marché</th>
                    <th>Reference marché</th>
                   
                    <th>Montant Réel</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody >
                  <tr class="odd gradeX" v-for="(marche, index) in 
                  afficherlisteMarcheExecutionParDroitAccess"
                 :key="marche.id">
                 <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.objetUniteAdministrative.libelle || 'Non renseigné'}}</td>

                 <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.type_marche.libelle || 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.afficheActivite.libelle || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.imputation || 'Non renseigné'}}</td>
                    <td @dblclick="afficherModalModifierTypePrestation(index)">
                  {{marche.afficheEconomique.code || 'Non renseigné'}}- {{marche.afficheEconomique.libelle || 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.objet || 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierTypePrestation(index)">
                   {{marche.reference_marche || 'Non renseigné'}}</td>
                  
                     <td @dblclick="afficherModalModifierTypePrestation(index)" style="text-align: center;">
                   {{formatageSomme(parseFloat(afficheMontantReelMarche(marche.id))) || 'Non renseigné'}}</td>
                 




                     <div class="btn-group">

                   <!-- <router-link :to="{ name: 'DetaillMarche', params: { id: marche.id }}"
                class="btn btn-default " title="formulation de demamnde d'engagement">
                  <span class=""><i class="icon-folder-open"></i></span>
                   </router-link>  -->
 <!-- <router-link :to="{ name: 'Engagement', params: { id: marche.id }}"
                class="btn btn-default " title="Detail execution">
                  <span class=""><i class=" icon-folder-close"></i></span>
                   </router-link>  -->
<router-link :to="{ name: 'detailExecution', params: { id: marche.id }}"
                class="btn btn-default " title="Detail execution Marche">
                  <span class=""><i class="  icon-random"></i></span>
                   </router-link> 

            <!-- <router-link :to="{ name: 'DetailLivrable', params: { id: marche.id }}"
                class="btn btn-default " title="Detail livrable">
                  <span class=""><i class=" icon-plus"></i></span>
                   </router-link> -->


              <button @click.prevent="supprimerMarche(marche.id)"  class="btn btn-danger ">
                <span class=""><i class="icon-trash"></i></span></button>
             
            </div>

                       </tr>
                        <tr>
                     
                      
                      <td>
                          
                      </td>
                      <td>
                          
                      </td>
                       
                      <td>
                          
                      </td>
                      <td>
                          
                      </td>
                        <td>
                          
                      </td>
                      <td>
                          
                      </td>
                       <td style="font-weight:bold;"> Total Marche en execution
                      </td>
                       <td  style="text-align: center;color:red;font-weight:bold;">
                           {{formatageSomme(parseFloat(montantMarcheExecuter))}}
                           
                      </td>
                       <td>
                           
                      </td>
                       
                     
                    </tr>
                </tbody>
              </table>
              
            </div>
          </div>
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
 import {admin,dcf} from '../../../../src/Repositories/Auth';
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
      ...mapGetters("bienService", ["getActeEffetFinancierPersonnaliser45",'acteEffetFinanciers','marches','typeMarches', 'getMarchePersonnaliser',
     "montantMarche", "printMarcheNonAttribue","procedurePassations","typeTypeProcedures","montantMarcheReel"]),

     ...mapGetters("uniteadministrative",['uniteAdministratives',"budgetGeneral",
      "getPersonnaliseBudgetGeneral","groupUa","groupgranNature","getPersonnaliseBudgetGeneralParBienService",
      "montantBudgetGeneral", ]),
       ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
 ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires']),
   ...mapGetters("Utilisateurs", ["getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),

  admin:admin,
  dcf:dcf,
  

afficherlisteMarcheExecutionParDroitAccess() {
       // const st = this.search.toLowerCase();
        if (!this.admin || !this.dcf){
            let colect=[];
            this.getMarchePersonnaliser.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.objetUniteAdministrative.id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect.filter(recuper => recuper.attribue == 2 && recuper.type_marche.code_type_marche == 4 || recuper.attribue == 2 && recuper.type_marche.code_type_marche == 1)
            // return colect.filter(items => {    
            //     return (
            //         items.secti.nom_section.toLowerCase().includes(st) ||
            //         items.libelle.toLowerCase().includes(st)
            //     );
            // });
        }

        return this.getMarchePersonnaliser.filter(recuper => recuper.attribue == 2 && recuper.type_marche.code_type_marche == 4 || recuper.attribue == 2 && recuper.type_marche.code_type_marche == 1)
            // return (
            //     items.secti.nom_section.toLowerCase().includes(st) ||
            //     items.libelle.toLowerCase().includes(st)
            // );
    },




afficherMontantExecutionParDroitAccess() {
       // const st = this.search.toLowerCase();
        if (!this.admin || !this.dcf){
            let colect=[];
            this.getActeEffetFinancierPersonnaliser45.filter(item=>{
                let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
                if (val!=undefined){
                    colect.push(item)
                    return item
                }
            })
            return colect
            // return colect.filter(items => {    
            //     return (
            //         items.secti.nom_section.toLowerCase().includes(st) ||
            //         items.libelle.toLowerCase().includes(st)
            //     );
            // });
        }

        return this.getActeEffetFinancierPersonnaliser45
            // return (
            //     items.secti.nom_section.toLowerCase().includes(st) ||
            //     items.libelle.toLowerCase().includes(st)
            // );
    },
    // afficherMontantParDroitAccess() {
    //    // const st = this.search.toLowerCase();
    //     if (!this.admin || !this.dcf){
    //         let colect=[];
    //         this.montantMarcheExecuter.filter(item=>{
    //             let val=   this.getterUniteAdministrativeByUser.find(row=>row.unite_administrative_id==item.ua_id)
    //             if (val!=undefined){
    //                 colect.push(item)
    //                 return item
    //             }
    //         })
    //         return colect
    //         // return colect.filter(items => {
    //         //     return (
    //         //         items.secti.nom_section.toLowerCase().includes(st) ||
    //         //         items.libelle.toLowerCase().includes(st)
    //         //     );
    //         // });
    //     }

    //     return this.montantMarcheExecuter
    //         // return (
    //         //     items.secti.nom_section.toLowerCase().includes(st) ||
    //         //     items.libelle.toLowerCase().includes(st)
    //         // );
    // },


 afficherAttributMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.attribue;
      }
      return 0
        }
      };
    },

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

  afficheExercution(){
return this.getActeEffetFinancierPersonnaliser.filter(element => element.date_odre_service <= this.nombreJourTraitementCalucle)
},
afficheMarchExecuter(){
return this.afficheExercution.filter(element => element.indicateur_resilie != 1)
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
     affichertypeMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.typeMarches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.code_type_marche;
      }
      return 0
        }
      };
    },

    marcherAttribuer(){
      return this.getMarchePersonnaliser.filter(recuper => recuper.attribue == 2 && recuper.type_marche.code_type_marche == 4 || recuper.attribue == 2 && recuper.type_marche.code_type_marche == 1)
      
    },

    
    montantMarcheExecuter(){
  return this.afficherMontantExecutionParDroitAccess.filter(recuper => this.afficherAttributMarche(recuper.marche_id) == 2 && this.affichertypeMarche(recuper.marche.type_marche_id) == 4 && recuper.difference_personnel_bienService == 2 || this.afficherAttributMarche(recuper.marche_id) == 2 && this.affichertypeMarche(recuper.marche.type_marche_id) == 1 && recuper.difference_personnel_bienService == 2).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_act), 0)
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