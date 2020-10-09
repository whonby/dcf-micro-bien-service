budgetParUa
<template>
    <div class="container-fluid">
         <div class="row-fluid">
                <div class="span12">
                    <div class="widget-box">
                        <table class="table table-bordered table-striped">
                <thead>
                 <tr>
                     <th style="width:20%;font-size:12px" >Code UA</th>
                    <th style="width:70%;font-size:12px" >Unité d'Administrative</th>
                   <th style="width:70%;font-size:12px" >Total Budget Eclaté</th>
                   
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX">
                   
                     <td style="font-size:14px">{{CodeeUniteAdministrative(detail_Ua.unitezone_id)|| 'Non renseigné'}}</td>
                     <td style="font-size:14px">{{LibelleUniteAdministrative(detail_Ua.unitezone_id)|| 'Non renseigné'}}</td>
                <td style="font-size:14px">{{formatageSomme(parseFloat(afficherListeBudgetEclateParUaSomme(detail_Ua.unitezone_id)))}}</td>
                   
                  </tr>
                  
                </tbody>
              </table>
                        <div class="widget-title">
                            <ul class="nav nav-tabs">
                               <li class="active"><a data-toggle="tab" href="#tab2078">Tout le Budget Eclate<span class="badge badge-inverse" >{{formatageSomme(parseFloat(afficherListeBudgetEclateParUaSomme(detail_Ua.unitezone_id)))}}</span></a></li>
                               <li ><a data-toggle="tab" href="#tab100">Budget par Bien et Service<span class="badge badge-info" >{{formatageSomme(parseFloat(afficherListeBudgetEclateParUaBienServiceSomme(detail_Ua.unitezone_id)))}}</span></a></li>
                                <li ><a data-toggle="tab" href="#tab10">Budget par Investissement  <span class="badge badge-success" >{{formatageSomme(parseFloat(afficherListeBudgetEclateParUaInvestissementSomme(detail_Ua.unitezone_id)))}}</span></a></li>
                                <li><a data-toggle="tab" href="#tab20">Budget par Personnel  <span class="badge badge-warning" >{{formatageSomme(parseFloat(afficherListeBudgetEclateParUaPersonnelSomme(detail_Ua.unitezone_id)))}}</span></a></li>
                                  <li><a data-toggle="tab" href="#tab99999">Budget par Transfert  <span class="badge badge-warning" >{{formatageSomme(parseFloat(afficherListeBudgetEclateParUaTransfertsSomme(detail_Ua.unitezone_id)))}}</span></a></li>
                            </ul>
                        </div>
                        <div class="widget-content tab-content">
        <div id="tab99999" class="tab-pane">
                              <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Budget par Transfert</h5>
              <!-- <div align="right">
                Recherche Par numéro de Transfert:
                <input type="search"  v-model="search" />
              </div> -->
            </div>
                             <table class="table table-bordered table-striped">
                <thead>
                 <tr>
                     <th style="width:10%;" >Exercice Budgétaire</th>
                    
                     
                    <th style="width:50%;">Ligne économique</th>
                     <th style="width:12%;" >Grande Nature</th>
                      <th style="width:20%;">Dotation </th>
                  
                     <th>Action</th>
                  </tr>
              </thead>
                <tbody>
              <tr class="odd gradeX" v-for="(type, index) in afficherListeBudgetEclateParUaTransferts(detail_Ua.unitezone_id)" :key="type.id">
                   
                     <td @dblclick="afficherModalModifierTypeTexte(index)">{{type.annebudgetaire|| 'Non renseigné'}}</td>
                     
                     <td @dblclick="afficherModalModifierTypeTexte(index)">{{Codeeconomique(type.ligneeconomique_id)|| 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierTypeTexte(index)">{{afficherGrandNature(type.grandenature_id)|| 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierTypeTexte(index)" style="text-align : center">{{formatageSomme(parseFloat(type.dotation))|| 'Non renseigné'}}</td>
                     
                    <td>
                      <button class="btn btn-danger" @click="supprimerBudgetEclate(type.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                        
                      <td>
                          
                      </td>
                      <td>
                          
                      </td>
                      
                       <td style="font-weight:bold;"> TOTAL 
                      </td>
                       <td  style="text-align: center;color:red;font-weight:bold;">
                           {{formatageSomme(parseFloat(afficherListeBudgetEclateParUaTransfertsSomme(detail_Ua.unitezone_id)))}}
                           
                      </td>
                     
                     
                     
                    </tr>
                </tbody>
              </table>
                           
                        </div>

                            <div id="tab10" class="tab-pane">
                              <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Budget par Investissement</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search"  v-model="search" />
              </div> -->
            </div>
                             <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     <th style="width:10%;" >Exercice Budgétaire</th>
                    
                    <th style="width:50%;">Ligne économique</th>
                     <th style="width:12%;" >Grande Nature</th>
                      <th style="width:20%;">Dotation </th>
                  
                     <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                 <tr class="odd gradeX" v-for="(type, index) in afficherListeBudgetEclateParUaInvestissement(detail_Ua.unitezone_id)" :key="type.id">
                   
                     <td @dblclick="afficherModalModifierTypeTexte(index)">{{type.annebudgetaire|| 'Non renseigné'}}</td>
                     
                     <td @dblclick="afficherModalModifierTypeTexte(index)">{{Codeeconomique(type.ligneeconomique_id)|| 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierTypeTexte(index)">{{afficherGrandNature(type.grandenature_id)|| 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierTypeTexte(index)" style="text-align : center">{{formatageSomme(parseFloat(type.dotation))|| 'Non renseigné'}}</td>
                     
                    <td>
                      <button class="btn btn-danger" @click="supprimerBudgetEclate(type.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                        
                      <td>
                          
                      </td>
                      <td>
                          
                      </td>
                      
                       <td style="font-weight:bold;"> TOTAL
                      </td>
                       <td  style="text-align: center;color:red;font-weight:bold;">
                           {{formatageSomme(parseFloat(afficherListeBudgetEclateParUaInvestissementSomme(detail_Ua.unitezone_id)))}}
                           
                      </td>
                     
                     
                     
                    </tr>
                </tbody>
              </table>
                           
                        </div>
                         <div id="tab2078" class="tab-pane active">
                             <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Budget Eclate</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search"  v-model="search" />
              </div> -->
            </div>
              <table class="table table-bordered table-striped">
                <thead>
                   <tr>
                     <th style="width:10%;" >Exercice Budgétaire</th>
                    
                     
                    <th style="width:50%;">Ligne économique</th>
                     <th style="width:12%;" >Grande Nature</th>
                      <th style="width:20%;">Dotation </th>
                  
                     <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type, index) in afficherListeBudgetEclateParUa(detail_Ua.unitezone_id)" :key="type.id">
                   
                     <td @dblclick="afficherModalModifierTypeTexte(index)">{{type.annebudgetaire|| 'Non renseigné'}}</td>
                     
                     <td @dblclick="afficherModalModifierTypeTexte(index)">{{Codeeconomique(type.ligneeconomique_id)|| 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierTypeTexte(index)">{{afficherGrandNature(type.grandenature_id)|| 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierTypeTexte(index)" style="text-align : center">{{formatageSomme(parseFloat(type.dotation))|| 'Non renseigné'}}</td>
                     
                    <td>
                      <button class="btn btn-danger" @click="supprimerBudgetEclate(type.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                        
                      <td>
                          
                      </td>
                      <td>
                          
                      </td>
                      
                       <td style="font-weight:bold;"> TOTAL
                      </td>
                       <td  style="text-align: center;color:red;font-weight:bold;">
                           {{formatageSomme(parseFloat(afficherListeBudgetEclateParUaSomme(detail_Ua.unitezone_id)))}}
                           
                      </td>
                     
                     
                     
                    </tr>
                </tbody>
              </table>
          


                        </div>
                         <div id="tab20" class="tab-pane">
                            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Budget par Personnel</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search"  v-model="search" />
              </div> -->
            </div>
                        <table class="table table-bordered table-striped">
                <thead>
                   <tr>
                     <th style="width:10%;" >Exercice Budgétaire</th>
                    <th style="width:20%;" >Unité d'Administrative</th>
                     
                    <th style="width:60%;">Ligne économique</th>
                     <th style="width:12%;" >Grande Nature</th>
                      <th style="width:15%;">Dotation </th>
                  
                     <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type, index) in afficherListeBudgetEclateParUaPersonnel(detail_Ua.unitezone_id)" :key="type.id">
                   
                     <td @dblclick="afficherModalModifierTypeTexte(index)">{{type.annebudgetaire|| 'Non renseigné'}}</td>
                     
                     <td @dblclick="afficherModalModifierTypeTexte(index)">{{Codeeconomique(type.ligneeconomique_id)|| 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierTypeTexte(index)">{{afficherGrandNature(type.grandenature_id)|| 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierTypeTexte(index)" style="text-align : center">{{formatageSomme(parseFloat(type.dotation))|| 'Non renseigné'}}</td>
                     
                    <td>
                      <button class="btn btn-danger" @click="supprimerBudgetEclate(type.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                        
                      <td>
                          
                      </td>
                      <td>
                          
                      </td>
                      
                       <td style="font-weight:bold;"> TOTAL
                      </td>
                       <td  style="text-align: center;color:red;font-weight:bold;">
                           {{formatageSomme(parseFloat(afficherListeBudgetEclateParUaPersonnelSomme(detail_Ua.unitezone_id)))}}
                           
                      </td>
                     
                     
                     
                    </tr>
                </tbody>
              </table>
                            


                        </div>
<div id="tab100" class="tab-pane ">
                                <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Budget par Bien et Service</h5>
              <!-- <div align="right">
                Recherche:
                <input type="search"  v-model="search" />
              </div> -->
            </div>
                          <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                     <th style="width:10%;" >Exercice Budgétaire</th>
                     <th style="width:50%;">Ligne économique</th>
                     <th style="width:12%;" >Grande Nature</th>
                      <th style="width:20%;">Dotation </th>
                  
                     <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="odd gradeX" v-for="(type, index) in afficherListeBudgetEclateParUaBienService(detail_Ua.unitezone_id)" :key="type.id">
                   
                     <td @dblclick="afficherModalModifierTypeTexte(index)">{{type.annebudgetaire|| 'Non renseigné'}}</td>
                     
                     <td @dblclick="afficherModalModifierTypeTexte(index)">{{Codeeconomique(type.ligneeconomique_id)|| 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierTypeTexte(index)">{{afficherGrandNature(type.grandenature_id)|| 'Non renseigné'}}</td>
                     <td @dblclick="afficherModalModifierTypeTexte(index)" style="text-align : center">{{formatageSomme(parseFloat(type.dotation))|| 'Non renseigné'}}</td>
                     
                    <td>
                      <button class="btn btn-danger" @click="supprimerBudgetEclate(type.id)">
                        <span>
                          <i class="icon icon-trash"></i>
                        </span>
                      </button>
                    </td>
                  </tr>
                  <tr>
                        
                      <td>
                          
                      </td>
                      <td>
                          
                      </td>
                      
                       <td style="font-weight:bold;"> TOTAL
                      </td>
                       <td  style="text-align: center;color:red;font-weight:bold;">
                           {{formatageSomme(parseFloat(afficherListeBudgetEclateParUaBienServiceSomme(detail_Ua.unitezone_id)))}}
                           
                      </td>
                     
                     
                     
                    </tr>
                </tbody>
              </table>


                        </div>

                    
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters,mapActions} from "vuex";
import { formatageSomme } from "../../../Repositories/Repository";
export default {
    // name: 'transfertItem',
    data() {
    return {
     
     
      search: ""
    };
    
  },
  //    props: {
  //   article: Object,
  // },
 
 computed: {
     ...mapGetters("parametreGenerauxAdministratif", [
      "chapitres",
      "sections",
      "type_Unite_admins",
      "services_gestionnaires",
      "localisations_geographiques",
      "afficheServiceGestionnaireNiveau4",
      "afficheLocalisationGeoNiveau5",
      "natures_sections"
    ]),
...mapGetters("parametreGenerauxAdministratif", [
      
      "sections",
      "type_Unite_admins",
      "plans_programmes",
      "natures_sections",
      "grandes_natures",
      "afficheNiveauPlanProg",
      "exercices_budgetaires"
    ]),
    
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
    ...mapGetters("parametreGenerauxFonctionnelle", [
      "plans_fonctionnels",
      "afficheNiveauPlanFonctionnel"
     
    ]),
    ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),

    ...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
  ...mapGetters('personnelUA', ['all_acteur_depense',  'fonctions']),
...mapGetters('bienService', ['motifDecisions']),
  
afficherListeBudgetEclateParUa() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id);

        }
      };
    },
  afficherListeBudgetEclateParUaSomme() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);

        }
      };
    },
    afficherListeBudgetEclateParUaBienService() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id ==5);

        }
      };
    },
  afficherListeBudgetEclateParUaBienServiceSomme() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id ==5).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);

        }
      };
    },
    afficherListeBudgetEclateParUaPersonnel() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id ==2);

        }
      };
    },
  afficherListeBudgetEclateParUaPersonnelSomme() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id ==2).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);

        }
      };
    },
    afficherListeBudgetEclateParUaInvestissement() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id ==7);

        }
      };
    },
  afficherListeBudgetEclateParUaInvestissementSomme() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id ==7).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);

        }
      };
    },
    afficherListeBudgetEclateParUaTransferts() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id ==3);

        }
      };
    },
  afficherListeBudgetEclateParUaTransfertsSomme() {
      return id => {
        if (id != null && id != "") {
           return this.budgetEclate.filter(qtreel => qtreel.uniteadministrative_id == id && qtreel.grandenature_id ==3).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.dotation), 0).toFixed(0);

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
  
  
  afficherDecision() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.motifDecisions.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
 filtre_Historique() {
      const st = this.search.toLowerCase();
      return this.historiquetransferts.filter(type => {
        return (
          type.num_transfert.toLowerCase().includes(st) 
         
         
           
          
        );
      });
    },

 
 filtre_HistoriqueMontant() {
      const st = this.search.toLowerCase();
      return this.historiquetransferts.filter(type => {
        return (
          type.num_transfert.toLowerCase().includes(st) 
         
           
          
        );
      }).reduce((prec,cur) => parseFloat(prec) + parseFloat(cur.montant_total_contrat), 0).toFixed(2);
    },







     afficherLocalisation() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.afficheLocalisationGeoNiveau5.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
      }
      return 0
        }
      };
    },
         afficherActeurDepense() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.all_acteur_depense.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.matricule.concat('  ', qtereel.nom,'  ',qtereel.prenom);
      }
      return 0
        }
      };
    },
   afficherDestinataire() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.uniteZones.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.description_localisation;
      }
      return 0
        }
      };
    },
     afficherUa() {
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
     afficherGrandNature() {
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
    afficherTransfert() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getPersonnaliseBudgetGeneralParTransfert.find(qtreel => qtreel.afficheEconomique.id == id);

      if (qtereel) {
        return qtereel.afficheEconomique.libelle;
      }
      return 0
        }
      };
    },
    afficherCodeTransfert() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.getPersonnaliseBudgetGeneralParTransfert.find(qtreel => qtreel.afficheEconomique.id == id);

      if (qtereel) {
        return qtereel.afficheEconomique.code;
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
    formatageSomme:formatageSomme
  }
}
</script>
    