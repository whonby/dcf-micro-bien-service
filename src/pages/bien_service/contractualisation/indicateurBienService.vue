
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
                            
                          <select v-model="budgetaire" class="span">
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
                            
                            <select v-model="type_marche" class="span">
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
                            
                           <select v-model="Procedure" class="span">
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
                            
                             <select v-model="entreprise" class="span">
               <option></option>
               <option  v-for="entrep in entreprises" :value="entrep.raison_sociale" :key="entrep.id">{{entrep.raison_sociale}}</option>
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
                    <th>Année</th>
                      <th>N°marché</th>
                        <th>Objet marché</th>
                      <th>Type marché</th>
                      <th>Procedure passation</th>
                    
                    <th>Fournisseur</th>
                      <th>Montant Réel</th>
                  
                    <th title="montant facturé">Mont.facturé</th>
                    <th>Solde</th>
                      <th>%payé</th>
                    
                  
                    
                  
                  </tr>
                </thead>
                <tbody >
                   <tr class="odd gradeX" v-for="type in rechercheMarcheSuivie" :key="type.id">
                   <td
                     
                    >{{type.exercice_budget || 'Non renseigné'}}</td>
                    <td
                     
                    >{{afficheNumeroMarche(type.marche_id) || 'Non renseigné'}}</td>
                     <td
                     
                    >{{afficheObjetMarche(type.marche_id) || 'Non renseigné'}}</td>
 <td
                     
                    >{{type.affichierObjetMarche.type_marche.libelle || 'Non renseigné'}}</td>
                    <td
                     
                    >{{afficheTypeProcedure(type.marche_id) || 'Non renseigné'}}</td>
                    
                    <td
                     
                    >{{type.nom_entreprise || 'Non renseigné'}}</td>
                     <td
                     
                    >{{formatageSomme(parseFloat(afficheMontantReelMarche(type.marche_id)))|| '0'}}</td>
                    <td
                     
                    >{{formatageSomme(parseFloat(sommeEgagementMandatParMarche(type.marche_id))) || '0'}}</td>
                   
                    <td
                     
                    >{{formatageSomme(parseFloat(afficheMontantReelMarche(type.marche_id)) - type.total_general) || '0'}}</td>
                     <td
                     
                    >{{(sommeEgagementMandatParMarche(type.marche_id) / (afficheMontantReelMarche(type.marche_id)) * 100).toFixed(2)|| '0'}}%</td>
                   
                  </tr>
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
 import { mapGetters} from "vuex";
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
         type_marche:"",
         entreprise:"",
      Procedure:"",
      budgetaire :"",
      search: ""
    };
  },

  computed: {
      ...mapGetters("bienService", ['getMandatPersonnaliserViseTableauBord','acteEffetFinanciers','marches','typeMarches', 'getMarchePersonnaliser',
     "montantMarche", "printMarcheNonAttribue","procedurePassations","typeTypeProcedures","montantMarcheReel"]),

     ...mapGetters("uniteadministrative",['uniteAdministratives',"budgetGeneral",
      "getPersonnaliseBudgetGeneral","groupUa","groupgranNature","getPersonnaliseBudgetGeneralParBienService",
      "montantBudgetGeneral", ]),
       ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
 ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires']),
...mapGetters('gestionMarche', ['entreprises']),

rechercheMarcheSuivie(){
      if(this.entreprise!="" || this.type_marche != ""){
          console.log(this.entreprise)
          console.log(this.type_marche)
          return this.getMandatPersonnaliserViseTableauBord.filter(item =>{
              if( item.nom_entreprise == this.entreprise || item.affichierObjetMarche.type_marche.id == this.type_marche){
                  return item
              }
             
    
          })
          
      }
    
      return this.getMandatPersonnaliserViseTableauBord
},
 sommeEgagementMandatParMarche: function () {
                return id => {
                    if (id != "") {
                      let valInite=0;
                        return  this.getMandatPersonnaliserViseTableauBord.filter(normeEquipe => normeEquipe.marche_id == id).reduce(function(total,currentVal){
                           return total + parseFloat(currentVal.total_general)
                        },valInite);
                    }
                }
            },

afficheReference() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.reference_marche;
      }
      return 0
        }
      };
    },
afficheNumeroMarche() {
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
afficheTypeMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.type_marche.libelle;
      }
      return 0
        }
      };
    },
afficheTypeProcedure() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.procedure_passation.libelle;
      }
      return 0
        }
      };
    },
afficheObjetMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.objet;
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


//     marcherTableau()  {
     
//         const searchTerm = this.editMarche.typeMarch.toLowerCase();

// return this. getMandatPersonnaliserViseTableauBord.filter((item) => {
  
//      return item.afficheTypeMarche(type.marche_id).toLowerCase().includes(searchTerm) 
     
    

  
  


//    }
// )
//     },
  
    
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
   
   formatageSomme:formatageSomme
  }
};
</script>

<style scoped>
.taillModal{
  width: 980px;
   margin: 0 -25%;
}
</style>