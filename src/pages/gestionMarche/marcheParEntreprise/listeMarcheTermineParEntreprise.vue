reference_marche
<template>
  <div>
      <div class="row-fluid">
        <div class="span12">
        
          <div class="widget-box">
            <div class="widget-title">
              <span class="icon">
                <i class="icon-th"></i>
              </span>
              <h5>Marche</h5>
             
            </div>
            <div class="widget-content nopadding">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                                            
                                            <th>Année</th>
                                           
                                            <th>UA</th>
                                            <th>Type marche</th>
                                           <th>Numero marché</th>
                                            <th>Objet marche</th>
                                            <th>Montant reel</th>
                                            
                                           
                                        </tr>
                </thead>
                <tbody>
                   <tr class="odd gradeX" v-for="entrep in 
                listeMarcheEnTermineParEntreprise(idEntreprise)"
                 :key="entrep.id">
                  <td>{{afficheAnneeDuMarche(entrep.marche_id) || 'Non renseigné'}}</td>
                   <td>{{afficheLibelleUa(afficheIdUA(entrep.marche_id)) || 'Non renseigné'}}</td>
                   <td>{{afficheLibelleTypeMarche(afficheIdTypeMarche(entrep.marche_id)) || 'Non renseigné'}}</td>
                   <td>{{afficheNumeroMarche(entrep.marche_id) || 'Non renseigné'}}</td>
                   <td>{{conversionMajiscule(afficheObjetMarche(entrep.marche_id)) || 'Non renseigné'}}</td>
                   <td style="color:red;font-size:14px;text-align:center">{{formatageSomme(parseFloat(afficheMontantReel(entrep.marche_id))) || 'Non renseigné'}}</td>
                          
                         
                   </tr>
                    <tr>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td></td>
                     <td style="color:red;font-size:14px;text-align:center">MONTANT TOTAL</td>
                     <td style="color:red;font-size:14px;text-align:center">{{formatageSomme(parseFloat(montantToutMarcheTermineParEntrep(idEntreprise)))}}</td>
                   </tr>
                </tbody>
              </table>
              
            </div>
          </div>
        </div>



      </div>
   

    
    
  </div>
</template>
  
<script>
 import { mapGetters, mapActions } from "vuex";
import { formatageSomme } from "../../../Repositories/Repository";
//  import {admin,dcf,noDCfNoAdmin} from '../../../src/Repositories/Auth';
export default {
  
  data() {
    return {
    

      
     
    };
  },
props:["idEntreprise"],
  computed: {
     ...mapGetters("bienService", ["groupeEntreprise",'mandats','getMandatPersonnaliserVise','getActeEffetFinancierPersonnaliser45','getActeEffetFinancierPersonnaliser',
     'acteEffetFinanciers','montantPlanification','montantContratualisation','afficheContratualisation','affichePlanifier',
     'nombremarchesExecute',
     'AfficheMarcheNonAttribue','nombreTotalMarche','marches','typeMarches', 'getMarchePersonnaliser',
      "printMarcheNonAttribue","procedurePassations","typeTypeProcedures",
     "montantComtratualisation","text_juridiques", "gettersOuverturePersonnaliser", "typeActeEffetFinanciers"]),


     ...mapGetters("uniteadministrative",['getterligneExempter','uniteAdministratives',"budgetGeneral",
      "getPersonnaliseBudgetGeneral","groupUa","groupgranNature","getPersonnaliseBudgetGeneralParBienService",
      "montantBudgetGeneral", ]),
       ...mapGetters('parametreGenerauxActivite', ['structures_activites', 
  'plans_activites','afficheNiveauAction','afficheNiveauActivite']),
...mapGetters("parametreGenerauxBudgetaire",["plans_budgetaires","derniereNivoPlanBudgetaire"]),
 ...mapGetters('parametreGenerauxAdministratif', ['exercices_budgetaires',"grandes_natures"]),
   ...mapGetters("gestionMarche", ['entreprises','secteur_activites']),
   ...mapGetters('parametreGenerauxSourceDeFinancement', ['sources_financements', 
  'types_financements']) ,

  ...mapGetters("Utilisateurs", ["user","getterUtilisateur","getterAffectation","getterUniteAdministrativeByUser"]),
...mapGetters("parametreGenerauxAdministratif", ["getterformeJuridique","getterregimeImpositions","getterplan_pays"]),
   
   afficheMarcheGestionSib() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.sib;
      }
      return 0
        }
      };
    },
    listeMarcheEnTermineParEntreprise: function () {
                return id => {
                    if (id != "") {
                      // console.log("Marche leste acte effect finnancier")
                        return this.acteEffetFinanciers.filter(idmarche => idmarche.entreprise_id == id && this.afficheAnneeDuMarche(idmarche.marche_id)== this.anneeAmort && idmarche.entreprise_id != null && this.afficheEtatMarche(idmarche.marche_id)== 5 && this.afficheMarcheGestionSib(idmarche.marche_id)==0)
                    }
                }
            },

                   conversionMajiscule() {
      return (libelle) => {
        if (!libelle) return null;
        return libelle.toLocaleUpperCase();
      };
    },
               montantToutMarcheTermineParEntrep: function () {
                return id => {
                    if (id != "") {
                      // console.log("Marche leste acte effect finnancier")
                        return this.acteEffetFinanciers.filter(idmarche => idmarche.entreprise_id == id && this.afficheAnneeDuMarche(idmarche.marche_id)== this.anneeAmort && idmarche.entreprise_id != null && this.afficheEtatMarche(idmarche.marche_id)== 5 && this.afficheMarcheGestionSib(idmarche.marche_id)==0).reduce((prec, cur) => parseFloat(prec) + parseFloat(cur.montant_act), 0)
                    }
                }
            },
   
   anneeAmort() {
      
      const norme = this.exercices_budgetaires.find(normeEquipe => normeEquipe.encours == 1);

      if (norme) {
        return norme.annee;
      }
      return 0
    },
    afficheAnneeDuMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.exo_id;
      }
      return 0
        }
      };
    },
    afficheEtatMarche() {
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


 afficheIdUA() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.unite_administrative_id;
      }
      return 0
        }
      };
    },
afficheLibelleUa() {
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
    

    afficheIdTypeMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.marches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.type_marche_id;
      }
      return 0
        }
      };
    },
afficheLibelleTypeMarche() {
      return id => {
        if (id != null && id != "") {
           const qtereel = this.typeMarches.find(qtreel => qtreel.id == id);

      if (qtereel) {
        return qtereel.libelle;
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
     afficheMontantReel() {
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
  },
  methods: {
    ...mapActions("bienService", ['ajouterMarche','modifierMarche','modifierMarcheBascule',
    'supprimerMarche','modifierActeEffetFinancier',"getMarche","getActeEffetFinancier"
     
    ]),
    
    formatageSomme:formatageSomme
  }

};
</script>

<style scoped>
.taillModal{
  width: 1080px;
   margin: 0 -25%;
   
}
.taillMarche{
  width: 96%;
   margin: 0 -48%;
   
}
.grdirModalActeEffet{
     width: 1200px;
 margin: 0 -530px;
 height: 550px;

}
</style>
